// math_data.js - Complete data for 4th Grade Mathematics (Matematika)
// 14 Comprehensive Units + 20-Page Problem Solving Adventure (Pages 51-70)
// Advanced Standard: Al-Xorazmiy & Presidential School / Olympiad Level

const MATH_DATA = {
  units: [
  {
    "id": "math-unit-1",
    "num": 1,
    "title": "Ko'p Xonali Sonlar (1 000 000 gacha sonlar)",
    "subtitle": "Xonalar, sinflar, xona qo'shiluvchilari yig'indisi va yaxlitlash",
    "tag": "Sonlar va Arifmetika • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Ko'p xonali sonlar</b> bir nechta raqamlar yordamida yoziladi. Har uchta xona birligi bitta <b>sinf</b>ni tashkil etadi: <i>Birlar sinfi</i> (birlar, o'nlar, yuzlar), <i>Minglar sinfi</i> (minglar, o'n minglar, yuz minglar) va <i>Millionlar sinfi</i>. Har qanday ko'p xonali sonni uning xona qo'shiluvchilari yig'indisi shaklida yozish mumkin (masalan, <code>458 205 = 400 000 + 50 000 + 8 000 + 200 + 5</code>).",
    "tables": [
      {
        "title": "Sinflar va Xona Birliklari Jadvali (1 000 000 gacha)",
        "headers": [
          "Sinf Nomi",
          "Yuzliklar Xonasi",
          "O'nliklar Xonasi",
          "Birliklar Xonasi",
          "Namuna (Son)"
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
            "Yuz minglar (100 000)",
            "O'n minglar (10 000)",
            "Birlar minglar (1 000)",
            "584 000"
          ],
          [
            "Birlar sinfi",
            "Yuzlar (100)",
            "O'nlar (10)",
            "Birlar (1)",
            "725"
          ]
        ]
      },
      {
        "title": "Xona Qo'shiluvchilari va Yaxlitlash Qoidalari",
        "headers": [
          "Son",
          "Xona Qo'shiluvchilari Yig'indisi",
          "Yuzliklargacha Yaxlitlash",
          "Mingliklargacha Yaxlitlash"
        ],
        "rows": [
          [
            "348 275",
            "300 000 + 40 000 + 8 000 + 200 + 70 + 5",
            "348 300 (7>=5 ortadi)",
            "348 000 (2<5 o'zgarmaydi)"
          ],
          [
            "605 842",
            "600 000 + 5 000 + 800 + 40 + 2",
            "605 800 (4<5 o'zgarmaydi)",
            "606 000 (8>=5 ortadi)"
          ],
          [
            "999 999",
            "900 000 + 90 000 + 9 000 + 900 + 90 + 9",
            "1 000 000",
            "1 000 000"
          ]
        ]
      }
    ],
    "tip": "<b>Olimpiada qoidasi:</b> Sonlarni yaxlitlaganda, kerakli xonadan keyingi raqam 0, 1, 2, 3, 4 bo'lsa xona soni o'zgarmaydi; agar 5, 6, 7, 8, 9 bo'lsa xona 1 taga ortadi!",
    "time_words": "<b>Asosiy tushunchalar:</b> 1 000 000 (million), Sinflar, Xona birliklari, Yaxlitlash, Natural son.",
    "vocab": [
      {
        "num": 1,
        "word": "Xona birligi",
        "uz": "Raqam o'rni",
        "pos": "ot",
        "synonym": "Razryad",
        "meaning": "Sondagi raqam egallagan o'rni (birlik, o'nlik, yuzlik)",
        "example": "458 200 sonida 5 raqami o'n minglar xonasida turibdi."
      },
      {
        "num": 2,
        "word": "Birlar sinfi",
        "uz": "Dastlabki 3 xona",
        "pos": "ot",
        "synonym": "Kichik sinf",
        "meaning": "Birlar, o'nlar va yuzlar xonalaridan iborat birinchi sinf",
        "example": "125 450 sonida birlar sinfi 450 ga teng."
      },
      {
        "num": 3,
        "word": "Minglar sinfi",
        "uz": "Ikkinchi sinf",
        "pos": "ot",
        "synonym": "Mingliklar guruhi",
        "meaning": "Minglar, o'n minglar va yuz minglar xonalaridan iborat sinf",
        "example": "584 120 sonida minglar sinfida 584 ta birlik bor."
      },
      {
        "num": 4,
        "word": "Million",
        "uz": "1 000 000",
        "pos": "son",
        "synonym": "Mingta ming",
        "meaning": "Birning orqasida oltita nol bo'lgan yetti xonali son",
        "example": "O'zbekiston yoshlari soni bir necha milliondan oshadi."
      },
      {
        "num": 5,
        "word": "Xona qo'shiluvchilari",
        "uz": "Yoyilma shakli",
        "pos": "ot",
        "synonym": "Razryad yig'indisi",
        "meaning": "Sonni har bir xona qiymati yig'indisi ko'rinishida yozish",
        "example": "500 000 + 40 000 + 700 + 9 soni 540 709 ga teng."
      },
      {
        "num": 6,
        "word": "Yaxlitlash",
        "uz": "Taqribiy hisoblash",
        "pos": "fe'l/ot",
        "synonym": "Yaqinlashtirish",
        "meaning": "Sonni o'ziga yaqin bo'lgan nol bilan tugovchi qulay songa almashtirish",
        "example": "68 472 sonini mingliklargacha yaxlitlasak 68 000 hosil bo'ladi."
      },
      {
        "num": 7,
        "word": "Natural son",
        "uz": "Sanoq soni",
        "pos": "ot",
        "synonym": "Butun musbat son",
        "meaning": "Narsalarni sanashda ishlatiladigan sonlar (1, 2, 3, ...)",
        "example": "Eng kichik olti xonali natural son 100 000 dir."
      },
      {
        "num": 8,
        "word": "Raqam",
        "uz": "Yozuv belgisi",
        "pos": "ot",
        "synonym": "Simvol (0-9)",
        "meaning": "Sonlarni yozish uchun ishlatiladigan 10 ta belgi (0 dan 9 gacha)",
        "example": "1 000 000 soni 7 ta raqam bilan yoziladi."
      },
      {
        "num": 9,
        "word": "Taqqoslash",
        "uz": "Solishtirish",
        "pos": "fe'l/ot",
        "synonym": "Chog'ishtirish",
        "meaning": "Ikki sonning kattalik munosabatini aniqlash (> , < , =)",
        "example": "584 200 > 584 190 munosabati to'g'ri taqqoslashdir."
      },
      {
        "num": 10,
        "word": "Eng katta son",
        "uz": "Maksimal qiymat",
        "pos": "ot",
        "synonym": "Eng yuqori son",
        "meaning": "Berilgan xonadagi eng katta qiymatga ega son",
        "example": "Eng katta olti xonali natural son 999 999 ga teng."
      }
    ],
    "cloze": {
      "title": "Topshiriq 1: Xazina Sandig'ining Maxfiy Raqamli Kodi",
      "inst": "Qoidalarga asoslanib hisoblang va bo'sh joylarni to'ldiring:",
      "text": "Arxeolog Alisher topgan xazina sandig'ida maxfiy olti xonali kod yashiringan: 458 200 sonida minglar sinfida jami {458} ta birlik bor. 500 000 + 40 000 + 700 + 9 xona qo'shiluvchilari yig'indisi {540709} sonini hosil qiladi. 68 472 sonini mingliklargacha yaxlitlasak {68000} hosil bo'ladi. Eng kichik olti xonali natural son {100000} dir. 1 000 000 sonida jami {6} ta nol bor.",
      "answers": {
        "1": "458",
        "2": "540709",
        "3": "68000",
        "4": "100000",
        "5": "6"
      }
    },
    "quiz": [
      {
        "q": "584 720 sonida yuz minglar xonasida qaysi raqam turibdi?",
        "opts": [
          "5",
          "8",
          "4"
        ],
        "ans": "5"
      },
      {
        "q": "400 000 + 70 000 + 800 + 5 yig'indi qaysi songa teng?",
        "opts": [
          "470 805",
          "407 805",
          "478 005"
        ],
        "ans": "470 805"
      },
      {
        "q": "84 650 sonini mingliklargacha yaxlitlaganda qanday son hosil bo'ladi?",
        "opts": [
          "85 000",
          "84 000",
          "84 700"
        ],
        "ans": "85 000"
      },
      {
        "q": "Eng katta olti xonali natural son qaysi?",
        "opts": [
          "999 999",
          "1 000 000",
          "900 000"
        ],
        "ans": "999 999"
      },
      {
        "q": "720 000 va 702 000 sonlarini to'g'ri taqqoslang:",
        "opts": [
          "720 000 > 702 000",
          "720 000 < 702 000",
          "720 000 = 702 000"
        ],
        "ans": "720 000 > 702 000"
      }
    ],
    "video": {
      "title": "Ko'p Xonali Sonlar (1 000 000 gacha sonlar) Video Dars",
      "desc": "Ko'p xonali sonlar, sinflar, xona birliklari va ularni taqqoslash qoidalari darsi:",
      "youtube_id": "9j_v4-2Zpao"
    }
  },
  {
    "id": "math-unit-2",
    "num": 2,
    "title": "Ko'p Xonali Sonlarni Qo'shish va Ayirish",
    "subtitle": "Xonama-xona ustun usulida amallar, o'nlikdan qarz olish va tenglamalar",
    "tag": "Arifmetik Amallar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Ko'p xonali sonlarni qo'shish va ayirishda</b> sonlar bir-birining tagiga xonama-xona (birliklar tagiga birliklar, o'nliklar tagiga o'nliklar) yoziladi. Qo'shishda xonadagi yig'indi 10 yoki undan ortiq bo'lsa, keyingi xonaga 1 o'tkaziladi. Ayirishda kichik raqamdan katta raqam ayrilmasa, yuqori xonadan 1 ta o'nlik <b>qarz olinadi</b>. Noma'lumli tenglamalarni yechishda esa teskari amallar qoidasi qo'llaniladi.",
    "tables": [
      {
        "title": "Ustun Usulida Qo'shish va Ayirish Namunasi",
        "headers": [
          "Amal Turi",
          "Misol",
          "Bajarilish Bosqichlari",
          "Yakuniy Natija"
        ],
        "rows": [
          [
            "Qo'shish (+)",
            "485 240 + 314 760",
            "Birliklar: 0+0=0; O'nliklar: 4+6=10 (0 yozib, 1 dilda); Yuzliklar: 2+7+1=10...",
            "800 000"
          ],
          [
            "Ayirish (-)",
            "1 000 000 - 425 600",
            "Nollardan qarz olinadi: 10-6=4; 9-5=4; 9-2=7; 9-4=5...",
            "574 400"
          ],
          [
            "Tenglama",
            "x + 45 800 = 120 000",
            "Noma'lum qo'shiluvchini topish: x = 120 000 - 45 800",
            "x = 74 200"
          ]
        ]
      },
      {
        "title": "Noma'lum Sonni Topish Qoidalari",
        "headers": [
          "Tenglama Ko'rinishi",
          "Noma'lum Komponent",
          "Yechish Formulasi",
          "Misol"
        ],
        "rows": [
          [
            "a + x = b",
            "Qo'shiluvchi (x)",
            "x = b - a (Yig'indidan ayirish)",
            "x + 30 000 = 85 000 -> x = 55 000"
          ],
          [
            "x - a = b",
            "Kamayuvchi (x)",
            "x = b + a (Ayirmaga qo'shish)",
            "x - 24 000 = 50 000 -> x = 74 000"
          ],
          [
            "a - x = b",
            "Ayriluvchi (x)",
            "x = a - b (Kamayuvchidan ayirish)",
            "100 000 - x = 35 000 -> x = 65 000"
          ]
        ]
      }
    ],
    "tip": "<b>Muhim qoida:</b> Ayirish to'g'ri bajarilganini tekshirish uchun ayirmaga ayriluvchini qo'shish kerak: agar kamayuvchi hosil bo'lsa, hisob to'g'ri!",
    "time_words": "<b>Amallar:</b> Qo'shish (+), Ayirish (-), Qarz olish, Dilda saqlash, Tenglama ildizi.",
    "vocab": [
      {
        "num": 1,
        "word": "Qo'shiluvchi",
        "uz": "Qo'shiladigan son",
        "pos": "ot",
        "synonym": "Yig'indi qismi",
        "meaning": "Qo'shish amalida ishtirok etayotgan har bir son",
        "example": "45 000 + 35 000 amalda 45 000 birinchi qo'shiluvchidir."
      },
      {
        "num": 2,
        "word": "Yig'indi",
        "uz": "Qo'shish natijasi",
        "pos": "ot",
        "synonym": "Jami summa",
        "meaning": "Ikki yoki undan ortiq son qo'shilganda hosil bo'ladigan yakuniy son",
        "example": "485 240 va 314 760 sonlari yig'indisi 800 000 ga teng."
      },
      {
        "num": 3,
        "word": "Kamayuvchi",
        "uz": "Kamaytiriladigan son",
        "pos": "ot",
        "synonym": "Katta son",
        "meaning": "Ayirish amalida boshida turgan, undan boshqa son ayriladigan son",
        "example": "1 000 000 - 425 600 ifodada 1 000 000 kamayuvchidir."
      },
      {
        "num": 4,
        "word": "Ayriluvchi",
        "uz": "Ayriladigan son",
        "pos": "ot",
        "synonym": "Kamaytiruvchi",
        "meaning": "Kamayuvchidan olib tashlanadigan son",
        "example": "500 000 - y = 185 400 tenglamada y ayriluvchi son hisoblanadi."
      },
      {
        "num": 5,
        "word": "Ayirma",
        "uz": "Ayirish natijasi",
        "pos": "ot",
        "synonym": "Farq",
        "meaning": "Kamayuvchi va ayriluvchi orasidagi tafovut, yakuniy natija",
        "example": "1 000 000 dan 425 600 ning ayirmasi 574 400 bo'ladi."
      },
      {
        "num": 6,
        "word": "Qarz olish",
        "uz": "Yuqori xonadan 1 olish",
        "pos": "fe'l/ot",
        "synonym": "Xona maydalash",
        "meaning": "Ayirishda yetmagan xona uchun chapdagi yuqori xonadan 1 ta o'nlik olish",
        "example": "0 dan 6 ni ayirib bo'lmagani uchun yuzlikdan qarz olamiz."
      },
      {
        "num": 7,
        "word": "Ustun usuli",
        "uz": "Vertikal yozish",
        "pos": "ot",
        "synonym": "Xonama-xona hisoblash",
        "meaning": "Sonlarni xonalari bo'yicha ustun shaklida terib hisoblash",
        "example": "Katta sonlarni qo'shish ustun usulida oson bajariladi."
      },
      {
        "num": 8,
        "word": "Tenglama",
        "uz": "Noma'lumli tenglik",
        "pos": "ot",
        "synonym": "Tenglik",
        "meaning": "Tarkibida harf bilan belgilangan noma'lum son (x) qatnashgan tenglik",
        "example": "x + 45 800 = 120 000 tenglama noma'lum sonni topishni talab qiladi."
      },
      {
        "num": 9,
        "word": "Tekshirish",
        "uz": "To'g'riligini aniqlash",
        "pos": "fe'l/ot",
        "synonym": "Nazorat",
        "meaning": "Olingan natijani teskari amal yordamida qayta hisoblab ko'rish",
        "example": "Ayirmani tekshirish uchun ayirmaga ayriluvchi qo'shiladi."
      },
      {
        "num": 10,
        "word": "Xona tafovuti",
        "uz": "Oraliq farqi",
        "pos": "ot",
        "synonym": "Kattalik farqi",
        "meaning": "Ikki son o'rtasidagi qiymat farqini ko'rsatuvchi natija",
        "example": "Shaharlar orasidagi masofalar farqi 51 500 km ni tashkil etdi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 2: Bank G'aznasidagi Murakkab Hisob-Kitob",
      "inst": "Qo'shish, ayirish va tenglamalarni yechib bo'sh joylarni to'ldiring:",
      "text": "Markaziy bank g'aznasida 485 240 so'm va 314 760 so'm mablag' birlashtirildi, jami yig'indi {800000} so'm bo'ldi. 1 000 000 so'mdan 425 600 so'm ajratilgach, g'aznada {574400} so'm qoldi. Agar x + 45 800 = 120 000 bo'lsa, noma'lum x qiymati {74200} ga teng. 500 000 - y = 185 400 tenglamada y ning qiymati {314600} bo'ladi. Ikki sonning yig'indisi 90 000 ga teng bo'lib, birinchi son 38 500 bo'lsa, ikkinchi son {51500} dir.",
      "answers": {
        "1": "800000",
        "2": "574400",
        "3": "74200",
        "4": "314600",
        "5": "51500"
      }
    },
    "quiz": [
      {
        "q": "485 240 + 314 760 yig'indi nechaga teng?",
        "opts": [
          "800 000",
          "799 000",
          "810 000"
        ],
        "ans": "800 000"
      },
      {
        "q": "1 000 000 - 425 600 ayirmani toping:",
        "opts": [
          "574 400",
          "584 400",
          "575 400"
        ],
        "ans": "574 400"
      },
      {
        "q": "x + 24 500 = 80 000 tenglamada x nechaga teng?",
        "opts": [
          "55 500",
          "65 500",
          "104 500"
        ],
        "ans": "55 500"
      },
      {
        "q": "500 000 - y = 320 000 tenglamada y ning qiymatini toping:",
        "opts": [
          "180 000",
          "820 000",
          "280 000"
        ],
        "ans": "180 000"
      },
      {
        "q": "Ayirish to'g'ri bajarilganini qaysi amal bilan tekshiramiz?",
        "opts": [
          "Qo'shish amali bilan",
          "Bo'lish amali bilan",
          "Ko'paytirish amali bilan"
        ],
        "ans": "Qo'shish amali bilan"
      }
    ],
    "video": {
      "title": "Ko'p Xonali Sonlarni Ustun Shaklida Qo'shish va Ayirish",
      "desc": "Ko'p xonali sonlarni xonama-xona qo'shish va ayirish usullari:",
      "youtube_id": "u6bH_hDugN0"
    }
  },
  {
    "id": "math-unit-3",
    "num": 3,
    "title": "Ko'p Xonali Sonlarni Ko'paytirish",
    "subtitle": "Ko'paytirish qonunlari, taqsimot xossasi, ikki va uch xonali songa ko'paytirish",
    "tag": "Arifmetik Amallar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Ko'p xonali sonlarni ko'paytirishda</b> xonama-xona ko'paytirish va oraliq natijalarni qo'shish tartibiga rioya qilinadi. Ko'paytirishning <b>taqsimot qonuni</b>: <code>a * (b + c) = a * b + a * c</code> murakkab hisoblashlarni og'zaki yoki juda oson yechishga yordam beradi. Oxirida nollari bor sonlarni ko'paytirishda nollardan boshqa raqamlar ko'paytirilib, natija orqasiga barcha nollar yozib qo'yiladi.",
    "tables": [
      {
        "title": "Ko'paytirish Qonunlari va Qulay Usullar Jadvali",
        "headers": [
          "Qonun Nomi",
          "Matematik Formulalar",
          "Amaliy Namunaviy Misol",
          "Oson Hisoblash Usuli"
        ],
        "rows": [
          [
            "O'rin almashtirish",
            "a * b = b * a",
            "25 * 348 = 348 * 25",
            "Sonlar o'rni almashsa ko'paytma o'zgarmaydi"
          ],
          [
            "Guruhlash qonuni",
            "(a * b) * c = a * (b * c)",
            "(4 * 78) * 25 = (4 * 25) * 78",
            "4 * 25 = 100 bo'lib, 100 * 78 = 7 800"
          ],
          [
            "Taqsimot qonuni",
            "a * (b + c) = a * b + a * c",
            "25 * (40 + 4) = 25 * 40 + 25 * 4",
            "1 000 + 100 = 1 100 (juda qulay!)"
          ],
          [
            "Nolli sonlar",
            "1 200 * 400",
            "12 * 4 = 48 va orqasiga 4 ta nol",
            "480 000 hosil bo'ladi"
          ]
        ]
      }
    ],
    "tip": "<b>Olimpiada siri:</b> Agar ifodada 25 va 4 sonlari uchrasa, ularni birinchi ko'paytiring (25 * 4 = 100). Agar 125 va 8 sonlari uchrasa, 125 * 8 = 1 000 bo'ladi!",
    "time_words": "<b>Formulalar:</b> a * b = b * a, a * (b + c) = a*b + a*c, 25*4=100, 125*8=1000.",
    "vocab": [
      {
        "num": 1,
        "word": "Ko'paytuvchi",
        "uz": "Zarb qilinuvchi son",
        "pos": "ot",
        "synonym": "Omil",
        "meaning": "Ko'paytirish amalida qatnashayotgan sonlar",
        "example": "425 * 36 misolida 425 birinchi ko'paytuvchi hisoblanadi."
      },
      {
        "num": 2,
        "word": "Ko'paytma",
        "uz": "Zarb natijasi",
        "pos": "ot",
        "synonym": "Hosil bo'lgan son",
        "meaning": "Ikki yoki undan ortiq son ko'paytirilganda chiqadigan natija",
        "example": "425 va 36 ning ko'paytmasi 15 300 ga teng."
      },
      {
        "num": 3,
        "word": "Taqsimot qonuni",
        "uz": "Qavslarni ochish",
        "pos": "ot",
        "synonym": "Distributivlik",
        "meaning": "Sonni yig'indiga ko'paytirish uchun uni har bir qo'shiluvchiga ko'paytirish",
        "example": "25 * (40 + 4) = 1 000 + 100 = 1 100 taqsimot qonuniga asoslangan."
      },
      {
        "num": 4,
        "word": "Oraliq ko'paytma",
        "uz": "Qadam natijasi",
        "pos": "ot",
        "synonym": "Chala ko'paytma",
        "meaning": "Ustun usulida bir xonaga ko'paytirganda chiqadigan oraliq qator",
        "example": "Ikki xonali songa ko'paytirishda ikkita oraliq ko'paytma qo'shiladi."
      },
      {
        "num": 5,
        "word": "Nolli ko'paytirish",
        "uz": "Nollarni qo'shib yozish",
        "pos": "ot",
        "synonym": "Yaxlit ko'paytirish",
        "meaning": "Nollar bilan tugagan sonlarni ko'paytirib, nollarni oxiriga tirkash",
        "example": "1 200 * 400 amali 480 000 ga teng."
      },
      {
        "num": 6,
        "word": "Guruhlash",
        "uz": "Qulay tartibda terish",
        "pos": "fe'l/ot",
        "synonym": "Assotsiativlik",
        "meaning": "Ko'paytuvchilarni hisoblash oson bo'ladigan juftliklarga ajratish",
        "example": "4 va 25 sonlarini guruhlab 100 hosil qildik."
      },
      {
        "num": 7,
        "word": "Hajm hisoblash",
        "uz": "Miqdorni ko'paytirish",
        "pos": "ot",
        "synonym": "Umumiy son",
        "meaning": "Bitta qutidagi miqdorni qutilar soniga ko'paytirish",
        "example": "150 ta qutidagi qalamlar soni 7 200 tani tashkil etdi."
      },
      {
        "num": 8,
        "word": "Uch xonali songa ko'paytirish",
        "uz": "Katta ko'paytirish",
        "pos": "ot",
        "synonym": "Uch qatorli ustun",
        "meaning": "Ko'p xonali sonni yuzlik, o'nlik va birlikka ketma-ket ko'paytirish",
        "example": "350 * 20 amali 7 000 qiymatini beradi."
      },
      {
        "num": 9,
        "word": "Kvadrat",
        "uz": "Sonning o'ziga ko'paytmasi",
        "pos": "ot",
        "synonym": "a * a",
        "meaning": "Sonni o'zini o'ziga ko'paytirish (masalan: 12 * 12 = 144)",
        "example": "12 ning kvadrati 144 ga teng bo'ladi."
      },
      {
        "num": 10,
        "word": "Avtomatik karra",
        "uz": "Jadval ustuni",
        "pos": "ot",
        "synonym": "Karra jadvali",
        "meaning": "Ko'paytirish jadvalini to'liq yoddan bilish ko'nikmasi",
        "example": "Tezkor ko'paytirish barcha matematik hisoblarning poydevoridir."
      }
    ],
    "cloze": {
      "title": "Topshiriq 3: Fabrika Omboridagi Katta Buyurtma",
      "inst": "Ko'paytirish qonunlaridan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Fabrika omborida hisob-kitob qilinmoqda: 425 * 36 ifodaning qiymati {15300} ga teng chiqdi. 1 200 * 400 amali bajarilganda natija {480000} bo'ldi. 25 * (40 + 4) ifodasi taqsimot qonuniga ko'ra oson hisoblanganda uning qiymati {1100} bo'ladi. Bir qutida 48 ta qalam bo'lsa, 150 ta shunday qutida jami {7200} ta qalam bo'ladi. 350 * 20 amali bajarilsa {7000} hosil bo'ladi.",
      "answers": {
        "1": "15300",
        "2": "480000",
        "3": "1100",
        "4": "7200",
        "5": "7000"
      }
    },
    "quiz": [
      {
        "q": "425 * 36 ko'paytma nechaga teng?",
        "opts": [
          "15 300",
          "14 300",
          "15 200"
        ],
        "ans": "15 300"
      },
      {
        "q": "1 200 * 400 ko'paytmaning to'g'ri qiymatini toping:",
        "opts": [
          "480 000",
          "48 000",
          "4 800 000"
        ],
        "ans": "480 000"
      },
      {
        "q": "25 * 78 * 4 ifodani eng qulay usulda hisoblang:",
        "opts": [
          "7 800 (chunki 25*4=100)",
          "6 800",
          "7 200"
        ],
        "ans": "7 800 (chunki 25*4=100)"
      },
      {
        "q": "Bir qutida 50 ta daftar bor. 140 ta qutida nechta daftar bo'ladi?",
        "opts": [
          "7 000",
          "700",
          "70 000"
        ],
        "ans": "7 000"
      },
      {
        "q": "Taqsimot qonunining to'g'ri formulasini tanlang:",
        "opts": [
          "a * (b + c) = a*b + a*c",
          "a * (b + c) = a + b*c",
          "a * (b + c) = a*b + c"
        ],
        "ans": "a * (b + c) = a*b + a*c"
      }
    ],
    "video": {
      "title": "Ko'p Xonali Sonlarni Ustun Usulida Ko'paytirish",
      "desc": "Ikki va uch xonali sonlarga ko'paytirish sirlari va qoidalari:",
      "youtube_id": "0j7kGf78E8E"
    }
  },
  {
    "id": "math-unit-4",
    "num": 4,
    "title": "Ko'p Xonali Sonlarni Bo'lish va Qoldiq",
    "subtitle": "Burchak usulida bo'lish, qoldiqli bo'lish formulasi va noma'lum bo'linuvchi",
    "tag": "Arifmetik Amallar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Ko'p xonali sonlarni bo'lishda</b> burchak usuli (ustunli bo'lish) qo'llaniladi. Agar son qoldiqsiz bo'linmasa, <b>qoldiqli bo'lish</b> formulasi qo'llaniladi: <code>a = b * q + r</code> (bu yerda <i>a</i> — bo'linuvchi, <i>b</i> — bo'luvchi, <i>q</i> — to'liqsiz bo'linma, <i>r</i> — qoldiq). <b>Eng muhim qoida:</b> qoldiq har doim bo'luvchidan kichik bo'lishi shart (<code>r < b</code>). Noma'lum bo'linuvchini topish uchun to'liqsiz bo'linma bo'luvchiga ko'paytirilib, qoldiq qo'shiladi.",
    "tables": [
      {
        "title": "Bo'lish va Qoldiqli Bo'lish Formulalari Jadvali",
        "headers": [
          "Holat",
          "Formula",
          "Namuna Misol",
          "Hisoblash Natijasi"
        ],
        "rows": [
          [
            "Qoldiqsiz bo'lish",
            "a : b = c",
            "15 360 : 24",
            "To'liq bo'linma: 640"
          ],
          [
            "Qoldiqli bo'lish",
            "a = b * q + r (r < b)",
            "148 : 12",
            "q = 12, qoldiq r = 4 (chunki 12*12+4=148)"
          ],
          [
            "Noma'lum bo'linuvchi",
            "x = b * q + r",
            "x : 15 = 8 (qoldiq 7)",
            "x = 15 * 8 + 7 = 120 + 7 = 127"
          ],
          [
            "Nollarni qisqartirish",
            "a00 : b00 = a : b",
            "72 000 : 900",
            "720 : 9 = 80"
          ]
        ]
      }
    ],
    "tip": "<b>Diqqat qiling:</b> Agar qoldiq bo'luvchiga teng yoki undan katta bo'lib qolsa, demak to'liqsiz bo'linma noto'g'ri topilgan! Masalan, 15 ga bo'lganda qoldiq eng ko'pi bilan 14 bo'lishi mumkin!",
    "time_words": "<b>Formulalar:</b> a = b * q + r, r < b, x = b*q + r, Qoldiqsiz bo'lish.",
    "vocab": [
      {
        "num": 1,
        "word": "Bo'linuvchi",
        "uz": "Bo'linadigan son",
        "pos": "ot",
        "synonym": "a soni",
        "meaning": "Bo'lish amalida qismlarga taqsimlanadigan katta son",
        "example": "15 360 : 24 ifodada 15 360 bo'linuvchidir."
      },
      {
        "num": 2,
        "word": "Bo'luvchi",
        "uz": "Bo'ladigan son",
        "pos": "ot",
        "synonym": "b soni",
        "meaning": "Bo'linuvchi necha teng qismga bo'linishini ko'rsatuvchi son",
        "example": "15 360 : 24 misolida 24 bo'luvchi son hisoblanadi."
      },
      {
        "num": 3,
        "word": "To'liqsiz bo'linma",
        "uz": "Qoldiqli natija",
        "pos": "ot",
        "synonym": "q soni",
        "meaning": "Qoldiqli bo'lishda chiqqan butun bo'laklar soni",
        "example": "148 ni 12 ga bo'lganda to'liqsiz bo'linma 12 chiqadi."
      },
      {
        "num": 4,
        "word": "Qoldiq",
        "uz": "Ortib qolgan son",
        "pos": "ot",
        "synonym": "r soni (r < b)",
        "meaning": "Teng bo'linmay ortib qolgan va bo'luvchidan kichik son",
        "example": "148 ni 12 ga bo'lganda qoldiq 4 ga teng bo'ladi."
      },
      {
        "num": 5,
        "word": "Noma'lum bo'linuvchi",
        "uz": "x ni topish",
        "pos": "ot",
        "synonym": "Teskari ko'paytirish",
        "meaning": "x : b = q (qoldiq r) tenglamadan x = b * q + r orqali topiladigan son",
        "example": "x : 15 = 8 (qoldiq 7) bo'lsa, x = 127 bo'ladi."
      },
      {
        "num": 6,
        "word": "Burchak usuli",
        "uz": "Ustunli bo'lish",
        "pos": "ot",
        "synonym": "Katakcha usuli",
        "meaning": "Katta sonlarni qadamma-qadam burchak chizig'i bilan bo'lish",
        "example": "Ikki xonali songa bo'lish burchak usulida qulay bajariladi."
      },
      {
        "num": 7,
        "word": "Nollarni qisqartirish",
        "uz": "Nollarni o'chirish",
        "pos": "fe'l/ot",
        "synonym": "10 ga, 100 ga qisqartirish",
        "meaning": "Bo'linuvchi va bo'luvchidan teng sondagi nollarni o'chirib bo'lish",
        "example": "72 000 : 900 amali 720 : 9 = 80 ga teng."
      },
      {
        "num": 8,
        "word": "Teng taqsimlash",
        "uz": "Bir xil ulashish",
        "pos": "ot",
        "synonym": "Adolatli bo'lish",
        "meaning": "Umumiy miqdorni berilgan odamlar soniga teng bo'lib berish",
        "example": "350 ta daftar 25 o'quvchiga 14 tadan teng tegadi."
      },
      {
        "num": 9,
        "word": "Eng katta qoldiq",
        "uz": "b - 1",
        "pos": "ot",
        "synonym": "Maksimal qoldiq",
        "meaning": "Berilgan bo'luvchidan 1 ga kam bo'lgan eng katta mumkin bo'lgan qoldiq",
        "example": "Songa 12 ga bo'lganda eng katta qoldiq 11 bo'lishi mumkin."
      },
      {
        "num": 10,
        "word": "Tekshirish amali",
        "uz": "b * q + r",
        "pos": "ot",
        "synonym": "Qayta hisob",
        "meaning": "Bo'lish to'g'ri bajarilganini ko'paytirish va qoldiqni qo'shish bilan tekshirish",
        "example": "12 * 12 + 4 = 148 tekshiruvi bo'lish to'g'riligini isbotlaydi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 4: Karvon Mulkini Teng Taqsimlash",
      "inst": "Bo'lish va qoldiqli bo'lish qoidalaridan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Karvonboshi tovarlarni taqsimlamoqda: 15 360 : 24 ifodaning bo'linmasi {640} ga teng bo'ldi. 148 soni 12 ga bo'linsa, to'liqsiz bo'linma 12, qoldiq esa {4} chiqadi. Agar x : 15 = 8 (qoldiq 7) bo'lsa, noma'lum bo'linuvchi x = {127} ga teng. 72 000 : 900 ifodasida ikkita nol qisqartirilsa, natija {80} hosil bo'ladi. 350 ta daftar 25 nafar o'quvchiga teng taqsimlansa, har biriga {14} tadan daftar tegadi.",
      "answers": {
        "1": "640",
        "2": "4",
        "3": "127",
        "4": "80",
        "5": "14"
      }
    },
    "quiz": [
      {
        "q": "15 360 : 24 ifodaning to'g'ri qiymatini toping:",
        "opts": [
          "640",
          "64",
          "604"
        ],
        "ans": "640"
      },
      {
        "q": "148 ni 12 ga bo'lgandagi qoldiq nechaga teng?",
        "opts": [
          "4",
          "8",
          "2"
        ],
        "ans": "4"
      },
      {
        "q": "x : 15 = 8 (qoldiq 7) bo'lsa, x nechaga teng?",
        "opts": [
          "127",
          "120",
          "113"
        ],
        "ans": "127"
      },
      {
        "q": "Sonni 9 ga bo'lganda eng katta mumkin bo'lgan qoldiq nechaga teng?",
        "opts": [
          "8",
          "9",
          "10"
        ],
        "ans": "8"
      },
      {
        "q": "72 000 : 900 amali natijasi nechaga teng?",
        "opts": [
          "80",
          "800",
          "8"
        ],
        "ans": "80"
      }
    ],
    "video": {
      "title": "Ko'p Xonali Sonlarni Burchak Usulida Bo'lish va Qoldiq",
      "desc": "Ko'p xonali sonlarni ikki xonali songa bo'lish va qoldiqni topish:",
      "youtube_id": "vMhA5-x_H5M"
    }
  },
  {
    "id": "math-unit-5",
    "num": 5,
    "title": "Amallar Tartibi va Qavsli Murakkab Ifodalar",
    "subtitle": "PEMDAS qoidalari, 4-5 amalli ifodalar va murakkab tenglamalar",
    "tag": "Arifmetik Amallar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Amallar tartibi (PEMDAS qoidasi)</b> bo'yicha matematik ifodalarda birinchi bo'lib <b>qavs ichidagi amallar</b> bajariladi. So'ngra <b>ko'paytirish va bo'lish</b> chapdan o'ngga qarab bajariladi. Eng oxirida <b>qo'shish va ayirish</b> amallari navbati bilan bajariladi. Qavsli murakkab tenglamalarni yechishda qavs bitta noma'lum butun deb qaraladi va tashqi amaldan boshlab ketma-ket yechiladi.",
    "tables": [
      {
        "title": "Amallar Bajarilishining 4 Oltin Qoidasi",
        "headers": [
          "Bosqich Tartibi",
          "Bajariladigan Amal",
          "Namuna Ifoda",
          "Oraliq Hisoblash"
        ],
        "rows": [
          [
            "1-bosqich",
            "Qavs ichidagi barcha amallar",
            "500 - (150 + 50 * 4) : 7",
            "Qavs ichi: 50 * 4 = 200; 150 + 200 = 350"
          ],
          [
            "2-bosqich",
            "Bo'lish va Ko'paytirish (chapdan)",
            "500 - 350 : 7",
            "350 : 7 = 50"
          ],
          [
            "3-bosqich",
            "Qo'shish va Ayirish (yakuniy)",
            "500 - 50",
            "Natija = 450"
          ],
          [
            "Murakkab tenglama",
            "(x + 60) : 4 = 45",
            "x + 60 = 45 * 4 = 180",
            "x = 180 - 60 = 120"
          ]
        ]
      }
    ],
    "tip": "<b>Prezident maktabi testi siri:</b> <code>(x + a) : b = c</code> ko'rinishidagi tenglamada avval <code>(x + a) = c * b</code> qilib bo'lishni yo'qoting, so'ngra <code>x = c * b - a</code> qilib javobni darhol toping!",
    "time_words": "<b>Tartib:</b> 1. Qavs -> 2. Ko'paytirish/Bo'lish -> 3. Qo'shish/Ayirish.",
    "vocab": [
      {
        "num": 1,
        "word": "Qavslar",
        "uz": "Birinchi navbat belgisi",
        "pos": "ot",
        "synonym": "Guruhlash belgisi ()",
        "meaning": "Ichidagi amal birinchi navbatda bajarilishi shart bo'lgan belgi",
        "example": "(150 + 50 * 4) ifodada avval qavs ichi hisoblanadi."
      },
      {
        "num": 2,
        "word": "Amallar tartibi",
        "uz": "Ketma-ketlik qoidasi",
        "pos": "ot",
        "synonym": "Prioritet",
        "meaning": "Matematikada amallarni qat'iy belgilangan tartibda bajarish tartibi",
        "example": "Amallar tartibiga rioya qilish to'g'ri natijaning kafolatidir."
      },
      {
        "num": 3,
        "word": "Murakkab tenglama",
        "uz": "Ko'p amalli tenglama",
        "pos": "ot",
        "synonym": "Qavsli tenglama",
        "meaning": "Tarkibida qavs va bir nechta arifmetik amal qatnashgan tenglama",
        "example": "(x + 60) : 4 = 45 murakkab tenglamaning ildizi 120 ga teng."
      },
      {
        "num": 4,
        "word": "Ifoda qiymati",
        "uz": "Yakuniy javob",
        "pos": "ot",
        "synonym": "Natija",
        "meaning": "Barcha amallar to'g'ri bajarilgach hosil bo'ladigan yakuniy son",
        "example": "500 - (150 + 50 * 4) : 7 ifodaning qiymati 450 ga teng."
      },
      {
        "num": 5,
        "word": "Chapdan o'ngga",
        "uz": "Yo'nalish qoidasi",
        "pos": "ot",
        "synonym": "Navbat bo'yicha",
        "meaning": "Bir xil kuchga ega amallar (ko'paytirish/bo'lish) chapdan boshlab bajarilishi",
        "example": "240 : 8 * 2 ifodada avval 240 : 8 bo'linadi."
      },
      {
        "num": 6,
        "word": "Tenglama ildizi",
        "uz": "Noma'lum x qiymati",
        "pos": "ot",
        "synonym": "Yechim",
        "meaning": "Tenglamadagi noma'lum harf o'rniga qo'yganda tenglikni to'g'ri qiluvchi son",
        "example": "400 - 3 * x = 250 tenglamaning ildizi 50 ga teng."
      },
      {
        "num": 7,
        "word": "Soddalashtirish",
        "uz": "Osonlashtirish",
        "pos": "fe'l/ot",
        "synonym": "Yengillashtirish",
        "meaning": "Amallarni ketma-ket bajarib ifodani qisqaroq ko'rinishga keltirish",
        "example": "Qavs ichidagi amallarni bajarib ifodani soddalashtiramiz."
      },
      {
        "num": 8,
        "word": "Noma'lum qavs",
        "uz": "Yaxlit bo'lak",
        "pos": "ot",
        "synonym": "Blok",
        "meaning": "Tenglamada qavs ichidagi noma'lumni bitta son deb hisoblab yechish",
        "example": "(x + 60) bo'lagi 180 ga teng deb olinadi."
      },
      {
        "num": 9,
        "word": "Arifmetik ifoda",
        "uz": "Sonli yozuv",
        "pos": "ot",
        "synonym": "Misol",
        "meaning": "Sonlar va amallar belgilaridan tuzilgan matematik yozuv",
        "example": "240 : (12 - 4) + 60 * 2 arifmetik ifodadir."
      },
      {
        "num": 10,
        "word": "Algoritmik qadam",
        "uz": "Bosqichma-bosqich",
        "pos": "ot",
        "synonym": "Rejali hisoblash",
        "meaning": "Har bir amalni qat'iy reja bo'yicha ketma-ket bajarish usuli",
        "example": "Olimpiada masalalari algoritmik qadamlar bilan xatosiz yechiladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 5: Sehrli Laboratoriyaning Qavsli Formulalari",
      "inst": "Amallar tartibiga qat'iy rioya qilib bo'sh joylarni to'ldiring:",
      "text": "Professor Al-Xorazmiy laboratoriyasida tajriba hisoblanmoqda: 500 - (150 + 50 * 4) : 7 ifodada qavs ichi 350, so'ng bo'linma 50 bo'lib, yakuniy qiymat {450} chiqadi. (x + 60) : 4 = 45 tenglamada x + 60 = 180 bo'lib, noma'lum x = {120} bo'ladi. 240 : (12 - 4) + 60 * 2 ifodada avval qavs (8), so'ng bo'linma (30) va ko'paytma (120) qo'shilib, natija {150} bo'ladi. (85 - 35) * (14 + 16) ifodaning qiymati {1500} ga teng. 400 - 3 * x = 250 tenglamada 3 * x = 150 bo'lib, x = {50} chiqadi.",
      "answers": {
        "1": "450",
        "2": "120",
        "3": "150",
        "4": "1500",
        "5": "50"
      }
    },
    "quiz": [
      {
        "q": "500 - (150 + 50 * 4) : 7 ifodaning qiymati nechaga teng?",
        "opts": [
          "450",
          "50",
          "350"
        ],
        "ans": "450"
      },
      {
        "q": "(x + 60) : 4 = 45 tenglamada x nechaga teng?",
        "opts": [
          "120",
          "180",
          "60"
        ],
        "ans": "120"
      },
      {
        "q": "240 : (12 - 4) + 60 * 2 ifodaning qiymatini toping:",
        "opts": [
          "150",
          "180",
          "120"
        ],
        "ans": "150"
      },
      {
        "q": "Qaysi amal birinchi bajariladi: 80 - 20 : 4 + 5 * 6?",
        "opts": [
          "Bo'lish (20 : 4)",
          "Ayirish (80 - 20)",
          "Qo'shish"
        ],
        "ans": "Bo'lish (20 : 4)"
      },
      {
        "q": "400 - 3 * x = 250 tenglamaning ildizini toping:",
        "opts": [
          "50",
          "150",
          "100"
        ],
        "ans": "50"
      }
    ],
    "video": {
      "title": "Amallar Bajarilish Tartibi (Qavsli va Qavssiz Murakkab Ifodalar)",
      "desc": "Amallar tartibi (PEMDAS), qavslar va murakkab tenglamalarni yechish:",
      "youtube_id": "uWzP0u5c93s"
    }
  },
  {
    "id": "math-unit-6",
    "num": 6,
    "title": "Oddiy Kasrlar va Ular Ustida Amallar",
    "subtitle": "Kasrlarni qo'shish va ayirish, 1 dan ayirish, sonning kasri va kasriga ko'ra son",
    "tag": "Kasrlar & Arifmetika • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Kasr</b> butun narsaning bir yoki bir nechta teng ulushini ifodalaydi. Kasr chizig'i ustidagi son <b>surat</b> (olingan qismlar), chizig'i ostidagi son <b>maxraj</b> (butun nechta teng qismga bo'lingani) deyiladi.<br><br><b>4-Sinf Asosiy Qoidalari:</b><br>1. <b>Bir xil maxrajli kasrlarni qo'shish va ayirish:</b> Maxraj o'zgarmaydi, faqat suratlar qo'shiladi yoki ayriladi: <code>a/m + b/m = (a+b)/m</code> va <code>a/m - b/m = (a-b)/m</code>.<br>2. <b>Butun sondan kasrni ayirish:</b> 1 butunni maxraj bilan bir xil kasr deb olamiz (masalan, <code>1 = 7/7</code>), shunda <code>1 - 3/7 = 7/7 - 3/7 = 4/7</code>.<br>3. <b>Sonning kasr qismini topish:</b> Sonni maxrajga bo'lib, suratga ko'paytiramiz: <code>(A : n) * m</code>.<br>4. <b>Kasriga ko'ra sonning o'zini topish:</b> Sonni suratga bo'lib, maxrajga ko'paytiramiz: <code>(B : m) * n</code>.",
    "tables": [
      {
        "title": "Kasrlar Ustida 4 Oltin Qoida Jadvali",
        "headers": [
          "Amal Turi",
          "Formula",
          "Namuna Misol",
          "Hisoblash Natijasi"
        ],
        "rows": [
          [
            "Bir xil maxrajli qo'shish",
            "a/m + b/m = (a+b)/m",
            "5/14 + 4/14",
            "(5+4)/14 = 9/14"
          ],
          [
            "Bir xil maxrajli ayirish",
            "a/m - b/m = (a-b)/m",
            "9/13 - 4/13",
            "(9-4)/13 = 5/13"
          ],
          [
            "1 butundan ayirish",
            "1 - a/b = (b-a)/b",
            "1 - 7/12",
            "12/12 - 7/12 = 5/12"
          ],
          [
            "Sonning kasrini topish",
            "(A : n) * m",
            "240 ning 5/8 qismi",
            "(240 : 8) * 5 = 30 * 5 = 150"
          ],
          [
            "Kasriga ko'ra sonni topish",
            "(B : m) * n",
            "3/7 qismi 21 bo'lgan son",
            "(21 : 3) * 7 = 7 * 7 = 49"
          ]
        ]
      },
      {
        "title": "Kasrlarni Taqqoslash Qoidalari",
        "headers": [
          "Taqqoslash Holati",
          "Qoida",
          "Misol",
          "Xulosa"
        ],
        "rows": [
          [
            "Maxrajlari bir xil",
            "Surati katta bo'lgan kasr katta",
            "5/8 va 3/8",
            "5/8 > 3/8 (chunki 5 > 3)"
          ],
          [
            "Suratlari bir xil",
            "Maxraji KICHIK bo'lgan kasr KATTA",
            "3/4 va 3/8",
            "3/4 > 3/8 (4 ga bo'lingan bo'lak 8 ga bo'lingandan katta!)"
          ],
          [
            "1 butun bilan taqqoslash",
            "To'g'ri kasr < 1; Noto'g'ri kasr >= 1",
            "7/9 va 9/7",
            "7/9 < 1, lekin 9/7 > 1"
          ]
        ]
      }
    ],
    "tip": "<b>Oltin Maslahat:</b> Sonning kasrini topganda <i>(A : Maxraj) * Surat</i> qilinadi. Aksincha, berilgan qiymatiga ko'ra sonning o'zini topganda <i>(Qiymat : Surat) * Maxraj</i> qilinadi!",
    "time_words": "<b>Formulalar:</b> a/m + b/m = (a+b)/m, 1 - a/b = (b-a)/b, (A : n)*m, (B : m)*n, To'g'ri/Noto'g'ri kasr.",
    "vocab": [
      {
        "num": 1,
        "word": "Kasr surati",
        "uz": "Kasr tepasidagi son",
        "pos": "ot",
        "synonym": "Numerator",
        "meaning": "Butundan nechta teng ulush olinganini ko'rsatuvchi son",
        "example": "5/14 kasrida 5 surati bo'lib, olingan ulushlar sonini bildiradi."
      },
      {
        "num": 2,
        "word": "Kasr maxraji",
        "uz": "Kasr ostidagi son",
        "pos": "ot",
        "synonym": "Denominator",
        "meaning": "Butun narsa nechta teng bo'lakka bo'linganini ko'rsatuvchi son",
        "example": "5/14 kasrida 14 maxraji bo'lib, teng bo'laklar sonini bildiradi."
      },
      {
        "num": 3,
        "word": "To'g'ri kasr",
        "uz": "1 dan kichik kasr",
        "pos": "ot",
        "synonym": "Surati kichik kasr",
        "meaning": "Surati maxrajidan kichik bo'lgan va qiymati 1 dan kichik kasr",
        "example": "7/12 to'g'ri kasrdir, chunki 7 < 12."
      },
      {
        "num": 4,
        "word": "Noto'g'ri kasr",
        "uz": "1 ga teng yoki katta kasr",
        "pos": "ot",
        "synonym": "Katta kasr",
        "meaning": "Surati maxrajiga teng yoki maxrajidan katta bo'lgan kasr",
        "example": "8/5 va 14/14 noto'g'ri kasrlarga misoldir."
      },
      {
        "num": 5,
        "word": "Aralash son",
        "uz": "Butun va kasrli son",
        "pos": "ot",
        "synonym": "c a/b",
        "meaning": "Butun son va to'g'ri kasr yig'indisidan iborat son (masalan, 2 butun 1/3)",
        "example": "7/3 noto'g'ri kasr 2 butun 1/3 aralash soniga teng."
      },
      {
        "num": 6,
        "word": "Bir butun",
        "uz": "To'liq butunlik",
        "pos": "ot",
        "synonym": "1 = n/n",
        "meaning": "Butun narsaning barcha qismlari olingan holat (masalan, 1 = 8/8)",
        "example": "1 dan 7/12 ni ayirganda 1 ni 12/12 deb olamiz."
      },
      {
        "num": 7,
        "word": "Sonning kasri",
        "uz": "Bo'lagini topish",
        "pos": "ot",
        "synonym": "(A : n) * m",
        "meaning": "Sonni maxrajiga bo'lib, suratiga ko'paytirish orqali topiladigan miqdor",
        "example": "240 ning 5/8 qismi 150 ga teng bo'ladi."
      },
      {
        "num": 8,
        "word": "Kasriga ko'ra son",
        "uz": "Butunini topish",
        "pos": "ot",
        "synonym": "(B : m) * n",
        "meaning": "Ma'lum qismiga ko'ra butun sonning o'zini hisoblash usuli",
        "example": "3/7 qismi 21 bo'lgan son 49 ga teng."
      },
      {
        "num": 9,
        "word": "Kasrlarni taqqoslash",
        "uz": "Kattasini tanlash",
        "pos": "fe'l/ot",
        "synonym": "Solishtirish",
        "meaning": "Kasrlarning kattalik munosabatini surat va maxraj qoidasiga ko'ra aniqlash",
        "example": "Maxraji bir xil bo'lsa 5/8 > 3/8; surati bir xil bo'lsa 3/4 > 3/8 bo'ladi."
      },
      {
        "num": 10,
        "word": "Kasrlar yig'indisi",
        "uz": "Qo'shish natijasi",
        "pos": "ot",
        "synonym": "Umumiy kasr",
        "meaning": "Bir xil maxrajli kasrlarning suratlarini qo'shish natijasi",
        "example": "5/14 + 4/14 yig'indisi 9/14 ga teng."
      }
    ],
    "cloze": {
      "title": "Topshiriq 6: Benny va Alisherning Kasrlar Akademiyasi",
      "inst": "Kasrlar ustida amallarni hisoblab bo'sh joylarni to'ldiring:",
      "text": "Benny va Alisher kasrlar ustida murakkab masalalarni yechmoqda: 5/14 + 4/14 kasrlar yig'indisi {9/14} ga teng bo'ldi. 1 butun qog'ozdan 7/12 qismi qirqib olingach, qog'ozning {5/12} qismi qoldi. Sehrli bog'dagi 240 kg mevaning 5/8 qismi saralandi, ya'ni {150} kg meva ajratildi. Agar noma'lum sonning 3/7 qismi 21 ga teng bo'lsa, butun sonning o'zi {49} bo'ladi. Do'konga keltirilgan 400 kg mevaning 2/5 qismi olma, 1/5 qismi nok bo'lsa, qolgan mevalar miqdori {160} kg dir.",
      "answers": {
        "1": "9/14",
        "2": "5/12",
        "3": "150",
        "4": "49",
        "5": "160"
      }
    },
    "quiz": [
      {
        "q": "7/15 + 4/15 kasrlar yig'indisi nechaga teng?",
        "opts": [
          "11/15",
          "11/30",
          "3/15"
        ],
        "ans": "11/15"
      },
      {
        "q": "1 - 3/8 ayirmani hisoblang:",
        "opts": [
          "5/8",
          "2/8",
          "4/8"
        ],
        "ans": "5/8"
      },
      {
        "q": "180 sonining 2/3 qismi nechaga teng?",
        "opts": [
          "120",
          "60",
          "90"
        ],
        "ans": "120"
      },
      {
        "q": "3/5 qismi 45 bo'lgan sonni toping:",
        "opts": [
          "75",
          "27",
          "135"
        ],
        "ans": "75"
      },
      {
        "q": "Qaysi kasr katta: 4/7 mi yoki 4/9 mi?",
        "opts": [
          "4/7",
          "4/9",
          "Ular teng"
        ],
        "ans": "4/7"
      }
    ],
    "video": {
      "title": "Oddiy Kasrlar va Ular Ustida Amallar (4-Sinf Masterclass)",
      "desc": "Kasrlar, bir xil maxrajli kasrlarni qo'shish va ayirish, sonning kasrini topish darsi:",
      "youtube_id": "Vn2c9aX1s0k"
    }
  },
  {
    "id": "math-unit-7",
    "num": 7,
    "title": "Kattaliklar va O'lchov Birliklari",
    "subtitle": "Uzunlik, massa, vaqt va sig'im birliklarini murakkab aylantirish",
    "tag": "O'lchovlar va Kattaliklar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Kattaliklar</b> atrofimizdagi narsalarning uzunligi, og'irligi (massasi), vaqti va hajmini aniq o'lchash uchun xizmat qiladi. 4-sinfda bir nechta xil birliklardan iborat murakkab kattaliklarni eng kichik yoki yirik birlikka aylantirish o'rganiladi.<br><br><b>Asosiy o'lchov formulalari:</b><br>• 1 t = 10 s = 1 000 kg; 1 sentner (s) = 100 kg; 1 kg = 1 000 g.<br>• 1 km = 1 000 m; 1 m = 10 dm = 100 cm = 1 000 mm.<br>• 1 sutka = 24 soat; 1 soat = 60 min; 1 min = 60 sek.<br>• 1 litr = 1 000 ml.",
    "tables": [
      {
        "title": "Murakkab Kattaliklarni Maydalash va Yiriklashtirish",
        "headers": [
          "Kattalik Turi",
          "Murakkab Ko'rinishi",
          "Aylantirish Qoidasi",
          "Yakuniy Birlikdagi Qiymati"
        ],
        "rows": [
          [
            "Massa (kg)",
            "4 t 6 sentner 80 kg",
            "4 000 kg + 600 kg + 80 kg",
            "4 680 kg"
          ],
          [
            "Uzunlik (m)",
            "3 km 45 m",
            "3 000 m + 45 m",
            "3 045 m"
          ],
          [
            "Vaqt (min)",
            "5 soat 25 minut",
            "5 * 60 min + 25 min",
            "325 minut"
          ],
          [
            "Sig'im (ml)",
            "3 litr 450 ml",
            "3 * 1 000 ml + 450 ml",
            "3 450 ml"
          ],
          [
            "Sutka va soat",
            "2 sutka 14 soat",
            "2 * 24 soat + 14 soat",
            "62 soat"
          ]
        ]
      }
    ],
    "tip": "<b>Esda saqlang!</b> 1 tonna 1 000 kg ga, 1 sentner esa 100 kg ga teng. Demak, 1 tonna ichida roppa-rosa 10 ta sentner bor!",
    "time_words": "<b>Birliklar:</b> km, m, dm, cm, mm; t, sentner, kg, g; sutka, soat, min, sek; litr, ml.",
    "vocab": [
      {
        "num": 1,
        "word": "Tonna",
        "uz": "1 000 kg",
        "pos": "ot",
        "synonym": "t",
        "meaning": "Og'ir yuklar va hosilni o'lchash uchun ishlatiladigan eng katta massa birligi",
        "example": "4 tonna 4 000 kg ga teng bo'ladi."
      },
      {
        "num": 2,
        "word": "Sentner",
        "uz": "100 kg",
        "pos": "ot",
        "synonym": "s",
        "meaning": "Qishloq xo'jaligi hosilini o'lchashda ishlatiladigan 100 kg lik birlik",
        "example": "6 sentner 600 kg ga teng."
      },
      {
        "num": 3,
        "word": "Kilometr",
        "uz": "1 000 m",
        "pos": "ot",
        "synonym": "km",
        "meaning": "Shaharlararo uzoq masofalarni o'lchovchi uzunlik birligi",
        "example": "3 km 45 m masofa 3 045 metrni tashkil qiladi."
      },
      {
        "num": 4,
        "word": "Millimetr",
        "uz": "1/10 cm",
        "pos": "ot",
        "synonym": "mm",
        "meaning": "Juda kichik detallar va qog'oz qalinligini o'lchovchi birlik",
        "example": "1 santimetrda 10 millimetr bor."
      },
      {
        "num": 5,
        "word": "Sutka",
        "uz": "24 soat",
        "pos": "ot",
        "synonym": "Bir kecha-kunduz",
        "meaning": "Yerning o'z o'qi atrofida bir marta to'liq aylanish vaqti (24 soat)",
        "example": "2 sutka 14 soat jami 62 soatga teng."
      },
      {
        "num": 6,
        "word": "Minut",
        "uz": "60 sekund",
        "pos": "ot",
        "synonym": "Daqiqa",
        "meaning": "Vaqtning 60 sekundga teng bo'lgan o'lchovi",
        "example": "5 soat 25 minut jami 325 minut bo'ladi."
      },
      {
        "num": 7,
        "word": "Litr",
        "uz": "1 000 ml",
        "pos": "ot",
        "synonym": "l",
        "meaning": "Suyuqliklar va sig'imni o'lchashning asosiy birligi",
        "example": "3 litr 450 ml sharbat 3 450 millilitrga teng."
      },
      {
        "num": 8,
        "word": "Millilitr",
        "uz": "1/1000 litr",
        "pos": "ot",
        "synonym": "ml",
        "meaning": "Dorilar va mayda suyuqliklarni o'lchovchi kichik hajm birligi",
        "example": "1 litr suv 1 000 millilitrga teng."
      },
      {
        "num": 9,
        "word": "Maydalash",
        "uz": "Kichik birlikka o'tish",
        "pos": "fe'l/ot",
        "synonym": "Ko'paytirish usuli",
        "meaning": "Kattalikni kichikroq o'lchov birligiga ko'paytirib aylantirish",
        "example": "Tonnalarni kilogrammga o'tkazishda 1000 ga ko'paytiriladi."
      },
      {
        "num": 10,
        "word": "Yiriklashtirish",
        "uz": "Katta birlikka o'tish",
        "pos": "fe'l/ot",
        "synonym": "Bo'lish usuli",
        "meaning": "Kichik birlikni bo'lish orqali kattaroq birlikka keltirish",
        "example": "3 000 metrni kilometrga yiriklashtirsak 3 km bo'ladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 7: Chimyon Ekspeditsiyasi Logistikasi",
      "inst": "O'lchov birliklarini to'g'ri aylantirib bo'sh joylarni to'ldiring:",
      "text": "Ekspeditsiya yuklari tahlil qilinmoqda: 4 t 6 sentner 80 kg yuk jami {4680} kg ni tashkil etdi. Tog' etagigacha bo'lgan 3 km 45 m masofa {3045} metrga teng. Safarda o'tkazilgan 5 soat 25 minut vaqt jami {325} minut bo'ldi. Daryodan olingan 3 litr 450 ml toza suv {3450} ml hajmga ega. Qutqaruvchilarning 2 sutka 14 soatlik xizmati jami {62} soatni tashkil qildi.",
      "answers": {
        "1": "4680",
        "2": "3045",
        "3": "325",
        "4": "3450",
        "5": "62"
      }
    },
    "quiz": [
      {
        "q": "4 t 6 sentner 80 kg necha kilogramm bo'ladi?",
        "opts": [
          "4 680 kg",
          "4 608 kg",
          "4 068 kg"
        ],
        "ans": "4 680 kg"
      },
      {
        "q": "3 km 45 metr necha metrga teng?",
        "opts": [
          "3 045 m",
          "3 450 m",
          "345 m"
        ],
        "ans": "3 045 m"
      },
      {
        "q": "5 soat 25 minut necha minut bo'ladi?",
        "opts": [
          "325 minut",
          "525 minut",
          "300 minut"
        ],
        "ans": "325 minut"
      },
      {
        "q": "3 litr 450 ml necha millilitr?",
        "opts": [
          "3 450 ml",
          "345 ml",
          "3 045 ml"
        ],
        "ans": "3 450 ml"
      },
      {
        "q": "2 sutka 14 soat jami necha soat bo'ladi?",
        "opts": [
          "62 soat",
          "48 soat",
          "38 soat"
        ],
        "ans": "62 soat"
      }
    ],
    "video": {
      "title": "Kattaliklar va O'lchov Birliklari (Aylantirish Qoidalari)",
      "desc": "Uzunlik, og'irlik, vaqt va hajm o'lchov birliklarini o'zaro aylantirish:",
      "youtube_id": "7Lp5gP1K1r8"
    }
  },
  {
    "id": "math-unit-8",
    "num": 8,
    "title": "Geometrik Shakllar, Burchaklar va Gradus O'lchovi",
    "subtitle": "Burchak turlari (to'g'ri, o'tkir, o'tmas, yoyiq) va uchburchak burchaklari yig'indisi",
    "tag": "Geometriya • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Burchak</b> bir nuqtadan (uchidan) chiquvchi ikkita nurdan (tomonlaridan) hosil bo'ladi. Burchaklar <b>gradus</b> (°) bilan o'lchanadi.<br><br><b>Burchak turlari:</b><br>• <b>To'g'ri burchak:</b> roppa-rosa 90° ga teng.<br>• <b>O'tkir burchak:</b> 0° dan katta va 90° dan kichik burchak (masalan, 45°, 60°).<br>• <b>O'tmas burchak:</b> 90° dan katta va 180° dan kichik burchak (masalan, 120°, 135°).<br>• <b>Yoyiq burchak:</b> roppa-rosa 180° ga teng (to'g'ri chiziq).<br><br><b>Muhim qoida:</b> Har qanday uchburchakning ichki burchaklari yig'indisi har doim <b>180°</b> ga teng!",
    "tables": [
      {
        "title": "Burchaklar Turlari va Gradus O'lchovlari Jadvali",
        "headers": [
          "Burchak Nomi",
          "Gradus Qiymati",
          "Tavsifi",
          "Misol"
        ],
        "rows": [
          [
            "To'g'ri burchak",
            "90°",
            "Kvadrat va to'g'ri to'rtburchak burchagi",
            "Xona burchagi (90°)"
          ],
          [
            "O'tkir burchak",
            "< 90° (0° dan 90° gacha)",
            "To'g'ri burchakdan kichik burchak",
            "45° yoki 60°"
          ],
          [
            "O'tmas burchak",
            "> 90° va < 180°",
            "To'g'ri burchakdan katta burchak",
            "120° yoki 135°"
          ],
          [
            "Yoyiq burchak",
            "180°",
            "Tomonlari qarama-qarshi nurlar",
            "Tekis to'g'ri chiziq (180°)"
          ],
          [
            "Uchburchak yig'indisi",
            "A + B + C = 180°",
            "Uchburchak burchaklari yig'indisi",
            "50° + 60° + 70° = 180°"
          ]
        ]
      }
    ],
    "tip": "<b>Olimpiada qoidasi:</b> Uchburchakning ikkita burchagi ma'lum bo'lsa, uchinchi burchakni topish uchun 180° dan shu ikki burchak yig'indisi ayriladi: <code>C = 180° - (A + B)</code>!",
    "time_words": "<b>Burchaklar:</b> To'g'ri (90°), Yoyiq (180°), O'tkir (<90°), O'tmas (>90°), Uchburchak (180°).",
    "vocab": [
      {
        "num": 1,
        "word": "To'g'ri burchak",
        "uz": "90 gradus",
        "pos": "ot",
        "synonym": "Tik burchak",
        "meaning": "Roppa-rosa 90 gradusga teng bo'lgan kvadrat burchagi",
        "example": "Har qanday to'g'ri to'rtburchak 4 ta to'g'ri burchakka ega."
      },
      {
        "num": 2,
        "word": "O'tkir burchak",
        "uz": "90 dan kichik",
        "pos": "ot",
        "synonym": "Tor burchak",
        "meaning": "0 gradusdan katta va 90 gradusdan kichik bo'lgan burchak",
        "example": "45 gradusli burchak o'tkir burchak hisoblanadi."
      },
      {
        "num": 3,
        "word": "O'tmas burchak",
        "uz": "90 dan katta",
        "pos": "ot",
        "synonym": "Keng burchak",
        "meaning": "90 gradusdan katta va 180 gradusdan kichik bo'lgan burchak",
        "example": "135 gradusli burchak o'tmas burchak deb ataladi."
      },
      {
        "num": 4,
        "word": "Yoyiq burchak",
        "uz": "180 gradus",
        "pos": "ot",
        "synonym": "Yoyilgan chiziq",
        "meaning": "Roppa-rosa 180 gradusga teng bo'lgan tekis chiziqli burchak",
        "example": "Ikkita to'g'ri burchak yig'indisi yoyiq burchakni beradi."
      },
      {
        "num": 5,
        "word": "Gradus",
        "uz": "Burchak birligi (°)",
        "pos": "ot",
        "synonym": "Burchak darajasi",
        "meaning": "Burchak kattaligini o'lchash uchun xalqaro o'lchov birligi",
        "example": "Uchburchak ichki burchaklari yig'indisi 180 gradusga teng."
      },
      {
        "num": 6,
        "word": "Transportir",
        "uz": "Burchak o'lchagich",
        "pos": "ot",
        "synonym": "Gradus chizg'ichi",
        "meaning": "Burchaklarni chizish va gradusini o'lchash asbobi",
        "example": "Transportir yordamida 70 gradusli burchak chizildi."
      },
      {
        "num": 7,
        "word": "Uchburchak",
        "uz": "3 burchakli shakl",
        "pos": "ot",
        "synonym": "Trigon",
        "meaning": "Uchta burchak va uchta tomondan iborat geometrik shakl",
        "example": "Teng tomonli uchburchakning barcha burchaklari 60 gradusdan bo'ladi."
      },
      {
        "num": 8,
        "word": "To'rtburchak",
        "uz": "4 burchakli shakl",
        "pos": "ot",
        "synonym": "Kvadrat / Romb",
        "meaning": "To'rtta tomon va to'rtta burchakdan iborat geometrik shakl",
        "example": "To'rtburchak ichki burchaklari yig'indisi 360 gradusga teng."
      },
      {
        "num": 9,
        "word": "Vertikal burchaklar",
        "uz": "Qarama-qarshi burchaklar",
        "pos": "ot",
        "synonym": "Teng burchaklar",
        "meaning": "Ikki to'g'ri chiziq kesishganda qarama-qarshi hosil bo'ladigan teng burchaklar",
        "example": "Vertikal burchaklar o'zaro teng bo'ladi."
      },
      {
        "num": 10,
        "word": "Burchak uchi",
        "uz": "Birlashish nuqtasi",
        "pos": "ot",
        "synonym": "Tepa nuqta",
        "meaning": "Burchak tomonlari (nurlar) boshlanadigan umumiy nuqta",
        "example": "Burchak uchida gradus o'lchovi belgilanadi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 8: Me'moriy Minora Chizmasi",
      "inst": "Geometriya va burchaklar qoidalaridan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Registon minorasi loyihasida geometrik burchaklar chizilmoqda: To'g'ri burchakning gradus o'lchovi roppa-rosa {90} gradusga teng. Yoyiq burchak esa {180} gradus bo'ladi. Chizmadagi uchburchakning ikki burchagi 50 va 60 gradus bo'lsa, uning uchinchi burchagi {70} gradus chiqadi. 45 gradusli burchak {o'tkir} burchak deb ataladi. 135 gradusli burchak esa {o'tmas} burchak hisoblanadi.",
      "answers": {
        "1": "90",
        "2": "180",
        "3": "70",
        "4": "o'tkir",
        "5": "o'tmas"
      }
    },
    "quiz": [
      {
        "q": "To'g'ri burchakning gradus o'lchovi nechaga teng?",
        "opts": [
          "90°",
          "180°",
          "45°"
        ],
        "ans": "90°"
      },
      {
        "q": "Yoyiq burchak necha gradus bo'ladi?",
        "opts": [
          "180°",
          "90°",
          "360°"
        ],
        "ans": "180°"
      },
      {
        "q": "Uchburchakning ikki burchagi 50° va 60° bo'lsa, uchinchi burchagi necha gradus?",
        "opts": [
          "70°",
          "80°",
          "90°"
        ],
        "ans": "70°"
      },
      {
        "q": "120 gradusli burchak qaysi burchak turiga kiradi?",
        "opts": [
          "O'tmas burchak",
          "O'tkir burchak",
          "To'g'ri burchak"
        ],
        "ans": "O'tmas burchak"
      },
      {
        "q": "Uchburchakning barcha ichki burchaklari yig'indisi nechaga teng?",
        "opts": [
          "180°",
          "360°",
          "90°"
        ],
        "ans": "180°"
      }
    ],
    "video": {
      "title": "Geometrik Shakllar, Burchaklar va Ularning Gradus O'lchovi",
      "desc": "O'tkir, to'g'ri, o'tmas va yoyiq burchaklar hamda ko'pburchaklar:",
      "youtube_id": "X0WjQd6V3fM"
    }
  },
  {
    "id": "math-unit-9",
    "num": 9,
    "title": "Perimetr va Yuza Hisoblash",
    "subtitle": "Kvadrat va to'g'ri to'rtburchakning perimetri, yuzi va teskari masalalar",
    "tag": "Geometriya & O'lchovlar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Perimetr (P)</b> — ko'pburchakning barcha tomonlari uzunliklari yig'indisidir.<br>• Kvadrat perimetri: <code>P = 4 * a</code> (tomoni <code>a = P : 4</code>).<br>• To'g'ri to'rtburchak perimetri: <code>P = 2 * (a + b)</code>.<br><br><b>Yuza (S)</b> — shakl tekislikda egallagan maydon kattaligidir (kvadrat birliklarda: cm², m²).<br>• Kvadrat yuzi: <code>S = a * a</code>.<br>• To'g'ri to'rtburchak yuzi: <code>S = a * b</code> (eni <code>b = S : a</code>).<br><br><b>Teskari masala:</b> Agar kvadratning perimetri ma'lum bo'lsa (masalan 48 cm), avval uning tomoni topiladi (<code>48 : 4 = 12 cm</code>), so'ngra uning yuzi hisoblanadi (<code>12 * 12 = 144 cm²</code>)!",
    "tables": [
      {
        "title": "Perimetr va Yuza Formulalari hamda Teskari Masalalar",
        "headers": [
          "Shakl Turi",
          "Perimetr Formulasi",
          "Yuza Formulasi",
          "Teskari Masala Namunasi"
        ],
        "rows": [
          [
            "Kvadrat",
            "P = 4 * a",
            "S = a * a",
            "P = 48 cm -> a = 48 : 4 = 12 cm -> S = 12 * 12 = 144 cm²"
          ],
          [
            "To'g'ri to'rtburchak",
            "P = 2 * (a + b)",
            "S = a * b",
            "S = 72 cm², a = 9 cm -> b = 72 : 9 = 8 cm -> P = 2*(9+8) = 34 cm"
          ],
          [
            "Kvadrat maydon",
            "P = 4 * 10 = 40 m",
            "S = 10 * 10 = 100 m²",
            "a = 10 m bo'lsa, S = 100 m²"
          ],
          [
            "Xona perimetri",
            "P = 2 * (6 + 12)",
            "S = 6 * 12 = 72 m²",
            "P = 2 * 18 = 36 m"
          ]
        ]
      }
    ],
    "tip": "<b>Adashmang!</b> Perimetr oddiy uzunlik birliklarida (cm, m), yuza esa har doim KVADRAT birliklarda (cm², m²) o'lchanadi!",
    "time_words": "<b>Formulalar:</b> P = 4*a, S = a*a, P = 2*(a+b), S = a*b, b = S : a.",
    "vocab": [
      {
        "num": 1,
        "word": "Perimetr",
        "uz": "Tomonlar yig'indisi",
        "pos": "ot",
        "synonym": "P",
        "meaning": "Shaklning barcha tashqi chegaraviy tomonlari uzunliklarining umumiy yig'indisi",
        "example": "Tomoni 12 cm bo'lgan kvadratning perimetri 48 cm bo'ladi."
      },
      {
        "num": 2,
        "word": "Yuza",
        "uz": "Maydon kattaligi",
        "pos": "ot",
        "synonym": "S (Maydon)",
        "meaning": "Shakl tekislikda egallagan sathning kvadrat birlikdagi miqdori",
        "example": "Kvadratning yuzi 144 kvadrat santimetrga teng."
      },
      {
        "num": 3,
        "word": "Kvadrat santimetr",
        "uz": "cm²",
        "pos": "ot",
        "synonym": "sm²",
        "meaning": "Tomoni 1 cm bo'lgan kvadratning yuziga teng o'lchov birligi",
        "example": "Daftar varag'ining yuzi kvadrat santimetrlarda o'lchanadi."
      },
      {
        "num": 4,
        "word": "Kvadrat metr",
        "uz": "m²",
        "pos": "ot",
        "synonym": "Maydon birligi",
        "meaning": "Tomoni 1 metr bo'lgan kvadrat yuziga teng o'lchov",
        "example": "Tomoni 10 m bo'lgan kvadrat maydon yuzi 100 m² bo'ladi."
      },
      {
        "num": 5,
        "word": "Teskari masala",
        "uz": "Natijadan boshlash",
        "pos": "ot",
        "synonym": "Orqaga hisoblash",
        "meaning": "Perimetr yoki yuzadan foydalanib noma'lum tomonni topish masalasi",
        "example": "Yuzi 72 cm² va bo'yi 9 cm bo'lsa, eni 8 cm bo'ladi."
      },
      {
        "num": 6,
        "word": "To'g'ri to'rtburchak",
        "uz": "Burchaklari to'g'ri to'rtburchak",
        "pos": "ot",
        "synonym": "To'rtburchak",
        "meaning": "Qarama-qarshi tomonlari teng va barcha burchaklari 90° bo'lgan shakl",
        "example": "Bo'yi 9 cm va eni 8 cm bo'lgan to'g'ri to'rtburchak perimetri 34 cm dir."
      },
      {
        "num": 7,
        "word": "Kvadrat",
        "uz": "Hamma tomoni teng shakl",
        "pos": "ot",
        "synonym": "Muntazam to'rtburchak",
        "meaning": "Barcha to'rtta tomoni teng va to'rtta burchagi to'g'ri bo'lgan shakl",
        "example": "Kvadratning yuzi tomonining kvadratiga teng."
      },
      {
        "num": 8,
        "word": "Uzunlik va eni",
        "uz": "a va b o'lchamlari",
        "pos": "ot",
        "synonym": "Bo'y va en",
        "meaning": "To'g'ri to'rtburchakning ikkita qo'shni tomonlari",
        "example": "Bo'yi 12 m va eni 6 m bo'lgan xona perimetri 36 metrdir."
      },
      {
        "num": 9,
        "word": "Devor uzunligi",
        "uz": "P to'siq",
        "pos": "ot",
        "synonym": "Panjara",
        "meaning": "Bog' yoki hovli atrofiga o'raladigan panjara uzunligi (perimetr)",
        "example": "Bog' atrofini o'rash uchun 48 metr panjara ketadi."
      },
      {
        "num": 10,
        "word": "Maydon hajmi",
        "uz": "Ekiladigan sath",
        "pos": "ot",
        "synonym": "Sath",
        "meaning": "Ekin ekish yoki qoplama yotqizish uchun zarur bo'lgan yuz miqdori",
        "example": "Xonaga gilam yotqizish uchun uning yuzi hisoblanadi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 9: Sehrli Bog' Maydoni va Devorlari",
      "inst": "Perimetr va yuzani hisoblab bo'sh joylarni to'ldiring:",
      "text": "Alisher sehrli bog' loyihasini hisoblamoqda: Kvadrat shaklidagi gulzorning perimetri 48 cm bo'lsa, uning tomoni 12 cm bo'lib, yuzi {144} cm2 bo'ladi. To'g'ri to'rtburchak maydonning yuzi 72 cm2, bo'yi 9 cm bo'lsa, uning eni {8} cm bo'ladi. Bo'yi 9 cm va eni 8 cm bo'lgan ushbu to'rtburchakning perimetri {34} cm ga teng chiqadi. Tomoni 10 metr bo'lgan kvadrat shaklidagi maydon yuzi {100} m2 dir. Eni 6 m, bo'yi 12 m bo'lgan xonaning perimetri {36} metr bo'ladi.",
      "answers": {
        "1": "144",
        "2": "8",
        "3": "34",
        "4": "100",
        "5": "36"
      }
    },
    "quiz": [
      {
        "q": "Kvadratning perimetri 48 cm bo'lsa, uning yuzi necha cm²?",
        "opts": [
          "144 cm²",
          "96 cm²",
          "196 cm²"
        ],
        "ans": "144 cm²"
      },
      {
        "q": "To'g'ri to'rtburchakning yuzi 72 cm², bo'yi 9 cm bo'lsa, eni necha cm?",
        "opts": [
          "8 cm",
          "7 cm",
          "6 cm"
        ],
        "ans": "8 cm"
      },
      {
        "q": "Bo'yi 9 cm va eni 8 cm bo'lgan to'g'ri to'rtburchakning perimetri nechaga teng?",
        "opts": [
          "34 cm",
          "72 cm",
          "17 cm"
        ],
        "ans": "34 cm"
      },
      {
        "q": "Tomoni 10 metr bo'lgan kvadratning yuzi necha m²?",
        "opts": [
          "100 m²",
          "40 m²",
          "10 m²"
        ],
        "ans": "100 m²"
      },
      {
        "q": "Eni 6 m va bo'yi 12 m bo'lgan xonaning perimetrini toping:",
        "opts": [
          "36 m",
          "72 m",
          "18 m"
        ],
        "ans": "36 m"
      }
    ],
    "video": {
      "title": "Perimetr va Yuza Hisoblash (Kvadrat va To'g'ri To'rtburchak)",
      "desc": "Perimetr va yuza formulalari, murakkab shakllar yuzini topish darsi:",
      "youtube_id": "YwV_gE8vG1k"
    }
  },
  {
    "id": "math-unit-10",
    "num": 10,
    "title": "Harakatga Doir Masalalar",
    "subtitle": "Tezlik, vaqt, masofa: uchrashuv harakati, quvib yetish va oqim bo'ylab tezlik",
    "tag": "Matnli Masalalar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Harakatga doir masalalarda</b> uchta asosiy kattalik qatnashadi:<br>• Masofa (S): <code>S = V * t</code><br>• Tezlik (V): <code>V = S : t</code><br>• Vaqt (t): <code>t = S : V</code><br><br><b>Murakkab Harakat Turlari:</b><br>1. <b>Bir-biriga qarab harakat (Uchrashuv):</b> Yaqinlashish tezligi tezliklar yig'indisiga teng: <code>V_yaq = V1 + V2</code>. Uchrashuv vaqti: <code>t = S : (V1 + V2)</code>.<br>2. <b>Bir yo'nalishda quvib yetish:</b> Yaqinlashish tezligi tezliklar ayirmasiga teng: <code>V_yaq = V1 - V2</code>. Quvib yetish vaqti: <code>t = S_oraliq : (V1 - V2)</code>.<br>3. <b>Daryo oqimi bo'ylab harakat:</b> <code>V_oqim_boylab = V_kater + V_oqim</code>; Oqimga qarshi: <code>V_oqimga_qarshi = V_kater - V_oqim</code>.",
    "tables": [
      {
        "title": "Murakkab Harakat Masalalari Formulalar Jadvali",
        "headers": [
          "Harakat Turi",
          "Yaqinlashish Tezligi",
          "Vaqtni Topish Formulasi",
          "Namunaviy Masala"
        ],
        "rows": [
          [
            "Uchrashuv harakati",
            "V_yaq = V1 + V2",
            "t = S : (V1 + V2)",
            "S = 420 km, V1 = 60, V2 = 80 -> t = 420 : 140 = 3 soat"
          ],
          [
            "Quvib yetish",
            "V_yaq = V1 - V2",
            "t = S_oraliq : (V1 - V2)",
            "S = 60 km, V1 = 75, V2 = 55 -> t = 60 : 20 = 3 soat"
          ],
          [
            "Oqim bo'ylab",
            "V = V_kater + V_oqim",
            "S = V * t",
            "V_k = 22, V_o = 3 -> V = 25 km/soat"
          ],
          [
            "Oddiy tezlik",
            "V = S : t",
            "t = S : V",
            "S = 240 km, t = 4 soat -> V = 60 km/soat"
          ]
        ]
      }
    ],
    "tip": "<b>Diqqat:</b> Ikki mashina bir-biriga qarab harakatlansa tezliklar QO'SHILADI! Agar biri ikkinchisini quvib ketsa tezliklar AYRILADI!",
    "time_words": "<b>Formulalar:</b> S = V*t, V = S : t, t = S : V, V_yaq = V1 + V2, V_quvib = V1 - V2.",
    "vocab": [
      {
        "num": 1,
        "word": "Tezlik",
        "uz": "1 soatda bosilgan yo'l",
        "pos": "ot",
        "synonym": "V (km/soat)",
        "meaning": "Vaqt birligi ichida bosib o'tilgan masofani bildiruvchi kattalik",
        "example": "Avtomobilning tezligi soatiga 60 kilometrga teng."
      },
      {
        "num": 2,
        "word": "Masofa",
        "uz": "Bosib o'tilgan yo'l",
        "pos": "ot",
        "synonym": "S (km, metr)",
        "meaning": "Boshlang'ich nuqtadan yakuniy manzilgacha bo'lgan yo'l uzunligi",
        "example": "Shaharlar orasidagi masofa 420 km ni tashkil etadi."
      },
      {
        "num": 3,
        "word": "Harakat vaqti",
        "uz": "Sarflangan soat",
        "pos": "ot",
        "synonym": "t (soat, minut)",
        "meaning": "Yo'lni bosib o'tish uchun ketgan vaqt miqdori",
        "example": "Ikki poyezd 3 soatdan keyin uchrashadi."
      },
      {
        "num": 4,
        "word": "Uchrashuv tezligi",
        "uz": "V1 + V2",
        "pos": "ot",
        "synonym": "Yaqinlashish tezligi",
        "meaning": "Qarama-qarshi harakatlanayotgan ikki jismning bir soatdagi yaqinlashishi",
        "example": "60 va 80 km/soat tezliklar yig'indisi 140 km/soat bo'ladi."
      },
      {
        "num": 5,
        "word": "Quvib yetish tezligi",
        "uz": "V1 - V2",
        "pos": "ot",
        "synonym": "Farqli tezlik",
        "meaning": "Biri ikkinchisini quvayotgan ikki jism orasidagi masofaning qisqarish tezligi",
        "example": "75 - 55 = 20 km/soat tezlik bilan oraliq qisqaradi."
      },
      {
        "num": 6,
        "word": "Oqim bo'ylab tezlik",
        "uz": "V_k + V_o",
        "pos": "ot",
        "synonym": "Oqim yordami",
        "meaning": "Kater tezligiga daryo oqimi tezligi qo'shilgan umumiy tezlik",
        "example": "22 + 3 = 25 km/soat tezlik bilan daryoda suzadi."
      },
      {
        "num": 7,
        "word": "Oqimga qarshi tezlik",
        "uz": "V_k - V_o",
        "pos": "ot",
        "synonym": "Oqim qarshiligi",
        "meaning": "Kater tezligidan daryo oqimi tezligi ayrilgan haqiqiy tezlik",
        "example": "22 - 3 = 19 km/soat tezlik bilan oqimga qarshi suziladi."
      },
      {
        "num": 8,
        "word": "Oraliq masofa",
        "uz": "Dastlabki masofa",
        "pos": "ot",
        "synonym": "Farq masofasi",
        "meaning": "Quvib yetish boshlanganda ikki jism orasidagi mavjud masofa",
        "example": "Oraliqdagi 60 km masofa 3 soatda yopiladi."
      },
      {
        "num": 9,
        "word": "Birgalikdagi yo'l",
        "uz": "S1 + S2",
        "pos": "ot",
        "synonym": "Jami masofa",
        "meaning": "Uchrashuvgacha ikkala jism birgalikda bosib o'tgan umumiy masofa",
        "example": "Ikkala poyezd birgalikda 420 km yo'l yurdi."
      },
      {
        "num": 10,
        "word": "O'zgarmas tezlik",
        "uz": "Bir maromdagi harakat",
        "pos": "ot",
        "synonym": "Tekis harakat",
        "meaning": "Butun yo'l davomida o'zgarmasdan saqlanib turgan tezlik",
        "example": "Poyezd bir maromda 60 km/soat tezlik bilan yurmoqda."
      }
    ],
    "cloze": {
      "title": "Topshiriq 10: Tezyurar Poyezdlar va Kater Harakati",
      "inst": "Harakat formulalaridan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Ikki shahar orasidagi masofa 420 km. Bir-biriga qarab chiqqan poyezdlar tezligi 60 km/soat va 80 km/soat bo'lib, ular {3} soatdan keyin uchrashadi. Quvib yetish: 75 km/soat tezlikdagi mashina 55 km/soat tezlikdagi yuk mashinasidan 60 km orqada bo'lsa, uni {3} soatda quvib yetadi. Katerning o'z tezligi 22 km/soat, daryo oqimi 3 km/soat bo'lsa, oqim bo'ylab tezligi {25} km/soat bo'ladi. 4 soatda 240 km yo'l bosib o'tgan avtomobilning tezligi {60} km/soat ga teng. Velosipedchi 15 km/soat tezlik bilan 3 soatda {45} km masofani bosib o'tadi.",
      "answers": {
        "1": "3",
        "2": "3",
        "3": "25",
        "4": "60",
        "5": "45"
      }
    },
    "quiz": [
      {
        "q": "S = 420 km, V1 = 60 km/soat, V2 = 80 km/soat. Ular necha soatda uchrashadi?",
        "opts": [
          "3 soat",
          "4 soat",
          "5 soat"
        ],
        "ans": "3 soat"
      },
      {
        "q": "Oraliq masofa 60 km, tezliklar 75 va 55 km/soat bo'lsa, quvib yetish vaqti necha soat?",
        "opts": [
          "3 soat",
          "2 soat",
          "4 soat"
        ],
        "ans": "3 soat"
      },
      {
        "q": "Kater tezligi 22 km/soat, oqim 3 km/soat. Oqim bo'ylab tezlik nechaga teng?",
        "opts": [
          "25 km/soat",
          "19 km/soat",
          "22 km/soat"
        ],
        "ans": "25 km/soat"
      },
      {
        "q": "4 soatda 240 km yo'l yurgan avtomobil tezligi qancha?",
        "opts": [
          "60 km/soat",
          "80 km/soat",
          "50 km/soat"
        ],
        "ans": "60 km/soat"
      },
      {
        "q": "15 km/soat tezlik bilan 3 soatda necha km masofa bosib o'tiladi?",
        "opts": [
          "45 km",
          "30 km",
          "60 km"
        ],
        "ans": "45 km"
      }
    ],
    "video": {
      "title": "Harakatga Doir Masalalar (Uchrashuv va Quvib Yetish)",
      "desc": "Tezlik, vaqt, masofa: uchrashuv harakati va quvib yetish masalalari:",
      "youtube_id": "n8_oW7W3gN4"
    }
  },
  {
    "id": "math-unit-11",
    "num": 11,
    "title": "Mehnat va Ish Unumi Masalalari",
    "subtitle": "Ish unumi, birgalikda ishlash va umumiy buyurtmani bajarish vaqti",
    "tag": "Matnli Masalalar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Ish unumi (w)</b> — vaqt birligi (1 soat, 1 kun) ichida bajarilgan ish miqdoridir.<br>• Bajarilgan ish (A): <code>A = w * t</code><br>• Ish unumi (w): <code>w = A : t</code><br>• Sarflangan vaqt (t): <code>t = A : w</code><br><br><b>Birgalikda ishlash qoidasi:</b> Agar bir nechta ishchi yoki usta birgalikda ishlasa, ularning bir soatlik ish unumlari <b>qo'shiladi</b>: <code>w_jami = w1 + w2</code>. Umumiy vaqt: <code>t = A : (w1 + w2)</code>.",
    "tables": [
      {
        "title": "Ish Unumi va Birgalikda Ishlash Jadvali",
        "headers": [
          "Ish Turi",
          "Formula",
          "Bajarilish Bosqichlari",
          "Hisoblash Natijasi"
        ],
        "rows": [
          [
            "Birgalikdagi unum",
            "w_jami = w1 + w2",
            "Usta: 12 ta/soat, shogird: 8 ta/soat",
            "12 + 8 = 20 ta/soat"
          ],
          [
            "Umumiy vaqt",
            "t = A : w_jami",
            "100 ta detal : 20 ta/soat",
            "100 : 20 = 5 soat"
          ],
          [
            "Hovuz to'ldirish",
            "1/6 + 1/3 = 1/2",
            "1-nasos 6 soat, 2-nasos 3 soat",
            "1 soatda hovuzning 1/2 qismi to'ladi"
          ],
          [
            "Ishchining 1 soatlik unumi",
            "w = A : (kun * soat)",
            "240 ta : (5 * 8 soat)",
            "240 : 40 = 6 ta/soat"
          ]
        ]
      }
    ],
    "tip": "<b>Muhim qoida:</b> Agar usta yolg'iz o'zi 12 ta, shogirdi 8 ta tayyorlasa, ikkalasi birgalikda albatta tezroq tugatadi (100 : 20 = 5 soatda)!",
    "time_words": "<b>Formulalar:</b> A = w * t, w = A : t, t = A : w, w_jami = w1 + w2.",
    "vocab": [
      {
        "num": 1,
        "word": "Ish unumi",
        "uz": "1 soatlik mahsuldorlik",
        "pos": "ot",
        "synonym": "Tezkorlik (w)",
        "meaning": "Bir soat yoki bir kunda tayyorlangan mahsulot miqdori",
        "example": "Usta bir soatda 12 ta detal yasaydi."
      },
      {
        "num": 2,
        "word": "Bajarilgan ish",
        "uz": "Jami mahsulot",
        "pos": "ot",
        "synonym": "A miqdori",
        "meaning": "Barcha vaqt davomida tayyorlangan umumiy tovar yoki ish",
        "example": "Jami buyurtma 100 ta detalni tashkil etadi."
      },
      {
        "num": 3,
        "word": "Birgalikdagi unum",
        "uz": "w1 + w2",
        "pos": "ot",
        "synonym": "Umumiy mahsuldorlik",
        "meaning": "Barcha ishchilarning 1 soatda birgalikda bajargan ishi",
        "example": "12 + 8 = 20 ta detal bir soatda tayyorlanadi."
      },
      {
        "num": 4,
        "word": "Ish vaqti",
        "uz": "Sarflangan soat",
        "pos": "ot",
        "synonym": "t vaqti",
        "meaning": "Buyurtmani to'liq bitirish uchun ketgan umumiy vaqt",
        "example": "Usta va shogird ishni 5 soatda tugatishadi."
      },
      {
        "num": 5,
        "word": "Kunlik norma",
        "uz": "Bir kungi reja",
        "pos": "ot",
        "synonym": "Kunlik unum",
        "meaning": "Bir ish kunida bajarilishi lozim bo'lgan mahsulot soni",
        "example": "Kuniga 8 soatdan ishlab vazifa bajarildi."
      },
      {
        "num": 6,
        "word": "Nasos unumi",
        "uz": "Suv quyish tezligi",
        "pos": "ot",
        "synonym": "Hovuz tezligi",
        "meaning": "Suv nasosining vaqt birligida quygan suv miqdori",
        "example": "Birgalikda 1 soatda hovuzning 1/2 qismini to'ldirishadi."
      },
      {
        "num": 7,
        "word": "Kombayn unumi",
        "uz": "Hosil o'rish",
        "pos": "ot",
        "synonym": "Gektar/soat",
        "meaning": "Qishloq xo'jalik mashinasining 1 soatda o'rgan maydoni",
        "example": "Kombayn 1 soatda 3 gektar bug'doyni o'radi."
      },
      {
        "num": 8,
        "word": "Ishchilar guruhi",
        "uz": "Brigada",
        "pos": "ot",
        "synonym": "Jamoa",
        "meaning": "Birgalikda bir maqsad uchun ishlayotgan ishchilar jamoasi",
        "example": "4 nafar usta 3 kunda 60 ta stul yasaydi."
      },
      {
        "num": 9,
        "word": "Bir soatlik hosildorlik",
        "uz": "A : t",
        "pos": "ot",
        "synonym": "Soatlik natija",
        "meaning": "Umumiy ishni sarflangan soatlarga bo'lish natijasi",
        "example": "240 ni 40 soatga bo'lsak 6 ta chiqadi."
      },
      {
        "num": 10,
        "word": "Teng taqsimlangan reja",
        "uz": "Kunlik grafik",
        "pos": "ot",
        "synonym": "Jadval",
        "meaning": "Kunlar bo'yicha bir xil miqdorda taqsimlangan ish rejasi",
        "example": "Bir kunda 20 ta stul yasalishi rejalashtirildi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 11: Duradgorlik Ustaxonasi va Hovuz Suvi",
      "inst": "Ish unumi formulalaridan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Usta bir soatda 12 ta, shogirdi esa 8 ta detal tayyorlaydi. Ular birgalikda 1 soatda {20} ta detal yasashadi. Usta va shogird birgalikda 100 ta detalni {5} soatda tayyorlab bo'lishadi. 1-nasos hovuzni 6 soatda, 2-nasos 3 soatda to'ldiradi; ikkalasi birgalikda ishlaganda 1 soatda hovuzning {1/2} qismi to'ladi. Kuniga 8 soatdan ishlab, 5 kunda 240 ta mahsulot chiqargan ishchining 1 soatlik unumi {6} ta bo'ladi. 4 nafar usta 3 kunda 60 ta stul yasasa, bir kunda jami {20} ta stul tayyorlanadi.",
      "answers": {
        "1": "20",
        "2": "5",
        "3": "1/2",
        "4": "6",
        "5": "20"
      }
    },
    "quiz": [
      {
        "q": "Usta 12 ta, shogird 8 ta detal yasaydi. Ikkalasi birgalikda 100 ta detalni necha soatda yasaydi?",
        "opts": [
          "5 soat",
          "6 soat",
          "4 soat"
        ],
        "ans": "5 soat"
      },
      {
        "q": "1-nasos 6 soatda, 2-nasos 3 soatda to'ldirsa, 1 soatda hovuzning qancha qismi to'ladi?",
        "opts": [
          "1/2 qismi",
          "1/3 qismi",
          "1/6 qismi"
        ],
        "ans": "1/2 qismi"
      },
      {
        "q": "5 kunda 40 soat ishlab 240 ta detal yasagan ishchining 1 soatlik unumi qancha?",
        "opts": [
          "6 ta",
          "8 ta",
          "5 ta"
        ],
        "ans": "6 ta"
      },
      {
        "q": "4 nafar usta 3 kunda 60 ta stul yasasa, bir kunda nechta stul yasaladi?",
        "opts": [
          "20 ta",
          "15 ta",
          "12 ta"
        ],
        "ans": "20 ta"
      },
      {
        "q": "Ish unumini topish formulasini tanlang:",
        "opts": [
          "w = A : t",
          "w = A * t",
          "w = t : A"
        ],
        "ans": "w = A : t"
      }
    ],
    "video": {
      "title": "Mehnat va Ish Unumi Masalalari (Birgalikda Ishlash)",
      "desc": "Ish unumi, vaqt va bajarilgan ish miqdorini hisoblash usullari:",
      "youtube_id": "b3eW2pA1Z7s"
    }
  },
  {
    "id": "math-unit-12",
    "num": 12,
    "title": "Narx, Miqdor, Qiymat va Iqtisodiy Masalalar",
    "subtitle": "Xaridlar qiymati, chegirma, foyda-zarar va bir nechta noma'lumli tenglamalar",
    "tag": "Iqtisodiy Masalalar • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Iqtisodiy masalalarda</b> uchta asosiy tushuncha bog'lanadi:<br>• Umumiy Qiymat (Q): <code>Q = N * M</code> (Narx ko'paytirilgan Miqdor)<br>• Bitta buyum narxi (N): <code>N = Q : M</code><br>• Miqdori (M): <code>M = Q : N</code><br><br><b>Bir nechta xaridlar tenglamasi:</b> Agar 4 ta daftar va 3 ta ruchka uchun jami 26 000 so'm to'langan bo'lsa va 1 ta daftar 3 500 so'm bo'lsa:<br>1. Daftarlar narxi: <code>4 * 3 500 = 14 000 so'm</code><br>2. Ruchkalar narxi: <code>26 000 - 14 000 = 12 000 so'm</code><br>3. 1 ta ruchka narxi: <code>12 000 : 3 = 4 000 so'm</code>.",
    "tables": [
      {
        "title": "Narx, Miqdor va Qiymat Formulalari Jadvali",
        "headers": [
          "Tushuncha",
          "Formula",
          "Namuna Masala",
          "Hisoblash Natijasi"
        ],
        "rows": [
          [
            "Umumiy qiymat",
            "Q = N * M",
            "Bitta kitob 15 000 so'm, 5 ta kitob",
            "15 000 * 5 = 75 000 so'm"
          ],
          [
            "Noma'lum narx",
            "Q_ruchka : 3",
            "26 000 - 14 000 = 12 000 so'm",
            "12 000 : 3 = 4 000 so'm"
          ],
          [
            "Foyda hisoblash",
            "Foyda = Sotish - Xarid",
            "60 000 - 45 000 so'm",
            "15 000 so'm sof foyda"
          ],
          [
            "Kasrli narx",
            "36 000 ning 3/4 qismi",
            "(36 000 : 4) * 3",
            "27 000 so'm"
          ],
          [
            "Proporsiya narxi",
            "(24 000 : 8) * 12",
            "1 ta qalam 3 000 so'm",
            "3 000 * 12 = 36 000 so'm"
          ]
        ]
      }
    ],
    "tip": "<b>Amaliy maslahat:</b> Xaridlar masalasida avval narxi ma'lum bo'lgan buyumlarning umumiy summasi hisoblanadi, so'ngra jami summadan ayrilib, noma'lum buyum narxi topiladi!",
    "time_words": "<b>Formulalar:</b> Q = N * M, N = Q : M, M = Q : N, Foyda = Sotish - Xarid.",
    "vocab": [
      {
        "num": 1,
        "word": "Narx",
        "uz": "Bitta buyum bahosi",
        "pos": "ot",
        "synonym": "Birlik narxi (N)",
        "meaning": "Bitta tovar yoki 1 kg mahsulot uchun to'lanadigan pul miqdori",
        "example": "Bitta ruchkaning narxi 4 000 so'm chiqdi."
      },
      {
        "num": 2,
        "word": "Miqdor",
        "uz": "Buyumlar soni/og'irligi",
        "pos": "ot",
        "synonym": "Soni (M)",
        "meaning": "Xarid qilingan tovarlarning donasi yoki kilogramm miqdori",
        "example": "Xaridor 4 ta daftar va 3 ta ruchka sotib oldi."
      },
      {
        "num": 3,
        "word": "Umumiy qiymat",
        "uz": "Jami to'lov",
        "pos": "ot",
        "synonym": "Summa (Q)",
        "meaning": "Barcha tovarlar uchun kassaga to'langan umumiy pul summasi",
        "example": "Jami xarid qiymati 26 000 so'mni tashkil etdi."
      },
      {
        "num": 4,
        "word": "Foyda",
        "uz": "Daromad ortig'i",
        "pos": "ot",
        "synonym": "Sof daromad",
        "meaning": "Mahsulotni sotish narxi va xarid narxi orasidagi ijobiy farq",
        "example": "Savdogar har bir tovardan 15 000 so'm foyda qildi."
      },
      {
        "num": 5,
        "word": "Zarar",
        "uz": "Kutilmagan kamomad",
        "pos": "ot",
        "synonym": "Ziyon",
        "meaning": "Tovar xarid narxidan arzon sotilganda ko'riladigan yo'qotish",
        "example": "Hisob-kitob to'g'ri olib borilsa zarar bo'lmaydi."
      },
      {
        "num": 6,
        "word": "Chegirma",
        "uz": "Arzonlashtirish",
        "pos": "ot",
        "synonym": "Aksiya narxi",
        "meaning": "Tovarning dastlabki narxidan ma'lum pul miqdorini kamaytirish",
        "example": "Bayram munosabati bilan barcha kitoblarga chegirma berildi."
      },
      {
        "num": 7,
        "word": "Kasrli xarid",
        "uz": "Ulushli kilogramm",
        "pos": "ot",
        "synonym": "3/4 kg",
        "meaning": "Tovarning butun bo'lmagan qismini sotib olish (masalan, 3/4 kg konfet)",
        "example": "1 kg konfet 36 000 so'm bo'lsa, 3/4 kg miqdori 27 000 so'm bo'ladi."
      },
      {
        "num": 8,
        "word": "Kassa cheki",
        "uz": "To'lov hujjati",
        "pos": "ot",
        "synonym": "Kvitansiya",
        "meaning": "Xarid qilingan tovarlar va to'langan pul ro'yxati yozilgan qog'oz",
        "example": "Kassa chekida jami 75 000 so'm qayd etildi."
      },
      {
        "num": 9,
        "word": "Tannarx",
        "uz": "Olingan bahosi",
        "pos": "ot",
        "synonym": "Xarid bahosi",
        "meaning": "Tovarni ishlab chiqarish yoki ulgurji sotib olish bahosi",
        "example": "Tovarning tannarxi 45 000 so'm edi."
      },
      {
        "num": 10,
        "word": "Proporsional narx",
        "uz": "Bir xil nisbat",
        "pos": "ot",
        "synonym": "Nisbatli narx",
        "meaning": "Tovarlar soniga qarab narxning to'g'ri mutanosib oshishi",
        "example": "8 ta qalam 24 000 bo'lsa, 12 tasi 36 000 so'm bo'ladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 12: Bolalar Supermarketida Oqilona Xarid",
      "inst": "Iqtisodiy formulalardan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Xaridor 4 ta daftar va 3 ta ruchka uchun 26 000 so'm to'ladi. Bir daftar 3 500 so'm bo'lsa, 4 ta daftar 14 000 so'm bo'lib, bitta ruchka narxi {4000} so'm chiqadi. Savdogar tovarini 45 000 so'mga olib, 60 000 so'mga sotdi; uning sof foydasi {15000} so'm bo'ldi. 1 kg shirin konfet 36 000 so'm tursa, uning 3/4 kg miqdori {27000} so'm bo'ladi. 5 ta bir xil darslik uchun 75 000 so'm to'lansa, bitta darslik narxi {15000} so'm bo'ladi. 8 ta qalam 24 000 so'm tursa, 12 ta shunday qalam {36000} so'm bo'ladi.",
      "answers": {
        "1": "4000",
        "2": "15000",
        "3": "27000",
        "4": "15000",
        "5": "36000"
      }
    },
    "quiz": [
      {
        "q": "4 ta daftar (har biri 3 500 so'm) va 3 ta ruchka jami 26 000 so'm. Bitta ruchka necha pul?",
        "opts": [
          "4 000 so'm",
          "3 000 so'm",
          "5 000 so'm"
        ],
        "ans": "4 000 so'm"
      },
      {
        "q": "45 000 ga olinib, 60 000 so'mga sotilgan tovardan qancha foyda ko'riladi?",
        "opts": [
          "15 000 so'm",
          "20 000 so'm",
          "10 000 so'm"
        ],
        "ans": "15 000 so'm"
      },
      {
        "q": "1 kg konfet 36 000 so'm bo'lsa, 3/4 kg konfet necha pul turadi?",
        "opts": [
          "27 000 so'm",
          "24 000 so'm",
          "18 000 so'm"
        ],
        "ans": "27 000 so'm"
      },
      {
        "q": "5 ta bir xil kitob 75 000 so'm bo'lsa, bitta kitob necha pul?",
        "opts": [
          "15 000 so'm",
          "12 000 so'm",
          "25 000 so'm"
        ],
        "ans": "15 000 so'm"
      },
      {
        "q": "8 ta qalam 24 000 so'm tursa, 12 ta shunday qalam necha pul bo'ladi?",
        "opts": [
          "36 000 so'm",
          "32 000 so'm",
          "48 000 so'm"
        ],
        "ans": "36 000 so'm"
      }
    ],
    "video": {
      "title": "Narx, Miqdor, Qiymat va Iqtisodiy Masalalar",
      "desc": "Narx, miqdor, umumiy qiymat va foyda/zararni hisoblash:",
      "youtube_id": "5Jz9uW2Zq8w"
    }
  },
  {
    "id": "math-unit-13",
    "num": 13,
    "title": "Ma'lumotlar Tahlili, Jadvallar va Arifmetik O'rtacha",
    "subtitle": "Arifmetik o'rtacha qiymat, diagrammalar, statistik ma'lumotlar tahlili",
    "tag": "Statistika va Tahlil • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Arifmetik o'rtacha qiymat</b> — bir nechta sonlar yig'indisini ularning soniga bo'lish natijasida hosil bo'ladigan o'rtacha ko'rsatkichdir:<br><code>Arifmetik o'rtacha = (a1 + a2 + ... + an) : n</code>.<br><br><b>Teskari tahlil:</b> Agar sonlarning arifmetik o'rtachasi ma'lum bo'lsa, ularning umumiy yig'indisini topish uchun o'rtacha qiymat sonlar miqdoriga ko'paytiriladi (masalan, 3 ta sonning o'rtachasi 40 bo'lsa, ularning yig'indisi <code>40 * 3 = 120</code> bo'ladi). Diagrammalar va jadvallar ma'lumotlarni ko'rgazmali solishtirish uchun xizmat qiladi.",
    "tables": [
      {
        "title": "Arifmetik O'rtacha Hisoblash Jadvali",
        "headers": [
          "Berilgan Ma'lumotlar",
          "Sonlar Miqdori (n)",
          "Yig'indisi",
          "Arifmetik O'rtachasi"
        ],
        "rows": [
          [
            "Chorak baholari: 85, 90, 95, 90",
            "4 ta baho",
            "85 + 90 + 95 + 90 = 360",
            "360 : 4 = 90 ball"
          ],
          [
            "Uchta son o'rtachasi: 40",
            "3 ta son",
            "Yig'indi = 40 * 3",
            "Yig'indisi = 120"
          ],
          [
            "Kunlik savdo: 120, 150, 180 kg",
            "3 kun",
            "120 + 150 + 180 = 450",
            "450 : 3 = 150 kg"
          ],
          [
            "200 ning 4 ga bo'linishi",
            "4 ta son",
            "Yig'indisi = 200",
            "200 : 4 = 50"
          ],
          [
            "Ketma-ket sonlar: 10, 20, 30, 40, 50",
            "5 ta son",
            "Yig'indi = 150",
            "150 : 5 = 30"
          ]
        ]
      }
    ],
    "tip": "<b>Foydali qoida:</b> Agar sonlar bir xil qadam bilan ortib boruvchi toq miqdordagi sonlar bo'lsa (masalan 10, 20, 30, 40, 50), ularning arifmetik o'rtachasi roppa-rosa o'rtadagi songa (30 ga) teng bo'ladi!",
    "time_words": "<b>Formulalar:</b> O'rtacha = Yig'indi : Soni, Yig'indi = O'rtacha * Soni.",
    "vocab": [
      {
        "num": 1,
        "word": "Arifmetik o'rtacha",
        "uz": "O'rtacha ko'rsatkich",
        "pos": "ot",
        "synonym": "O'rtacha qiymat",
        "meaning": "Barcha qiymatlar yig'indisini ularning soniga bo'lish natijasi",
        "example": "To'rtta imtihon natijasining arifmetik o'rtachasi 90 ball bo'ldi."
      },
      {
        "num": 2,
        "word": "Ma'lumotlar",
        "uz": "Faktlar va sonlar",
        "pos": "ot",
        "synonym": "Statistika",
        "meaning": "Kuzatishlar natijasida to'plangan raqamli ko'rsatkichlar to'plami",
        "example": "Kutubxona kitobxonlari haqida ma'lumotlar jadvalga kiritildi."
      },
      {
        "num": 3,
        "word": "Diagramma",
        "uz": "Ko'rgazmali chizma",
        "pos": "ot",
        "synonym": "Grafik",
        "meaning": "Ma'lumotlar orasidagi nisbatni chizma, ustun yoki doira shaklida ifodalash",
        "example": "Ustunli diagrammada har bir sinf yutuqlari yaqqol ko'rinib turibdi."
      },
      {
        "num": 4,
        "word": "Jadval",
        "uz": "Satr va ustunlar",
        "pos": "ot",
        "synonym": "Taqsimot",
        "meaning": "Ma'lumotlarni tartibli satr va ustunlarda joylashtirish usuli",
        "example": "Jadval yordamida o'quvchilar reytingi aniqlandi."
      },
      {
        "num": 5,
        "word": "Umumiy yig'indi",
        "uz": "Barcha sonlar summasi",
        "pos": "ot",
        "synonym": "Jami ball",
        "meaning": "Barcha qo'shiluvchilarning umumiy arifmetik summasi",
        "example": "Uchta sonning yig'indisi 120 ga teng bo'ldi."
      },
      {
        "num": 6,
        "word": "Ustunli diagramma",
        "uz": "Vertikal chiziqlar",
        "pos": "ot",
        "synonym": "Gistogramma",
        "meaning": "Kattaliklarni turli balandlikdagi ustunlar bilan ko'rsatuvchi grafik",
        "example": "Eng baland ustun eng ko'p kitob o'qilgan oyni bildiradi."
      },
      {
        "num": 7,
        "word": "Doiraviy diagramma",
        "uz": "Ulushli doira",
        "pos": "ot",
        "synonym": "Sektorli grafik",
        "meaning": "Doiraning bo'laklari (sektorlari) orqali foiz va kasrlarni ko'rsatish",
        "example": "Doiraning yarmi matematika faniga ajratilgan."
      },
      {
        "num": 8,
        "word": "O'rtacha savdo",
        "uz": "Kunlik o'rtacha",
        "pos": "ot",
        "synonym": "Kundalik me'yor",
        "meaning": "Kunlar bo'yicha sotilgan mahsulotning o'rtacha hisoblangan miqdori",
        "example": "Do'konda kunlik o'rtacha sotuv 150 kg ni tashkil etdi."
      },
      {
        "num": 9,
        "word": "Eng katta ko'rsatkich",
        "uz": "Maksimum",
        "pos": "ot",
        "synonym": "Cho'qqi qiymat",
        "meaning": "Jadval yoki diagrammadagi eng yuqori sonli natija",
        "example": "Maksimal ball 95 ballni tashkil qildi."
      },
      {
        "num": 10,
        "word": "Eng kichik ko'rsatkich",
        "uz": "Minimum",
        "pos": "ot",
        "synonym": "Eng past qiymat",
        "meaning": "Jadvaldagi eng quyi sonli ko'rsatkich",
        "example": "Minimal ball 85 ball bo'ldi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 13: Maktab Olimpiadasi Statistikasi",
      "inst": "Arifmetik o'rtacha va jadvallar tahlili bo'yicha bo'sh joylarni to'ldiring:",
      "text": "O'quvchining to'rtta chorakdagi baholari 85, 90, 95 va 90 bo'lsa, uning o'rtacha balli {90} bo'ladi. Agar uchta sonning arifmetik o'rtachasi 40 ga teng bo'lsa, ularning umumiy yig'indisi {120} ga teng chiqadi. Do'konda 1-kuni 120 kg, 2-kuni 150 kg, 3-kuni 180 kg meva sotildi; kunlik o'rtacha sotuv {150} kg bo'ldi. To'rtta sonning yig'indisi 200 ga teng bo'lsa, ularning o'rtachasi {50} bo'ladi. 10, 20, 30, 40, 50 sonlarining arifmetik o'rtacha qiymati {30} ga teng.",
      "answers": {
        "1": "90",
        "2": "120",
        "3": "150",
        "4": "50",
        "5": "30"
      }
    },
    "quiz": [
      {
        "q": "85, 90, 95 va 90 sonlarining arifmetik o'rtachasini toping:",
        "opts": [
          "90",
          "88",
          "92"
        ],
        "ans": "90"
      },
      {
        "q": "Uchta sonning arifmetik o'rtachasi 40 bo'lsa, ularning yig'indisi nechaga teng?",
        "opts": [
          "120",
          "40",
          "160"
        ],
        "ans": "120"
      },
      {
        "q": "120, 150 va 180 sonlarining o'rtacha arifmetigi nechaga teng?",
        "opts": [
          "150",
          "160",
          "140"
        ],
        "ans": "150"
      },
      {
        "q": "To'rtta sonning yig'indisi 200 bo'lsa, ularning o'rtachasi qancha?",
        "opts": [
          "50",
          "25",
          "100"
        ],
        "ans": "50"
      },
      {
        "q": "10, 20, 30, 40, 50 sonlarining arifmetik o'rtachasini toping:",
        "opts": [
          "30",
          "25",
          "35"
        ],
        "ans": "30"
      }
    ],
    "video": {
      "title": "Ma'lumotlar Tahlili, Jadvallar va Arifmetik O'rtacha",
      "desc": "Arifmetik o'rtacha qiymatni topish va diagrammalarni tahlil qilish:",
      "youtube_id": "9tG_5gV3qL8"
    }
  },
  {
    "id": "math-unit-14",
    "num": 14,
    "title": "Mantiqiy va Olimpiada Masalalari (Prezident Maktabi)",
    "subtitle": "Tovuq va quyonlar (bosh-oyoqlar), oraliqlar, kesmalar va teskari hisoblash usuli",
    "tag": "Olimpiada & Mantiq • 4-Sinf Chuqurlashtirilgan",
    "meaning": "<b>Mantiqiy va olimpiada masalalari</b> Al-Xorazmiy va Prezident maktablari imtihonlarining eng muhim qismidir.<br><br><b>1. Tovuq va quyonlar masalasi (Boshlar va oyoqlar):</b><br>Hovlida jami 15 ta bosh va 44 ta oyoq bor. Faraz qilamiz, barchasi tovuq bo'lsin: <code>15 * 2 = 30 ta oyoq</code> bo'lardi. Yetishmayotgan oyoqlar: <code>44 - 30 = 14 ta</code>. Har bir quyon tovuqdan 2 ta ortiq oyoqqa ega: <code>14 : 2 = 7 ta quyon</code>. Tovuqlar: <code>15 - 7 = 8 ta tovuq</code>!<br><br><b>2. Oraliqlar va daraxtlar masalasi:</b><br>To'g'ri yo'l bo'yiga ekilgan daraxtlar soni har doim oraliqlar (kesmalar) sonidan <b>1 taga ko'p</b> bo'ladi: <code>Daraxtlar = (Uzunlik : Qadam) + 1</code>.<br><br><b>3. Teskari tartibda yechish:</b> Masalaning oxirgi natijasidan boshlab, barcha amallarga teskari amal bajarib boriladi.",
    "tables": [
      {
        "title": "Klassik Olimpiada Masalalari Yechish Sxemasi",
        "headers": [
          "Masala Turi",
          "Shart Namunasi",
          "Yechish Algoritmi",
          "Javob"
        ],
        "rows": [
          [
            "Tovuq va quyonlar",
            "15 ta bosh, 44 ta oyoq",
            "15*2=30; 44-30=14; 14:2 = 7 ta quyon; 15-7 = 8 ta tovuq",
            "7 ta quyon, 8 ta tovuq"
          ],
          [
            "Teskari tartib",
            "Sonni 3 ga ko'paytirib, 20 qo'shilsa 80",
            "(80 - 20) : 3 = 60 : 3 = 20",
            "Dastlabki son = 20"
          ],
          [
            "Oraliqlar va ko'chat",
            "60 m yo'l, har 5 metrda bitta ko'chat",
            "Oraliqlar = 60 : 5 = 12 ta; Ko'chatlar = 12 + 1",
            "13 ta ko'chat"
          ],
          [
            "Taxtani arralash",
            "10 metr taxtani 2 metrli bo'laklarga",
            "Bo'laklar: 10:2 = 5 ta; Arralashlar: 5 - 1",
            "4 marta arralash kerak"
          ],
          [
            "Savatdagi olma",
            "Yarmi, so'ng yana 5 tasi olinsa 15 ta qoldi",
            "(15 + 5) * 2 = 20 * 2 = 40 ta",
            "Dastlab 40 ta olma bo'lgan"
          ]
        ]
      }
    ],
    "tip": "<b>Olimpiada qoidasi:</b> Taxtani 5 bo'lakka bo'lish uchun faqat 4 marta arralash kifoya! Oraliqlar soni har doim bo'laklar sonidan 1 taga kam, ko'chatlar soni esa 1 taga ko'p bo'ladi!",
    "time_words": "<b>Usullar:</b> Faraz qilish usuli, Teskari tartibda yechish, Oraliqlar qoidasi, Dirixle prinsipi.",
    "vocab": [
      {
        "num": 1,
        "word": "Faraz qilish usuli",
        "uz": "Taxmin qilib yechish",
        "pos": "ot",
        "synonym": "Gipoteza",
        "meaning": "Barcha hayvonlarni bitta tur deb faraz qilib, farq orqali yechish usuli",
        "example": "Barcha 15 ta jonivorni tovuq deb faraz qildik."
      },
      {
        "num": 2,
        "word": "Teskari tartib",
        "uz": "Oxiridan boshlash",
        "pos": "ot",
        "synonym": "Ortga qaytish",
        "meaning": "Oxirgi natijadan boshlab amallarga teskari amallar qo'llab yechish",
        "example": "(80 - 20) : 3 orqali dastlabki son 20 topildi."
      },
      {
        "num": 3,
        "word": "Oraliqlar qoidasi",
        "uz": "Kesmalar soni",
        "pos": "ot",
        "synonym": "Oraliq masofa",
        "meaning": "Ko'chatlar soni har doim oraliqlar sonidan 1 taga ko'p bo'lishi qoidasi",
        "example": "60 metrda 12 ta oraliq bo'lib, 13 ta ko'chat ekiladi."
      },
      {
        "num": 4,
        "word": "Arralash soni",
        "uz": "Kesimlar soni",
        "pos": "ot",
        "synonym": "Bo'lak - 1",
        "meaning": "Narsani bo'laklarga ajratish uchun zarur bo'lgan kesishlar soni",
        "example": "5 ta bo'lak olish uchun taxta 4 marta arralanadi."
      },
      {
        "num": 5,
        "word": "Oyoqlar farqi",
        "uz": "4 - 2 = 2 ta",
        "pos": "ot",
        "synonym": "Qo'shimcha oyoq",
        "meaning": "Quyonning tovuqdan 2 ta ortiq oyog'i borligi hisobiga yechish",
        "example": "14 ta yetishmagan oyoqni 2 ga bo'lib 7 ta quyon topildi."
      },
      {
        "num": 6,
        "word": "Mantiqiy xulosa",
        "uz": "Deduksiya",
        "pos": "ot",
        "synonym": "Fikr zanjiri",
        "meaning": "Berilgan shartlardan qadamma-qadam to'g'ri xulosalar chiqarish",
        "example": "Mantiqiy tahlil orqali masala tenglamasiz oson yechildi."
      },
      {
        "num": 7,
        "word": "Dirixle prinsipi",
        "uz": "Kataklar va quyonlar",
        "pos": "ot",
        "synonym": "Kafolat qoidasi",
        "meaning": "Agar n ta katakka n+1 ta quyon joylashtirilsa, kamida bittasida 2 ta bo'ladi",
        "example": "Dirixle prinsipi olimpiada masalalarida keng qo'llaniladi."
      },
      {
        "num": 8,
        "word": "Kombinatorika",
        "uz": "Variantlar soni",
        "pos": "ot",
        "synonym": "Imkoniyatlar",
        "meaning": "Berilgan raqamlar yoki narsalardan tuzish mumkin bo'lgan usullar soni",
        "example": "3 ta raqamdan nechta turli 3 xonali son tuzish mumkinligini aniqladik."
      },
      {
        "num": 9,
        "word": "Juft va toqlik",
        "uz": "Son xossasi",
        "pos": "ot",
        "synonym": "Paritet",
        "meaning": "Sonlarning 2 ga bo'linish xossasidan foydalanib yechish",
        "example": "Ikkita toq sonning yig'indisi har doim juft bo'ladi."
      },
      {
        "num": 10,
        "word": "Al-Xorazmiy uslubi",
        "uz": "Klassik matematika",
        "pos": "ot",
        "synonym": "Sharqona mantiq",
        "meaning": "Masalalarni tenglamalar va aniq qoidalar asosida hal etish san'ati",
        "example": "Al-Xorazmiy akademiyasiga tayyorgarlik yuqori mantiqiy fikrlashni talab qiladi."
      }
    ],
    "cloze": {
      "title": "Topshiriq 14: Al-Xorazmiy Akademiyasi Olimpiada Sinovlari",
      "inst": "Mantiqiy qoidalar va usullardan foydalanib bo'sh joylarni to'ldiring:",
      "text": "Olimpiada tanlovida klassik masalalar berildi: Hovlida tovuqlar va quyonlar bor; jami boshlar 15 ta, oyoqlar esa 44 ta. U yerda {7} ta quyon va {8} ta tovuq bor. O'ylangan sonni 3 ga ko'paytirib, natijaga 20 qo'shilsa 80 hosil bo'ldi; o'ylangan son {20} bo'lgan. 60 metrli yo'l bo'ylab har 5 metrda bittadan ko'chat ekildi; jami ekilgan ko'chatlar soni {13} ta. 10 metrli taxtani 2 metrli teng bo'laklarga ajratish uchun {4} marta arralash kerak bo'ladi. Savatdagi olmalarning yarmi, so'ng yana 5 tasi olinsa 15 ta qoldi; dastlab savatda {40} ta olma bo'lgan.",
      "answers": {
        "1": "7",
        "2": "8",
        "3": "20",
        "4": "13",
        "5": "4",
        "6": "40"
      }
    },
    "quiz": [
      {
        "q": "Hovlida 15 ta bosh va 44 ta oyoq bor. Quyonlar soni nechta?",
        "opts": [
          "7 ta",
          "8 ta",
          "6 ta"
        ],
        "ans": "7 ta"
      },
      {
        "q": "Bir sonni 3 ga ko'paytirib, 20 qo'shilsa 80 hosil bo'ldi. Dastlabki son nechaga teng?",
        "opts": [
          "20",
          "30",
          "15"
        ],
        "ans": "20"
      },
      {
        "q": "60 metrli yo'lga har 5 metrda bittadan ko'chat ekilsa, jami nechta ko'chat ekiladi?",
        "opts": [
          "13 ta",
          "12 ta",
          "11 ta"
        ],
        "ans": "13 ta"
      },
      {
        "q": "10 metrli taxtani 2 metrli bo'laklarga ajratish uchun necha marta arralash kerak?",
        "opts": [
          "4 marta",
          "5 marta",
          "3 marta"
        ],
        "ans": "4 marta"
      },
      {
        "q": "Olmalarning yarmi va yana 5 tasi olingach 15 ta qoldi. Dastlab nechta olma bo'lgan?",
        "opts": [
          "40 ta",
          "30 ta",
          "50 ta"
        ],
        "ans": "40 ta"
      }
    ],
    "video": {
      "title": "Mantiqiy va Olimpiada Masalalari (Al-Xorazmiy Usullari)",
      "desc": "Tovuq va quyonlar, oraliqlar, teskari tartibda yechiladigan olimpiada masalalari:",
      "youtube_id": "K1vP8qW2z4M"
    }
  }
],

  cloze_pages: [
  {
    "page_num": 51,
    "title": "4-BO'LIM: MATEMATIK MASALALAR MASTERWORK",
    "subtitle": "Matnli masalalarni yechish: 4 ta Oltin Qoida va Strategiya (Olimpiada & Prezident Maktabi)",
    "tag": "Bo'lim Kirish • 4-Sinf",
    "is_intro": true,
    "rules": [
      [
        "1. Masala shartini 2 marta diqqat bilan o'qing va tahlil qiling",
        "Nima berilgan va nimani topish kerakligini aniq ajrating. Barcha sonlar, kasrlar va o'lchov birliklarini belgilang."
      ],
      [
        "2. Qisqa shart, jadval yoki chizma (sxema) tuzing",
        "Masalani ko'z oldingizga keltiring. Kesmalar, to'g'ri to'rtburchaklar yoki jadvallar yechim yo'lini darhol ko'rsatib beradi."
      ],
      [
        "3. Yechish rejasini va to'g'ri formulani tanlang",
        "Harakat bo'lsa S = V*t; Kasr bo'lsa (A:n)*m yoki (B:m)*n; Ish unumi bo'lsa A = w*t; Narx bo'lsa Q = N*M."
      ],
      [
        "4. Javobni hisoblang va teskari amal bilan tekshiring",
        "Olingan natijani boshlang'ich shartga qo'yib tekshiring. Topilgan son masala ma'nosiga mos kelishiga ishonch hosil qiling."
      ]
    ],
    "banner_note": "Ushbu 20 ta sahifada siz 1-dan 14-gacha bo'lgan barcha matematik mavzularni Alisher, Benny va Al-Xorazmiy bilan haqiqiy qiziqarli detektiv sarguzashtlar orqali mustahkamlaysiz!",
    "video": {
      "title": "Matematik Matnli Masalalarni Tahlil Qilish va Yechish Strategiyasi",
      "desc": "Murakkab masalalarni qisqa shart, chizma va qadam-baqadam reja bilan yechish masterclassi:",
      "youtube_id": "tuVI8Uv0SAI"
    }
  },
  {
    "page_num": 52,
    "unit_ref": "Math Unit 1",
    "title": "Sehrli Maktab Kutubxonasidagi Kitoblar Fondi",
    "tense_focus": "Ko'p Xonali Sonlar (1 000 000 gacha, Sinflar va Yaxlitlash)",
    "intro": "Kutubxona kitoblar fondini tahlil qiling va bo'sh joylarni to'ldiring:",
    "story": "Sehrli Maktab kutubxonasida yangi o'quv yilida katta hisob-kitob boshlandi. Birlar sinfida 450 ta ertak kitobi, minglar sinfida esa 350 mingta ilmiy kitob bor. Jami kitoblar soni <span class=\"q-blank\">___________</span> tani tashkil etdi. Kutubxonachi kitoblar sonini mingliklargacha yaxlitlaganda ular taxminan <span class=\"q-blank\">___________</span> ta bo'ldi. Eng katta olti xonali natural son bu <span class=\"q-blank\">___________</span> dir. 1 000 000 (bir million) sonida jami <span class=\"q-blank\">___________</span> ta nol qatnashadi.",
    "answers": [
      "350450",
      "350000",
      "999999",
      "6"
    ]
  },
  {
    "page_num": 53,
    "unit_ref": "Math Unit 2",
    "title": "Samarqand Karvonidagi Oltin va Kumush Tangalar",
    "tense_focus": "Ko'p Xonali Sonlarni Qo'shish, Ayirish va Tenglamalar",
    "intro": "Karvon xazinasidagi tangalarni hisoblashda yordam bering:",
    "story": "Ipak Yo'li karvonboshisi Registonga keltirgan birinchi sandiqda 245 800 ta oltin tanga, ikkinchi sandiqda 154 200 ta kumush tanga bor edi. Ikkala sandiqdagi jami tangalar yig'indisi <span class=\"q-blank\">___________</span> tani tashkil qildi. 1 000 000 tangadan 325 500 tanga xazina ehtiyojlariga ajratilgach, sandiqlarda <span class=\"q-blank\">___________</span> ta tanga qoldi. Agar x + 45 000 = 120 000 bo'lsa, noma'lum x qiymati <span class=\"q-blank\">___________</span> ga teng. Ikki sandiqda 90 000 tanga bo'lib, birida 38 500 bo'lsa, ikkinchisida <span class=\"q-blank\">___________</span> ta tanga bor.",
    "answers": [
      "400000",
      "674500",
      "75000",
      "51500"
    ]
  },
  {
    "page_num": 54,
    "unit_ref": "Math Unit 3",
    "title": "Xiva Gilamchilik Ustaxonasidagi Katta Buyurtma",
    "tense_focus": "Ko'p Xonali Sonlarni Ko'paytirish va Taqsimot Qonuni",
    "intro": "Gilam to'qish hisob-kitoblarini ko'paytirish qoidalari bilan yeching:",
    "story": "Xivadagi tarixiy ustaxonada 320 ta naqshli ipak gilam to'qildi. Har bir gilam uchun 45 metr ipak ipi sarflandi. Barcha gilamlar uchun jami <span class=\"q-blank\">___________</span> metr ip ishlatildi. Ombor hisobchisi 1 200 * 300 amalini bajarganda natija <span class=\"q-blank\">___________</span> chiqdi. 25 * (40 + 4) ifodasi taqsimot qonuniga ko'ra oson hisoblansa <span class=\"q-blank\">___________</span> bo'ladi. Bir qutida 50 ta naqshli ip bo'lsa, 160 ta shunday qutida <span class=\"q-blank\">___________</span> ta ip bo'ladi.",
    "answers": [
      "14400",
      "360000",
      "1100",
      "8000"
    ]
  },
  {
    "page_num": 55,
    "unit_ref": "Math Unit 4",
    "title": "Zog Sayyorasidagi Kristallarni Teng Bo'lish",
    "tense_focus": "Ko'p Xonali Sonlarni Bo'lish va Qoldiqni Topish",
    "intro": "Kristallarni teng taqsimlab, qoldiq va bo'linuvchini toping:",
    "story": "Zog sayyorasidan keltirilgan 14 400 ta qimmatbaho kristall 24 nafar fazogirga teng taqsimlandi. Har bir astronavtga <span class=\"q-blank\">___________</span> tadan kristall tegdi. 175 ta marvarid 15 ta qutiga teng solinganda, har bir qutiga 11 tadan tushib, qutidan tashqarida <span class=\"q-blank\">___________</span> ta qoldiq marvarid qoldi. Noma'lum bo'linuvchi x : 20 = 7 (qoldiq 5) bo'lsa, x ning qiymati <span class=\"q-blank\">___________</span> ga teng. 81 000 : 900 ifodasining qiymati esa <span class=\"q-blank\">___________</span> bo'ladi.",
    "answers": [
      "600",
      "10",
      "145",
      "90"
    ]
  },
  {
    "page_num": 56,
    "unit_ref": "Math Unit 5",
    "title": "Al-Xorazmiy Laboratoriyasidagi Qavsli Formulalar",
    "tense_focus": "Amallar Tartibi (PEMDAS) va Murakkab Qavsli Tenglamalar",
    "intro": "Amallar tartibiga rioya qilib laboratoriya tenglamalarini yeching:",
    "story": "Al-Xorazmiy laboratoriyasida tajriba ifodasi berildi: 400 - (120 + 30 * 4) : 6. Qavs ichidagi amallar bajarilib 240 hosil bo'ldi, 6 ga bo'linib 40 chiqdi va yakuniy natija <span class=\"q-blank\">___________</span> bo'ldi. (x + 80) : 5 = 40 tenglamada x + 80 = 200 bo'lib, x ning qiymati <span class=\"q-blank\">___________</span> ga teng. 180 : (15 - 6) + 40 * 3 ifodasining to'g'ri qiymati <span class=\"q-blank\">___________</span> chiqadi. 300 - 4 * y = 180 tenglamada 4 * y = 120 bo'lib, y = <span class=\"q-blank\">___________</span> bo'ladi.",
    "answers": [
      "360",
      "120",
      "140",
      "30"
    ]
  },
  {
    "page_num": 57,
    "unit_ref": "Math Unit 6",
    "title": "Benny va Alisherning Sehrli Hosili va Kasrlar",
    "tense_focus": "Oddiy Kasrlar (Qo'shish, Ayirish, Sonning Kasri, Kasriga Ko'ra Son)",
    "intro": "Kasrlar qoidasidan foydalanib bog' hosilini aniq hisoblang:",
    "story": "Benny va Alisher bog'dan jami 240 kg shirin meva terishdi. Jami mevaning 3/8 qismi olma bo'lib, terilgan olmalar miqdori <span class=\"q-blank\">___________</span> kg ni tashkil etdi. Qolgan 150 kg mevaning 2/5 qismi nok bo'lib, uning og'irligi <span class=\"q-blank\">___________</span> kg bo'ldi. Omborda qolgan mevalar shaftoli bo'lib, shaftolilar miqdori <span class=\"q-blank\">___________</span> kg bo'ldi. Do'stlar hosilning 3/7 va 2/7 qismini quritishga qo'yishdi, jami quritilgan mevalar <span class=\"q-blank\">___________</span> qismni tashkil qildi. Idishdagi meva sharbatining 5/9 qismi ichildi, idishda sharbatning <span class=\"q-blank\">___________</span> qismi qoldi. Bir qop yong'oqning 3/4 qismi 45 kg bo'lsa, butun qopdagi yong'oq <span class=\"q-blank\">___________</span> kg tosh bosadi!",
    "answers": [
      "90",
      "60",
      "90",
      "5/7",
      "4/9",
      "60"
    ]
  },
  {
    "page_num": 58,
    "unit_ref": "Math Unit 7",
    "title": "Chimyon Tog' Ekspeditsiyasidagi O'lchovlar",
    "tense_focus": "Kattaliklar (Massa, Uzunlik, Vaqt va Sig'im Birliklari)",
    "intro": "Murakkab o'lchov birliklarini eng kichik birlikka aylantiring:",
    "story": "Qutqaruv guruhi tog' lageriga yo'l oldi. Vertolyotdagi 5 t 4 sentner 60 kg yuk jami <span class=\"q-blank\">___________</span> kg bo'ldi. Cho'qqigacha bo'lgan 4 km 80 m masofa <span class=\"q-blank\">___________</span> metrga teng. Ekspeditsiyada sarflangan 4 soat 45 minut vaqt jami <span class=\"q-blank\">___________</span> minutni tashkil etdi. Barcha idishlardagi 5 litr 350 ml buloq suvi <span class=\"q-blank\">___________</span> ml hajmga ega bo'ldi.",
    "answers": [
      "5460",
      "4080",
      "285",
      "5350"
    ]
  },
  {
    "page_num": 59,
    "unit_ref": "Math Unit 8",
    "title": "Qadimiy Sharq Me'morchiligidagi Burchaklar",
    "tense_focus": "Geometrik Burchaklar (Graduslar, Uchburchak Ichki Burchaklari)",
    "intro": "Chizmadagi geometrik burchaklar gradusini hisoblang:",
    "story": "Madrasa ravoqlarini loyihalashda me'morlar burchaklarni o'lchashdi: To'g'ri burchakning gradus o'lchovi <span class=\"q-blank\">___________</span> gradus bo'ladi. Yoyiq burchak esa <span class=\"q-blank\">___________</span> gradusga teng. Chizmadagi uchburchakning ikki burchagi 45 va 65 gradus bo'lsa, uchinchi burchagi <span class=\"q-blank\">___________</span> gradus chiqadi. 60 gradusli burchak to'g'ri burchakdan kichik bo'lgani uchun <span class=\"q-blank\">___________</span> burchak deyiladi. 110 gradusli burchak esa 90 dan katta bo'lgani uchun <span class=\"q-blank\">___________</span> burchak deb ataladi.",
    "answers": [
      "90",
      "180",
      "70",
      "o'tkir",
      "o'tmas"
    ]
  },
  {
    "page_num": 60,
    "unit_ref": "Math Unit 9",
    "title": "Sehrli Bog' Maydoni, Tomoni va Devorlari",
    "tense_focus": "Perimetr va Yuza (Kvadrat va To'g'ri To'rtburchakning Teskari Masalalari)",
    "intro": "Perimetr va yuzani hisoblab bo'sh joylarni to'ldiring:",
    "story": "Kvadrat shaklidagi gulzorning perimetri 60 metrga teng. Uning bir tomoni 15 metr bo'lib, yuzi <span class=\"q-blank\">___________</span> m2 ni tashkil qiladi. To'g'ri to'rtburchak shaklidagi bog'ning yuzi 96 m2, bo'yi 12 metr bo'lsa, uning eni <span class=\"q-blank\">___________</span> metr bo'ladi. Bo'yi 12 m va eni 8 m bo'lgan ushbu to'rtburchakning perimetri <span class=\"q-blank\">___________</span> metrga teng. Tomoni 8 cm bo'lgan kvadratning perimetri esa <span class=\"q-blank\">___________</span> cm bo'ladi.",
    "answers": [
      "225",
      "8",
      "40",
      "32"
    ]
  },
  {
    "page_num": 61,
    "unit_ref": "Math Unit 10",
    "title": "'Afrosiyob' Tezyurar Poyezdi va Uchrashuv Harakati",
    "tense_focus": "Harakatga Doir Masalalar (Uchrashuv, Quvib Yetish va Oqim)",
    "intro": "Tezlik, vaqt va masofani harakat formulalari orqali hisoblang:",
    "story": "Toshkent va Samarqand orasidagi 300 km masofani 'Afrosiyob' poyezdi 2 soatda bosib o'tdi; poyezd tezligi <span class=\"q-blank\">___________</span> km/soat bo'ldi. Qarama-qarshi yo'nalishda chiqqan ikki poyezd tezliklari 70 km/soat va 80 km/soat bo'lib, ular orasidagi masofa 450 km bo'lsa, ular <span class=\"q-blank\">___________</span> soatda uchrashadi. Tezligi 90 km/soat bo'lgan yengil mashina 60 km/soat tezlikdagi yuk mashinasidan 60 km orqada bo'lsa, uni <span class=\"q-blank\">___________</span> soatda quvib yetadi. Kater tezligi 20 km/soat, daryo oqimi 4 km/soat bo'lsa, uning oqim bo'ylab tezligi <span class=\"q-blank\">___________</span> km/soat bo'ladi.",
    "answers": [
      "150",
      "3",
      "2",
      "24"
    ]
  },
  {
    "page_num": 62,
    "unit_ref": "Math Unit 11",
    "title": "Toshkent Robototexnika Zavodidagi Mehnat Unumi",
    "tense_focus": "Ish Unumi va Birgalikda Ishlash Masalalari",
    "intro": "Ish unumi formulalaridan foydalanib bo'sh joylarni to'ldiring:",
    "story": "Zavodda 1-robot soatiga 15 ta, 2-robot 10 ta detal yig'adi. Ikkala robot birgalikda 1 soatda <span class=\"q-blank\">___________</span> ta detal yig'adi. Ular 150 ta detalni birgalikda <span class=\"q-blank\">___________</span> soatda tayyorlab bo'lishadi. Tajribali usta 8 soatda 96 ta buyum yasasa, uning bir soatlik ish unumi <span class=\"q-blank\">___________</span> ta bo'ladi. 5 nafar ishchi 2 kunda 80 ta stul tayyorlasa, bir kunda jami <span class=\"q-blank\">___________</span> ta stul yasaladi.",
    "answers": [
      "25",
      "6",
      "12",
      "40"
    ]
  },
  {
    "page_num": 63,
    "unit_ref": "Math Unit 12",
    "title": "Bolalar Supermarketidagi Oqilona Xaridlar",
    "tense_focus": "Narx, Miqdor, Qiymat, Foyda va Kasrli Baholar",
    "intro": "Xaridlar qiymati va narxlarni hisoblab bo'sh joylarni to'ldiring:",
    "story": "O'quvchi 5 ta kitob va 2 ta ruchka uchun 46 000 so'm to'ladi. Bitta kitob 8 000 so'm bo'lsa (5 tasi 40 000 so'm), bitta ruchka narxi <span class=\"q-blank\">___________</span> so'm bo'ladi. Do'konchi mahsulotni 50 000 so'mga olib 70 000 so'mga sotdi; uning foydasi <span class=\"q-blank\">___________</span> so'm bo'ldi. 1 kg asal 80 000 so'm bo'lsa, uning 3/4 kg miqdori <span class=\"q-blank\">___________</span> so'm turadi. 6 ta bir xil daftar 18 000 so'm tursa, 10 ta shunday daftar <span class=\"q-blank\">___________</span> so'm bo'ladi.",
    "answers": [
      "3000",
      "20000",
      "60000",
      "30000"
    ]
  },
  {
    "page_num": 64,
    "unit_ref": "Math Unit 13",
    "title": "Maktab Olimpiadasi Natijalari va O'rtacha Ball",
    "tense_focus": "Arifmetik O'rtacha Qiymat va Statistik Tahlil",
    "intro": "Arifmetik o'rtacha formulasi bo'yicha hisoblang:",
    "story": "Olimpiadada Alisher 4 ta tur bo'yicha 90, 85, 95 va 90 ball to'pladi; uning arifmetik o'rtacha balli <span class=\"q-blank\">___________</span> bo'ldi. To'rtta sonning o'rtachasi 25 ga teng bo'lsa, ularning umumiy yig'indisi <span class=\"q-blank\">___________</span> bo'ladi. Kutubxonada 3 kunda 100, 150 va 200 ta kitob o'qildi; kunlik o'rtacha o'qilgan kitoblar soni <span class=\"q-blank\">___________</span> ta bo'ldi. 20, 40 va 60 sonlarining arifmetik o'rtachasi <span class=\"q-blank\">___________</span> ga teng chiqadi.",
    "answers": [
      "90",
      "100",
      "150",
      "40"
    ]
  },
  {
    "page_num": 65,
    "unit_ref": "Math Unit 14",
    "title": "Boburning Sehrli Jumboqlari (Bosh-Oyoqlar va Oraliqlar)",
    "tense_focus": "Olimpiada Mantiqiy Masalalari (Tovuq-Quyon, Oraliqlar, Arralash)",
    "intro": "Al-Xorazmiy uslubida mantiqiy hisoblab bo'sh joylarni to'ldiring:",
    "story": "Boburning bog'ida tovuqlar va quyonlar bor; jami 20 ta bosh va 56 ta oyoq bor. U yerda <span class=\"q-blank\">___________</span> ta quyon va <span class=\"q-blank\">___________</span> ta tovuq bor. O'ylangan sonni 4 ga ko'paytirib, 30 ayrilsa 50 hosil bo'ldi; o'ylangan son <span class=\"q-blank\">___________</span> bo'lgan. 80 metrli yo'l bo'ylab har 10 metrda bittadan archa ekildi; jami <span class=\"q-blank\">___________</span> ta archa ekilgan. 12 metrli arqonni 3 metrli teng bo'laklarga ajratish uchun uni <span class=\"q-blank\">___________</span> marta kesish kerak bo'ladi.",
    "answers": [
      "8",
      "12",
      "20",
      "9",
      "3"
    ]
  },
  {
    "page_num": 66,
    "unit_ref": "Math Units 6 & 10",
    "title": "Koinot Akademiyasining Kasrlar va Tezlik Sinovi",
    "tense_focus": "Kasrlar va Harakat Uyg'unligi (Olimpiada Bosqichi)",
    "intro": "Kasrlar va harakat formulalarini birlashtirib masalalarni yeching:",
    "story": "Koinot kemasi 600 km masofaning 3/5 qismini bosib o'tdi, ya'ni kema <span class=\"q-blank\">___________</span> km masofa yurdi. Yakuniy manzilgacha qolgan masofa <span class=\"q-blank\">___________</span> km ni tashkil etdi. Kema qolgan masofani 2 soatda bosib o'tishi uchun uning tezligi <span class=\"q-blank\">___________</span> km/soat bo'lishi kerak. 1 butun yoqilg'i bakidan 5/11 qismi sarflangach, bakda <span class=\"q-blank\">___________</span> qism yoqilg'i qoldi. Agar noma'lum sonning 2/7 qismi 14 ga teng bo'lsa, butun sonning o'zi <span class=\"q-blank\">___________</span> bo'ladi.",
    "answers": [
      "360",
      "240",
      "120",
      "6/11",
      "49"
    ]
  },
  {
    "page_num": 67,
    "unit_ref": "Math Units 5 & 6",
    "title": "Kiber Laboratoriya 2099: Formulalar va Kasrlar",
    "tense_focus": "Murakkab Tenglamalar va Kasrlar Ustida Amallar",
    "intro": "Qavsli tenglamalar va kasr amallarini yeching:",
    "story": "Kiber laboratoriyada (x - 50) * 6 = 300 tenglama yechildi va x = <span class=\"q-blank\">___________</span> chiqdi. Laboratoriyadagi 360 litr eritmaning 5/9 qismi reaksiyaga ishlatildi, ya'ni <span class=\"q-blank\">___________</span> litr sarflandi. Idishda <span class=\"q-blank\">___________</span> litr eritma qoldi. 4/15 + 7/15 amali bajarilganda <span class=\"q-blank\">___________</span> hosil bo'ladi. Agar noma'lum sonning 3/8 qismi 24 bo'lsa, butun son <span class=\"q-blank\">___________</span> ga teng bo'ladi.",
    "answers": [
      "100",
      "200",
      "160",
      "11/15",
      "64"
    ]
  },
  {
    "page_num": 68,
    "unit_ref": "Final Mastery",
    "title": "Al-Xorazmiy Nomidagi 4-Sinf Grand Final Imtihoni",
    "tense_focus": "Barcha 14 Mavzuning Jamlangan Sinovi (Prezident Maktabi Standarti)",
    "intro": "Barcha bilimlaringizni ishga solib final savollariga to'g'ri javob bering:",
    "story": "Final imtihonida barcha bo'limlardan sinov berildi: 500 000 + 40 000 + 700 + 8 xona qo'shiluvchilari yig'indisi <span class=\"q-blank\">___________</span> sonini hosil qiladi. 1 000 000 - 350 000 ayirmani hisoblasak <span class=\"q-blank\">___________</span> bo'ladi. 250 sonining 4/5 qismi <span class=\"q-blank\">___________</span> ga teng. 1 butundan 4/9 ayrilsa <span class=\"q-blank\">___________</span> qoladi. Perimetri 36 cm bo'lgan kvadratning yuzi <span class=\"q-blank\">___________</span> cm2 bo'ladi. Ikki shahar orasidagi 300 km masofani 60 km/soat tezlikdagi mashina <span class=\"q-blank\">___________</span> soatda bosib o'tadi.",
    "answers": [
      "540708",
      "650000",
      "200",
      "5/9",
      "81",
      "5"
    ]
  },
  {
    "page_num": 69,
    "title": "MATEMATIK MASALALAR JAVOBLAR KALITI",
    "subtitle": "52-68 betlardagi barcha 17 ta sarguzasht masalalarining to'liq yechimlar kaliti",
    "tag": "Javoblar Kaliti • 4-Sinf",
    "is_answers": true,
    "answers_list": [
      [
        "Sahifa 52: Sehrli Maktab Kutubxonasi",
        "350450, 350000, 999999, 6"
      ],
      [
        "Sahifa 53: Samarqand Karvoni Tangalari",
        "400000, 674500, 75000, 51500"
      ],
      [
        "Sahifa 54: Xiva Gilamchilik Ustaxonasi",
        "14400, 360000, 1100, 8000"
      ],
      [
        "Sahifa 55: Zog Sayyorasidagi Kristallari",
        "600, 10, 145, 90"
      ],
      [
        "Sahifa 56: Al-Xorazmiy Laboratoriyasi",
        "360, 120, 140, 30"
      ],
      [
        "Sahifa 57: Sehrli Bog' Hosili va Kasrlar",
        "90, 60, 90, 5/7, 4/9, 60"
      ],
      [
        "Sahifa 58: Chimyon Tog' Ekspeditsiyasi",
        "5460, 4080, 285, 5350"
      ],
      [
        "Sahifa 59: Sharq Me'morchiligidagi Burchaklar",
        "90, 180, 70, o'tkir, o'tmas"
      ],
      [
        "Sahifa 60: Sehrli Bog' Maydoni va Devorlari",
        "225, 8, 40, 32"
      ],
      [
        "Sahifa 61: 'Afrosiyob' Tezyurar Poyezdi",
        "150, 3, 2, 24"
      ],
      [
        "Sahifa 62: Robototexnika Zavodi Unumi",
        "25, 6, 12, 40"
      ],
      [
        "Sahifa 63: Bolalar Supermarketidagi Xarid",
        "3000, 20000, 60000, 30000"
      ],
      [
        "Sahifa 64: Maktab Olimpiadasi Statistikasi",
        "90, 100, 150, 40"
      ],
      [
        "Sahifa 65: Boburning Jumboqlari (Mantiq)",
        "8, 12, 20, 9, 3"
      ],
      [
        "Sahifa 66: Kasrlar va Harakat Uyg'unligi",
        "360, 240, 120, 6/11, 49"
      ],
      [
        "Sahifa 67: Kiber Laboratoriya 2099",
        "100, 200, 160, 11/15, 64"
      ],
      [
        "Sahifa 68: Grand Final Imtihoni",
        "540708, 650000, 200, 5/9, 81, 5"
      ]
    ]
  },
  {
    "page_num": 70,
    "title": "AL-XORAZMIY GRAND MASTER DIPLOM",
    "subtitle": "4-Sinf Matematika va Mantiq Kursini A'lo Baholarga Tamomlaganlik To'g'risida",
    "tag": "Rasmiy Diplom • 4-Sinf",
    "is_cert": true
  }
]
};
