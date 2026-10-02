"""
telegram_bot.py - Destination English Grammar Grade 4 Telegram Bot
Tashqi kutubxonalarsiz (faqat Python standard library urllib orqali) ishlaydi.

Imkoniyatlari:
1. /start bosilganda:
   - Quvnoq Destination salomi
   - "📖 Darslikni Ochish (WebApp)" tugmasi
   - "📄 70 Betlik PDF Kitobni Yuklash" tugmasi
2. /pdf bosilganda:
   - Destination_English_Grammar_Grade4.pdf faylini Telegramda to'g'ridan-to'g'ri yuboradi.
"""

import os
import sys
import json
import time
import urllib.request
import urllib.parse

# BotFather dan olingan bot tokenini shu yerga qo'ying yoki muhit o'zgaruvchisiga bering
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "BOT_TOKENINGIZNI_SHU_YERGA_YOZING")
API_BASE = f"https://api.telegram.org/bot{BOT_TOKEN}"

# WebApp manzili (Render, Vercel yoki doimiy hostingdagi havola)
WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://destination-grade4.onrender.com")
PDF_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Destination_English_Grammar_Grade4.pdf")

def api_call(method, data=None):
    url = f"{API_BASE}/{method}"
    try:
        if data:
            req_data = json.dumps(data).encode("utf-8")
            req = urllib.request.Request(url, data=req_data, headers={"Content-Type": "application/json"})
        else:
            req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"API xatosi ({method}): {e}")
        return None

def send_message(chat_id, text, reply_markup=None):
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
    return api_call("sendMessage", payload)

def send_pdf(chat_id):
    if not os.path.exists(PDF_PATH):
        send_message(chat_id, "Kechirasiz, PDF fayl topilmadi.")
        return

    url = f"{API_BASE}/sendDocument"
    boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW"
    
    with open(PDF_PATH, "rb") as f:
        file_bytes = f.read()

    body = bytearray()
    # chat_id
    body.extend(f"--{boundary}\r\n".encode("utf-8"))
    body.extend(b'Content-Disposition: form-data; name="chat_id"\r\n\r\n')
    body.extend(f"{chat_id}\r\n".encode("utf-8"))
    # caption
    body.extend(f"--{boundary}\r\n".encode("utf-8"))
    body.extend(b'Content-Disposition: form-data; name="caption"\r\n\r\n')
    body.extend("📘 Destination English Grammar 4 • 70 Betlik To'liq Kitob\r\n".encode("utf-8"))
    # document
    body.extend(f"--{boundary}\r\n".encode("utf-8"))
    body.extend(b'Content-Disposition: form-data; name="document"; filename="Destination_English_Grammar_Grade4.pdf"\r\n')
    body.extend(b"Content-Type: application/pdf\r\n\r\n")
    body.extend(file_bytes)
    body.extend(b"\r\n")
    body.extend(f"--{boundary}--\r\n".encode("utf-8"))

    req = urllib.request.Request(url, data=body, headers={
        "Content-Type": f"multipart/form-data; boundary={boundary}"
    })
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print("PDF yuborishda xatolik:", e)

def main():
    if BOT_TOKEN == "BOT_TOKENINGIZNI_SHU_YERGA_YOZING":
        print("="*60)
        print("DIQQAT: telegram_bot.py ni ishga tushirish uchun:")
        print("1. Telegramda @BotFather ga kiring va /newbot buyrug'ini bering.")
        print("2. Olingan tokenni BOT_TOKEN o'zgaruvchisiga yozing.")
        print("3. So'ngra 'python telegram_bot.py' ni ishga tushiring.")
        print("="*60)
        return

    print("Telegram Bot ishga tushdi...")
    offset = 0
    while True:
        try:
            updates = api_call("getUpdates", {"offset": offset, "timeout": 20})
            if updates and updates.get("ok"):
                for u in updates.get("result", []):
                    offset = u["update_id"] + 1
                    msg = u.get("message", {})
                    chat_id = msg.get("chat", {}).get("id")
                    text = msg.get("text", "").strip()

                    if not chat_id:
                        continue

                    if text.startswith("/start"):
                        user_name = msg.get("from", {}).get("first_name", "O'quvchi")
                        welcome_text = (
                            f"Assalomu alaykum, <b>{user_name}</b>!\n\n"
                            "🦉 <b>DESTINATION ENGLISH GRAMMAR 4</b> rasmiy botiga xush kelibsiz!\n\n"
                            "Bu yerda siz 4-sinf uchun 70 betlik kitob, barcha zamonlar, 140 ta oltin lug'at va "
                            "20 ta sarguzasht matn topshiriqlaridan foydalanishingiz mumkin.\n\n"
                            "Quyidagi tugmalardan birini tanlang:"
                        )
                        markup = {
                            "inline_keyboard": [
                                [
                                    {
                                        "text": "📖 Interaktiv Maktabni Ochish (WebApp)",
                                        "web_app": {"url": WEBAPP_URL}
                                    }
                                ],
                                [
                                    {
                                        "text": "📄 70 Betlik PDF Kitobni Yuklash",
                                        "callback_data": "get_pdf"
                                    }
                                ]
                            ]
                        }
                        send_message(chat_id, welcome_text, markup)

                    elif text.startswith("/pdf"):
                        send_message(chat_id, "⏳ 70 betlik kitob yuklanmoqda, iltimos kuting...")
                        send_pdf(chat_id)

                    elif "callback_query" in u:
                        cb = u["callback_query"]
                        cb_data = cb.get("data")
                        cb_chat = cb.get("message", {}).get("chat", {}).get("id")
                        if cb_data == "get_pdf" and cb_chat:
                            send_message(cb_chat, "⏳ 70 betlik kitob yuborilmoqda...")
                            send_pdf(cb_chat)

        except Exception as e:
            print("Loop xatosi:", e)
            time.sleep(3)

if __name__ == "__main__":
    main()
