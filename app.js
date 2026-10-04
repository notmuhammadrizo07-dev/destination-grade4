// app.js - Destination English Grammar & Mathematics (Grade 4) Web App Logic

let currentUser = null;
let currentItemId = "unit-1";
let currentSubject = "english"; // "english" or "math"
let usernameCheckTimer = null;

// Local Storage Keys
const LOCAL_USERS_KEY = "destination_grammar_users";
const ACTIVE_USER_KEY = "destination_active_user";

function getLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveLocalUser(u, p, name) {
  const users = getLocalUsers();
  users[u] = {
    username: u,
    password: p,
    full_name: name,
    grade: "4-sinf",
    stars: 0,
    progress: {}
  };
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

// Speech Synthesis for Vocabulary & Stories
function speakWord(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = currentSubject === 'math' ? 'uz-UZ' : 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}

function speakStoryText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    // Clean html tags and blanks from text
    const cleanText = text.replace(/<[^>]*>/g, ' ').replace(/_+/g, ' ').replace(/\s+/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = currentSubject === 'math' ? 'uz-UZ' : 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Smart Answer Matching & Normalization (accepts isnt, isn't, is not, units, fractions, etc.)
function canonicalizeAnswer(text) {
  if (!text) return "";
  let s = text.trim().toLowerCase();
  // Normalize various apostrophe and quotation characters
  s = s.replace(/[\u2019\u2018\u0060\u00b4\u02bb]/g, "'");
  // Remove trailing punctuation like . , ! ?
  s = s.replace(/[\.\,\!\?]+$/, "").trim();

  // Contraction normalizations (English)
  const replacements = [
    [/\b(isn't|isnt)\b/g, "is not"],
    [/\b(aren't|arent)\b/g, "are not"],
    [/\b(wasn't|wasnt)\b/g, "was not"],
    [/\b(weren't|werent)\b/g, "were not"],
    [/\b(don't|dont)\b/g, "do not"],
    [/\b(doesn't|doesnt)\b/g, "does not"],
    [/\b(didn't|didnt)\b/g, "did not"],
    [/\b(won't|wont)\b/g, "will not"],
    [/\b(can't|cant|cannot)\b/g, "can not"],
    [/\b(haven't|havent)\b/g, "have not"],
    [/\b(hasn't|hasnt)\b/g, "has not"],
    [/\b(hadn't|hadnt)\b/g, "had not"],
    [/\b(wouldn't|wouldnt)\b/g, "would not"],
    [/\b(shouldn't|shouldnt)\b/g, "should not"],
    [/\b(couldn't|couldnt)\b/g, "could not"],
    [/\b(i'm|im)\b/g, "i am"],
    [/\b(you're|youre)\b/g, "you are"],
    [/\b(he's|hes)\b/g, "he is"],
    [/\b(she's|shes)\b/g, "she is"],
    [/\b(it's|its)\b/g, "it is"],
    [/\b(we're)\b/g, "we are"],
    [/\b(they're|theyre)\b/g, "they are"],
    [/\b(i'll|ill)\b/g, "i will"],
    [/\b(you'll|youll)\b/g, "you will"],
    [/\b(he'll)\b/g, "he will"],
    [/\b(she'll)\b/g, "she will"],
    [/\b(we'll|well)\b/g, "we will"],
    [/\b(they'll|theyll)\b/g, "they will"],
    [/\b(i've|ive)\b/g, "i have"],
    [/\b(you've|youve)\b/g, "you have"],
    [/\b(we've|weve)\b/g, "we have"],
    [/\b(they've|theyve)\b/g, "they have"]
  ];

  for (const [pat, rep] of replacements) {
    s = s.replace(pat, rep);
  }

  // Math spacing: "25 000" -> "25000", "5 / 8" -> "5/8"
  s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  s = s.replace(/(\d)\s*\/\s*(\d)/g, "$1/$2");
  return s.replace(/\s+/g, " ").trim();
}

function extractNumberOnly(s) {
  const m = s.trim().toLowerCase().match(/^(\d+)(?:\s*(?:km|m|cm|sm|mm|dm|kg|g|t|s|litr|l|ml|so'm|som|min|soat|daraja))?$/);
  return m ? m[1] : null;
}

function checkAnswerMatch(userInput, expectedAnswer) {
  if (!userInput || !expectedAnswer) return false;
  const userTrimmed = userInput.trim();
  if (!userTrimmed) return false;

  // Split alternative answers separated by ' / ' or ';' but NOT fractions like 5/8
  const options = expectedAnswer.split(/\s+\/\s+|;\s*|(?<!\d)\/(?!\d)/).map(o => o.trim()).filter(Boolean);
  const userCanon = canonicalizeAnswer(userTrimmed);
  const userRaw = userTrimmed.toLowerCase().replace(/['\s\u2019\u2018\u0060\u00b4\u02bb\-,]/g, "");
  const userNum = extractNumberOnly(userTrimmed);

  for (const opt of options) {
    const optCanon = canonicalizeAnswer(opt);
    if (userCanon === optCanon) return true;
    const optRaw = opt.toLowerCase().replace(/['\s\u2019\u2018\u0060\u00b4\u02bb\-,]/g, "");
    if (userRaw === optRaw) return true;
    const optNum = extractNumberOnly(opt);
    if (userNum && optNum && userNum === optNum) return true;
    if (userNum && userNum === optRaw) return true;
    if (optNum && userRaw === optNum) return true;
  }
  return false;
}

// Gatekeeper Controls
function showGatekeeper() {
  document.getElementById("authGatekeeper").style.display = "flex";
  document.getElementById("appLayout").style.display = "none";
}

function hideGatekeeper() {
  document.getElementById("authGatekeeper").style.display = "none";
  document.getElementById("appLayout").style.display = "flex";
}

function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
  const fb = document.getElementById("authFeedback");
  if (fb) fb.style.display = "none";
  
  const checkMsg = document.getElementById("usernameCheckMsg");
  if (checkMsg) checkMsg.style.display = "none";

  if (tab === "login") {
    document.getElementById("tabLoginBtn").classList.add("active");
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("regForm").style.display = "none";
    document.getElementById("loginUsername").focus();
  } else {
    document.getElementById("tabRegBtn").classList.add("active");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("regForm").style.display = "block";
    document.getElementById("regName").focus();
  }
}

function showAuthError(msg) {
  const fb = document.getElementById("authFeedback");
  fb.className = "feedback-msg error";
  fb.innerText = msg;
  fb.style.display = "block";
}

function showAuthSuccess(msg) {
  const fb = document.getElementById("authFeedback");
  fb.className = "feedback-msg success";
  fb.innerText = msg;
  fb.style.display = "block";
}

// Real-time Username Availability Check
function checkUsernameAvailability(rawUsername) {
  clearTimeout(usernameCheckTimer);
  const u = rawUsername.trim().toLowerCase();
  const msgEl = document.getElementById("usernameCheckMsg");
  if (!msgEl) return;

  if (u.length < 3) {
    msgEl.style.display = "none";
    return;
  }

  usernameCheckTimer = setTimeout(async () => {
    // 1. Try server check
    try {
      const res = await fetch(`/api/check-username?u=${encodeURIComponent(u)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.available) {
          msgEl.className = "username-check-msg available";
          msgEl.innerText = `✓ '${u}' nomi bo'sh! Ro'yxatdan o'tishingiz mumkin.`;
        } else {
          msgEl.className = "username-check-msg taken";
          msgEl.innerText = `✗ '${u}' nomi allaqachon band! Boshqa nom tanlang.`;
        }
        return;
      }
    } catch (e) {
      // Local fallback check
      const users = getLocalUsers();
      if (users[u]) {
        msgEl.className = "username-check-msg taken";
        msgEl.innerText = `✗ '${u}' nomi allaqachon ishlatilgan! Boshqa nom tanlang.`;
      } else {
        msgEl.className = "username-check-msg available";
        msgEl.innerText = `✓ '${u}' nomi bo'sh! Ro'yxatdan o'tishingiz mumkin.`;
      }
    }
  }, 350);
}

// Registration Handler
async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const username = document.getElementById("regUsername").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value.trim();

  if (!name || !username || !password) {
    showAuthError("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  if (username.length < 3) {
    showAuthError("Akkaunt nomi kamida 3 ta belgidan iborat bo'lishi kerak!");
    return;
  }

  const btn = document.getElementById("btnRegSubmit");
  btn.disabled = true;
  btn.innerText = "Tekshirilmoqda...";

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, full_name: name })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      currentUser = { username, full_name: name, stars: 0, progress: {} };
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
      saveLocalUser(username, password, name);
      showAuthSuccess("Ro'yxatdan o'tish muvaffaqiyatli! Darslarga xush kelibsiz!");
      setTimeout(() => {
        hideGatekeeper();
        updateUserUI();
        renderSidebarMenu();
        renderItem("unit-1");
      }, 700);
      return;
    } else {
      showAuthError(data.detail || "Bu akkaunt nomi band! Boshqa nom tanlang.");
      btn.disabled = false;
      btn.innerText = "✨ Yangi Akkaunt Yaratish va Kirish";
      return;
    }
  } catch (err) {
    // Local offline registration fallback
    const users = getLocalUsers();
    if (users[username]) {
      showAuthError(`'${username}' nomi allaqachon ishlatilgan! Yangi takrorlanmas nom tanlang.`);
      btn.disabled = false;
      btn.innerText = "✨ Yangi Akkaunt Yaratish va Kirish";
      return;
    }

    saveLocalUser(username, password, name);
    currentUser = { username, full_name: name, stars: 0, progress: {} };
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
    showAuthSuccess("Akkaunt ochildi! Xush kelibsiz!");
    setTimeout(() => {
      hideGatekeeper();
      updateUserUI();
      renderSidebarMenu();
      renderItem("unit-1");
    }, 700);
  }
}

// Login Handler
async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value.trim();

  if (!username || !password) {
    showAuthError("Akkaunt nomi va parolni kiriting!");
    return;
  }

  const btn = document.getElementById("btnLoginSubmit");
  btn.disabled = true;
  btn.innerText = "Tekshirilmoqda...";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      currentUser = {
        username: data.user.username,
        full_name: data.user.full_name,
        stars: data.user.stars || 0,
        progress: data.user.progress || {}
      };
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
      showAuthSuccess(`Xush kelibsiz, ${currentUser.full_name}!`);
      setTimeout(() => {
        hideGatekeeper();
        updateUserUI();
        renderSidebarMenu();
        renderItem("unit-1");
      }, 500);
      return;
    } else {
      showAuthError(data.detail || "Akkaunt nomi yoki parol noto'g'ri!");
      btn.disabled = false;
      btn.innerText = "🚀 Tizimga Kirish va Darslarni Boshlash";
      return;
    }
  } catch (err) {
    // Offline local fallback login
    const users = getLocalUsers();
    const u = users[username];
    if (u && u.password === password) {
      currentUser = {
        username: u.username,
        full_name: u.full_name,
        stars: u.stars || 0,
        progress: u.progress || {}
      };
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
      showAuthSuccess(`Xush kelibsiz, ${currentUser.full_name}!`);
      setTimeout(() => {
        hideGatekeeper();
        updateUserUI();
        renderSidebarMenu();
        renderItem("unit-1");
      }, 500);
      return;
    } else {
      showAuthError("Bunday akkaunt topilmadi yoki parol noto'g'ri! Iltimos yangi akkaunt oching.");
      btn.disabled = false;
      btn.innerText = "🚀 Tizimga Kirish va Darslarni Boshlash";
    }
  }
}

// Logout Handler
function logout() {
  localStorage.removeItem(ACTIVE_USER_KEY);
  currentUser = null;
  showGatekeeper();
  switchAuthTab("login");
}

function updateUserUI() {
  if (!currentUser) return;
  const avatarEl = document.getElementById("userAvatar");
  const nameEl = document.getElementById("userName");
  const starsEl = document.getElementById("userStars");

  const initial = currentUser.full_name ? currentUser.full_name.charAt(0).toUpperCase() : "U";
  if (avatarEl) avatarEl.innerText = initial;
  if (nameEl) nameEl.innerText = currentUser.full_name || currentUser.username;
  if (starsEl) starsEl.innerText = `⭐ ${currentUser.stars || 0} ball`;

  const certName = document.getElementById("certStudentName");
  if (certName) certName.innerText = currentUser.full_name || "4-sinf O'quvchisi";
}

// Award Stars and Save Progress
async function addStarsAndSave(count, activityId) {
  if (!currentUser) return;
  currentUser.stars = (currentUser.stars || 0) + count;
  if (!currentUser.progress) currentUser.progress = {};
  currentUser.progress[activityId] = {
    score: count,
    timestamp: new Date().toISOString()
  };

  // Update localStorage active user
  localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
  
  // Also update local users DB
  const users = getLocalUsers();
  if (users[currentUser.username]) {
    users[currentUser.username].stars = currentUser.stars;
    users[currentUser.username].progress = currentUser.progress;
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  }

  updateUserUI();

  // Try sync with server
  try {
    await fetch("/api/save-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.username,
        unit_id: activityId,
        score: count,
        total: count
      })
    });
  } catch (e) {}
}

// Subject Switcher
function switchSubject(subj) {
  currentSubject = subj;

  const topTitle = document.getElementById("topbarTitle");
  if (topTitle) {
    topTitle.innerText = subj === "math" 
      ? "DESTINATION MATEMATIKA 4 • INTERAKTIV PORTAL" 
      : "DESTINATION ENGLISH 4 • INTERAKTIV MAKTAB";
  }

  renderSidebarMenu();

  if (subj === "math") {
    renderItem("math-unit-1");
  } else {
    renderItem("unit-1");
  }
}

// Sidebar Navigation Builder
function renderSidebarMenu() {
  const container = document.getElementById("sidebarNavMenu");
  if (!container) return;

  // Subject Switcher Toolbar at top of navigation
  let html = `
    <div class="subject-switcher-bar">
      <button class="subject-switch-btn ${currentSubject === 'english' ? 'active' : ''}" data-subject="english" onclick="switchSubject('english')">
        <span>🇬🇧</span> Ingliz Tili
      </button>
      <button class="subject-switch-btn ${currentSubject === 'math' ? 'active' : ''}" data-subject="math" onclick="switchSubject('math')">
        <span>📐</span> Matematika
      </button>
    </div>
  `;

  if (currentSubject === "math") {
    // 📐 MATHEMATICS CURRICULUM
    html += `
      <div class="nav-section-label" style="color: #10b981;">1-QISM: SONLAR VA ARIFMETIKA (Bet 4-21)</div>
      <div class="nav-item ${currentItemId === 'math-unit-1' ? 'active' : ''}" data-id="math-unit-1" onclick="renderItem('math-unit-1')">
        <span>📐</span> Unit 1: Ko'p Xonali Sonlar
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-2' ? 'active' : ''}" data-id="math-unit-2" onclick="renderItem('math-unit-2')">
        <span>📐</span> Unit 2: Qo'shish va Ayirish
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-3' ? 'active' : ''}" data-id="math-unit-3" onclick="renderItem('math-unit-3')">
        <span>📐</span> Unit 3: Ko'p Xonali Ko'paytirish
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-4' ? 'active' : ''}" data-id="math-unit-4" onclick="renderItem('math-unit-4')">
        <span>📐</span> Unit 4: Bo'lish va Qoldiq
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-5' ? 'active' : ''}" data-id="math-unit-5" onclick="renderItem('math-unit-5')">
        <span>📐</span> Unit 5: Amallar Tartibi
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-6' ? 'active' : ''}" data-id="math-unit-6" onclick="renderItem('math-unit-6')">
        <span>📐</span> Unit 6: Oddiy Kasrlar
      </div>

      <div class="nav-section-label" style="color: #059669;">2-QISM: O'LCHOVLAR VA AMALIYOT (Bet 23-47)</div>
      <div class="nav-item ${currentItemId === 'math-unit-7' ? 'active' : ''}" data-id="math-unit-7" onclick="renderItem('math-unit-7')">
        <span>📏</span> Unit 7: O'lchov Birliklari
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-8' ? 'active' : ''}" data-id="math-unit-8" onclick="renderItem('math-unit-8')">
        <span>📐</span> Unit 8: Geometrik Shakllar
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-9' ? 'active' : ''}" data-id="math-unit-9" onclick="renderItem('math-unit-9')">
        <span>📏</span> Unit 9: Perimetr va Yuza
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-10' ? 'active' : ''}" data-id="math-unit-10" onclick="renderItem('math-unit-10')">
        <span>🚀</span> Unit 10: Harakat Masalalari
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-11' ? 'active' : ''}" data-id="math-unit-11" onclick="renderItem('math-unit-11')">
        <span>⚙️</span> Unit 11: Mehnat va Ish Unumi
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-12' ? 'active' : ''}" data-id="math-unit-12" onclick="renderItem('math-unit-12')">
        <span>💰</span> Unit 12: Narx, Miqdor, Qiymat
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-13' ? 'active' : ''}" data-id="math-unit-13" onclick="renderItem('math-unit-13')">
        <span>📊</span> Unit 13: Diagrammalar &amp; O'rtacha
      </div>
      <div class="nav-item ${currentItemId === 'math-unit-14' ? 'active' : ''}" data-id="math-unit-14" onclick="renderItem('math-unit-14')">
        <span>🧩</span> Unit 14: Mantiq va Olimpiada
      </div>

      <div class="nav-section-label" style="color: #f59e0b;">★ 3-QISM: 20 BETLIK MASALALAR (Bet 51-70)</div>
      <div class="nav-item ${currentItemId === 'math-cloze-p51' ? 'active' : ''}" data-id="math-cloze-p51" onclick="renderItem('math-cloze-p51')">
        <span>📖</span> Sahifa 51: Masala Yechish Qoidalari
      </div>
    `;

    const mathStories = [
      { p: 52, title: "Masala 1: Kutubxona Fondi (Ko'p xonali)" },
      { p: 53, title: "Masala 2: Xazina Sandig'i (Qo'shish/Ayirish)" },
      { p: 54, title: "Masala 3: Kosmik Kema (Ko'paytirish)" },
      { p: 55, title: "Masala 4: O'lja Taqsimoti (Bo'lish/Qoldiq)" },
      { p: 56, title: "Masala 5: Robot Konstruktori (Amallar tartibi)" },
      { p: 57, title: "Masala 6: Pitsa Ziyofati (Kasrlar)" },
      { p: 58, title: "Masala 7: Tog' Sayohati (O'lchov birliklari)" },
      { p: 59, title: "Masala 8: Sirli Labirint (Geometriya)" },
      { p: 60, title: "Masala 9: Maktab Tomorqasi (P va S)" },
      { p: 61, title: "Masala 10: Poyga Avtomobillari (S=V*t)" },
      { p: 62, title: "Masala 11: Shahar Soati (Ish unumi)" },
      { p: 63, title: "Masala 12: Supermarket (Narx, Miqdor, Qiymat)" },
      { p: 64, title: "Masala 13: Kitobxonlik Statistikasi (Diagramma)" },
      { p: 65, title: "Masala 14: Seyf Kodi (Mantiqiy jumboq)" },
      { p: 66, title: "Masala 15: Qadimgi Samarqand (Aralash)" },
      { p: 67, title: "Masala 16: Kelajak 2050 Shahri (Aralash)" },
      { p: 68, title: "Masala 17: Katta Chempionat Finali" }
    ];

    mathStories.forEach(s => {
      html += `
        <div class="nav-item ${currentItemId === `math-cloze-p${s.p}` ? 'active' : ''}" data-id="math-cloze-p${s.p}" onclick="renderItem('math-cloze-p${s.p}')">
          <span>📝</span> Sahifa ${s.p}: ${s.title}
        </div>
      `;
    });

    html += `
      <div class="nav-item ${currentItemId === 'math-cloze-p69' ? 'active' : ''}" data-id="math-cloze-p69" onclick="renderItem('math-cloze-p69')">
        <span>🔑</span> Sahifa 69: Masalalar Javoblar Kaliti
      </div>
      <div class="nav-item ${currentItemId === 'math-cloze-p70' ? 'active' : ''}" data-id="math-cloze-p70" onclick="renderItem('math-cloze-p70')">
        <span>🏅</span> Sahifa 70: Al-Xorazmiy Diplomi
      </div>

      <div class="nav-section-label">YUTUQLAR VA HUJJATLAR</div>
      <div class="nav-item" onclick="openCertificateModal()">
        <span>🏅</span> Matematika Faxriy Yorlig'i
      </div>
      <div class="nav-item" onclick="window.open('book.html', '_blank')">
        <span>📖</span> 70 Betlik Kitob
      </div>
    `;
  } else {
    // 🇬🇧 ENGLISH CURRICULUM
    html += `
      <div class="nav-section-label">1-QISM: PRESENT TENSES (Bet 4-21)</div>
      <div class="nav-item ${currentItemId === 'unit-1' ? 'active' : ''}" data-id="unit-1" onclick="renderItem('unit-1')">
        <span>📘</span> Unit 1: 'To Be' (am, is, are)
      </div>
      <div class="nav-item ${currentItemId === 'unit-2' ? 'active' : ''}" data-id="unit-2" onclick="renderItem('unit-2')">
        <span>📘</span> Unit 2: Habits (Action Verbs)
      </div>
      <div class="nav-item ${currentItemId === 'unit-3' ? 'active' : ''}" data-id="unit-3" onclick="renderItem('unit-3')">
        <span>📘</span> Unit 3: Negatives &amp; Questions
      </div>
      <div class="nav-item ${currentItemId === 'unit-4' ? 'active' : ''}" data-id="unit-4" onclick="renderItem('unit-4')">
        <span>📘</span> Unit 4: Continuous (+/-)
      </div>
      <div class="nav-item ${currentItemId === 'unit-5' ? 'active' : ''}" data-id="unit-5" onclick="renderItem('unit-5')">
        <span>📘</span> Unit 5: Continuous Questions (?)
      </div>
      <div class="nav-item ${currentItemId === 'unit-6' ? 'active' : ''}" data-id="unit-6" onclick="renderItem('unit-6')">
        <span>📘</span> Unit 6: Simple vs Continuous
      </div>

      <div class="nav-section-label">2-QISM: PAST &amp; FUTURE (Bet 23-47)</div>
      <div class="nav-item ${currentItemId === 'unit-7' ? 'active' : ''}" data-id="unit-7" onclick="renderItem('unit-7')">
        <span>📗</span> Unit 7: Past 'To Be' (was/were)
      </div>
      <div class="nav-item ${currentItemId === 'unit-8' ? 'active' : ''}" data-id="unit-8" onclick="renderItem('unit-8')">
        <span>📗</span> Unit 8: Regular Verbs (-ed)
      </div>
      <div class="nav-item ${currentItemId === 'unit-9' ? 'active' : ''}" data-id="unit-9" onclick="renderItem('unit-9')">
        <span>📗</span> Unit 9: Irregular Verbs
      </div>
      <div class="nav-item ${currentItemId === 'unit-10' ? 'active' : ''}" data-id="unit-10" onclick="renderItem('unit-10')">
        <span>📗</span> Unit 10: Past Negatives &amp; (?)
      </div>
      <div class="nav-item ${currentItemId === 'unit-11' ? 'active' : ''}" data-id="unit-11" onclick="renderItem('unit-11')">
        <span>📗</span> Unit 11: Past Continuous
      </div>
      <div class="nav-item ${currentItemId === 'unit-12' ? 'active' : ''}" data-id="unit-12" onclick="renderItem('unit-12')">
        <span>📙</span> Unit 12: Future 'be going to'
      </div>
      <div class="nav-item ${currentItemId === 'unit-13' ? 'active' : ''}" data-id="unit-13" onclick="renderItem('unit-13')">
        <span>📙</span> Unit 13: Future Simple 'will'
      </div>
      <div class="nav-item ${currentItemId === 'unit-14' ? 'active' : ''}" data-id="unit-14" onclick="renderItem('unit-14')">
        <span>📙</span> Unit 14: Present Perfect Intro
      </div>

      <div class="nav-section-label" style="color: #f59e0b;">★ 3-QISM: 20 BETLIK MATNLAR (Bet 51-70)</div>
      <div class="nav-item ${currentItemId === 'cloze-p51' ? 'active' : ''}" data-id="cloze-p51" onclick="renderItem('cloze-p51')">
        <span>📖</span> Sahifa 51: O'qish Strategiyasi
      </div>
    `;

    const stories = [
      { p: 52, title: "Story 1: Magic Academy ('To Be')" },
      { p: 53, title: "Story 2: Benny's Routine (Present Simple)" },
      { p: 54, title: "Story 3: Martian Alien (Neg / Questions)" },
      { p: 55, title: "Story 4: Treehouse Workshop (Continuous)" },
      { p: 56, title: "Story 5: Zoo Mystery (Cont. Questions)" },
      { p: 57, title: "Story 6: Carnival vs School (Simple vs Cont)" },
      { p: 58, title: "Story 7: Dinosaur Museum (Past 'To Be')" },
      { p: 59, title: "Story 8: Chimgan Camping (Regular -ed)" },
      { p: 60, title: "Story 9: Lost Pirate Gold (Irregular)" },
      { p: 61, title: "Story 10: Benny at Bank (Past Neg/Quest)" },
      { p: 62, title: "Story 11: Stormy Castle (Past Continuous)" },
      { p: 63, title: "Story 12: London Trip (be going to)" },
      { p: 64, title: "Story 13: 2050 Robot City (will/won't)" },
      { p: 65, title: "Story 14: Explorer Benny (Present Perfect)" },
      { p: 66, title: "Story 15: Pharaoh's Chamber (Mixed Quest)" },
      { p: 67, title: "Story 16: Cyber Space 2099 (Mixed Sci-Fi)" },
      { p: 68, title: "Story 17: Hero Interview (Dialogue Test)" }
    ];

    stories.forEach(s => {
      html += `
        <div class="nav-item ${currentItemId === `cloze-p${s.p}` ? 'active' : ''}" data-id="cloze-p${s.p}" onclick="renderItem('cloze-p${s.p}')">
          <span>📝</span> Sahifa ${s.p}: ${s.title}
        </div>
      `;
    });

    html += `
      <div class="nav-item ${currentItemId === 'cloze-p69' ? 'active' : ''}" data-id="cloze-p69" onclick="renderItem('cloze-p69')">
        <span>🔑</span> Sahifa 69: Matnlar Javoblar Kaliti
      </div>
      <div class="nav-item ${currentItemId === 'cloze-p70' ? 'active' : ''}" data-id="cloze-p70" onclick="renderItem('cloze-p70')">
        <span>🏅</span> Sahifa 70: Grand Master Diplom
      </div>

      <div class="nav-section-label">YUTUQLAR VA HUJJATLAR</div>
      <div class="nav-item" onclick="openCertificateModal()">
        <span>🏅</span> Kurs Faxriy Yorlig'i
      </div>
      <div class="nav-item" onclick="window.open('Destination_English_Grammar_Grade4.pdf', '_blank')">
        <span>📄</span> 70 Betlik PDF Kitob
      </div>
      <div class="nav-item" onclick="window.open('book.html', '_blank')">
        <span>📖</span> 70 Betlik HTML Kitob
      </div>
    `;
  }

  container.innerHTML = html;
}

// Master Content Dispatcher
function renderItem(id) {
  if (!currentUser) {
    showGatekeeper();
    return;
  }

  currentItemId = id;

  // Auto-detect and switch subject if needed
  if (id.startsWith("math-")) {
    if (currentSubject !== "math") {
      currentSubject = "math";
      renderSidebarMenu();
    }
  } else if (id.startsWith("unit-") || (id.startsWith("cloze-p") && !id.startsWith("math-"))) {
    if (currentSubject !== "english") {
      currentSubject = "english";
      renderSidebarMenu();
    }
  }

  // Update active sidebar class
  document.querySelectorAll(".nav-item").forEach(el => {
    if (el.getAttribute("data-id") === id) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // Check if it's a Unit or Cloze page
  if (id.startsWith("math-unit-") || id.startsWith("unit-")) {
    renderUnitView(id);
  } else if (id.startsWith("math-cloze-p") || id.startsWith("cloze-p")) {
    renderClozePageView(id);
  }

  // Scroll to top of content
  const content = document.getElementById("unitContent");
  if (content) content.scrollTop = 0;
}

// Render Standard Unit View (Grammar / Math rules, 10 Vocab / Terms + Audio, Cloze, Quiz, Video)
function renderUnitView(unitId) {
  const container = document.getElementById("unitContent");
  const isMath = unitId.startsWith("math-") || currentSubject === "math";

  let unit = null;
  if (isMath && typeof MATH_DATA !== "undefined") {
    unit = MATH_DATA.units.find(u => u.id === unitId);
  }
  if (!unit && typeof SITE_DATA !== "undefined") {
    unit = SITE_DATA.units.find(u => u.id === unitId);
  }
  if (!unit && typeof MATH_DATA !== "undefined") {
    unit = MATH_DATA.units.find(u => u.id === unitId);
  }

  if (!unit) {
    container.innerHTML = `<div class="card-box">Mavzu topilmadi.</div>`;
    return;
  }

  // 1. Tables HTML
  let tablesHtml = "";
  if (unit.tables) {
    unit.tables.forEach(t => {
      const ths = t.headers.map(h => `<th>${h}</th>`).join("");
      const trs = t.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("");
      tablesHtml += `
        <div style="margin-bottom: 12px;">
          <h4 style="font-size: 13.5px; color: ${isMath ? '#059669' : 'var(--primary)'}; margin-bottom: 4px;">${t.title}</h4>
          <table class="web-table">
            <thead><tr>${ths}</tr></thead>
            <tbody>${trs}</tbody>
          </table>
        </div>
      `;
    });
  }

  // 2. Vocab Table HTML
  let vocabRows = "";
  if (unit.vocab) {
    unit.vocab.forEach(v => {
      vocabRows += `
        <tr>
          <td style="font-weight: 800; text-align: center; color: ${isMath ? '#059669' : 'var(--primary)'};">${v.num}</td>
          <td>
            <strong>${v.word}</strong>
            <button class="audio-btn" title="Ovoz chiqarib eshitish" onclick="speakWord('${v.word.replace(/'/g, "\\'")}')">🔊</button>
            <div style="font-size: 11.5px; color: #64748b;">${v.uz}</div>
          </td>
          <td style="font-size: 12px; color: #475569;"><em>${v.pos}</em> - ${v.meaning}</td>
          <td><span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 12px;">${v.synonym}</span></td>
          <td style="font-style: italic; color: #334155;">"${v.example}"</td>
        </tr>
      `;
    });
  }

  // 3. Cloze Story HTML
  let clozeHtml = "";
  if (unit.cloze) {
    let qIndex = 1;
    let storyFormatted = unit.cloze.text.replace(/\{([^}]+)\}/g, (match, p1) => {
      const idx = qIndex++;
      return `<input type="text" class="cloze-input" data-unit="${unit.id}" data-idx="${idx}" data-ans="${p1.trim()}" placeholder="...">`;
    });

    const ansKeys = Object.keys(unit.cloze.answers || {});

    clozeHtml = `
      <div class="cloze-card">
        <div class="cloze-title">
          <span>${isMath ? '📐' : '📖'}</span>
          <span>${unit.cloze.title}</span>
        </div>
        <p style="font-size: 12.5px; color: #0f766e;">${unit.cloze.inst}</p>
        <div class="cloze-story-box">
          ${storyFormatted}
        </div>
        <div class="cloze-action-bar">
          <button class="btn-check-cloze" style="${isMath ? 'background: linear-gradient(135deg, #059669, #047857);' : ''}" onclick="checkUnitCloze('${unit.id}')">
            <span>✨</span> Tekshirish &amp; Ball Olish
          </button>
          <div class="cloze-score-badge" id="clozeScore-${unit.id}">Natija: ___ / ${ansKeys.length}</div>
        </div>
      </div>
    `;
  }

  // 4. Quick Quiz HTML
  let quizHtml = "";
  if (unit.quiz) {
    unit.quiz.forEach((qItem, qIdx) => {
      const opts = qItem.opts.map(opt => `
        <button class="quiz-opt-btn" onclick="checkQuizOpt(this, '${qItem.ans.replace(/'/g, "\\'")}', '${unit.id}')">${opt}</button>
      `).join("");
      quizHtml += `
        <div class="quiz-q-item">
          <div class="quiz-q-title">${qIdx + 1}. ${qItem.q}</div>
          <div class="quiz-options">${opts}</div>
        </div>
      `;
    });
  }

  const bannerBg = isMath
    ? 'linear-gradient(135deg, #059669 0%, #065f46 100%)'
    : 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)';

  container.innerHTML = `
    <div class="web-unit-banner" style="background: ${bannerBg};">
      <div class="web-unit-banner-left">
        <div class="web-unit-badge" style="${isMath ? 'background: #34d399; color: #064e3b;' : ''}">${unit.num}</div>
        <div>
          <h1>${unit.title}</h1>
          <p>${unit.subtitle}</p>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">${unit.tag}</div>
    </div>

    <!-- Section 1: Presentation & Rules -->
    <div class="card-box">
      <div class="card-title">
        <span>${isMath ? '📐 MATEMATIK QOIDA VA JADVALLAR' : '📖 GRAMMATIK QOIDA VA JADVALLAR'}</span>
      </div>
      <div style="background: ${isMath ? '#ecfdf5' : '#f0fdfa'}; border-left: 4px solid ${isMath ? '#059669' : 'var(--primary)'}; padding: 10px 14px; border-radius: 0 6px 6px 0; font-size: 13.5px; margin-bottom: 12px;">
        ${unit.meaning}
      </div>
      ${tablesHtml}
      <div style="background: #fffbeb; border: 1.5px dashed var(--accent); border-radius: 8px; padding: 10px 14px; margin-top: 10px; font-size: 13px;">
        ${unit.tip}
      </div>
      <div style="margin-top: 8px; font-size: 12.5px; color: #475569;">
        ${unit.time_words}
      </div>
    </div>

    <!-- Section 2: 10 Vocabulary / Terms -->
    <div class="card-box">
      <div class="card-title">
        <span>${isMath ? '📚 10 TA MUHIM MATEMATIK ATAMA VA TUSHUNCHALAR' : '📚 10 TA KERAKLI LUG\'AT VA SINONIMLAR (Audio talaffuz bilan)'}</span>
        <span style="font-size: 12px; font-weight: normal; color: var(--text-muted);">Tinglash uchun 🔊 belgisini bosing</span>
      </div>
      <table class="web-table">
        <thead>
          <tr>
            <th style="width: 20px;">№</th>
            <th>${isMath ? 'Atama' : 'So\'z &amp; Tarjimasi'}</th>
            <th>${isMath ? 'Ta\'rifi' : 'Ma\'nosi'}</th>
            <th>${isMath ? 'Sinonimi / Shakli' : 'Sinonimi'}</th>
            <th>Qo'llanish Namunasi</th>
          </tr>
        </thead>
        <tbody>
          ${vocabRows}
        </tbody>
      </table>
    </div>

    <!-- Section 3: Interactive Cloze Story -->
    ${clozeHtml}

    <!-- Section 4: Quick Interactive Quiz -->
    <div class="card-box">
      <div class="card-title">
        <span>⚡ TEZKOR TEST MASHQLARI (Topshiriq A)</span>
      </div>
      ${quizHtml}
    </div>

    <!-- Section 5: Video Lesson (At bottom) -->
    ${unit.video ? `
      <div class="card-box video-lesson-card">
        <div class="card-title" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #fee2e2; padding-bottom: 8px;">
          <span style="color: #b91c1c; font-weight: 800; font-size: 15px;">🎥 5-QISM: MAXSUS VIDEO DARS</span>
          <span class="video-badge">▶ HD Video Dars</span>
        </div>
        <div style="margin-top: 10px; font-size: 13.5px; color: #334155;">
          <strong>${unit.video.title}</strong>
          <p style="margin: 4px 0 12px 0; color: #64748b; font-size: 13px;">${unit.video.desc}</p>
        </div>
        <div class="video-container">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${unit.video.youtube_id}?rel=0" 
            title="${unit.video.title}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-footer-tip">
          <span>💡 <b>Foydali Maslahat:</b> Darsni diqqat bilan tomosha qiling, qoidani takrorlang va o'rganilgan mavzuni mustahkamlang!</span>
          <a href="https://www.youtube.com/watch?v=${unit.video.youtube_id}" target="_blank" rel="noopener noreferrer" style="color: #dc2626; font-weight: 700; text-decoration: underline; margin-left: auto;">
            ▶ YouTube'da ochish
          </a>
        </div>
      </div>
    ` : ""}
  `;
}

// Render Cloze Page View (Pages 51 to 70 for English & Math)
function renderClozePageView(id) {
  const container = document.getElementById("unitContent");
  const isMath = id.startsWith("math-") || currentSubject === "math";
  const pageNum = parseInt(id.replace(/^(math-)?cloze-p/, ""));

  let pageData = null;
  if (isMath && typeof MATH_DATA !== "undefined") {
    pageData = MATH_DATA.cloze_pages.find(p => p.page_num === pageNum);
  }
  if (!pageData && typeof SITE_DATA !== "undefined") {
    pageData = SITE_DATA.cloze_pages.find(p => p.page_num === pageNum);
  }
  if (!pageData && typeof MATH_DATA !== "undefined") {
    pageData = MATH_DATA.cloze_pages.find(p => p.page_num === pageNum);
  }

  if (!pageData) {
    container.innerHTML = `<div class="card-box">Sahifa ma'lumoti topilmadi.</div>`;
    return;
  }

  // Page 51: Reading / Problem Solving Strategy & Rules
  if (pageData.is_intro) {
    let rulesHtml = "";
    pageData.rules.forEach(([title, desc]) => {
      rulesHtml += `
        <div style="background: white; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; margin-bottom: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
          <div style="font-weight: 800; color: ${isMath ? '#059669' : '#007791'}; font-size: 14px; margin-bottom: 6px;">${title}</div>
          <div style="font-size: 13px; color: #334155; line-height: 1.5;">${desc}</div>
        </div>
      `;
    });

    const bannerBg = isMath
      ? 'linear-gradient(135deg, #059669 0%, #064e3b 100%)'
      : 'linear-gradient(135deg, #b45309 0%, #78350f 100%)';

    const nextId = isMath ? 'math-cloze-p52' : 'cloze-p52';

    container.innerHTML = `
      <div class="web-unit-banner" style="background: ${bannerBg};">
        <div class="web-unit-banner-left">
          <div class="web-unit-badge">${pageData.page_num}</div>
          <div>
            <h1>${pageData.title}</h1>
            <p>${pageData.subtitle}</p>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">${pageData.tag}</div>
      </div>

      <div class="card-box">
        <div style="background: #fef3c7; border: 1.5px solid #f59e0b; border-radius: 10px; padding: 14px; margin-bottom: 18px; font-size: 13.5px; color: #92400e; font-weight: 600;">
          🦉 ${pageData.banner_note}
        </div>
        <div class="card-title">
          <span>🎯 ${isMath ? 'MASALALARNI YECHISHNING 4 ASOSIY STRATEGIYASI:' : 'HIKOYALARNI YECHISHNING 4 ASOSIY STRATEGIYASI:'}</span>
        </div>
        ${rulesHtml}
        ${pageData.video ? `
          <div class="video-lesson-card" style="margin-top: 24px; padding: 16px; border: 1.5px solid #fee2e2; border-radius: 10px;">
            <div class="card-title" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #fee2e2; padding-bottom: 8px;">
              <span style="color: #b91c1c; font-weight: 800; font-size: 15px;">🎥 ${isMath ? "MATEMATIK MASALALAR YECHISH MASTERCLASS DARSI" : "MATN O'QISH VA TUSHUNISH MASTERCLASS DARSI"}</span>
              <span class="video-badge">▶ Video Dars</span>
            </div>
            <p style="margin: 8px 0 12px 0; color: #475569; font-size: 13px;">${pageData.video.desc}</p>
            <div class="video-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/${pageData.video.youtube_id}?rel=0" 
                title="${pageData.video.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
            <div class="video-footer-tip">
              <span>💡 <b>Maslahat:</b> Ushbu dars orqali masalalarni tez va xatosiz yechish sirlarini bilib olasiz!</span>
              <a href="https://www.youtube.com/watch?v=${pageData.video.youtube_id}" target="_blank" rel="noopener noreferrer" style="color: #dc2626; font-weight: 700; text-decoration: underline; margin-left: auto;">
                ▶ YouTube'da ochish
              </a>
            </div>
          </div>
        ` : ""}
        <div style="text-align: right; margin-top: 20px;">
          <button class="btn-pill" style="background: #10b981; color: white; padding: 10px 20px;" onclick="renderItem('${nextId}')">
            1-Hikoyaga O'tish ▶
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Page 69: Answer Key
  if (pageData.is_answers) {
    let rowsHtml = "";
    pageData.answers_list.forEach(([storyTitle, ans]) => {
      rowsHtml += `
        <tr>
          <td style="font-weight: 800; color: ${isMath ? '#059669' : '#007791'}; width: 200px;">${storyTitle}</td>
          <td style="font-size: 12.5px; color: #334155; font-family: monospace;">${ans}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="web-unit-banner" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
        <div class="web-unit-banner-left">
          <div class="web-unit-badge">69</div>
          <div>
            <h1>${pageData.title}</h1>
            <p>${pageData.subtitle}</p>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">${pageData.tag}</div>
      </div>

      <div class="card-box">
        <div class="card-title">
          <span>🔑 17 TA SAKHIFALIK MATNLARNING TO'LIQ JAVOBLAR KALITI</span>
        </div>
        <table class="web-table">
          <thead>
            <tr><th>Hikoya / Masala</th><th>To'g'ri Javoblar Ketma-ketligi</th></tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  // Page 70: Grand Master Diploma
  if (pageData.is_cert) {
    const student = currentUser ? (currentUser.full_name || currentUser.username) : "4-sinf O'quvchisi";

    if (isMath) {
      container.innerHTML = `
        <div class="web-unit-banner" style="background: linear-gradient(135deg, #059669 0%, #064e3b 100%);">
          <div class="web-unit-banner-left">
            <div class="web-unit-badge">70</div>
            <div>
              <h1>${pageData.title}</h1>
              <p>${pageData.subtitle}</p>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">${pageData.tag}</div>
        </div>

        <div class="card-box" style="text-align: center; background: #f0fdf4; border: 8px double #059669; padding: 40px 20px;">
          <div style="font-size: 12px; font-weight: 800; color: #047857; letter-spacing: 2px;">AL-XORAZMIY NOMIDAGI RESPUBLIKA MAKTABI</div>
          <h2 style="font-size: 26px; font-weight: 950; color: #064e3b; margin: 8px 0;">GRAND MASTER MATHEMATICS DIPLOMA</h2>
          <div style="font-size: 14px; color: #059669; font-weight: 800; margin-bottom: 20px;">MATEMATIKA VA MANTIQ CHEMPIONI</div>

          <div style="font-size: 15px; color: #475569; margin-bottom: 8px;">Ushbu oliy faxriy diplom 4-sinf o'quvchisi:</div>
          <div style="font-size: 26px; font-weight: 900; color: #047857; border-bottom: 3px solid #10b981; display: inline-block; padding: 4px 30px; margin-bottom: 20px;">
            ${student}
          </div>

          <p style="font-size: 14px; color: #334155; line-height: 1.7; max-width: 580px; margin: 0 auto 24px auto;">
            <b>4-Sinf Matematika va Mantiq</b> kursining barcha 70 betlik materiallarini, 14 ta asosiy mavzusi, 140 ta oltin atama va qoidalari hamda 20 betlik maxsus sarguzashtli masala topshiriqlarini 100% a'lo baholarga bajargani uchun taqdirlanadi!
          </p>

          <div style="display: flex; justify-content: space-around; align-items: center; border-top: 1px dashed #cbd5e1; padding-top: 20px; font-size: 13px;">
            <div>Sana: <strong>2026-yil</strong></div>
            <div style="font-size: 40px;">🏅</div>
            <div>Bosh Ustoz: <strong>Al-Xorazmiy &amp; Benny</strong></div>
          </div>

          <div style="margin-top: 24px;">
            <button class="btn-pill" style="background:#059669; color:white; padding:10px 24px;" onclick="window.print()">🖨️ Diplomni Chop Etish (Print)</button>
          </div>
        </div>
      `;
      return;
    } else {
      container.innerHTML = `
        <div class="web-unit-banner" style="background: linear-gradient(135deg, #059669 0%, #064e3b 100%);">
          <div class="web-unit-banner-left">
            <div class="web-unit-badge">70</div>
            <div>
              <h1>${pageData.title}</h1>
              <p>${pageData.subtitle}</p>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">${pageData.tag}</div>
        </div>

        <div class="card-box" style="text-align: center; background: #fffdf5; border: 8px double #d97706; padding: 40px 20px;">
          <div style="font-size: 12px; font-weight: 800; color: #b45309; letter-spacing: 2px;">MACMILLAN &amp; DESTINATION SERIES</div>
          <h2 style="font-size: 26px; font-weight: 950; color: #1e293b; margin: 8px 0;">GRAND MASTER GRADUATION DIPLOMA</h2>
          <div style="font-size: 14px; color: #d97706; font-weight: 800; margin-bottom: 20px;">INGLIZ TILI GRAMMATIKA VA MATNLAR CHEMPIONI</div>

          <div style="font-size: 15px; color: #475569; margin-bottom: 8px;">Ushbu oliy faxriy diplom 4-sinf o'quvchisi:</div>
          <div style="font-size: 26px; font-weight: 900; color: var(--primary); border-bottom: 3px solid var(--accent); display: inline-block; padding: 4px 30px; margin-bottom: 20px;">
            ${student}
          </div>

          <p style="font-size: 14px; color: #334155; line-height: 1.7; max-width: 580px; margin: 0 auto 24px auto;">
            <b>Destination English Grammar &amp; Vocabulary (Grade 4)</b> kursining barcha 70 betlik materiallarini, 14 ta zamon qoidalari, 140 ta oltin lug'at va 20 ta maxsus sarguzasht matn topshiriqlarini 100% muvaffaqiyatli tamomlagani uchun taqdirlanadi!
          </p>

          <div style="display: flex; justify-content: space-around; align-items: center; border-top: 1px dashed #cbd5e1; padding-top: 20px; font-size: 13px;">
            <div>Sana: <strong>2026-yil</strong></div>
            <div style="font-size: 40px;">🏆</div>
            <div>Bosh Ustoz: <strong>Professor Owl &amp; Benny</strong></div>
          </div>

          <div style="margin-top: 24px;">
            <button class="btn-pill btn-pill-pdf" onclick="window.print()">🖨️ Diplomni Chop Etish (Print)</button>
          </div>
        </div>
      `;
      return;
    }
  }

  // Standard Cloze Stories (Pages 52 to 68)
  let rawStory = pageData.story;
  let qIdx = 0;
  let storyHtml = rawStory.replace(/<span class="q-blank">___________<\/span>/g, () => {
    const idx = qIdx++;
    const correctAns = pageData.answers[idx] || "";
    return `<input type="text" class="story-cloze-input" id="story_${isMath ? 'math_' : ''}${pageNum}_${idx}" data-page="${isMath ? 'math-' : ''}${pageNum}" data-idx="${idx}" data-ans="${correctAns}" placeholder="...">`;
  });

  const nextPg = pageNum < 68 ? pageNum + 1 : 69;
  const nextTarget = isMath ? `math-cloze-p${nextPg}` : `cloze-p${nextPg}`;

  let storyVideoHtml = "";
  if (pageData.unit_ref) {
    const uNum = parseInt(pageData.unit_ref.replace(/\D/g, ""));
    const unitsList = isMath && typeof MATH_DATA !== "undefined" ? MATH_DATA.units : SITE_DATA.units;
    const matchedUnit = unitsList.find(u => u.num === uNum);
    if (matchedUnit && matchedUnit.video) {
      storyVideoHtml = `
        <div class="card-box video-lesson-card" style="margin-top: 20px;">
          <div class="card-title" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #fee2e2; padding-bottom: 8px;">
            <span style="color: #b91c1c; font-weight: 800; font-size: 15px;">🎥 MAVZUGA OID VIDEO DARS (${pageData.unit_ref})</span>
            <span class="video-badge">▶ Video Dars</span>
          </div>
          <p style="margin: 8px 0 12px 0; color: #475569; font-size: 13px;">${matchedUnit.video.desc}</p>
          <div class="video-container">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${matchedUnit.video.youtube_id}?rel=0" 
              title="${matchedUnit.video.title}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-footer-tip">
            <span>💡 <b>Eslatma:</b> Masalani to'g'ri yechish uchun video darsdagi qoidani eslang!</span>
            <a href="https://www.youtube.com/watch?v=${matchedUnit.video.youtube_id}" target="_blank" rel="noopener noreferrer" style="color: #dc2626; font-weight: 700; text-decoration: underline; margin-left: auto;">
              ▶ YouTube'da ochish
            </a>
          </div>
        </div>
      `;
    }
  }

  const bannerBg = isMath
    ? 'linear-gradient(135deg, #047857 0%, #064e3b 100%)'
    : 'linear-gradient(135deg, #007791 0%, #004e5f 100%)';

  container.innerHTML = `
    <div class="web-unit-banner" style="background: ${bannerBg};">
      <div class="web-unit-banner-left">
        <div class="web-unit-badge">${pageNum}</div>
        <div>
          <h1>Sahifa ${pageNum}: ${pageData.title}</h1>
          <p>${pageData.unit_ref ? pageData.unit_ref + " • " : ""}${pageData.tense_focus}</p>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 12px;">Hikoya ${pageNum - 51} / 17</div>
    </div>

    <div class="cloze-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 13px; color: #0f766e; font-weight: 700;">
          💡 ${pageData.intro}
        </div>
        <button class="btn-pill" style="background: #e0f2fe; color: #0284c7;" onclick="speakStoryText('${rawStory.replace(/'/g, "\\'")}')">
          🔊 Hikoyani Tinglash
        </button>
      </div>

      <div class="cloze-story-box" style="font-size: 14.5px; line-height: 2.1;">
        ${storyHtml}
      </div>

      <div class="cloze-action-bar" style="margin-top: 18px;">
        <button class="btn-check-cloze" style="${isMath ? 'background: linear-gradient(135deg, #059669, #047857);' : ''}" onclick="checkStoryCloze('${isMath ? 'math-' : ''}${pageNum}')">
          <span>✨</span> Tekshirish &amp; Ball Olish
        </button>
        <div class="cloze-score-badge" id="storyScoreBadge-${isMath ? 'math-' : ''}${pageNum}">
          Natija: ___ / ${pageData.answers.length}
        </div>
        <button class="btn-pill" style="background: #10b981; color: white;" onclick="renderItem('${nextTarget}')">
          Keyingi Sahifa ▶
        </button>
      </div>
    </div>
    ${storyVideoHtml}
  `;
}

// Unit Cloze Checker (Accepts isnt, isn't, is not, numbers, units, etc.)
function checkUnitCloze(unitId) {
  const inputs = document.querySelectorAll(`.cloze-input[data-unit="${unitId}"]`);
  let correctCount = 0;
  inputs.forEach(input => {
    const userVal = input.value;
    const correctVal = input.getAttribute("data-ans") || "";
    if (checkAnswerMatch(userVal, correctVal)) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      correctCount++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
    }
  });

  const badge = document.getElementById(`clozeScore-${unitId}`);
  if (badge) {
    badge.innerText = `Natija: ${correctCount} / ${inputs.length}`;
    badge.style.background = correctCount === inputs.length ? "#dcfce7" : "#fef3c7";
    badge.style.color = correctCount === inputs.length ? "#166534" : "#b45309";
  }

  if (correctCount > 0) {
    addStarsAndSave(correctCount, unitId);
  }
}

// 20-Page Story Cloze Checker (Accepts isnt, isn't, is not, numbers, units, etc.)
function checkStoryCloze(pageNum) {
  const inputs = document.querySelectorAll(`.story-cloze-input[data-page="${pageNum}"]`);
  let correctCount = 0;

  inputs.forEach(input => {
    // Remove existing hint if any
    const nextNode = input.nextSibling;
    if (nextNode && nextNode.classList && nextNode.classList.contains("story-ans-hint")) {
      nextNode.remove();
    }

    const userVal = input.value;
    const correctVal = input.getAttribute("data-ans") || "";

    if (checkAnswerMatch(userVal, correctVal)) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      correctCount++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
      // Add small hint badge showing correct answer
      const hint = document.createElement("span");
      hint.className = "story-ans-hint";
      hint.innerText = input.getAttribute("data-ans");
      input.parentNode.insertBefore(hint, input.nextSibling);
    }
  });

  const badge = document.getElementById(`storyScoreBadge-${pageNum}`);
  if (badge) {
    badge.innerText = `Natija: ${correctCount} / ${inputs.length} ball!`;
    badge.style.background = correctCount === inputs.length ? "#dcfce7" : "#fef3c7";
    badge.style.color = correctCount === inputs.length ? "#166534" : "#b45309";
  }

  if (correctCount > 0) {
    addStarsAndSave(correctCount, `cloze-page-${pageNum}`);
  }
}

// Quiz Option Checker
function checkQuizOpt(btn, correctAns, unitId) {
  const parent = btn.parentElement;
  parent.querySelectorAll(".quiz-opt-btn").forEach(b => {
    b.disabled = true;
    b.classList.remove("selected", "correct", "wrong");
  });

  const selectedText = btn.innerText.trim();
  if (checkAnswerMatch(selectedText, correctAns)) {
    btn.classList.add("correct");
    addStarsAndSave(2, `${unitId}-quiz`);
  } else {
    btn.classList.add("wrong");
    parent.querySelectorAll(".quiz-opt-btn").forEach(b => {
      if (checkAnswerMatch(b.innerText.trim(), correctAns)) {
        b.classList.add("correct");
      }
    });
  }
}

// Certificate Modal Controls
function openCertificateModal() {
  const modal = document.getElementById("certModal");
  if (modal) {
    updateUserUI();
    modal.style.display = "flex";
  }
}

function closeCertificateModal() {
  const modal = document.getElementById("certModal");
  if (modal) modal.style.display = "none";
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sb = document.querySelector(".sidebar");
  if (sb) sb.classList.toggle("open");
}

// App Initialization
window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem(ACTIVE_USER_KEY);
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      currentUser = null;
    }
  }

  if (currentUser) {
    // Already authenticated -> unlock web app!
    hideGatekeeper();
    updateUserUI();
    renderSidebarMenu();
    renderItem("unit-1");
  } else {
    // NOT authenticated -> lock strictly behind Gatekeeper!
    showGatekeeper();
    switchAuthTab("login");
  }
});
