"""
unit_data_part1.py - Units 1 to 6 (Present Tenses)
"""

UNITS_PART1 = [
    {
        "unit_num": 1,
        "title": "Present Simple: 'To Be' (am, is, are)",
        "subtitle": "Hozirgi oddiy zamon: Bo'lmoq fe'li",
        "tag": "Grammar & Vocabulary A1",
        "grammar": {
            "meaning": "<strong>'To be' fe'li</strong> shaxs, narsa yoki hayvonning <em>kimligi, qandayligi, qayerdaligi</em> yoki <em>yoshi</em> haqida gapirganda ishlatiladi. O'zbek tilida bu <strong>'-dir', 'man', 'san', 'miz'</strong> qo'shimchalariga to'g'ri keladi.",
            "tables": [
                {
                    "title": "1. Darak shakli (Affirmative +)",
                    "headers": ["Ega (Subject)", "To Be shakli", "Qisqartma", "Misol (Example)"],
                    "rows": [
                        ["I", "am", "I'm", "I am a 4th grade student. (Men 4-sinf o'quvchisiman.)"],
                        ["He / She / It", "is", "He's / She's / It's", "He is clever. / The cat is small."],
                        ["We / You / They", "are", "We're / You're / They're", "We are happy friends. (Biz baxtli do'stlarmiz.)"]
                    ]
                },
                {
                    "title": "2. Inkor va So'roq shakli (Negative - & Question ?)",
                    "headers": ["Shakl", "Formula", "Misol (Example)", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Inkor (-)", "Subject + am/is/are + not", "She is not (isn't) tired.", "No, she isn't."],
                        ["So'roq (?)", "Am/Is/Are + Subject...?", "Are you ready today?", "Yes, I am. / No, I'm not."],
                        ["So'roq (?)", "Is + he/she/it...?", "Is it a big dog?", "Yes, it is. / No, it isn't."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Esda tuting: <code>am not</code> ning qisqartmasi yo'q (<em>I amn't</em> DEYILMAYDI!), faqat <code>I'm not</code> deb yoziladi. Lekin <code>is not = isn't</code> va <code>are not = aren't</code> bo'ladi!",
            "time_words": "<strong>Ko'rsatkich so'zlar:</strong> today (bugun), now (hozir), always (doimo), every day (har kuni)."
        },
        "vocab": [
            {"num": 1, "word": "happy", "uz": "xursand", "pos": "adj", "synonym": "glad", "example": "I am happy to meet my new teacher.", "meaning": "quvnoq, shod"},
            {"num": 2, "word": "clever", "uz": "aqlli", "pos": "adj", "synonym": "smart", "example": "She is a clever student in Grade 4.", "meaning": "zukko, fahmli"},
            {"num": 3, "word": "big", "uz": "katta", "pos": "adj", "synonym": "large", "example": "Our school library is very big.", "meaning": "ulkan, keng"},
            {"num": 4, "word": "beautiful", "uz": "chiroyli", "pos": "adj", "synonym": "pretty", "example": "Tashkent is a beautiful sunny city.", "meaning": "go'zal, ko'rkam"},
            {"num": 5, "word": "small", "uz": "kichik", "pos": "adj", "synonym": "tiny", "example": "This is a small puppy, but it is fast.", "meaning": "mitti, jajji"},
            {"num": 6, "word": "fast", "uz": "tezkor", "pos": "adj", "synonym": "quick", "example": "Cheetahs are very fast runners.", "meaning": "chaqqon, ildam"},
            {"num": 7, "word": "tired", "uz": "charchagan", "pos": "adj", "synonym": "exhausted", "example": "We are tired after football practice.", "meaning": "holsizlangan"},
            {"num": 8, "word": "friendly", "uz": "do'stona", "pos": "adj", "synonym": "kind", "example": "My classmates are very friendly.", "meaning": "mehribon, ochiqko'ngil"},
            {"num": 9, "word": "quiet", "uz": "tinch, sokin", "pos": "adj", "synonym": "silent", "example": "The classroom is quiet during reading.", "meaning": "shovqinsiz"},
            {"num": 10, "word": "difficult", "uz": "qiyin", "pos": "adj", "synonym": "hard", "example": "English grammar is not difficult!", "meaning": "murakkab, og'ir"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose the correct word (To'g'ri so'zni doira ichiga oling)",
            "inst": "Har bir gap uchun to'g'ri 'to be' shaklini tanlang.",
            "items": [
                "1. Benny and Leo (am / is / are) best friends at school.",
                "2. I (am / is / are) nine years old today.",
                "3. The English test (am not / isn't / aren't) difficult at all.",
                "4. (Am / Is / Are) your parents at home right now?",
                "5. Look at the sky! It (is / are / am) blue and sunny.",
                "6. We (am / is / are) very excited about the trip.",
                "7. My little sister (isn't / aren't / am not) afraid of cats.",
                "8. (Am / Is / Are) you ready for the fun grammar game?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete with am, is, are, isn't, aren't",
            "inst": "Nuqtalar o'rniga mos keluvchi to'g'ri shaklni yozing.",
            "items": [
                "1. I __________ happy because today is my birthday!",
                "2. The elephant __________ a very large animal.",
                "3. My brothers __________ at school; they are at the park.",
                "4. __________ she a clever girl in your classroom?",
                "5. This puzzle __________ easy; it is quite difficult.",
                "6. We __________ tired, so we want to sleep now.",
                "7. Tashkent and Samarkand __________ beautiful ancient cities.",
                "8. __________ they friendly to new pupils?"
            ]
        },
        "ex_c": {
            "title": "Exercise C: Detective Mistake Hunter (Xatolarni toping va to'g'rilang)",
            "inst": "Har bir gapda bitta grammatik xato bor. Uni topib, to'g'ri gapni yozing.",
            "items": [
                "1. I is very glad to see my grandfather. -> ________________________________________",
                "2. The little birds isn't hungry today. -> ________________________________________",
                "3. Are he your new English teacher? -> ________________________________________",
                "4. They amn't at the library now. -> ________________________________________",
                "5. We is ready for the exciting adventure. -> ________________________________________",
                "6. The test are very hard for Benny. -> ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonym Match & Vocabulary Challenge",
            "inst": "1-ustundagi so'zni 2-ustundagi unga mos sinonimi bilan birlashtiring.",
            "items": [
                "1. happy  [ ___ ]        A. smart",
                "2. clever [ ___ ]        B. tiny",
                "3. big    [ ___ ]        C. glad",
                "4. small  [ ___ ]        D. quick",
                "5. fast   [ ___ ]        E. large",
                "6. quiet  [ ___ ]        F. silent"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Benny's Secret Code Challenge (Quvnoq detektiv jumboq)",
            "inst": "Quyidagi shifrlangan gapni harflar tartibi bo'yicha yeching va javobini yozing!",
            "story": "Benny the Bunny sizga maxfiy xabar qoldirdi: <strong>'W-E   A-R-E   C-L-E-V-E-R   S-T-U-D-E-N-T-S!'</strong><br>Tarjimasi: ____________________________________________________________________<br><em>Savol:</em> 'clever' so'zining sinonimi qaysi? (s____t). Siz ham bugun xursandmisiz? (Yes, I ___)."
        }
    },
    {
        "unit_num": 2,
        "title": "Present Simple: Action Verbs (Affirmative)",
        "subtitle": "Hozirgi oddiy zamon: Har kungi odatiy harakatlar",
        "tag": "Grammar & Vocabulary A1",
        "grammar": {
            "meaning": "<strong>Present Simple</strong> doimiy takrorlanadigan ish-harakatlar, kun tartibi (routines) va umumiy haqiqatlar haqida gapirish uchun ishlatiladi.",
            "tables": [
                {
                    "title": "1. Ega va fe'l moslashuvi (Subject-Verb Agreement)",
                    "headers": ["Ega (Subject)", "Fe'l shakli", "Qoida", "Misol (Example)"],
                    "rows": [
                        ["I / You / We / They", "V1 (asosiy fe'l)", "Hech qanday qo'shimcha olmaydi", "I wake up early. We play chess."],
                        ["He / She / It", "V + -s / -es / -ies", "Fe'lga -s, -es yoki -ies qo'shiladi", "He watches TV. She studies English."]
                    ]
                },
                {
                    "title": "2. -s / -es / -ies qo'shilish imlo qoidalari (Spelling Rules)",
                    "headers": ["Fe'l oxirgi harfi", "Qo'shimcha", "Misollar (Examples)", "Izoh"],
                    "rows": [
                        ["Ko'pchilik fe'llar", "+ s", "start -> starts, speak -> speaks, eat -> eats", "Oddiy holatda faqat -s"],
                        ["-ch, -sh, -ss, -x, -o", "+ es", "watch -> watches, wash -> washes, go -> goes", "Tovush oson chiqishi uchun"],
                        ["Undosh + y", "y -> ies", "tidy -> tidies, study -> studies, fly -> flies", "'y' harfi 'i' ga aylanadi"]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Unli + y bilan tugasa (masalan, <em>play, enjoy</em>), 'y' o'zgarmaydi: <code>plays, enjoys</code> bo'ladi! Hech qachon <em>plaies</em> deb yozmang!",
            "time_words": "<strong>Signal so'zlar:</strong> every day (har kuni), usually (odatda), always (doimo), in the morning (ertalab)."
        },
        "vocab": [
            {"num": 1, "word": "start", "uz": "boshlamoq", "pos": "verb", "synonym": "begin", "example": "We start our lessons at 8:00 AM.", "meaning": "ishni yo'lga qo'ymoq"},
            {"num": 2, "word": "finish", "uz": "tugatmoq", "pos": "verb", "synonym": "end", "example": "I finish my homework before dinner.", "meaning": "oxiriga yetkazmoq"},
            {"num": 3, "word": "speak", "uz": "gapirmoq", "pos": "verb", "synonym": "talk", "example": "He speaks Uzbek and English fluently.", "meaning": "nutq so'zlamoq"},
            {"num": 4, "word": "watch", "uz": "tomosha qilmoq", "pos": "verb", "synonym": "look at", "example": "Benny watches funny cartoons on Sunday.", "meaning": "diqqat bilan ko'rmoq"},
            {"num": 5, "word": "eat", "uz": "yemoq", "pos": "verb", "synonym": "have", "example": "Lions eat meat every single day.", "meaning": "taom iste'mol qilmoq"},
            {"num": 6, "word": "tidy", "uz": "tartibga keltirmoq", "pos": "verb", "synonym": "clean", "example": "She tidies her desk every afternoon.", "meaning": "yig'ishtirmoq"},
            {"num": 7, "word": "help", "uz": "yordam bermoq", "pos": "verb", "synonym": "assist", "example": "Good boys help their grandmothers.", "meaning": "ko'maklashmoq"},
            {"num": 8, "word": "love", "uz": "sevmoq, yoqtirmoq", "pos": "verb", "synonym": "adore", "example": "Children love sweet chocolate ice cream.", "meaning": "juda yaxshi ko'rmoq"},
            {"num": 9, "word": "learn", "uz": "o'rganmoq", "pos": "verb", "synonym": "study", "example": "We learn ten new English words daily.", "meaning": "bilim olmoq"},
            {"num": 10, "word": "wake up", "uz": "uyg'onmoq", "pos": "phr v", "synonym": "get up", "example": "I wake up at seven o'clock.", "meaning": "uyqudan turmoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Circle the correct verb form",
            "inst": "Qavs ichidagi to'g'ri fe'l shaklini doiraga oling.",
            "items": [
                "1. Benny (wake / wakes) up at 7:00 every sunny morning.",
                "2. They (speak / speaks) three languages very well.",
                "3. My mother (cook / cooks) delicious plov on weekends.",
                "4. We (start / starts) our school day with cheerful songs.",
                "5. The clever boy (tidy / tidies) his bedroom every Saturday.",
                "6. A cat (eat / eats) fish with great joy.",
                "7. My father (watch / watches) the evening news on television.",
                "8. You (learn / learns) new grammar rules very quickly."
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete with the correct form of the verb",
            "inst": "Fe'llarni qavsdan chiqarib, He/She/It yoki I/We/They ga qarab to'g'ri yozing.",
            "items": [
                "1. Dilnoza __________ (help) her mother in the clean kitchen.",
                "2. I __________ (finish) my painting before the lesson ends.",
                "3. The train __________ (start) its journey at nine sharp.",
                "4. My grandfather __________ (watch) sports on TV.",
                "5. We __________ (love) reading colorful English fairy tales.",
                "6. He __________ (tidy) the library books every Friday.",
                "7. Birds __________ (sing) sweet songs in our green garden.",
                "8. Aziz __________ (study) English words every evening."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Sentence Builder (He/She ga o'zgartiring)",
            "inst": "Gaplarni 'I' o'rniga 'He' yoki 'She' bilan qayta yozing va fe'lga diqqat qiling.",
            "items": [
                "1. I speak English with my teacher. -> He ________________________________________",
                "2. I watch cartoons after school. -> She ________________________________________",
                "3. I tidy my lovely bedroom. -> He ________________________________________",
                "4. I wake up at six thirty. -> She ________________________________________",
                "5. I finish my work early. -> He ________________________________________",
                "6. I love fresh red apples. -> She ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms & Word Puzzle",
            "inst": "Gaplardagi qalin so'zlar o'rniga ularning sinonimini yozing.",
            "items": [
                "1. We <b>start</b> (___________) our lesson at eight o'clock.",
                "2. He wants to <b>clean</b> (___________) his room today.",
                "3. She likes to <b>talk</b> (___________) with her friends.",
                "4. I <b>adore</b> (___________) my fluffy puppy.",
                "5. They <b>study</b> (___________) hard at school.",
                "6. The movie will <b>end</b> (___________) in ten minutes."
            ]
        },
        "ex_e": {
            "title": "Exercise E: Superhero's Daily Routine (Quvnoq hikoya)",
            "inst": "Super-Qahramon Maksimning kun tartibini o'qing va savollarga javob bering!",
            "story": "Max is a superhero. Every morning he <b>wakes up</b> at 6:00, <b>eats</b> five bananas, and <b>helps</b> lost kittens. In the afternoon, he <b>flies</b> across the city and <b>tidies</b> the city park.<br>1. What does Max eat? -> He eats ____________________.<br>2. Who does he help? -> He helps ____________________.<br>3. 'tidy' so'zining sinonimi nima? -> ____________________."
        }
    },
    {
        "unit_num": 3,
        "title": "Present Simple: Negatives & Questions",
        "subtitle": "Hozirgi oddiy zamon: Inkor va So'roq shakllari (do / does)",
        "tag": "Grammar & Vocabulary A1",
        "grammar": {
            "meaning": "Present Simple da <strong>inkor</strong> va <strong>so'roq</strong> gaplar tuzish uchun <strong>DO</strong> va <strong>DOES</strong> yordamchi fe'llaridan foydalanamiz.",
            "tables": [
                {
                    "title": "1. Inkor shakli (Negative -)",
                    "headers": ["Ega (Subject)", "Yordamchi fe'l", "Asosiy fe'l", "Misol (Example)"],
                    "rows": [
                        ["I / You / We / They", "do not (don't)", "V1 (oddiy)", "I don't play football on Mondays."],
                        ["He / She / It", "does not (doesn't)", "V1 (asosiy -s yo'qoladi!)", "He doesn't eat spicy food."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va Qisqa javoblar (Questions & Answers)",
                    "headers": ["So'roq (Do / Does)", "Ega", "Asosiy fe'l", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Do", "you / they", "like ice cream?", "Yes, I do. / No, they don't."],
                        ["Does", "he / she", "read books?", "Yes, he does. / No, she doesn't."],
                        ["Wh- savol", "What do", "you want to drink?", "I want pure water, please."]
                    ]
                }
            ],
            "tip": "<strong>Destination Watch Out!</strong> 'Does' kelganda asosiy fe'ldagi <strong>-s</strong> yo'qoladi! <code>He doesn't likes</code> deb yozish KATTA XATO! Doim: <code>He doesn't like!</code>",
            "time_words": "<strong>Eslatma:</strong> Do I / you / we / they? | Does he / she / it? Savollarda ham fe'l doim 1-shaklda turadi!"
        },
        "vocab": [
            {"num": 1, "word": "play", "uz": "o'ynamoq", "pos": "verb", "synonym": "participate", "example": "Do you play football after school?", "meaning": "o'yin bilan shug'ullanmoq"},
            {"num": 2, "word": "like", "uz": "yoqtirmoq", "pos": "verb", "synonym": "enjoy", "example": "He doesn't like cold windy weather.", "meaning": "xush ko'rmoq"},
            {"num": 3, "word": "want", "uz": "xohlamoq", "pos": "verb", "synonym": "wish", "example": "Do they want some tasty juice?", "meaning": "istamoq"},
            {"num": 4, "word": "ride", "uz": "minmoq (velosiped, ot)", "pos": "verb", "synonym": "pedal / drive", "example": "She doesn't ride a bike in the rain.", "meaning": "uchar ulovda yurmoq"},
            {"num": 5, "word": "listen", "uz": "tinglamoq", "pos": "verb", "synonym": "hear", "example": "I listen to English stories every evening.", "meaning": "quloq solmoq"},
            {"num": 6, "word": "read", "uz": "o'qimoq", "pos": "verb", "synonym": "peruse", "example": "Does your brother read comic books?", "meaning": "kitob mutolaa qilmoq"},
            {"num": 7, "word": "swim", "uz": "suzmoq", "pos": "verb", "synonym": "bathe", "example": "We don't swim in cold winter rivers.", "meaning": "suvda suzmoq"},
            {"num": 8, "word": "draw", "uz": "rasm chizmoq", "pos": "verb", "synonym": "sketch", "example": "Does she draw funny animal pictures?", "meaning": "qalamda tasvirlamoq"},
            {"num": 9, "word": "jump", "uz": "sakramoq", "pos": "verb", "synonym": "leap", "example": "The frog jumps high over the pond.", "meaning": "sakrab o'tmoq"},
            {"num": 10, "word": "understand", "uz": "tushunmoq", "pos": "verb", "synonym": "comprehend", "example": "Do you understand this grammar rule?", "meaning": "anglamoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose don't, doesn't, Do, or Does",
            "inst": "To'g'ri yordamchi fe'lni tanlang.",
            "items": [
                "1. (Do / Does) you like playing computer games?",
                "2. She (don't / doesn't) want to eat cold porridge.",
                "3. My parents (don't / doesn't) speak French at home.",
                "4. (Do / Does) your cat swim in the bathtub?",
                "5. We (don't / doesn't) go to school on Sundays.",
                "6. (Do / Does) Benny understand the English riddle?",
                "7. Timur (don't / doesn't) ride his bicycle at night.",
                "8. (Do / Does) birds sing when it is very dark?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Make negative sentences (-)",
            "inst": "Gaplarni don't yoki doesn't yordamida inkor shakliga aylantiring.",
            "items": [
                "1. He likes green apples. -> He ____________________ green apples.",
                "2. They swim in the winter. -> They ____________________ in the winter.",
                "3. Malika plays the guitar. -> Malika ____________________ the guitar.",
                "4. I understand French. -> I ____________________ French.",
                "5. The dog jumps on the sofa. -> The dog ____________________ on the sofa.",
                "6. We want noisy toys. -> We ____________________ noisy toys.",
                "7. Shavkat rides a horse. -> Shavkat ____________________ a horse.",
                "8. You listen to loud music. -> You ____________________ to loud music."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Question Creator (?)",
            "inst": "Berilgan so'zlardan to'g'ri so'roq gaplar tuzing.",
            "items": [
                "1. you / like / English stories / Do / ? -> ________________________________________",
                "2. your brother / ride / Does / a bicycle / ? -> ________________________________________",
                "3. they / draw / funny animals / Do / ? -> ________________________________________",
                "4. Benny / jump / high / Does / ? -> ________________________________________",
                "5. What / you / want / do / for lunch / ? -> ________________________________________",
                "6. Where / she / live / does / ? -> ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Detective",
            "inst": "Qavs ichidagi so'zga mos sinonimni yozing.",
            "items": [
                "1. I really <b>enjoy</b> (l____) sunny summer days.",
                "2. Rabbits can <b>leap</b> (j____) very high.",
                "3. Do you <b>wish</b> (w____) to have some orange juice?",
                "4. The artist likes to <b>sketch</b> (d____) old castles.",
                "5. I can't <b>comprehend</b> (u___________) this sentence.",
                "6. Can you <b>hear</b> (l______ to) the teacher's voice?"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Alien Interview Challenge (O'zga sayyoralik bilan intervyu)",
            "inst": "O'zga sayyoralik Zog bilan intervyuni to'ldiring (Do, Does, don't, doesn't).",
            "story": "Reporter: Hello Zog! <b>(1)</b> __________ you eat human food?<br>Zog: No, I <b>(2)</b> __________! I only eat starlight and cosmic rocks.<br>Reporter: <b>(3)</b> __________ your space pet sleep at night?<br>Zog: No, it <b>(4)</b> __________ sleep. It plays cosmic chess all night long!<br>Savol: 'enjoy' fe'lining sinonimi qaysi? Javob: ____________________."
        }
    },
    {
        "unit_num": 4,
        "title": "Present Continuous: Affirmative & Negative",
        "subtitle": "Hozirgi davomli zamon: Ayni daqiqada sodir bo'layotgan ish-harakatlar",
        "tag": "Grammar & Vocabulary A1-A2",
        "grammar": {
            "meaning": "<strong>Present Continuous</strong> ayni gapirilayotgan paytda (ayni daqiqada) sodir bo'layotgan ish-harakatlarni ifodalash uchun ishlatiladi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor formulasi (+ / -)",
                    "headers": ["Ega (Subject)", "To Be (am/is/are)", "Fe'l + ing", "Misol (Example)"],
                    "rows": [
                        ["I", "am / am not", "V-ing", "I am writing a letter right now."],
                        ["He / She / It", "is / isn't", "V-ing", "She is cooking soup. / He isn't sleeping."],
                        ["We / You / They", "are / aren't", "V-ing", "They are running in the park."]
                    ]
                },
                {
                    "title": "2. -ing qo'shilish imlo qoidalari (Spelling Rules)",
                    "headers": ["Fe'l turi", "O'zgarish qoidasi", "Misol (Example)", "Izoh"],
                    "rows": [
                        ["Ko'pchilik fe'llar", "+ ing", "cook -> cooking, sleep -> sleeping", "Oddiy qo'shiladi"],
                        ["Oxiri 'e' bilan tugasa", "e tushib qoladi + ing", "write -> writing, dance -> dancing", "'e' harfi yozilmaydi!"],
                        ["Qisqa 1 unli + 1 undosh", "Oxirgi undosh ikkilanadi", "run -> running, swim -> swimming", "Ikki marta yoziladi!"]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> <code>play -> playing</code> bo'ladi, 'y' harfi hech qachon ikkilanmaydi yoki tushib qolmaydi!",
            "time_words": "<strong>Sehrli signal so'zlar:</strong> now (hozir), right now (ayni damda), at the moment (shu daqiqada), Look! (Qara!), Listen! (Eshit!)."
        },
        "vocab": [
            {"num": 1, "word": "shout", "uz": "baqirmoq", "pos": "verb", "synonym": "yell", "example": "Why is the boy shouting so loudly?", "meaning": "baland ovoz chiqarmoq"},
            {"num": 2, "word": "sleep", "uz": "uxlamoq", "pos": "verb", "synonym": "rest", "example": "The baby is sleeping peacefully right now.", "meaning": "uyquda bo'lmoq"},
            {"num": 3, "word": "write", "uz": "yozmoq", "pos": "verb", "synonym": "pen", "example": "I am writing a cheerful poem in English.", "meaning": "harflarni qog'ozga tushirmoq"},
            {"num": 4, "word": "run", "uz": "yugurmoq", "pos": "verb", "synonym": "sprint", "example": "Look! The children are running across the grass.", "meaning": "tez harakatlanmoq"},
            {"num": 5, "word": "cook", "uz": "ovqat pishirmoq", "pos": "verb", "synonym": "prepare food", "example": "Mother is cooking delicious soup for dinner.", "meaning": "taom tayyorlamoq"},
            {"num": 6, "word": "laugh", "uz": "kulmoq", "pos": "verb", "synonym": "chuckle", "example": "They are laughing at the funny clown.", "meaning": "tabassum va xandon otmoq"},
            {"num": 7, "word": "drink", "uz": "ichmoq", "pos": "verb", "synonym": "sip", "example": "The little cat is drinking warm milk.", "meaning": "suyuqlik iste'mol qilmoq"},
            {"num": 8, "word": "dance", "uz": "raqsqa tushmoq", "pos": "verb", "synonym": "groove", "example": "The cheerful girls are dancing together.", "meaning": "musiqaga mos harakatlanmoq"},
            {"num": 9, "word": "paint", "uz": "bo'yamoq", "pos": "verb", "synonym": "color", "example": "He is painting a bright yellow sun.", "meaning": "bo'yoq bilan rasm solmoq"},
            {"num": 10, "word": "wear", "uz": "kiyib yurmoq", "pos": "verb", "synonym": "put on", "example": "She is wearing a beautiful blue dress today.", "meaning": "ustida kiyim bo'lmoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Circle the correct form",
            "inst": "Ayni paytda sodir bo'layotgan harakat uchun to'g'ri shaklni tanlang.",
            "items": [
                "1. Listen! The birds (are singing / sing) in the garden.",
                "2. I (am writing / is writing) a message to my best friend now.",
                "3. Look! The rabbit (is runing / is running) very quickly.",
                "4. We (aren't sleeping / isn't sleeping) at the moment.",
                "5. She (is danceing / is dancing) beautifully on the stage.",
                "6. The boys (are shouting / is shouting) in the schoolyard.",
                "7. My mother (is cooking / are cooking) tasty cookies right now.",
                "8. He (isn't wearing / aren't wearing) his warm coat today."
            ]
        },
        "ex_b": {
            "title": "Exercise B: Form the Present Continuous",
            "inst": "Qavs ichidagi fe'llardan Present Continuous (+ yoki -) yasang.",
            "items": [
                "1. Look! Benny __________ (run) towards the river.",
                "2. Be quiet! The baby __________ (sleep) in the bedroom.",
                "3. I __________ (not / drink) cold water right now.",
                "4. The pupils __________ (write) an English test now.",
                "5. She __________ (paint) a picture of a rainbow.",
                "6. They __________ (laugh) at the funny cartoon.",
                "7. Father __________ (not / cook); he is reading a book.",
                "8. We __________ (wear) our school uniform today."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Spelling Detective (Imlo xatolarini to'g'rilang)",
            "inst": "Quyidagi -ing qo'shilgan so'zlardan xatolarini topib to'g'ri yozing.",
            "items": [
                "1. makeing -> _______________",
                "2. swiming -> _______________",
                "3. runing -> _______________",
                "4. danceing -> _______________",
                "5. writeing -> _______________",
                "6. geting -> _______________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms in Action",
            "inst": "Berilgan gapdagi fe'l sinonimini aniqlang.",
            "items": [
                "1. Why is he <b>yelling</b>? (Sinonimi: s___________)",
                "2. The children are <b>sprinting</b> across the field. (Sinonimi: r___________)",
                "3. Grandfather is <b>resting</b> on the sofa. (Sinonimi: s___________)",
                "4. She is <b>sipping</b> fresh apple juice. (Sinonimi: d___________)",
                "5. The boys are <b>chuckling</b> at the joke. (Sinonimi: l___________)",
                "6. He is <b>coloring</b> the wall green. (Sinonimi: p___________)"
            ]
        },
        "ex_e": {
            "title": "Exercise E: The Busy Treehouse (Quvnoq rasm siri)",
            "inst": "Daraxtdagi uyda kim nima qilayapti? Gaplarni to'ldiring!",
            "story": "Look at the big treehouse! Tommy <b>(1) is painting</b> the roof. Sarah and Lucy <b>(2) are __________</b> (dance) to happy music. Little Timmy <b>(3) is __________</b> (sleep) in the hammock. Benny the Bunny <b>(4) is __________</b> (eat) a sweet carrot.<br>Savol: 'sleep' fe'lining sinonimi qaysi? -> _______________."
        }
    },
    {
        "unit_num": 5,
        "title": "Present Continuous: Questions & Short Answers",
        "subtitle": "Hozirgi davomli zamon: So'roq gaplar va Qisqa javoblar",
        "tag": "Grammar & Vocabulary A1-A2",
        "grammar": {
            "meaning": "Kimdir <strong>ayni paytda nima qilayotganini</strong> bilish uchun Present Continuous so'roq shaklidan foydalanamiz.",
            "tables": [
                {
                    "title": "1. Umumiy so'roq va Qisqa javoblar (Yes/No Questions)",
                    "headers": ["Am/Is/Are", "Ega (Subject)", "Fe'l + ing", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Am", "I", "reading well?", "Yes, you are. / No, you aren't."],
                        ["Is", "he / she / it", "sleeping?", "Yes, he is. / No, he isn't."],
                        ["Are", "we / you / they", "playing?", "Yes, they are. / No, they aren't."]
                    ]
                },
                {
                    "title": "2. Maxsus so'roq gaplar (Wh- Questions)",
                    "headers": ["So'roq so'zi", "Am/Is/Are", "Ega + V-ing", "To'liq javob (Full Answer)"],
                    "rows": [
                        ["What", "are you", "doing now?", "I am looking for my pencil."],
                        ["Where", "is she", "going?", "She is going to the music school."],
                        ["Why", "are they", "shouting?", "Because they are playing a loud game."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Qisqa javob berayotganda hech qachon qisqartma ishlatilmaydi: <code>Yes, he's</code> DEYILMAYDI! Faqat: <code>Yes, he is!</code> deb to'liq aytiladi!",
            "time_words": "<strong>So'roq so'zlari:</strong> What (nima), Where (qayerda), Who (kim), Why (nima uchun), How (qanday)."
        },
        "vocab": [
            {"num": 1, "word": "look for", "uz": "qidirmoq", "pos": "phr v", "synonym": "search", "example": "What are you looking for under the table?", "meaning": "topishga urinmoq"},
            {"num": 2, "word": "hide", "uz": "yashirinmoq", "pos": "verb", "synonym": "conceal", "example": "Where is the rabbit hiding right now?", "meaning": "ko'rinmas bo'lib olmoq"},
            {"num": 3, "word": "fly", "uz": "uchmoq", "pos": "verb", "synonym": "soar", "example": "Is the colorful kite flying high in the sky?", "meaning": "havoda harakatlanmoq"},
            {"num": 4, "word": "carry", "uz": "ko'tarib bormoq", "pos": "verb", "synonym": "hold", "example": "Are you carrying a heavy school bag?", "meaning": "qo'lda eltmoq"},
            {"num": 5, "word": "wash", "uz": "yuvmoq", "pos": "verb", "synonym": "clean", "example": "Is father washing the family car today?", "meaning": "suv bilan tozalamoq"},
            {"num": 6, "word": "sit", "uz": "o'tirmoq", "pos": "verb", "synonym": "rest", "example": "Why are the children sitting on the green grass?", "meaning": "kursida yoki yerda o'tirmoq"},
            {"num": 7, "word": "stand", "uz": "tik turmoq", "pos": "verb", "synonym": "be upright", "example": "Is the teacher standing near the blackboard?", "meaning": "oyoqda tik turmoq"},
            {"num": 8, "word": "climb", "uz": "tirmashib chiqmoq", "pos": "verb", "synonym": "ascend", "example": "Is the cheeky monkey climbing the tall tree?", "meaning": "yuqoriga ko'tarilmoq"},
            {"num": 9, "word": "wait", "uz": "kutmoq", "pos": "verb", "synonym": "stay for", "example": "Who are you waiting for at the bus stop?", "meaning": "kelishini kutmoq"},
            {"num": 10, "word": "smile", "uz": "jilmaymoq", "pos": "verb", "synonym": "grin", "example": "Why are you smiling so brightly today?", "meaning": "xushfe'llik bilan kulimsiramoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose the correct question form",
            "inst": "To'g'ri tuzilgan so'roq gapni tanlang.",
            "items": [
                "1. (Is you / Are you) looking for your English workbook?",
                "2. (What is / What are) the cat doing under the bed?",
                "3. (Is she / Does she) smiling at the new student?",
                "4. (Are they / Is they) washing their bicycles now?",
                "5. (Why is / Why are) Benny sitting on the box?",
                "6. (Is the bird / Are the bird) flying high in the blue sky?",
                "7. (Where are / Where is) your brothers going right now?",
                "8. (Is he / Are he) carrying a very heavy backpack?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Write short answers",
            "inst": "Savollarga qisqa javoblarni to'liq va to'g'ri yozing.",
            "items": [
                "1. Is Timur climbing the tree? (+) -> Yes, ____________________.",
                "2. Are the girls crying? (-) -> No, ____________________.",
                "3. Is your mother cooking plov? (+) -> Yes, ____________________.",
                "4. Are you sleeping right now? (-) -> No, ____________________.",
                "5. Is the monkey hiding in the leaves? (+) -> Yes, ____________________.",
                "6. Are they waiting for the yellow bus? (-) -> No, ____________________.",
                "7. Is Benny reading a fun story? (+) -> Yes, ____________________.",
                "8. Are we winning the football match? (+) -> Yes, ____________________."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Put the words in order to make questions",
            "inst": "So'zlarni to'g'ri tartibda joylashtirib so'roq gaplar tuzing.",
            "items": [
                "1. you / What / looking / are / for / ? -> ________________________________________",
                "2. she / Is / the tree / climbing / ? -> ________________________________________",
                "3. they / Where / going / are / now / ? -> ________________________________________",
                "4. Why / the teacher / standing / is / ? -> ________________________________________",
                "5. the car / father / Is / washing / ? -> ________________________________________",
                "6. smiling / are / you / Why / ? -> ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonym Match",
            "inst": "So'zlarni ularning to'g'ri sinonimi bilan moslashtiring.",
            "items": [
                "1. look for [ ___ ]       A. grin",
                "2. smile    [ ___ ]       B. soar",
                "3. fly      [ ___ ]       C. search",
                "4. climb    [ ___ ]       D. clean",
                "5. wash     [ ___ ]       E. ascend",
                "6. wait     [ ___ ]       F. stay for"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Zoo Mystery Detective (Detektiv jumboq)",
            "inst": "Hayvonot bog'i qorovulining savollariga javob bering!",
            "story": "Zookeeper: 'Oh no! The cheeky monkey is missing!'<br>1. Where is the monkey hiding? -> It is hiding in the <b>tall tree</b>.<br>2. What is it eating? -> It is eating a <b>sweet banana</b>.<br>3. Is it smiling? -> Yes, it ____________________.<br>4. 'search' so'zining sinonimi nima? -> ____________________."
        }
    },
    {
        "unit_num": 6,
        "title": "Present Simple vs Present Continuous",
        "subtitle": "Hozirgi oddiy va Hozirgi davomli zamonlarni taqqoslash",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "<strong>Present Simple</strong> doimiy odatlar va har kungi tartib uchun; <strong>Present Continuous</strong> esa ayni damda sodir bo'layotgan harakatlar uchun ishlatiladi.",
            "tables": [
                {
                    "title": "1. Ikki zamonning asosiy farqlari (Comparison Table)",
                    "headers": ["Xususiyat", "Present Simple (Oddiy)", "Present Continuous (Davomli)"],
                    "rows": [
                        ["Ma'nosi", "Har doimgi odat, kun tartibi", "Ayni damda bo'layotgan harakat"],
                        ["Formulasi", "V1 yoki V-s/-es (he/she/it)", "am / is / are + V-ing"],
                        ["Inkor shakli", "don't / doesn't + V1", "am not / isn't / aren't + V-ing"],
                        ["Signal so'zlar", "always, usually, every day, often", "now, right now, at the moment, Look!"]
                    ]
                },
                {
                    "title": "2. Diqqat: Tuyg'u va holat fe'llari (Stative Verbs)",
                    "headers": ["Fe'l", "Ma'nosi", "To'g'ri qo'llanishi", "Noto'g'ri qo'llanishi"],
                    "rows": [
                        ["like / love", "yoqtirmoq", "I like English. (Doim)", "I am liking (XATO!)"],
                        ["know / understand", "bilmoq / tushunmoq", "He knows the answer.", "He is knowing (XATO!)"],
                        ["want", "xohlamoq", "She wants water.", "She is wanting (XATO!)"]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Agar gapda <code>usually</code>, <code>always</code>, <code>every day</code> bo'lsa -> <strong>Present Simple</strong> tanlang! Agar <code>now</code>, <code>Look!</code>, <code>Listen!</code> bo'lsa -> <strong>Present Continuous</strong> tanlang!",
            "time_words": "<strong>Taqqoslash misoli:</strong> I usually walk to school, but today I am riding my bike!"
        },
        "vocab": [
            {"num": 1, "word": "always", "uz": "har doim", "pos": "adv", "synonym": "constantly", "example": "He always brushes his teeth before going to bed.", "meaning": "muntazam ravishda"},
            {"num": 2, "word": "usually", "uz": "odatda", "pos": "adv", "synonym": "normally", "example": "We usually have lunch at one o'clock.", "meaning": "ko'pincha, odatdagidek"},
            {"num": 3, "word": "sometimes", "uz": "ba'zan", "pos": "adv", "synonym": "occasionally", "example": "I sometimes drink lemon tea after dinner.", "meaning": "vaqti-vaqti bilan"},
            {"num": 4, "word": "never", "uz": "hech qachon", "pos": "adv", "synonym": "not ever", "example": "Lions never eat green grass.", "meaning": "aslo, umuman"},
            {"num": 5, "word": "now", "uz": "hozir", "pos": "adv", "synonym": "at present", "example": "The teacher is speaking to the students now.", "meaning": "ayni shu vaqtda"},
            {"num": 6, "word": "today", "uz": "bugun", "pos": "adv", "synonym": "nowadays", "example": "Today I am wearing my warm red sweater.", "meaning": "shu kunda"},
            {"num": 7, "word": "every day", "uz": "har kuni", "pos": "adv", "synonym": "daily", "example": "She reads ten pages of an English book every day.", "meaning": "kunda, har sutkada"},
            {"num": 8, "word": "change", "uz": "o'zgarmoq", "pos": "verb", "synonym": "alter", "example": "The weather is changing quickly today.", "meaning": "boshqacha bo'lmoq"},
            {"num": 9, "word": "notice", "uz": "payqamoq", "pos": "verb", "synonym": "observe", "example": "Do you notice the little cat on the roof?", "meaning": "ko'rib qolmoq"},
            {"num": 10, "word": "choose", "uz": "tanlamoq", "pos": "verb", "synonym": "select", "example": "Which book do you usually choose to read?", "meaning": "saralab olmoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Present Simple or Present Continuous? Choose!",
            "inst": "Signal so'zlarga qarab to'g'ri zamon shaklini tanlang.",
            "items": [
                "1. Timur usually (plays / is playing) tennis on Saturdays.",
                "2. Look! The two boys (run / are running) after the bus.",
                "3. I (drink / am drinking) a glass of milk every morning.",
                "4. Be quiet! Grandmother (sleeps / is sleeping) right now.",
                "5. They never (eat / are eating) fast food on weekdays.",
                "6. Listen! Someone (knocks / is knocking) at our door.",
                "7. We (study / are studying) grammar rules every single week.",
                "8. What (do you do / are you doing) right now at your desk?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Put the verbs into the correct tense",
            "inst": "Fe'llarni Present Simple yoki Present Continuous shaklida yozing.",
            "items": [
                "1. She __________ (watch) TV every evening.",
                "2. Look! It __________ (rain) outside.",
                "3. We usually __________ (go) to Samarkand by train.",
                "4. I __________ (write) an exercise at the moment.",
                "5. Benny __________ (not / like) cold winter days.",
                "6. Why __________ you __________ (wear) a coat today? It is hot!",
                "7. My father always __________ (read) the newspaper in the morning.",
                "8. They __________ (not / play) football now; they are studying."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Time Marker Match",
            "inst": "Har bir signal so'zni to'g'ri zamon guruhi bilan belgilang (PS yoki PC).",
            "items": [
                "1. every day -> [ ___ ]  (PS: Present Simple / PC: Present Continuous)",
                "2. at the moment -> [ ___ ]",
                "3. usually -> [ ___ ]",
                "4. right now -> [ ___ ]",
                "5. always -> [ ___ ]",
                "6. Look! -> [ ___ ]"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Challenge",
            "inst": "Quyidagi so'zlarning sinonimlarini toping.",
            "items": [
                "1. usually -> n_______________",
                "2. always -> c_______________",
                "3. choose -> s_______________",
                "4. notice -> o_______________",
                "5. change -> a_______________",
                "6. every day -> d_______________"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Sunday vs Monday (Quvnoq komiks solishtirish)",
            "inst": "Matnni o'qing va qaysi biri doimiy, qaysi biri bugun ekanligini yozing!",
            "story": "On Mondays, Leo <b>wears</b> his school uniform and <b>walks</b> to school.<br>Today is Sunday! He <b>is wearing</b> bright yellow shorts and he <b>is riding</b> his bicycle in the park!<br>1. What does Leo do on Mondays? -> He ____________________ to school.<br>2. What is he doing today? -> He is ____________________ his bicycle.<br>3. 'normally' so'zining sinonimi: ____________________."
        }
    }
]
