// math_data.js - Complete data for 4th Grade Mathematics (Matematika)
// 14 Comprehensive Units + 20-Page Problem Solving Adventure (Pages 51-70)

const MATH_DATA = {
  units: [
  {
    "id": "math-unit-1",
    "num": 1,
    "title": "Ko'p Xonali Sonlar (1 000 000 gacha sonlar)",
    "subtitle": "Xona birliklari, sinflar va sonlarni taqqoslash",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Ko'p xonali sonlar</b> bir nechta raqamlar yordamida yoziladi. Har uchta xona birligi bitta <b>sinf</b>ni hosil qiladi: <i>Birlar sinfi</i> (birlar, o'nlar, yuzlar), <i>Minglar sinfi</i> (minglar, o'n minglar, yuz minglar) va <i>Millionlar sinfi</i>.",
    "tables": [
      {
        "title": "Xona va Sinflar Jadvali (Place Value Chart)",
        "headers": [
          "Sinf (Period)",
          "Yuzliklar (Hundreds)",
          "O'nliklar (Tens)",
          "Birliklar (Ones)",
          "Misol (Son)"
        ],
        "rows": [
          [
            "Millionlar sinfi",
            "-",
            "-",
            "1 (million)",
            "1 000 000"
          ],
          [
            "Minglar sinfi",
            "5 (yuz ming)",
            "4 (o'n ming)",
            "3 (ming)",
            "543 000"
          ],
          [
            "Birlar sinfi",
            "2 (yuz)",
            "8 (o'n)",
            "7 (bir)",
            "287"
          ]
        ]
      },
      {
        "title": "Sonlarni Yoyib Yozish va Taqqoslash",
        "headers": [
          "Asl Son",
          "Xona Qo'shiluvchilari Yig'indisi",
          "Taqqoslash Namunasi"
        ],
        "rows": [
          [
            "45 230",
            "40 000 + 5 000 + 200 + 30",
            "45 230 > 45 190"
          ],
          [
            "308 045",
            "300 000 + 8 000 + 40 + 5",
            "308 045 < 308 050"
          ],
          [
            "1 000 000",
            "999 999 + 1",
            "1 000 000 > 999 999"
          ]
        ]
      }
    ],
    "tip": "<b>Matematik Qoida!</b> Ko'p xonali sonlarni o'qishda o'ngdan chapga qarab uchtadan raqam ajratiladi (masalan: 345 678). Har bir sinf nomi (ming, million) aytiladi, lekin birlar sinfining nomi aytilmaydi!",
    "time_words": "<b>Asosiy belgilar:</b> > (katta), < (kichik), = (teng), ≈ (taxminan teng).",
    "vocab": [
      {
        "num": 1,
        "word": "Natural son",
        "uz": "Natural son",
        "pos": "ot",
        "synonym": "Sanoq son",
        "meaning": "Narsalarni sanashda ishlatiladigan sonlar (1, 2, 3...)",
        "example": "Eng kichik natural son 1 ga teng, eng kattasi yo'q."
      },
      {
        "num": 2,
        "word": "Xona birligi",
        "uz": "Xona qiymati",
        "pos": "ot",
        "synonym": "Xona",
        "meaning": "Raqamning sondagi tutgan o'rni (birlik, o'nlik, yuzlik...)",
        "example": "542 sonida 4 raqami o'nliklar xonasida turibdi."
      },
      {
        "num": 3,
        "word": "Sinf",
        "uz": "Sinflar guruhi",
        "pos": "ot",
        "synonym": "Guruh",
        "meaning": "O'ngdan boshlab har 3 ta xonadan iborat bo'lim",
        "example": "Minglar sinfiga minglar, o'n minglar va yuz minglar kiradi."
      },
      {
        "num": 4,
        "word": "Yaxlitlash",
        "uz": "Yaxlitlash",
        "pos": "fe'l/ot",
        "synonym": "Taqribiy hisob",
        "meaning": "Sonni eng yaqin o'nlik, yuzlik yoki minglikka keltirish",
        "example": "488 soni yuzliklargacha yaxlitlansa 500 bo'ladi."
      },
      {
        "num": 5,
        "word": "Taqqoslash",
        "uz": "Taqqoslash",
        "pos": "fe'l/ot",
        "synonym": "Chog'ishtirish",
        "meaning": "Sonlarning kattalik, kichiklik yoki tengligini aniqlash",
        "example": "12 500 va 12 400 sonlarini taqqoslasak, 12 500 katta."
      },
      {
        "num": 6,
        "word": "Juft son",
        "uz": "Juft son",
        "pos": "sifat/ot",
        "synonym": "2 ga karrali",
        "meaning": "2 ga qoldiqsiz bo'linadigan va 0, 2, 4, 6, 8 bilan tugaydigan son",
        "example": "56 784 soni 4 bilan tugagani uchun juft sondir."
      },
      {
        "num": 7,
        "word": "Toq son",
        "uz": "Toq son",
        "pos": "sifat/ot",
        "synonym": "Juft bo'lmagan",
        "meaning": "2 ga qoldiqsiz bo'linmaydigan, 1, 3, 5, 7, 9 bilan tugaydigan son",
        "example": "99 999 soni eng katta besh xonali toq sondir."
      },
      {
        "num": 8,
        "word": "Xona qo'shiluvchisi",
        "uz": "Yoyilma shakli",
        "pos": "ot",
        "synonym": "Yig'indi ko'rinishi",
        "meaning": "Sonni xonalar bo'yicha qo'shiluvchilar tarzida yozish",
        "example": "5 200 = 5 000 + 200 ko'rinishida yoziladi."
      },
      {
        "num": 9,
        "word": "Raqam",
        "uz": "Raqam (belgi)",
        "pos": "ot",
        "synonym": "Belgi",
        "meaning": "Sonlarni yozish uchun foydalaniladigan 10 ta belgi (0 dan 9 gacha)",
        "example": "Barcha cheksiz sonlar 10 ta raqam orqali tuziladi."
      },
      {
        "num": 10,
        "word": "Ketma-ketlik",
        "uz": "Qonuniyatli qator",
        "pos": "ot",
        "synonym": "Ketma-ket sonlar",
        "meaning": "Ma'lum qoida bo'yicha birin-ketin kelgan sonlar tizimi",
        "example": "2, 4, 6, 8 qatori juft sonlar ketma-ketligidir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 1: Kosmik Rasadxona va Yulduzlar Hisobi",
      "inst": "Matnni o'qing va qavs ichidagi amallarni bajarib, bo'sh joylarga to'g'ri sonlarni yozing:",
      "text": "Rasadxonada o'quvchilar yulduzlarni o'rganishmoqda. Birinchi teleskopda (1. 20000 + 4000 + 300) {24300} ta yulduz ko'rindi. Ikkinchi teleskopda esa bundan 700 ta ko'p, ya'ni {25000} ta yulduz qayd etildi. 25000 sonida minglar xonasida turgan raqam {5} dir. 99 999 sonidan keyin keladigan eng kichik olti xonali son bu {100000} dir. 450 sonini eng yaqin yuzlikka yaxlitlasak {500} bo'ladi.",
      "answers": {
        "1": "24300",
        "2": "25000",
        "3": "5",
        "4": "100000",
        "5": "500"
      }
    },
    "quiz": [
      {
        "q": "Qaysi qatorda xona qo'shiluvchilari to'g'ri ko'rsatilgan: 34 502 = ?",
        "opts": [
          "30 000 + 4 000 + 500 + 2",
          "3 000 + 400 + 50 + 2",
          "30 000 + 400 + 52"
        ],
        "ans": "30 000 + 4 000 + 500 + 2"
      },
      {
        "q": "Eng katta besh xonali son qaysi?",
        "opts": [
          "99999",
          "100000",
          "90000"
        ],
        "ans": "99999"
      },
      {
        "q": "78 450 va 78 540 sonlarini taqqoslang:",
        "opts": [
          "78 450 < 78 540",
          "78 450 > 78 540",
          "78 450 = 78 540"
        ],
        "ans": "78 450 < 78 540"
      },
      {
        "q": "678 sonini o'nliklargacha yaxlitlang:",
        "opts": [
          "680",
          "670",
          "700"
        ],
        "ans": "680"
      },
      {
        "q": "'Natural son' atamasining ma'nosi nima?",
        "opts": [
          "Sanashda ishlatiladigan sonlar",
          "Faqat noldan kichik sonlar",
          "Harflar bilan yozilgan so'zlar"
        ],
        "ans": "Sanashda ishlatiladigan sonlar"
      }
    ],
    "video": {
      "title": "Place Value Song For Kids | Up To The Millions | 3rd - 5th Grade",
      "desc": "Ko'p xonali sonlar, xona birliklari va milliongacha bo'lgan sonlar haqida video dars:",
      "youtube_id": "MloZcl1JJEI"
    }
  },
  {
    "id": "math-unit-2",
    "num": 2,
    "title": "Ko'p Xonali Sonlarni Qo'shish va Ayirish",
    "subtitle": "Ustun usuli, xonadan o'tish va tekshirish usullari",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Qo'shish va ayirish</b> amallari ustun shaklida xonama-xona (birlar birlar tagiga, o'nlar o'nlar tagiga) yozilib bajariladi. Qo'shishda xona birligi 10 dan oshsa, keyingi xonaga 1 qo'shiladi. Ayirishda kichik raqamdan kattasini ayirib bo'lmasa, qo'shni chap xonadan 1 o'nlik qarz olinadi.",
    "tables": [
      {
        "title": "Ustun Shaklida Amallar Qoidasi",
        "headers": [
          "Amal",
          "Yozilishi",
          "Bajarish Bosqichlari",
          "Qoida / Xossa"
        ],
        "rows": [
          [
            "Qo'shish (+)",
            "45 280 + 23 450 = 68 730",
            "Birlardan boshlanadi, 10 dan oshsa o'tadi",
            "a + b = b + a (O'rin almashtirish)"
          ],
          [
            "Ayirish (-)",
            "84 000 - 32 500 = 51 500",
            "0 dan ayirishda yuqori xonadan qarz olinadi",
            "Kamayuvchi = Ayriluvchi + Ayirma"
          ],
          [
            "Tekshirish",
            "68 730 - 23 450 = 45 280",
            "Qo'shishni ayirish bilan tekshirish",
            "Teskari amallar qoidasi"
          ]
        ]
      }
    ],
    "tip": "<b>Ustoz maslahati!</b> Ayriluvchi va ayirma qo'shilsa, har doim kamayuvchi hosil bo'ladi. Agar hisobingiz to'g'riligiga shubha qilsangiz, ayirmani ayriluvchiga qo'shib tekshirib ko'ring!",
    "time_words": "<b>Formulalar:</b> Yig'indi = a + b, Kamayuvchi - Ayriluvchi = Ayirma, x = Yig'indi - a.",
    "vocab": [
      {
        "num": 1,
        "word": "Qo'shiluvchi",
        "uz": "Qo'shiluvchi son",
        "pos": "ot",
        "synonym": "Yig'iluvchi",
        "meaning": "Qo'shish amalida qatnashayotgan har bir son",
        "example": "25 + 15 = 40 ifodada 25 va 15 qo'shiluvchilardir."
      },
      {
        "num": 2,
        "word": "Yig'indi",
        "uz": "Qo'shish natijasi",
        "pos": "ot",
        "synonym": "Jami",
        "meaning": "Qo'shish amali natijasida hosil bo'lgan umumiy son",
        "example": "40 soni berilgan amaldagi yig'indidir."
      },
      {
        "num": 3,
        "word": "Kamayuvchi",
        "uz": "Boshlang'ich son",
        "pos": "ot",
        "synonym": "Katta son",
        "meaning": "Ayirish amalida kamaytirilayotgan birinchi son",
        "example": "70 - 20 = 50 ifodada 70 kamayuvchidir."
      },
      {
        "num": 4,
        "word": "Ayriluvchi",
        "uz": "Ayirib tashlanuvchi",
        "pos": "ot",
        "synonym": "Kamaytiruvchi",
        "meaning": "Birinchi sondan ayirib olinayotgan ikkinchi son",
        "example": "70 dan 20 ayirilsa, 20 ayriluvchidir."
      },
      {
        "num": 5,
        "word": "Ayirma",
        "uz": "Ayirish natijasi",
        "pos": "ot",
        "synonym": "Farq",
        "meaning": "Kamayuvchi va ayriluvchi orasidagi farq",
        "example": "70 va 20 sonlarining ayirmasi 50 ga teng."
      },
      {
        "num": 6,
        "word": "Ustun shakli",
        "uz": "Tagma-tag yozish",
        "pos": "ot",
        "synonym": "Ustun usuli",
        "meaning": "Sonlarni xona birliklari bo'yicha vertikal yozib hisoblash",
        "example": "Ustun usulida birlar birlar tagiga yoziladi."
      },
      {
        "num": 7,
        "word": "Xonadan o'tish",
        "uz": "O'nlik uzatish",
        "pos": "ot",
        "synonym": "O'tkazma",
        "meaning": "Xona yig'indisi 9 dan oshganda 1 ni keyingi xonaga qo'shish",
        "example": "8 + 5 = 13 bo'lib, 3 yoziladi, 1 keyingi xonaga o'tadi."
      },
      {
        "num": 8,
        "word": "Qarz olish",
        "uz": "Kattaroq xonadan olish",
        "pos": "ot",
        "synonym": "O'nlik olish",
        "meaning": "Ayirishda kichik xonaga qo'shni chap xonadan 10 qo'shish",
        "example": "0 dan 5 ni ayirish uchun yuzlikdan 1 o'nlik qarz olinadi."
      },
      {
        "num": 9,
        "word": "Teskari amal",
        "uz": "Qarama-qarshi amal",
        "pos": "ot",
        "synonym": "Tekshiruv amali",
        "meaning": "Bajarilgan hisobni teskarisiga tekshirish (masalan: qo'shish <-> ayirish)",
        "example": "Ayirishni tekshirish uchun ayirmaga ayriluvchi qo'shiladi."
      },
      {
        "num": 10,
        "word": "Tenglama",
        "uz": "Noma'lumli tenglik",
        "pos": "ot",
        "synonym": "Tenglik",
        "meaning": "Noma'lum son x qatnashgan matematik ifoda",
        "example": "x + 250 = 600 tenglamada x = 350 bo'ladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 2: Maktab Kutubxonasidagi Kitoblar Fondi",
      "inst": "Matnni o'qing va hisob-kitoblarni amalga oshirib, bo'sh joylarni to'ldiring:",
      "text": "Kutubxonada 45 600 ta badiiy kitob va 34 200 ta darslik bor edi. Jami kitoblar soni (45600 + 34200) {79800} tani tashkil etdi. Yil oxirida maktabga yana 12 200 ta yangi kitob keltirildi, natijada kitoblar {92000} taga yetdi. O'quvchilarga 20 000 ta kitob o'qishga tarqatilgach, kutubxonada {72000} ta kitob qoldi. Agar x + 500 = 1200 bo'lsa, x ning qiymati {700} bo'ladi.",
      "answers": {
        "1": "79800",
        "2": "92000",
        "3": "72000",
        "4": "700"
      }
    },
    "quiz": [
      {
        "q": "34 500 + 15 500 yig'indisi nechaga teng?",
        "opts": [
          "50000",
          "49000",
          "51000"
        ],
        "ans": "50000"
      },
      {
        "q": "100 000 - 45 000 ayirmasi nechaga teng?",
        "opts": [
          "55000",
          "65000",
          "45000"
        ],
        "ans": "55000"
      },
      {
        "q": "Qaysi xossa to'g'ri: a + b = ?",
        "opts": [
          "b + a",
          "b - a",
          "a * b"
        ],
        "ans": "b + a"
      },
      {
        "q": "Tenglamani yeching: x - 400 = 600",
        "opts": [
          "1000",
          "200",
          "800"
        ],
        "ans": "1000"
      },
      {
        "q": "'Kamayuvchi' nima?",
        "opts": [
          "Ayirishda birinchi turgan katta son",
          "Qo'shish natijasi",
          "Bo'lishdagi qoldiq"
        ],
        "ans": "Ayirishda birinchi turgan katta son"
      }
    ],
    "video": {
      "title": "Math Antics - Multi-Digit Addition",
      "desc": "Ko'p xonali sonlarni ustun usulida qo'shish va ayirish video darsi:",
      "youtube_id": "mAvuom42NyY"
    }
  },
  {
    "id": "math-unit-3",
    "num": 3,
    "title": "Ko'p Xonali Sonlarni Ko'paytirish",
    "subtitle": "1, 2 va 3 xonali sonlarga ko'paytirish hamda qonun-qoidalar",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Ko'paytirish</b> bir xil qo'shiluvchilar yig'indisini tez topish amali. Ikki xonali songa ko'paytirishda oldin birliklarga, keyin o'nliklarga ko'paytirilib, oraliq natijalar bir xona chapga surilib qo'shiladi. Nol bilan tugagan sonlarni ko'paytirishda nollarni vaqtincha chetga surib, raqamlar ko'paytiriladi va oxiriga jami nollar yoziladi.",
    "tables": [
      {
        "title": "Ko'paytirish Xossalari va Qoidalari",
        "headers": [
          "Xossa Nomi",
          "Formula",
          "Misol",
          "Qoida Ma'nosi"
        ],
        "rows": [
          [
            "O'rin almashtirish",
            "a * b = b * a",
            "25 * 4 = 4 * 25 = 100",
            "Ko'paytuvchilar o'rni almashsa, ko'paytma o'zgarmaydi"
          ],
          [
            "Guruhlash",
            "(a * b) * c = a * (b * c)",
            "(5 * 20) * 7 = 100 * 7 = 700",
            "Qulay tartibda guruhlab hisoblash mumkin"
          ],
          [
            "Taqsimot",
            "a * (b + c) = a*b + a*c",
            "6 * (10 + 5) = 60 + 30 = 90",
            "Qavsdagi har bir songa alohida ko'paytiriladi"
          ],
          [
            "Nol va Bir xossasi",
            "a * 0 = 0; a * 1 = a",
            "540 * 0 = 0; 540 * 1 = 540",
            "Nolga ko'paytirsa 0, birga ko'paytirsa o'zi chiqadi"
          ]
        ]
      }
    ],
    "tip": "<b>Tez hisoblash siri!</b> Sonni 5 ga ko'paytirish uchun uni 10 ga ko'paytirib, keyin 2 ga bo'lish mumkin: 24 * 5 = 240 / 2 = 120!",
    "time_words": "<b>Asosiy formulalar:</b> Ko'paytma = a * b, a * (b + c) = ab + ac.",
    "vocab": [
      {
        "num": 1,
        "word": "Ko'paytuvchi",
        "uz": "Ko'paytuvchi son",
        "pos": "ot",
        "synonym": "Zarb qilinuvchi",
        "meaning": "Ko'paytirish amalida qatnashayotgan har bir son",
        "example": "6 * 7 = 42 ifodada 6 va 7 ko'paytuvchilardir."
      },
      {
        "num": 2,
        "word": "Ko'paytma",
        "uz": "Ko'paytirish natijasi",
        "pos": "ot",
        "synonym": "Hasil zarb",
        "meaning": "Ko'paytirish amali natijasida chiqqan qiymat",
        "example": "42 soni 6 va 7 ning ko'paytmasidir."
      },
      {
        "num": 3,
        "word": "Karrali son",
        "uz": "Bo'linuvchi son",
        "pos": "sifat/ot",
        "synonym": "Karrasi",
        "meaning": "Berilgan songa qoldiqsiz bo'linadigan son",
        "example": "20 soni 5 ga karralidir, chunki 20:5=4."
      },
      {
        "num": 4,
        "word": "Taqsimot qonuni",
        "uz": "Qavsni ochish",
        "pos": "ot",
        "synonym": "Ulushli qoida",
        "meaning": "a*(b+c) = a*b + a*c qoidasi bo'yicha ko'paytirish",
        "example": "Taqsimot qonuni qiyin ifodalarni oson yechishga yordam beradi."
      },
      {
        "num": 5,
        "word": "Oraliq ko'paytma",
        "uz": "Qadamma-qadam natija",
        "pos": "ot",
        "synonym": "Chala ko'paytma",
        "meaning": "Ikki xonali songa ko'paytirishdagi birinchi va ikkinchi qator",
        "example": "Ustun usulida oraliq ko'paytmalar qo'shib yakuniy son topiladi."
      },
      {
        "num": 6,
        "word": "Nollarga ko'paytirish",
        "uz": "Dumaloq sonlar",
        "pos": "ot",
        "synonym": "Nolli hisob",
        "meaning": "Oxiri 0 bilan tugagan sonlarni ko'paytirish usuli",
        "example": "40 * 300 = 12 000 (4*3=12 va 3 ta nol yoziladi)."
      },
      {
        "num": 7,
        "word": "Karra oshirish",
        "uz": "Marta kattalashtirish",
        "pos": "fe'l",
        "synonym": "Ko'paytirish",
        "meaning": "Sonni bir necha marta ko'paytirish",
        "example": "5 ni 6 marta oshirish 5 * 6 = 30 demakdir."
      },
      {
        "num": 8,
        "word": "Ko'paytirish jadvali",
        "uz": "Karra jadval",
        "pos": "ot",
        "synonym": "Pifagor jadvali",
        "meaning": "1 dan 10 gacha bo'lgan sonlarning ko'paytmalari tizimi",
        "example": "Karra jadvalini bilish tez hisoblash asosi hisoblanadi."
      },
      {
        "num": 9,
        "word": "Guruhlash",
        "uz": "Qulay birlashtirish",
        "pos": "ot",
        "synonym": "Guruhlab hisoblash",
        "meaning": "(a*b)*c = a*(b*c) xossasi orqali qulay ko'paytirish",
        "example": "4 * 89 * 25 = (4 * 25) * 89 = 100 * 89 = 8900."
      },
      {
        "num": 10,
        "word": "Ko'paytma qiymati",
        "uz": "Natijaviy son",
        "pos": "ot",
        "synonym": "Yechim",
        "meaning": "Hisoblash yakunida hosil bo'lgan sof javob",
        "example": "Ifodaning ko'paytma qiymati 2400 ga teng bo'ldi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 3: Bog'bonning Hosil Yig'imi",
      "inst": "Matnni o'qing va amallarni bajarib, bo'sh joylarga to'g'ri sonlarni yozing:",
      "text": "Bog'bon har bir qutiga 25 kg dan olma joyladi. Jami 40 ta quti tayyorlandi. Barcha qutilardagi olma (25 * 40) {1000} kg bo'ldi. Ertasi kuni har birida 12 kg dan bo'lgan 30 quti nok terildi, noklar jami {360} kg ni tashkil etdi. Olma va noklarning jami og'irligi {1360} kg bo'ldi. Har qanday sonni 0 ga ko'paytirganda natija {0} bo'ladi.",
      "answers": {
        "1": "1000",
        "2": "360",
        "3": "1360",
        "4": "0"
      }
    },
    "quiz": [
      {
        "q": "25 * 40 ko'paytmasi nechaga teng?",
        "opts": [
          "1000",
          "100",
          "10000"
        ],
        "ans": "1000"
      },
      {
        "q": "120 * 30 ko'paytmasi nechaga teng?",
        "opts": [
          "3600",
          "360",
          "36000"
        ],
        "ans": "3600"
      },
      {
        "q": "Sonni 0 ga ko'paytirsa necha hosil bo'ladi?",
        "opts": [
          "0",
          "1",
          "O'sha sonning o'zi"
        ],
        "ans": "0"
      },
      {
        "q": "Qulay usulda hisoblang: 5 * 37 * 20 = ?",
        "opts": [
          "3700",
          "370",
          "37000"
        ],
        "ans": "3700"
      },
      {
        "q": "45 * 11 ko'paytmasi nechaga teng?",
        "opts": [
          "495",
          "450",
          "505"
        ],
        "ans": "495"
      }
    ],
    "video": {
      "title": "2-Digit by 2-Digit Multiplication | Math with Mr. J",
      "desc": "Ko'p xonali sonlarni 2 xonali songa ko'paytirish usullari video darsi:",
      "youtube_id": "PZjIT9CH6bM"
    }
  },
  {
    "id": "math-unit-4",
    "num": 4,
    "title": "Ko'p Xonali Sonlarni Bo'lish va Qoldiq",
    "subtitle": "Burchak usulida bo'lish, qoldiqli bo'lish va tekshirish",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Bo'lish</b> amali narsalarni teng ulushlarga taqsimlashni bildiradi. Ko'p xonali sonlarni bo'lish yuqori xonadan boshlanadi. Agar son to'liq bo'linmasa, <b>qoldiq</b> qoladi. Qoldiq doimo bo'luvchidan kichik bo'lishi shart! Formula: <code>Bo'linuvchi = Bo'luvchi * To'liqsiz_bo'linma + Qoldiq</code>.",
    "tables": [
      {
        "title": "Bo'lish va Qoldiqli Bo'lish Qoidalari",
        "headers": [
          "Amal Turi",
          "Misol",
          "Formula",
          "Qoida / Talab"
        ],
        "rows": [
          [
            "Qoldiqsiz bo'lish",
            "4 800 : 6 = 800",
            "a : b = c",
            "Natijada qoldiq nolga teng bo'ladi"
          ],
          [
            "Qoldiqli bo'lish",
            "27 : 4 = 6 (qoldiq 3)",
            "a = b * c + r",
            "Qoldiq har doim bo'luvchidan kichik bo'lishi shart (r < b)"
          ],
          [
            "Bo'linishni tekshirish",
            "4 * 6 + 3 = 24 + 3 = 27",
            "Bo'linuvchi = Bo'luvchi * c + r",
            "Ko'paytirish va qo'shish orqali tekshiriladi"
          ]
        ]
      }
    ],
    "tip": "<b>Oltin Qoida!</b> Nolni istalgan noldan farqli songa bo'lsa, 0 chiqadi (0 : 5 = 0). Lekin sonni 0 ga bo'lish MATEMATIKADA MUMKIN EMAS!",
    "time_words": "<b>Formulalar:</b> a : b = c, a = b * c + r (r < b), x = Bo'luvchi * Bo'linma.",
    "vocab": [
      {
        "num": 1,
        "word": "Bo'linuvchi",
        "uz": "Bo'linuvchi son",
        "pos": "ot",
        "synonym": "Katta son",
        "meaning": "Bo'lish amalida bo'linayotgan birinchi son",
        "example": "48 : 6 = 8 ifodada 48 bo'linuvchidir."
      },
      {
        "num": 2,
        "word": "Bo'luvchi",
        "uz": "Bo'luvchi son",
        "pos": "ot",
        "synonym": "Taqsimlovchi",
        "meaning": "Bo'linuvchi nechta qismga bo'linayotganini ko'rsatuvchi son",
        "example": "48 : 6 = 8 ifodada 6 bo'luvchidir."
      },
      {
        "num": 3,
        "word": "Bo'linma",
        "uz": "Bo'lish natijasi",
        "pos": "ot",
        "synonym": "Natija",
        "meaning": "Bo'lish amali natijasida chiqqan qiymat",
        "example": "48 ning 6 ga bo'linmasi 8 ga teng."
      },
      {
        "num": 4,
        "word": "Qoldiq",
        "uz": "Ortib qolgan son",
        "pos": "ot",
        "synonym": "Ortiqcha",
        "meaning": "Bo'lish to'liq bajarilmaganda ortib qolgan qism",
        "example": "19 ni 4 ga bo'lsak, 4 chiqadi va 3 qoldiq qoladi."
      },
      {
        "num": 5,
        "word": "Burchak usuli",
        "uz": "Ustunli bo'lish",
        "pos": "ot",
        "synonym": "Yozma bo'lish",
        "meaning": "Sonlarni burchak chizig'i ichida qadamma-qadam bo'lish",
        "example": "Burchak usulida har bir qadam ayirish orqali tekshiriladi."
      },
      {
        "num": 6,
        "word": "Qoldiqsiz bo'linish",
        "uz": "To'liq bo'linish",
        "pos": "sifat/ot",
        "synonym": "Butun bo'linish",
        "meaning": "Qoldiq 0 ga teng bo'lgan mukammal bo'linish",
        "example": "100 soni 25 ga qoldiqsiz bo'linadi (4 chiqadi)."
      },
      {
        "num": 7,
        "word": "Nolga bo'lish mumkin emas",
        "uz": "Taqiqlangan amal",
        "pos": "ot",
        "synonym": "Qat'iy qoida",
        "meaning": "Matematikada hech qanday son 0 ga bo'linmaydi",
        "example": "10 : 0 ifodasi ma'noga ega emas."
      },
      {
        "num": 8,
        "word": "Bo'linish alomati",
        "uz": "Qoidalar to'plami",
        "pos": "ot",
        "synonym": "Alomat",
        "meaning": "Sonni bo'lmasdan turib unga bo'linishini bilish qoidasi",
        "example": "Oxiri 0 yoki 5 bilan tugagan sonlar 5 ga bo'linadi."
      },
      {
        "num": 9,
        "word": "Karra kamaytirish",
        "uz": "Marta kichraytirish",
        "pos": "fe'l",
        "synonym": "Bo'lish",
        "meaning": "Sonni berilgan miqdorga bo'lib kamaytirish",
        "example": "40 ni 4 marta kamaytirsak 10 hosil bo'ladi."
      },
      {
        "num": 10,
        "word": "Teng taqsimlash",
        "uz": "Teng bo'lib berish",
        "pos": "ot",
        "synonym": "Adolatli taqsim",
        "meaning": "Narsalarni har bir ishtirokchiga teng sondan taqsimlash",
        "example": "18 ta daftarni 3 o'quvchiga 6 tadan teng taqsimlash mumkin."
      }
    ],
    "cloze": {
      "title": "Topshiriq 4: Sovg'alarni Teng Taqsimlash",
      "inst": "Matnni o'qing va bo'lish amallarini bajarib, bo'sh joylarni to'ldiring:",
      "text": "Ustaxonada 720 ta o'yinchoq tayyorlandi va 8 ta qutiga teng taqsimlandi. Har bir qutiga (720 : 8) {90} tadan o'yinchoq joylandi. 35 ta shokoladni 4 nafar bolaga teng bo'lganda, har biriga {8} tadan tushdi va {3} ta shokolad qoldiq qoldi. Agar x : 6 = 50 bo'lsa, x ning qiymati {300} ga teng bo'ladi.",
      "answers": {
        "1": "90",
        "2": "8",
        "3": "3",
        "4": "300"
      }
    },
    "quiz": [
      {
        "q": "720 : 9 bo'linmasi nechaga teng?",
        "opts": [
          "80",
          "8",
          "800"
        ],
        "ans": "80"
      },
      {
        "q": "37 ni 5 ga bo'lganda qoldiq necha bo'ladi?",
        "opts": [
          "2",
          "7",
          "5"
        ],
        "ans": "2"
      },
      {
        "q": "Qaysi qoldiq 6 ga bo'lishda bo'lishi MUMKIN EMAS?",
        "opts": [
          "7",
          "5",
          "3"
        ],
        "ans": "7"
      },
      {
        "q": "Tenglamani yeching: x : 7 = 40",
        "opts": [
          "280",
          "47",
          "33"
        ],
        "ans": "280"
      },
      {
        "q": "0 : 25 ifodaning natijasi nima bo'ladi?",
        "opts": [
          "0",
          "25",
          "Mumkin emas"
        ],
        "ans": "0"
      }
    ],
    "video": {
      "title": "Long Division. DMSB. Grade 4",
      "desc": "Burchak usulida bo'lish (Long Division) qoidalari video darsi:",
      "youtube_id": "2-sP854NMLw"
    }
  },
  {
    "id": "math-unit-5",
    "num": 5,
    "title": "Amallar Tartibi va Qavsli Ifodalar",
    "subtitle": "Arifmetik amallarning qat'iy ketma-ketligi va tenglamalar",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Amallar tartibi</b> arifmetik ifodaning to'g'ri qiymatini topish qoidasidir: <b>1-bosqich:</b> Qavs ichidagi amallar; <b>2-bosqich:</b> Ko'paytirish va bo'lish amallari (chapdan o'ngga qarab); <b>3-bosqich:</b> Qo'shish va ayirish amallari (chapdan o'ngga qarab).",
    "tables": [
      {
        "title": "Amallar Bajarilish Tartibi Qoidasi",
        "headers": [
          "Bosqich",
          "Amal Nomi",
          "Misol Ifoda",
          "Hisoblash Ketma-ketligi"
        ],
        "rows": [
          [
            "1-navbatda",
            "Qavslar ( )",
            "40 + (15 - 5) * 2",
            "Oldin qavs: 15 - 5 = 10"
          ],
          [
            "2-navbatda",
            "Ko'paytirish (*) va Bo'lish (:)",
            "40 + 10 * 2",
            "Keyin ko'paytirish: 10 * 2 = 20"
          ],
          [
            "3-navbatda",
            "Qo'shish (+) va Ayirish (-)",
            "40 + 20 = 60",
            "Oxirida qo'shish: 40 + 20 = 60"
          ]
        ]
      }
    ],
    "tip": "<b>Diqqat qiling!</b> 20 + 20 * 0 ifodasida avval ko'paytirish bajariladi (20 * 0 = 0), keyin qo'shiladi (20 + 0 = 20). Natija 0 emas, 20 chiqadi!",
    "time_words": "<b>Qoida:</b> Qavslar -> Ko'paytirish / Bo'lish -> Qo'shish / Ayirish.",
    "vocab": [
      {
        "num": 1,
        "word": "Arifmetik ifoda",
        "uz": "Hisoblash ifodasi",
        "pos": "ot",
        "synonym": "Misol",
        "meaning": "Sonlar va amal belgilari qatnashgan yozuv",
        "example": "120 + 40 * 2 arifmetik ifodaga misoldir."
      },
      {
        "num": 2,
        "word": "Qavs",
        "uz": "Qavs belgilari",
        "pos": "ot",
        "synonym": "Birlashtiruvchi",
        "meaning": "Birinchi bajarilishi shart bo'lgan amalni ajratuvchi belgi ( )",
        "example": "Qavs ichidagi amal birinchi navbatda bajariladi."
      },
      {
        "num": 3,
        "word": "Amallar tartibi",
        "uz": "Bajarilish qoidasi",
        "pos": "ot",
        "synonym": "Ketma-ketlik",
        "meaning": "Amallarning qat'iy matematik navbati",
        "example": "Amallar tartibi buzilsa, butun javob xato chiqadi."
      },
      {
        "num": 4,
        "word": "Ifoda qiymati",
        "uz": "Yakuniy natija",
        "pos": "ot",
        "synonym": "Javob",
        "meaning": "Barcha amallar bajarilgach chiqqan sonli qiymat",
        "example": "Ushbu ifodaning qiymati 100 ga teng bo'ldi."
      },
      {
        "num": 5,
        "word": "Harfli ifoda",
        "uz": "O'zgaruvchili ifoda",
        "pos": "ot",
        "synonym": "Parametrli ifoda",
        "meaning": "Tarkibida harflar (a, b, x) qatnashgan ifoda",
        "example": "2 * a + 10 ifodada a=5 bo'lsa, qiymat 20 bo'ladi."
      },
      {
        "num": 6,
        "word": "Tenglama ildizi",
        "uz": "Yechim",
        "pos": "ot",
        "synonym": "x ning qiymati",
        "meaning": "Tenglikni to'g'ri qiluvchi noma'lum son qiymati",
        "example": "x + 30 = 100 tenglamaning ildizi 70 ga teng."
      },
      {
        "num": 7,
        "word": "Tenglik",
        "uz": "Teng bo'lgan ifoda",
        "pos": "ot",
        "synonym": "Barobarlik",
        "meaning": "Chap va o'ng tomoni teng bo'lgan matematik yozuv (=)",
        "example": "20 + 30 = 50 tenglikka misoldir."
      },
      {
        "num": 8,
        "word": "Tengsizlik",
        "uz": "Teng bo'lmagan ifoda",
        "pos": "ot",
        "synonym": "Katta/kichiklik",
        "meaning": "> yoki < belgilari bilan yozilgan munosabat",
        "example": "45 > 30 to'g'ri tengsizlikdir."
      },
      {
        "num": 9,
        "word": "Soddalashtirish",
        "uz": "Qulay qilish",
        "pos": "fe'l/ot",
        "synonym": "Osonlashtirish",
        "meaning": "Ifodani qisqartirib oson ko'rinishga keltirish",
        "example": "Qavslarni ochib ifodani soddalashtiramiz."
      },
      {
        "num": 10,
        "word": "Ketma-ket hisoblash",
        "uz": "Qadam-baqadam",
        "pos": "ot",
        "synonym": "Algoritm",
        "meaning": "Har bir amalni navbati bilan alohida hisoblab borish",
        "example": "Murakkab misollarni ketma-ket hisoblash xatoni oldini oladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 5: Sehrli Laboratoriya Formulalari",
      "inst": "Amallar tartibiga qat'iy rioya qilib, ifodalarning qiymatlarini toping:",
      "text": "Professor Owl quyidagi tajriba ifodasini tuzdi: 50 + 20 * 3. Amallar tartibiga ko'ra avval ko'paytirilib, so'ng qo'shiladi va natija {110} chiqadi. Keyingi ifoda qavsli: (50 + 20) * 3 bo'lib, uning qiymati {210} bo'ladi. 100 - 80 : 4 ifodasida esa avval bo'linadi va natija {80} hosil bo'ladi. 200 - (30 + 70) ifodaning qiymati {100} dir.",
      "answers": {
        "1": "110",
        "2": "210",
        "3": "80",
        "4": "100"
      }
    },
    "quiz": [
      {
        "q": "20 + 5 * 4 ifodaning qiymati nechaga teng?",
        "opts": [
          "40",
          "100",
          "29"
        ],
        "ans": "40"
      },
      {
        "q": "(20 + 5) * 4 ifodaning qiymati nechaga teng?",
        "opts": [
          "100",
          "40",
          "80"
        ],
        "ans": "100"
      },
      {
        "q": "60 : 2 + 3 * 10 ifodaning qiymati nechaga teng?",
        "opts": [
          "60",
          "330",
          "150"
        ],
        "ans": "60"
      },
      {
        "q": "50 - 50 * 0 ifodaning qiymati nechaga teng?",
        "opts": [
          "50",
          "0",
          "1"
        ],
        "ans": "50"
      },
      {
        "q": "Birinchi qaysi amal bajariladi: 40 + (12 : 3) * 5?",
        "opts": [
          "Qavs ichidagi bo'lish (12 : 3)",
          "Qo'shish (40 + 12)",
          "Ko'paytirish (3 * 5)"
        ],
        "ans": "Qavs ichidagi bo'lish (12 : 3)"
      }
    ],
    "video": {
      "title": "Order of Operations (PEMDAS) | Easy Math Lesson with Examples",
      "desc": "Amallar tartibi (PEMDAS) va qavslarni yechish video darsi:",
      "youtube_id": "KjuASYpTzA4"
    }
  },
  {
    "id": "math-unit-6",
    "num": 6,
    "title": "Oddiy Kasrlar bilan Tanishuv",
    "subtitle": "Butun va ulush, kasr surati va maxraji, taqqoslash",
    "tag": "Sonlar va Arifmetika • 4-Sinf",
    "meaning": "<b>Kasr</b> butun narsaning bir yoki bir nechta teng bo'lagini ifodalaydi. Kasr yozuvida chiziq ustidagi son <b>surat</b> (nechta bo'lak olingani), chiziq ostidagi son <b>maxraj</b> (butun nechta teng bo'lakka bo'lingani) deyiladi. Masalan, <code>3/4</code> (to'rtdan uch).",
    "tables": [
      {
        "title": "Kasr Turlari va Ulushlar Jadvali",
        "headers": [
          "Kasr Nomi",
          "Yozilishi",
          "Surat va Maxraj",
          "Ma'nosi / Shakli"
        ],
        "rows": [
          [
            "Yarim (Half)",
            "1/2",
            "Surat: 1, Maxraj: 2",
            "Butun teng 2 qismga bo'linib, 1 qismi olingan"
          ],
          [
            "Chorak (Quarter)",
            "1/4",
            "Surat: 1, Maxraj: 4",
            "Butun teng 4 qismga bo'linib, 1 qismi olingan"
          ],
          [
            "To'g'ri kasr",
            "3/5",
            "Surat < Maxraj (3 < 5)",
            "Qiymati 1 dan kichik bo'lgan kasr"
          ],
          [
            "Noto'g'ri kasr",
            "5/5 yoki 7/4",
            "Surat >= Maxraj",
            "Qiymati 1 ga teng yoki 1 dan katta kasr"
          ]
        ]
      }
    ],
    "tip": "<b>Muhim qoida!</b> Maxrajlari bir xil bo'lgan kasrlardan qaysi birining surati katta bo'lsa, o'sha kasr katta bo'ladi: 3/5 > 1/5!",
    "time_words": "<b>Belgilar:</b> 1/2 (yarim), 1/4 (chorak), 3/4 (to'rtdan uch), Surat / Maxraj.",
    "vocab": [
      {
        "num": 1,
        "word": "Kasr",
        "uz": "Ulushli son",
        "pos": "ot",
        "synonym": "Kars",
        "meaning": "Butunning teng qismlarini ifodalovchi son",
        "example": "Pitsaning ikkidan bir qismi 1/2 kasri bilan ifodalanadi."
      },
      {
        "num": 2,
        "word": "Surat",
        "uz": "Tepadagi son",
        "pos": "ot",
        "synonym": "Bo'laklar soni",
        "meaning": "Kasr chizig'i ustidagi olingan qismlar soni",
        "example": "3/7 kasrida 3 surati bo'ladi."
      },
      {
        "num": 3,
        "word": "Maxraj",
        "uz": "Pastdagi son",
        "pos": "ot",
        "synonym": "Bo'lingan qismlar",
        "meaning": "Butun nechta teng qismga bo'linganini ko'rsatuvchi son",
        "example": "3/7 kasrida 7 maxraji bo'ladi."
      },
      {
        "num": 4,
        "word": "Kasr chizig'i",
        "uz": "Bo'lish chizig'i",
        "pos": "ot",
        "synonym": "Gorizontal chiziq",
        "meaning": "Surat va maxraj orasidagi bo'lish ma'nosidagi chiziq",
        "example": "Kasr chizig'i bo'lish amali bilan bir xil ma'noga ega."
      },
      {
        "num": 5,
        "word": "Ulush",
        "uz": "Bitta bo'lak",
        "pos": "ot",
        "synonym": "Teng qism",
        "meaning": "Butunning 1 ga teng bo'lgan har bir bo'lagi (1/n)",
        "example": "Nonning to'rtdan bir ulushini do'stimga berdim."
      },
      {
        "num": 6,
        "word": "Yarim",
        "uz": "Teng ikkiga bo'lingan",
        "pos": "ot",
        "synonym": "1/2",
        "meaning": "Butun narsaning teng ikki bo'lagidan biri",
        "example": "Bir soatning yarmi 30 minutga teng."
      },
      {
        "num": 7,
        "word": "Chorak",
        "uz": "To'rtdan bir qism",
        "pos": "ot",
        "synonym": "1/4",
        "meaning": "Butunning to'rtdan bir qismi",
        "example": "Bir soatning choragi 15 minutga teng."
      },
      {
        "num": 8,
        "word": "To'g'ri kasr",
        "uz": "1 dan kichik kasr",
        "pos": "ot",
        "synonym": "Oddiy kasr",
        "meaning": "Surati maxrajidan kichik bo'lgan kasr (masalan: 2/5)",
        "example": "To'g'ri kasrning qiymati har doim 1 dan kichikdir."
      },
      {
        "num": 9,
        "word": "Noto'g'ri kasr",
        "uz": "1 ga teng yoki katta",
        "pos": "ot",
        "synonym": "Katta kasr",
        "meaning": "Surati maxrajiga teng yoki undan katta kasr (masalan: 6/5)",
        "example": "4/4 kasri 1 butunga teng noto'g'ri kasrdir."
      },
      {
        "num": 10,
        "word": "Kasrlarni taqqoslash",
        "uz": "Kattasini aniqlash",
        "pos": "fe'l/ot",
        "synonym": "Chog'ishtirish",
        "meaning": "Bir xil maxrajli kasrlarning suratlarini solishtirish",
        "example": "5/8 va 3/8 kasrlaridan 5/8 kattadir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 6: Bennyning Pitsa Bazmi",
      "inst": "Hikoyani o'qing va kasrlar haqidagi savollarga to'g'ri javoblarni yozing:",
      "text": "Benny katta pitsani 8 ta teng bo'lakka bo'ldi. U do'sti Leo bilan 5 ta bo'lakni yeb qo'ydi. Ular pitsaning {5/8} qismini yeyishdi. Qutida pitsaning {3/8} qismi qoldi. 3/8 kasrida surat {3} ga, maxraj esa {8} ga teng. Agar butun olma 2 ga teng bo'linsa, uning bir bo'lagi {1/2} yoki yarim deyiladi.",
      "answers": {
        "1": "5/8",
        "2": "3/8",
        "3": "3",
        "4": "8",
        "5": "1/2"
      }
    },
    "quiz": [
      {
        "q": "3/7 kasrida surat qaysi son?",
        "opts": [
          "3",
          "7",
          "10"
        ],
        "ans": "3"
      },
      {
        "q": "5/9 va 2/9 kasrlarini taqqoslang:",
        "opts": [
          "5/9 > 2/9",
          "5/9 < 2/9",
          "5/9 = 2/9"
        ],
        "ans": "5/9 > 2/9"
      },
      {
        "q": "Qaysi kasr to'g'ri kasr hisoblanadi?",
        "opts": [
          "4/7",
          "8/5",
          "9/9"
        ],
        "ans": "4/7"
      },
      {
        "q": "Bir soatning choragi (1/4 qismi) necha minut?",
        "opts": [
          "15 minut",
          "30 minut",
          "45 minut"
        ],
        "ans": "15 minut"
      },
      {
        "q": "Pitsa 6 ga bo'linib, 6 tasi ham yeyilsa (6/6), bu necha butun bo'ladi?",
        "opts": [
          "1",
          "6",
          "0"
        ],
        "ans": "1"
      }
    ],
    "video": {
      "title": "Fractions! | Mini Math Movies | Scratch Garden",
      "desc": "Oddiy kasrlar bilan tanishuv va ulushlar video darsi:",
      "youtube_id": "362JVVvgYPE"
    }
  },
  {
    "id": "math-unit-7",
    "num": 7,
    "title": "Kattaliklar va O'lchov Birliklari",
    "subtitle": "Uzunlik, massa, vaqt va sig'im birliklari",
    "tag": "O'lchovlar va Kattaliklar • 4-Sinf",
    "meaning": "<b>Kattaliklar</b> atrofimizdagi narsalarning uzunligi, og'irligi (massasi), vaqti va hajmini o'lchash uchun xizmat qiladi. O'lchov birliklari orasidagi bog'lanishlarni bilish masalalarni yechishda asosiy omildir.",
    "tables": [
      {
        "title": "Asosiy O'lchov Birliklari Jadvali",
        "headers": [
          "Kattalik",
          "Asosiy Birliklar",
          "Tenglik Formulalari",
          "Amaliy Misol"
        ],
        "rows": [
          [
            "Uzunlik",
            "mm, cm, dm, m, km",
            "1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm",
            "5 km = 5 000 m; 2 m = 200 cm"
          ],
          [
            "Massa",
            "g, kg, sentner, t",
            "1 t = 10 s; 1 s = 100 kg; 1 kg = 1000 g",
            "3 t = 3 000 kg; 4 kg = 4 000 g"
          ],
          [
            "Vaqt",
            "sek, min, soat, sutka, yil, asr",
            "1 asr = 100 yil; 1 sutka = 24 soat; 1 soat = 60 min",
            "2 soat = 120 min; 1 sutka = 24 soat"
          ],
          [
            "Sig'im (hajm)",
            "millilitr (ml), litr (l)",
            "1 litr = 1000 millilitr",
            "5 litr = 5 000 ml"
          ]
        ]
      }
    ],
    "tip": "<b>Esda saqlang!</b> Katta birlikdan kichik birlikka o'tganda KO'PAYTIRILADI (masalan: 3 m = 3 * 100 = 300 cm). Kichik birlikdan kattasiga o'tganda BO'LINADI (5000 m = 5000 : 1000 = 5 km)!",
    "time_words": "<b>Birliklar:</b> km, m, dm, cm, mm; t, sentner, kg, g; soat, min, sek; litr, ml.",
    "vocab": [
      {
        "num": 1,
        "word": "Uzunlik",
        "uz": "Masofa o'lchami",
        "pos": "ot",
        "synonym": "Bo'yi / masofa",
        "meaning": "Ikki nuqta orasidagi masofani ifodalovchi kattalik",
        "example": "Uzunlik o'lchovining asosiy birligi metrdir."
      },
      {
        "num": 2,
        "word": "Massa",
        "uz": "Og'irlik miqdori",
        "pos": "ot",
        "synonym": "Vazn",
        "meaning": "Jismning modda miqdorini ko'rsatuvchi og'irligi",
        "example": "Massa tarozida tortib aniqlanadi."
      },
      {
        "num": 3,
        "word": "Vaqt",
        "uz": "Muddat / zamon",
        "pos": "ot",
        "synonym": "Davomiylik",
        "meaning": "Harakat va voqealarning kechish mudsati",
        "example": "Darsning vaqti 45 minut davom etadi."
      },
      {
        "num": 4,
        "word": "Sig'im",
        "uz": "Suyuqlik hajmi",
        "pos": "ot",
        "synonym": "Idish hajmi",
        "meaning": "Idishga sig'adigan suyuqlik miqdori",
        "example": "Katta chelakning sig'imi 10 litrga teng."
      },
      {
        "num": 5,
        "word": "Kilometr",
        "uz": "1000 metr",
        "pos": "ot",
        "synonym": "km",
        "meaning": "Uzoq masofalarni o'lchash birligi (1 km = 1000 m)",
        "example": "Toshkentdan Samarqandgacha masofa 300 km atrofida."
      },
      {
        "num": 6,
        "word": "Kilogramm",
        "uz": "1000 gramm",
        "pos": "ot",
        "synonym": "kg",
        "meaning": "Massaning asosiy xalqaro birligi",
        "example": "Do'kondan 2 kg olma va 1 kg uzum sotib oldik."
      },
      {
        "num": 7,
        "word": "Tonna",
        "uz": "1000 kilogramm",
        "pos": "ot",
        "synonym": "t",
        "meaning": "Yirik yuklar va massalarni o'lchash birligi (1 t = 1000 kg)",
        "example": "Yuk mashinasi 5 tonna bug'doy keltirdi."
      },
      {
        "num": 8,
        "word": "Sentner",
        "uz": "100 kilogramm",
        "pos": "ot",
        "synonym": "s",
        "meaning": "100 kg ga teng qishloq xo'jaligi massa birligi",
        "example": "1 tonna 10 sentnerga teng bo'ladi."
      },
      {
        "num": 9,
        "word": "Asr",
        "uz": "100 yil",
        "pos": "ot",
        "synonym": "Yuz yillik",
        "meaning": "100 yillik vaqt oralig'i (yuz yillik)",
        "example": "Hozir biz XXI asrda (21-asrda) yashamoqdamiz."
      },
      {
        "num": 10,
        "word": "Litr",
        "uz": "Suyuqlik birligi",
        "pos": "ot",
        "synonym": "l",
        "meaning": "Suyuqliklar hajmini o'lchashning asosiy birligi",
        "example": "Har kuni kamida 2 litr toza suv ichish foydalidir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 7: Yosh Sayohatchining Safar Hisobi",
      "inst": "O'lchov birliklarini to'g'ri aylantiring va bo'sh joylarni to'ldiring:",
      "text": "Sayohatchilar birinchi kuni 4 km piyoda yurishdi. Bu (4 * 1000) {4000} metr demakdir. Ularning yuk xaltasida 2 kg yegulik bor edi, bu {2000} grammga teng. Safar 3 soat davom etdi, minutga aylantirsak {180} minut bo'ladi. Ular yo'lda har biri 500 ml bo'lgan 4 idish suv ichishdi, jami {2} litr suv ichilgan.",
      "answers": {
        "1": "4000",
        "2": "2000",
        "3": "180",
        "4": "2"
      }
    },
    "quiz": [
      {
        "q": "3 kilometr necha metrga teng?",
        "opts": [
          "3000 m",
          "300 m",
          "30000 m"
        ],
        "ans": "3000 m"
      },
      {
        "q": "2 tonna necha kilogramm bo'ladi?",
        "opts": [
          "2000 kg",
          "200 kg",
          "20 kg"
        ],
        "ans": "2000 kg"
      },
      {
        "q": "1 sutkada necha soat bor?",
        "opts": [
          "24 soat",
          "12 soat",
          "60 soat"
        ],
        "ans": "24 soat"
      },
      {
        "q": "1 asr necha yilga teng?",
        "opts": [
          "100 yil",
          "10 yil",
          "1000 yil"
        ],
        "ans": "100 yil"
      },
      {
        "q": "3 litr necha millilitrga teng?",
        "opts": [
          "3000 ml",
          "300 ml",
          "30 ml"
        ],
        "ans": "3000 ml"
      }
    ],
    "video": {
      "title": "Units Of Measurement | Why Measurements Matter? | The Dr Binocs Show | Peekaboo Kidz",
      "desc": "O'lchov birliklari (uzunlik, og'irlik, hajm va vaqt) video darsi:",
      "youtube_id": "AVC-426M6V0"
    }
  },
  {
    "id": "math-unit-8",
    "num": 8,
    "title": "Geometrik Shakllar va Burchaklar",
    "subtitle": "Nuqta, kesma, burchak turlari, ko'pburchaklar va aylana",
    "tag": "Geometriya Asoslari • 4-Sinf",
    "meaning": "<b>Geometriya</b> shakllar, chiziqlar va ularning o'lchamlarini o'rganadi. Burchaklar kattaligiga ko'ra: <b>to'g'ri burchak</b> (90°), <b>o'tkir burchak</b> (90° dan kichik) va <b>o'tmas burchak</b> (90° dan katta) turlariga bo'linadi.",
    "tables": [
      {
        "title": "Burchaklar va Geometrik Shakllar Tizimi",
        "headers": [
          "Shakl / Tushuncha",
          "Belgilanishi / Xossasi",
          "Turlari / Xususiyati",
          "Hayotiy Misol"
        ],
        "rows": [
          [
            "Burchaklar",
            "90° (to'g'ri), <90° (o'tkir), >90° (o'tmas)",
            "Ikki nurdan hosil bo'ladi",
            "Kitob burchagi (to'g'ri burchak)"
          ],
          [
            "Uchburchak",
            "3 ta tomon, 3 ta burchak, 3 ta uchi bor",
            "Teng tomonli, teng yonli, to'g'ri burchakli",
            "Yo'l harakati belgisi"
          ],
          [
            "To'rtburchak",
            "4 ta tomoni va 4 ta burchagi bor",
            "To'g'ri to'rtburchak, kvadrat, romb",
            "Sinf doskasi, televizor ekrani"
          ],
          [
            "Aylana va Doira",
            "Markaz O, Radius R, Diametr D",
            "D = 2 * R (Diametr radiusdan 2 marta katta)",
            "Tangalar, soat siferblati, g'ildirak"
          ]
        ]
      }
    ],
    "tip": "<b>Chizmachilik siri!</b> Har qanday to'g'ri burchak chizg'ichning burchagi yordamida tekshiriladi. Agar burchak chizg'ich burchagidan torroq bo'lsa - o'tkir, kengroq bo'lsa - o'tmas burchakdir!",
    "time_words": "<b>Formulalar:</b> D = 2 * R, Burchaklar: 90° (to'g'ri), <90° (o'tkir), >90° (o'tmas).",
    "vocab": [
      {
        "num": 1,
        "word": "Nuqta",
        "uz": "Geometrik nuqta",
        "pos": "ot",
        "synonym": "Iz",
        "meaning": "Geometriyaning o'lchamsiz eng sodda boshlang'ich belgisi",
        "example": "Nuqtalar lotin bosh harflari bilan belgilanadi: A, B, C."
      },
      {
        "num": 2,
        "word": "Kesma",
        "uz": "Chegaralangan chiziq",
        "pos": "ot",
        "synonym": "Chiziq bo'lagi",
        "meaning": "Ikki nuqta bilan chegaralangan to'g'ri chiziq qismi",
        "example": "AB kesmasining uzunligi 8 santimetrga teng."
      },
      {
        "num": 3,
        "word": "Nur",
        "uz": "Yarim to'g'ri chiziq",
        "pos": "ot",
        "synonym": "Shu'la",
        "meaning": "Boshlang'ich nuqtasi bor, ikkinchi tomonga cheksiz ketgan chiziq",
        "example": "Quyosh nurlari kabi bir nuqtadan chiqadi."
      },
      {
        "num": 4,
        "word": "Burchak",
        "uz": "Ikki nur orasidagi ochiqlik",
        "pos": "ot",
        "synonym": "Burchak",
        "meaning": "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan shakl",
        "example": "To'g'ri to'rtburchakning hamma burchaklari to'g'ri burchakdir."
      },
      {
        "num": 5,
        "word": "To'g'ri burchak",
        "uz": "90 gradusli burchak",
        "pos": "ot",
        "synonym": "90° burchak",
        "meaning": "Chizg'ich burchagiga teng bo'lgan 90 gradusli burchak",
        "example": "Kvadratning to'rttala burchagi ham to'g'ri burchakdir."
      },
      {
        "num": 6,
        "word": "O'tkir burchak",
        "uz": "90 dan kichik burchak",
        "pos": "ot",
        "synonym": "Tor burchak",
        "meaning": "To'g'ri burchakdan kichik bo'lgan burchak turi",
        "example": "Qaychi biroz ochilganda o'tkir burchak hosil qiladi."
      },
      {
        "num": 7,
        "word": "O'tmas burchak",
        "uz": "90 dan katta burchak",
        "pos": "ot",
        "synonym": "Keng burchak",
        "meaning": "To'g'ri burchakdan katta, lekin yoyiqdan kichik burchak",
        "example": "Keng ochilgan eshik o'tmas burchak hosil qiladi."
      },
      {
        "num": 8,
        "word": "Radius",
        "uz": "Markazdan aylanagacha",
        "pos": "ot",
        "synonym": "R",
        "meaning": "Aylana markazini uning ixtiyoriy nuqtasi bilan tutashtiruvchi kesma",
        "example": "Agar aylana radiusi 4 cm bo'lsa, diametri 8 cm bo'ladi."
      },
      {
        "num": 9,
        "word": "Diametr",
        "uz": "Aylana to'liq kengligi",
        "pos": "ot",
        "synonym": "D",
        "meaning": "Markazdan o'tuvchi va aylananing ikki nuqtasini tutashtiruvchi kesma",
        "example": "Diametr har doim ikkita radiusga teng: D = 2 * R."
      },
      {
        "num": 10,
        "word": "Ko'pburchak",
        "uz": "Ko'p burchakli shakl",
        "pos": "ot",
        "synonym": "Shakl",
        "meaning": "Uch yoki undan ortiq tomoni bo'lgan yopiq geometrik shakl",
        "example": "Uchburchak, beshburchak va oltiburchak ko'pburchaklardir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 8: Me'mor Bennyning Chizmasi",
      "inst": "Geometrik qoidalarni eslang va bo'sh joylarga to'g'ri javoblarni yozing:",
      "text": "Benny yangi uy loyihasini chizmoqda. Xonaning to'rtta burchagi ham to'g'ri burchak bo'lib, har biri {90} gradusga teng. Uyning tomi uchburchak shaklida, unda {3} ta burchak bor. Hovliga aylana shaklida favvora quriladi. Agar favvora radiusi 5 metr bo'lsa, uning diametri (5 * 2) {10} metr bo'ladi. To'g'ri burchakdan kichik burchak {o'tkir} burchak deyiladi.",
      "answers": {
        "1": "90",
        "2": "3",
        "3": "10",
        "4": "o'tkir"
      }
    },
    "quiz": [
      {
        "q": "To'g'ri burchak necha gradusga teng?",
        "opts": [
          "90°",
          "60°",
          "180°"
        ],
        "ans": "90°"
      },
      {
        "q": "Agar aylana radiusi 6 cm bo'lsa, uning diametri necha cm bo'ladi?",
        "opts": [
          "12 cm",
          "3 cm",
          "18 cm"
        ],
        "ans": "12 cm"
      },
      {
        "q": "90 gradusdan kichik burchak qanday ataladi?",
        "opts": [
          "O'tkir burchak",
          "O'tmas burchak",
          "Yoyiq burchak"
        ],
        "ans": "O'tkir burchak"
      },
      {
        "q": "Kvadratning nechta tomoni va nechta burchagi bor?",
        "opts": [
          "4 ta tomoni, 4 ta burchagi",
          "3 ta tomoni, 3 ta burchagi",
          "4 ta tomoni, 2 ta burchagi"
        ],
        "ans": "4 ta tomoni, 4 ta burchagi"
      },
      {
        "q": "Kesma nurning qaysi xususiyati bilan farq qiladi?",
        "opts": [
          "Kesmaning ikkala uchi chegaralangan",
          "Kesma cheksiz ketgan",
          "Kesma doira shaklida"
        ],
        "ans": "Kesmaning ikkala uchi chegaralangan"
      }
    ],
    "video": {
      "title": "Lines, Line Segments, and Rays for Kids | Elementary Geometry",
      "desc": "Geometrik shakllar, to'g'ri chiziq, nur, kesma va burchaklar video darsi:",
      "youtube_id": "ZqwxaAnze8c"
    }
  },
  {
    "id": "math-unit-9",
    "num": 9,
    "title": "Perimetr va Yuza Hisoblash",
    "subtitle": "Kvadrat va to'g'ri to'rtburchak perimetri hamda yuzasi",
    "tag": "Geometriya Asoslari • 4-Sinf",
    "meaning": "<b>Perimetr (P)</b> geometrik shaklning barcha tomonlari uzunliklari yig'indisidir. <b>Yuza (S)</b> esa shakl egallagan tekislik sathining o'lchamidir. Yuza kvadrat birliklarda (<code>cm²</code>, <code>m²</code>, <code>ar</code>, <code>gektar</code>) o'lchanadi.",
    "tables": [
      {
        "title": "Perimetr va Yuza Formulalari Jadvali",
        "headers": [
          "Shakl",
          "Perimetr Formulasi (P)",
          "Yuza Formulasi (S)",
          "Hisoblash Misoli"
        ],
        "rows": [
          [
            "To'g'ri to'rtburchak",
            "P = 2 * (a + b)",
            "S = a * b",
            "a=6 cm, b=4 cm: P = 2*(6+4) = 20 cm; S = 6*4 = 24 cm²"
          ],
          [
            "Kvadrat",
            "P = 4 * a",
            "S = a * a",
            "a=5 cm: P = 4*5 = 20 cm; S = 5*5 = 25 cm²"
          ],
          [
            "Yer maydoni birliklari",
            "1 ar (sotix) = 100 m²",
            "1 gektar (ga) = 10 000 m²",
            "10 sotix yer = 1 000 m² maydon"
          ]
        ]
      }
    ],
    "tip": "<b>Faqat adashtirmang!</b> Perimetr oddiy uzunlik birligida (sm, m) o'lchanadi. Yuza esa KVADRAT birlikda (sm², m²) o'lchanadi!",
    "time_words": "<b>Formulalar:</b> P = 2*(a+b), P = 4*a, S = a*b, S = a*a, 1 ga = 10000 m².",
    "vocab": [
      {
        "num": 1,
        "word": "Perimetr",
        "uz": "Chegaralar yig'indisi",
        "pos": "ot",
        "synonym": "P",
        "meaning": "Shaklning barcha tomonlari uzunliklarining yig'indisi",
        "example": "Bog' atrofini o'rash uchun uning perimetrini bilish kerak."
      },
      {
        "num": 2,
        "word": "Yuza",
        "uz": "Sath maydoni",
        "pos": "ot",
        "synonym": "S",
        "meaning": "Shaklning tekislikda egallagan maydoni o'lchami",
        "example": "Polga gilam to'shash uchun xonaning yuzasi hisoblanadi."
      },
      {
        "num": 3,
        "word": "Kvadrat santimetr",
        "uz": "cm²",
        "pos": "ot",
        "synonym": "sm²",
        "meaning": "Tomoni 1 cm bo'lgan kvadratning yuzasi",
        "example": "Daftar varag'ining yuzasi kvadrat santimetrlarda o'lchanadi."
      },
      {
        "num": 4,
        "word": "Kvadrat metr",
        "uz": "m²",
        "pos": "ot",
        "synonym": "metr kvadrat",
        "meaning": "Tomoni 1 metr bo'lgan kvadratning yuzasi",
        "example": "Xonamizning yuzasi 20 kvadrat metrga teng."
      },
      {
        "num": 5,
        "word": "Ar (Sotix)",
        "uz": "100 kvadrat metr",
        "pos": "ot",
        "synonym": "Sotix",
        "meaning": "100 m² ga teng bo'lgan yer maydoni birligi",
        "example": "Uyimizning tomorqasi 6 sotix (600 m²)."
      },
      {
        "num": 6,
        "word": "Gektar",
        "uz": "10000 m²",
        "pos": "ot",
        "synonym": "ga",
        "meaning": "10 000 kvadrat metrga teng yirik yer maydoni birligi",
        "example": "Paxta maydoni 50 gektarni tashkil etadi."
      },
      {
        "num": 7,
        "word": "Bo'yi",
        "uz": "Uzunligi",
        "pos": "ot",
        "synonym": "Uzun tomon",
        "meaning": "To'g'ri to'rtburchakning uzunroq tomoni (a)",
        "example": "Stolning bo'yi 120 cm, eni esa 80 cm."
      },
      {
        "num": 8,
        "word": "Eni",
        "uz": "Kengligi",
        "pos": "ot",
        "synonym": "Kalta tomon",
        "meaning": "To'g'ri to'rtburchakning kalta tomoni (b)",
        "example": "Xonaning eni 4 metrga teng."
      },
      {
        "num": 9,
        "word": "Kvadrat",
        "uz": "Teng to'rtburchak",
        "pos": "ot",
        "synonym": "Muntazam to'rtburchak",
        "meaning": "Barcha 4 tomoni va burchaklari teng bo'lgan shakl",
        "example": "Kvadratning yuzi tomonini o'ziga ko'paytirish orqali topiladi."
      },
      {
        "num": 10,
        "word": "Formula",
        "uz": "Hisob qoidasi",
        "pos": "ot",
        "synonym": "Qoida tengligi",
        "meaning": "Harflar orqali ifodalangan hisoblash qoidasi",
        "example": "S = a * b formulasi to'g'ri to'rtburchak yuzini topish formulasidir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 9: Yangi Maktab Sport Maydoni",
      "inst": "Matnni o'qing va perimetr hamda yuza formulalari yordamida bo'sh joylarni to'ldiring:",
      "text": "Maktabimiz futbol maydonining bo'yi 40 metr, eni esa 20 metr. Maydonning perimetri 2 * (40 + 20) = {120} metrga teng. Maydonning yuzasi esa 40 * 20 = {800} kvadrat metr (m²) bo'ladi. Mashg'ulotlar maydonchasi tomoni 10 metr bo'lgan kvadrat shaklida. Bu kvadratning perimetri (4 * 10) {40} metr, yuzasi esa (10 * 10) {100} m² dir.",
      "answers": {
        "1": "120",
        "2": "800",
        "3": "40",
        "4": "100"
      }
    },
    "quiz": [
      {
        "q": "Bo'yi 8 cm, eni 5 cm bo'lgan to'g'ri to'rtburchakning yuzi nechaga teng?",
        "opts": [
          "40 cm²",
          "26 cm",
          "13 cm²"
        ],
        "ans": "40 cm²"
      },
      {
        "q": "Tomoni 6 cm bo'lgan kvadratning perimetri nechaga teng?",
        "opts": [
          "24 cm",
          "36 cm²",
          "12 cm"
        ],
        "ans": "24 cm"
      },
      {
        "q": "Tomoni 6 cm bo'lgan kvadratning yuzi nechaga teng?",
        "opts": [
          "36 cm²",
          "24 cm",
          "12 cm²"
        ],
        "ans": "36 cm²"
      },
      {
        "q": "1 sotix (ar) necha kvadrat metrga teng?",
        "opts": [
          "100 m²",
          "10 m²",
          "1000 m²"
        ],
        "ans": "100 m²"
      },
      {
        "q": "Bo'yi 10 m, eni 6 m bo'lgan xonaning perimetri nechaga teng?",
        "opts": [
          "32 m",
          "60 m²",
          "16 m"
        ],
        "ans": "32 m"
      }
    ],
    "video": {
      "title": "Perimeter for Kids | Math Lesson Video",
      "desc": "Perimetr va yuza hisoblash qoidalari hamda misollar video darsi:",
      "youtube_id": "MTSlKifo4js"
    }
  },
  {
    "id": "math-unit-10",
    "num": 10,
    "title": "Harakatga Doir Masalalar (Tezlik, Vaqt, Masofa)",
    "subtitle": "S = V * t formulasi, yaqinlashish va uzoqlashish tezliklari",
    "tag": "Matematik Masalalar • 4-Sinf",
    "meaning": "<b>Harakat masalalari</b> uchta asosiy kattalik o'rtasidagi bog'lanishga asoslanadi: <b>Masofa (S)</b>, <b>Tezlik (V)</b> va <b>Vaqt (t)</b>. Asosiy formula: <code>S = V * t</code>. Tezlikni topish uchun: <code>V = S : t</code>. Vaqtni topish uchun: <code>t = S : V</code>.",
    "tables": [
      {
        "title": "Harakat Turlari va Formulalar Jadvali",
        "headers": [
          "Harakat Yo'nalishi",
          "Tushuncha",
          "Tezlik Formulasi",
          "Misol"
        ],
        "rows": [
          [
            "Oddiy harakat",
            "Bitta jism harakati",
            "S = V * t; V = S : t; t = S : V",
            "V = 60 km/h, t = 2 h => S = 120 km"
          ],
          [
            "Qarama-qarshi harakat",
            "Bir-biriga qarab kelish",
            "V_yaqin = V1 + V2; S = V_yaqin * t",
            "60 + 40 = 100 km/h yaqinlashish tezligi"
          ],
          [
            "Bir yo'nalishdagi harakat",
            "Biri ikkinchisini quvish",
            "V_quvish = V1 - V2 (V1 > V2)",
            "70 - 50 = 20 km/h quvish tezligi"
          ]
        ]
      }
    ],
    "tip": "<b>Birliklar mosligiga e'tibor bering!</b> Agar masofa kilometrda (km) berilgan bo'lsa, vaqt soatda (h), tezlik esa km/soatda bo'lishi kerak. Agar masofa metrda bo'lsa, tezlik m/sekundda o'lchanadi!",
    "time_words": "<b>Formulalar:</b> S = V * t, V = S : t, t = S : V, V_yaqin = V1 + V2.",
    "vocab": [
      {
        "num": 1,
        "word": "Tezlik",
        "uz": "Harakat tezligi (V)",
        "pos": "ot",
        "synonym": "Sur'at",
        "meaning": "Vaqt birligi (1 soat, 1 minut) ichida bosib o'tilgan masofa",
        "example": "Mashina soatiga 70 km tezlik bilan harakatlanmoqda."
      },
      {
        "num": 2,
        "word": "Masofa",
        "uz": "Bosib o'tilgan yo'l (S)",
        "pos": "ot",
        "synonym": "Yo'l uzunligi",
        "meaning": "Harakat davomida bosib o'tilgan oraliq masofa",
        "example": "Ikki shahar orasidagi masofa 180 kilometrga teng."
      },
      {
        "num": 3,
        "word": "Vaqt",
        "uz": "Harakat vaqti (t)",
        "pos": "ot",
        "synonym": "Muddat",
        "meaning": "Yo'lni bosib o'tish uchun ketgan soat yoki minut",
        "example": "Poyezd manzilga 3 soatda yetib bordi."
      },
      {
        "num": 4,
        "word": "Yaqinlashish tezligi",
        "uz": "Qarama-qarshi tezlik",
        "pos": "ot",
        "synonym": "Tezliklar yig'indisi",
        "meaning": "Bir-biriga qarab kelayotgan jismlar tezliklarining yig'indisi",
        "example": "V_yaqin = V1 + V2 formulasi bilan topiladi."
      },
      {
        "num": 5,
        "word": "Quvib yetish tezligi",
        "uz": "Tezliklar ayirmasi",
        "pos": "ot",
        "synonym": "V1 - V2",
        "meaning": "Bir yo'nalishda orqadan quvib kelayotganning tezlik ustunligi",
        "example": "Tezroq mashina har soatda oradagi masofani 20 km ga qisqartiradi."
      },
      {
        "num": 6,
        "word": "km/soat",
        "uz": "Kilometr soatiga",
        "pos": "ot",
        "synonym": "km/h",
        "meaning": "Avtomobil va poyezdlar tezligining asosiy o'lchov birligi",
        "example": "Shahar ichida maksimal tezlik 60 km/soat etib belgilangan."
      },
      {
        "num": 7,
        "word": "Metr sekundiga",
        "uz": "m/s",
        "pos": "ot",
        "synonym": "Tezlik birligi",
        "meaning": "Bir sekundda necha metr bosib o'tilishini ko'rsatuvchi birlik",
        "example": "Shamolning tezligi sekundiga 5 metrga teng."
      },
      {
        "num": 8,
        "word": "Uchrashuv vaqti",
        "uz": "Uchrashish muddati",
        "pos": "ot",
        "synonym": "t_uchrashuv",
        "meaning": "Ikki qarama-qarshi jismning bir-biri bilan to'qnashish yoki uchrashish vaqti",
        "example": "Masofani yaqinlashish tezligiga bo'lib uchrashuv vaqti topiladi."
      },
      {
        "num": 9,
        "word": "O'zgarmas tezlik",
        "uz": "Tekis harakat",
        "pos": "sifat/ot",
        "synonym": "Doimiy tezlik",
        "meaning": "Harakat davomida tezlikning o'zgarmay bir xil saqlanishi",
        "example": "Samolyot tekis va o'zgarmas tezlikda uchmoqda."
      },
      {
        "num": 10,
        "word": "O'rtacha tezlik",
        "uz": "O'rtacha ko'rsatkich",
        "pos": "ot",
        "synonym": "O'rtacha tezlik",
        "meaning": "Jami bosib o'tilgan yo'lni jami ketgan vaqtga bo'lish",
        "example": "Tanaffuslar bilan hisoblanganda o'rtacha tezlik 50 km/soat bo'ldi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 10: Toshkent - Samarqand Afrosiyob Poyezdi",
      "inst": "Harakat formulalaridan foydalanib, bo'sh joylarni to'ldiring:",
      "text": "Afrosiyob tezyurar poyezdi 150 km/soat tezlik bilan harakatlanmoqda. U 2 soatda (150 * 2) {300} km masofani bosib o'tadi. Ikki velosipedchi oralaridagi masofa 60 km bo'lgan ikki qishloqdan bir-biriga qarab yo'lga chiqishdi. Birinchisining tezligi 12 km/soat, ikkinchisiniki 8 km/soat. Ularning yaqinlashish tezligi (12 + 8) {20} km/soat bo'ladi. Ular {3} soatdan keyin uchrashishadi.",
      "answers": {
        "1": "300",
        "2": "20",
        "3": "3"
      }
    },
    "quiz": [
      {
        "q": "Avtomobil 70 km/soat tezlik bilan 3 soatda necha km yuradi?",
        "opts": [
          "210 km",
          "200 km",
          "140 km"
        ],
        "ans": "210 km"
      },
      {
        "q": "Piyoda 20 km masofani 4 soatda bosib o'tdi. Uning tezligi qancha?",
        "opts": [
          "5 km/soat",
          "6 km/soat",
          "80 km/soat"
        ],
        "ans": "5 km/soat"
      },
      {
        "q": "Ikki jism bir-biriga qarab kelsa, yaqinlashish tezligi qanday topiladi?",
        "opts": [
          "V1 + V2 (qo'shiladi)",
          "V1 - V2 (ayriladi)",
          "V1 * V2 (ko'paytiriladi)"
        ],
        "ans": "V1 + V2 (qo'shiladi)"
      },
      {
        "q": "Masofa 400 km, tezlik 100 km/soat bo'lsa, vaqt necha soat bo'ladi?",
        "opts": [
          "4 soat",
          "40 soat",
          "500 soat"
        ],
        "ans": "4 soat"
      },
      {
        "q": "Harakat masofasini (S) topish formulasi qaysi?",
        "opts": [
          "S = V * t",
          "S = V : t",
          "S = V + t"
        ],
        "ans": "S = V * t"
      }
    ],
    "video": {
      "title": "Speed, Distance, Time - Corbettmaths",
      "desc": "Tezlik, vaqt va masofaga oid masalalarni yechish video darsi:",
      "youtube_id": "dHVK7IeLGT8"
    }
  },
  {
    "id": "math-unit-11",
    "num": 11,
    "title": "Mehnat va Ish Unumi Masalalari",
    "subtitle": "Ish unumi formulasi (A = w * t) va birgalikda ishlash",
    "tag": "Matematik Masalalar • 4-Sinf",
    "meaning": "<b>Ish unumi (w)</b> vaqt birligi (masalan, 1 soatda yoki 1 kunda) bajarilgan ish hajmini bildiradi. <b>Bajarilgan ish (A)</b> ish unumini sarflangan vaqtga ko'paytirish orqali topiladi: <code>A = w * t</code>. Birgalikda ishlaganda ularning ish unumlari qo'shiladi: <code>w_birgalikda = w1 + w2</code>.",
    "tables": [
      {
        "title": "Mehnat Masalalari Formulalari",
        "headers": [
          "Kattalik Nomi",
          "Belgisi",
          "Formula",
          "Misol"
        ],
        "rows": [
          [
            "Bajarilgan umumiy ish",
            "A",
            "A = w * t",
            "1 soatda 15 detal tayyorlansa, 4 soatda: A = 15 * 4 = 60 detal"
          ],
          [
            "Ish unumi",
            "w",
            "w = A : t",
            "80 detalni 4 soatda yasasa: w = 80 : 4 = 20 detal/soat"
          ],
          [
            "Ketgan vaqt",
            "t",
            "t = A : w",
            "100 detalni 25 detal/soat unum bilan: t = 100 : 25 = 4 soatda yasaydi"
          ],
          [
            "Birgalikdagi ish",
            "A_umumiy",
            "t = A : (w1 + w2)",
            "Usta 6 ta, shogird 4 ta yasasa, birga: 6 + 4 = 10 ta/soat"
          ]
        ]
      }
    ],
    "tip": "<b>Foydali taqqoslash!</b> Mehnat masalalari xuddi harakat masalalariga o'xshaydi: Ish (A) xuddi Masofa (S) kabidir, Ish unumi (w) esa Tezlik (V) kabidir!",
    "time_words": "<b>Formulalar:</b> A = w * t, w = A : t, t = A : w, w_birga = w1 + w2.",
    "vocab": [
      {
        "num": 1,
        "word": "Ish unumi",
        "uz": "Soatlik mahsuldorlik (w)",
        "pos": "ot",
        "synonym": "Ish sur'ati",
        "meaning": "1 soatda yoki 1 kunda tayyorlangan mahsulot miqdori",
        "example": "Usta bir soatda 12 ta stul yasaydi, bu uning ish unumidir."
      },
      {
        "num": 2,
        "word": "Umumiy ish",
        "uz": "Jami mahsulot (A)",
        "pos": "ot",
        "synonym": "Bajarilgan vazifa",
        "meaning": "Bajarilgan yoki bajarilishi kerak bo'lgan jami ish hajmi",
        "example": "Buyurtmaga ko'ra 120 ta parta tayyorlash kerak."
      },
      {
        "num": 3,
        "word": "Ish vaqti",
        "uz": "Ketgan muddat (t)",
        "pos": "ot",
        "synonym": "Mehnat soati",
        "meaning": "Ishni to'liq bajarish uchun sarflangan vaqt",
        "example": "Ish 5 kunda to'liq yakunlandi."
      },
      {
        "num": 4,
        "word": "Birgalikdagi ish",
        "uz": "Hamkorlikdagi mehnat",
        "pos": "ot",
        "synonym": "Hamkorlik",
        "meaning": "Bir nechta ishchi yoki uskunaning bir vaqtda birgalikda ishlashi",
        "example": "Birgalikda ishlaganda vazifa ancha tez bitadi."
      },
      {
        "num": 5,
        "word": "Reja (Norma)",
        "uz": "Kutilgan me'yor",
        "pos": "ot",
        "synonym": "Kundalik me'yor",
        "meaning": "Kunlik yoki oylik bajarilishi shart bo'lgan vazifa miqdori",
        "example": "Kunlik reja 50 ta detal deb belgilangan."
      },
      {
        "num": 6,
        "word": "Rejadan ortiq",
        "uz": "Qo'shimcha bajarilgan",
        "pos": "sifat",
        "synonym": "Ortig'i bilan",
        "meaning": "Belgilangan rejadan ko'p mahsulot ishlab chiqarish",
        "example": "Fabrika rejadan ortiq 200 ta kiyim tikdi."
      },
      {
        "num": 7,
        "word": "Ustaxonaning quvvati",
        "uz": "Ishlab chiqarish quvvati",
        "pos": "ot",
        "synonym": "Imkoniyat",
        "meaning": "Ustaxonaning ma'lum vaqtda mahsulot bera olish imkoniyati",
        "example": "Yangi stanoklar ish unumini 2 barobar oshirdi."
      },
      {
        "num": 8,
        "word": "Quvurlar masalasi",
        "uz": "Hovuz to'ldirish",
        "pos": "ot",
        "synonym": "Hovuz masalasi",
        "meaning": "Hovuzga suv quyuvchi quvurlar unumiga oid klassik masala",
        "example": "Ikkita quvur hovuzni birgalikda 4 soatda to'ldiradi."
      },
      {
        "num": 9,
        "word": "Tejamkorlik",
        "uz": "Vaqtni tejash",
        "pos": "ot",
        "synonym": "Samaradorlik",
        "meaning": "Vaqt va xomashyoni tejab, sifatli ish bajarish",
        "example": "Yangi usul tufayli 2 soat vaqt tejab qolindi."
      },
      {
        "num": 10,
        "word": "Vazifani taqsimlash",
        "uz": "Bo'lib berish",
        "pos": "ot",
        "synonym": "Taqsimot",
        "meaning": "Ish hajmini ishchilarning unumiga qarab taqsimlash",
        "example": "Har bir guruhga 30 tadan daraxt ekish topshirildi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 11: Duradgorlar Ustaxonasi",
      "inst": "Mehnat masalasi formulalaridan foydalanib, bo'sh joylarni to'ldiring:",
      "text": "Usta 1 soatda 8 ta stul yasaydi, shogirdi esa 1 soatda 4 ta stul yasaydi. Ular birgalikda 1 soatda (8 + 4) {12} ta stul yasashadi. Agar ularga 60 ta stul yasash buyurtmasi berilsa, ular birgalikda bu ishni (60 : 12) {5} soatda bajarishadi. Agar usta yolg'iz o'zi ishlasa, 80 ta stulni yasash uchun unga {10} soat vaqt kerak bo'ladi.",
      "answers": {
        "1": "12",
        "2": "5",
        "3": "10"
      }
    },
    "quiz": [
      {
        "q": "Ishchi 1 soatda 15 ta detal yasasa, 6 soatda nechta yasaydi?",
        "opts": [
          "90 ta",
          "75 ta",
          "60 ta"
        ],
        "ans": "90 ta"
      },
      {
        "q": "Tikuvchi 40 ta ko'ylakni 8 kunda tikdi. Uning kunlik unumi qancha?",
        "opts": [
          "5 ta",
          "4 ta",
          "10 ta"
        ],
        "ans": "5 ta"
      },
      {
        "q": "Birinchi quvur hovuzni soatiga 20 litr, ikkinchisi 30 litr suv bilan to'ldiradi. Birga qancha?",
        "opts": [
          "50 litr/soat",
          "10 litr/soat",
          "600 litr/soat"
        ],
        "ans": "50 litr/soat"
      },
      {
        "q": "Bajarilgan ish (A) qanday formula bilan topiladi?",
        "opts": [
          "A = w * t",
          "A = w : t",
          "A = w + t"
        ],
        "ans": "A = w * t"
      },
      {
        "q": "Jami 120 ta kitobni soatiga 30 tadan muqovalash uchun necha soat kerak?",
        "opts": [
          "4 soat",
          "5 soat",
          "3 soat"
        ],
        "ans": "4 soat"
      }
    ],
    "video": {
      "title": "Math Minutes: Word Problems",
      "desc": "Mehnat va ish unumiga oid amaliy masalalarni yechish video darsi:",
      "youtube_id": "iVJeVcwT69E"
    }
  },
  {
    "id": "math-unit-12",
    "num": 12,
    "title": "Narx, Miqdor va Qiymat (Iqtisodiy Masalalar)",
    "subtitle": "Qiymat = Narx * Miqdor formulasi va moliyaviy hisob-kitob",
    "tag": "Matematik Masalalar • 4-Sinf",
    "meaning": "<b>Iqtisodiy masalalarda</b> xarid qilish, narx belgilash va foyda hisoblash o'rganiladi. Asosiy tushunchalar: <b>Narx (N)</b> - 1 ta buyum bahosi; <b>Miqdor (M)</b> - olingan buyumlar soni yoki og'irligi; <b>Qiymat (Q)</b> - jami to'langan pul. Formula: <code>Qiymat = Narx * Miqdor</code>.",
    "tables": [
      {
        "title": "Xarid va Narx Formulalari Jadvali",
        "headers": [
          "Kattalik Nomi",
          "Belgisi",
          "Topish Formulasi",
          "Misol"
        ],
        "rows": [
          [
            "Jami Qiymat (Summa)",
            "Q",
            "Qiymat = Narx * Miqdor",
            "1 ta daftar 3 000 so'm, 5 ta daftar: 3 000 * 5 = 15 000 so'm"
          ],
          [
            "Bitta buyum narxi",
            "N",
            "Narx = Qiymat : Miqdor",
            "6 ta qalam 12 000 so'm bo'lsa: 1 ta qalam = 12 000 : 6 = 2 000 so'm"
          ],
          [
            "Sotib olingan miqdor",
            "M",
            "Miqdor = Qiymat : Narx",
            "20 000 so'mga 4 000 so'mlik muzqaymoqdan: 20 000 : 4 000 = 5 ta olinadi"
          ],
          [
            "Qaytim hisoblash",
            "Qaytim",
            "Berilgan pul - Xarid summasi",
            "50 000 so'm berildi, xarid 38 000 so'm: Qaytim = 12 000 so'm"
          ]
        ]
      }
    ],
    "tip": "<b>Aqlli xaridor qoidasi!</b> Xarid qilishdan oldin har bir tovarning donasi qanchaga tushishini (narxini) hisoblab ko'ring. Ba'zan to'plamda xarid qilish alohida olgandan ko'ra ancha arzon tushadi!",
    "time_words": "<b>Formulalar:</b> Qiymat = Narx * Miqdor, Narx = Q : M, Miqdor = Q : N.",
    "vocab": [
      {
        "num": 1,
        "word": "Narx",
        "uz": "1 ta donaning bahosi",
        "pos": "ot",
        "synonym": "Baho",
        "meaning": "Bitta buyum yoki 1 kg mahsulot uchun belgilangan to'lov",
        "example": "Nonning narxi 4 000 so'm qilib belgilangan."
      },
      {
        "num": 2,
        "word": "Miqdor",
        "uz": "Soni yoki og'irligi",
        "pos": "ot",
        "synonym": "Soni",
        "meaning": "Xarid qilingan narsalarning soni yoki o'lchami",
        "example": "Biz do'kondan 3 dona qalam va 2 kg shakar oldik."
      },
      {
        "num": 3,
        "word": "Qiymat (Summa)",
        "uz": "Jami to'lov",
        "pos": "ot",
        "synonym": "Jami pul",
        "meaning": "Barcha olingan tovarlar uchun to'lanadigan umumiy mablag'",
        "example": "Xaridimizning umumiy qiymati 25 000 so'm bo'ldi."
      },
      {
        "num": 4,
        "word": "Qaytim",
        "uz": "Ortib qaytarilgan pul",
        "pos": "ot",
        "synonym": "Qaytim pul",
        "meaning": "Kassirga berilgan puldan tovar narxi ayirib qaytariladigan qism",
        "example": "100 000 so'm bersam, kassir 15 000 so'm qaytim berdi."
      },
      {
        "num": 5,
        "word": "Chegirma",
        "uz": "Arzonlashtirish",
        "pos": "ot",
        "synonym": "Aksiya",
        "meaning": "Mahsulot narxidan tushirib berilgan arzonlashgan summa",
        "example": "Bayram munosabati bilan kitoblarga 20% chegirma e'lon qilindi."
      },
      {
        "num": 6,
        "word": "Foyda",
        "uz": "Sof daromad",
        "pos": "ot",
        "synonym": "Daromad",
        "meaning": "Sotuvdan tushgan pul va xarajatlar orasidagi ijobiy farq",
        "example": "Tadbirkor har bir sotilgan mahsulotdan 5 000 so'm foyda ko'rdi."
      },
      {
        "num": 7,
        "word": "Xarajat",
        "uz": "Ketgan pul",
        "pos": "ot",
        "synonym": "Chiqim",
        "meaning": "Mahsulot tayyorlash yoki sotib olish uchun sarflangan summa",
        "example": "Xomashyo uchun 50 000 so'm xarajat qilindi."
      },
      {
        "num": 8,
        "word": "So'm",
        "uz": "Milliy valyuta",
        "pos": "ot",
        "synonym": "Pul birligi",
        "meaning": "O'zbekiston Respublikasining rasmiy pul birligi",
        "example": "Daftar narxi 2500 so'mga teng."
      },
      {
        "num": 9,
        "word": "Chek",
        "uz": "Kassa cheki",
        "pos": "ot",
        "synonym": "Kvitansiya",
        "meaning": "Xarid qilingan narsalar va ularning narxi yozilgan qog'oz",
        "example": "Xarid qilgandan so'ng kassa chekini tekshirib olish kerak."
      },
      {
        "num": 10,
        "word": "Byudjet",
        "uz": "Mablag' rejasi",
        "pos": "ot",
        "synonym": "Pul rejasi",
        "meaning": "Daromad va xarajatlarning oldindan tuzilgan hisob-kitob rejasi",
        "example": "Oila byudjetini to'g'ri rejalashtirish tejashga yordam beradi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 12: Maktab Yarmarkasidagi Xarid",
      "inst": "Narx va qiymat formulalaridan foydalanib, bo'sh joylarni to'ldiring:",
      "text": "Alisher kitob do'koniga kirdi. U donasi 4 000 so'mdan bo'lgan 5 ta daftar sotib oldi. Daftarlar uchun (4000 * 5) {20000} so'm to'ladi. Shuningdek, 3 ta bir xil ruchka uchun jami 9 000 so'm to'ladi, demak bitta ruchka narxi {3000} so'm bo'lgan. Jami xarid {23000} so'mni tashkil etdi. Alisher kassirga 50 000 so'm bergach, kassir unga {27000} so'm qaytim qaytardi.",
      "answers": {
        "1": "20000",
        "2": "3000",
        "3": "23000",
        "4": "27000"
      }
    },
    "quiz": [
      {
        "q": "1 kg olma 8 000 so'm bo'lsa, 4 kg olma necha pul bo'ladi?",
        "opts": [
          "32000 so'm",
          "24000 so'm",
          "12000 so'm"
        ],
        "ans": "32000 so'm"
      },
      {
        "q": "5 ta bir xil muzqaymoq 35 000 so'm bo'lsa, 1 tasining narxi qancha?",
        "opts": [
          "7000 so'm",
          "6000 so'm",
          "8000 so'm"
        ],
        "ans": "7000 so'm"
      },
      {
        "q": "Xarid 64 000 so'm bo'ldi. 100 000 so'mdan qancha qaytim qaytadi?",
        "opts": [
          "36000 so'm",
          "46000 so'm",
          "26000 so'm"
        ],
        "ans": "36000 so'm"
      },
      {
        "q": "Qiymatni topish formulasini ko'rsating:",
        "opts": [
          "Qiymat = Narx * Miqdor",
          "Qiymat = Narx : Miqdor",
          "Qiymat = Narx + Miqdor"
        ],
        "ans": "Qiymat = Narx * Miqdor"
      },
      {
        "q": "50 000 so'mga 10 000 so'mlik kitobdan nechta sotib olish mumkin?",
        "opts": [
          "5 ta",
          "4 ta",
          "6 ta"
        ],
        "ans": "5 ta"
      }
    ],
    "video": {
      "title": "Calculating and Understanding Money For Kids | Mathematics Grade 1 | Periwinkle",
      "desc": "Pul, narx, miqdor va qiymatga oid qiziqarli hisob-kitoblar darsi:",
      "youtube_id": "GtlL_5Ct5rU"
    }
  },
  {
    "id": "math-unit-13",
    "num": 13,
    "title": "Ma'lumotlar bilan Ishlash va Diagrammalar",
    "subtitle": "Jadvallar, ustunli diagrammalar va o'rtacha arifmetik qiymat",
    "tag": "Ma'lumotlar va Statistika • 4-Sinf",
    "meaning": "<b>Diagrammalar</b> ma'lumotlarni ko'rgazmali va tushunarli tarzda taqqoslash uchun xizmat qiladi. <b>O'rtacha arifmetik qiymat</b> bir nechta sonlar yig'indisini ularning soniga bo'lish orqali topiladi: <code>O'rtacha = (a + b + c + ...) : n</code>.",
    "tables": [
      {
        "title": "Diagramma Turlari va O'rtacha Qiymat Jadvali",
        "headers": [
          "Diagramma / Tushuncha",
          "Qanday Tasvirlanadi",
          "Qachon Qo'llaniladi",
          "Hisoblash Formulasi"
        ],
        "rows": [
          [
            "Ustunli diagramma",
            "Har xil balandlikdagi ustunlar",
            "Miqdorlarni o'zaro taqqoslashda",
            "Ustun balandligi son qiymatiga teng"
          ],
          [
            "Piktogramma",
            "Kichik rasmlar va belgilar orqali",
            "Bolalar uchun qiziqarli ko'rgazmada",
            "1 ta ramz = 10 ta narsa deb olinadi"
          ],
          [
            "O'rtacha arifmetik",
            "Yig'indini sonlar miqdoriga bo'lish",
            "Baholar va harorat o'rtachasida",
            "(80 + 90 + 100) : 3 = 270 : 3 = 90"
          ]
        ]
      }
    ],
    "tip": "<b>Amaliy misol!</b> Agar o'quvchi ketma-ket 4, 5, 5 baho olgan bo'lsa, uning o'rtacha bali: (4 + 5 + 5) : 3 = 14 : 3 ≈ 4.6 (yaxlitlanganda 5) bo'ladi!",
    "time_words": "<b>Formulalar:</b> O'rtacha = Jami_yig'indi : Sonlar_miqdori, Max - Min = Farq.",
    "vocab": [
      {
        "num": 1,
        "word": "Diagramma",
        "uz": "Ko'rgazmali chizma",
        "pos": "ot",
        "synonym": "Grafik",
        "meaning": "Sonli ma'lumotlarni chizmalar va ustunlar orqali ifodalash",
        "example": "Ustunli diagrammada har bir sinf o'quvchilari soni ko'rsatilgan."
      },
      {
        "num": 2,
        "word": "Ustunli diagramma",
        "uz": "Ustunli grafik",
        "pos": "ot",
        "synonym": "Bar chart",
        "meaning": "Balandligi son miqdoriga mos bo'lgan to'g'ri to'rtburchaklar chizmasi",
        "example": "Eng baland ustun eng ko'p kitob o'qilgan oyni bildiradi."
      },
      {
        "num": 3,
        "word": "Jadval",
        "uz": "Satr va ustunlar",
        "pos": "ot",
        "synonym": "Reestr",
        "meaning": "Ma'lumotlarning tartiblangan kataklar to'plami",
        "example": "Dars jadvali haftaning kunlari bo'yicha tuzilgan."
      },
      {
        "num": 4,
        "word": "O'rtacha arifmetik",
        "uz": "O'rtacha qiymat",
        "pos": "ot",
        "synonym": "O'rtacha",
        "meaning": "Barcha sonlar yig'indisini ularning soniga bo'lish natijasi",
        "example": "Uchta imtihonning o'rtacha bali 90 ballni tashkil qildi."
      },
      {
        "num": 5,
        "word": "Eng katta qiymat",
        "uz": "Maksimum",
        "pos": "ot",
        "synonym": "Maksimal",
        "meaning": "Berilgan qatordagi eng yuqori ko'rsatkich",
        "example": "Haftaning eng issiq kuni harorati 32 daraja bo'ldi."
      },
      {
        "num": 6,
        "word": "Eng kichik qiymat",
        "uz": "Minimum",
        "pos": "ot",
        "synonym": "Minimal",
        "meaning": "Berilgan qatordagi eng quyi ko'rsatkich",
        "example": "Haftaning eng salqin kuni harorati 18 daraja bo'ldi."
      },
      {
        "num": 7,
        "word": "Shkala",
        "uz": "Bo'linmalar o'qi",
        "pos": "ot",
        "synonym": "O'lchov chizig'i",
        "meaning": "Diagramma o'qidagi raqamlar va oraliq belgilar tizimi",
        "example": "Diagramma shkalasi 10 tadan qadam bilan belgilangan."
      },
      {
        "num": 8,
        "word": "Piktogramma",
        "uz": "Rasmli diagramma",
        "pos": "ot",
        "synonym": "Rasm-grafik",
        "meaning": "Sonlarni rasmlar (masalan, kitobcha, yulduzcha) orqali ko'rsatish",
        "example": "Har bir yulduzcha 5 ta to'plangan ballni bildiradi."
      },
      {
        "num": 9,
        "word": "Tahlil",
        "uz": "Xulosa chiqarish",
        "pos": "ot",
        "synonym": "Tadqiq",
        "meaning": "Ma'lumotlarni o'rganib to'g'ri xulosa chiqarish jarayoni",
        "example": "Diagramma tahliliga ko'ra o'quvchilar soni ortgan."
      },
      {
        "num": 10,
        "word": "So'rovnoma",
        "uz": "Fikr to'plash",
        "pos": "ot",
        "synonym": "Anketa",
        "meaning": "Ma'lumot yig'ish uchun o'quvchilar orasida o'tkazilgan savol-javob",
        "example": "Sevimli fanlar bo'yicha so'rovnoma o'tkazildi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 13: 4-Sinf Sport Musobaqasi Natijalari",
      "inst": "Ma'lumotlar va o'rtacha qiymat qoidalaridan foydalanib, bo'sh joylarni to'ldiring:",
      "text": "Musobaqada 4-A sinfi 1-turda 80 ball, 2-turda 90 ball, 3-turda esa 100 ball to'pladi. Ularning jami ballari yig'indisi {270} ball bo'ldi. O'rtacha arifmetik ball esa (270 : 3) {90} ballni tashkil etdi. Eng katta to'plangan ball {100}, eng kichigi esa {80} bo'ldi. Eng katta va eng kichik ballar farqi {20} ballga teng.",
      "answers": {
        "1": "270",
        "2": "90",
        "3": "100",
        "4": "80",
        "5": "20"
      }
    },
    "quiz": [
      {
        "q": "10, 20 va 30 sonlarining o'rtacha arifmetik qiymati nechaga teng?",
        "opts": [
          "20",
          "30",
          "60"
        ],
        "ans": "20"
      },
      {
        "q": "Qaysi diagrammada sonlar rasmlar va belgilar orqali ifodalanadi?",
        "opts": [
          "Piktogramma",
          "Ustunli diagramma",
          "Doiraviy diagramma"
        ],
        "ans": "Piktogramma"
      },
      {
        "q": "5 ta kun davomida o'qilgan kitoblar: 2, 4, 6, 8, 10. O'rtacha kuniga nechta?",
        "opts": [
          "6 ta",
          "5 ta",
          "30 ta"
        ],
        "ans": "6 ta"
      },
      {
        "q": "Ustunli diagrammada ustun balandligi nimani ko'rsatadi?",
        "opts": [
          "Sonning kattaligini",
          "Faqat rangini",
          "Varaq o'lchamini"
        ],
        "ans": "Sonning kattaligini"
      },
      {
        "q": "O'rtacha arifmetik qiymatni topish uchun nima qilinadi?",
        "opts": [
          "Yig'indini ularning soniga bo'linadi",
          "Faqat eng kattasi olinadi",
          "Sonlar ko'paytiriladi"
        ],
        "ans": "Yig'indini ularning soniga bo'linadi"
      }
    ],
    "video": {
      "title": "Math Antics - Mean, Median and Mode",
      "desc": "Diagrammalar, ma'lumotlar bilan ishlash va o'rtacha qiymat video darsi:",
      "youtube_id": "B1HEzNTGeZ4"
    }
  },
  {
    "id": "math-unit-14",
    "num": 14,
    "title": "Mantiqiy va Olimpiada Masalalari",
    "subtitle": "Kombinatorika, daraxt usuli, teskari tartibda yechish va jumboqlar",
    "tag": "Mantiq va Olimpiada • 4-Sinf",
    "meaning": "<b>Mantiqiy masalalar</b> standart formulalarga tayanmasdan, mantiqiy fikrlash, qonuniyatlarni topish va variantlarni tizimli saralash orqali yechiladi. Asosiy usullar: <b>Variantlar daraxti</b>, <b>Orqadan oldinga (oxiridan boshlab) yechish</b> va <b>Dirixle qoidasi</b>.",
    "tables": [
      {
        "title": "Mantiqiy Masalalarni Yechish Usullari",
        "headers": [
          "Yechish Usuli",
          "Qoida / Strategiya",
          "Masala Namunasi",
          "Yechim Qadami"
        ],
        "rows": [
          [
            "Teskari usul",
            "Oxirgi natijadan boshlab amallarni teskarisiga bajarish",
            "O'ylangan songa 5 qo'shib, 2 ga ko'paytirilsa 30 chiqdi. Sonni toping.",
            "30 : 2 = 15; 15 - 5 = 10 (O'ylangan son 10)"
          ],
          [
            "Variantlar daraxti",
            "Mumkin bo'lgan barcha kombinatsiyalarni chizish",
            "1, 2, 3 raqamlaridan nechta ikki xonali son tuzish mumkin?",
            "3 * 3 = 9 ta (11, 12, 13, 21, 22, 23, 31, 32, 33)"
          ],
          [
            "Qonuniyatni topish",
            "Ketma-ketlikdagi qadamni aniqlash",
            "3, 7, 11, 15, ... Keyingi son nima?",
            "Har safar +4 qo'shilyapti, demak: 15 + 4 = 19"
          ]
        ]
      }
    ],
    "tip": "<b>Olimpiada siri!</b> Agar masala chigal ko'rinsa, qog'ozga kichik chizma yoki jadval chizing. Masaladagi har bir shartni qadamma-qadam tekshirib chiqing!",
    "time_words": "<b>Mantiqiy qoidalar:</b> Kombinatsiyalar = n * m, Teskari amal: + <-> -, * <-> :.",
    "vocab": [
      {
        "num": 1,
        "word": "Mantiq",
        "uz": "Mantiqiy fikrlash",
        "pos": "ot",
        "synonym": "Zukkolik",
        "meaning": "To'g'ri fikrlash, sabab va oqibatni to'g'ri bog'lash qobiliyati",
        "example": "Mantiqiy fikrlash har qanday qiyin jumboqni yechishga yordam beradi."
      },
      {
        "num": 2,
        "word": "Qonuniyat",
        "uz": "Qat'iy qoida",
        "pos": "ot",
        "synonym": "Ketma-ketlik tartibi",
        "meaning": "Sonlar yoki shakllar qatorida takrorlanuvchi ichki qoida",
        "example": "2, 4, 8, 16 qatorida har bir son 2 ga ko'paytirib borilgan."
      },
      {
        "num": 3,
        "word": "Kombinatorika",
        "uz": "Variantlar soni",
        "pos": "ot",
        "synonym": "Guruhlash",
        "meaning": "Turli narsalarni guruhlash va kombinatsiyalarini sanash sohasi",
        "example": "Kombinatorika kiyimlar va raqamlar variantini sanashda qo'llaniladi."
      },
      {
        "num": 4,
        "word": "Daraxt usuli",
        "uz": "Shoxlangan diagramma",
        "pos": "ot",
        "synonym": "Tree diagram",
        "meaning": "Barcha mumkin bo'lgan natijalarni shoxlatib chizish usuli",
        "example": "Daraxt usulida barcha yo'llar aniq ko'rinadi."
      },
      {
        "num": 5,
        "word": "Teskari usul",
        "uz": "Oxiridan yechish",
        "pos": "ot",
        "synonym": "Orqaga qaytish",
        "meaning": "Natijadan boshlab barcha amallarni teskarisiga bajarib boshlang'ich sonni topish",
        "example": "Teskari usulda ko'paytirish bo'lishga, qo'shish ayirishga aylanadi."
      },
      {
        "num": 6,
        "word": "Dirixle prinsipi",
        "uz": "Katak va quyonlar qoidasi",
        "pos": "ot",
        "synonym": "Kataklar qoidasi",
        "meaning": "Agar 4 ta quyonni 3 ta katakka joylashtirsa, bittasida kamida 2 ta bo'ladi",
        "example": "Ushbu mantiqiy qoida olimpiadalarda juda ko'p qo'llaniladi."
      },
      {
        "num": 7,
        "word": "Algoritm",
        "uz": "Qadamlar tartibi",
        "pos": "ot",
        "synonym": "Ko'rsatma",
        "meaning": "Masalani yechish uchun tuzilgan aniq qadam-baqadam ketma-ketlik",
        "example": "Choy damlash yoki misol yechishning o'z algoritmi bor."
      },
      {
        "num": 8,
        "word": "Jumboq",
        "uz": "Mantiqiy savol",
        "pos": "ot",
        "synonym": "Topshiriq",
        "meaning": "Topqirlik va ziyraklikni talab qiladigan qiziqarli savol",
        "example": "Bugungi darsda qiziqarli geometrik jumboq yechdik."
      },
      {
        "num": 9,
        "word": "Faraz",
        "uz": "Dastlabki taxmin",
        "pos": "ot",
        "synonym": "Gipoteza",
        "meaning": "Tekshirib ko'rish uchun ilgari surilgan dastlabki fikr",
        "example": "Farazimizni amaliy hisoblash orqali tekshirib ko'ramiz."
      },
      {
        "num": 10,
        "word": "Isbot",
        "uz": "Asoslash",
        "pos": "ot",
        "synonym": "Tasdiq",
        "meaning": "Fikrning to'g'riligini mantiqiy qoidalar bilan asoslash",
        "example": "Matematikada har bir teorema isbotlanishi shart."
      }
    ],
    "cloze": {
      "title": "Topshiriq 14: Zukko Detektiv va Seyf Kodi",
      "inst": "Mantiqiy qonuniyatlarni toping va bo'sh joylarni to'ldiring:",
      "text": "Seyf kodini ochish uchun quyidagi qonuniyat berilgan: 2, 5, 8, 11, {14}. Bu qatorda har bir son oldingisidan 3 taga ortmoqda. Seyfning ikkinchi kodi esa quyidagicha topiladi: bir son o'ylandi, unga 10 qo'shilib, 2 ga bo'linganda 20 chiqdi. Teskari usulda hisoblasak: 20 * 2 = 40, 40 - 10 = {30} bo'ladi. 1, 2 raqamlaridan tuzish mumkin bo'lgan takrorlanmas ikki xonali sonlar soni {2} ta (12 va 21).",
      "answers": {
        "1": "14",
        "2": "30",
        "3": "2"
      }
    },
    "quiz": [
      {
        "q": "Qonuniyatni davom ettiring: 4, 8, 16, 32, ... ?",
        "opts": [
          "64",
          "48",
          "40"
        ],
        "ans": "64"
      },
      {
        "q": "O'ylangan sonni 4 ga ko'paytirib, 10 ayirilsa 30 qoladi. Son nechaga teng?",
        "opts": [
          "10",
          "8",
          "12"
        ],
        "ans": "10"
      },
      {
        "q": "3 xil ko'ylak va 2 xil shimdan nechta turli xil kiyinish kombinatsiyasi tuziladi?",
        "opts": [
          "6 ta (3 * 2)",
          "5 ta",
          "8 ta"
        ],
        "ans": "6 ta (3 * 2)"
      },
      {
        "q": "Qonuniyatni toping: 100, 90, 80, 70, ... ?",
        "opts": [
          "60",
          "50",
          "65"
        ],
        "ans": "60"
      },
      {
        "q": "Teskari usulda yechishda bo'lish amali qaysi amalga aylanadi?",
        "opts": [
          "Ko'paytirishga (*)",
          "Qo'shishga (+)",
          "Ayirishga (-)"
        ],
        "ans": "Ko'paytirishga (*)"
      }
    ],
    "video": {
      "title": "Maths Puzzles With Answers Part 2",
      "desc": "Mantiqiy boshqotirmalar va olimpiada masalalari video darsi:",
      "youtube_id": "h7lBnyLXo-s"
    }
  }
],
  cloze_pages: [
  {
    "page_num": 51,
    "title": "4-BO'LIM: MATEMATIK MASALALAR MASTERWORK",
    "subtitle": "Matnli masalalarni yechish: 4 ta Oltin Qoida va Strategiya",
    "tag": "Bo'lim Kirish • 4-Sinf",
    "is_intro": true,
    "rules": [
      [
        "1. Masala shartini diqqat bilan 2 marta o'qing va tahlil qiling",
        "Nima ma'lum va nimani topish kerakligini aniqlang. Barcha sonlar va o'lchov birliklarini ajratib oling."
      ],
      [
        "2. Qisqa shart, jadval yoki chizma (sxema) tuzing",
        "Masaladagi voqealarni ko'z oldingizga keltiring. Qisqa yozuv va chizma yechim yo'lini darhol ko'rsatib beradi."
      ],
      [
        "3. Yechish rejasini va formulani tanlang",
        "Qaysi amallarni qaysi tartibda bajarishni rejalashtiring (Harakat bo'lsa S=V*t, Narx bo'lsa Q=N*M, Ish bo'lsa A=w*t)."
      ],
      [
        "4. Javobni hisoblang va uni teskari amal bilan tekshiring",
        "Topilgan son masala shartiga mantiqan mos keladimi? Olingan javobni boshlang'ich shartga qo'yib tekshirib ko'ring."
      ]
    ],
    "banner_note": "Ushbu 20 ta sahifada siz 1-dan 14-gacha bo'lgan barcha matematik mavzularni Alisher va Benny bilan qiziqarli detektiv sarguzashtlar orqali mustahkamlaysiz!",
    "video": {
      "title": "word problem addition and subtraction 4th grade |  klong maths",
      "desc": "Matematik matnli masalalarni o'qish, tushunish va to'g'ri yechish masterclass darsi:",
      "youtube_id": "tuVI8Uv0SAI"
    }
  },
  {
    "page_num": 52,
    "unit_ref": "Math Unit 1",
    "title": "Sehrli Maktab Kutubxonasidagi Kitoblar",
    "tense_focus": "Ko'p Xonali Sonlar (1 000 000 gacha)",
    "intro": "Kitoblar fondini hisoblang va bo'sh joylarni to'ldiring:",
    "story": "Sehrli Maktab kutubxonasiga yangi o'quv yilida katta miqdorda kitoblar keltirildi. Birlar sinfida 450 ta ertak kitob, minglar sinfida esa 35 mingta ilmiy kitob bor edi. Jami kitoblar soni <span class=\"q-blank\">___________</span> tani tashkil etdi. Kutubxonachi kitoblarni o'nliklargacha yaxlitlaganda ular taxminan <span class=\"q-blank\">___________</span> ta bo'ldi. Eng katta olti xonali natural son bu <span class=\"q-blank\">___________</span> dir. 1 000 000 sonida jami <span class=\"q-blank\">___________</span> ta nol bor.",
    "answers": [
      "35450",
      "35450",
      "999999",
      "6"
    ]
  },
  {
    "page_num": 53,
    "unit_ref": "Math Unit 2",
    "title": "Xazina Sandig'idagi Oltin Tangalar",
    "tense_focus": "Ko'p Xonali Sonlarni Qo'shish va Ayirish",
    "intro": "Qadimiy tangalarni hisoblashda Alisherga yordam bering:",
    "story": "Qadimiy Registon minorasi ostidan topilgan birinchi sandiqda 14 500 ta oltin tanga, ikkinchi sandiqda esa 18 200 ta kumush tanga bor edi. Ikkala sandiqdagi jami tangalar soni <span class=\"q-blank\">___________</span> tani tashkil qildi. Arxeologlar muzeyga 12 000 ta tangani topshirishgach, sandiqlarda <span class=\"q-blank\">___________</span> ta tanga qoldi. Agar x + 5000 = 15000 bo'lsa, x ning qiymati <span class=\"q-blank\">___________</span> ga teng.",
    "answers": [
      "32700",
      "20700",
      "10000"
    ]
  },
  {
    "page_num": 54,
    "unit_ref": "Math Unit 3",
    "title": "Kosmik Kemadagi Yoqilg'i Zaxirasi",
    "tense_focus": "Ko'p Xonali Sonlarni Ko'paytirish",
    "intro": "Mars ekspeditsiyasining yoqilg'i hisob-kitobini bajaring:",
    "story": "Kosmik kema dvigateli har bir soatda 40 litr maxsus suyuq yoqilg'i sarflaydi. Kema 25 soat davomida to'xtovsiz uchganda jami <span class=\"q-blank\">___________</span> litr yoqilg'i sarflandi. Kemadagi 15 ta oziq-ovqat konteynerining har birida 20 kg dan mahsulot bor, bu jami <span class=\"q-blank\">___________</span> kg ni tashkil etadi. Har qanday sonni 0 ga ko'paytirganda ko'paytma <span class=\"q-blank\">___________</span> bo'ladi.",
    "answers": [
      "1000",
      "300",
      "0"
    ]
  },
  {
    "page_num": 55,
    "unit_ref": "Math Unit 4",
    "title": "Qaroqchilar Orolidagi O'lja Taqsimoti",
    "tense_focus": "Ko'p Xonali Sonlarni Bo'lish va Qoldiq",
    "intro": "O'ljalarni teng taqsimlang va qoldiqlarni aniqlang:",
    "story": "Qaroqchi kapitan Benny 840 ta qimmatbaho javohirni o'zining 7 nafar do'stiga teng taqsimlab berdi. Har bir qaroqchiga <span class=\"q-blank\">___________</span> tadan javohir tegdi. Qolgan 29 ta oltin tangani 4 nafar yordamchiga teng bo'lganda, har biriga <span class=\"q-blank\">___________</span> tadan tegdi va <span class=\"q-blank\">___________</span> ta tanga qoldiq qoldi.",
    "answers": [
      "120",
      "7",
      "1"
    ]
  },
  {
    "page_num": 56,
    "unit_ref": "Math Unit 5",
    "title": "Professor Owlning Robot Konstruktori",
    "tense_focus": "Amallar Tartibi va Qavsli Ifodalar",
    "intro": "Robot tizimidagi ifodalarni to'g'ri hisoblang:",
    "story": "Robotni ishga tushirish uchun kompyuterga ifoda kiritildi: 40 + 30 * 2. Amallar tartibiga ko'ra avval ko'paytirilib, natijada <span class=\"q-blank\">___________</span> hosil bo'ldi. Keyingi xavfsizlik kodi qavsli ifoda edi: (40 + 30) * 2 va uning qiymati <span class=\"q-blank\">___________</span> bo'ldi. 100 - 60 : 3 ifodaning qiymati esa <span class=\"q-blank\">___________</span> ga teng.",
    "answers": [
      "100",
      "140",
      "80"
    ]
  },
  {
    "page_num": 57,
    "unit_ref": "Math Unit 6",
    "title": "Bennyning Pitsa Ziyofati",
    "tense_focus": "Oddiy Kasrlar va Ulushlar",
    "intro": "Ziyofatdagi pitsa va piroglarning ulushlarini aniqlang:",
    "story": "Benny katta mevali pirogni 6 ta teng bo'lakka bo'ldi. U va mehmonlar 4 ta bo'lakni yeb tugatishdi. Ular pirogning <span class=\"q-blank\">___________</span> qismini yeyishdi. Likopchada pirogning <span class=\"q-blank\">___________</span> qismi qoldi. 4/6 kasrida surat <span class=\"q-blank\">___________</span> soni, maxraj esa <span class=\"q-blank\">___________</span> sonidir.",
    "answers": [
      "4/6",
      "2/6",
      "4",
      "6"
    ]
  },
  {
    "page_num": 58,
    "unit_ref": "Math Unit 7",
    "title": "Chimyon Tog'idagi Sayohatchilar Xaltasi",
    "tense_focus": "Kattaliklar va O'lchov Birliklari",
    "intro": "Tog' sayohatidagi masofa va og'irliklarni hisoblang:",
    "story": "Alisher va uning sinfdoshlari Chimyon tog'i bo'ylab 6 km piyoda yurishdi. Bu masofa <span class=\"q-blank\">___________</span> metrga teng. Sayohatchilar olib kelgan 3 kg suv <span class=\"q-blank\">___________</span> grammni tashkil etadi. Ular tog'da 4 soat bo'lishdi, bu esa <span class=\"q-blank\">___________</span> minutga teng. 1 tonna yuk esa <span class=\"q-blank\">___________</span> kg ga teng.",
    "answers": [
      "6000",
      "3000",
      "240",
      "1000"
    ]
  },
  {
    "page_num": 59,
    "unit_ref": "Math Unit 8",
    "title": "Sirli Labirint va Geometrik Darvozalar",
    "tense_focus": "Geometrik Shakllar va Burchaklar",
    "intro": "Labirint eshiklarini ochish uchun geometrik sirlarni yozing:",
    "story": "Qadimiy qasr darvozalari to'g'ri to'rtburchak shaklida bo'lib, uning to'rtta burchagi ham to'g'ri burchak, ya'ni <span class=\"q-blank\">___________</span> gradusli burchakdir. Favvora aylanasi radiusi 7 metr bo'lsa, uning diametri <span class=\"q-blank\">___________</span> metrga teng. 90 gradusdan kichik bo'lgan burchak <span class=\"q-blank\">___________</span> burchak deb ataladi.",
    "answers": [
      "90",
      "14",
      "o'tkir"
    ]
  },
  {
    "page_num": 60,
    "unit_ref": "Math Unit 9",
    "title": "Yangi Maktab Tomorqasi va Maydoni",
    "tense_focus": "Perimetr va Yuza Hisoblash",
    "intro": "Tomorqa maydonining o'lchamlarini hisoblang:",
    "story": "Maktab tomorqasining bo'yi 30 metr, eni 20 metr bo'lgan to'g'ri to'rtburchakdir. Ushbu tomorqaning perimetri <span class=\"q-blank\">___________</span> metrga teng. Tomorqaning yuzasi esa <span class=\"q-blank\">___________</span> kvadrat metr (m²) bo'ladi. Tomoni 8 metr bo'lgan gulzor kvadrat shaklida bo'lsa, uning yuzi <span class=\"q-blank\">___________</span> m² dir.",
    "answers": [
      "100",
      "600",
      "64"
    ]
  },
  {
    "page_num": 61,
    "unit_ref": "Math Unit 10",
    "title": "Poyga Avtomobillari Musobaqasi",
    "tense_focus": "Harakat Masalalari (S = V * t)",
    "intro": "Musobaqa yo'lidagi tezlik va masofalarni aniqlang:",
    "story": "Qizil poyga mashinasi 90 km/soat tezlik bilan 2 soat harakatlandi va <span class=\"q-blank\">___________</span> km yo'l bosdi. Ko'k mashina esa 240 km masofani 3 soatda bosib o'tdi, demak uning tezligi <span class=\"q-blank\">___________</span> km/soat bo'lgan. Agar ikki mashina bir-biriga qarab 80 va 70 km/soat tezlik bilan harakatlansa, yaqinlashish tezligi <span class=\"q-blank\">___________</span> km/soat bo'ladi.",
    "answers": [
      "180",
      "80",
      "150"
    ]
  },
  {
    "page_num": 62,
    "unit_ref": "Math Unit 11",
    "title": "Ikkita Duradgorning Shahar Soati",
    "tense_focus": "Mehnat va Ish Unumi Masalalari",
    "intro": "Shaharning qadimiy soatini ta'mirlashdagi ish unumini hisoblang:",
    "story": "Birinchi usta soat uchun 1 kunda 6 ta tishli g'ildirak yasaydi, ikkinchi usta esa 4 ta yasaydi. Ular birgalikda 1 kunda <span class=\"q-blank\">___________</span> ta g'ildirak tayyorlashadi. Agar jami 50 ta g'ildirak kerak bo'lsa, ular birgalikda bu ishni <span class=\"q-blank\">___________</span> kunda bajarishadi. Birinchi usta yolg'iz o'zi 30 ta g'ildirakni <span class=\"q-blank\">___________</span> kunda yasaydi.",
    "answers": [
      "10",
      "5",
      "5"
    ]
  },
  {
    "page_num": 63,
    "unit_ref": "Math Unit 12",
    "title": "Supermarketdagi Katta Xarid",
    "tense_focus": "Narx, Miqdor va Qiymat",
    "intro": "Xarid chekidagi hisob-kitoblarni yakunlang:",
    "story": "Ona va bola supermarketdan 1 kg narxi 6 000 so'm bo'lgan un mahsulotidan 3 kg sotib olishdi. Un uchun <span class=\"q-blank\">___________</span> so'm to'landi. 2 litr sut uchun 16 000 so'm berildi, demak 1 litr sut narxi <span class=\"q-blank\">___________</span> so'm. Jami xarid 34 000 so'm bo'ldi. Kassirga 50 000 so'm berilgach, qaytim <span class=\"q-blank\">___________</span> so'm bo'ldi.",
    "answers": [
      "18000",
      "8000",
      "16000"
    ]
  },
  {
    "page_num": 64,
    "unit_ref": "Math Unit 13",
    "title": "Maktab Kutubxonasi Statistikasi",
    "tense_focus": "Diagrammalar va O'rtacha Qiymat",
    "intro": "Kitobxonlik haftaligi natijalarini hisoblang:",
    "story": "Hafta davomida dushanba kuni 30 ta, seshanba kuni 40 ta, chorshanba kuni 50 ta kitob o'qildi. Jami o'qilgan kitoblar soni <span class=\"q-blank\">___________</span> ta bo'ldi. Kuniga o'rtacha <span class=\"q-blank\">___________</span> ta kitob o'qilgan. Eng ko'p o'qilgan kundagi kitoblar soni <span class=\"q-blank\">___________</span> tani tashkil etdi.",
    "answers": [
      "120",
      "40",
      "50"
    ]
  },
  {
    "page_num": 65,
    "unit_ref": "Math Unit 14",
    "title": "Zukko Detektivning Seyf Kodi",
    "tense_focus": "Mantiqiy Qonuniyatlar va Kombinatorika",
    "intro": "Detektiv Alisherga seyf kodini topishda yordam bering:",
    "story": "Qonuniyatni toping: 5, 10, 15, 20, <span class=\"q-blank\">___________</span>. Bir son o'ylandi, undan 8 ayirilib, 3 ga ko'paytirilsa 36 chiqadi. Teskari usulda hisoblasak: 36 : 3 = 12, 12 + 8 = <span class=\"q-blank\">___________</span>. Qizil, sariq va ko'k rangli 3 ta bayroqchadan har xil tartibda <span class=\"q-blank\">___________</span> ta juftlik tuzish mumkin.",
    "answers": [
      "25",
      "20",
      "6"
    ]
  },
  {
    "page_num": 66,
    "unit_ref": "Math Unit 15",
    "title": "Qadimgi Samarqandga Sayohat",
    "tense_focus": "Aralash Masalalar (Masofa va Narx)",
    "intro": "Tarixiy obidalarga sayohat sarf-xarajatlarini aniqlang:",
    "story": "Ekskursiya avtobusi Toshkentdan Samarqandgacha bo'lgan 300 km masofani 75 km/soat tezlik bilan <span class=\"q-blank\">___________</span> soatda bosib o'tdi. Har bir o'quvchi uchun muzey chiptasi 10 000 so'm bo'lib, 20 nafar o'quvchi uchun jami <span class=\"q-blank\">___________</span> so'm to'landi. Mehmonxonada har birida 3 tadan o'rin bo'lgan 8 ta xona band qilindi, jami joylar soni <span class=\"q-blank\">___________</span> ta bo'ldi.",
    "answers": [
      "4",
      "200000",
      "24"
    ]
  },
  {
    "page_num": 67,
    "unit_ref": "Math Unit 16",
    "title": "Kelajak 2050 Shahri Quyosh Energiyasi",
    "tense_focus": "Aralash Masalalar (Yuza va Ish unumi)",
    "intro": "Eko-shahar quyosh panellari quvvatini hisoblang:",
    "story": "Kvadrat shaklidagi quyosh paneli tomoni 6 metrga teng. Uning yuzasi <span class=\"q-blank\">___________</span> m² bo'ladi. Bitta panel soatiga 5 kilovatt energiya ishlab chiqarsa, 8 soatda <span class=\"q-blank\">___________</span> kilovatt energiya beradi. Shahar markazidagi 100 000 kishidan iborat aholi soni yuz minglar xonasida <span class=\"q-blank\">___________</span> raqamiga ega.",
    "answers": [
      "36",
      "40",
      "1"
    ]
  },
  {
    "page_num": 68,
    "unit_ref": "Math Unit 17",
    "title": "Matematika Chempionati Finali",
    "tense_focus": "Katta Yakuniy Masala Matni",
    "intro": "Grand Chempionatning yakuniy savollariga to'g'ri javoblarni yozing:",
    "story": "Chempionatda 120 nafar o'quvchi qatnashdi. Ularning yarmi (1/2 qismi) o'g'il bolalar bo'lib, ular <span class=\"q-blank\">___________</span> nafarni tashkil qildi. Qolgan 60 nafar qiz bolalar 6 ta jamoaga teng taqsimlanganda, har bir jamoada <span class=\"q-blank\">___________</span> tadan qiz bo'ldi. Musobaqada g'olib bo'lgan jamoa 500 ball to'plab, eng yaqin ta'qibchisidan 50 ball ko'p oldi, ikkinchi o'rindagi jamoa <span class=\"q-blank\">___________</span> ball to'plagan.",
    "answers": [
      "60",
      "10",
      "450"
    ]
  },
  {
    "page_num": 69,
    "title": "SECTION 4: MATEMATIK MASALALAR JAVOBLAR KALITI",
    "subtitle": "Barcha 17 ta sarguzashtli hikoya-masalalarning rasmiy yechimlari",
    "tag": "Javoblar Kaliti • 4-Sinf",
    "is_answers": true,
    "answers_list": [
      [
        "Sahifa 52: Sehrli Maktab Kutubxonasidagi Kitoblar",
        "35450, 35450, 999999, 6"
      ],
      [
        "Sahifa 53: Xazina Sandig'idagi Oltin Tangalar",
        "32700, 20700, 10000"
      ],
      [
        "Sahifa 54: Kosmik Kemadagi Yoqilg'i Zaxirasi",
        "1000, 300, 0"
      ],
      [
        "Sahifa 55: Qaroqchilar Orolidagi O'lja Taqsimoti",
        "120, 7, 1"
      ],
      [
        "Sahifa 56: Professor Owlning Robot Konstruktori",
        "100, 140, 80"
      ],
      [
        "Sahifa 57: Bennyning Pitsa Ziyofati",
        "4/6, 2/6, 4, 6"
      ],
      [
        "Sahifa 58: Chimyon Tog'idagi Sayohatchilar Xaltasi",
        "6000, 3000, 240, 1000"
      ],
      [
        "Sahifa 59: Sirli Labirint va Geometrik Darvozalar",
        "90, 14, o'tkir"
      ],
      [
        "Sahifa 60: Yangi Maktab Tomorqasi va Maydoni",
        "100, 600, 64"
      ],
      [
        "Sahifa 61: Poyga Avtomobillari Musobaqasi",
        "180, 80, 150"
      ],
      [
        "Sahifa 62: Ikkita Duradgorning Shahar Soati",
        "10, 5, 5"
      ],
      [
        "Sahifa 63: Supermarketdagi Katta Xarid",
        "18000, 8000, 16000"
      ],
      [
        "Sahifa 64: Maktab Kutubxonasi Statistikasi",
        "120, 40, 50"
      ],
      [
        "Sahifa 65: Zukko Detektivning Seyf Kodi",
        "25, 20, 6"
      ],
      [
        "Sahifa 66: Qadimgi Samarqandga Sayohat",
        "4, 200000, 24"
      ],
      [
        "Sahifa 67: Kelajak 2050 Shahri Quyosh Energiyasi",
        "36, 40, 1"
      ],
      [
        "Sahifa 68: Matematika Chempionati Finali",
        "60, 10, 450"
      ]
    ]
  },
  {
    "page_num": 70,
    "title": "AL-XORAZMIY GRAND MASTER DIPLOMI",
    "subtitle": "4-Sinf Matematika fanidan oliy darajali bitiruv diplomi",
    "tag": "Grand Diplom • 4-Sinf",
    "is_cert": true
  }
]
};

if (typeof window !== 'undefined') {
  window.MATH_DATA = MATH_DATA;
}
