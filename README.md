# DESTINATION ENGLISH GRAMMAR 4 - 4-SINF UCHUN TO'LIQ TO'PLAM
### 70 Betlik Mukammal Kitob (PDF) + Interaktiv Veb-Ilova (Qat'iy Login Tizimi va 20 ta Matnli Amaliyot)

Ushbu loyiha 4-sinf o'quvchilari uchun **Destination** (Macmillan) o'quv qo'llanmalari dizayni va metodikasi asosida yaratilgan **aniq 70 betlik kitob** va **interaktiv veb-sayt**dan iborat.

---

## 🌟 Asosiy Imkoniyatlar va Yangilanishlar:

### 1. 📖 Aniq 70 Betlik To'liq Kitob (PDF & HTML):
* **50 bet Asosiy Darslik (Bet 1-50)**:
  * 14 ta to'liq zamon darsi (Present Simple 'To Be', Action Verbs, Negatives/Questions, Present Continuous, Simple vs Continuous, Past Simple 'To Be', Regular Verbs -ed, Irregular Verbs, Past Negatives/Questions, Past Continuous, Future 'be going to', Future Simple 'will', Present Perfect Intro).
  * Har bir mavzuda **10 ta muhim so'z**, so'z turkumi, o'zbekcha tarjimasi, **sinonimi** va misol gapi (jami 140 ta oltin lug'at).
  * Destination uslubidagi qoidalar jadvallari, Destination Tip! eslatmalari, A-E mashqlari, Professor Owl va Benny Bunny qahramonlari.
  * Starter Test, Revision 1, Revision 2, Final Championship Test, Noto'g'ri fe'llar ilovasi va Javoblar kaliti.
* **20 bet Maxsus Matnli Zamonlar Amaliyoti (Bet 51-70)**:
  * **51-bet**: O'qish strategiyasi, kalit so'zlar va 4 oltin qoida.
  * **52–68-betlar**: 17 ta katta sarguzasht hikoyasi. Har bir hikoyada qavs ichida berilgan fe'llarni gap mazmuni va zamoniga qarab to'g'ri shaklga qo'yish topshirig'i.
  * **69-bet**: Barcha 17 ta matnning to'liq javoblar kaliti.
  * **70-bet**: 70 betlik kursni muvaffaqiyatli bitirganlik to'g'risidagi **Grand Master Graduation Diploma**.

### 2. 🔒 Qat'iy Login Darvozasi (Auth Gatekeeper):
* **Kirish faqat login bo'lgandan keyingina ruxsat etiladi**: Foydalanuvchi tizimga kirmasdan yoki yangi akkaunt ochmasdan turib veb-sayt sahifalarini, darslarini yoki testlarini ko'ra olmaydi.
* **Yopish (✕) tugmasi olib tashlandi**: Sayt to'liq qulflangan holatda turadi va faqat muvaffaqiyatli login/ro'yxatdan o'tishdan so'nggina darsliklar va menyu ochiladi.
* **1 ta akkaunt nomi faqat 1 marta ishlatiladi**: SQLite ma'lumotlar bazasida `UNIQUE` cheklovi o'rnatilgan. Agar biror o'quvchi nomni band qilsa, boshqa hech kim u nomdan qayta ro'yxatdan o'ta olmaydi. Real-vaqtda tekshiruvchi indikator mavjud.
* **Chiqish (Logout)**: O'quvchi xohlagan paytda "Chiqish" tugmasini bosishi mumkin, bunda dastur yana qaytadan to'liq qulflanadi.

### 3. 🌐 Interaktiv Veb-Ilova (Har bir mavzu alohida):
* **Har bir mavzu alohida sahifada**: 14 ta grammatika darsi va 20 ta matnli amaliyot sahifasi chap menyuda mustaqil sahifalar sifatida ochiladi.
* **Audio Talaffuz (Pronunciation)**: Lug'atdagi so'zlar va hikoyalar yonida **🔊 audio tugmasi** mavjud bo'lib, toza inglizcha ovozda eshitish imkonini beradi.
* **Avtomatik Tekshirish va Yulduzchalar**: Qavsdagi fe'llar kataklariga javob yozilib "Tekshirish" bosilganda, to'g'ri javoblar yashil, xatolar qizil rangda ko'rsatiladi va to'g'ri javob eslatmasi chiqadi. O'quvchiga yulduzcha berilib, ballari bazada saqlanadi.
* **Faxriy Yorliq**: O'quvchining o'z ismi va to'plagan ballari tushirilgan chop etishga tayyor rasmiy faxriy yorliq generatsiya qilinadi.

---

## 🚀 Qanday Ishga Tushirish Kerak?

### 1-usul: Server orqali (Tavsiya etiladi)
1. Papkadagi **`start_website.bat`** faylini ikki marta bosing.
2. Brauzer avtomatik ravishda **http://localhost:8000** manzilida ochiladi.
3. Yangi takrorlanmas akkaunt oching va darslarni boshlang!

### 2-usul: Oflayn rejimda brauzerda ochish
* **[web_app.html](file:///c:/Users/hecker_uz/Desktop/kitob/web_app.html)** faylini to'g'ridan-to'g'ri brauzerda oching.
* `localStorage` orqali to'liq qat'iy login va unikal akkaunt qoidalari oflayn holatda ham ishlaydi.

### 3-usul: 70 Betlik PDF Kitob
* **[Destination_English_Grammar_Grade4.pdf](file:///c:/Users/hecker_uz/Desktop/kitob/Destination_English_Grammar_Grade4.pdf)** — Aniq 70 betdan iborat rangli kitob.
* **[index.html](file:///c:/Users/hecker_uz/Desktop/kitob/index.html)** — 70 betlik kitobni sahifama-sahifa ko'rish va chop etish vositasi.

---

## 📁 Loyiha Fayllari:
| Fayl | Vazifasi |
|---|---|
| `Destination_English_Grammar_Grade4.pdf` | **Aniq 70 betlik tayyor PDF kitob** |
| `index.html` | 70 betlik kitobning to'liq HTML varianti |
| `web_app.html` | Qat'iy Gatekeeper li asosiy interaktiv veb-ilova |
| `site_data.js` | 14 ta dars va 20 ta matnli amaliyot ma'lumotlar bazasi |
| `app.js` | Qat'iy login, avto-tekshiruv, ball va audio mantig'i |
| `style.css` | Destination dizayn tizimi va Gatekeeper stillari |
| `cloze_20_pages_data.py` | 20 ta maxsus matnli sahifa (51-70 betlar) generatori |
| `build_book.py` | 70 betlik kitob va PDF ni tuzuvchi Python skript |
| `server.py` | SQLite bazali Python backend server |
| `users.db` | Unikal o'quvchilar va ularning ballari saqlanuvchi baza |
| `start_website.bat` | Veb-saytni 1 marta bosish bilan ishga tushiruvchi fayl |
