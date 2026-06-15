// ============================================================
// TEIL 1 EXERCISES – Brief mit Lücken (a/b/c Auswahl)
// ALL from Klett Telc B1 Modeltest book (verified answers)
// ============================================================

const teil1Exercises = [
    {
        title: "Modeltest 1 – Carola an Judith (Spanisch in Sevilla)",
        text: `Liebe Judith,

wie geht es dir? Ich finde es sehr schade, dass wir uns so lange nicht mehr __21__ haben.

Ich habe eine tolle Idee: Im __22__ Jahr möchte ich meinen Urlaub in Spanien verbringen, __23__ an einer Sprachschule in Sevilla Spanisch zu lernen. Wie findest du diese Idee?

Spanisch hatte ich schon ein paar __24__ in der Schule, aber ich habe sehr viel vergessen. Das geht ja immer so schnell bei Sprachen.
Im Internet habe ich ein Angebot von einer Sprachenschule im Zentrum von Sevilla gefunden, __25__ ziemlich günstig ist. Die Online-Bewertungen __26__ alle sehr gut. Der Unterricht ist jeden Tag von 10 bis 14 Uhr und am Nachmittag macht man zusammen Ausflüge oder hat Programm.

Du hattest mal erzählt, __27__ du auch gern Spanisch lernen möchtest. Vielleicht hast du Zeit und Lust, __28__? Ich fände es toll, mit __29__ zusammen zu verreisen. Was denkst du?

Ruf mich bitte heute oder morgen Abend an, dann können wir __30__ sprechen.

Viele Grüße
Carola`,
        gaps: [
            { number: 21, options: ["a) gesehen", "b) sehe", "c) sehen"], correct: "a", explanation: "📘 Pattern 3: Verb Forms — Perfekt needs haben + Partizip II. 'Wir haben uns nicht GESEHEN' (seen). The past participle of 'sehen' is 'gesehen'. 🇧🇩 Perfekt-এ haben + Partizip II লাগে। 'sehen'-এর Partizip II হলো 'gesehen'।" },
            { number: 22, options: ["a) nächste", "b) nächsten", "c) nächstes"], correct: "b", explanation: "📘 Pattern 6: Adjective Endings — 'im' = in + dem (Dativ). 'Jahr' is neutral. After 'dem' (Dativ) the adjective ending is always -en → 'nächsten'. 🇧🇩 'im' মানে Dativ। Dativ-এ adjective ending সবসময় -en হয়।" },
            { number: 23, options: ["a) damit", "b) um", "c) und"], correct: "b", explanation: "📘 Pattern 10: Infinitiv mit zu — Same subject (ich) + purpose = 'um...zu'. She wants to go TO learn → 'um...zu lernen'. 'damit' needs different subject. 🇧🇩 একই subject + উদ্দেশ্য = 'um...zu'। 'damit' লাগে যখন দুটো আলাদা subject থাকে।" },
            { number: 24, options: ["a) Jahr", "b) Jahre", "c) Jahren"], correct: "b", explanation: "📘 Pattern 1: Articles + Case — 'ein paar' + Plural noun. 'Jahre' is the standard plural. No Dativ here, just plain plural. 🇧🇩 'ein paar'-এর পর Plural আসে। 'Jahr'-এর Plural হলো 'Jahre'।" },
            { number: 25, options: ["a) das", "b) den", "c) der"], correct: "a", explanation: "📘 Pattern 11: Relative Clauses — 'Angebot' is neutral (das Angebot). It's the SUBJECT in the relative clause → Nominativ = 'das'. 🇧🇩 'Angebot' neutral (das)। relative clause-এ subject হিসেবে Nominativ লাগে = 'das'।" },
            { number: 26, options: ["a) waren", "b) wären", "c) werden"], correct: "a", explanation: "📘 Pattern 3: Verb Forms — Reporting past facts = Präteritum. Plural past of 'sein' = 'waren'. NOT 'wären' (subjunctive). 🇧🇩 অতীতের তথ্য জানাচ্ছে = Präteritum। 'sein'-এর Plural past = 'waren'।" },
            { number: 27, options: ["a) als", "b) dass", "c) ob"], correct: "b", explanation: "📘 Pattern 4: Connectors — 'erzählt, DASS...' introduces content (what was said). Verb goes to end. 'ob' = yes/no question. 🇧🇩 কেউ কী বলেছে তা জানাতে 'dass' ব্যবহার হয়। Verb শেষে যায়। 'ob' হলো হ্যাঁ/না প্রশ্নের জন্য।" },
            { number: 28, options: ["a) mitgekommen", "b) mitkommen", "c) mitzukommen"], correct: "c", explanation: "📘 Pattern 10: Infinitiv mit zu — After 'Lust haben' → always 'zu + Infinitiv'. Separable verbs: prefix+zu+verb = ONE word → 'mit-zu-kommen'. 🇧🇩 'Lust haben'-এর পর সবসময় 'zu + Infinitiv'। Trennbare verb: prefix+zu+verb = একটা শব্দ।" },
            { number: 29, options: ["a) dich", "b) dir", "c) du"], correct: "b", explanation: "📘 Pattern 5: Pronouns — 'mit' ALWAYS takes Dativ. Dativ of 'du' = 'dir'. 🇧🇩 'mit'-এর পর সবসময় Dativ আসে। 'du'-এর Dativ হলো 'dir'।" },
            { number: 30, options: ["a) dafür", "b) darüber", "c) davor"], correct: "b", explanation: "📘 Pattern 12: Verb + Preposition — 'sprechen ÜBER' (to talk about) → dar+über = 'darüber'. 🇧🇩 'sprechen über' = কিছু সম্পর্কে কথা বলা। বস্তু বোঝাতে dar+über = 'darüber'।" }
        ]
    },
    {
        title: "Modeltest 2 – Maxi an Tina (Neue Wohnung)",
        text: `Liebe Tina,

vielen Dank für __21__ E-Mail und die Glückwünsche. Die Feier war echt toll, aber leider war es auch die letzte Party in meinem __22__ WG-Zimmer.

Du hast gefragt, wie die neue Wohnung aussieht. Fotos schicke ich __23__ später, hier erst einmal eine Beschreibung: Wir haben drei Zimmer, __24__ ist wirklich super! In das Schlafzimmer passen nur ein Bett und ein Schrank, aber mehr braucht man ja nicht.

Das Wohnzimmer ist __25__ genug für ein Sofa mit einem Sessel und sogar Pauls riesigen Esstisch mit allen Stühlen. Du weißt ja, dass Paul gern für andere kocht. Du __26__ bestimmt auch bald eingeladen!

Die Küche ist sehr klein, __27__ können wir hier zu zweit frühstücken, das geht. Ich freue mich am allermeisten über __28__ Arbeitszimmer. Es hat einen großen Balkon, __29__ dem wir sehr gern sitzen.

__30__ bald mal einen Kaffee trinken!

Viele Grüße
Maxi`,
        gaps: [
            { number: 21, options: ["a) dein", "b) deine", "c) deinen"], correct: "b", explanation: "📘 Pattern 1: Articles + Case — 'E-Mail' is feminine (die E-Mail). After 'für' (Akkusativ), feminine possessive = 'deine'. 🇧🇩 'E-Mail' feminine। 'für'-এর পর Akkusativ → feminine Akk = 'deine'।" },
            { number: 22, options: ["a) altem", "b) alten", "c) altes"], correct: "b", explanation: "📘 Pattern 6: Adjective Endings — After 'meinem' (Dativ) → adjective ending is always -en. Rule: after einem/meinem/deinem → -en! 🇧🇩 'meinem'-এর পর adjective ending সবসময় -en। এটা একটা সহজ নিয়ম!" },
            { number: 23, options: ["a) dich", "b) dir", "c) du"], correct: "b", explanation: "📘 Pattern 5: Pronouns — 'schicken' needs Dativ (to whom?). I send photos TO YOU = 'dir'. 🇧🇩 'schicken' = পাঠানো → কাকে পাঠাচ্ছি? Dativ লাগে = 'dir'।" },
            { number: 24, options: ["a) das", "b) dass", "c) was"], correct: "a", explanation: "📘 Pattern 11: Relative Clauses — 'das' refers to the whole previous statement. 'That IS super!' Not 'dass' (which needs verb at end). 🇧🇩 'das' পুরো আগের বাক্যকে বোঝাচ্ছে। 'dass' হলে verb শেষে যেত।" },
            { number: 25, options: ["a) groß", "b) größer", "c) großes"], correct: "a", explanation: "📘 Pattern 8: Degree Forms — After 'genug' (enough) → ALWAYS basic form (Grundform). 'Groß genug' = big enough. Never 'größer genug'! 🇧🇩 'genug'-এর আগে সবসময় Grundform (মূল রূপ) বসে। কখনো comparative না!" },
            { number: 26, options: ["a) warst", "b) wirst", "c) wurdest"], correct: "b", explanation: "📘 Pattern 3: Verb Forms — 'Du WIRST eingeladen' = you WILL be invited. Future passive: werden + Partizip II. 🇧🇩 ভবিষ্যৎ passive = werden + Partizip II। 'du wirst eingeladen' = তোমাকে আমন্ত্রণ করা হবে।" },
            { number: 27, options: ["a) aber", "b) obwohl", "c) trotzdem"], correct: "c", explanation: "📘 Pattern 4: Connectors — Verb 'können' comes RIGHT AFTER the gap → inverted word order = Group B → 'trotzdem'. Despite being small, we CAN have breakfast. 🇧🇩 Gap-এর পরেই verb → Group B (deshalb/trotzdem)। ছোট হওয়া সত্ত্বেও (trotzdem) আমরা breakfast করতে পারি।" },
            { number: 28, options: ["a) unser", "b) unserem", "c) unseres"], correct: "a", explanation: "📘 Pattern 1: Articles + Case — 'über' + Akkusativ. 'Arbeitszimmer' is neutral. Akkusativ neutral possessive = 'unser' (no extra ending). 🇧🇩 'über' + Akkusativ। neutral Akkusativ-এ possessive-এ কোনো extra ending লাগে না = 'unser'।" },
            { number: 29, options: ["a) auf", "b) darauf", "c) wo"], correct: "a", explanation: "📘 Pattern 11: Relative Clauses — 'Balkon, AUF dem wir sitzen' = balcony ON which we sit. Preposition 'auf' + Dativ (location). 🇧🇩 'auf dem' = যার উপর। Relative clause-এ preposition + dem/der ব্যবহার হয়।" },
            { number: 30, options: ["a) Komm", "b) Kommen", "c) Kommst"], correct: "a", explanation: "📘 Pattern 3: Verb Forms — Imperative for 'du': just the stem! kommen → 'Komm!' Informal letter = du-form imperative. 🇧🇩 'du'-এর Imperativ = শুধু verb-এর stem! kommen → Komm! (এসো!)" }
        ]
    },
    {
        title: "Modeltest 3 – Jost an Berenike (Neuer Job im Kindergarten)",
        text: `Liebe Berenike,

ich wollte dir ja schon lange __21__. Allerdings hatte ich __22__ viel zu tun, dass ich es nicht geschafft habe. Tut mir leid!

Mein neuer Job im Kindergarten macht mich richtig glücklich. Die Räume, der Garten und natürlich die Arbeit mit den Kindern gefallen __23__ sehr und die Kolleginnen sind auch super. Ich bin der einzige Mann, __24__ mit kleinen Kindern arbeitet. Es gibt noch einen anderen Kollegen, aber er unterstützt die Kolleginnen im Hort mit den Schulkindern.

__25__ am Anfang alles neu war, hatte ich keine Probleme und bin sofort gut zurechtgekommen. Sicher, ich verdiene hier weniger __26__ in meinem Job vorher. Aber Geld ist für mich nicht am __27__.

Vorher war ich oft gestresst und genervt, jetzt genieße ich __28__ Arbeitstag mit den Kindern. Das einzig Negative sind die Krankheiten. Irgendein Kind hustet immer, sodass man ganz schnell auch krank wird. __29__ habe ich etwas Angst, denn ich hasse es, erkältet zu sein. Ein bisschen Schnupfen habe ich schon. Hoffentlich bleibe ich fit und __30__ mich nicht gleich krankmelden. Das wäre sehr schade.

Ich hoffe, wir sehen uns bald!

Viele Grüße
Jost`,
        gaps: [
            { number: 21, options: ["a) geschrieben", "b) schreiben", "c) schrieb"], correct: "b", explanation: "📘 Pattern 3: Verb Forms — After modal verb ('wollte') → INFINITIVE. 'Ich wollte schreiben' = I wanted to write. 🇧🇩 Modal verb-এর পর সবসময় Infinitiv আসে। 'wollte schreiben' = লিখতে চেয়েছিলাম।" },
            { number: 22, options: ["a) sehr", "b) so", "c) zu"], correct: "b", explanation: "📘 Pattern 4: Connectors — 'SO...dass' = so much...that. 'SO viel zu tun, dass...' signals a result clause. 🇧🇩 'so...dass' = এত...যে। 'so viel zu tun, dass' = এত কাজ ছিল যে..." },
            { number: 23, options: ["a) ich", "b) mich", "c) mir"], correct: "c", explanation: "📘 Pattern 5: Pronouns — 'gefallen' is a DATIV verb (always!). 'gefällt MIR' = pleases me. Memorize: gefallen/helfen/schmecken → Dativ! 🇧🇩 'gefallen' সবসময় Dativ নেয়! 'gefällt mir' = আমার ভালো লাগে। মনে রাখো: gefallen, helfen = Dativ!" },
            { number: 24, options: ["a) dem", "b) den", "c) der"], correct: "c", explanation: "📘 Pattern 11: Relative Clauses — 'Mann' is maskulin. He IS the subject (he works) → Nominativ = 'der'. 🇧🇩 'Mann' maskulin। সে নিজেই কাজ করে (subject) → Nominativ = 'der'।" },
            { number: 25, options: ["a) Aber", "b) Obwohl", "c) Trotzdem"], correct: "b", explanation: "📘 Pattern 4: Connectors — Verb 'war' at END → Nebensatz → Group C. 'OBWOHL alles neu war' = although. 🇧🇩 Verb 'war' শেষে → Nebensatz → obwohl/weil/dass। 'obwohl' = যদিও।" },
            { number: 26, options: ["a) als", "b) seit", "c) wie"], correct: "a", explanation: "📘 Pattern 8: Degree Forms — After comparative ('weniger') → ALWAYS 'als'. 'Weniger ALS vorher' = less THAN before. 🇧🇩 Comparative (-er/weniger)-এর পর সবসময় 'als'। als = ...থেকে/...চেয়ে।" },
            { number: 27, options: ["a) wichtig", "b) wichtiger", "c) wichtigsten"], correct: "c", explanation: "📘 Pattern 8: Degree Forms — 'am ___STEN' = superlative. 'Nicht am WICHTIGSTEN' = not the most important. See 'am' → pick -sten! 🇧🇩 'am' দেখলেই -sten form বসাও! 'am wichtigsten' = সবচেয়ে গুরুত্বপূর্ণ।" },
            { number: 28, options: ["a) jeden", "b) jeder", "c) jedes"], correct: "a", explanation: "📘 Pattern 1: Articles + Case — 'Arbeitstag' is maskulin. Time expression = Akkusativ. Maskulin Akk = 'jeden'. 🇧🇩 'Arbeitstag' maskulin। সময় বোঝাতে Akkusativ → maskulin Akk = 'jeden'।" },
            { number: 29, options: ["a) Darauf", "b) Damit", "c) Davor"], correct: "c", explanation: "📘 Pattern 12: Verb + Preposition — 'Angst haben VOR' → dar+vor = 'DAVOR'. Afraid OF that. 🇧🇩 'Angst haben vor' = ভয় পাওয়া। বস্তু বোঝাতে da+vor = 'davor' = সেটার ভয়।" },
            { number: 30, options: ["a) darf", "b) muss", "c) will"], correct: "b", explanation: "📘 Pattern 3: Verb Forms — 'MUSS mich nicht krankmelden' = hopefully won't HAVE TO call in sick. müssen = necessity. 🇧🇩 'müssen' = বাধ্যতা। আশা করি sick leave নিতে হবে না (muss nicht)।" }
        ]
    },
    {
        title: "Modeltest 4 – Malika an Hanna (Studium wechseln)",
        text: `Liebe Hanna,

jetzt muss ich __21__ unbedingt schreiben: Endlich habe ich mich __22__, mit dem Medizinstudium aufzuhören. Wie du weißt, habe ich schon lange überlegt, __23__ ich etwas anderes studieren sollte. Medizin war einfach nicht das richtige Fach für mich, schon __24__ dem ersten Semester.

Die Entscheidung war total schwer. Deshalb nochmal vielen lieben Dank, dass du mir so oft zugehört hast und viele gute Tipps für mich __25__.

Gestern habe ich mit __26__ Eltern gesprochen. Ich hatte ein bisschen Angst vor dem Gespräch, aber es war nicht so __27__, wie erwartet. Ich bin so froh, dass sie meine Gründe verstanden haben, nicht böse sind und mich weiterhin unterstützen wollen. Nun kann ich planen.

Ich habe mein WG-Zimmer in Münster gekündigt und ziehe __28__ Monat erstmal zurück nach Hause. Außerdem habe ich mich in Jena, München und Leipzig __29__ einen Studienplatz in Psychologie beworben. Mal sehen, __30__ ich dann im Herbst gehe.

Ich hoffe, wir sehen uns bald. Das würde mich sehr freuen.

Ganz liebe Grüße
Malika`,
        gaps: [
            { number: 21, options: ["a) dich", "b) dir", "c) du"], correct: "b", explanation: "📘 Pattern 5: Pronouns — 'schreiben' takes Dativ (to whom?). 'Ich muss DIR schreiben' = I must write TO YOU. 🇧🇩 'schreiben' = লেখা → কাকে লিখছি? Dativ = 'dir'।" },
            { number: 22, options: ["a) entschieden", "b) entschlossen", "c) entscheidet"], correct: "b", explanation: "📘 Pattern 3: Verb Forms — 'sich entschließen' → Perfekt = 'habe mich ENTSCHLOSSEN' (decided/resolved). 🇧🇩 'sich entschließen' = সিদ্ধান্ত নেওয়া। Perfekt = 'habe mich entschlossen'।" },
            { number: 23, options: ["a) ob", "b) obwohl", "c) wegen"], correct: "a", explanation: "📘 Pattern 4: Connectors — 'überlegt, OB...' = wondered WHETHER/IF. Indirect yes/no question → always 'ob'. 🇧🇩 'ob' = কিনা (yes/no প্রশ্ন)। 'আমি ভেবেছি, আমার অন্য কিছু পড়া উচিত কিনা (ob)'।" },
            { number: 24, options: ["a) als", "b) seit", "c) vor"], correct: "b", explanation: "📘 Pattern 2: Time Prepositions — 'SEIT dem ersten Semester' = since the first semester. Still true NOW → seit. 🇧🇩 'seit' = থেকে (এখনো চলছে)। প্রথম semester থেকেই এটা ঠিক ছিল না → seit।" },
            { number: 25, options: ["a) gehabt", "b) hattest", "c) hättest"], correct: "b", explanation: "📘 Pattern 3: Verb Forms — 'dass du Tipps HATTEST' = that you had tips. Präteritum of 'haben', du-form. 🇧🇩 'haben'-এর Präteritum du-form = 'hattest'। তোমার কাছে tips ছিল।" },
            { number: 26, options: ["a) mein", "b) meine", "c) meinen"], correct: "c", explanation: "📘 Pattern 1: Articles + Case — 'mit' ALWAYS takes Dativ. 'Eltern' = Plural. Dativ Plural = 'meinen'. 🇧🇩 'mit'-এর পর সবসময় Dativ! Plural Dativ possessive = 'meinen'।" },
            { number: 27, options: ["a) schlimm", "b) schlimmer", "c) schlimmsten"], correct: "a", explanation: "📘 Pattern 8: Degree Forms — 'nicht so SCHLIMM, wie erwartet' = not as bad as expected. After 'so...wie' → ALWAYS basic form! 🇧🇩 'so...wie' = যতটা...ততটা। এর মাঝে সবসময় Grundform (মূল রূপ) বসে, comparative না!" },
            { number: 28, options: ["a) diese", "b) diesen", "c) dieser"], correct: "b", explanation: "📘 Pattern 1: Articles + Case — 'Monat' is maskulin. Time expression = Akkusativ. Maskulin Akk = 'diesen'. 🇧🇩 'Monat' maskulin। সময় বোঝাতে Akkusativ → 'diesen Monat' = এই মাসে।" },
            { number: 29, options: ["a) an", "b) bei", "c) um"], correct: "c", explanation: "📘 Pattern 12: Verb + Preposition — 'sich bewerben UM' = to apply for. Fixed combo! 🇧🇩 'sich bewerben um' = আবেদন করা। এটা একটা fixed combination — মুখস্থ করো!" },
            { number: 30, options: ["a) wo", "b) woher", "c) wohin"], correct: "c", explanation: "📘 Pattern 4: Connectors — 'WOHIN ich gehe' = WHERE TO I'm going. Direction → wohin. Location → wo. Origin → woher. 🇧🇩 'wohin' = কোথায় যাচ্ছি (direction)। 'wo' = কোথায় আছি। 'woher' = কোথা থেকে।" }
        ]
    }
];

// ============================================================
// TEIL 2 EXERCISES – Text mit Wortbank (15 Wörter, 10 Lücken)
// ALL from Klett Telc B1 Modeltest book (verified answers)
// ============================================================

const teil2Exercises = [
    {
        title: "Modeltest 1 – Heinz Friedel an Hotel Seeblick",
        text: `Sehr geehrte Damen und Herren,

in der Zeitung habe ich __31__ Angebot für sieben Nächte gesehen, das klingt gut! Wir würden __32__ gern zwei Wochen am See verbringen, nicht nur sieben Nächte. Haben Sie __33__ auch ein Angebot?

Wir sind drei Personen und möchten __34__ 1. September bis zum 14. September kommen. Für diese Zeit brauchen wir ein Doppelzimmer und ein Einzelzimmer.

Ist es möglich, __35__ Hund mitzubringen? Wir __36__ ihn leider nicht zu Hause lassen.

Ich möchte __37__ wissen, ob man die Übernachtungen ohne Frühstück buchen kann. __38__ ist das Frühstück immer schon im Preis für die Übernachtung enthalten?

Bitte informieren Sie uns auch __39__, welche Sportmöglichkeiten für Senioren es in der Nähe gibt.

__40__ Ihre Antwort freue ich mich sehr und danke Ihnen im Voraus.

Mit freundlichen Grüßen
Heinz Friedel`,
        words: ["ABER", "AM", "AUF", "AUßERDEM", "BLEIBEN", "DAFÜR", "DARÜBER", "DASS", "IHR", "KÖNNEN", "ODER", "ÜBER", "UNSEREN", "VOM", "WOLLTEN"],
        correct: { 31: "IHR", 32: "ABER", 33: "DAFÜR", 34: "VOM", 35: "UNSEREN", 36: "KÖNNEN", 37: "AUßERDEM", 38: "ODER", 39: "DARÜBER", 40: "AUF" },
        explanations: {
            31: "📘 Pattern 15: Register — Formal letter → 'IHR Angebot' = YOUR offer (polite Sie-form). 🇧🇩 Formal letter-এ 'Ihr' (capital) = আপনার। 'Ihr Angebot' = আপনাদের offer।",
            32: "📘 Pattern 14: Logical Connectors — Contrast: 7 nights is good, BUT we want 2 weeks. 'ABER' = but. 🇧🇩 বিপরীত বোঝাচ্ছে: ৭ রাত ভালো, কিন্তু (ABER) আমরা ২ সপ্তাহ চাই।",
            33: "📘 Pattern 12: Verb + Preposition — 'DAFÜR' = for that (für+das). Do you have an offer FOR THAT? 🇧🇩 'dafür' = সেটার জন্য। সেটার (২ সপ্তাহের) জন্যও কি offer আছে?",
            34: "📘 Pattern 2: Time Prepositions — Date range: 'VOM 1. bis zum 14.' Fixed phrase! vom = von+dem. 🇧🇩 তারিখের range: 'vom...bis zum' = ...থেকে...পর্যন্ত।",
            35: "📘 Pattern 1: Articles + Case — 'Hund' is maskulin. Akkusativ object → 'UNSEREN'. 🇧🇩 'Hund' maskulin। Akkusativ possessive = 'unseren'। আমাদের কুকুরকে নিয়ে আসা।",
            36: "📘 Pattern 3: Verb Forms — 'Wir KÖNNEN ihn nicht lassen' = we CANNOT leave him. Modal verb. 🇧🇩 'können' = পারা। আমরা তাকে বাড়িতে রেখে আসতে পারি না।",
            37: "📘 Pattern 14: Logical Connectors — 'AUßERDEM' = additionally/furthermore. Another question. 🇧🇩 'außerdem' = এছাড়াও। আরেকটা প্রশ্ন আছে।",
            38: "📘 Pattern 14: Logical Connectors — 'ODER' = or. Presents an alternative option. 🇧🇩 'oder' = অথবা/নাকি। breakfast ছাড়া বুক করা যায়, নাকি (ODER) ওটা included?",
            39: "📘 Pattern 12: Verb + Preposition — 'informieren ÜBER' → dar+über = 'DARÜBER'. Inform us ABOUT it. 🇧🇩 'informieren über' = সম্পর্কে জানানো। dar+über = 'darüber' = সেটা সম্পর্কে।",
            40: "📘 Pattern 13: Fixed Phrases — 'AUF Ihre Antwort freue ich mich' = I look forward to your reply. Fixed closing! 🇧🇩 এটা একটা fixed phrase (মুখস্থ করো!)। 'sich freuen auf' = অপেক্ষা করছি।"
        }
    },
    {
        title: "Modeltest 2 – Diego Torres an Stadtbibliothek (Online-Service)",
        text: `Sehr geehrte Damen und Herren,

ich habe gelesen, dass man in der Bibliothek jetzt Medien __31__ online ausleihen kann. Das ist sehr interessant, deshalb __32__ ich dazu gern ein paar Fragen stellen.

Ist die Kundennummer, die __33__ meinem Ausweis steht, mein Passwort? Kann ich mich __34__ anmelden? Oder brauche ich ein neues Passwort, um __35__ Online-Angebot zu nutzen?

Sie haben wirklich sehr viele interessante E-Books zum Ausleihen. __36__ man keinen E-Book-Reader besitzt, was soll man dann machen? __37__ ich die Bücher einfach so auf meinem Smartphone lesen? Oder geht das __38__, wenn ich mir dafür eine spezielle App herunterlade?

Meine Tochter hat __39__ kostenlosen Schülerausweis für die Bibliothek. Darf __40__ das Online-Angebot auch gratis nutzen?

Ich hoffe sehr, dass Sie mir meine Fragen beantworten können.

Vielen Dank und viele Grüße
Diego Torres`,
        words: ["AUCH", "AUF", "BEI", "DA", "DAMIT", "DARF", "EINEN", "EUREN", "IHR", "KÖNNTE", "NUR", "SIE", "SEIN", "WENN", "WÜRDE"],
        correct: { 31: "AUCH", 32: "WÜRDE", 33: "AUF", 34: "DAMIT", 35: "IHR", 36: "WENN", 37: "KÖNNTE", 38: "NUR", 39: "EINEN", 40: "SIE" },
        explanations: {
            31: "📘 Pattern 16: Adverbs — 'AUCH online' = ALSO online. Simple adverb meaning 'too/as well'. 🇧🇩 'auch' = ও/এছাড়াও। শুধু offline না, online-ও (auch) ধার নেওয়া যায়।",
            32: "📘 Pattern 9: Konjunktiv II — 'WÜRDE ich gern Fragen stellen' = I WOULD like to ask. Polite request. 🇧🇩 'würde' = করতাম/চাইতাম। Formal letter-এ polite request = würde + Infinitiv।",
            33: "📘 Pattern 2: Time & Place — 'die AUF meinem Ausweis steht' = written ON my card. auf + Dativ = location. 🇧🇩 'auf' + Dativ = কোথায় আছে। কার্ডের উপর (auf) লেখা আছে।",
            34: "📘 Pattern 12: Verb + Preposition — 'mich DAMIT anmelden' = register WITH THAT. da+mit = damit (pronominal adverb). 🇧🇩 'damit' = সেটা দিয়ে। Customer number দিয়ে (damit) কি login করতে পারি?",
            35: "📘 Pattern 15: Register — 'IHR Online-Angebot' = YOUR online service. Formal → capital 'Ihr'. 🇧🇩 Formal letter → 'Ihr' (capital) = আপনাদের। আপনাদের online service ব্যবহার করতে।",
            36: "📘 Pattern 4: Connectors — 'WENN man keinen Reader besitzt' = IF one doesn't have a reader. Conditional. Verb at end. 🇧🇩 'wenn' = যদি/যখন। যদি কারো E-Book-Reader না থাকে...",
            37: "📘 Pattern 9: Konjunktiv II — 'KÖNNTE ich lesen?' = COULD I read? Polite question in formal email. 🇧🇩 'könnte' = পারতাম কি (polite)। Formal email-এ polite question = könnte।",
            38: "📘 Pattern 16: Adverbs — 'geht das NUR, wenn...' = does it ONLY work when...? Restrictive particle. 🇧🇩 'nur' = শুধু/শুধুমাত্র। শুধু (nur) তখনই কাজ করবে যদি app download করি?",
            39: "📘 Pattern 1: Articles + Case — 'hat EINEN Schülerausweis'. Maskulin + Akkusativ = 'einen'. 🇧🇩 'Ausweis' maskulin। 'haben' + Akkusativ → maskulin Akk = 'einen'।",
            40: "📘 Pattern 5: Pronouns — 'Darf SIE nutzen?' = May SHE use it? 'sie' = die Tochter (3rd person fem). 🇧🇩 'sie' = সে (মেয়ে)। আমার মেয়ে (sie) কি এটা ব্যবহার করতে পারবে?"
        }
    },
    {
        title: "Modeltest 3 – Ralph an Lennart (Musikvideo)",
        text: `Hi Lennart,

schau mal, die Anzeige habe ich gerade __31__ Internet gelesen. In einem Musikvideo mitspielen und mitzutanzen – das war __32__ immer mein Traum! Und du __33__ die Band „Wo-bit-äh?!" doch auch super.

Ich würde wirklich __34__ wieder nach Berlin fahren. Es ist schon über drei Jahre her, dass ich dich __35__ besucht habe, viel zu lange! Wohnst du noch in dieser großen Wohnung? Dann kann ich ja vielleicht __36__ dir übernachten.

Ich schreibe gleich an „Wo-bit-äh?!" und frage, __37__ genau sie das Video drehen wollen. Hoffentlich haben wir an dem Tag beide Zeit. Soll ich auch fragen, ob man Geld dafür bekommt? Falls nicht, __38__ mir das auch egal. Allein der Video-Dreh macht bestimmt Spaß.

Lass __39__ das zusammen machen, ja?

Ich melde mich, __40__ ich mehr weiß.

Viele Grüße
Ralph`,
        words: ["BEI", "DA", "EUCH", "FINDEST", "GERN", "IM", "LIEBER", "MAGST", "MIT", "SCHON", "SOBALD", "UNS", "WANN", "WÄRE", "WÜRDE"],
        correct: { 31: "IM", 32: "SCHON", 33: "FINDEST", 34: "GERN", 35: "DA", 36: "BEI", 37: "WANN", 38: "WÄRE", 39: "UNS", 40: "SOBALD" },
        explanations: {
            31: "📘 Pattern 2: Time & Place — 'IM Internet' = on the internet. Fixed phrase (always 'im Internet'). 🇧🇩 'im Internet' = ইন্টারনেটে। এটা fixed phrase — সবসময় 'im'।",
            32: "📘 Pattern 16: Adverbs — 'das war SCHON immer mein Traum' = that was ALWAYS my dream. 'schon immer' = always. 🇧🇩 'schon immer' = সবসময়/চিরকাল। এটা সবসময় আমার স্বপ্ন ছিল।",
            33: "📘 Pattern 3: Verb Forms — 'du FINDEST die Band super' = you THINK the band is great. finden = to consider. 🇧🇩 'finden' = মনে করা। তুমিও band-টাকে দারুণ মনে করো (findest)।",
            34: "📘 Pattern 16: Adverbs — 'würde GERN wieder fahren' = would GLADLY go again. Simple adverb of preference. 🇧🇩 'gern' = আনন্দের সাথে/ইচ্ছায়। আমি সত্যিই আবার যেতে চাই।",
            35: "📘 Pattern 16: Adverbs — 'dass ich dich DA besucht habe' = that I visited you THERE. 'da' = there (Berlin). 🇧🇩 'da' = সেখানে। ৩ বছর হয়ে গেছে যে তোমাকে সেখানে (da) দেখতে গিয়েছিলাম।",
            36: "📘 Pattern 2: Time & Place — 'BEI dir übernachten' = stay overnight AT YOUR place. bei + Dativ = at someone's. 🇧🇩 'bei dir' = তোমার কাছে/তোমার বাড়িতে। 'bei' + Dativ = কারো বাসায়।",
            37: "📘 Pattern 4: Connectors — 'WANN genau sie drehen wollen' = WHEN exactly they want to film. Indirect W-question. 🇧🇩 'wann' = কখন। জিজ্ঞেস করছি কখন (wann) তারা ভিডিও করতে চায়।",
            38: "📘 Pattern 9: Konjunktiv II — 'WÄRE mir das egal' = it WOULD BE fine with me. Hypothetical: if no money → would be okay. 🇧🇩 'wäre' = হতো। টাকা না দিলেও আমার কাছে সেটা ঠিকই হতো (wäre)।",
            39: "📘 Pattern 5: Pronouns — 'Lass UNS das machen' = let US do it. 'lass uns' = let's. 🇧🇩 'lass uns' = চলো আমরা করি। 'uns' = আমাদের (Akkusativ of wir)।",
            40: "📘 Pattern 4: Connectors — 'SOBALD ich mehr weiß' = AS SOON AS I know more. Temporal connector, verb at end. 🇧🇩 'sobald' = যত তাড়াতাড়ি/যেই মুহূর্তে। আমি জানলেই তোমাকে জানাবো।"
        }
    },
    {
        title: "Modeltest 4 – Mario Staut an Sozialkaufhaus Unna (Spenden)",
        text: `Sehr geehrte Damen und Herren,

auf dem Online-Portal der Regionalzeitung vom 13. März habe ich Ihre Anzeige für das Sozialkaufhaus gelesen. __31__ steht, dass man vorab Kontakt aufnehmen soll. Wir haben noch einige Fragen, __32__ schreibe ich diese E-Mail.

Meine Eltern haben ihr Haus verkauft. Jetzt möchten __33__ gern einen großen Teil ihrer Möbel und auch Kleidung, Bücher, __34__ Geschirr verschenken. Es würde uns sehr freuen, __35__ Sie Bedarf hätten und wir mit diesen Dingen Gutes tun könnten. Alles ist wirklich noch in einem sehr guten Zustand.

Bitte schreiben Sie mir, __36__ Spenden Sie im Moment brauchen. Ich __37__ auch gern wissen, wann man diese zu Ihnen bringen kann. Können Sie große Sachen __38__ abholen? Oder wollen Sie wegen der Möbel vorher einen Besichtigungstermin im Haus vereinbaren?

Für eine schnelle Antwort auf meine Fragen wäre ich Ihnen sehr dankbar. __39__ wir müssen das Haus bis Ende des nächsten Monats leerräumen. Es wäre daher __40__ toll, wenn das klappt.

Freundliche Grüße
Mario Staut`,
        words: ["AUCH", "DARAN", "DENN", "DESHALB", "DORT", "GANZ", "IHNEN", "MÖCHTE", "OB", "SIE", "SOWIE", "WÄRE", "WELCHE", "WENN", "VIEL"],
        correct: { 31: "DORT", 32: "DESHALB", 33: "SIE", 34: "SOWIE", 35: "WENN", 36: "WELCHE", 37: "MÖCHTE", 38: "AUCH", 39: "DENN", 40: "GANZ" },
        explanations: {
            31: "📘 Pattern 16: Adverbs — 'DORT steht, dass...' = it says THERE (in the ad). Refers back to the Anzeige. 🇧🇩 'dort' = সেখানে। বিজ্ঞাপনে (dort) লেখা আছে যে আগে যোগাযোগ করতে হবে।",
            32: "📘 Pattern 14: Logical Connectors — 'DESHALB schreibe ich' = THEREFORE I'm writing. Consequence: questions → therefore email. 🇧🇩 'deshalb' = তাই/সেজন্য। প্রশ্ন আছে, তাই (deshalb) এই email লিখছি।",
            33: "📘 Pattern 5: Pronouns — 'möchten SIE verschenken' = THEY want to give away. 'sie' = die Eltern (3rd person plural). 🇧🇩 'sie' = তারা (বাবা-মা)। তারা (sie) তাদের জিনিস দিয়ে দিতে চান।",
            34: "📘 Pattern 14: Logical Connectors — 'Bücher, SOWIE Geschirr' = books, AS WELL AS dishes. Addition in a list. 🇧🇩 'sowie' = পাশাপাশি/এবং আরো। কাপড়, বই, সেইসাথে (sowie) থালাবাসনও।",
            35: "📘 Pattern 4: Connectors — 'WENN Sie Bedarf hätten' = IF you had need. Conditional + Konjunktiv II. Verb at end. 🇧🇩 'wenn' = যদি। যদি (wenn) আপনাদের দরকার থাকে... (Verb 'hätten' শেষে)।",
            36: "📘 Pattern 4: Connectors — 'WELCHE Spenden Sie brauchen' = WHICH donations you need. Indirect W-question. 🇧🇩 'welche' = কোন/কোনগুলো। কোন (welche) donation আপনাদের দরকার জানান।",
            37: "📘 Pattern 3: Verb Forms — 'Ich MÖCHTE wissen' = I WOULD LIKE to know. Modal verb for polite wishes. 🇧🇩 'möchte' = চাইতাম/জানতে চাই। আমি আরো জানতে চাই (möchte)।",
            38: "📘 Pattern 16: Adverbs — 'Sachen AUCH abholen?' = ALSO pick up things? Simple adverb = also/too. 🇧🇩 'auch' = ও/এছাড়াও। আপনারা কি জিনিসগুলো নিতেও (auch) আসতে পারবেন?",
            39: "📘 Pattern 4: Connectors — 'DENN wir müssen leerräumen' = BECAUSE we must clear out. 'denn' + Hauptsatz (verb position 2). 🇧🇩 'denn' = কারণ (+ Hauptsatz)। কারণ (denn) আমাদের বাড়ি খালি করতে হবে। Verb normal position-এ।",
            40: "📘 Pattern 16: Adverbs — 'Es wäre GANZ toll' = it would be REALLY great. Intensifier adverb. 🇧🇩 'ganz' = সত্যিই/একদম। সেটা একদম (ganz) দারুণ হবে।"
        }
    }
];
