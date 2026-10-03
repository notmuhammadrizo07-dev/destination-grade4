// site_data.js - Complete data for Destination English Grammar Grade 4 Web App

const SITE_DATA = {
  units: [
    {
      id: "unit-1",
      num: 1,
      title: "Present Simple: 'To Be' (am, is, are)",
      subtitle: "Hozirgi oddiy zamon: Bo'lmoq fe'li",
      tag: "Grammar & Vocabulary A1",
      meaning: "<b>'To be' fe'li</b> shaxs, narsa yoki hayvonning <i>kimligi, qandayligi, qayerdaligi</i> yoki <i>yoshi</i> haqida gapirganda ishlatiladi. O'zbek tilida bu <b>'-dir', 'man', 'san', 'miz'</b> qo'shimchalariga to'g'ri keladi.",
      tables: [
        {
          title: "Darak (+) va Inkor (-) shakli",
          headers: ["Ega (Subject)", "Darak (+)", "Inkor (-)", "Misol (Example)"],
          rows: [
            ["I", "am (I'm)", "am not (I'm not)", "I am a 4th grade student."],
            ["He / She / It", "is (He's)", "is not (isn't)", "She is clever. / It isn't cold."],
            ["We / You / They", "are (We're)", "are not (aren't)", "We are happy friends."]
          ]
        },
        {
          title: "So'roq (?) va Qisqa javoblar",
          headers: ["Am/Is/Are", "Ega", "Davomi", "Qisqa javob (Short Answer)"],
          rows: [
            ["Am", "I", "ready?", "Yes, you are. / No, you aren't."],
            ["Is", "he / she / it", "tired?", "Yes, he is. / No, she isn't."],
            ["Are", "we / you / they", "at school?", "Yes, they are. / No, they aren't."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> <code>am not</code> ning qisqartmasi yo'q (<i>I amn't</i> DEYILMAYDI!), faqat <code>I'm not</code> bo'ladi. Lekin <code>is not = isn't</code> va <code>are not = aren't</code> bo'ladi!",
      time_words: "<b>Ko'rsatkich so'zlar:</b> today, now, always, every day.",
      vocab: [
        { num: 1, word: "happy", uz: "xursand", pos: "adj", synonym: "glad", meaning: "quvnoq, shod", example: "I am happy to meet my new English teacher." },
        { num: 2, word: "clever", uz: "aqlli", pos: "adj", synonym: "smart", meaning: "zukko, fahmli", example: "She is a clever student in Grade 4." },
        { num: 3, word: "big", uz: "katta", pos: "adj", synonym: "large", meaning: "ulkan, keng", example: "Our school library is very big and bright." },
        { num: 4, word: "beautiful", uz: "chiroyli", pos: "adj", synonym: "pretty", meaning: "go'zal, ko'rkam", example: "Tashkent is a beautiful sunny city." },
        { num: 5, word: "small", uz: "kichik", pos: "adj", synonym: "tiny", meaning: "mitti, jajji", example: "This is a small puppy, but it is fast." },
        { num: 6, word: "fast", uz: "tezkor", pos: "adj", synonym: "quick", meaning: "chaqqon, ildam", example: "Cheetahs are very fast runners." },
        { num: 7, word: "tired", uz: "charchagan", pos: "adj", synonym: "exhausted", meaning: "holsizlangan", example: "We are tired after football practice." },
        { num: 8, word: "friendly", uz: "do'stona", pos: "adj", synonym: "kind", meaning: "mehribon, ochiqko'ngil", example: "My classmates are very friendly." },
        { num: 9, word: "quiet", uz: "tinch, sokin", pos: "adj", synonym: "silent", meaning: "shovqinsiz", example: "The classroom is quiet during reading." },
        { num: 10, word: "difficult", uz: "qiyin", pos: "adj", synonym: "hard", meaning: "murakkab, og'ir", example: "English grammar is not difficult!" }
      ],
      cloze: {
        title: "Unit 1 Story • The New Student in Grade 4",
        inst: "Matnni o'qing va qavs ichidagi 'to be' fe'lini (am, is, are, isn't, aren't) to'g'ri shaklga qo'ying:",
        text: "Hello! My name (1. be) {is} Alisher. I (2. be) {am} nine years old, and I (3. be) {am} a student in Grade 4. Our school (4. be) {is} very big and clean. The teachers (5. be) {are} friendly and kind. My best friend (6. be) {is} Benny. We (7. not / be) {aren't} lazy; we (8. be) {are} hard-working students. English (9. not / be) {isn't} difficult for us. (10. be) {Are} you ready to learn together?",
        answers: { 1: "is", 2: "am", 3: "am", 4: "is", 5: "are", 6: "is", 7: "aren't", 8: "are", 9: "isn't", 10: "Are" }
      },
      quiz: [
        { q: "Benny and Leo (am / is / are) best friends at school.", opts: ["am", "is", "are"], ans: "are" },
        { q: "I (am / is / are) nine years old today.", opts: ["am", "is", "are"], ans: "am" },
        { q: "The English test (am not / isn't / aren't) difficult at all.", opts: ["am not", "isn't", "aren't"], ans: "isn't" },
        { q: "(Am / Is / Are) your parents at home right now?", opts: ["Am", "Is", "Are"], ans: "Are" },
        { q: "'clever' so'zining sinonimi qaysi?", opts: ["tiny", "smart", "loud"], ans: "smart" }
      ],
      video: {
        "title": "Unit 1: Verb 'To Be' (am, is, are) Video Dars",
        "desc": "Verb 'To Be' (am, is, are) ning qo'llanishi va qoidalarini quvnoq animatsion video dars orqali ko'ring:",
        "youtube_id": "cEzSLzzKkf0"

}
    },

    {
      id: "unit-2",
      num: 2,
      title: "Present Simple: Action Verbs (Affirmative)",
      subtitle: "Hozirgi oddiy zamon: Har kungi odatiy harakatlar",
      tag: "Grammar & Vocabulary A1",
      meaning: "<b>Present Simple</b> doimiy takrorlanadigan ish-harakatlar, kun tartibi (routines) va umumiy haqiqatlar haqida gapirish uchun ishlatiladi.",
      tables: [
        {
          title: "Ega va Fe'l moslashuvi",
          headers: ["Ega (Subject)", "Fe'l shakli", "Qoida", "Misol (Example)"],
          rows: [
            ["I / You / We / They", "V1 (oddiy)", "Hech qanday qo'shimcha olmaydi", "I wake up early. We play chess."],
            ["He / She / It", "V + -s / -es / -ies", "-s, -es yoki -ies qo'shiladi", "He watches TV. She studies English."]
          ]
        },
        {
          title: "-s / -es / -ies imlo qoidalari",
          headers: ["Fe'l oxiri", "Qo'shimcha", "Misol", "Izoh"],
          rows: [
            ["Ko'pchilik fe'llar", "+ s", "start -> starts, eat -> eats", "Oddiy -s"],
            ["-ch, -sh, -ss, -x, -o", "+ es", "watch -> watches, go -> goes", "-es qo'shiladi"],
            ["Undosh + y", "y -> ies", "tidy -> tidies, fly -> flies", "'y' harfi 'i' ga aylanadi"]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Unli + y (masalan, <i>play</i>) bo'lsa, 'y' o'zgarmaydi: <code>plays</code> bo'ladi! Hech qachon <i>plaies</i> deb yozmang!",
      time_words: "<b>Signal so'zlar:</b> every day, usually, always, in the morning.",
      vocab: [
        { num: 1, word: "start", uz: "boshlamoq", pos: "verb", synonym: "begin", meaning: "ishni yo'lga qo'ymoq", example: "We start our lessons at 8:00 AM." },
        { num: 2, word: "finish", uz: "tugatmoq", pos: "verb", synonym: "end", meaning: "oxiriga yetkazmoq", example: "I finish my homework before dinner." },
        { num: 3, word: "speak", uz: "gapirmoq", pos: "verb", synonym: "talk", meaning: "nutq so'zlamoq", example: "He speaks Uzbek and English fluently." },
        { num: 4, word: "watch", uz: "tomosha qilmoq", pos: "verb", synonym: "look at", meaning: "diqqat bilan ko'rmoq", example: "Benny watches cartoons on Sunday." },
        { num: 5, word: "eat", uz: "yemoq", pos: "verb", synonym: "have", meaning: "taom iste'mol qilmoq", example: "Lions eat meat every single day." },
        { num: 6, word: "tidy", uz: "tartibga keltirmoq", pos: "verb", synonym: "clean", meaning: "yig'ishtirmoq", example: "She tidies her desk every afternoon." },
        { num: 7, word: "help", uz: "yordam bermoq", pos: "verb", synonym: "assist", meaning: "ko'maklashmoq", example: "Good boys help their grandmothers." },
        { num: 8, word: "love", uz: "sevmoq", pos: "verb", synonym: "adore", meaning: "juda yaxshi ko'rmoq", example: "Children love sweet chocolate ice cream." },
        { num: 9, word: "learn", uz: "o'rganmoq", pos: "verb", synonym: "study", meaning: "bilim olmoq", example: "We learn ten new English words daily." },
        { num: 10, word: "wake up", uz: "uyg'onmoq", pos: "phr v", synonym: "get up", meaning: "uyqudan turmoq", example: "I wake up at seven o'clock." }
      ],
      cloze: {
        title: "Unit 2 Story • Super Benny's Daily Routine",
        inst: "Qavs ichidagi fe'llarni Present Simple shakliga qo'ying (-s qo'shimchasiga diqqat qiling!):",
        text: "Every morning, Benny the Bunny (1. wake up) {wakes up} at 6:30. He (2. wash) {washes} his ears and (3. eat) {eats} two big carrots. At 8:00, he (4. start) {starts} his school. In the classroom, he (5. speak) {speaks} English and (6. learn) {learns} new rules. In the afternoon, he (7. help) {helps} his mother and (8. tidy) {tidies} his lovely room. In the evening, Benny (9. watch) {watches} funny cartoons and he (10. love) {loves} reading adventure books.",
        answers: { 1: "wakes up", 2: "washes", 3: "eats", 4: "starts", 5: "speaks", 6: "learns", 7: "helps", 8: "tidies", 9: "watches", 10: "loves" }
      },
      quiz: [
        { q: "Benny (wake / wakes) up at 7:00 every morning.", opts: ["wake", "wakes"], ans: "wakes" },
        { q: "They (speak / speaks) three languages very well.", opts: ["speak", "speaks"], ans: "speak" },
        { q: "My mother (cook / cooks) delicious plov on weekends.", opts: ["cook", "cooks"], ans: "cooks" },
        { q: "She (tidy / tidies) her bedroom every Saturday.", opts: ["tidy", "tidies"], ans: "tidies" },
        { q: "'start' so'zining sinonimi qaysi?", opts: ["begin", "end", "stop"], ans: "begin" }
      ],
      video: {
        "title": "Unit 2: Present Simple Routines & Action Verbs",
        "desc": "Hozirgi oddiy zamon, kundalik tartib (daily routines) va fe'llar bo'yicha video dars:",
        "youtube_id": "pEx5entLOFQ"

}
    },

    {
      id: "unit-3",
      num: 3,
      title: "Present Simple: Negatives & Questions",
      subtitle: "Hozirgi oddiy zamon: Inkor va So'roq shakllari (do / does)",
      tag: "Grammar & Vocabulary A1",
      meaning: "Present Simple da inkor va so'roq gaplar tuzish uchun <b>DO</b> va <b>DOES</b> yordamchi fe'llaridan foydalanamiz.",
      tables: [
        {
          title: "Inkor shakli (-)",
          headers: ["Ega (Subject)", "Yordamchi", "Asosiy fe'l", "Misol (Example)"],
          rows: [
            ["I / You / We / They", "don't (do not)", "V1", "I don't play football on Mondays."],
            ["He / She / It", "doesn't (does not)", "V1 (-s yo'qoladi!)", "He doesn't eat spicy food."]
          ]
        },
        {
          title: "So'roq shakli (?)",
          headers: ["Do / Does", "Ega", "Fe'l", "Qisqa javob"],
          rows: [
            ["Do", "you / they", "like apples?", "Yes, I do. / No, they don't."],
            ["Does", "he / she", "read books?", "Yes, he does. / No, she doesn't."]
          ]
        }
      ],
      tip: "<b>Destination Watch Out!</b> 'Does' yoki 'doesn't' bo'lsa, asosiy fe'ldagi <b>-s</b> tushib qoladi! <code>doesn't likes</code> DEYILMAYDI! Doim: <code>doesn't like!</code>",
      time_words: "<b>Eslatma:</b> Do you...? Does he...? Doim 1-shaklda fe'l keladi.",
      vocab: [
        { num: 1, word: "play", uz: "o'ynamoq", pos: "verb", synonym: "participate", meaning: "o'yin o'ynamoq", example: "Do you play football after school?" },
        { num: 2, word: "like", uz: "yoqtirmoq", pos: "verb", synonym: "enjoy", meaning: "xush ko'rmoq", example: "He doesn't like cold windy weather." },
        { num: 3, word: "want", uz: "xohlamoq", pos: "verb", synonym: "wish", meaning: "istamoq", example: "Do they want some tasty juice?" },
        { num: 4, word: "ride", uz: "minmoq", pos: "verb", synonym: "pedal", meaning: "velosiped yoki otda yurmoq", example: "She doesn't ride a bike in the rain." },
        { num: 5, word: "listen", uz: "tinglamoq", pos: "verb", synonym: "hear", meaning: "quloq solmoq", example: "I listen to English stories every evening." },
        { num: 6, word: "read", uz: "o'qimoq", pos: "verb", synonym: "peruse", meaning: "kitob o'qimoq", example: "Does your brother read comic books?" },
        { num: 7, word: "swim", uz: "suzmoq", pos: "verb", synonym: "bathe", meaning: "suvda suzmoq", example: "We don't swim in cold winter rivers." },
        { num: 8, word: "draw", uz: "rasm chizmoq", pos: "verb", synonym: "sketch", meaning: "tasvirlamoq", example: "Does she draw funny animal pictures?" },
        { num: 9, word: "jump", uz: "sakramoq", pos: "verb", synonym: "leap", meaning: "sakrab o'tmoq", example: "The frog jumps high over the pond." },
        { num: 10, word: "understand", uz: "tushunmoq", pos: "verb", synonym: "comprehend", meaning: "anglamoq", example: "Do you understand this grammar rule?" }
      ],
      cloze: {
        title: "Unit 3 Story • The Mystery of the Alien Friend",
        inst: "Qavsdagi fe'llarni don't, doesn't, Do, yoki Does bilan to'ldiring:",
        text: "Zog is an alien from Mars. (1. do/does) {Does} he speak English? Yes, he does! But he (2. not / like) {doesn't like} noisy cities. Aliens (3. not / eat) {don't eat} bread and butter; they eat cosmic dust! '(4. do/does) {Do} you want to visit Mars?' asks Zog. Benny answers: 'I (5. not / know) {don't know}, but I (6. not / want) {don't want} to get lost!' Zog laughs. He (7. not / ride) {doesn't ride} a bicycle; he flies a silver UFO. (8. do/does) {Do} you understand his space language?",
        answers: { 1: "Does", 2: "doesn't like", 3: "don't eat", 4: "Do", 5: "don't know", 6: "don't want", 7: "doesn't ride", 8: "Do" }
      },
      quiz: [
        { q: "(Do / Does) you like playing computer games?", opts: ["Do", "Does"], ans: "Do" },
        { q: "She (don't / doesn't) want to eat cold porridge.", opts: ["don't", "doesn't"], ans: "doesn't" },
        { q: "(Do / Does) your cat swim in the bathtub?", opts: ["Do", "Does"], ans: "Does" },
        { q: "We (don't / doesn't) go to school on Sundays.", opts: ["don't", "doesn't"], ans: "don't" },
        { q: "'enjoy' so'zining sinonimi qaysi?", opts: ["like", "jump", "draw"], ans: "like" }
      ],
      video: {
        "title": "Unit 3: Present Simple Negatives & Questions (Do / Does)",
        "desc": "Do va Does yordamchi fe'llari bilan inkor (don't/doesn't) va so'roq gaplar tuzish darsi:",
        "youtube_id": "7LWC01gTY2s"

}
    },

    {
      id: "unit-4",
      num: 4,
      title: "Present Continuous: Affirmative & Negative",
      subtitle: "Hozirgi davomli zamon: Ayni daqiqada sodir bo'layotgan harakatlar",
      tag: "Grammar & Vocabulary A1-A2",
      meaning: "<b>Present Continuous</b> ayni gapirilayotgan paytda (ayni daqiqada) sodir bo'layotgan ish-harakatlarni ifodalaydi. Formulasi: <b>am / is / are + V-ing</b>.",
      tables: [
        {
          title: "Darak (+) va Inkor (-)",
          headers: ["Ega (Subject)", "To Be", "Fe'l + ing", "Misol (Example)"],
          rows: [
            ["I", "am / am not", "writing", "I am writing a story right now."],
            ["He / She / It", "is / isn't", "cooking", "She is cooking soup. / He isn't sleeping."],
            ["We / You / They", "are / aren't", "running", "They are running across the park."]
          ]
        },
        {
          title: "-ing imlo qoidalari",
          headers: ["Fe'l turi", "Qoida", "Misollar", "Izoh"],
          rows: [
            ["Ko'pchilik fe'llar", "+ ing", "sleep -> sleeping, shout -> shouting", "Oddiy qo'shiladi"],
            ["Oxiri 'e' bo'lsa", "e tushib qoladi + ing", "write -> writing, dance -> dancing", "'e' harfi o'chiriladi"],
            ["1 qisqa unli + 1 undosh", "Undosh ikkilanadi", "run -> running, swim -> swimming", "2 marta yoziladi"]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> <code>play -> playing</code> bo'ladi, 'y' harfi hech qachon ikkilanmaydi yoki tushib qolmaydi!",
      time_words: "<b>Signal so'zlar:</b> now, right now, at the moment, Look!, Listen!",
      vocab: [
        { num: 1, word: "shout", uz: "baqirmoq", pos: "verb", synonym: "yell", meaning: "baland ovoz chiqarmoq", example: "Why is the boy shouting so loudly?" },
        { num: 2, word: "sleep", uz: "uxlamoq", pos: "verb", synonym: "rest", meaning: "uyquda bo'lmoq", example: "The baby is sleeping peacefully right now." },
        { num: 3, word: "write", uz: "yozmoq", pos: "verb", synonym: "pen", meaning: "harflarni yozmoq", example: "I am writing a cheerful poem in English." },
        { num: 4, word: "run", uz: "yugurmoq", pos: "verb", synonym: "sprint", meaning: "tez harakatlanmoq", example: "Look! The children are running across the grass." },
        { num: 5, word: "cook", uz: "ovqat pishirmoq", pos: "verb", synonym: "prepare food", meaning: "taom tayyorlamoq", example: "Mother is cooking delicious soup for dinner." },
        { num: 6, word: "laugh", uz: "kulmoq", pos: "verb", synonym: "chuckle", meaning: "kulgi ko'tarmoq", example: "They are laughing at the funny clown." },
        { num: 7, word: "drink", uz: "ichmoq", pos: "verb", synonym: "sip", meaning: "suyuqlik ichmoq", example: "The little cat is drinking warm milk." },
        { num: 8, word: "dance", uz: "raqsqa tushmoq", pos: "verb", synonym: "groove", meaning: "musiqaga o'ynamoq", example: "The cheerful girls are dancing together." },
        { num: 9, word: "paint", uz: "bo'yamoq", pos: "verb", synonym: "color", meaning: "bo'yoq bilan chizmoq", example: "He is painting a bright yellow sun." },
        { num: 10, word: "wear", uz: "kiyib yurmoq", pos: "verb", synonym: "put on", meaning: "kiyimda bo'lmoq", example: "She is wearing a beautiful blue dress today." }
      ],
      cloze: {
        title: "Unit 4 Story • The Great Park Picnic Right Now",
        inst: "Qavsdagi fe'llarni Present Continuous shaklida yozing (am/is/are + V-ing):",
        text: "Look! The sun is shining brightly in the sky. Right now, our family (1. have) {is having} a picnic in the park. My brother Timur (2. run) {is running} after a colorful butterfly. Mother (3. cook) {is cooking} delicious sandwiches, and father (4. drink) {is drinking} cold lemon juice. Listen! The birds (5. sing) {are singing} sweet songs. Two little kittens (6. not / sleep) {aren't sleeping}; they (7. play) {are playing} with a red ball. Benny the Bunny (8. paint) {is painting} the park landscape right now!",
        answers: { 1: "is having", 2: "is running", 3: "is cooking", 4: "is drinking", 5: "are singing", 6: "aren't sleeping", 7: "are playing", 8: "is painting" }
      },
      quiz: [
        { q: "Listen! The birds (are singing / sing) in the garden.", opts: ["are singing", "sing"], ans: "are singing" },
        { q: "Look! The rabbit (is runing / is running) very quickly.", opts: ["is runing", "is running"], ans: "is running" },
        { q: "We (aren't sleeping / isn't sleeping) at the moment.", opts: ["aren't sleeping", "isn't sleeping"], ans: "aren't sleeping" },
        { q: "She (is danceing / is dancing) beautifully on the stage.", opts: ["is danceing", "is dancing"], ans: "is dancing" },
        { q: "'sprint' so'zining sinonimi qaysi?", opts: ["sleep", "run", "cook"], ans: "run" }
      ],
      video: {
        "title": "Unit 4: Present Continuous Tense (am/is/are + ing)",
        "desc": "Ayni damda sodir bo'layotgan harakatlar (Present Continuous) qoidalarini video orqali o'rganing:",
        "youtube_id": "S1XZERFjB5g"

}
    },

    {
      id: "unit-5",
      num: 5,
      title: "Present Continuous: Questions & Short Answers",
      subtitle: "Hozirgi davomli zamon: So'roq gaplar va Qisqa javoblar",
      tag: "Grammar & Vocabulary A1-A2",
      meaning: "Kimdir ayni paytda nima qilayotganini so'rash uchun <b>Am / Is / Are + Ega + V-ing?</b> formulasidan foydalanamiz.",
      tables: [
        {
          title: "Umumiy so'roq va Javoblar",
          headers: ["Am/Is/Are", "Ega", "V-ing?", "Qisqa javob"],
          rows: [
            ["Is", "he / she", "sleeping?", "Yes, he is. / No, she isn't."],
            ["Are", "you / they", "reading?", "Yes, I am. / No, they aren't."]
          ]
        },
        {
          title: "Wh- maxsus so'roq gaplar",
          headers: ["Wh- so'zi", "Am/Is/Are", "Ega + V-ing", "Javob misoli"],
          rows: [
            ["What", "are you", "doing now?", "I am looking for my book."],
            ["Where", "is she", "going?", "She is going to the park."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Qisqa javobda qisqartma ishlatilmaydi: <code>Yes, he's</code> DEYILMAYDI! Faqat: <code>Yes, he is!</code> deb to'liq yoziladi!",
      time_words: "<b>So'roq so'zlari:</b> What (nima), Where (qayerda), Why (nima uchun), Who (kim).",
      vocab: [
        { num: 1, word: "look for", uz: "qidirmoq", pos: "phr v", synonym: "search", meaning: "topishga urinmoq", example: "What are you looking for under the table?" },
        { num: 2, word: "hide", uz: "yashirinmoq", pos: "verb", synonym: "conceal", meaning: "ko'rinmas bo'lmoq", example: "Where is the rabbit hiding right now?" },
        { num: 3, word: "fly", uz: "uchmoq", pos: "verb", synonym: "soar", meaning: "havoda harakatlanmoq", example: "Is the colorful kite flying high in the sky?" },
        { num: 4, word: "carry", uz: "ko'tarib bormoq", pos: "verb", synonym: "hold", meaning: "qo'lda eltmoq", example: "Are you carrying a heavy school bag?" },
        { num: 5, word: "wash", uz: "yuvmoq", pos: "verb", synonym: "clean", meaning: "tozalamoq", example: "Is father washing the family car today?" },
        { num: 6, word: "sit", uz: "o'tirmoq", pos: "verb", synonym: "rest", meaning: "o'tirgan holatda bo'lmoq", example: "Why are the children sitting on the green grass?" },
        { num: 7, word: "stand", uz: "tik turmoq", pos: "verb", synonym: "be upright", meaning: "oyoqda turmoq", example: "Is the teacher standing near the blackboard?" },
        { num: 8, word: "climb", uz: "tirmashib chiqmoq", pos: "verb", synonym: "ascend", meaning: "yuqoriga chiqmoq", example: "Is the monkey climbing the tall tree?" },
        { num: 9, word: "wait", uz: "kutmoq", pos: "verb", synonym: "stay for", meaning: "kutib turmoq", example: "Who are you waiting for at the bus stop?" },
        { num: 10, word: "smile", uz: "jilmaymoq", pos: "verb", synonym: "grin", meaning: "tabassum qilmoq", example: "Why are you smiling so brightly today?" }
      ],
      cloze: {
        title: "Unit 5 Story • Detective Leo and the Zoo Mystery",
        inst: "Quyidagi dialogdagi so'roq gaplarni to'ldiring (Is, Are, What, Where):",
        text: "Detective Leo enters the city zoo. (1. Is/Are) {Is} the zookeeper waiting for him? Yes, he is! 'Officer, look!' cries the zookeeper. '(2. What/Where) {Where} is the monkey hiding?' Detective Leo looks up: '(3. Is/Are) {Is} it climbing the tall palm tree?' Yes, it is! '(4. What/Where) {What} is it eating?' It is eating a big sweet banana! '(5. Is/Are) {Are} the visitors smiling?' Yes, they are! The cheeky monkey is happy and safe.",
        answers: { 1: "Is", 2: "Where", 3: "Is", 4: "What", 5: "Are" }
      },
      quiz: [
        { q: "(Is you / Are you) looking for your English workbook?", opts: ["Is you", "Are you"], ans: "Are you" },
        { q: "(What is / What are) the cat doing under the bed?", opts: ["What is", "What are"], ans: "What is" },
        { q: "(Is she / Does she) smiling at the new student?", opts: ["Is she", "Does she"], ans: "Is she" },
        { q: "(Where are / Where is) your brothers going right now?", opts: ["Where are", "Where is"], ans: "Where are" },
        { q: "'search' so'zining sinonimi qaysi?", opts: ["look for", "hide", "fly"], ans: "look for" }
      ],
      video: {
        "title": "Unit 5: Present Continuous Questions & Short Answers",
        "desc": "Hozirgi davomli zamonda so'roq gaplar va qisqa javoblar berish video darsi:",
        "youtube_id": "GhbQzuq0sv8"

}
    },

    {
      id: "unit-6",
      num: 6,
      title: "Present Simple vs Present Continuous",
      subtitle: "Hozirgi oddiy va Hozirgi davomli zamonlarni taqqoslash",
      tag: "Grammar & Vocabulary A2",
      meaning: "<b>Present Simple</b> doimiy odatlar uchun; <b>Present Continuous</b> esa ayni paytda sodir bo'layotgan harakatlar uchun ishlatiladi.",
      tables: [
        {
          title: "Zamonlar taqqoslash jadvali",
          headers: ["Xususiyat", "Present Simple", "Present Continuous"],
          rows: [
            ["Ma'nosi", "Har doimgi odat, kun tartibi", "Ayni damda bo'layotgan ish"],
            ["Formulasi", "V1 yoki V-s/-es", "am / is / are + V-ing"],
            ["Signal so'zlar", "always, usually, every day", "now, right now, at the moment, Look!"]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> <code>usually</code>, <code>always</code>, <code>every day</code> bo'lsa -> <b>Present Simple</b>! Agar <code>now</code>, <code>Look!</code>, <code>Listen!</code> bo'lsa -> <b>Present Continuous</b>!",
      time_words: "<b>Misol:</b> I usually walk to school, but today I am riding my bike!",
      vocab: [
        { num: 1, word: "always", uz: "har doim", pos: "adv", synonym: "constantly", meaning: "muntazam", example: "He always brushes his teeth before bed." },
        { num: 2, word: "usually", uz: "odatda", pos: "adv", synonym: "normally", meaning: "ko'pincha", example: "We usually have lunch at one o'clock." },
        { num: 3, word: "sometimes", uz: "ba'zan", pos: "adv", synonym: "occasionally", meaning: "vaqti-vaqti bilan", example: "I sometimes drink lemon tea after dinner." },
        { num: 4, word: "never", uz: "hech qachon", pos: "adv", synonym: "not ever", meaning: "umuman", example: "Lions never eat green grass." },
        { num: 5, word: "now", uz: "hozir", pos: "adv", synonym: "at present", meaning: "ayni vaqtda", example: "The teacher is speaking to students now." },
        { num: 6, word: "today", uz: "bugun", pos: "adv", synonym: "nowadays", meaning: "shu kunda", example: "Today I am wearing my warm red sweater." },
        { num: 7, word: "every day", uz: "har kuni", pos: "adv", synonym: "daily", meaning: "kunda", example: "She reads ten pages of a book every day." },
        { num: 8, word: "change", uz: "o'zgarmoq", pos: "verb", synonym: "alter", meaning: "boshqacha bo'lmoq", example: "The weather is changing quickly today." },
        { num: 9, word: "notice", uz: "payqamoq", pos: "verb", synonym: "observe", meaning: "ko'rib qolmoq", example: "Do you notice the little cat on the roof?" },
        { num: 10, word: "choose", uz: "tanlamoq", pos: "verb", synonym: "select", meaning: "saralab olmoq", example: "Which book do you usually choose to read?" }
      ],
      cloze: {
        title: "Unit 6 Story • Sunday vs Monday",
        inst: "Signal so'zlarga qarab fe'llarni to'g'ri zamonga (Present Simple yoki Continuous) qo'ying:",
        text: "On weekdays, Sardor usually (1. wake up) {wakes up} at seven o'clock and (2. walk) {walks} to school. He always (3. wear) {wears} his navy school uniform. But today is Sunday! Look! Sardor (4. not / walk) {isn't walking} to school; he (5. ride) {is riding} his shiny blue bicycle in the park! He (6. wear) {is wearing} bright yellow shorts. He usually (7. do) {does} homework in the afternoon, but right now he (8. eat) {is eating} delicious ice cream with his friends!",
        answers: { 1: "wakes up", 2: "walks", 3: "wears", 4: "isn't walking", 5: "is riding", 6: "is wearing", 7: "does", 8: "is eating" }
      },
      quiz: [
        { q: "Timur usually (plays / is playing) tennis on Saturdays.", opts: ["plays", "is playing"], ans: "plays" },
        { q: "Look! The two boys (run / are running) after the bus.", opts: ["run", "are running"], ans: "are running" },
        { q: "I (drink / am drinking) a glass of milk every morning.", opts: ["drink", "am drinking"], ans: "drink" },
        { q: "Be quiet! Grandmother (sleeps / is sleeping) right now.", opts: ["sleeps", "is sleeping"], ans: "is sleeping" },
        { q: "'normally' so'zining sinonimi qaysi?", opts: ["usually", "never", "now"], ans: "usually" }
      ],
      video: {
        "title": "Unit 6: Present Simple vs Present Continuous",
        "desc": "British Council: Doimiy odatlar (Simple) va ayni damdagi harakatlar (Continuous) farqini video orqali ko'ring:",
        "youtube_id": "GV9IFkjsQkE"

}
    },

    {
      id: "page-20-cloze",
      num: "20-BET",
      title: "PAGE 20: GRAND CLOZE STORY • THE TIME MACHINE ADVENTURE",
      subtitle: "Barcha o'rganilgan zamonlar bo'yicha maxsus katta matn (20 ta fe'l)",
      tag: "Special 20 Blanks Grand Master",
      is_special_page: true,
      meaning: "Ushbu maxsus sahifada siz hozirgacha o'rgangan va kitobdagi barcha asosiy zamonlarni (Present Simple, Continuous, Past Simple, Past Continuous, Future va Perfect) birgalikda qo'llaysiz!",
      cloze: {
        title: "The Secret Time Machine Adventure (Vaqt mashinasi sarguzashti)",
        inst: "Matnni diqqat bilan o'qing va qavs ichidagi 20 ta fe'lni kontekstga va signal so'zlarga qarab to'g'ri zamonga qo'ying:",
        text: `Every morning, Benny the Bunny (1. wake up) {wakes up} early at seven o'clock. 
He usually (2. eat) {eats} crunchy carrots and (3. play) {plays} in the sunny meadow. 
But today (4. be) {is} a very special day! 
Look! Benny and Professor Owl (5. stand) {are standing} in front of a giant metallic machine. 
The engine (6. make) {is making} strange humming sounds right now!

'What is this?' asks Benny. Professor Owl answers: 'It is a Time Machine! Yesterday, I (7. find) {found} an ancient golden key in the library. 
Last night, I (8. repair) {repaired} the clockwork while everyone (9. sleep) {was sleeping}!'

Yesterday, Benny (10. be) {was} afraid of time machines, but today he (11. not / be) {isn't} scared at all. 
Ten minutes ago, they (12. be) {were} in the quiet classroom, but look now! 
They (13. fly) {are flying} high above green clouds!

'Tomorrow, we (14. be going to visit) {are going to visit} the dinosaur valley!' says the Professor. 
'And I believe we (15. see) {will see} friendly creatures. 
In my life, I (16. have / never / meet) {have never met} a real T-Rex before! 
I hope it (17. will / be) {will be} friendly.'

Right now, the machine (18. travel) {is traveling} through the clouds. 
Benny (19. love) {loves} learning English grammar adventures, and he promises: 
'I (20. learn) {will learn} every single tense in this book!'`,
        answers: {
          1: "wakes up", 2: "eats", 3: "plays", 4: "is", 5: "are standing",
          6: "is making", 7: "found", 8: "repaired", 9: "was sleeping", 10: "was",
          11: "isn't", 12: "were", 13: "are flying", 14: "are going to visit", 15: "will see",
          16: "have never met", 17: "will be", 18: "is traveling", 19: "loves", 20: "will learn"
        }
      }
    },

    {
      id: "unit-7",
      num: 7,
      title: "Past Simple: 'To Be' (was, were)",
      subtitle: "O'tgan oddiy zamon: Bo'lmoq fe'lining o'tgan shakli",
      tag: "Grammar & Vocabulary A1-A2",
      meaning: "<b>Past Simple 'To Be' (was / were)</b> o'tgan zamonda kimdir yoki nimadir qayerda yoki qanday bo'lgani haqida gapirganda ishlatiladi. O'zbek tilida: <i>edi, edim, edik</i>.",
      tables: [
        {
          title: "Was va Were moslashuvi",
          headers: ["Ega (Subject)", "Darak (+)", "Inkor (-)", "Misol"],
          rows: [
            ["I / He / She / It", "was", "was not (wasn't)", "I was at home. She wasn't tired."],
            ["We / You / They", "were", "were not (weren't)", "We were at the zoo. They weren't noisy."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> 'You' birlikda (sen) ham, ko'plikda (sizlar) ham doim <code>were</code> oladi! Hech qachon <i>You was</i> deb aytilmaydi!",
      time_words: "<b>Signal so'zlar:</b> yesterday, last night, two days ago, in 2024.",
      vocab: [
        { num: 1, word: "yesterday", uz: "kecha", pos: "adv", synonym: "the day before", meaning: "oldingi kunda", example: "We were at the history museum yesterday." },
        { num: 2, word: "last night", uz: "kecha kechqurun", pos: "adv", synonym: "previous night", meaning: "kechagi tunda", example: "The starry sky was beautiful last night." },
        { num: 3, word: "ago", uz: "oldin, muqaddam", pos: "adv", synonym: "before", meaning: "o'tmishda", example: "Two hours ago, they were in the sports hall." },
        { num: 4, word: "absent", uz: "yo'q, kelmagan", pos: "adj", synonym: "missing", meaning: "qatnashmagan", example: "Sardor was absent from school yesterday." },
        { num: 5, word: "present", uz: "bor, hozir bo'lgan", pos: "adj", synonym: "attending", meaning: "ishtirok etgan", example: "All thirty students were present on Monday." },
        { num: 6, word: "excited", uz: "hayajonlangan", pos: "adj", synonym: "thrilled", meaning: "juda shod", example: "The children were excited about the circus trip." },
        { num: 7, word: "afraid", uz: "qo'rqqan", pos: "adj", synonym: "scared", meaning: "vahimada", example: "The little cat was afraid of the loud thunder." },
        { num: 8, word: "noisy", uz: "shovqinli", pos: "adj", synonym: "loud", meaning: "tinch emas", example: "The schoolyard was very noisy at break time." },
        { num: 9, word: "famous", uz: "mashhur", pos: "adj", synonym: "well-known", meaning: "dovruqli", example: "Amir Timur was a famous historical ruler." },
        { num: 10, word: "delicious", uz: "mazali", pos: "adj", synonym: "tasty", meaning: "totli, lazzatli", example: "The birthday cake yesterday was so delicious!" }
      ],
      cloze: {
        title: "Unit 7 Story • Yesterday at the Dinosaur Museum",
        inst: "Qavsdagi so'zlarni was, were, wasn't, yoki weren't bilan to'ldiring:",
        text: "Yesterday (1. be) {was} a fantastic Sunday! The weather (2. be) {was} sunny and warm. My classmates and I (3. be) {were} at the central history museum. Sardor (4. not / be) {wasn't} absent; everyone (5. be) {was} present. We (6. be) {were} very excited to see huge dinosaur bones! The room (7. not / be) {wasn't} dark; it (8. be) {was} bright and clean. Afterwards, we ate ice cream, which (9. be) {was} delicious. (10. be) {Were} you at the museum yesterday, too?",
        answers: { 1: "was", 2: "was", 3: "were", 4: "wasn't", 5: "was", 6: "were", 7: "wasn't", 8: "was", 9: "was", 10: "Were" }
      },
      quiz: [
        { q: "I (was / were) at home yesterday evening.", opts: ["was", "were"], ans: "was" },
        { q: "We (was / were) very excited about the trip.", opts: ["was", "were"], ans: "were" },
        { q: "Malika (wasn't / weren't) at school because she was sick.", opts: ["wasn't", "weren't"], ans: "wasn't" },
        { q: "(Was / Were) you happy with your birthday present?", opts: ["Was", "Were"], ans: "Were" },
        { q: "'delicious' so'zining sinonimi qaysi?", opts: ["tasty", "scared", "loud"], ans: "tasty" }
      ],
      video: {
        "title": "Unit 7: Past Simple 'To Be' (Was / Were)",
        "desc": "O'tgan zamonda 'bo'lmoq' fe'li: Was va Were ning ishlatilishi va qoidalari:",
        "youtube_id": "fsFPgAhDo4I"

}
    },

    {
      id: "unit-8",
      num: 8,
      title: "Past Simple: Regular Verbs (-ed)",
      subtitle: "O'tgan oddiy zamon: To'g'ri fe'llar va ularning imlo qoidalari",
      tag: "Grammar & Vocabulary A2",
      meaning: "O'tgan zamonda to'g'ri fe'llarning o'tgan shaklini yasash uchun ularga <b>-ed</b> qo'shimchasi qo'shiladi.",
      tables: [
        {
          title: "-ed imlo va talaffuz qoidalari",
          headers: ["Qoida", "Misol", "Talaffuzi"],
          rows: [
            ["Oddiy fe'llar: + ed", "clean -> cleaned, walk -> walked", "/d/ yoki /t/"],
            ["Oxiri 'e': + d", "live -> lived, close -> closed", "/d/"],
            ["Undosh + y: y -> ied", "tidy -> tidied, study -> studied", "/d/"],
            ["1 unli + 1 undosh: ikkilanadi", "stop -> stopped, clap -> clapped", "/t/"]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> <code>play -> played</code> bo'ladi, chunki 'y' oldida unli bor! /id/ tovushi faqat 't' yoki 'd' dan keyin chiqadi: <i>visited, started!</i>",
      time_words: "<b>Signal so'zlar:</b> yesterday, last summer, an hour ago.",
      vocab: [
        { num: 1, word: "visit", uz: "ziyorat qilmoq", pos: "verb", synonym: "go to see", meaning: "ko'rgani bormoq", example: "We visited our grandparents last weekend." },
        { num: 2, word: "travel", uz: "sayohat qilmoq", pos: "verb", synonym: "journey", meaning: "safar qilmoq", example: "They traveled to Khiva by high-speed train." },
        { num: 3, word: "watch", uz: "tomosha qilmoq", pos: "verb", synonym: "view", meaning: "ko'rmoq", example: "He watched an exciting football match on TV." },
        { num: 4, word: "play", uz: "o'ynamoq", pos: "verb", synonym: "participate", meaning: "mashg'ul bo'lmoq", example: "The children played chess in the afternoon." },
        { num: 5, word: "clean", uz: "tozalamoq", pos: "verb", synonym: "tidy up", meaning: "ozoda qilmoq", example: "She cleaned her bedroom on Saturday morning." },
        { num: 6, word: "listen", uz: "tinglamoq", pos: "verb", synonym: "hear", meaning: "quloq solmoq", example: "I listened to interesting stories yesterday." },
        { num: 7, word: "open", uz: "ochmoq", pos: "verb", synonym: "unlock", meaning: "qopqog'ini ochmoq", example: "The brave boy opened the mystery wooden chest." },
        { num: 8, word: "close", uz: "yopmoq", pos: "verb", synonym: "shut", meaning: "berkitmoq", example: "Mother closed the window because of cold wind." },
        { num: 9, word: "stop", uz: "to'xtamoq", pos: "verb", synonym: "halt", meaning: "to'xtamoq", example: "The red bus stopped right in front of my house." },
        { num: 10, word: "walk", uz: "piyoda yurmoq", pos: "verb", synonym: "stroll", meaning: "qadam tashlamoq", example: "We walked three kilometers in the green park." }
      ],
      cloze: {
        title: "Unit 8 Story • The Summer Forest Adventure",
        inst: "Fe'llarga to'g'ri -ed qo'shib o'tgan zamon shaklida yozing:",
        text: "Last Saturday, my family (1. visit) {visited} a scenic mountain resort. We (2. travel) {traveled} by electric train. The train (3. stop) {stopped} near a pine forest. We (4. walk) {walked} along the river and (5. listen) {listened} to the singing birds. In the afternoon, we (6. play) {played} badminton on the grass. When it got windy, father (7. close) {closed} our tent door. We (8. clean) {cleaned} our picnic area before leaving.",
        answers: { 1: "visited", 2: "traveled", 3: "stopped", 4: "walked", 5: "listened", 6: "played", 7: "closed", 8: "cleaned" }
      },
      quiz: [
        { q: "Yesterday, Benny __________ (visit) his friend Leo.", opts: ["visited", "visitted"], ans: "visited" },
        { q: "The bus __________ (stop) at the traffic lights.", opts: ["stoped", "stopped"], ans: "stopped" },
        { q: "She __________ (tidy) her room yesterday.", opts: ["tidied", "tidyed"], ans: "tidied" },
        { q: "'shut' so'zining sinonimi qaysi?", opts: ["close", "open", "walk"], ans: "close" }
      ],
      video: {
        "title": "Unit 8: Past Simple Regular Verbs (-ed)",
        "desc": "To'g'ri fe'llarga -ed qo'shish qoidalari va o'tgan zamon fe'llari video darsi:",
        "youtube_id": "MI3S3kdkofo"

}
    },

    {
      id: "unit-9",
      num: 9,
      title: "Past Simple: Common Irregular Verbs",
      subtitle: "O'tgan oddiy zamon: Noto'g'ri fe'llarning o'tgan shakllari",
      tag: "Grammar & Vocabulary A2",
      meaning: "Ingliz tilida <b>noto'g'ri fe'llar (Irregular Verbs)</b> -ed OLMAYDI! Ular butunlay o'zgaradi: <i>go -> went, see -> saw, eat -> ate</i>.",
      tables: [
        {
          title: "Eng muhim noto'g'ri fe'llar",
          headers: ["V1 (Hozirgi)", "V2 (O'tgan)", "Ma'nosi", "Misol gap"],
          rows: [
            ["go", "went", "bordi", "We went to the water park."],
            ["see", "saw", "ko'rdi", "I saw an elephant at the zoo."],
            ["eat", "ate", "yedi", "He ate sweet pancakes."],
            ["drink", "drank", "ichdi", "She drank orange juice."],
            ["buy", "bought", "sotib oldi", "Father bought a book."],
            ["have", "had", "bor edi", "We had a great picnic."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Hech qachon <i>goed, eated, seed</i> deb aytmang! Faqat: <code>went, ate, saw</code> deb aytiladi!",
      time_words: "<b>Eslatma:</b> V2 shakli faqat DARAK (+) gaplarda ishlatiladi!",
      vocab: [
        { num: 1, word: "went (go)", uz: "bordi", pos: "verb", synonym: "journeyed", meaning: "yetib bordi", example: "We went to the water park last Saturday." },
        { num: 2, word: "saw (see)", uz: "ko'rdi", pos: "verb", synonym: "spotted", meaning: "ko'zi tushdi", example: "I saw a funny brown monkey at the zoo." },
        { num: 3, word: "ate (eat)", uz: "yedi", pos: "verb", synonym: "consumed", meaning: "taom yedi", example: "He ate three sweet pancakes for breakfast." },
        { num: 4, word: "drank (drink)", uz: "ichdi", pos: "verb", synonym: "sipped", meaning: "ichimlik ichdi", example: "She drank cold lemon juice yesterday." },
        { num: 5, word: "bought (buy)", uz: "sotib oldi", pos: "verb", synonym: "purchased", meaning: "pulga oldi", example: "Father bought a colorful storybook for me." },
        { num: 6, word: "had (have)", uz: "bor edi / qildi", pos: "verb", synonym: "possessed", meaning: "egalik qildi", example: "We had a great time at the amusement park." },
        { num: 7, word: "came (come)", uz: "keldi", pos: "verb", synonym: "arrived", meaning: "tashrif buyurdi", example: "My cousin came to visit us yesterday." },
        { num: 8, word: "gave (give)", uz: "berdi", pos: "verb", synonym: "presented", meaning: "taqdim etdi", example: "The teacher gave us high marks." },
        { num: 9, word: "took (take)", uz: "oldi", pos: "verb", synonym: "grabbed", meaning: "qo'liga oldi", example: "She took her umbrella because of the rain." },
        { num: 10, word: "wrote (write)", uz: "yozdi", pos: "verb", synonym: "penned", meaning: "qog'ozga bitdi", example: "Benny wrote a funny poem about carrots." }
      ],
      cloze: {
        title: "Unit 9 Story • The Pirate Treasure Island",
        inst: "Qavsdagi fe'llarning o'tgan shakli (V2) bilan to'ldiring:",
        text: "Last weekend, Benny read an old pirate tale. In the story, Captain Jack (1. go) {went} to a mystery island. He (2. see) {saw} a tall palm tree and dug the sand. He (3. find) {found} a wooden chest! Inside, he (4. have) {had} shiny silver coins and diamonds. His parrot (5. eat) {ate} sweet tropical fruit and (6. drink) {drank} coconut water. The pirate (7. give) {gave} coins to the villagers, and he (8. write) {wrote} a secret map.",
        answers: { 1: "went", 2: "saw", 3: "found", 4: "had", 5: "ate", 6: "drank", 7: "gave", 8: "wrote" }
      },
      quiz: [
        { q: "Yesterday, I __________ (go) to the grand bazaar.", opts: ["goed", "went"], ans: "went" },
        { q: "We __________ (see) a very clever magic show.", opts: ["seed", "saw"], ans: "saw" },
        { q: "Timur __________ (eat) two slices of watermelon.", opts: ["eated", "ate"], ans: "ate" },
        { q: "Father __________ (buy) me an interesting puzzle.", opts: ["buyed", "bought"], ans: "bought" },
        { q: "'purchased' so'zining sinonimi qaysi?", opts: ["bought", "saw", "went"], ans: "bought" }
      ],
      video: {
        "title": "Unit 9: Irregular Verbs (Noto'g'ri Fe'llar)",
        "desc": "Ingliz tilidagi eng ko'p ishlatiladigan noto'g'ri fe'llarning o'tgan zamon shakllari qo'shiq bilan:",
        "youtube_id": "MA3NFtLc22k"

}
    },

    {
      id: "unit-10",
      num: 10,
      title: "Past Simple: Negatives & Questions (did / didn't)",
      subtitle: "O'tgan oddiy zamon: Inkor va So'roq gaplar",
      tag: "Grammar & Vocabulary A2",
      meaning: "Past Simple da inkor va so'roq gaplar tuzish uchun barcha shaxslar uchun <b>DID / DIDN'T</b> ishlatiladi. Asosiy fe'l V1 shaklga qaytadi!",
      tables: [
        {
          title: "Inkor (-) va So'roq (?)",
          headers: ["Shakl", "Formula", "Misol (Example)", "Qisqa javob"],
          rows: [
            ["Inkor (-)", "Subject + didn't + V1", "I didn't go to school yesterday.", "-"],
            ["So'roq (?)", "Did + Subject + V1?", "Did you find your keys?", "Yes, I did. / No, I didn't."]
          ]
        }
      ],
      tip: "<b>Destination Watch Out!</b> 'Did' yoki 'didn't' kelganda fe'l HECH QACHON V2 bo'lmaydi! <code>didn't went</code> DEYISH KATTA XATO! Doim: <code>didn't go!</code>",
      time_words: "<b>Qoida:</b> Darak: I went. Inkor: I didn't go. So'roq: Did you go?",
      vocab: [
        { num: 1, word: "find", uz: "topmoq", pos: "verb", synonym: "discover", meaning: "qidirib topmoq", example: "Did you find the secret key under the rug?" },
        { num: 2, word: "lose", uz: "yo'qotmoq", pos: "verb", synonym: "misplace", meaning: "topolmay qolmoq", example: "He didn't lose his pencil case yesterday." },
        { num: 3, word: "know", uz: "bilmoq", pos: "verb", synonym: "recognize", meaning: "xabardor bo'lmoq", example: "Did she know the correct answer?" },
        { num: 4, word: "forget", uz: "unutmoq", pos: "verb", synonym: "fail to remember", meaning: "yoddan chiqarmoq", example: "I didn't forget my English homework." },
        { num: 5, word: "remember", uz: "eslamoq", pos: "verb", synonym: "recall", meaning: "yodga olmoq", example: "Did you remember grandmother's birthday?" },
        { num: 6, word: "meet", uz: "uchrashmoq", pos: "verb", synonym: "encounter", meaning: "yuzma-yuz kelmoq", example: "We didn't meet our teacher in market." },
        { num: 7, word: "tell", uz: "aytmoq", pos: "verb", synonym: "narrate", meaning: "hikoya qilmoq", example: "Did your friend tell you the funny story?" },
        { num: 8, word: "leave", uz: "tark etmoq", pos: "verb", synonym: "depart", meaning: "ketmoq", example: "The train didn't leave the station on time." },
        { num: 9, word: "hear", uz: "eshitmoq", pos: "verb", synonym: "listen to", meaning: "tovushni ilg'amoq", example: "Did anyone hear strange noises last night?" },
        { num: 10, word: "ask", uz: "so'ramoq", pos: "verb", synonym: "inquire", meaning: "savol bermoq", example: "She didn't ask any difficult questions." }
      ],
      cloze: {
        title: "Unit 10 Story • Detective Sherlock and the Stolen Cake",
        inst: "Qavsdagi fe'llarni did, didn't yoki V1 shaklda qo'ying:",
        text: "Somebody ate the big strawberry cake in the kitchen! Detective Sherlock started his investigation. '(1. Did/Do) {Did} you eat the cake, Benny?' Benny replied: 'No, I (2. not / eat) {didn't eat} it! I was in the garden.' Then Sherlock asked Leo: '(3. Did/Do) {Did} you (4. see) {see} anyone?' Leo said: 'I (5. not / see) {didn't see} anyone, but I heard a bark!' Sherlock smiled: 'Aha! The puppy (6. not / forget) {didn't forget} where the cake was!' The mystery was solved!",
        answers: { 1: "Did", 2: "didn't eat", 3: "Did", 4: "see", 5: "didn't see", 6: "didn't forget" }
      },
      quiz: [
        { q: "I didn't (go / went) to school last Sunday.", opts: ["go", "went"], ans: "go" },
        { q: "Did you (see / saw) the big green parrot?", opts: ["see", "saw"], ans: "see" },
        { q: "Benny didn't (ate / eat) the sour lemon.", opts: ["ate", "eat"], ans: "eat" },
        { q: "She didn't (forgot / forget) her backpack.", opts: ["forgot", "forget"], ans: "forget" },
        { q: "'discover' so'zining sinonimi qaysi?", opts: ["find", "lose", "ask"], ans: "find" }
      ],
      video: {
        "title": "Unit 10: Past Simple Negatives (Didn't)",
        "desc": "O'tgan zamonda Didn't orqali inkor gaplar tuzish video darsi:",
        "youtube_id": "YNypo34w4sg"

}
    },

    {
      id: "unit-11",
      num: 11,
      title: "Past Continuous: Actions in Progress in the Past",
      subtitle: "O'tgan davomli zamon: O'tmishda davom etayotgan harakatlar",
      tag: "Grammar & Vocabulary A2",
      meaning: "<b>Past Continuous (was / were + V-ing)</b> o'tgan zamonning aniq bir vaqtida davom etayotgan ish-harakatlar uchun ishlatiladi.",
      tables: [
        {
          title: "Formulasi va 'When' bog'lovchisi",
          headers: ["Shakl", "Formula", "Misol (Example)"],
          rows: [
            ["Darak (+)", "was / were + V-ing", "At 5 PM yesterday, she was doing homework."],
            ["When bilan", "Past Continuous + when + Past Simple", "I was reading when mother arrived."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Past Continuous uzoqroq davom etayotgan harakat (I was sleeping), Past Simple esa uni bo'lgan qisqa voqea (when phone rang)!",
      time_words: "<b>Signal so'zlar:</b> at 5 PM yesterday, all evening, when.",
      vocab: [
        { num: 1, word: "do homework", uz: "vazifa bajarmoq", pos: "phr v", synonym: "study", meaning: "vazifa qilmoq", example: "At 7 PM, I was doing my homework." },
        { num: 2, word: "read", uz: "o'qimoq", pos: "verb", synonym: "peruse", meaning: "mutolaa qilmoq", example: "She was reading a comic book when phone rang." },
        { num: 3, word: "sleep", uz: "uxlamoq", pos: "verb", synonym: "snooze", meaning: "uyquda bo'lmoq", example: "The baby was sleeping peacefully." },
        { num: 4, word: "cook", uz: "ovqat tayyorlamoq", pos: "verb", synonym: "prepare food", meaning: "taom pishirmoq", example: "Mother was cooking plov all afternoon." },
        { num: 5, word: "wait", uz: "kutmoq", pos: "verb", synonym: "expect", meaning: "kutib turmoq", example: "They were waiting for the bus in rain." },
        { num: 6, word: "draw", uz: "chizmoq", pos: "verb", synonym: "sketch", meaning: "tasvir solmoq", example: "He was drawing a superhero yesterday evening." },
        { num: 7, word: "repair", uz: "tuzatmoq", pos: "verb", synonym: "fix", meaning: "tamirlamoq", example: "Father was repairing his bicycle." },
        { num: 8, word: "listen to", uz: "eshitmoq", pos: "verb", synonym: "tune in", meaning: "tinglamoq", example: "We were listening to radio music yesterday." },
        { num: 9, word: "play chess", uz: "shaxmat o'ynamoq", pos: "phr v", synonym: "match", meaning: "shaxmat surmoq", example: "Brothers were playing chess quietly." },
        { num: 10, word: "rain", uz: "yomg'ir yog'moq", pos: "verb", synonym: "pour", meaning: "quyib yog'moq", example: "It was raining heavily at four o'clock." }
      ],
      cloze: {
        title: "Unit 11 Story • The Midnight Storm",
        inst: "Qavsdagi fe'llardan Past Continuous shaklini yasang (was/were + V-ing):",
        text: "Yesterday at 8:00 PM, a sudden thunderstorm began. What was everyone doing? At that exact moment, mother (1. cook) {was cooking} dinner in the kitchen. Father (2. repair) {was repairing} his radio. My brother and I (3. do) {were doing} our English homework. Outside, it (4. rain) {was raining} heavily. Our little cat (5. sleep) {was sleeping} warmly near the heater. We (6. not / watch) {weren't watching} TV because the electricity was off.",
        answers: { 1: "was cooking", 2: "was repairing", 3: "were doing", 4: "was raining", 5: "was sleeping", 6: "weren't watching" }
      },
      quiz: [
        { q: "At 6:00 yesterday, I (was / were) doing my homework.", opts: ["was", "were"], ans: "was" },
        { q: "The children (was / were) playing football in the yard.", opts: ["was", "were"], ans: "were" },
        { q: "Benny (wasn't / weren't) sleeping; he was reading.", opts: ["wasn't", "weren't"], ans: "wasn't" },
        { q: "'fix' so'zining sinonimi qaysi?", opts: ["repair", "rain", "sleep"], ans: "repair" }
      ],
      video: {
        "title": "Unit 11: Past Continuous Tense (was/were + ing)",
        "desc": "O'tmishda ma'lum bir vaqtda davom etayotgan harakatlarni ifodalash video darsi:",
        "youtube_id": "Rb_qdxmspeU"

}
    },

    {
      id: "unit-12",
      num: 12,
      title: "Future: 'be going to' (Plans & Intentions)",
      subtitle: "Kelasi zamon: Oldindan rejalashtirilgan ish-harakatlar va niyatlar",
      tag: "Grammar & Vocabulary A2",
      meaning: "<b>'Be going to' (am / is / are going to + V1)</b> kelajakda bajarish oldindan rejalashtirilgan rejalar va niyatlar haqida gapirganda ishlatiladi.",
      tables: [
        {
          title: "Formulasi",
          headers: ["Ega (Subject)", "To Be", "going to + V1", "Misol"],
          rows: [
            ["I", "am / am not", "going to travel", "I am going to travel to Bukhara."],
            ["He / She", "is / isn't", "going to build", "He is going to build a birdhouse."],
            ["We / They", "are / aren't", "going to visit", "We are going to visit the museum."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> 'going to' dan keyin fe'l doim <b>asosiy 1-shaklda (V1)</b> keladi! <code>going to visiting</code> XATO! Doim: <code>going to visit!</code>",
      time_words: "<b>Signal so'zlar:</b> tomorrow, next week, this weekend, soon.",
      vocab: [
        { num: 1, word: "plan", uz: "rejalashtirmoq", pos: "verb", synonym: "intend", meaning: "rejaga kiritmoq", example: "I am going to plan my birthday party tomorrow." },
        { num: 2, word: "travel", uz: "sayohat qilmoq", pos: "verb", synonym: "journey", meaning: "safarga chiqmoq", example: "We are going to travel to Samarkand." },
        { num: 3, word: "visit", uz: "ko'rgani bormoq", pos: "verb", synonym: "call on", meaning: "tashrif buyurmoq", example: "She is going to visit her doctor on Friday." },
        { num: 4, word: "buy", uz: "sotib olmoq", pos: "verb", synonym: "purchase", meaning: "pul to'lab olmoq", example: "Father is going to buy a new laptop for me." },
        { num: 5, word: "build", uz: "qurmoq", pos: "verb", synonym: "construct", meaning: "bino qilmoq", example: "The boys are going to build a birdhouse." },
        { num: 6, word: "learn", uz: "o'rganmoq", pos: "verb", synonym: "master", meaning: "egallamoq", example: "I am going to learn how to swim this holiday." },
        { num: 7, word: "invite", uz: "taklif qilmoq", pos: "verb", synonym: "ask over", meaning: "chaqirmoq", example: "He is going to invite ten friends to his home." },
        { num: 8, word: "paint", uz: "bo'yamoq", pos: "verb", synonym: "decorate", meaning: "rang bermoq", example: "We are going to paint our classroom walls." },
        { num: 9, word: "plant", uz: "ekmoq", pos: "verb", synonym: "grow", meaning: "ko'chat o'tqazmoq", example: "Students are going to plant roses in garden." },
        { num: 10, word: "cook", uz: "pishirmoq", pos: "verb", synonym: "make food", meaning: "taom tayyorlamoq", example: "Mother is going to cook delicious sweets tonight." }
      ],
      cloze: {
        title: "Unit 12 Story • Our Big Summer Holiday Plans",
        inst: "Qavsdagi fe'llardan 'be going to + V1' yasang:",
        text: "Summer holidays are coming soon! Benny and his friends have great plans. First, Benny (1. learn) {is going to learn} how to ride a horse. Next month, his family (2. travel) {is going to travel} to Samarkand by high-speed train. In the village, grandfather (3. build) {is going to build} a wooden treehouse for the kids. The children (4. plant) {are going to plant} five apple trees. Benny (5. invite) {is going to invite} all his classmates to a summer picnic. We (6. have) {are going to have} so much fun!",
        answers: { 1: "is going to learn", 2: "is going to travel", 3: "is going to build", 4: "are going to plant", 5: "is going to invite", 6: "are going to have" }
      },
      quiz: [
        { q: "I (am going to / is going to) learn French next month.", opts: ["am going to", "is going to"], ans: "am going to" },
        { q: "They (is going to / are going to) travel to Bukhara.", opts: ["is going to", "are going to"], ans: "are going to" },
        { q: "Timur (isn't going to / aren't going to) buy the noisy toy.", opts: ["isn't going to", "aren't going to"], ans: "isn't going to" },
        { q: "'construct' so'zining sinonimi qaysi?", opts: ["build", "buy", "plant"], ans: "build" }
      ],
      video: {
        "title": "Unit 12: Future with 'Be Going To' (Plans)",
        "desc": "Kelajakdagi rejalar va niyatlar uchun 'be going to' iborasining qo'llanilishi:",
        "youtube_id": "IpmmTWcjVbM"

}
    },

    {
      id: "unit-13",
      num: 13,
      title: "Future Simple: 'will' and 'won't'",
      subtitle: "Kelasi oddiy zamon: Kelajak bashoratlari, va'dalar va tezkor qarorlar",
      tag: "Grammar & Vocabulary A2",
      meaning: "<b>Future Simple (will + V1)</b> kelajak haqidagi bashoratlar (predictions), va'dalar (promises) va suhbat vaqtida qabul qilingan tezkor qarorlar uchun ishlatiladi.",
      tables: [
        {
          title: "Formulasi",
          headers: ["Ega (Subject)", "will / won't", "V1", "Misol"],
          rows: [
            ["Barcha shaxslar", "will ('ll)", "V1", "Robots will help people in 2050."],
            ["Barcha shaxslar", "will not (won't)", "V1", "Cars won't use petrol in the future."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Ko'pincha <code>I think...</code>, <code>I hope...</code>, <code>I promise...</code> iboralaridan keyin <b>will</b> ishlatiladi!",
      time_words: "<b>Signal so'zlar:</b> tomorrow, in the future, in 2050, one day.",
      vocab: [
        { num: 1, word: "hope", uz: "umid qilmoq", pos: "verb", synonym: "trust", meaning: "ezgu niyatda bo'lmoq", example: "I hope tomorrow will be sunny and warm." },
        { num: 2, word: "think", uz: "o'ylamoq", pos: "verb", synonym: "believe", meaning: "fikr yuritmoq", example: "I think robots will teach lessons in future." },
        { num: 3, word: "promise", uz: "va'da bermoq", pos: "verb", synonym: "pledge", meaning: "so'z bermoq", example: "I promise I will help you with English." },
        { num: 4, word: "predict", uz: "bashorat qilmoq", pos: "verb", synonym: "foresee", meaning: "oldindan aytmoq", example: "Scientists predict cars will fly in the sky." },
        { num: 5, word: "win", uz: "g'alaba qozonmoq", pos: "verb", synonym: "conquer", meaning: "yutuqqa erishmoq", example: "Our school team will win the football match!" },
        { num: 6, word: "pass", uz: "o'tmoq, topshirmoq", pos: "verb", synonym: "succeed in", meaning: "muvaffaqiyatli topshirmoq", example: "You will pass your English test easily!" },
        { num: 7, word: "help", uz: "yordam bermoq", pos: "verb", synonym: "support", meaning: "ko'maklashmoq", example: "Don't cry! I will carry that heavy box for you." },
        { num: 8, word: "be", uz: "bo'lmoq", pos: "verb", synonym: "become", meaning: "yetishmoq", example: "I think you will be a famous doctor one day." },
        { num: 9, word: "fly", uz: "uchmoq", pos: "verb", synonym: "soar", meaning: "fazoda parvoz qilmoq", example: "Spaceships will fly to distant planets." },
        { num: 10, word: "change", uz: "o'zgarmoq", pos: "verb", synonym: "transform", meaning: "boshqacha qiyofaga kirmoq", example: "Technology will change our classrooms." }
      ],
      cloze: {
        title: "Unit 13 Story • Life in the Year 2050",
        inst: "Qavsdagi fe'llardan 'will + V1' yoki 'won't + V1' yasang:",
        text: "What will life look like in 2050? Scientists believe technology (1. change) {will change} our world completely. Smart robots (2. clean) {will clean} our classrooms and cook food. People (3. not / drive) {won't drive} ordinary petrol cars; cars (4. fly) {will fly} in the sky! I think students (5. have) {will have} holographic computers. I promise I (6. study) {will study} hard to become a great scientist who (7. build) {will build} friendly robots!",
        answers: { 1: "will change", 2: "will clean", 3: "won't drive", 4: "will fly", 5: "will have", 6: "will study", 7: "will build" }
      },
      quiz: [
        { q: "I think it (will / won't) be sunny tomorrow, so take your sunglasses.", opts: ["will", "won't"], ans: "will" },
        { q: "Don't worry! I (will / won't) forget your birthday.", opts: ["will", "won't"], ans: "won't" },
        { q: "If you study hard, you (will / won't) pass the English exam.", opts: ["will", "won't"], ans: "will" },
        { q: "'believe' so'zining sinonimi qaysi?", opts: ["think", "win", "fly"], ans: "think" }
      ],
      video: {
        "title": "Unit 13: Future Simple: Will and Won't",
        "desc": "Kelasi oddiy zamon, bashoratlar va va'dalar uchun Will va Won't dan foydalanish:",
        "youtube_id": "n14zCZAvSjI"

}
    },

    {
      id: "unit-14",
      num: 14,
      title: "Present Perfect Intro: Life Experiences",
      subtitle: "Hozirgi tugallangan zamon: Hayotiy tajribalar (have / has + V3)",
      tag: "Grammar & Vocabulary A2",
      meaning: "<b>Present Perfect (have / has + V3)</b> insonning hayotida hech bo'lmaganda bir marta boshidan kechirgan tajribalari haqida gapirganda ishlatiladi.",
      tables: [
        {
          title: "Formulasi va Ever / Never",
          headers: ["Ega (Subject)", "Have / Has", "V3 (Participle)", "Misol"],
          rows: [
            ["I / We / You / They", "have ('ve)", "seen / visited", "I have seen the Eiffel Tower."],
            ["He / She / It", "has ('s)", "eaten / flown", "She has eaten Italian pizza."],
            ["Tajriba so'roq", "Have you ever", "climbed a mountain?", "Yes, I have! / No, I haven't."]
          ]
        }
      ],
      tip: "<b>Destination Tip!</b> Fe'lning <b>3-shakli (V3 - Past Participle)</b> ishlatiladi! To'g'ri fe'llarga -ed qo'shiladi (visited), noto'g'rilarda 3-ustun: <code>see -> saw -> seen!</code>",
      time_words: "<b>Signal so'zlar:</b> ever, never, already.",
      vocab: [
        { num: 1, word: "seen (see)", uz: "ko'rgan", pos: "verb", synonym: "spotted", meaning: "ko'zdan kechirgan", example: "I have seen a shooting star at night." },
        { num: 2, word: "visited (visit)", uz: "tashrif buyurgan", pos: "verb", synonym: "toured", meaning: "borib ko'rgan", example: "Have you ever visited ancient Khiva?" },
        { num: 3, word: "eaten (eat)", uz: "yegan", pos: "verb", synonym: "tasted", meaning: "tatib ko'rgan", example: "He has eaten spicy Korean ramen." },
        { num: 4, word: "read (read)", uz: "o'qigan", pos: "verb", synonym: "finished", meaning: "mutolaa qilgan", example: "I have read five English adventure books." },
        { num: 5, word: "flown (fly)", uz: "uchgan", pos: "verb", synonym: "traveled by air", meaning: "samolyotda uchgan", example: "Has your sister ever flown in an airplane?" },
        { num: 6, word: "met (meet)", uz: "uchratgan", pos: "verb", synonym: "encountered", meaning: "yuzma-yuz ko'rgan", example: "We have met a real space astronaut." },
        { num: 7, word: "climbed (climb)", uz: "chiqqan", pos: "verb", synonym: "scaled", meaning: "cho'qqiga chiqqan", example: "He has climbed the Chimgan mountains." },
        { num: 8, word: "swum (swim)", uz: "suzgan", pos: "verb", synonym: "bathed", meaning: "suvda suzib ko'rgan", example: "Have you ever swum in the warm ocean?" },
        { num: 9, word: "ridden (ride)", uz: "mingan", pos: "verb", synonym: "mounted", meaning: "ot mingan", example: "She has ridden a white horse in village." },
        { num: 10, word: "won (win)", uz: "yutgan", pos: "verb", synonym: "gained", meaning: "g'alabaga erishgan", example: "Our class has won the first prize!" }
      ],
      cloze: {
        title: "Unit 14 Story • World Explorer Benny's Passport",
        inst: "Qavsdagi fe'llarning 3-shakli (V3) bilan bo'sh o'rinlarni to'ldiring (have/has + V3):",
        text: "Benny the Bunny is a real world adventurer. In his travels, he (1. visit) {has visited} twelve different countries. He (2. see) {has seen} the great Egyptian pyramids. Benny (3. ride) {has ridden} a tall white camel in the desert and he (4. swim) {has swum} with friendly blue dolphins! But he (5. never / eat) {has never eaten} octopus. (6. you / ever / fly) {Have you ever flown} in a hot air balloon? Benny has! He (7. win) {has won} three medals for courage.",
        answers: { 1: "has visited", 2: "has seen", 3: "has ridden", 4: "has swum", 5: "has never eaten", 6: "Have you ever flown", 7: "has won" }
      },
      quiz: [
        { q: "I (have / has) seen a huge blue whale in a video.", opts: ["have", "has"], ans: "have" },
        { q: "(Have / Has) you ever visited Samarkand?", opts: ["Have", "Has"], ans: "Have" },
        { q: "My brother (haven't / hasn't) eaten sushi before.", opts: ["haven't", "hasn't"], ans: "hasn't" },
        { q: "'toured' so'zining sinonimi qaysi?", opts: ["visited", "seen", "eaten"], ans: "visited" }
      ],
      video: {
        "title": "Unit 14: Present Perfect Tense",
        "desc": "Present Perfect zamoni (Have/Has + V3) va hayotiy tajribalar haqida video dars:",
        "youtube_id": "i9GlEYf8_5I"

}
    }
  ]
};


SITE_DATA.cloze_pages = [
  {
    "page_num": 51,
    "title": "SECTION 4: READING & CLOZE MASTERWORK",
    "subtitle": "Hikoyalarda zamonlarni qo'llash: Qoidalar va O'qish strategiyasi",
    "tag": "Section Overview",
    "is_intro": true,
    "rules": [
      [
        "1. Kalit so'zlarga (Time Markers) e'tibor bering",
        "Har bir gapdagi <i>yesterday, usually, now, tomorrow, last week</i> kabi so'zlar qaysi zamonni tanlash kerakligini darhol ko'rsatadi."
      ],
      [
        "2. Shaxs va Ega (Subject) bilan moslashtiring",
        "He, She, It uchun fe'lga <b>-s</b> qo'shiladi yoki <b>is, was, has</b> tanlanadi. I/We/They uchun <b>are, were, have</b> ishlatiladi."
      ],
      [
        "3. Voqealar ketma-ketligini tushuning",
        "Hikoyadagi voqea hozir sodir bo'lyaptimi, o'tmishdami yoki kelajakdami? Matn mazmunini to'liq o'qib chiqing."
      ],
      [
        "4. Qavslarni ochishda imlo qoidalariga rioya qiling",
        "To'g'ri fe'llarga <b>-ed</b> qo'shing (study -> studied, stop -> stopped), noto'g'ri fe'llarning 2 yoki 3-shaklini yozing."
      ]
    ],
    "banner_note": "Ushbu 20 ta sahifada siz 1-dan 14-gacha bo'lgan barcha zamonlarni haqiqiy qiziqarli hikoyalar, ertaklar va detektiv sarguzashtlar orqali mustahkamlaysiz!",
    "video": {
      "title": "4-Sinf uchun Matn O'qish va Tushunish (Reading Comprehension)",
      "desc": "Ingliz tilidagi hikoyalarni o'qish, tushunish va savollarga to'g'ri javob berish masterclass darsi:",
      "youtube_id": "AYtpX9qka-k"

    }
  },
  {
    "page_num": 52,
    "unit_ref": "Unit 1",
    "title": "Cloze Story 1: The Magic English Academy",
    "tense_focus": "Present Simple 'To Be' (am, is, are, isn't, aren't)",
    "intro": "Qavs ichidagi 'to be' fe'llarini to'g'ri shaklga qo'ying:",
    "story": "Welcome to Starlight Academy! My name <b>(1. be)</b> <span class=\"q-blank\">___________</span> Benny. I <b>(2. be)</b> <span class=\"q-blank\">___________</span> very happy to meet you. This school <b>(3. be)</b> <span class=\"q-blank\">___________</span> not an ordinary school; it <b>(4. be)</b> <span class=\"q-blank\">___________</span> a magical English school! \nOur classrooms <b>(5. be)</b> <span class=\"q-blank\">___________</span> full of floating books and glowing pencils. The teachers <b>(6. be)</b> <span class=\"q-blank\">___________</span> friendly owls and talking rabbits. Professor Owl <b>(7. be)</b> <span class=\"q-blank\">___________</span> our headmaster. He <b>(8. not / be)</b> <span class=\"q-blank\">___________</span> strict; he <b>(9. be)</b> <span class=\"q-blank\">___________</span> very kind and wise. \nLook at the sunny garden! The flowers <b>(10. be)</b> <span class=\"q-blank\">___________</span> bright blue and gold. <b>(11. be)</b> <span class=\"q-blank\">___________</span> you ready for the great grammar adventure today? Yes, we <b>(12. be)</b> <span class=\"q-blank\">___________</span>!",
    "verbs": [
      "1. be",
      "2. be",
      "3. be",
      "4. be",
      "5. be",
      "6. be",
      "7. be",
      "8. not / be",
      "9. be",
      "10. be",
      "11. be",
      "12. be"
    ],
    "answers": [
      "is",
      "am",
      "is",
      "is",
      "are",
      "are",
      "is",
      "isn't",
      "is",
      "are",
      "Are",
      "are"
    ]
  },
  {
    "page_num": 53,
    "unit_ref": "Unit 2",
    "title": "Cloze Story 2: Super Benny's Busy Routine",
    "tense_focus": "Present Simple: Action Verbs (Habits & Routines, -s/-es/-ies)",
    "intro": "Qavsdagi fe'llardan Present Simple shaklini yasang (-s qo'shimchasiga diqqat qiling):",
    "story": "Every morning, Benny the Bunny <b>(1. wake up)</b> <span class=\"q-blank\">___________</span> at 6:30 AM. He <b>(2. wash)</b> <span class=\"q-blank\">___________</span> his fluffy face and <b>(3. brush)</b> <span class=\"q-blank\">___________</span> his teeth. Then he <b>(4. eat)</b> <span class=\"q-blank\">___________</span> three fresh carrots for breakfast. \nAt 8:00, he <b>(5. start)</b> <span class=\"q-blank\">___________</span> his lessons. Benny <b>(6. love)</b> <span class=\"q-blank\">___________</span> reading adventure books. In the afternoon, he <b>(7. help)</b> <span class=\"q-blank\">___________</span> Professor Owl and <b>(8. tidy)</b> <span class=\"q-blank\">___________</span> the big library shelves. His friend Leo <b>(9. play)</b> <span class=\"q-blank\">___________</span> the guitar while Benny <b>(10. sing)</b> <span class=\"q-blank\">___________</span> cheerful English songs. In the evening, Benny <b>(11. watch)</b> <span class=\"q-blank\">___________</span> nature cartoons and <b>(12. study)</b> <span class=\"q-blank\">___________</span> new grammar rules before he <b>(13. sleep)</b> <span class=\"q-blank\">___________</span>.",
    "verbs": [
      "1. wake up",
      "2. wash",
      "3. brush",
      "4. eat",
      "5. start",
      "6. love",
      "7. help",
      "8. tidy",
      "9. play",
      "10. sing",
      "11. watch",
      "12. study",
      "13. sleep"
    ],
    "answers": [
      "wakes up",
      "washes",
      "brushes",
      "eats",
      "starts",
      "loves",
      "helps",
      "tidies",
      "plays",
      "sings",
      "watches",
      "studies",
      "sleeps"
    ]
  },
  {
    "page_num": 54,
    "unit_ref": "Unit 3",
    "title": "Cloze Story 3: The Alien Who Loved Music",
    "tense_focus": "Present Simple: Negatives & Questions (do/does, don't/doesn't)",
    "intro": "Qavsdagi fe'llardan don't, doesn't, Do yoki Does bilan inkor va so'roq gaplar tuzing:",
    "story": "Zog is a friendly green alien from planet Mars. He lives in a silver spaceship. <b>(1. do/does)</b> <span class=\"q-blank\">___________</span> he eat human food? No, he <b>(2. not / eat)</b> <span class=\"q-blank\">___________</span> bread or meat. He drinks starlight juice! \nZog <b>(3. not / like)</b> <span class=\"q-blank\">___________</span> noisy traffic, but he loves Earth music. <b>(4. do/does)</b> <span class=\"q-blank\">___________</span> he play any instruments? Yes, he plays the piano! \nHis alien pets <b>(5. not / bark)</b> <span class=\"q-blank\">___________</span> like dogs; they whistle like birds. \n'<b>(6. do/does)</b> <span class=\"q-blank\">___________</span> you understand my Martian songs?' asks Zog. Benny answers: 'I <b>(7. not / understand)</b> <span class=\"q-blank\">___________</span> all the words, but the melody is wonderful!' Zog smiles because he <b>(8. not / feel)</b> <span class=\"q-blank\">___________</span> lonely anymore.",
    "verbs": [
      "1. do/does",
      "2. not / eat",
      "3. not / like",
      "4. do/does",
      "5. not / bark",
      "6. do/does",
      "7. not / understand",
      "8. not / feel"
    ],
    "answers": [
      "Does",
      "doesn't eat",
      "doesn't like",
      "Does",
      "don't bark",
      "Do",
      "don't understand",
      "doesn't feel"
    ]
  },
  {
    "page_num": 55,
    "unit_ref": "Unit 4",
    "title": "Cloze Story 4: The Busy Treehouse Workshop",
    "tense_focus": "Present Continuous Affirmative & Negative (am/is/are + V-ing)",
    "intro": "Hozir sodir bo'layotgan harakatlarni ifodalash uchun fe'llarni Present Continuous ga qo'ying:",
    "story": "Look at the giant oak tree! Right now, all the forest animals <b>(1. work)</b> <span class=\"q-blank\">___________</span> together in the secret treehouse workshop. \nTommy the Bear <b>(2. paint)</b> <span class=\"q-blank\">___________</span> a wooden roof with bright green paint. Little squirrels <b>(3. carry)</b> <span class=\"q-blank\">___________</span> small wooden sticks. \nLook! Benny the Bunny <b>(4. not / sleep)</b> <span class=\"q-blank\">___________</span>; he <b>(5. fix)</b> <span class=\"q-blank\">___________</span> the rope ladder. \nTwo hedgehogs <b>(6. cook)</b> <span class=\"q-blank\">___________</span> hot berry tea for everyone. Mother Fox <b>(7. write)</b> <span class=\"q-blank\">___________</span> a list of tools. \nListen! The little birds <b>(8. sing)</b> <span class=\"q-blank\">___________</span> cheerful melodies. Nobody <b>(9. shout)</b> <span class=\"q-blank\">___________</span>; everyone <b>(10. smile)</b> <span class=\"q-blank\">___________</span> happily at this very moment!",
    "verbs": [
      "1. work",
      "2. paint",
      "3. carry",
      "4. not / sleep",
      "5. fix",
      "6. cook",
      "7. write",
      "8. sing",
      "9. is shouting / shout",
      "10. smile"
    ],
    "answers": [
      "are working",
      "is painting",
      "are carrying",
      "isn't sleeping",
      "is fixing",
      "are cooking",
      "is writing",
      "are singing",
      "is shouting",
      "is smiling"
    ]
  },
  {
    "page_num": 56,
    "unit_ref": "Unit 5",
    "title": "Cloze Story 5: The Mystery at the Midnight Zoo",
    "tense_focus": "Present Continuous Questions & Answers (Am/Is/Are + V-ing)",
    "intro": "So'roq gaplarni to'g'ri Present Continuous yordamchi fe'llari bilan to'ldiring:",
    "story": "It is midnight at the city zoo, but Detective Leo has received an urgent phone call. \nLeo: 'Officer, <b>(1. be)</b> <span class=\"q-blank\">___________</span> the animals sleeping quietly right now?'\nOfficer: 'No, sir! <b>(2. What / be)</b> <span class=\"q-blank\">___________</span> they doing? They are having a midnight party!'\nLeo: '<b>(3. be)</b> <span class=\"q-blank\">___________</span> the clever monkey climbing the lamppost?'\nOfficer: 'Yes, it <b>(4. be)</b> <span class=\"q-blank\">___________</span>! And <b>(5. be)</b> <span class=\"q-blank\">___________</span> the elephants dancing to the music?'\nLeo: 'Unbelievable! <b>(6. Where / be)</b> <span class=\"q-blank\">___________</span> the zookeeper running right now?'\nOfficer: 'He <b>(7. be / look for)</b> <span class=\"q-blank\">___________</span> the keys to the gate!' \nLeo smiles: 'Don't worry, I am coming right now to help you!'",
    "verbs": [
      "1. be",
      "2. What / be",
      "3. be",
      "4. be",
      "5. be",
      "6. Where / be",
      "7. be / look for"
    ],
    "answers": [
      "Are",
      "What are",
      "Is",
      "is",
      "are",
      "Where is",
      "is looking for"
    ]
  },
  {
    "page_num": 57,
    "unit_ref": "Unit 6",
    "title": "Cloze Story 6: Sunday Carnival vs Monday School",
    "tense_focus": "Present Simple vs Present Continuous (Habits vs Right Now)",
    "intro": "Signal so'zlarga qarab fe'llarni Present Simple yoki Present Continuous shakliga qo'ying:",
    "story": "On weekdays, Malika usually <b>(1. wear)</b> <span class=\"q-blank\">___________</span> her dark school uniform and <b>(2. walk)</b> <span class=\"q-blank\">___________</span> to school with her classmates. She always <b>(3. do)</b> <span class=\"q-blank\">___________</span> her homework at 5:00 PM. \nHowever, today is Sunday! The city <b>(4. celebrate)</b> <span class=\"q-blank\">___________</span> the spring flower festival right now. \nLook! Malika <b>(5. not / study)</b> <span class=\"q-blank\">___________</span> in her room today. She <b>(6. wear)</b> <span class=\"q-blank\">___________</span> a bright pink traditional dress and she <b>(7. eat)</b> <span class=\"q-blank\">___________</span> sweet cotton candy in the grand park. \nMusicians <b>(8. play)</b> <span class=\"q-blank\">___________</span> joyful national melodies on the stage. Malika usually <b>(9. drink)</b> <span class=\"q-blank\">___________</span> tea, but today she <b>(10. sip)</b> <span class=\"q-blank\">___________</span> fresh iced lemonade!",
    "verbs": [
      "1. wear",
      "2. walk",
      "3. do",
      "4. celebrate",
      "5. not / study",
      "6. wear",
      "7. eat",
      "8. play",
      "9. drink",
      "10. sip"
    ],
    "answers": [
      "wears",
      "walks",
      "does",
      "is celebrating",
      "isn't studying",
      "is wearing",
      "is eating",
      "are playing",
      "drinks",
      "is sipping"
    ]
  },
  {
    "page_num": 58,
    "unit_ref": "Unit 7",
    "title": "Cloze Story 7: Yesterday in the Lost Valley",
    "tense_focus": "Past Simple 'To Be' (was, were, wasn't, weren't)",
    "intro": "Qavsdagi fe'llarni was, were, wasn't yoki weren't bilan to'ldiring:",
    "story": "Yesterday <b>(1. be)</b> <span class=\"q-blank\">___________</span> an unforgettable Saturday for Benny and Timur. \nThey <b>(2. be)</b> <span class=\"q-blank\">___________</span> on a special expedition to the ancient Mountain Valley. \nThe morning sky <b>(3. be)</b> <span class=\"q-blank\">___________</span> sunny and crystal blue. \nTimur <b>(4. not / be)</b> <span class=\"q-blank\">___________</span> afraid of high hills; he <b>(5. be)</b> <span class=\"q-blank\">___________</span> very brave. \nIn the museum cave, there <b>(6. be)</b> <span class=\"q-blank\">___________</span> giant footprint fossils of ancient creatures. \nThe footprints <b>(7. be)</b> <span class=\"q-blank\">___________</span> huge! \nBenny asked: '<b>(8. be)</b> <span class=\"q-blank\">___________</span> these dinosaur tracks real?' \nThe guide replied: 'Yes, they <b>(9. be)</b> <span class=\"q-blank\">___________</span>! Millions of years ago, this valley <b>(10. be)</b> <span class=\"q-blank\">___________</span> home to green herbivore dinosaurs.' It <b>(11. be)</b> <span class=\"q-blank\">___________</span> the best field trip ever!",
    "verbs": [
      "1. be",
      "2. be",
      "3. be",
      "4. not / be",
      "5. be",
      "6. be",
      "7. be",
      "8. be",
      "9. be",
      "10. be",
      "11. be"
    ],
    "answers": [
      "was",
      "were",
      "was",
      "wasn't",
      "was",
      "were",
      "were",
      "Were",
      "were",
      "was",
      "was"
    ]
  },
  {
    "page_num": 59,
    "unit_ref": "Unit 8",
    "title": "Cloze Story 8: The Mountain Camping Adventure",
    "tense_focus": "Past Simple: Regular Verbs (-ed, -d, -ied, doubled consonants)",
    "intro": "Qavsdagi fe'llarga to'g'ri -ed qo'shib o'tgan zamonga aylantiring:",
    "story": "Last weekend, our Grade 4 scout team <b>(1. travel)</b> <span class=\"q-blank\">___________</span> to the Chimgan mountains. \nWe <b>(2. walk)</b> <span class=\"q-blank\">___________</span> five kilometers along a sparkling river. \nWhen we arrived, the team <b>(3. pitch)</b> <span class=\"q-blank\">___________</span> colorful tents. \nAziz <b>(4. clean)</b> <span class=\"q-blank\">___________</span> the fireplace area and grandfather <b>(5. light)</b> <span class=\"q-blank\">___________</span> a cozy campfire. \nIn the afternoon, we <b>(6. play)</b> <span class=\"q-blank\">___________</span> volleyball and <b>(7. watch)</b> <span class=\"q-blank\">___________</span> eagles soaring in the sky. \nWhen a sudden chilly breeze started, father <b>(8. close)</b> <span class=\"q-blank\">___________</span> the tent zippers. \nWe <b>(9. listen)</b> <span class=\"q-blank\">___________</span> to exciting campfire stories until midnight. \nBefore going to sleep, we <b>(10. tidy)</b> <span class=\"q-blank\">___________</span> up the entire campsite perfectly.",
    "verbs": [
      "1. travel",
      "2. walk",
      "3. pitch",
      "4. clean",
      "5. light (regular: helped)",
      "6. play",
      "7. watch",
      "8. close",
      "9. listen",
      "10. tidy"
    ],
    "answers": [
      "traveled",
      "walked",
      "pitched",
      "cleaned",
      "helped",
      "played",
      "watched",
      "closed",
      "listened",
      "tidied"
    ]
  },
  {
    "page_num": 60,
    "unit_ref": "Unit 9",
    "title": "Cloze Story 9: The Pirate Island Gold Chest",
    "tense_focus": "Past Simple: Irregular Verbs (went, saw, ate, had, bought, came...)",
    "intro": "Noto'g'ri fe'llarning o'tgan zamon (V2) shaklini yozing:",
    "story": "Many years ago, Captain Silver <b>(1. go)</b> <span class=\"q-blank\">___________</span> on a dangerous sea voyage across the Indian Ocean. \nOne stormy morning, he <b>(2. see)</b> <span class=\"q-blank\">___________</span> a mysterious green island with three palm trees. \nHis crew <b>(3. take)</b> <span class=\"q-blank\">___________</span> small wooden boats and landed on the beach. \nUnder an ancient rock, they <b>(4. find)</b> <span class=\"q-blank\">___________</span> an old pirate map. \nThe crew <b>(5. dig)</b> <span class=\"q-blank\">___________</span> deep into the golden sand and discovered a treasure chest! \nInside, they <b>(6. have)</b> <span class=\"q-blank\">___________</span> hundreds of shiny gold coins. \nThe sailors <b>(7. eat)</b> <span class=\"q-blank\">___________</span> sweet coconuts and <b>(8. drink)</b> <span class=\"q-blank\">___________</span> fresh spring water. \nCaptain Silver <b>(9. give)</b> <span class=\"q-blank\">___________</span> each sailor a silver medal, and he <b>(10. write)</b> <span class=\"q-blank\">___________</span> the story in his captain's log.",
    "verbs": [
      "1. go",
      "2. see",
      "3. take",
      "4. find",
      "5. dig",
      "6. have",
      "7. eat",
      "8. drink",
      "9. give",
      "10. write"
    ],
    "answers": [
      "went",
      "saw",
      "took",
      "found",
      "dug",
      "had",
      "ate",
      "drank",
      "gave",
      "wrote"
    ]
  },
  {
    "page_num": 61,
    "unit_ref": "Unit 10",
    "title": "Cloze Story 10: Detective Sherlock's Midnight Case",
    "tense_focus": "Past Simple: Negatives & Questions (did / didn't + V1)",
    "intro": "Gaplarni did, didn't va fe'lning 1-shakli (V1) bilan to'ldiring:",
    "story": "Someone took the golden key from the museum safe last night! \nDetective Sherlock inspected the crime scene carefully. \nSherlock: '<b>(1. Did/Do)</b> <span class=\"q-blank\">___________</span> the guard <b>(2. hear)</b> <span class=\"q-blank\">___________</span> any footsteps?' \nAssistant: 'No, he <b>(3. not / hear)</b> <span class=\"q-blank\">___________</span> anything because the storm was loud.' \nSherlock: '<b>(4. Did/Do)</b> <span class=\"q-blank\">___________</span> the thief <b>(5. leave)</b> <span class=\"q-blank\">___________</span> any fingerprints on the glass?' \nAssistant: 'No, he wore thick gloves, so he <b>(6. not / leave)</b> <span class=\"q-blank\">___________</span> any marks.' \nSherlock: 'Aha! But <b>(7. Did/Do)</b> <span class=\"q-blank\">___________</span> he <b>(8. forget)</b> <span class=\"q-blank\">___________</span> his umbrella by the window?' \nAssistant: 'Yes, he <b>(9. did/didn't)</b> <span class=\"q-blank\">___________</span>! There is a name tag on the handle!' \nSherlock: 'Splendid! The thief <b>(10. not / escape)</b> <span class=\"q-blank\">___________</span> after all!'",
    "verbs": [
      "1. Did",
      "2. hear",
      "3. not / hear",
      "4. Did",
      "5. leave",
      "6. not / leave",
      "7. Did",
      "8. forget",
      "9. did",
      "10. not / escape"
    ],
    "answers": [
      "Did",
      "hear",
      "didn't hear",
      "Did",
      "leave",
      "didn't leave",
      "Did",
      "forget",
      "did",
      "didn't escape"
    ]
  },
  {
    "page_num": 62,
    "unit_ref": "Unit 11",
    "title": "Cloze Story 11: The Storm at Eight O'clock",
    "tense_focus": "Past Continuous (was / were + V-ing) & 'When' conjunction",
    "intro": "O'tgan zamonda davom etayotgan jarayonlarni Past Continuous da yozing:",
    "story": "Yesterday evening at exactly 8:00 PM, a ferocious lightning storm hit our town. \nWhat was everyone doing when the power went out? \nAt that moment, grandmother <b>(1. knit)</b> <span class=\"q-blank\">___________</span> a warm wool sweater by the fireplace. \nFather <b>(2. read)</b> <span class=\"q-blank\">___________</span> the evening newspaper while mother <b>(3. bake)</b> <span class=\"q-blank\">___________</span> apple pies in the kitchen. \nMy sister and I <b>(4. do)</b> <span class=\"q-blank\">___________</span> our English grammar exercises. \nOur pet dog Benny <b>(5. sleep)</b> <span class=\"q-blank\">___________</span> under the study table. \nOutside, the heavy rain <b>(6. pour)</b> <span class=\"q-blank\">___________</span> down and the wind <b>(7. blow)</b> <span class=\"q-blank\">___________</span> fiercely. \nWe <b>(8. not / watch)</b> <span class=\"q-blank\">___________</span> television because the lights went dark. \nInstead, we lit candles and told funny stories!",
    "verbs": [
      "1. knit",
      "2. read",
      "3. bake",
      "4. do",
      "5. sleep",
      "6. pour",
      "7. blow",
      "8. not / watch"
    ],
    "answers": [
      "was knitting",
      "was reading",
      "was baking",
      "were doing",
      "was sleeping",
      "was pouring",
      "was blowing",
      "weren't watching"
    ]
  },
  {
    "page_num": 63,
    "unit_ref": "Unit 12",
    "title": "Cloze Story 12: Our Grand Summer Expedition",
    "tense_focus": "Future with 'be going to' (Plans & Intentions)",
    "intro": "Kelajak rejalarni 'am/is/are going to + V1' yordamida ifodalang:",
    "story": "This summer is going to be the most exciting holiday of our lives! \nOur family has organized a grand historic tour across Uzbekistan. \nNext month, we <b>(1. travel)</b> <span class=\"q-blank\">___________</span> from Tashkent to Samarkand by the high-speed Afrosiyob train. \nIn Samarkand, we <b>(2. visit)</b> <span class=\"q-blank\">___________</span> the magnificent Registan square. \nFather <b>(3. buy)</b> <span class=\"q-blank\">___________</span> a traditional handmade carpet in Bukhara. \nMy brother and I <b>(4. take)</b> <span class=\"q-blank\">___________</span> hundreds of colorful photographs of ancient minarets. \nMother <b>(5. learn)</b> <span class=\"q-blank\">___________</span> how to cook authentic Khorezmian bread. \nWe <b>(6. not / stay)</b> <span class=\"q-blank\">___________</span> at ordinary hotels; we <b>(7. sleep)</b> <span class=\"q-blank\">___________</span> in traditional desert yurts near Lake Aidarkul! \nI <b>(8. invite)</b> <span class=\"q-blank\">___________</span> my penfriend from England to join our tour next year.",
    "verbs": [
      "1. travel",
      "2. visit",
      "3. buy",
      "4. take",
      "5. learn",
      "6. not / stay",
      "7. sleep",
      "8. invite"
    ],
    "answers": [
      "are going to travel",
      "are going to visit",
      "is going to buy",
      "are going to take",
      "is going to learn",
      "aren't going to stay",
      "are going to sleep",
      "am going to invite"
    ]
  },
  {
    "page_num": 64,
    "unit_ref": "Unit 13",
    "title": "Cloze Story 13: Year 2050 - The Flying City",
    "tense_focus": "Future Simple: will & won't (Predictions & Promises)",
    "intro": "Kelajak bashoratlari va va'dalar uchun 'will + V1' yoki 'won't + V1' qo'ying:",
    "story": "What will the world look like in the year 2050? \nTop scientists predict that human life <b>(1. change)</b> <span class=\"q-blank\">___________</span> dramatically. \nIn 2050, cars <b>(2. fly)</b> <span class=\"q-blank\">___________</span> smoothly in designated sky lanes above skyscrapers. \nVehicles <b>(3. not / use)</b> <span class=\"q-blank\">___________</span> dirty petrol anymore; they will run on solar energy. \nSmart humanoid robots <b>(4. assist)</b> <span class=\"q-blank\">___________</span> teachers in classrooms and clean city parks. \nI believe doctors <b>(5. cure)</b> <span class=\"q-blank\">___________</span> all dangerous illnesses with advanced nanomedicine. \nPeople <b>(6. travel)</b> <span class=\"q-blank\">___________</span> to lunar space hotels for weekend vacations! \nI promise I <b>(7. study)</b> <span class=\"q-blank\">___________</span> hard in school so I <b>(8. become)</b> <span class=\"q-blank\">___________</span> a great space engineer one day!",
    "verbs": [
      "1. change",
      "2. fly",
      "3. not / use",
      "4. assist",
      "5. cure",
      "6. travel",
      "7. study",
      "8. become"
    ],
    "answers": [
      "will change",
      "will fly",
      "won't use",
      "will assist",
      "will cure",
      "will travel",
      "will study",
      "will become"
    ]
  },
  {
    "page_num": 65,
    "unit_ref": "Unit 14",
    "title": "Cloze Story 14: The Galactic Explorer's Diary",
    "tense_focus": "Present Perfect Intro: have/has + V3 (Life Experiences)",
    "intro": "Hayotiy tajribalarni have/has + V3 (Past Participle) bilan to'ldiring:",
    "story": "Commander Nova is the most famous cosmic traveler in our galaxy. \nIn his long lifetime, he <b>(1. visit)</b> <span class=\"q-blank\">___________</span> forty different distant moons. \nHe <b>(2. see)</b> <span class=\"q-blank\">___________</span> shiny purple ringed planets through his telescope. \nNova <b>(3. fly)</b> <span class=\"q-blank\">___________</span> through cosmic nebulae and he <b>(4. meet)</b> <span class=\"q-blank\">___________</span> friendly crystalline aliens. \n'<b>(5. you / ever / walk)</b> <span class=\"q-blank\">___________</span> on Mars, Commander?' asks the young reporter. \nNova answers: 'Yes, I <b>(6. be)</b> <span class=\"q-blank\">___________</span> on Mars three times! But I <b>(7. never / enter)</b> <span class=\"q-blank\">___________</span> a black hole because it is too dangerous.' \nOur space academy <b>(8. win)</b> <span class=\"q-blank\">___________</span> the Golden Star Trophy this year thanks to his leadership!",
    "verbs": [
      "1. visit",
      "2. see",
      "3. fly",
      "4. meet",
      "5. you / ever / walk",
      "6. be",
      "7. never / enter",
      "8. win"
    ],
    "answers": [
      "has visited",
      "has seen",
      "has flown",
      "has met",
      "Have you ever walked",
      "have been",
      "have never entered",
      "has won"
    ]
  },
  {
    "page_num": 66,
    "unit_ref": "All Tenses Master 1",
    "title": "Cloze Story 15: The Time Machine - Journey to Ancient Egypt",
    "tense_focus": "Comprehensive Challenge: Present, Past & Future in Action",
    "intro": "Barcha o'rganilgan zamonlarni kontekstga qarab qo'ying (Present, Past, Future):",
    "story": "Professor Owl and Benny stepped into the shiny copper Time Machine. \nThe Professor pressed a blue button, and whoosh! \nSuddenly, they <b>(1. arrive)</b> <span class=\"q-blank\">___________</span> in ancient Egypt four thousand years ago! \nThe sun <b>(2. shine)</b> <span class=\"q-blank\">___________</span> fiercely over the golden desert sand. \nLook! Hundreds of builders <b>(3. construct)</b> <span class=\"q-blank\">___________</span> a giant limestone pyramid right now. \nBenny <b>(4. gasp)</b> <span class=\"q-blank\">___________</span> in amazement: 'I <b>(5. have / never / see)</b> <span class=\"q-blank\">___________</span> such colossal monuments in my life!' \nAn Egyptian scribe walked over. He <b>(6. write)</b> <span class=\"q-blank\">___________</span> hieroglyphic symbols on dry papyrus paper. \n'Tomorrow morning, Pharaoh <b>(7. be going to inspect)</b> <span class=\"q-blank\">___________</span> the grand temple,' explained the scribe. \nProfessor Owl smiled: 'I hope our time machine <b>(8. take)</b> <span class=\"q-blank\">___________</span> us safely to our next destination!'",
    "verbs": [
      "1. arrive",
      "2. was shining / shine",
      "3. construct",
      "4. gasp",
      "5. have / never / see",
      "6. was writing / write",
      "7. be going to inspect",
      "8. take"
    ],
    "answers": [
      "arrived",
      "was shining",
      "are constructing",
      "gasped",
      "have never seen",
      "was writing",
      "is going to inspect",
      "will take"
    ]
  },
  {
    "page_num": 67,
    "unit_ref": "All Tenses Master 2",
    "title": "Cloze Story 16: Escape from the Future Cyber City",
    "tense_focus": "Grand All-Tenses Master Challenge Part 2",
    "intro": "Kontekst va zamon ko'rsatkichlariga qarab qavsdagi fe'llarni to'g'ri shaklga qo'ying:",
    "story": "From ancient Egypt, the Time Machine leaped forward to the year 3000! \nThey landed on a translucent rooftop in Neo-Tashkent. \nNeon lights <b>(1. glow)</b> <span class=\"q-blank\">___________</span> in seven rainbow colors. \nFlying magnetic vehicles <b>(2. zoom)</b> <span class=\"q-blank\">___________</span> silently past their heads right now! \nYesterday, Benny <b>(3. believe)</b> <span class=\"q-blank\">___________</span> that robots were clumsy, but look! \nA sleek silver android <b>(4. serve)</b> <span class=\"q-blank\">___________</span> delicious berry smoothies to smiling schoolchildren. \nProfessor Owl checked his watch: 'Our battery <b>(5. be)</b> <span class=\"q-blank\">___________</span> low. We <b>(6. be going to return)</b> <span class=\"q-blank\">___________</span> to Grade 4 in five minutes!' \nBenny shouted happily: 'I <b>(7. learn)</b> <span class=\"q-blank\">___________</span> so much on this incredible journey! I promise I <b>(8. write)</b> <span class=\"q-blank\">___________</span> an A+ essay for my English teacher tomorrow!'",
    "verbs": [
      "1. were glowing / glow",
      "2. zoom",
      "3. believe",
      "4. is serving / serve",
      "5. be",
      "6. be going to return",
      "7. have learned / learn",
      "8. write"
    ],
    "answers": [
      "were glowing",
      "are zooming",
      "believed",
      "is serving",
      "is",
      "are going to return",
      "have learned",
      "will write"
    ]
  },
  {
    "page_num": 68,
    "unit_ref": "Dialogue Master",
    "title": "Cloze Story 17: The Superhero Interview Dialogue",
    "tense_focus": "Conversational Grammar Challenge: Questions, Negatives & Short Answers",
    "intro": "Muxbir va Super-Qahramon Maksim o'rtasidagi suhbatni to'ldiring:",
    "story": "Reporter: 'Good evening! Today I <b>(1. talk)</b> <span class=\"q-blank\">___________</span> with Captain Lightning.' \nCaptain: 'Hello! I <b>(2. be)</b> <span class=\"q-blank\">___________</span> glad to be here.' \nReporter: '<b>(3. What / you / do)</b> <span class=\"q-blank\">___________</span> every day to stay strong?' \nCaptain: 'I usually <b>(4. run)</b> <span class=\"q-blank\">___________</span> twenty kilometers and eat healthy apples. I <b>(5. not / drink)</b> <span class=\"q-blank\">___________</span> sugary soda.' \nReporter: 'Where <b>(6. be)</b> <span class=\"q-blank\">___________</span> you yesterday when the bank was robbed?' \nCaptain: 'Yesterday afternoon, I <b>(7. rescue)</b> <span class=\"q-blank\">___________</span> people from a burning building.' \nReporter: '<b>(8. Have you ever / lose)</b> <span class=\"q-blank\">___________</span> a battle?' \nCaptain: 'No, I <b>(9. have / never / lose)</b> <span class=\"q-blank\">___________</span> a battle, and tomorrow we <b>(10. protect)</b> <span class=\"q-blank\">___________</span> the city from any danger!'",
    "verbs": [
      "1. talk",
      "2. be",
      "3. What / you / do",
      "4. run",
      "5. not / drink",
      "6. be",
      "7. rescue",
      "8. Have you ever / lose",
      "9. have / never / lose",
      "10. protect"
    ],
    "answers": [
      "am talking",
      "am",
      "What do you do",
      "run",
      "don't drink",
      "were",
      "rescued",
      "Have you ever lost",
      "have never lost",
      "will protect"
    ]
  },
  {
    "page_num": 69,
    "title": "Reading Cloze Answer Key & Score Chart",
    "subtitle": "20 ta qo'shimcha sahifadagi 17 ta matnning to'liq javoblar kaliti",
    "tag": "Cloze Answer Key",
    "is_answers": true,
    "answers_list": [
      [
        "Story 1 (p.52)",
        "1.is 2.am 3.is 4.is 5.are 6.are 7.is 8.isn't 9.is 10.are 11.Are 12.are"
      ],
      [
        "Story 2 (p.53)",
        "1.wakes up 2.washes 3.brushes 4.eats 5.starts 6.loves 7.helps 8.tidies 9.plays 10.sings 11.watches 12.studies 13.sleeps"
      ],
      [
        "Story 3 (p.54)",
        "1.Does 2.doesn't eat 3.doesn't like 4.Does 5.don't bark 6.Do 7.don't understand 8.doesn't feel"
      ],
      [
        "Story 4 (p.55)",
        "1.are working 2.is painting 3.are carrying 4.isn't sleeping 5.is fixing 6.are cooking 7.is writing 8.are singing 9.is shouting 10.is smiling"
      ],
      [
        "Story 5 (p.56)",
        "1.Are 2.What are 3.Is 4.is 5.are 6.Where is 7.is looking for"
      ],
      [
        "Story 6 (p.57)",
        "1.wears 2.walks 3.does 4.is celebrating 5.isn't studying 6.is wearing 7.is eating 8.are playing 9.drinks 10.is sipping"
      ],
      [
        "Story 7 (p.58)",
        "1.was 2.were 3.was 4.wasn't 5.was 6.were 7.were 8.Were 9.were 10.was 11.was"
      ],
      [
        "Story 8 (p.59)",
        "1.traveled 2.walked 3.pitched 4.cleaned 5.helped 6.played 7.watched 8.closed 9.listened 10.tidied"
      ],
      [
        "Story 9 (p.60)",
        "1.went 2.saw 3.took 4.found 5.dug 6.had 7.ate 8.drank 9.gave 10.wrote"
      ],
      [
        "Story 10 (p.61)",
        "1.Did 2.hear 3.didn't hear 4.Did 5.leave 6.didn't leave 7.Did 8.forget 9.did 10.didn't escape"
      ],
      [
        "Story 11 (p.62)",
        "1.was knitting 2.was reading 3.was baking 4.were doing 5.was sleeping 6.was pouring 7.was blowing 8.weren't watching"
      ],
      [
        "Story 12 (p.63)",
        "1.are going to travel 2.are going to visit 3.is going to buy 4.are going to take 5.is going to learn 6.aren't going to stay 7.are going to sleep 8.am going to invite"
      ],
      [
        "Story 13 (p.64)",
        "1.will change 2.will fly 3.won't use 4.will assist 5.will cure 6.will travel 7.will study 8.will become"
      ],
      [
        "Story 14 (p.65)",
        "1.has visited 2.has seen 3.has flown 4.has met 5.Have you ever walked 6.have been 7.have never entered 8.has won"
      ],
      [
        "Story 15 (p.66)",
        "1.arrived 2.was shining 3.are constructing 4.gasped 5.have never seen 6.was writing 7.is going to inspect 8.will take"
      ],
      [
        "Story 16 (p.67)",
        "1.were glowing 2.are zooming 3.believed 4.is serving 5.is 6.are going to return 7.have learned 8.will write"
      ],
      [
        "Story 17 (p.68)",
        "1.am talking 2.am 3.What do you do 4.run 5.don't drink 6.were 7.rescued 8.Have you ever lost 9.have never lost 10.will protect"
      ]
    ]
  },
  {
    "page_num": 70,
    "title": "GRAND MASTER CERTIFICATE OF ACHIEVEMENT",
    "subtitle": "70 Betlik To'liq Kursni Muvaffaqiyatli Bitirganlik To'g'risida Maxsus Faxriy Yorliq",
    "tag": "Official Graduation Diploma",
    "is_cert": true
  }
];
