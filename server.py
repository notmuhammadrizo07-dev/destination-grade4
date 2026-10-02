"""
server.py - Python Backend Server with SQLite Database for Destination English Grammar Grade 4 Web App
Handles:
- Unique username registration (1 ta akkaunt nomi 2-marta ishlatilmaydi)
- User login & session management
- Progress & star score persistence
- Static file serving for web application and PDF download
"""

import http.server
import socketserver
import json
import sqlite3
import hashlib
import os
import urllib.parse
from datetime import datetime

PORT = int(os.environ.get("PORT", 8000))
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "users.db")

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        full_name TEXT NOT NULL,
        grade TEXT DEFAULT '4-sinf',
        stars INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    c.execute("""
    CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        unit_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        answers_json TEXT,
        completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(username, unit_id)
    )
    """)
    conn.commit()
    conn.close()
    print("SQLite database initialized successfully at:", DB_FILE)

def hash_pw(password):
    return hashlib.sha256(password.encode("utf-8")).hexdigest()

class DestinationRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"
        
        try:
            req_data = json.loads(body)
        except Exception:
            req_data = {}

        if parsed_path.path == "/api/register":
            username = req_data.get("username", "").strip().lower()
            password = req_data.get("password", "").strip()
            full_name = req_data.get("full_name", "").strip()
            grade = req_data.get("grade", "4-sinf").strip()

            if not username or not password or not full_name:
                self.send_json(400, {
                    "success": False,
                    "error": "Iltimos, barcha maydonlarni (ism, akkaunt nomi va parol) to'ldiring!"
                })
                return

            if len(username) < 3:
                self.send_json(400, {
                    "success": False,
                    "error": "Akkaunt nomi kamida 3 ta belgidan iborat bo'lishi kerak!"
                })
                return

            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            try:
                c.execute("""
                INSERT INTO users (username, password_hash, full_name, grade, stars)
                VALUES (?, ?, ?, ?, 0)
                """, (username, hash_pw(password), full_name, grade))
                conn.commit()
                conn.close()

                self.send_json(200, {
                    "success": True,
                    "message": "Akkaunt muvaffaqiyatli yaratildi!",
                    "user": {
                        "username": username,
                        "full_name": full_name,
                        "grade": grade,
                        "stars": 0
                    }
                })
            except sqlite3.IntegrityError:
                conn.close()
                self.send_json(409, {
                    "success": False,
                    "error": f"❌ '{username}' nomli akkaunt allaqachon mavjud! 1 ta akkaunt nomi faqat bitta foydalanuvchiga beriladi. Iltimos, boshqa nom tanlang."
                })
            return

        elif parsed_path.path == "/api/login":
            username = req_data.get("username", "").strip().lower()
            password = req_data.get("password", "").strip()

            if not username or not password:
                self.send_json(400, {
                    "success": False,
                    "error": "Akkaunt nomi va parolni kiriting!"
                })
                return

            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute("""
            SELECT username, full_name, grade, stars FROM users
            WHERE username = ? AND password_hash = ?
            """, (username, hash_pw(password)))
            user = c.fetchone()
            
            if user:
                # Get progress
                c.execute("SELECT unit_id, score, total FROM progress WHERE username = ?", (username,))
                prog_rows = c.fetchall()
                prog_dict = {r[0]: {"score": r[1], "total": r[2]} for r in prog_rows}
                conn.close()

                self.send_json(200, {
                    "success": True,
                    "message": "Tizimga muvaffaqiyatli kirdingiz!",
                    "user": {
                        "username": user[0],
                        "full_name": user[1],
                        "grade": user[2],
                        "stars": user[3],
                        "progress": prog_dict
                    }
                })
            else:
                conn.close()
                self.send_json(401, {
                    "success": False,
                    "error": "Akkaunt nomi yoki parol noto'g'ri! Agar yangi bo'lsangiz, 'Yangi Akkaunt Ochish' tugmasini bosing."
                })
            return

        elif parsed_path.path == "/api/check-username":
            username = req_data.get("username", "").strip().lower()
            if not username:
                self.send_json(400, {"success": False, "error": "Username kiritilmadi"})
                return

            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute("SELECT 1 FROM users WHERE username = ?", (username,))
            exists = c.fetchone() is not None
            conn.close()

            if exists:
                self.send_json(200, {
                    "available": False,
                    "message": "❌ Bu akkaunt nomi band! Boshqa nom tanlang."
                })
            else:
                self.send_json(200, {
                    "available": True,
                    "message": "✅ Akkaunt nomi bo'sh, ishlatishingiz mumkin!"
                })
            return

        elif parsed_path.path == "/api/save-progress":
            username = req_data.get("username", "").strip().lower()
            unit_id = req_data.get("unit_id", "").strip()
            score = int(req_data.get("score", 0))
            total = int(req_data.get("total", 20))
            answers = json.dumps(req_data.get("answers", {}), ensure_ascii=False)

            if not username or not unit_id:
                self.send_json(400, {"success": False, "error": "Ma'lumotlar to'liq emas"})
                return

            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            
            c.execute("""
            INSERT INTO progress (username, unit_id, score, total, answers_json)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(username, unit_id) DO UPDATE SET
                score = MAX(score, excluded.score),
                total = excluded.total,
                answers_json = excluded.answers_json,
                completed_at = CURRENT_TIMESTAMP
            """, (username, unit_id, score, total, answers))

            # Recalculate total stars for user
            c.execute("SELECT SUM(score) FROM progress WHERE username = ?", (username,))
            tot_stars = c.fetchone()[0] or 0
            c.execute("UPDATE users SET stars = ? WHERE username = ?", (tot_stars, username))

            conn.commit()
            conn.close()

            self.send_json(200, {
                "success": True,
                "message": "Natijangiz saqlandi!",
                "total_stars": tot_stars
            })
            return

        else:
            self.send_json(404, {"error": "API endpoint topilmadi"})

    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        if parsed_path.path == "/api/check-username":
            query = urllib.parse.parse_qs(parsed_path.query)
            username = query.get("u", [""])[0].strip().lower()
            if not username:
                self.send_json(400, {"success": False, "error": "Username kiritilmadi"})
                return

            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute("SELECT 1 FROM users WHERE username = ?", (username,))
            exists = c.fetchone() is not None
            conn.close()

            if exists:
                self.send_json(200, {
                    "available": False,
                    "message": "Bu akkaunt nomi band! Boshqa nom tanlang."
                })
            else:
                self.send_json(200, {
                    "available": True,
                    "message": "Akkaunt nomi bo'sh, ishlatishingiz mumkin!"
                })
            return

        if parsed_path.path == "/api/leaderboard":
            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute("SELECT full_name, grade, stars FROM users ORDER BY stars DESC LIMIT 10")
            rows = c.fetchall()
            conn.close()
            leaders = [{"name": r[0], "grade": r[1], "stars": r[2]} for r in rows]
            self.send_json(200, {"success": True, "leaders": leaders})
            return

        # Default route serves web_app.html, index.html serves the 70-page book
        if parsed_path.path in ["/", "/app", "/web"]:
            web_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "web_app.html")
            if os.path.exists(web_path):
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                with open(web_path, "rb") as f:
                    self.wfile.write(f.read())
                return

        super().do_GET()

def start_server():
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass
    init_db()
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), DestinationRequestHandler) as httpd:
        print("============================================================")
        print("DESTINATION GRADE 4 WEB SAYTI ISHGA TUSHDI!")
        print(f"Veb-sayt manzili: http://localhost:{PORT}")
        print(f"70 betlik Kitob: http://localhost:{PORT}/index.html")
        print(f"70 betlik PDF: http://localhost:{PORT}/Destination_English_Grammar_Grade4.pdf")
        print("============================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer to'xtatildi.")

if __name__ == "__main__":
    start_server()
