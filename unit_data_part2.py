"""
unit_data_part2.py - Units 7 to 11 (Past Tenses) and Revisions 1 & 2
"""

REVISION_1_DATA = {
    "title": "Revision 1: Units 1 - 6 Review Test",
    "subtitle": "Hozirgi zamonlar va 60 ta yangi lug'at bo'yicha oraliq nazorat",
    "tag": "Comprehensive Review Test",
    "sections": [
        {
            "name": "Part A: Grammar Mastery (To Be & Present Simple & Continuous)",
            "items": [
                "1. Benny and Timur (is / are) very clever students.",
                "2. My little sister (don't / doesn't) like drinking cold milk.",
                "3. Listen! The birds (sing / are singing) in the green trees.",
                "4. (Do / Does) you wake up early on Sunday mornings?",
                "5. Look! He (is running / runs) after the yellow bus now.",
                "6. We usually (eat / are eating) breakfast at 7:30 AM.",
                "7. She (isn't / aren't) afraid of small spiders.",
                "8. Where (are / is) they going at the moment?"
            ]
        },
        {
            "name": "Part B: Vocabulary & Synonym Challenge (Sinonimlar juftligi)",
            "items": [
                "1. clever  -> [ ___ ]       A. glad",
                "2. start   -> [ ___ ]       B. yell",
                "3. happy   -> [ ___ ]       C. smart",
                "4. shout   -> [ ___ ]       D. begin",
                "5. tidy    -> [ ___ ]       E. search",
                "6. look for-> [ ___ ]       F. clean"
            ]
        },
        {
            "name": "Part C: Correct the Mistake (Xatolarni to'g'rilang)",
            "items": [
                "1. He doesn't likes noisy games. -> ________________________________________",
                "2. They is swimming in the pool now. -> ________________________________________",
                "3. I amn't tired today. -> ________________________________________",
                "4. She watchs cartoons on TV. -> ________________________________________",
                "5. Look! Benny is runing fast. -> ________________________________________",
                "6. Does you understand this rule? -> ________________________________________"
            ]
        }
    ],
    "score_box": "Part A: ___/8  |  Part B: ___/6  |  Part C: ___/6  |  Total Score: ___/20"
}

UNITS_PART2 = [
    {
        "unit_num": 7,
        "title": "Past Simple: 'To Be' (was, were)",
        "subtitle": "O'tgan oddiy zamon: Bo'lmoq fe'lining o'tgan shakli",
        "tag": "Grammar & Vocabulary A1-A2",
        "grammar": {
            "meaning": "<strong>Past Simple 'To Be' (was / were)</strong> o'tgan zamonda kimdir yoki nimadir <em>qayerda bo'lgani, qanday bo'lgani</em> yoki <em>yoshi</em> haqida gapirganda ishlatiladi. O'zbek tilida <strong>'edi', 'edim', 'edilar'</strong> ma'nosini bildiradi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor shakli (+ / -)",
                    "headers": ["Ega (Subject)", "Darak (+)", "Inkor (-)", "Misol (Example)"],
                    "rows": [
                        ["I / He / She / It", "was", "was not (wasn't)", "I was at home yesterday. She wasn't tired."],
                        ["We / You / They", "were", "were not (weren't)", "We were at the zoo. They weren't noisy."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va Qisqa javoblar (?)",
                    "headers": ["Was / Were", "Ega", "Joy / Sifat", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Was", "he / she / it", "happy yesterday?", "Yes, he was. / No, he wasn't."],
                        ["Were", "you / they", "at school on Monday?", "Yes, we were. / No, we weren't."],
                        ["Where were", "you", "yesterday afternoon?", "I was at the library with Benny."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> 'You' birlikda (sen) ham, ko'plikda (sizlar) ham doim <code>were</code> oladi! Hech qachon <em>You was</em> deb aytilmaydi!",
            "time_words": "<strong>Sehrli o'tgan zamon so'zlari:</strong> yesterday (kecha), last night (kecha kechqurun), last week (o'tgan hafta), two days ago (ikki kun oldin)."
        },
        "vocab": [
            {"num": 1, "word": "yesterday", "uz": "kecha", "pos": "adv", "synonym": "the day before", "example": "We were at the history museum yesterday.", "meaning": "oldingi kunda"},
            {"num": 2, "word": "last night", "uz": "kecha kechqurun", "pos": "adv", "synonym": "previous night", "example": "The starry sky was beautiful last night.", "meaning": "kechagi tunda"},
            {"num": 3, "word": "ago", "uz": "oldin, muqaddam", "pos": "adv", "synonym": "before", "example": "Two hours ago, they were in the sports hall.", "meaning": "o'tmishda, ilgari"},
            {"num": 4, "word": "absent", "uz": "yo'q, darsga kelmagan", "pos": "adj", "synonym": "missing", "example": "Sardor was absent from school yesterday.", "meaning": "qatnashmagan"},
            {"num": 5, "word": "present", "uz": "bor, hozir bo'lgan", "pos": "adj", "synonym": "attending", "example": "All thirty students were present on Monday.", "meaning": "ishtirok etgan"},
            {"num": 6, "word": "excited", "uz": "hayajonlangan", "pos": "adj", "synonym": "thrilled", "example": "The children were excited about the circus trip.", "meaning": "juda shod va to'lqinlangan"},
            {"num": 7, "word": "afraid", "uz": "qo'rqqan", "pos": "adj", "synonym": "scared", "example": "The little cat was afraid of the loud thunder.", "meaning": "vahimaga tushgan"},
            {"num": 8, "word": "noisy", "uz": "shovqinli", "pos": "adj", "synonym": "loud", "example": "The schoolyard was very noisy at break time.", "meaning": "tinch bo'lmagan"},
            {"num": 9, "word": "famous", "uz": "mashhur", "pos": "adj", "synonym": "well-known", "example": "Amir Timur was a famous historical ruler.", "meaning": "dovrug'i ketgan"},
            {"num": 10, "word": "delicious", "uz": "mazali, shirin", "pos": "adj", "synonym": "tasty", "example": "The birthday cake yesterday was so delicious!", "meaning": "totli, lazzatli"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose was, were, wasn't, or weren't",
            "inst": "To'g'ri o'tgan zamon shaklini tanlang.",
            "items": [
                "1. I (was / were) at home yesterday evening.",
                "2. We (was / were) very excited about the trip to Samarkand.",
                "3. Malika (wasn't / weren't) at school because she was sick.",
                "4. (Was / Were) you happy with your birthday present?",
                "5. The cake (was / were) delicious and sweet.",
                "6. They (wasn't / weren't) in Tashkent last week.",
                "7. (Was / Were) Amir Timur a famous king?",
                "8. The classroom (was / were) quiet during the English test."
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete the sentences with was or were",
            "inst": "Bo'sh o'rinlarga was yoki were qo'ying.",
            "items": [
                "1. Yesterday, the weather __________ sunny and warm.",
                "2. Where __________ you two hours ago?",
                "3. Benny and Leo __________ at the cinema last night.",
                "4. My grandfather __________ a brave pilot many years ago.",
                "5. The pupils __________ very quiet in the library.",
                "6. Why __________ she absent from class on Friday?",
                "7. It __________ a very noisy party yesterday.",
                "8. We __________ thrilled to see our grandmother."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Sentence Transformer (O'tgan zamonga aylantiring)",
            "inst": "Bugungi gaplarni 'yesterday' bilan o'tgan zamonga aylantiring (am/is -> was, are -> were).",
            "items": [
                "1. I am happy today. -> Yesterday, I ____________________ happy.",
                "2. She is in the park now. -> Yesterday, she ____________________ in the park.",
                "3. We are tired today. -> Last night, we ____________________ tired.",
                "4. They are at the museum. -> Two days ago, they ____________________ at the museum.",
                "5. Is he absent today? -> ____________________ he absent yesterday?",
                "6. The apples are tasty. -> The apples ____________________ delicious yesterday."
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Challenge",
            "inst": "Sinonim juftliklarini toping.",
            "items": [
                "1. excited   [ ___ ]       A. tasty",
                "2. afraid    [ ___ ]       B. loud",
                "3. delicious [ ___ ]       C. thrilled",
                "4. noisy     [ ___ ]       D. scared",
                "5. famous    [ ___ ]       E. missing",
                "6. absent    [ ___ ]       F. well-known"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Dinosaur Island Diary (Dinozavrlar oroli kundaligi)",
            "inst": "Kundalikni o'qing va was/were bilan to'ldiring!",
            "story": "Yesterday <b>(1) __________</b> (was/were) an extraordinary day! Benny and I <b>(2) __________</b> on a mystery island. The island <b>(3) __________</b> full of huge trees. We saw a green dinosaur! It <b>(4) __________</b> not scary; it <b>(5) __________</b> very friendly and kind.<br>Savol: 'scared' so'zining sinonimi nima? Javob: ____________________."
        }
    },
    {
        "unit_num": 8,
        "title": "Past Simple: Regular Verbs (-ed)",
        "subtitle": "O'tgan oddiy zamon: To'g'ri fe'llar va ularning imlo qoidalari",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "O'tgan zamonda to'g'ri fe'llarning (regular verbs) o'tgan zamon shaklini yasash uchun ularga <strong>-ed</strong> qo'shimchasi qo'shiladi.",
            "tables": [
                {
                    "title": "1. -ed qo'shilish imlo qoidalari (Spelling Rules)",
                    "headers": ["Fe'l turi", "Qoida", "Misollar (Examples)", "Izoh"],
                    "rows": [
                        ["Ko'pchilik fe'llar", "+ ed", "clean -> cleaned, visit -> visited, walk -> walked", "Oddiy qo'shiladi"],
                        ["Oxiri 'e' bo'lsa", "+ d", "live -> lived, close -> closed, dance -> danced", "Faqat 'd' harfi qo'shiladi"],
                        ["Undosh + y", "y -> ied", "tidy -> tidied, study -> studied", "'y' harfi 'i' ga aylanadi"],
                        ["1 qisqa unli + 1 undosh", "Undosh ikkilanadi", "stop -> stopped, clap -> clapped", "Oxirgi harf 2 marta yoziladi"]
                    ]
                },
                {
                    "title": "2. -ed talaffuzi siri (Pronunciation /t/, /d/, /id/)",
                    "headers": ["Oxirgi tovush", "Talaffuz", "Misollar", "Siri"],
                    "rows": [
                        ["/t/ yoki /d/ bilan tugasa", "/id/", "visited, started, wanted", "Alohida bo'g'in bo'lib o'qiladi"],
                        ["Jarangli tovushlar", "/d/", "cleaned, played, lived", "Yumshoq /d/ deb o'qiladi"],
                        ["Jarangsiz tovushlar (p, k, sh, ch)", "/t/", "watched, walked, stopped", "Qattiq /t/ deb o'qiladi"]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> <code>play -> played</code> bo'ladi, chunki 'y' oldida unli 'a' harfi bor! 'y' faqat undoshdan keyin kelsa 'i' ga aylanadi!",
            "time_words": "<strong>Signal so'zlar:</strong> yesterday (kecha), last summer (o'tgan yozda), in 2024 (2024 yilda), an hour ago (bir soat oldin)."
        },
        "vocab": [
            {"num": 1, "word": "visit", "uz": "ziyorat qilmoq, bormoq", "pos": "verb", "synonym": "go to see", "example": "We visited our lovely grandparents last weekend.", "meaning": "ko'rgani bormoq"},
            {"num": 2, "word": "travel", "uz": "sayohat qilmoq", "pos": "verb", "synonym": "journey", "example": "They traveled to Khiva by high-speed train.", "meaning": "safar qilmoq"},
            {"num": 3, "word": "watch", "uz": "tomosha qilmoq", "pos": "verb", "synonym": "view", "example": "He watched an exciting football match on TV.", "meaning": "ko'rmoq"},
            {"num": 4, "word": "play", "uz": "o'ynamoq", "pos": "verb", "synonym": "participate", "example": "The children played chess in the afternoon.", "meaning": "mashg'ul bo'lmoq"},
            {"num": 5, "word": "clean", "uz": "tozalamoq", "pos": "verb", "synonym": "tidy up", "example": "She cleaned her bedroom on Saturday morning.", "meaning": "ozoda qilmoq"},
            {"num": 6, "word": "listen", "uz": "tinglamoq", "pos": "verb", "synonym": "hear", "example": "I listened to interesting stories yesterday.", "meaning": "quloq solmoq"},
            {"num": 7, "word": "open", "uz": "ochmoq", "pos": "verb", "synonym": "unlock", "example": "The brave boy opened the mystery wooden chest.", "meaning": "qopqog'ini ochmoq"},
            {"num": 8, "word": "close", "uz": "yopmoq", "pos": "verb", "synonym": "shut", "example": "Mother closed the window because of cold wind.", "meaning": "berkitmoq"},
            {"num": 9, "word": "stop", "uz": "to'xtamoq", "pos": "verb", "synonym": "halt", "example": "The red bus stopped right in front of my house.", "meaning": "harakatdan to'xtamoq"},
            {"num": 10, "word": "walk", "uz": "piyoda yurmoq", "pos": "verb", "synonym": "stroll", "example": "We walked three kilometers in the green park.", "meaning": "qadam tashlab yurmoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Add -ed to the verbs correctly",
            "inst": "Quyidagi fe'llarga imlo qoidalariga rioya qilgan holda -ed qo'shing.",
            "items": [
                "1. visit -> _______________",
                "2. close -> _______________",
                "3. stop -> _______________",
                "4. tidy -> _______________",
                "5. watch -> _______________",
                "6. play -> _______________",
                "7. travel -> _______________",
                "8. study -> _______________"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete the sentences in Past Simple",
            "inst": "Qavs ichidagi to'g'ri fe'llarni o'tgan zamon shaklida yozing.",
            "items": [
                "1. Yesterday, Benny __________ (visit) his friend Leo.",
                "2. We __________ (walk) to the zoo last Saturday.",
                "3. My sister __________ (clean) the kitchen yesterday afternoon.",
                "4. The bus __________ (stop) at the traffic lights.",
                "5. They __________ (travel) to Samarkand last month.",
                "6. I __________ (listen) to my English teacher attentively.",
                "7. Shavkat __________ (close) all the big windows.",
                "8. The pupils __________ (play) badminton after school."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Pronunciation Sorter (/t/, /d/, /id/)",
            "inst": "Fe'llarni talaffuziga qarab 3 ta savatga joylashtiring: visited, washed, played, started, cleaned, watched.",
            "items": [
                "1. /id/ tovushi: ____________________ , ____________________",
                "2. /d/ tovushi:  ____________________ , ____________________",
                "3. /t/ tovushi:  ____________________ , ____________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonym Match",
            "inst": "Fe'llarni o'z sinonimlari bilan tutashtiring.",
            "items": [
                "1. travel [ ___ ]        A. shut",
                "2. close  [ ___ ]        B. stroll",
                "3. stop   [ ___ ]        C. halt",
                "4. walk   [ ___ ]        D. tidy up",
                "5. clean  [ ___ ]        E. journey"
            ]
        },
        "ex_e": {
            "title": "Exercise E: The Lost Time Machine (Quvnoq sarguzasht hikoya)",
            "inst": "Hikoyani o'qing va o'tgan zamon fe'llarini to'ldiring!",
            "story": "Professor Owl <b>(1) traveled</b> back to 100 years ago. He <b>(2) __________</b> (walk) in an old garden and <b>(3) __________</b> (open) a golden door. Inside, he <b>(4) __________</b> (watch) people smiling. Then he <b>(5) __________</b> (stop) the clock and returned home safely!<br>Savol: 'halt' so'zining sinonimi qaysi? -> _______________."
        }
    },
    {
        "unit_num": 9,
        "title": "Past Simple: Common Irregular Verbs",
        "subtitle": "O'tgan oddiy zamon: Noto'g'ri fe'llarning o'tgan shakllari",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "Ingliz tilida <strong>noto'g'ri fe'llar (Irregular Verbs)</strong> -ed qo'shimchasini OLMAYDI! Ular o'tgan zamonda butunlay o'zgaradi va ularni <strong>yod olish</strong> kerak.",
            "tables": [
                {
                    "title": "1. 4-sinf uchun eng muhim 10 ta noto'g'ri fe'l jadvali",
                    "headers": ["V1 (Hozirgi)", "V2 (O'tgan zamon)", "O'zbekcha ma'nosi", "Namuna gap (Example)"],
                    "rows": [
                        ["go", "went", "bordi", "We went to the water park yesterday."],
                        ["see", "saw", "ko'rdi", "I saw a huge elephant at the zoo."],
                        ["eat", "ate", "yedi", "He ate sweet pancakes for breakfast."],
                        ["drink", "drank", "ichdi", "She drank delicious orange juice."],
                        ["buy", "bought", "sotib oldi", "Father bought a new English dictionary."],
                        ["have", "had", "bor edi / qildi", "We had a wonderful picnic yesterday."]
                    ]
                },
                {
                    "title": "2. Qo'shimcha muhim fe'llar",
                    "headers": ["V1", "V2", "O'zbekcha", "V1 -> V2 misoli"],
                    "rows": [
                        ["come", "came", "keldi", "My best friend came to my house."],
                        ["give", "gave", "berdi", "Teacher gave us golden stickers."],
                        ["take", "took", "oldi", "She took nice photographs."],
                        ["write", "wrote", "yozdi", "I wrote a cheerful letter."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Hech qachon <em>goed, eated, seed</em> deb aytmang! Ular noto'g'ri fe'l bo'lgani uchun: <code>went, ate, saw</code> deb aytiladi!",
            "time_words": "<strong>Sehrli eslatma:</strong> V2 shakli faqat DARAK (+) gaplarda ishlatiladi! Inkor va so'roqda esa yana V1 ga qaytadi!"
        },
        "vocab": [
            {"num": 1, "word": "went (go)", "uz": "bordi", "pos": "verb", "synonym": "journeyed", "example": "We went to the water park last Saturday.", "meaning": "harakatlanib yetib bordi"},
            {"num": 2, "word": "saw (see)", "uz": "ko'rdi", "pos": "verb", "synonym": "spotted", "example": "I saw a funny brown monkey at the zoo.", "meaning": "ko'zi tushdi"},
            {"num": 3, "word": "ate (eat)", "uz": "yedi", "pos": "verb", "synonym": "consumed", "example": "He ate three sweet pancakes for breakfast.", "meaning": "taom yedi"},
            {"num": 4, "word": "drank (drink)", "uz": "ichdi", "pos": "verb", "synonym": "sipped", "example": "She drank cold lemon juice yesterday.", "meaning": "ichimlik ichdi"},
            {"num": 5, "word": "bought (buy)", "uz": "sotib oldi", "pos": "verb", "synonym": "purchased", "example": "Father bought a colorful storybook for me.", "meaning": "pulga oldi"},
            {"num": 6, "word": "had (have)", "uz": "bor edi / o'tkazdi", "pos": "verb", "synonym": "possessed", "example": "We had a great time at the amusement park.", "meaning": "egalik qildi"},
            {"num": 7, "word": "came (come)", "uz": "keldi", "pos": "verb", "synonym": "arrived", "example": "My cousin came to visit us yesterday.", "meaning": "tashrif buyurdi"},
            {"num": 8, "word": "gave (give)", "uz": "berdi", "pos": "verb", "synonym": "presented", "example": "The teacher gave us high marks.", "meaning": "taqdim etdi"},
            {"num": 9, "word": "took (take)", "uz": "oldi / olib ketdi", "pos": "verb", "synonym": "grabbed", "example": "She took her umbrella because of the rain.", "meaning": "qo'liga oldi"},
            {"num": 10, "word": "wrote (write)", "uz": "yozdi", "pos": "verb", "synonym": "penned", "example": "Benny wrote a funny poem about carrots.", "meaning": "qog'ozga bitdi"}
        ],
        "ex_a": {
            "title": "Exercise A: Match V1 to V2 form",
            "inst": "Hozirgi shakldagi fe'lni o'tgan shakli bilan tutashtiring.",
            "items": [
                "1. go     -> [ ___ ]       A. drank",
                "2. see    -> [ ___ ]       B. bought",
                "3. eat    -> [ ___ ]       C. went",
                "4. drink  -> [ ___ ]       D. saw",
                "5. buy    -> [ ___ ]       E. had",
                "6. have   -> [ ___ ]       F. ate",
                "7. give   -> [ ___ ]       G. wrote",
                "8. write  -> [ ___ ]       H. gave"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Complete with the Past Simple (V2)",
            "inst": "Qavsdagi fe'llarning o'tgan zamon (V2) shaklini yozing.",
            "items": [
                "1. Yesterday, I __________ (go) to the grand bazaar with mother.",
                "2. We __________ (see) a very clever magic show.",
                "3. Timur __________ (eat) two big slices of watermelon.",
                "4. Dilnoza __________ (drink) warm milk with honey.",
                "5. Father __________ (buy) me an interesting puzzle.",
                "6. My grandparents __________ (come) to our house last night.",
                "7. The teacher __________ (give) Benny a gold star.",
                "8. She __________ (write) an essay about her lovely family."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Mistake Hunter (Xatolarni ovlang)",
            "inst": "Xato yozilgan o'tgan zamon fe'lini topib to'g'irlang.",
            "items": [
                "1. We goed to the cinema yesterday. -> We ____________________",
                "2. He eated all the sweet grapes. -> He ____________________",
                "3. I seed a beautiful butterfly. -> I ____________________",
                "4. She buyed a new school pencil. -> She ____________________",
                "5. They drinked cold water. -> They ____________________",
                "6. Benny writed a secret code. -> Benny ____________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Challenge",
            "inst": "Quyidagi o'tgan zamon fe'llarining sinonimlarini yozing.",
            "items": [
                "1. bought -> p_______________",
                "2. saw    -> s_______________",
                "3. came   -> a_______________",
                "4. gave   -> p_______________",
                "5. wrote  -> p_______________",
                "6. went   -> j_______________"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Pirate Island Quest (Qaroqchilar xazinasi sarguzashti)",
            "inst": "Qaroqchi kapitan kundaligini to'ldiring (went, saw, found, had)!",
            "story": "Yesterday we <b>(1) went</b> to Skull Island. We <b>(2) __________</b> (see) an old pirate map under the rock. We <b>(3) __________</b> (have) big shovels and dug the sand. In the chest, we <b>(4) __________</b> (find) shiny gold coins!<br>Savol: 'buy' fe'lining o'tgan zamon shakli nima? -> _______________."
        }
    },
    {
        "unit_num": 10,
        "title": "Past Simple: Negatives & Questions (did / didn't)",
        "subtitle": "O'tgan oddiy zamon: Inkor va So'roq gaplar",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "Past Simple da <strong>inkor (-)</strong> va <strong>so'roq (?)</strong> gaplar tuzish uchun barcha shaxslar (I, you, he, she, we, they) uchun <strong>DID / DIDN'T</strong> yordamchi fe'li ishlatiladi.",
            "tables": [
                {
                    "title": "1. Inkor shakli (Negative -)",
                    "headers": ["Ega (Subject)", "Yordamchi fe'l", "Asosiy fe'l (V1!)", "Misol (Example)"],
                    "rows": [
                        ["Barcha shaxslar", "did not (didn't)", "V1 (fe'l 1-shaklga qaytadi!)", "I didn't go to the park yesterday."],
                        ["He / She / It", "didn't", "V1", "She didn't see the elephant."],
                        ["We / They", "didn't", "V1", "They didn't buy the expensive toy."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va Qisqa javoblar (?)",
                    "headers": ["Did", "Ega (Subject)", "Asosiy fe'l (V1)", "Qisqa javob (Short Answer)"],
                    "rows": [
                        ["Did", "you", "find your keys?", "Yes, I did. / No, I didn't."],
                        ["Did", "he", "remember the lesson?", "Yes, he did. / No, he didn't."],
                        ["What did", "they", "eat for lunch?", "They ate plov and fresh salad."]
                    ]
                }
            ],
            "tip": "<strong>Destination Watch Out!</strong> 'Did' yoki 'didn't' bo'lgan gapda asosiy fe'l HECH QACHON o'tgan shaklda (V2) bo'lmaydi! <code>didn't went</code> DEYISH KATTA XATO! Doim: <code>didn't go!</code>",
            "time_words": "<strong>Sehrli qoida:</strong> Darakda: I went. Inkorida: I didn't go. So'roqda: Did you go?"
        },
        "vocab": [
            {"num": 1, "word": "find", "uz": "topmoq", "pos": "verb", "synonym": "discover", "example": "Did you find the secret key under the rug?", "meaning": "qidirib erishmoq"},
            {"num": 2, "word": "lose", "uz": "yo'qotmoq", "pos": "verb", "synonym": "misplace", "example": "He didn't lose his pencil case yesterday.", "meaning": "topolmay qolmoq"},
            {"num": 3, "word": "know", "uz": "bilmoq", "pos": "verb", "synonym": "recognize", "example": "Did she know the correct answer to question 5?", "meaning": "xabardor bo'lmoq"},
            {"num": 4, "word": "forget", "uz": "unutmoq", "pos": "verb", "synonym": "fail to remember", "example": "I didn't forget my English homework today.", "meaning": "yoddan chiqarmoq"},
            {"num": 5, "word": "remember", "uz": "eslamoq, esda tutmoq", "pos": "verb", "synonym": "recall", "example": "Did you remember grandmother's birthday?", "meaning": "yodga olmoq"},
            {"num": 6, "word": "meet", "uz": "uchrashmoq", "pos": "verb", "synonym": "encounter", "example": "We didn't meet our teacher in the supermarket.", "meaning": "yuzma-yuz kelmoq"},
            {"num": 7, "word": "tell", "uz": "aytmoq", "pos": "verb", "synonym": "narrate", "example": "Did your friend tell you the funny story?", "meaning": "hikoya qilib bermoq"},
            {"num": 8, "word": "leave", "uz": "tark etmoq, ketmoq", "pos": "verb", "synonym": "depart", "example": "The train didn't leave the station on time.", "meaning": "jo'nab ketmoq"},
            {"num": 9, "word": "hear", "uz": "eshitmoq", "pos": "verb", "synonym": "listen to", "example": "Did anyone hear strange noises last night?", "meaning": "tovushni ilg'amoq"},
            {"num": 10, "word": "ask", "uz": "so'ramoq", "pos": "verb", "synonym": "inquire", "example": "She didn't ask any difficult questions.", "meaning": "savol bermoq"}
        ],
        "ex_a": {
            "title": "Exercise A: Circle the correct option",
            "inst": "To'g'ri fe'l shaklini tanlang.",
            "items": [
                "1. I didn't (go / went) to school last Sunday.",
                "2. Did you (see / saw) the big green parrot?",
                "3. Benny didn't (ate / eat) the sour lemon.",
                "4. (Did they / Do they) find the missing treasure yesterday?",
                "5. She didn't (forgot / forget) her backpack.",
                "6. Did father (bought / buy) any ice cream?",
                "7. We didn't (hear / heard) the phone ringing.",
                "8. Did you (remember / remembered) to lock the door?"
            ]
        },
        "ex_b": {
            "title": "Exercise B: Change into Negative (-)",
            "inst": "Gaplarni 'didn't + V1' yordamida inkor shakliga aylantiring.",
            "items": [
                "1. I lost my blue pen. -> I ____________________ my blue pen.",
                "2. She went to the park. -> She ____________________ to the park.",
                "3. We saw a scary spider. -> We ____________________ a scary spider.",
                "4. Timur ate the spicy soup. -> Timur ____________________ the spicy soup.",
                "5. They left early. -> They ____________________ early.",
                "6. He told a secret. -> He ____________________ a secret.",
                "7. Aziz knew the riddle. -> Aziz ____________________ the riddle.",
                "8. You bought candy. -> You ____________________ candy."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Question Creator (?)",
            "inst": "So'zlarni tartibga solib 'Did ...?' savollarini tuzing.",
            "items": [
                "1. find / you / the key / Did / ? -> ________________________________________",
                "2. Did / meet / she / her friend / ? -> ________________________________________",
                "3. your homework / forget / Did / you / ? -> ________________________________________",
                "4. hear / they / the music / Did / ? -> ________________________________________",
                "5. What / you / see / did / at the zoo / ? -> ________________________________________",
                "6. Where / they / go / did / yesterday / ? -> ________________________________________"
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Match",
            "inst": "So'zlarni sinonimlari bilan birlashtiring.",
            "items": [
                "1. find     [ ___ ]       A. misplace",
                "2. lose     [ ___ ]       B. discover",
                "3. remember [ ___ ]       C. depart",
                "4. leave    [ ___ ]       D. recall",
                "5. tell     [ ___ ]       E. inquire",
                "6. ask      [ ___ ]       F. narrate"
            ]
        },
        "ex_e": {
            "title": "Exercise E: Detective Sherlock & The Stolen Cake (Detektiv jumboq)",
            "inst": "Detektiv Sherlok savollarini to'ldiring va kim tortni yeganini toping!",
            "story": "Sherlock: 'Did you eat the chocolate cake, Benny?'<br>Benny: 'No, I <b>(1) didn't</b>! I only ate my carrots.'<br>Sherlock: 'Did Leo <b>(2) __________</b> (see) anyone in the kitchen?'<br>Leo: 'Yes! I <b>(3) __________</b> (see) the puppy with chocolate on its nose!'<br>Xulosa: Tortni kim yegan? -> ____________________.<br>'discover' so'zining sinonimi: ____________________."
        }
    },
    {
        "unit_num": 11,
        "title": "Past Continuous: Actions in Progress in the Past",
        "subtitle": "O'tgan davomli zamon: O'tmishda davom etayotgan harakatlar",
        "tag": "Grammar & Vocabulary A2",
        "grammar": {
            "meaning": "<strong>Past Continuous (was / were + V-ing)</strong> o'tgan zamonning <strong>aniq bir vaqtida</strong> (masalan, kecha soat 5 da) davom etayotgan ish-harakatlarni ifodalash uchun ishlatiladi.",
            "tables": [
                {
                    "title": "1. Darak va Inkor formulasi (+ / -)",
                    "headers": ["Ega (Subject)", "Was / Were", "Fe'l + ing", "Misol (Example)"],
                    "rows": [
                        ["I / He / She / It", "was / wasn't", "V-ing", "At 5 PM, she was doing her homework."],
                        ["We / You / They", "were / weren't", "V-ing", "They were playing chess yesterday afternoon."]
                    ]
                },
                {
                    "title": "2. So'roq shakli va 'When' bog'lovchisi",
                    "headers": ["Shakl", "Formula", "Misol (Example)", "Ma'nosi"],
                    "rows": [
                        ["So'roq (?)", "Were you sleeping at 8 PM?", "Yes, I was. / No, I wasn't.", "Kecha soat 8 da uxlayotganmiding?"],
                        ["When bog'lovchisi", "Past Continuous + when + Past Simple", "I was reading when mother arrived.", "Onam kelganida men o'qiyotgan edim."]
                    ]
                }
            ],
            "tip": "<strong>Destination Tip!</strong> Past Simple o'tgan zamonda bo'lib o'tgan qisqa harakat (I arrived), Past Continuous esa o'sha paytda davom etayotgan jarayon (I was sleeping)!",
            "time_words": "<strong>Signal so'zlar:</strong> at 5 o'clock yesterday, all evening yesterday, when (o'shanda)."
        },
        "vocab": [
            {"num": 1, "word": "do homework", "uz": "vazifa bajarmoq", "pos": "phr v", "synonym": "study", "example": "At 7 PM, I was doing my English homework.", "meaning": "uy vazifasini ishlamoq"},
            {"num": 2, "word": "read", "uz": "o'qimoq", "pos": "verb", "synonym": "peruse", "example": "She was reading a comic book when phone rang.", "meaning": "mutolaa qilmoq"},
            {"num": 3, "word": "sleep", "uz": "uxlamoq", "pos": "verb", "synonym": "snooze", "example": "The little baby was sleeping peacefully.", "meaning": "uyquda bo'lmoq"},
            {"num": 4, "word": "cook", "uz": "ovqat tayyorlamoq", "pos": "verb", "synonym": "prepare food", "example": "Mother was cooking plov all afternoon.", "meaning": "taom pishirmoq"},
            {"num": 5, "word": "wait", "uz": "kutmoq", "pos": "verb", "synonym": "expect", "example": "They were waiting for the bus in the rain.", "meaning": "kutib turmoq"},
            {"num": 6, "word": "draw", "uz": "chizmoq", "pos": "verb", "synonym": "sketch", "example": "He was drawing a superhero yesterday evening.", "meaning": "tasvir chizmoq"},
            {"num": 7, "word": "repair", "uz": "tuzatmoq", "pos": "verb", "synonym": "fix", "example": "Father was repairing his bicycle in garage.", "meaning": "tamirlamoq"},
            {"num": 8, "word": "listen to", "uz": "eshitmoq", "pos": "verb", "synonym": "tune in", "example": "We were listening to radio music yesterday.", "meaning": "tinglamoq"},
            {"num": 9, "word": "play chess", "uz": "shaxmat o'ynamoq", "pos": "phr v", "synonym": "match", "example": "The brothers were playing chess quietly.", "meaning": "shaxmat donalarini surmoq"},
            {"num": 10, "word": "rain", "uz": "yomg'ir yog'moq", "pos": "verb", "synonym": "pour", "example": "It was raining heavily at four o'clock.", "meaning": "yomg'ir quyib yog'moq"}
        ],
        "ex_a": {
            "title": "Exercise A: Choose was or were",
            "inst": "To'g'ri yordamchi fe'lni tanlang.",
            "items": [
                "1. At 6:00 yesterday, I (was / were) doing my homework.",
                "2. The children (was / were) playing football in the yard.",
                "3. My mother (was / were) cooking dinner when I came.",
                "4. What (was / were) you doing at eight o'clock last night?",
                "5. Benny (wasn't / weren't) sleeping; he was reading.",
                "6. It (was / were) raining hard all afternoon.",
                "7. (Was / Were) your parents watching television?",
                "8. We (was / were) repairing our old wooden boat."
            ]
        },
        "ex_b": {
            "title": "Exercise B: Form the Past Continuous",
            "inst": "Qavsdagi fe'llardan Past Continuous shaklini yasang (was/were + V-ing).",
            "items": [
                "1. At 5 PM yesterday, Shavkat __________ (read) an adventure book.",
                "2. We __________ (wait) for the red bus in the snow.",
                "3. They __________ (not / play) chess; they were drawing.",
                "4. I __________ (listen) to a cheerful song on the radio.",
                "5. She __________ (repair) her bicycle yesterday morning.",
                "6. The cute puppy __________ (sleep) near the fire.",
                "7. __________ you __________ (do) your homework at 7 PM?",
                "8. Father __________ (cook) delicious steak on the grill."
            ]
        },
        "ex_c": {
            "title": "Exercise C: Sentence Combiner with 'When'",
            "inst": "Gaplarni 'when' yordamida birlashtiring (Biri Past Continuous, biri Past Simple).",
            "items": [
                "1. I (read) / when / the lights went out. -> I was reading when the lights went out.",
                "2. She (cook) / when / the telephone rang. -> She was ____________________ when the phone rang.",
                "3. We (play) / when / it started to rain. -> We were ____________________ when it started to rain.",
                "4. Benny (sleep) / when / someone knocked. -> Benny was ____________________ when someone knocked."
            ]
        },
        "ex_d": {
            "title": "Exercise D: Synonyms Challenge",
            "inst": "Sinonimlarni moslashtiring.",
            "items": [
                "1. repair  [ ___ ]       A. pour",
                "2. rain    [ ___ ]       B. fix",
                "3. sleep   [ ___ ]       C. sketch",
                "4. draw    [ ___ ]       D. snooze",
                "5. read    [ ___ ]       E. peruse"
            ]
        },
        "ex_e": {
            "title": "Exercise E: The Alibi Game (Kim qayerda nima qilayotgan edi?)",
            "inst": "Kecha kechqurun soat 8 da kim nima qilayotgan edi? Savollarga javob bering!",
            "story": "Officer: 'Mr. Bear, what were you doing at 8 PM yesterday?'<br>Bear: 'I <b>was eating</b> sweet honey in my cave.'<br>Officer: 'And what were the rabbits doing?'<br>Bear: 'They <b>(1) were __________</b> (dance) in the meadow!'<br>Savol: 'fix' so'zining sinonimi nima? Javob: ____________________."
        }
    }
]

REVISION_2_DATA = {
    "title": "Revision 2: Units 7 - 11 Review Test",
    "subtitle": "O'tgan zamonlar (Past Simple, Irregular Verbs, Past Continuous) bo'yicha oraliq nazorat",
    "tag": "Comprehensive Review Test",
    "sections": [
        {
            "name": "Part A: Past Tenses Master (Was/Were, Did/Didn't, V2, Past Continuous)",
            "items": [
                "1. Where (was / were) you yesterday afternoon?",
                "2. We (went / goed) to the cinema and (saw / seed) a fun film.",
                "3. He didn't (remember / remembered) his backpack.",
                "4. Did you (eat / ate) all the delicious plov?",
                "5. At 6 PM yesterday, she (was doing / did) her homework.",
                "6. The children (played / plaied) football until evening.",
                "7. I (wasn't / weren't) tired yesterday night.",
                "8. They were sleeping when the telephone (rang / was ringing)."
            ]
        },
        {
            "name": "Part B: Vocabulary & Irregular Verbs Match",
            "items": [
                "1. buy    -> Past: [ ___________ ] | Synonym: purchased",
                "2. see    -> Past: [ ___________ ] | Synonym: spotted",
                "3. delicious -> Synonym: [ ___________ ] (tasty / loud)",
                "4. famous    -> Synonym: [ ___________ ] (well-known / tiny)",
                "5. repair    -> Synonym: [ ___________ ] (fix / pour)",
                "6. find      -> Synonym: [ ___________ ] (discover / lose)"
            ]
        },
        {
            "name": "Part C: Correct the Error (Xatoni toping va to'g'rilang)",
            "items": [
                "1. She didn't went to school yesterday. -> ________________________________________",
                "2. We was at the historical museum. -> ________________________________________",
                "3. Did he bought a new bicycle? -> ________________________________________",
                "4. Benny stoped the fast train. -> ________________________________________",
                "5. They was playing chess at 5 PM. -> ________________________________________",
                "6. I didn't saw the little cat. -> ________________________________________"
            ]
        }
    ],
    "score_box": "Part A: ___/8  |  Part B: ___/6  |  Part C: ___/6  |  Total Score: ___/20"
}
