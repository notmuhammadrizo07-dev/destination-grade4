"""
cloze_20_pages_data.py - 20 Dedicated Reading & Cloze Story Pages (Pages 51 to 70)
Covers all tenses with bracketed verbs to put into the correct form.
"""

CLOZE_STORIES_DATA = [
    {
        "page_num": 51,
        "title": "SECTION 4: READING & CLOZE MASTERWORK",
        "subtitle": "Hikoyalarda zamonlarni qo'llash: Qoidalar va O'qish strategiyasi",
        "tag": "Section Overview",
        "is_intro": True,
        "rules": [
            ("1. Kalit so'zlarga (Time Markers) e'tibor bering", "Har bir gapdagi <i>yesterday, usually, now, tomorrow, last week</i> kabi so'zlar qaysi zamonni tanlash kerakligini darhol ko'rsatadi."),
            ("2. Shaxs va Ega (Subject) bilan moslashtiring", "He, She, It uchun fe'lga <b>-s</b> qo'shiladi yoki <b>is, was, has</b> tanlanadi. I/We/They uchun <b>are, were, have</b> ishlatiladi."),
            ("3. Voqealar ketma-ketligini tushuning", "Hikoyadagi voqea hozir sodir bo'lyaptimi, o'tmishdami yoki kelajakdami? Matn mazmunini to'liq o'qib chiqing."),
            ("4. Qavslarni ochishda imlo qoidalariga rioya qiling", "To'g'ri fe'llarga <b>-ed</b> qo'shing (study -> studied, stop -> stopped), noto'g'ri fe'llarning 2 yoki 3-shaklini yozing.")
        ],
        "banner_note": "Ushbu 20 ta sahifada siz 1-dan 14-gacha bo'lgan barcha zamonlarni haqiqiy qiziqarli hikoyalar, ertaklar va detektiv sarguzashtlar orqali mustahkamlaysiz!"
    },
    {
        "page_num": 52,
        "unit_ref": "Unit 1",
        "title": "Cloze Story 1: The Magic English Academy",
        "tense_focus": "Present Simple 'To Be' (am, is, are, isn't, aren't)",
        "intro": "Qavs ichidagi 'to be' fe'llarini to'g'ri shaklga qo'ying:",
        "story": """Welcome to Starlight Academy! My name <b>(1. be)</b> <span class="q-blank">___________</span> Benny. I <b>(2. be)</b> <span class="q-blank">___________</span> very happy to meet you. This school <b>(3. be)</b> <span class="q-blank">___________</span> not an ordinary school; it <b>(4. be)</b> <span class="q-blank">___________</span> a magical English school! 
Our classrooms <b>(5. be)</b> <span class="q-blank">___________</span> full of floating books and glowing pencils. The teachers <b>(6. be)</b> <span class="q-blank">___________</span> friendly owls and talking rabbits. Professor Owl <b>(7. be)</b> <span class="q-blank">___________</span> our headmaster. He <b>(8. not / be)</b> <span class="q-blank">___________</span> strict; he <b>(9. be)</b> <span class="q-blank">___________</span> very kind and wise. 
Look at the sunny garden! The flowers <b>(10. be)</b> <span class="q-blank">___________</span> bright blue and gold. <b>(11. be)</b> <span class="q-blank">___________</span> you ready for the great grammar adventure today? Yes, we <b>(12. be)</b> <span class="q-blank">___________</span>!""",
        "verbs": ["1. be", "2. be", "3. be", "4. be", "5. be", "6. be", "7. be", "8. not / be", "9. be", "10. be", "11. be", "12. be"],
        "answers": ["is", "am", "is", "is", "are", "are", "is", "isn't", "is", "are", "Are", "are"]
    },
    {
        "page_num": 53,
        "unit_ref": "Unit 2",
        "title": "Cloze Story 2: Super Benny's Busy Routine",
        "tense_focus": "Present Simple: Action Verbs (Habits & Routines, -s/-es/-ies)",
        "intro": "Qavsdagi fe'llardan Present Simple shaklini yasang (-s qo'shimchasiga diqqat qiling):",
        "story": """Every morning, Benny the Bunny <b>(1. wake up)</b> <span class="q-blank">___________</span> at 6:30 AM. He <b>(2. wash)</b> <span class="q-blank">___________</span> his fluffy face and <b>(3. brush)</b> <span class="q-blank">___________</span> his teeth. Then he <b>(4. eat)</b> <span class="q-blank">___________</span> three fresh carrots for breakfast. 
At 8:00, he <b>(5. start)</b> <span class="q-blank">___________</span> his lessons. Benny <b>(6. love)</b> <span class="q-blank">___________</span> reading adventure books. In the afternoon, he <b>(7. help)</b> <span class="q-blank">___________</span> Professor Owl and <b>(8. tidy)</b> <span class="q-blank">___________</span> the big library shelves. His friend Leo <b>(9. play)</b> <span class="q-blank">___________</span> the guitar while Benny <b>(10. sing)</b> <span class="q-blank">___________</span> cheerful English songs. In the evening, Benny <b>(11. watch)</b> <span class="q-blank">___________</span> nature cartoons and <b>(12. study)</b> <span class="q-blank">___________</span> new grammar rules before he <b>(13. sleep)</b> <span class="q-blank">___________</span>.""",
        "verbs": ["1. wake up", "2. wash", "3. brush", "4. eat", "5. start", "6. love", "7. help", "8. tidy", "9. play", "10. sing", "11. watch", "12. study", "13. sleep"],
        "answers": ["wakes up", "washes", "brushes", "eats", "starts", "loves", "helps", "tidies", "plays", "sings", "watches", "studies", "sleeps"]
    },
    {
        "page_num": 54,
        "unit_ref": "Unit 3",
        "title": "Cloze Story 3: The Alien Who Loved Music",
        "tense_focus": "Present Simple: Negatives & Questions (do/does, don't/doesn't)",
        "intro": "Qavsdagi fe'llardan don't, doesn't, Do yoki Does bilan inkor va so'roq gaplar tuzing:",
        "story": """Zog is a friendly green alien from planet Mars. He lives in a silver spaceship. <b>(1. do/does)</b> <span class="q-blank">___________</span> he eat human food? No, he <b>(2. not / eat)</b> <span class="q-blank">___________</span> bread or meat. He drinks starlight juice! 
Zog <b>(3. not / like)</b> <span class="q-blank">___________</span> noisy traffic, but he loves Earth music. <b>(4. do/does)</b> <span class="q-blank">___________</span> he play any instruments? Yes, he plays the piano! 
His alien pets <b>(5. not / bark)</b> <span class="q-blank">___________</span> like dogs; they whistle like birds. 
'<b>(6. do/does)</b> <span class="q-blank">___________</span> you understand my Martian songs?' asks Zog. Benny answers: 'I <b>(7. not / understand)</b> <span class="q-blank">___________</span> all the words, but the melody is wonderful!' Zog smiles because he <b>(8. not / feel)</b> <span class="q-blank">___________</span> lonely anymore.""",
        "verbs": ["1. do/does", "2. not / eat", "3. not / like", "4. do/does", "5. not / bark", "6. do/does", "7. not / understand", "8. not / feel"],
        "answers": ["Does", "doesn't eat", "doesn't like", "Does", "don't bark", "Do", "don't understand", "doesn't feel"]
    },
    {
        "page_num": 55,
        "unit_ref": "Unit 4",
        "title": "Cloze Story 4: The Busy Treehouse Workshop",
        "tense_focus": "Present Continuous Affirmative & Negative (am/is/are + V-ing)",
        "intro": "Hozir sodir bo'layotgan harakatlarni ifodalash uchun fe'llarni Present Continuous ga qo'ying:",
        "story": """Look at the giant oak tree! Right now, all the forest animals <b>(1. work)</b> <span class="q-blank">___________</span> together in the secret treehouse workshop. 
Tommy the Bear <b>(2. paint)</b> <span class="q-blank">___________</span> a wooden roof with bright green paint. Little squirrels <b>(3. carry)</b> <span class="q-blank">___________</span> small wooden sticks. 
Look! Benny the Bunny <b>(4. not / sleep)</b> <span class="q-blank">___________</span>; he <b>(5. fix)</b> <span class="q-blank">___________</span> the rope ladder. 
Two hedgehogs <b>(6. cook)</b> <span class="q-blank">___________</span> hot berry tea for everyone. Mother Fox <b>(7. write)</b> <span class="q-blank">___________</span> a list of tools. 
Listen! The little birds <b>(8. sing)</b> <span class="q-blank">___________</span> cheerful melodies. Nobody <b>(9. shout)</b> <span class="q-blank">___________</span>; everyone <b>(10. smile)</b> <span class="q-blank">___________</span> happily at this very moment!""",
        "verbs": ["1. work", "2. paint", "3. carry", "4. not / sleep", "5. fix", "6. cook", "7. write", "8. sing", "9. is shouting / shout", "10. smile"],
        "answers": ["are working", "is painting", "are carrying", "isn't sleeping", "is fixing", "are cooking", "is writing", "are singing", "is shouting", "is smiling"]
    },
    {
        "page_num": 56,
        "unit_ref": "Unit 5",
        "title": "Cloze Story 5: The Mystery at the Midnight Zoo",
        "tense_focus": "Present Continuous Questions & Answers (Am/Is/Are + V-ing)",
        "intro": "So'roq gaplarni to'g'ri Present Continuous yordamchi fe'llari bilan to'ldiring:",
        "story": """It is midnight at the city zoo, but Detective Leo has received an urgent phone call. 
Leo: 'Officer, <b>(1. be)</b> <span class="q-blank">___________</span> the animals sleeping quietly right now?'
Officer: 'No, sir! <b>(2. What / be)</b> <span class="q-blank">___________</span> they doing? They are having a midnight party!'
Leo: '<b>(3. be)</b> <span class="q-blank">___________</span> the clever monkey climbing the lamppost?'
Officer: 'Yes, it <b>(4. be)</b> <span class="q-blank">___________</span>! And <b>(5. be)</b> <span class="q-blank">___________</span> the elephants dancing to the music?'
Leo: 'Unbelievable! <b>(6. Where / be)</b> <span class="q-blank">___________</span> the zookeeper running right now?'
Officer: 'He <b>(7. be / look for)</b> <span class="q-blank">___________</span> the keys to the gate!' 
Leo smiles: 'Don't worry, I am coming right now to help you!'""",
        "verbs": ["1. be", "2. What / be", "3. be", "4. be", "5. be", "6. Where / be", "7. be / look for"],
        "answers": ["Are", "What are", "Is", "is", "are", "Where is", "is looking for"]
    },
    {
        "page_num": 57,
        "unit_ref": "Unit 6",
        "title": "Cloze Story 6: Sunday Carnival vs Monday School",
        "tense_focus": "Present Simple vs Present Continuous (Habits vs Right Now)",
        "intro": "Signal so'zlarga qarab fe'llarni Present Simple yoki Present Continuous shakliga qo'ying:",
        "story": """On weekdays, Malika usually <b>(1. wear)</b> <span class="q-blank">___________</span> her dark school uniform and <b>(2. walk)</b> <span class="q-blank">___________</span> to school with her classmates. She always <b>(3. do)</b> <span class="q-blank">___________</span> her homework at 5:00 PM. 
However, today is Sunday! The city <b>(4. celebrate)</b> <span class="q-blank">___________</span> the spring flower festival right now. 
Look! Malika <b>(5. not / study)</b> <span class="q-blank">___________</span> in her room today. She <b>(6. wear)</b> <span class="q-blank">___________</span> a bright pink traditional dress and she <b>(7. eat)</b> <span class="q-blank">___________</span> sweet cotton candy in the grand park. 
Musicians <b>(8. play)</b> <span class="q-blank">___________</span> joyful national melodies on the stage. Malika usually <b>(9. drink)</b> <span class="q-blank">___________</span> tea, but today she <b>(10. sip)</b> <span class="q-blank">___________</span> fresh iced lemonade!""",
        "verbs": ["1. wear", "2. walk", "3. do", "4. celebrate", "5. not / study", "6. wear", "7. eat", "8. play", "9. drink", "10. sip"],
        "answers": ["wears", "walks", "does", "is celebrating", "isn't studying", "is wearing", "is eating", "are playing", "drinks", "is sipping"]
    },
    {
        "page_num": 58,
        "unit_ref": "Unit 7",
        "title": "Cloze Story 7: Yesterday in the Lost Valley",
        "tense_focus": "Past Simple 'To Be' (was, were, wasn't, weren't)",
        "intro": "Qavsdagi fe'llarni was, were, wasn't yoki weren't bilan to'ldiring:",
        "story": """Yesterday <b>(1. be)</b> <span class="q-blank">___________</span> an unforgettable Saturday for Benny and Timur. 
They <b>(2. be)</b> <span class="q-blank">___________</span> on a special expedition to the ancient Mountain Valley. 
The morning sky <b>(3. be)</b> <span class="q-blank">___________</span> sunny and crystal blue. 
Timur <b>(4. not / be)</b> <span class="q-blank">___________</span> afraid of high hills; he <b>(5. be)</b> <span class="q-blank">___________</span> very brave. 
In the museum cave, there <b>(6. be)</b> <span class="q-blank">___________</span> giant footprint fossils of ancient creatures. 
The footprints <b>(7. be)</b> <span class="q-blank">___________</span> huge! 
Benny asked: '<b>(8. be)</b> <span class="q-blank">___________</span> these dinosaur tracks real?' 
The guide replied: 'Yes, they <b>(9. be)</b> <span class="q-blank">___________</span>! Millions of years ago, this valley <b>(10. be)</b> <span class="q-blank">___________</span> home to green herbivore dinosaurs.' It <b>(11. be)</b> <span class="q-blank">___________</span> the best field trip ever!""",
        "verbs": ["1. be", "2. be", "3. be", "4. not / be", "5. be", "6. be", "7. be", "8. be", "9. be", "10. be", "11. be"],
        "answers": ["was", "were", "was", "wasn't", "was", "were", "were", "Were", "were", "was", "was"]
    },
    {
        "page_num": 59,
        "unit_ref": "Unit 8",
        "title": "Cloze Story 8: The Mountain Camping Adventure",
        "tense_focus": "Past Simple: Regular Verbs (-ed, -d, -ied, doubled consonants)",
        "intro": "Qavsdagi fe'llarga to'g'ri -ed qo'shib o'tgan zamonga aylantiring:",
        "story": """Last weekend, our Grade 4 scout team <b>(1. travel)</b> <span class="q-blank">___________</span> to the Chimgan mountains. 
We <b>(2. walk)</b> <span class="q-blank">___________</span> five kilometers along a sparkling river. 
When we arrived, the team <b>(3. pitch)</b> <span class="q-blank">___________</span> colorful tents. 
Aziz <b>(4. clean)</b> <span class="q-blank">___________</span> the fireplace area and grandfather <b>(5. light)</b> <span class="q-blank">___________</span> a cozy campfire. 
In the afternoon, we <b>(6. play)</b> <span class="q-blank">___________</span> volleyball and <b>(7. watch)</b> <span class="q-blank">___________</span> eagles soaring in the sky. 
When a sudden chilly breeze started, father <b>(8. close)</b> <span class="q-blank">___________</span> the tent zippers. 
We <b>(9. listen)</b> <span class="q-blank">___________</span> to exciting campfire stories until midnight. 
Before going to sleep, we <b>(10. tidy)</b> <span class="q-blank">___________</span> up the entire campsite perfectly.""",
        "verbs": ["1. travel", "2. walk", "3. pitch", "4. clean", "5. light (regular: helped)", "6. play", "7. watch", "8. close", "9. listen", "10. tidy"],
        "answers": ["traveled", "walked", "pitched", "cleaned", "helped", "played", "watched", "closed", "listened", "tidied"]
    },
    {
        "page_num": 60,
        "unit_ref": "Unit 9",
        "title": "Cloze Story 9: The Pirate Island Gold Chest",
        "tense_focus": "Past Simple: Irregular Verbs (went, saw, ate, had, bought, came...)",
        "intro": "Noto'g'ri fe'llarning o'tgan zamon (V2) shaklini yozing:",
        "story": """Many years ago, Captain Silver <b>(1. go)</b> <span class="q-blank">___________</span> on a dangerous sea voyage across the Indian Ocean. 
One stormy morning, he <b>(2. see)</b> <span class="q-blank">___________</span> a mysterious green island with three palm trees. 
His crew <b>(3. take)</b> <span class="q-blank">___________</span> small wooden boats and landed on the beach. 
Under an ancient rock, they <b>(4. find)</b> <span class="q-blank">___________</span> an old pirate map. 
The crew <b>(5. dig)</b> <span class="q-blank">___________</span> deep into the golden sand and discovered a treasure chest! 
Inside, they <b>(6. have)</b> <span class="q-blank">___________</span> hundreds of shiny gold coins. 
The sailors <b>(7. eat)</b> <span class="q-blank">___________</span> sweet coconuts and <b>(8. drink)</b> <span class="q-blank">___________</span> fresh spring water. 
Captain Silver <b>(9. give)</b> <span class="q-blank">___________</span> each sailor a silver medal, and he <b>(10. write)</b> <span class="q-blank">___________</span> the story in his captain's log.""",
        "verbs": ["1. go", "2. see", "3. take", "4. find", "5. dig", "6. have", "7. eat", "8. drink", "9. give", "10. write"],
        "answers": ["went", "saw", "took", "found", "dug", "had", "ate", "drank", "gave", "wrote"]
    },
    {
        "page_num": 61,
        "unit_ref": "Unit 10",
        "title": "Cloze Story 10: Detective Sherlock's Midnight Case",
        "tense_focus": "Past Simple: Negatives & Questions (did / didn't + V1)",
        "intro": "Gaplarni did, didn't va fe'lning 1-shakli (V1) bilan to'ldiring:",
        "story": """Someone took the golden key from the museum safe last night! 
Detective Sherlock inspected the crime scene carefully. 
Sherlock: '<b>(1. Did/Do)</b> <span class="q-blank">___________</span> the guard <b>(2. hear)</b> <span class="q-blank">___________</span> any footsteps?' 
Assistant: 'No, he <b>(3. not / hear)</b> <span class="q-blank">___________</span> anything because the storm was loud.' 
Sherlock: '<b>(4. Did/Do)</b> <span class="q-blank">___________</span> the thief <b>(5. leave)</b> <span class="q-blank">___________</span> any fingerprints on the glass?' 
Assistant: 'No, he wore thick gloves, so he <b>(6. not / leave)</b> <span class="q-blank">___________</span> any marks.' 
Sherlock: 'Aha! But <b>(7. Did/Do)</b> <span class="q-blank">___________</span> he <b>(8. forget)</b> <span class="q-blank">___________</span> his umbrella by the window?' 
Assistant: 'Yes, he <b>(9. did/didn't)</b> <span class="q-blank">___________</span>! There is a name tag on the handle!' 
Sherlock: 'Splendid! The thief <b>(10. not / escape)</b> <span class="q-blank">___________</span> after all!'""",
        "verbs": ["1. Did", "2. hear", "3. not / hear", "4. Did", "5. leave", "6. not / leave", "7. Did", "8. forget", "9. did", "10. not / escape"],
        "answers": ["Did", "hear", "didn't hear", "Did", "leave", "didn't leave", "Did", "forget", "did", "didn't escape"]
    },
    {
        "page_num": 62,
        "unit_ref": "Unit 11",
        "title": "Cloze Story 11: The Storm at Eight O'clock",
        "tense_focus": "Past Continuous (was / were + V-ing) & 'When' conjunction",
        "intro": "O'tgan zamonda davom etayotgan jarayonlarni Past Continuous da yozing:",
        "story": """Yesterday evening at exactly 8:00 PM, a ferocious lightning storm hit our town. 
What was everyone doing when the power went out? 
At that moment, grandmother <b>(1. knit)</b> <span class="q-blank">___________</span> a warm wool sweater by the fireplace. 
Father <b>(2. read)</b> <span class="q-blank">___________</span> the evening newspaper while mother <b>(3. bake)</b> <span class="q-blank">___________</span> apple pies in the kitchen. 
My sister and I <b>(4. do)</b> <span class="q-blank">___________</span> our English grammar exercises. 
Our pet dog Benny <b>(5. sleep)</b> <span class="q-blank">___________</span> under the study table. 
Outside, the heavy rain <b>(6. pour)</b> <span class="q-blank">___________</span> down and the wind <b>(7. blow)</b> <span class="q-blank">___________</span> fiercely. 
We <b>(8. not / watch)</b> <span class="q-blank">___________</span> television because the lights went dark. 
Instead, we lit candles and told funny stories!""",
        "verbs": ["1. knit", "2. read", "3. bake", "4. do", "5. sleep", "6. pour", "7. blow", "8. not / watch"],
        "answers": ["was knitting", "was reading", "was baking", "were doing", "was sleeping", "was pouring", "was blowing", "weren't watching"]
    },
    {
        "page_num": 63,
        "unit_ref": "Unit 12",
        "title": "Cloze Story 12: Our Grand Summer Expedition",
        "tense_focus": "Future with 'be going to' (Plans & Intentions)",
        "intro": "Kelajak rejalarni 'am/is/are going to + V1' yordamida ifodalang:",
        "story": """This summer is going to be the most exciting holiday of our lives! 
Our family has organized a grand historic tour across Uzbekistan. 
Next month, we <b>(1. travel)</b> <span class="q-blank">___________</span> from Tashkent to Samarkand by the high-speed Afrosiyob train. 
In Samarkand, we <b>(2. visit)</b> <span class="q-blank">___________</span> the magnificent Registan square. 
Father <b>(3. buy)</b> <span class="q-blank">___________</span> a traditional handmade carpet in Bukhara. 
My brother and I <b>(4. take)</b> <span class="q-blank">___________</span> hundreds of colorful photographs of ancient minarets. 
Mother <b>(5. learn)</b> <span class="q-blank">___________</span> how to cook authentic Khorezmian bread. 
We <b>(6. not / stay)</b> <span class="q-blank">___________</span> at ordinary hotels; we <b>(7. sleep)</b> <span class="q-blank">___________</span> in traditional desert yurts near Lake Aidarkul! 
I <b>(8. invite)</b> <span class="q-blank">___________</span> my penfriend from England to join our tour next year.""",
        "verbs": ["1. travel", "2. visit", "3. buy", "4. take", "5. learn", "6. not / stay", "7. sleep", "8. invite"],
        "answers": ["are going to travel", "are going to visit", "is going to buy", "are going to take", "is going to learn", "aren't going to stay", "are going to sleep", "am going to invite"]
    },
    {
        "page_num": 64,
        "unit_ref": "Unit 13",
        "title": "Cloze Story 13: Year 2050 - The Flying City",
        "tense_focus": "Future Simple: will & won't (Predictions & Promises)",
        "intro": "Kelajak bashoratlari va va'dalar uchun 'will + V1' yoki 'won't + V1' qo'ying:",
        "story": """What will the world look like in the year 2050? 
Top scientists predict that human life <b>(1. change)</b> <span class="q-blank">___________</span> dramatically. 
In 2050, cars <b>(2. fly)</b> <span class="q-blank">___________</span> smoothly in designated sky lanes above skyscrapers. 
Vehicles <b>(3. not / use)</b> <span class="q-blank">___________</span> dirty petrol anymore; they will run on solar energy. 
Smart humanoid robots <b>(4. assist)</b> <span class="q-blank">___________</span> teachers in classrooms and clean city parks. 
I believe doctors <b>(5. cure)</b> <span class="q-blank">___________</span> all dangerous illnesses with advanced nanomedicine. 
People <b>(6. travel)</b> <span class="q-blank">___________</span> to lunar space hotels for weekend vacations! 
I promise I <b>(7. study)</b> <span class="q-blank">___________</span> hard in school so I <b>(8. become)</b> <span class="q-blank">___________</span> a great space engineer one day!""",
        "verbs": ["1. change", "2. fly", "3. not / use", "4. assist", "5. cure", "6. travel", "7. study", "8. become"],
        "answers": ["will change", "will fly", "won't use", "will assist", "will cure", "will travel", "will study", "will become"]
    },
    {
        "page_num": 65,
        "unit_ref": "Unit 14",
        "title": "Cloze Story 14: The Galactic Explorer's Diary",
        "tense_focus": "Present Perfect Intro: have/has + V3 (Life Experiences)",
        "intro": "Hayotiy tajribalarni have/has + V3 (Past Participle) bilan to'ldiring:",
        "story": """Commander Nova is the most famous cosmic traveler in our galaxy. 
In his long lifetime, he <b>(1. visit)</b> <span class="q-blank">___________</span> forty different distant moons. 
He <b>(2. see)</b> <span class="q-blank">___________</span> shiny purple ringed planets through his telescope. 
Nova <b>(3. fly)</b> <span class="q-blank">___________</span> through cosmic nebulae and he <b>(4. meet)</b> <span class="q-blank">___________</span> friendly crystalline aliens. 
'<b>(5. you / ever / walk)</b> <span class="q-blank">___________</span> on Mars, Commander?' asks the young reporter. 
Nova answers: 'Yes, I <b>(6. be)</b> <span class="q-blank">___________</span> on Mars three times! But I <b>(7. never / enter)</b> <span class="q-blank">___________</span> a black hole because it is too dangerous.' 
Our space academy <b>(8. win)</b> <span class="q-blank">___________</span> the Golden Star Trophy this year thanks to his leadership!""",
        "verbs": ["1. visit", "2. see", "3. fly", "4. meet", "5. you / ever / walk", "6. be", "7. never / enter", "8. win"],
        "answers": ["has visited", "has seen", "has flown", "has met", "Have you ever walked", "have been", "have never entered", "has won"]
    },
    {
        "page_num": 66,
        "unit_ref": "All Tenses Master 1",
        "title": "Cloze Story 15: The Time Machine - Journey to Ancient Egypt",
        "tense_focus": "Comprehensive Challenge: Present, Past & Future in Action",
        "intro": "Barcha o'rganilgan zamonlarni kontekstga qarab qo'ying (Present, Past, Future):",
        "story": """Professor Owl and Benny stepped into the shiny copper Time Machine. 
The Professor pressed a blue button, and whoosh! 
Suddenly, they <b>(1. arrive)</b> <span class="q-blank">___________</span> in ancient Egypt four thousand years ago! 
The sun <b>(2. shine)</b> <span class="q-blank">___________</span> fiercely over the golden desert sand. 
Look! Hundreds of builders <b>(3. construct)</b> <span class="q-blank">___________</span> a giant limestone pyramid right now. 
Benny <b>(4. gasp)</b> <span class="q-blank">___________</span> in amazement: 'I <b>(5. have / never / see)</b> <span class="q-blank">___________</span> such colossal monuments in my life!' 
An Egyptian scribe walked over. He <b>(6. write)</b> <span class="q-blank">___________</span> hieroglyphic symbols on dry papyrus paper. 
'Tomorrow morning, Pharaoh <b>(7. be going to inspect)</b> <span class="q-blank">___________</span> the grand temple,' explained the scribe. 
Professor Owl smiled: 'I hope our time machine <b>(8. take)</b> <span class="q-blank">___________</span> us safely to our next destination!'""",
        "verbs": ["1. arrive", "2. was shining / shine", "3. construct", "4. gasp", "5. have / never / see", "6. was writing / write", "7. be going to inspect", "8. take"],
        "answers": ["arrived", "was shining", "are constructing", "gasped", "have never seen", "was writing", "is going to inspect", "will take"]
    },
    {
        "page_num": 67,
        "unit_ref": "All Tenses Master 2",
        "title": "Cloze Story 16: Escape from the Future Cyber City",
        "tense_focus": "Grand All-Tenses Master Challenge Part 2",
        "intro": "Kontekst va zamon ko'rsatkichlariga qarab qavsdagi fe'llarni to'g'ri shaklga qo'ying:",
        "story": """From ancient Egypt, the Time Machine leaped forward to the year 3000! 
They landed on a translucent rooftop in Neo-Tashkent. 
Neon lights <b>(1. glow)</b> <span class="q-blank">___________</span> in seven rainbow colors. 
Flying magnetic vehicles <b>(2. zoom)</b> <span class="q-blank">___________</span> silently past their heads right now! 
Yesterday, Benny <b>(3. believe)</b> <span class="q-blank">___________</span> that robots were clumsy, but look! 
A sleek silver android <b>(4. serve)</b> <span class="q-blank">___________</span> delicious berry smoothies to smiling schoolchildren. 
Professor Owl checked his watch: 'Our battery <b>(5. be)</b> <span class="q-blank">___________</span> low. We <b>(6. be going to return)</b> <span class="q-blank">___________</span> to Grade 4 in five minutes!' 
Benny shouted happily: 'I <b>(7. learn)</b> <span class="q-blank">___________</span> so much on this incredible journey! I promise I <b>(8. write)</b> <span class="q-blank">___________</span> an A+ essay for my English teacher tomorrow!'""",
        "verbs": ["1. were glowing / glow", "2. zoom", "3. believe", "4. is serving / serve", "5. be", "6. be going to return", "7. have learned / learn", "8. write"],
        "answers": ["were glowing", "are zooming", "believed", "is serving", "is", "are going to return", "have learned", "will write"]
    },
    {
        "page_num": 68,
        "unit_ref": "Dialogue Master",
        "title": "Cloze Story 17: The Superhero Interview Dialogue",
        "tense_focus": "Conversational Grammar Challenge: Questions, Negatives & Short Answers",
        "intro": "Muxbir va Super-Qahramon Maksim o'rtasidagi suhbatni to'ldiring:",
        "story": """Reporter: 'Good evening! Today I <b>(1. talk)</b> <span class="q-blank">___________</span> with Captain Lightning.' 
Captain: 'Hello! I <b>(2. be)</b> <span class="q-blank">___________</span> glad to be here.' 
Reporter: '<b>(3. What / you / do)</b> <span class="q-blank">___________</span> every day to stay strong?' 
Captain: 'I usually <b>(4. run)</b> <span class="q-blank">___________</span> twenty kilometers and eat healthy apples. I <b>(5. not / drink)</b> <span class="q-blank">___________</span> sugary soda.' 
Reporter: 'Where <b>(6. be)</b> <span class="q-blank">___________</span> you yesterday when the bank was robbed?' 
Captain: 'Yesterday afternoon, I <b>(7. rescue)</b> <span class="q-blank">___________</span> people from a burning building.' 
Reporter: '<b>(8. Have you ever / lose)</b> <span class="q-blank">___________</span> a battle?' 
Captain: 'No, I <b>(9. have / never / lose)</b> <span class="q-blank">___________</span> a battle, and tomorrow we <b>(10. protect)</b> <span class="q-blank">___________</span> the city from any danger!'""",
        "verbs": ["1. talk", "2. be", "3. What / you / do", "4. run", "5. not / drink", "6. be", "7. rescue", "8. Have you ever / lose", "9. have / never / lose", "10. protect"],
        "answers": ["am talking", "am", "What do you do", "run", "don't drink", "were", "rescued", "Have you ever lost", "have never lost", "will protect"]
    },
    {
        "page_num": 69,
        "title": "Reading Cloze Answer Key & Score Chart",
        "subtitle": "20 ta qo'shimcha sahifadagi 17 ta matnning to'liq javoblar kaliti",
        "tag": "Cloze Answer Key",
        "is_answers": True,
        "answers_list": [
            ("Story 1 (p.52)", "1.is 2.am 3.is 4.is 5.are 6.are 7.is 8.isn't 9.is 10.are 11.Are 12.are"),
            ("Story 2 (p.53)", "1.wakes up 2.washes 3.brushes 4.eats 5.starts 6.loves 7.helps 8.tidies 9.plays 10.sings 11.watches 12.studies 13.sleeps"),
            ("Story 3 (p.54)", "1.Does 2.doesn't eat 3.doesn't like 4.Does 5.don't bark 6.Do 7.don't understand 8.doesn't feel"),
            ("Story 4 (p.55)", "1.are working 2.is painting 3.are carrying 4.isn't sleeping 5.is fixing 6.are cooking 7.is writing 8.are singing 9.is shouting 10.is smiling"),
            ("Story 5 (p.56)", "1.Are 2.What are 3.Is 4.is 5.are 6.Where is 7.is looking for"),
            ("Story 6 (p.57)", "1.wears 2.walks 3.does 4.is celebrating 5.isn't studying 6.is wearing 7.is eating 8.are playing 9.drinks 10.is sipping"),
            ("Story 7 (p.58)", "1.was 2.were 3.was 4.wasn't 5.was 6.were 7.were 8.Were 9.were 10.was 11.was"),
            ("Story 8 (p.59)", "1.traveled 2.walked 3.pitched 4.cleaned 5.helped 6.played 7.watched 8.closed 9.listened 10.tidied"),
            ("Story 9 (p.60)", "1.went 2.saw 3.took 4.found 5.dug 6.had 7.ate 8.drank 9.gave 10.wrote"),
            ("Story 10 (p.61)", "1.Did 2.hear 3.didn't hear 4.Did 5.leave 6.didn't leave 7.Did 8.forget 9.did 10.didn't escape"),
            ("Story 11 (p.62)", "1.was knitting 2.was reading 3.was baking 4.were doing 5.was sleeping 6.was pouring 7.was blowing 8.weren't watching"),
            ("Story 12 (p.63)", "1.are going to travel 2.are going to visit 3.is going to buy 4.are going to take 5.is going to learn 6.aren't going to stay 7.are going to sleep 8.am going to invite"),
            ("Story 13 (p.64)", "1.will change 2.will fly 3.won't use 4.will assist 5.will cure 6.will travel 7.will study 8.will become"),
            ("Story 14 (p.65)", "1.has visited 2.has seen 3.has flown 4.has met 5.Have you ever walked 6.have been 7.have never entered 8.has won"),
            ("Story 15 (p.66)", "1.arrived 2.was shining 3.are constructing 4.gasped 5.have never seen 6.was writing 7.is going to inspect 8.will take"),
            ("Story 16 (p.67)", "1.were glowing 2.are zooming 3.believed 4.is serving 5.is 6.are going to return 7.have learned 8.will write"),
            ("Story 17 (p.68)", "1.am talking 2.am 3.What do you do 4.run 5.don't drink 6.were 7.rescued 8.Have you ever lost 9.have never lost 10.will protect")
        ]
    },
    {
        "page_num": 70,
        "title": "GRAND MASTER CERTIFICATE OF ACHIEVEMENT",
        "subtitle": "70 Betlik To'liq Kursni Muvaffaqiyatli Bitirganlik To'g'risida Maxsus Faxriy Yorliq",
        "tag": "Official Graduation Diploma",
        "is_cert": True
    }
]
