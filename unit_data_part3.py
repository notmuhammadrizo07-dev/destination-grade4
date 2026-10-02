"""
unit_data_part3.py - Units 12 to 14, Diagnostic Starter Test, Final Test, Appendix, and Answer Key
"""

STARTER_TEST_DATA = {
    "title": "Welcome & Diagnostic Starter Test",
    "subtitle": "Keling, boshlang'ich bilimingizni sinab ko'ramiz!",
    "tag": "Diagnostic Test A1",
    "instructions": "Ushbu 15 ta qiziqarli test savollariga javob bering va o'z bilim darajangizni aniqlang! Har bir to'g'ri javob uchun 1 ball.",
    "questions": [
        "1. I __________ a student in Grade 4. (A) is  (B) am  (C) are",
        "2. Look at Benny! He __________ very happy today. (A) is  (B) are  (C) am",
        "3. My cat __________ fish every morning. (A) eat  (B) eats  (C) eating",
        "4. We __________ play football in the rain. (A) doesn't  (B) don't  (C) aren't",
        "5. Listen! The teacher __________ English now. (A) speaks  (B) is speaking  (C) spoke",
        "6. __________ you like sweet apples? (A) Does  (B) Do  (C) Is",
        "7. Where __________ you yesterday afternoon? (A) was  (B) were  (C) are",
        "8. Yesterday, we __________ to the big zoo. (A) go  (B) went  (C) goes",
        "9. She __________ watch cartoons last night. (A) didn't  (B) don't  (C) doesn't",
        "10. He __________ soccer when I saw him. (A) played  (B) was playing  (C) plays",
        "11. Tomorrow, I __________ my grandmother. (A) visited  (B) am going to visit  (C) visits",
        "12. I think robots __________ humans in 2050. (A) will help  (B) helped  (C) helps",
        "13. Have you ever __________ an elephant? (A) saw  (B) see  (C) seen",
        "14. 'clever' so'zining sinonimi qaysi? (A) tiny  (B) smart  (C) loud",
        "15. 'delicious' so'zining sinonimi qaysi? (A) tasty  (B) fast  (C) silent"
    ],
    "rating_chart": [
        ["13 - 15 ball", "Super Star! Siz ajoyib bilasiz, kitob sizni yanada kuchli qiladi!"],
        ["9 - 12 ball", "Yaxshi natija! Qoidalar va yangi lug'atlarni mustahkamlash vaqti!"],
        ["0 - 8 ball", "Xavotir olmang! Ushbu kitob bilan barcha mavzularni 100% o'rganasiz!"]
    ]
}

UNITS_PART3 = [
    {
        "unit_num": 12,
        "title": "Future: 'be going to' (Plans & Intentions)",
        "subtitle": "Kelasi zamon: Oldindan rejalashtirilgan ish-harakatlar va niyatlar",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "<strong>'Be going to' (am / is / are going to + V1)</strong> kelajakda amalga oshirish <strong>oldindan rejalashtirilgan</strong> ishlar, qarorlar va niyatlar haqida gapirganda ishlatiladi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor shakli (+ / -)",
                    "headers": ["Ega (Subject)", "To Be shakli", "going to + V1", "Misol (Example)"],
                    "rows": [
                        ["I", "am / am not", "going to travel", "I am going to travel to Bukhara this summer."],
                        ["He / She / It", "is / isn't", "going to build", "He is going to build a birdhouse tomorrow."],
                        ["We / You / They", "are / aren't", "going to visit", "We are going to visit the new museum."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va Qisqa javoblar (?)",
                    "headers": ["Am/Is/Are", "Ega", "going to + V1?", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Are", "you", "going to learn French?", "Yes, I am. / No, I'm not."],
                        ["Is", "she", "going to bake a cake?", "Yes, she is. / No, she isn't."],
                        ["What are", "they", "going to do tomorrow?", "They are going to plant green trees."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> 'going to' dan keyin fe'l har doim <strong>asosiy 1-shaklda (V1)</strong> keladi! <code>going to visiting</code> yoki <code>going to visited</code> deb aytish XATO! Doim: <code>going to visit!</code>",
            "time_words": "<strong>Signal so'zlar:</strong> tomorrow (ertaga), next week (keyingi hafta), this weekend (bu dam olish kunlari), soon (tez orada)."
        },
        "vocab": [
            {"num": 1, "word": "plan", "uz": "rejalashtirmoq", "pos": "verb", "synonym": "intend", "example": "I am going to plan my birthday party tomorrow.", "meaning": "rejaga kiritmoq"},
            {"num": 2, "word": "travel", "uz": "sayohat qilmoq", "pos": "verb", "synonym": "journey", "example": "We are going to travel to Samarkand by train.", "meaning": "safarga chiqmoq"},
            {"num": 3, "word": "visit", "uz": "ko'rgani bormoq", "pos": "verb", "synonym": "call on", "example": "She is going to visit her doctor on Friday.", "meaning": "tashrif buyurmoq"},
            {"num": 4, "word": "buy", "uz": "sotib olmoq", "pos": "verb", "synonym": "purchase", "example": "Father is going to buy a new laptop for me.", "meaning": "pul to'lab olmoq"},
            {"num": 5, "word": "build", "uz": "qurmoq", "pos": "verb", "synonym": "construct", "example": "The boys are going to build a birdhouse.", "meaning": "bino qilmoq"},
            {"num": 6, "word": "learn", "uz": "o'rganmoq", "pos": "verb", "synonym": "master", "example": "I am going to learn how to swim this holiday.", "meaning": "egallamoq"},
            {"num": 7, "word": "invite", "uz": "taklif qilmoq", "pos": "verb", "synonym": "ask over", "example": "He is going to invite ten friends to his home.", "meaning": "chaqirmoq"},
            {"num": 8, "word": "paint", "uz": "bo'yamoq", "pos": "verb", "synonym": "decorate", "example": "We are going to paint our classroom walls.", "meaning": "rang bermoq"},
            {"num": 9, "word": "plant", "uz": "ekmoq", "pos": "verb", "synonym": "grow", "example": "Students are going to plant roses in the garden.", "meaning": "yerga ko'chat qadamoq"},
            {"num": 10, "word": "cook", "uz": "pishirmoq", "pos": "verb", "synonym": "make food", "example": "Mother is going to cook delicious sweets tonight.", "meaning": "taom tayyorlamoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Circle the correct form",
            "inst": "To'g'ri 'be going to' shaklini tanlang.",
            "items": [
                "1. I (am going to / is going to) learn French next month.",
                "2. They (is going to / are going to) travel to Bukhara by train.",
                "3. Timur (isn't going to / aren't going to) buy the noisy toy.",
                "4. (Are you / Is you) going to invite Benny to the party?",
                "5. We (are going to / am going to) paint our bedroom blue.",
                "6. She (is going to / are going to) plant yellow flowers tomorrow.",
                "7. What (are they / is they) going to cook for dinner?",
                "8. He (is going to / are going to) build a wooden treehouse."
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete with 'be going to' + verb",
            "inst": "Qavsdagi fe'llardan 'be going to + V1' yasang.",
            "items": [
                "1. Tomorrow, I __________ (visit) my grandparents in the village.",
                "2. Malika __________ (learn) how to bake chocolate cookies.",
                "3. They __________ (build) a big snowman if it snows.",
                "4. We __________ (not / travel) by bus; we will take a fast train.",
                "5. __________ you __________ (invite) your teacher to the concert?",
                "6. Father __________ (buy) a beautiful red bicycle for me.",
                "7. The boys __________ (play) chess after doing homework.",
                "8. She __________ (paint) a picture of high snowy mountains."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Sentence Transformer (Rejalarga aylantiring)",
            "inst": "Gaplarni 'I am going to ...' yoki 'He is going to ...' bilan reja shaklida yozing.",
            "items": [
                "1. I visit the doctor on Friday. -> I am going to visit the doctor on Friday.",
                "2. She learns Spanish next year. -> She is ________________________________________",
                "3. We plant green trees tomorrow. -> We are ________________________________________",
                "4. He buys a new storybook. -> He is ________________________________________",
                "5. They paint the garden fence. -> They are ________________________________________",
                "6. I cook dinner for my family. -> I am ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Challenge",
            "inst": "So'zlarni mos sinonimlari bilan tutashtiring.",
            "items": [
                "1. build   [ ___ ]       A. purchase",
                "2. buy     [ ___ ]       B. construct",
                "3. invite  [ ___ ]       C. master",
                "4. learn   [ ___ ]       D. ask over",
                "5. plan    [ ___ ]       E. intend"
            ]
        },
        "ex_e": {
            "title": "Exercise E: My Dream Summer Holiday (Orzudagi ta'til rejalari)",
            "inst": "Bennyning yozgi ta'tildagi rejalarini o'qing va savollarga javob bering!",
            "story": "Benny: 'This summer, I am going to travel to the high mountains. I am going to plant ten apple trees. I am also going to learn how to ride a horse!'<br>1. Where is Benny going to travel? -> To the ____________________.<br>2. What is he going to plant? -> Ten ____________________.<br>3. 'construct' so'zining sinonimi nima? -> ____________________."
        }
    },
    {
        "unit_num": 13,
        "title": "Future Simple: 'will' and 'won't'",
        "subtitle": "Kelasi oddiy zamon: Kelajak bashoratlari, va'dalar va kutilmagan qarorlar",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "<strong>Future Simple (will + V1)</strong> kelajak haqidagi <strong>bashoratlar (predictions)</strong>, <strong>va'dalar (promises)</strong> va so'zlashuv vaqtida qilingan <strong>kutilmagan qarorlar</strong> uchun ishlatiladi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor shakli (+ / -)",
                    "headers": ["Ega (Subject)", "Yordamchi fe'l", "Asosiy fe'l", "Misol (Example)"],
                    "rows": [
                        ["Barcha shaxslar", "will ('ll)", "V1", "Robots will help people in the future."],
                        ["Barcha shaxslar", "will not (won't)", "V1", "Cars won't use petrol in 2050."],
                        ["Qaror / Va'da", "I'll", "help you", "I promise I will help you with your bag."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va Qisqa javoblar (?)",
                    "headers": ["Will", "Ega (Subject)", "Fe'l (V1)?", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Will", "people", "live on the Moon?", "Yes, they will. / No, they won't."],
                        ["Will", "you", "pass the test?", "Yes, I will! (Albatta!)"],
                        ["What will", "you", "be in the future?", "I think I will be a doctor."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Ko'pincha <code>I think...</code> (O'ylaymanki), <code>I hope...</code> (Umid qilamanki), <code>I promise...</code> (Va'da beramanki) iboralaridan keyin <strong>will</strong> ishlatiladi!",
            "time_words": "<strong>Signal so'zlar:</strong> tomorrow (ertaga), in the future (kelajakda), in 2050 (2050 yilda), one day (kunlarning birida)."
        },
        "vocab": [
            {"num": 1, "word": "hope", "uz": "umid qilmoq", "pos": "verb", "synonym": "trust", "example": "I hope tomorrow will be sunny and warm.", "meaning": "ezgu niyatda bo'lmoq"},
            {"num": 2, "word": "think", "uz": "o'ylamoq", "pos": "verb", "synonym": "believe", "example": "I think robots will teach lessons in future.", "meaning": "fikr yuritmoq"},
            {"num": 3, "word": "promise", "uz": "va'da bermoq", "pos": "verb", "synonym": "pledge", "example": "I promise I will help you with English.", "meaning": "so'z bermoq"},
            {"num": 4, "word": "predict", "uz": "bashorat qilmoq", "pos": "verb", "synonym": "foresee", "example": "Scientists predict cars will fly in the sky.", "meaning": "oldindan aytmoq"},
            {"num": 5, "word": "win", "uz": "g'alaba qozonmoq", "pos": "verb", "synonym": "conquer", "example": "Our school team will win the football match!", "meaning": "yutuqqa erishmoq"},
            {"num": 6, "word": "pass", "uz": "o'tmoq, topshirmoq", "pos": "verb", "synonym": "succeed in", "example": "You will pass your English test easily!", "meaning": "muvaffaqiyatli topshirmoq"},
            {"num": 7, "word": "help", "uz": "yordam bermoq", "pos": "verb", "synonym": "support", "example": "Don't cry! I will carry that heavy box for you.", "meaning": "ko'maklashmoq"},
            {"num": 8, "word": "be", "uz": "bo'lmoq", "pos": "verb", "synonym": "become", "example": "I think you will be a famous doctor one day.", "meaning": "aytganidek bo'lib yetishmoq"},
            {"num": 9, "word": "fly", "uz": "uchmoq", "pos": "verb", "synonym": "soar", "example": "Spaceships will fly to distant planets.", "meaning": "fazoda parvoz qilmoq"},
            {"num": 10, "word": "change", "uz": "o'zgarmoq", "pos": "verb", "synonym": "transform", "example": "Technology will change our classrooms.", "meaning": "boshqacha qiyofaga kirmoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose will or won't",
            "inst": "Ma'nosiga qarab will yoki won't tanlang.",
            "items": [
                "1. I think it (will / won't) be sunny tomorrow, so take your sunglasses.",
                "2. Don't worry! I (will / won't) forget your birthday.",
                "3. In the year 2050, people (will / won't) have flying cars.",
                "4. If you study hard, you (will / won't) pass the English exam.",
                "5. It's late; the shops (will / won't) be closed now.",
                "6. I promise I (will / won't) tell anyone your secret.",
                "7. (Will / Won't) humans live on Mars one day?",
                "8. Robots (will / won't) eat bread and milk; they need electricity!"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete with will + verb in brackets",
            "inst": "Qavsdagi fe'llardan 'will + V1' yasang.",
            "items": [
                "1. I hope our team __________ (win) the championship cup.",
                "2. Tomorrow, the weather __________ (be) warm and pleasant.",
                "3. Don't carry that alone; I __________ (help) you!",
                "4. Scientists believe spaceships __________ (fly) to distant stars.",
                "5. Modern computers __________ (change) the way we learn.",
                "6. I promise I __________ (call) you when I arrive.",
                "7. She thinks she __________ (become) an astronaut.",
                "8. __________ you __________ (come) to my birthday party?"
            ]
        },
        "ex_c": {
            "title": "Exercise C: Instant Decisions & Promises (Tezkor qarorlar)",
            "inst": "Vaziyatga qarab 'I will ...' bilan tezkor javob yozing.",
            "items": [
                "1. It is very cold in the room. -> I will close the window.",
                "2. The doorbell is ringing. -> I will ________________________________________",
                "3. I am very hungry. -> I will ________________________________________",
                "4. Your bag is very heavy. -> I will ________________________________________",
                "5. The phone is ringing. -> I will ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Match",
            "inst": "So'zlarni ularning ma'nodoshi (sinonimi) bilan tutashtiring.",
            "items": [
                "1. predict [ ___ ]       A. pledge",
                "2. promise [ ___ ]       B. foresee",
                "3. win     [ ___ ]       C. believe",
                "4. think   [ ___ ]       D. conquer",
                "5. change  [ ___ ]       E. transform"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Year 2050 Robot Predictions (Kelajak bashoratlari)",
            "inst": "2050-yil haqidagi bashoratlarni o'qing va savollarga javob bering!",
            "story": "In 2050, robots <b>will clean</b> our houses. Cars <b>will fly</b> above tall buildings. People <b>will travel</b> to the Moon for weekend holidays!<br>1. What will robots do? -> They will ____________________.<br>2. Where will cars fly? -> Above ____________________.<br>3. 'believe' so'zining sinonimi nima? -> ____________________."
        }
    },
    {
        "unit_num": 14,
        "title": "Present Perfect Intro: Life Experiences",
        "subtitle": "Hozirgi tugallangan zamon: Hayotiy tajribalar (have / has + V3)",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "<strong>Present Perfect (have / has + V3)</strong> insonning hayotida <strong>hech bo'lmaganda bir marta</strong> amalga oshirgan (yoki oshirmagan) tajribalari haqida gapirganda ishlatiladi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor formulasi (+ / -)",
                    "headers": ["Ega (Subject)", "Have / Has", "V3 (Participle)", "Misol (Example)"],
                    "rows": [
                        ["I / We / You / They", "have ('ve) / haven't", "seen / visited", "I have seen the Eiffel Tower in pictures."],
                        ["He / She / It", "has ('s) / hasn't", "eaten / flown", "She has eaten Italian pizza many times."],
                        ["Inkor tajriba", "have never", "climbed", "I have never climbed high mountains."]
                    ]
                },
                {
                    "title": "2. 'Ever' bilan so'roq va Qisqa javoblar (?)",
                    "headers": ["Have / Has", "Ega + ever", "V3?", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Have", "you ever", "visited a dinosaur museum?", "Yes, I have! / No, I haven't."],
                        ["Has", "he ever", "flown in a helicopter?", "Yes, he has. / No, he hasn't."],
                        ["Has", "she ever", "swum with dolphins?", "No, she hasn't, but she wants to!"]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Bu zamonda fe'lning <strong>3-shakli (V3 - Past Participle)</strong> ishlatiladi! To'g'ri fe'llarda -ed qo'shiladi (visited), noto'g'ri fe'llarda esa 3-ustun yod olinadi: <code>see -> saw -> seen!</code>",
            "time_words": "<strong>Sehrli so'zlar:</strong> ever (hech hayotingizda), never (hech qachon...-maganman), already (allaqachon)."
        },
        "vocab": [
            {"num": 1, "word": "seen (see)", "uz": "ko'rgan", "pos": "verb", "synonym": "spotted", "example": "I have seen a shooting star at night.", "meaning": "hayotida ko'zdan kechirgan"},
            {"num": 2, "word": "visited (visit)", "uz": "tashrif buyurgan", "pos": "verb", "synonym": "toured", "example": "Have you ever visited ancient Khiva?", "meaning": "borib ko'rgan"},
            {"num": 3, "word": "eaten (eat)", "uz": "yegan", "pos": "verb", "synonym": "tasted", "example": "He has eaten spicy Korean ramen.", "meaning": "tatib ko'rgan"},
            {"num": 4, "word": "read (read)", "uz": "o'qigan", "pos": "verb", "synonym": "finished", "example": "I have read five English adventure books.", "meaning": "mutolaa qilib chiqqan"},
            {"num": 5, "word": "flown (fly)", "uz": "uchgan", "pos": "verb", "synonym": "traveled by air", "example": "Has your sister ever flown in an airplane?", "meaning": "samolyotda uchgan"},
            {"num": 6, "word": "met (meet)", "uz": "uchratgan", "pos": "verb", "synonym": "encountered", "example": "We have met a real space astronaut.", "meaning": "yuzma-yuz ko'rishgan"},
            {"num": 7, "word": "climbed (climb)", "uz": "chiqqan", "pos": "verb", "synonym": "scaled", "example": "He has climbed the Chimgan mountains.", "meaning": "cho'qqiga ko'tarilgan"},
            {"num": 8, "word": "swum (swim)", "uz": "suzgan", "pos": "verb", "synonym": "bathed", "example": "Have you ever swum in the warm ocean?", "meaning": "suvda suzib ko'rgan"},
            {"num": 9, "word": "ridden (ride)", "uz": "mingan", "pos": "verb", "synonym": "mounted", "example": "She has ridden a white horse in village.", "meaning": "ot yoki tuya ustida yurgan"},
            {"num": 10, "word": "won (win)", "uz": "yutgan", "pos": "verb", "synonym": "gained", "example": "Our class has won the first prize!", "meaning": "g'alabaga erishgan"}
        ],
        "ex_a": {
            "title": "Exercise A: Circle have, has, haven't, or hasn't",
            "inst": "Ega va zamonga mos to'g'ri shaklni tanlang.",
            "items": [
                "1. I (have / has) seen a huge blue whale in a video.",
                "2. (Have / Has) you ever visited Samarkand?",
                "3. My brother (haven't / hasn't) eaten sushi before.",
                "4. We (have / has) read this fairy tale twice.",
                "5. (Have / Has) she ever ridden a big camel?",
                "6. They (have / has) climbed that steep hill.",
                "7. Benny (have / has) never lost his lucky pencil.",
                "8. (Have / Has) your parents ever flown in an airplane?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Form the Present Perfect (have/has + V3)",
            "inst": "Qavsdagi fe'llarning 3-shakli (V3) bilan bo'sh o'rinlarni to'ldiring.",
            "items": [
                "1. I __________ (see) three beautiful white swans.",
                "2. Aziz __________ (visit) five different countries.",
                "3. Have you ever __________ (eat) dragon fruit?",
                "4. She __________ (never / fly) in a helicopter.",
                "5. We __________ (win) the school football championship!",
                "6. Have they ever __________ (swim) with friendly dolphins?",
                "7. Dilnoza __________ (read) all the Harry Potter books.",
                "8. He __________ (ride) a fast motorbike."
            ]
        },
        "ex_c": {
            "title": "Exercise C: 'Have you ever ...?' Creator",
            "inst": "Berilgan so'zlardan 'Have you ever + V3 ...?' savollarini tuzing.",
            "items": [
                "1. you / ever / see / a panda / Have / ? -> Have you ever seen a panda?",
                "2. you / ever / fly / in a hot air balloon / Have / ? -> ________________________________________",
                "3. you / ever / meet / a famous actor / Have / ? -> ________________________________________",
                "4. you / ever / eat / Italian pizza / Have / ? -> ________________________________________",
                "5. you / ever / climb / a tall mountain / Have / ? -> ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms & Participle Match",
            "inst": "V3 shakllariga mos ma'nodosh sinonimlarni toping.",
            "items": [
                "1. visited [ ___ ]       A. tasted",
                "2. eaten   [ ___ ]       B. toured",
                "3. seen    [ ___ ]       C. scaled",
                "4. climbed [ ___ ]       D. spotted",
                "5. won     [ ___ ]       E. gained"
            ]
        },
        "ex_e": {
            "title": "Exercise E: World Explorer Passport (Jahongashta pasporti)",
            "inst": "Kapitan Benning pasportidagi tajribalarni o'qing va javob bering!",
            "story": "Explorer Benny: 'I have traveled to 12 countries. I <b>have climbed</b> snowy mountains and I <b>have swum</b> with friendly dolphins. But I <b>have never eaten</b> octopus!'<br>1. Has Benny climbed mountains? -> Yes, he ____________________.<br>2. What has he never eaten? -> He has never eaten ____________________.<br>3. 'toured' so'zining sinonimi: ____________________."
        }
    }
]

FINAL_TEST_DATA = {
    "title": "Grand Championship Final Test: Units 1 - 14",
    "subtitle": "4-sinf ingliz tili barcha zamonlari va 140 ta oltin lug'at bo'yicha yakuniy sinov",
    "tag": "Final Exam • 25 Questions",
    "questions": [
        "1. I (am / is / are) very happy to learn English today.",
        "2. The pupils (is / are / am) in the computer room right now.",
        "3. Benny (wake / wakes / waking) up at 7 o'clock every morning.",
        "4. She (don't / doesn't / isn't) like eating cold porridge.",
        "5. (Do / Does / Is) you understand this important grammar question?",
        "6. Look! The children (run / are running / ran) across the field.",
        "7. Be quiet! The baby (sleeps / is sleeping / was sleeping) now.",
        "8. He usually plays football, but today he (reads / is reading) a book.",
        "9. Yesterday, we (was / were / are) at the history museum.",
        "10. Where (was / were / did) you two hours ago?",
        "11. They (visited / visitted / visit) their grandparents last Saturday.",
        "12. The red bus (stoped / stopped / stops) at the traffic lights.",
        "13. Last week, I (go / went / goed) to the grand water park.",
        "14. We (saw / seed / see) a funny brown monkey at the zoo.",
        "15. Did you (find / found / finding) the secret key under the rug?",
        "16. She didn't (buy / bought / buying) the expensive bicycle.",
        "17. At 6 PM yesterday, Timur (did / was doing / does) his homework.",
        "18. Tomorrow, we (are going to visit / visited / visits) Samarkand.",
        "19. What (are you / is you) going to cook for dinner tonight?",
        "20. I think robots (will help / helped / helps) humans in 2050.",
        "21. Don't worry, I (will carry / carried) that heavy box for you!",
        "22. (Have / Has / Did) you ever seen a real shooting star?",
        "23. She has (eat / ate / eaten) sweet Italian ice cream many times.",
        "24. 'clever' so'zining sinonimi qaysi? (A) tiny  (B) smart  (C) loud",
        "25. 'delicious' so'zining sinonimi qaysi? (A) tasty  (B) hard  (C) quick"
    ],
    "grading": "23 - 25 ball: OLTIN MEDAL (Grand Champion) | 19 - 22 ball: KUMUSH MEDAL | 15 - 18 ball: BRONZA MEDAL"
}

APPENDIX_DATA = {
    "title": "Reference Appendix: Irregular Verbs & Tense Formulas",
    "subtitle": "Noto'g'ri fe'llarning oltin jadvali va 7 ta zamon formulalar xaritasi",
    "tag": "Essential Reference Guide",
    "verbs": [
        ["be", "was / were", "been", "bo'lmoq"],
        ["begin", "began", "begun", "boshlamoq"],
        ["buy", "bought", "bought", "sotib olmoq"],
        ["come", "came", "come", "kelmoq"],
        ["do", "did", "done", "qilmoq, bajarmoq"],
        ["draw", "drew", "drawn", "rasm chizmoq"],
        ["drink", "drank", "drunk", "ichmoq"],
        ["eat", "ate", "eaten", "yemoq"],
        ["find", "found", "found", "topmoq"],
        ["fly", "flew", "flown", "uchmoq"],
        ["forget", "forgot", "forgotten", "unutmoq"],
        ["give", "gave", "given", "bermoq"],
        ["go", "went", "gone", "bormoq"],
        ["have", "had", "had", "ega bo'lmoq"],
        ["know", "knew", "known", "bilmoq"],
        ["make", "made", "made", "yasamoq, qilmoq"],
        ["meet", "met", "met", "uchratmoq"],
        ["read", "read /red/", "read /red/", "o'qimoq"],
        ["ride", "rode", "ridden", "minmoq"],
        ["run", "ran", "run", "yugurmoq"],
        ["see", "saw", "seen", "ko'rmoq"],
        ["sing", "sang", "sung", "kuylamoq"],
        ["sleep", "slept", "slept", "uxlamoq"],
        ["speak", "spoke", "spoken", "gapirmoq"],
        ["swim", "swam", "swum", "suzmoq"],
        ["take", "took", "taken", "olmoq"],
        ["tell", "told", "told", "aytmoq"],
        ["win", "won", "won", "yutmoq, yengmoq"],
        ["write", "wrote", "written", "yozmoq"]
    ],
    "formulas": [
        ["1. Present Simple", "S + V1 / V-(s/es)", "S + don't / doesn't + V1", "Do / Does + S + V1?", "every day, usually, always"],
        ["2. Present Continuous", "S + am/is/are + V-ing", "S + am not/isn't/aren't + V-ing", "Am/Is/Are + S + V-ing?", "now, at the moment, Look!"],
        ["3. Past Simple (Be)", "S + was / were", "S + wasn't / weren't", "Was / Were + S...?", "yesterday, ago, last week"],
        ["4. Past Simple (Verbs)", "S + V2 (-ed / irregular)", "S + didn't + V1", "Did + S + V1?", "yesterday, last year, in 2020"],
        ["5. Past Continuous", "S + was/were + V-ing", "S + wasn't/weren't + V-ing", "Was/Were + S + V-ing?", "at 5 PM yesterday, when"],
        ["6. Future (going to)", "S + am/is/are going to + V1", "S + isn't/aren't going to + V1", "Am/Is/Are + S + going to + V1?", "tomorrow, next week, soon"],
        ["7. Future Simple", "S + will + V1", "S + won't + V1", "Will + S + V1?", "tomorrow, in 2050, I think"],
        ["8. Present Perfect", "S + have/has + V3", "S + haven't/hasn't + V3", "Have/Has + S + V3?", "ever, never, already"]
    ]
}

ANSWER_KEY_DATA = {
    "title": "Answer Key & Certificate of Achievement",
    "subtitle": "Barcha mashqlar va testlarning to'liq javoblar kaliti",
    "tag": "Official Answers & Certificate",
    "answers": [
        "<b>Diagnostic Test:</b> 1.B 2.A 3.B 4.B 5.B 6.B 7.B 8.B 9.A 10.B 11.B 12.A 13.C 14.B 15.A",
        "<b>Unit 1:</b> Ex A: 1.are 2.am 3.isn't 4.Are 5.is 6.are 7.isn't 8.Are | Ex B: 1.am 2.is 3.aren't 4.Is 5.isn't 6.are 7.are 8.Are | Ex D: 1.C 2.A 3.E 4.B 5.D 6.F",
        "<b>Unit 2:</b> Ex A: 1.wakes 2.speak 3.cooks 4.start 5.tidies 6.eats 7.watches 8.learn | Ex B: 1.helps 2.finish 3.starts 4.watches 5.love 6.tidies 7.sing 8.studies | Ex D: 1.begin 2.tidy 3.speak 4.love 5.learn 6.finish",
        "<b>Unit 3:</b> Ex A: 1.Do 2.doesn't 3.don't 4.Does 5.don't 6.Does 7.doesn't 8.Do | Ex B: 1.doesn't like 2.don't swim 3.doesn't play 4.don't understand | Ex D: 1.like 2.jump 3.want 4.draw 5.understand 6.listen",
        "<b>Unit 4:</b> Ex A: 1.are singing 2.am writing 3.is running 4.aren't sleeping 5.is dancing 6.are shouting 7.is cooking 8.isn't wearing | Ex C: 1.making 2.swimming 3.running 4.dancing 5.writing 6.getting",
        "<b>Unit 5:</b> Ex A: 1.Are you 2.What is 3.Is she 4.Are they 5.Why is 6.Is the bird 7.Where are 8.Is he | Ex D: 1.C 2.A 3.B 4.E 5.D 6.F",
        "<b>Unit 6:</b> Ex A: 1.plays 2.are running 3.drink 4.is sleeping 5.eat 6.is knocking 7.study 8.are you doing | Ex C: 1.PS 2.PC 3.PS 4.PC 5.PS 6.PC | Ex D: 1.normally 2.constantly 3.select 4.observe 5.alter 6.daily",
        "<b>Page 20 Cloze Story:</b> 1.wakes up 2.eats 3.plays 4.is 5.are standing 6.is making 7.found 8.repaired 9.was sleeping 10.was 11.isn't 12.were 13.are flying 14.are going to visit 15.will see 16.have never met 17.will be 18.is traveling 19.loves 20.will learn",
        "<b>Revision 1:</b> Part A: 1.are 2.doesn't 3.are singing 4.Do 5.is running 6.eat 7.isn't 8.are | Part B: 1.C 2.D 3.A 4.B 5.F 6.E",
        "<b>Unit 7:</b> Ex A: 1.was 2.were 3.wasn't 4.Were 5.was 6.weren't 7.Was 8.was | Ex B: 1.was 2.were 3.were 4.was 5.were 6.was 7.was 8.were | Ex D: 1.C 2.D 3.A 4.B 5.F 6.E",
        "<b>Unit 8:</b> Ex A: 1.visited 2.closed 3.stopped 4.tidied 5.watched 6.played 7.traveled 8.studied | Ex C: /id/: visited, started | /d/: played, cleaned | /t/: watched, washed | Ex D: 1.E 2.A 3.C 4.B 5.D",
        "<b>Unit 9:</b> Ex A: 1.C 2.D 3.F 4.A 5.B 6.E 7.H 8.G | Ex B: 1.went 2.saw 3.ate 4.drank 5.bought 6.came 7.gave 8.wrote | Ex D: 1.purchased 2.spotted 3.arrived 4.presented 5.penned 6.journeyed",
        "<b>Unit 10:</b> Ex A: 1.go 2.see 3.eat 4.Did they 5.forget 6.buy 7.hear 8.remember | Ex B: 1.didn't lose 2.didn't go 3.didn't see 4.didn't eat | Ex D: 1.B 2.A 3.D 4.C 5.F 6.E",
        "<b>Unit 11:</b> Ex A: 1.was 2.were 3.was 4.were 5.wasn't 6.was 7.Were 8.were | Ex B: 1.was reading 2.were waiting 3.weren't playing 4.was listening | Ex D: 1.B 2.A 3.D 4.C 5.E",
        "<b>Revision 2:</b> Part A: 1.were 2.went, saw 3.remember 4.eat 5.was doing 6.played 7.wasn't 8.rang | Part B: 1.bought 2.saw 3.tasty 4.well-known 5.fix 6.discover",
        "<b>Unit 12:</b> Ex A: 1.am going to 2.are going to 3.isn't going to 4.Are you 5.are going to 6.is going to 7.are they 8.is going to | Ex D: 1.B 2.A 3.D 4.C 5.E",
        "<b>Unit 13:</b> Ex A: 1.will 2.won't 3.will 4.will 5.will 6.won't 7.Will 8.won't | Ex B: 1.will win 2.will be 3.will help 4.will fly 5.will change 6.will call 7.will become 8.Will you come | Ex D: 1.B 2.A 3.D 4.C 5.E",
        "<b>Unit 14:</b> Ex A: 1.have 2.Have 3.hasn't 4.have 5.Has 6.have 7.has 8.Have | Ex B: 1.have seen 2.has visited 3.eaten 4.has never flown 5.have won 6.swum 7.has read 8.has ridden | Ex D: 1.B 2.A 3.D 4.C 5.E",
        "<b>Final Test:</b> 1.am 2.are 3.wakes 4.doesn't 5.Do 6.are running 7.is sleeping 8.is reading 9.were 10.were 11.visited 12.stopped 13.went 14.saw 15.find 16.buy 17.was doing 18.are going to visit 19.are you 20.will help 21.will carry 22.Have 23.eaten 24.B 25.A"
    ]
}
