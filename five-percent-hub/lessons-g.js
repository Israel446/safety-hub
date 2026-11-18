/* Weeks 11 and 12: toxicology (Yates Ch. 7), human error and violations, debriefs and explaining chemical hazards. */
window.LESSONS.push(
{
  id: "w11-l1", week: 11, n: 1, track: "safety", area: "Toxicology", minutes: 25,
  title: "The dose makes the poison",
  book: "Yates, Ch. 7: Toxicology",
  bigIdea: "Almost anything is harmless in a small enough amount and harmful in a large enough one. What matters is how much gets in, by which route, for how long.",
  why: "Workers often sort chemicals into 'dangerous' and 'safe'. Toxicology replaces that with better questions: how much, how often, and how does it get into the body? Those questions lead straight to controls.",
  science: [
    "The idea is credited to the sixteenth-century physician Paracelsus: 'the dose makes the poison'. Water and table salt can kill in large enough amounts; highly toxic substances can be handled safely when exposure is kept low enough.",
    "Chemicals enter the body by four main <b>routes</b>: <b>inhalation</b> (breathing in, the main route at work), <b>skin absorption</b>, <b>ingestion</b> (often from contaminated hands, food or cigarettes) and <b>injection</b> (through cuts or high-pressure equipment).",
    "A <b>dose-response</b> relationship describes how the effect grows as the dose grows. For many effects there is a threshold below which no effect is seen. For others, such as many cancer-causing substances, no safe threshold may exist, and the aim is to keep exposure as low as reasonably practicable."
  ],
  evidence: "Established",
  evidenceNote: "These are foundations of toxicology. Whether a threshold exists for a particular substance and effect is often debated, which is why limits change.",
  work: [
    "Diesel fuel on skin, solvent vapour in a workshop, dust on hands at the crib room table: each is a different route, and each needs a different control. Respirators do nothing for skin absorption or for eating with dirty hands.",
    "High-pressure hydraulic leaks can inject oil through intact skin. That injury looks small and is a surgical emergency."
  ],
  techniques: [
    { name: "Ask the four routes", how: "For any chemical: can it be breathed, absorbed through skin, swallowed or injected here? Control each route that applies." },
    { name: "Ask how much and how long", how: "Replace 'is it dangerous?' with 'how much gets in, and for how long?'" },
    { name: "Wash before eating", how: "Handwashing facilities before crib rooms close the ingestion route cheaply." }
  ],
  assignment: { level: "Investigate", task: "Pick three chemicals used on your site. For each, write which of the four routes are realistic in the way it is actually used, and which control covers each route.", stretch: "Find one route that has no control at all and propose one." },
  discuss: [
    "If a chemical is 'safe', does that mean any amount is fine?",
    "Would you agree that a respirator cannot protect against what goes in through the skin or mouth?",
    "Where do our people eat or smoke with unwashed hands after handling something?"
  ],
  reflect: "Which chemical do you handle so often you have stopped thinking about how it gets in?",
  quiz: [
    { q: "'The dose makes the poison' is credited to:", options: ["Heinrich", "Paracelsus", "Reason", "Kahneman"], answer: 1, why: "A sixteenth-century physician." },
    { q: "The main route of chemical exposure at work is usually:", options: ["Injection", "Ingestion", "Inhalation", "Eyes"], answer: 2, why: "Breathing in dust, fume, gas and vapour." },
    { q: "A high-pressure hydraulic injection injury should be treated as:", options: ["A minor cut", "A surgical emergency", "A skin rash", "Nothing serious"], answer: 1, why: "Damage spreads under the skin." }
  ],
  sources: [
    "Klaassen, C. D. (Ed.). Casarett and Doull's Toxicology: The Basic Science of Poisons. McGraw-Hill.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7. CRC Press."
  ]
},
{
  id: "w11-l2", week: 11, n: 2, track: "safety", area: "Toxicology", minutes: 25,
  title: "Acute and chronic, local and systemic",
  book: "Yates, Ch. 7: Toxicology",
  bigIdea: "Some chemicals harm you in minutes, others over years. Some harm the spot they touch, others travel through the blood to an organ far away. Each pattern needs different warning signs and controls.",
  why: "Acute effects get noticed and reported. Chronic effects are silent until it is too late. A safety professional who thinks only about acute harm will miss most occupational disease.",
  science: [
    "An <b>acute</b> effect follows a single or short exposure: dizziness from solvent vapour, burns from acid, collapse in hydrogen sulphide. A <b>chronic</b> effect follows repeated exposure over months or years: silicosis, manganism, noise-induced hearing loss, occupational cancer.",
    "A <b>local</b> effect happens where the chemical touches: skin burns, eye irritation, airway damage. A <b>systemic</b> effect happens after absorption into the blood, at a <b>target organ</b>: the nervous system for manganese and solvents, the kidneys for some metals, the liver for others.",
    "Toxicologists describe the highest dose with no observed adverse effect (the <b>NOAEL</b>) and the lowest dose with one (the <b>LOAEL</b>). Exposure limits are usually set below these, with safety margins."
  ],
  evidence: "Established",
  evidenceNote: "These are standard toxicology categories. One substance can have several: a solvent can cause acute dizziness, local skin damage and chronic nerve effects.",
  work: [
    "A worker cleaning parts with solvent may feel a headache that day (acute, systemic), develop cracked skin over weeks (chronic, local) and, after years, nerve effects (chronic, systemic). Only the first is likely to be reported.",
    "That is why health surveillance and exposure monitoring exist: to catch chronic harm before symptoms."
  ],
  techniques: [
    { name: "Sort by timing", how: "For each chemical, list one acute and one chronic effect. If you cannot name the chronic effect, find it." },
    { name: "Name the target organ", how: "Section 11 of the safety data sheet lists target organs. Know them for your top five chemicals." },
    { name: "Ask about the slow signs", how: "In conversations, ask about skin changes, persistent cough or memory complaints, not just about today." }
  ],
  assignment: { level: "Think", task: "For three chemicals or agents on your site (include manganese dust), fill a small table: acute effect, chronic effect, local or systemic, target organ.", stretch: "Check one against its safety data sheet and note anything you had missed." },
  discuss: [
    "Which harm on our site would show up the same day, and which would take twenty years?",
    "Would you agree that what we never see reported can still be what hurts people most?",
    "Who here would notice if their nervous system was slowly being affected?"
  ],
  reflect: "How much of your attention goes to harms that are visible today?",
  quiz: [
    { q: "Silicosis is an example of a:", options: ["Acute local effect", "Chronic effect", "Acute systemic effect", "Allergic reaction only"], answer: 1, why: "It develops over years of exposure." },
    { q: "A systemic effect occurs:", options: ["Only at the skin", "After absorption, at an organ elsewhere", "Only in the eyes", "Immediately on contact"], answer: 1, why: "The chemical travels through the blood." },
    { q: "NOAEL stands for:", options: ["No observed adverse effect level", "Normal occupational air exposure limit", "Noise overload average exposure level", "Not on any exposure list"], answer: 0, why: "The highest dose without an observed adverse effect." }
  ],
  sources: [
    "Klaassen, C. D. (Ed.). Casarett and Doull's Toxicology: The Basic Science of Poisons. McGraw-Hill.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7. CRC Press."
  ]
},
{
  id: "w11-l3", week: 11, n: 3, track: "people", area: "Human error", minutes: 20,
  title: "Slips, lapses, mistakes and violations",
  book: null,
  bigIdea: "'Human error' is four different things. A slip and a lapse are the right plan done wrong. A mistake is the wrong plan done right. A violation is a choice to deviate. Each needs a different fix.",
  why: "If every error gets the same response, usually retraining or discipline, most of the responses will be wrong. Sorting the error is the first step to fixing it.",
  science: [
    "James Reason's classification in Human Error (1990) separates unsafe acts. <b>Slips</b> are actions that do not go as intended, such as pressing the wrong button. <b>Lapses</b> are memory failures, such as forgetting a step. Both happen during skilled, routine work.",
    "<b>Mistakes</b> are planning failures: the person carries out their plan correctly, but the plan was wrong, because of a misapplied rule or a gap in knowledge. Jens Rasmussen's model of <b>skill-based, rule-based and knowledge-based</b> performance explains where each tends to happen.",
    "<b>Violations</b> are deliberate departures from a rule, usually not intended to cause harm. Reason argued they are a social and motivational problem, unlike errors, which are information-processing problems."
  ],
  evidence: "Established",
  evidenceNote: "Reason's taxonomy is the standard framework in safety and healthcare. Real events often combine several types.",
  work: [
    "A fitter isolates the wrong conveyor because two isolators look identical and sit side by side: a slip. Fix: labels, colour, separation. A fitter forgets to reapply the guard: a lapse. Fix: a forcing function or checklist.",
    "A new supervisor applies a rule from his last site that does not fit this one: a mistake. Fix: knowledge and supervision. A crew skips the permit because it takes an hour: a violation. Fix: understand why, then fix the permit."
  ],
  techniques: [
    { name: "Ask what they intended", how: "If the plan was right and the action went wrong, it is a slip or lapse. If the plan itself was wrong, it is a mistake." },
    { name: "Design out slips and lapses", how: "Labels, layout, interlocks and checklists. Training does little for errors made by skilled people." },
    { name: "Ask why the rule was broken", how: "For violations, look for the time, effort or conflicting goal that made breaking it attractive." }
  ],
  assignment: { level: "Think", task: "Take three recent incidents or near misses. Classify the main unsafe act in each as slip, lapse, mistake or violation. Check whether the corrective action fits the type.", stretch: "For any mismatch, write a better-fitting action." },
  discuss: [
    "Have you ever done exactly what you meant to do and still got it wrong?",
    "Would you agree that retraining someone who already knew the job will not prevent a slip?",
    "Which of our rules are broken most often, and what do people gain by breaking them?"
  ],
  reflect: "Which type of error do you make most often yourself?",
  quiz: [
    { q: "Forgetting to reapply a guard after maintenance is a:", options: ["Slip", "Lapse", "Mistake", "Violation"], answer: 1, why: "A memory failure during a routine task." },
    { q: "Following a plan perfectly when the plan itself was wrong is a:", options: ["Slip", "Lapse", "Mistake", "Violation"], answer: 2, why: "A planning failure." },
    { q: "The best fix for slips by skilled workers is usually:", options: ["Retraining", "Discipline", "Design changes such as labels, layout and interlocks", "Longer procedures"], answer: 2, why: "They already know what to do." }
  ],
  sources: [
    "Reason, J. (1990). Human Error. Cambridge University Press.",
    "Rasmussen, J. (1983). Skills, rules, and knowledge: Signals, signs, and symbols, and other distinctions in human performance models. IEEE Transactions on Systems, Man, and Cybernetics, SMC-13(3), 257-266.",
    "Health and Safety Executive (1999). Reducing Error and Influencing Behaviour (HSG48). HSE Books."
  ]
},
{
  id: "w11-l4", week: 11, n: 4, track: "safety", area: "Toxicology", minutes: 25,
  title: "LD50, LC50 and the limits of animal data",
  book: "Yates, Ch. 7: Toxicology",
  bigIdea: "An LD50 tells you how much of a substance kills half of a group of test animals in a short test. It is useful for comparing acute toxicity. It tells you almost nothing about long-term harm.",
  why: "Safety data sheets and labels are built on these numbers. You should be able to read them, compare them, and explain why a 'low toxicity' label does not mean safe to breathe every day.",
  science: [
    "The <b>LD50</b> (lethal dose 50) is the single dose, usually in milligrams per kilogram of body weight, expected to kill 50 percent of test animals. The <b>LC50</b> is the equivalent concentration in air for inhalation. A <b>lower</b> number means <b>more</b> acutely toxic.",
    "The Globally Harmonized System (GHS) uses these values to place substances in <b>acute toxicity categories</b>. For oral exposure: Category 1 up to 5 mg/kg, Category 2 up to 50, Category 3 up to 300, Category 4 up to 2,000, and Category 5 roughly 2,000 to 5,000. Category 1 is the most toxic.",
    "Limits of the data: animals are not people, short tests miss chronic effects such as cancer or nerve damage, and the test measures death, not lesser harm. Many newer test methods use fewer animals and other signs of toxicity."
  ],
  evidence: "Established",
  evidenceNote: "The definitions and GHS cut-offs are published by the UN. Extrapolating from animals to humans always carries uncertainty.",
  work: [
    "Two cleaning products: one has an oral LD50 of 40 mg/kg (Category 2), the other 3,000 mg/kg (Category 5). The first is far more acutely toxic. But neither number tells you whether daily breathing of the vapour damages the liver over years.",
    "For long-term hazards, look at sections 8 (exposure controls) and 11 (toxicological information) of the safety data sheet, and the exposure limit."
  ],
  techniques: [
    { name: "Lower means worse", how: "When comparing LD50s, the smaller the number, the more toxic. Say it out loud until it is automatic." },
    { name: "Check the category", how: "Use the GHS category on the label for a quick comparison between products." },
    { name: "Look beyond acute", how: "Always check the safety data sheet for chronic effects and target organs, whatever the LD50." }
  ],
  assignment: { level: "Practise", task: "Find the safety data sheets for three chemicals on site. Record each one's oral LD50 (if given), its GHS acute toxicity category, and any chronic effects listed.", stretch: "Find one where a low acute toxicity hides a serious chronic hazard." },
  discuss: [
    "If a product has a high LD50, does that mean it is safe to use every day?",
    "Would you agree that 'it won't kill you' and 'it won't harm you' are different claims?",
    "Which product on site do people treat as harmless because it is not acutely toxic?"
  ],
  reflect: "When did you last read section 11 of a safety data sheet?",
  quiz: [
    { q: "A lower LD50 means a substance is:", options: ["Less toxic", "More acutely toxic", "Not toxic", "Only toxic by skin"], answer: 1, why: "Less is needed to kill half the test animals." },
    { q: "In GHS, an oral LD50 of 40 mg/kg falls in:", options: ["Category 1", "Category 2", "Category 4", "Category 5"], answer: 1, why: "Category 2 covers above 5 up to 50 mg/kg." },
    { q: "LD50 tests mainly tell you about:", options: ["Long-term cancer risk", "Acute lethality", "Skin sensitisation", "Noise effects"], answer: 1, why: "Chronic effects need other evidence." }
  ],
  sources: [
    "United Nations (2023). Globally Harmonized System of Classification and Labelling of Chemicals (GHS), Rev. 10, Chapter 3.1: Acute toxicity.",
    "OECD (2001). Test Guideline 420: Acute Oral Toxicity, Fixed Dose Procedure.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7. CRC Press."
  ]
},
{
  id: "w11-l5", week: 11, n: 5, track: "craft", area: "Teaching and facilitation", minutes: 20,
  title: "The ten-minute debrief",
  book: null,
  bigIdea: "A short, structured conversation after a job, about what was planned, what happened, why, and what to do next time, is one of the cheapest ways to make a team better.",
  why: "Most jobs end with people walking away. The lessons from that job, good and bad, walk away with them. A debrief catches them while they are fresh.",
  science: [
    "Scott Tannenbaum and Christopher Cerasoli pooled 46 samples covering 2,136 participants in 2013. Debriefs improved performance by about <b>25 percent</b> on average compared with control groups (d = 0.67). Effects were similar for individuals and teams, in real and simulated settings.",
    "The US Army developed the <b>after-action review</b> around four questions: What was supposed to happen? What actually happened? Why was there a difference? What will we do next time?",
    "The meta-analysis found debriefs worked best when they were structured, focused on specific events and included goal setting for the next time."
  ],
  evidence: "Established",
  evidenceNote: "The meta-analysis is peer reviewed and its main result is widely cited. Many included studies were in medical and military training; workplace effects may differ in size.",
  work: [
    "After a major shutdown task or a tandem lift: ten minutes at the job site, everyone who was involved, four questions. The supervisor speaks last.",
    "Debrief good jobs too. Knowing why something went right is as useful as knowing why it went wrong, and it makes the habit less threatening."
  ],
  techniques: [
    { name: "Four questions", how: "Planned, happened, why the difference, next time. Nothing else is needed." },
    { name: "Leader speaks last", how: "The most senior person gives their view after everyone else, so they do not set the answer." },
    { name: "Write one action", how: "End with one specific change for next time, and who owns it." }
  ],
  assignment: { level: "Practise", task: "Run a ten-minute debrief after one non-routine job this week using the four questions. Record the one action that came out of it.", stretch: "Run one after a job that went well and note what the crew said made it work." },
  discuss: [
    "After a big job here, what happens to what we learned?",
    "Would you agree that ten minutes while it is fresh is worth more than a report a week later?",
    "Which regular job would benefit most from a debrief every time?"
  ],
  reflect: "When did you last ask a crew what they would do differently next time?",
  quiz: [
    { q: "Tannenbaum and Cerasoli found debriefs improved performance by about:", options: ["5%", "25%", "60%", "100%"], answer: 1, why: "d = 0.67 across 46 samples." },
    { q: "Which is one of the four after-action review questions?", options: ["Who is to blame?", "What was supposed to happen?", "How much did it cost?", "Who signed the permit?"], answer: 1, why: "Then: what happened, why the difference, what next." },
    { q: "In a debrief, the most senior person should usually speak:", options: ["First", "Last", "Not at all", "Only to summarise blame"], answer: 1, why: "So they do not anchor everyone else." }
  ],
  sources: [
    "Tannenbaum, S. I., & Cerasoli, C. P. (2013). Do team and individual debriefs enhance performance? A meta-analysis. Human Factors, 55(1), 231-245.",
    "Morrison, J. E., & Meliza, L. L. (1999). Foundations of the After Action Review Process. U.S. Army Research Institute."
  ]
},
{
  id: "w11-l6", week: 11, n: 6, track: "craft", area: "Critical thinking", minutes: 20,
  title: "The decision journal",
  book: null,
  bigIdea: "Write down important decisions before you know how they turn out: what you decided, why, and what you expected. Later, hindsight cannot rewrite what you were thinking.",
  why: "Week 3 showed that hindsight makes outcomes look obvious and that outcome bias makes us judge decisions by their results. A decision journal is a cheap defence against both, for your own judgement.",
  science: [
    "Baruch Fischhoff's hindsight research showed that once people know an outcome, they misremember what they predicted beforehand. A written record made at the time is the simplest correction.",
    "Separating decision quality from outcome quality is a long-standing idea in decision analysis. A good decision can turn out badly through bad luck; a bad decision can turn out well.",
    "The specific format in this lesson is a practical habit drawn from that research, recommended by decision researchers and writers, rather than a separately tested intervention."
  ],
  evidence: "Practice-based",
  evidenceNote: "The biases it addresses are well established. Evidence that keeping a decision journal improves decisions is mostly anecdotal.",
  work: [
    "Decision: to allow a crew to continue a lift in rising wind with a revised exclusion zone. Write it down: what you knew, the options, what you expected, how confident you were. Next month, read it again before judging yourself on how it went.",
    "Over a year, the journal shows your patterns: where you tend to be overconfident, which kinds of call you get right."
  ],
  techniques: [
    { name: "Five lines", how: "Date, decision, what I knew, what I expect to happen, how confident (in percent)." },
    { name: "Only the big calls", how: "Write for decisions that matter and that you could defend or regret. Not every choice." },
    { name: "Review monthly", how: "Once a month, read last month's entries and score the reasoning, not the outcome." }
  ],
  assignment: { level: "Practise", task: "Keep a decision journal for two weeks: at least three significant work decisions, five lines each. Do not reread until the two weeks are up.", stretch: "When you reread, note one decision whose outcome was good but whose reasoning was weak, or the reverse." },
  discuss: [
    "Have you ever been praised for a decision that was really just lucky?",
    "Would you agree that we judge ourselves more fairly with a record made at the time?",
    "Which decisions in our job would be worth writing down?"
  ],
  reflect: "What is a decision you remember differently from how you made it?",
  quiz: [
    { q: "A decision journal mainly protects against:", options: ["Fatigue", "Hindsight and outcome bias", "Noise", "Social proof"], answer: 1, why: "It records what you knew and expected at the time." },
    { q: "A good decision with a bad outcome is best explained by:", options: ["Bad reasoning", "Bad luck or factors outside your control", "Laziness", "Always poor judgement"], answer: 1, why: "Decision quality and outcome quality are different." },
    { q: "When reviewing entries, you should score:", options: ["Only the outcome", "The reasoning", "Your handwriting", "Who agreed with you"], answer: 1, why: "That is the part you control." }
  ],
  sources: [
    "Fischhoff, B. (1975). Hindsight is not equal to foresight. Journal of Experimental Psychology: Human Perception and Performance, 1(3), 288-299.",
    "Baron, J., & Hershey, J. C. (1988). Outcome bias in decision evaluation. Journal of Personality and Social Psychology, 54(4), 569-579."
  ]
},
{
  id: "w11-l7", week: 11, n: 7, track: "people", area: "Behavioural influence", minutes: 20,
  title: "Reciprocity: give first",
  book: null,
  bigIdea: "People feel a strong pull to return what they have been given. A safety professional who helps first, without being asked, will find people far more willing to help back.",
  why: "Much of your influence depends on goodwill you have built before you need it. Reciprocity explains why fixing a crew's small problem today makes them listen to you next month.",
  science: [
    "Robert Cialdini lists <b>reciprocity</b> as one of his principles of influence: people feel obliged to repay favours, gifts and concessions, even small or unrequested ones.",
    "David Strohmetz and colleagues tested it in restaurants in 2002. A single sweet with the bill raised tips by about <b>3 percent</b>. Two sweets raised them by about <b>14 percent</b>. When the server gave one sweet, walked away, then came back with a second 'for you nice people', tips rose by about <b>23 percent</b>.",
    "The extra came from the gift feeling personal and unexpected. Cialdini notes the gifts that work best are meaningful, unexpected and personalised."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Reciprocity is a robust social norm. The restaurant figures come from small field studies and should be read as illustrations of direction, not fixed sizes.",
  work: [
    "Fix the broken crib room fan the crew has complained about for months. Walk the job with them and carry something. Get the missing gloves sized properly. None of it is a trade, and that is the point.",
    "Use it honestly. A favour done only to collect later is a trick, and crews notice."
  ],
  techniques: [
    { name: "Solve a small problem first", how: "Before asking a crew for anything, find one small thing that bothers them and fix it." },
    { name: "Make it personal", how: "'I got your size because you said the last ones were too big' beats a box of gloves left in the store." },
    { name: "Do not keep score aloud", how: "Never remind people what you did for them. The obligation works best unspoken." }
  ],
  assignment: { level: "Practise", task: "Ask one crew this week: 'What is one small thing that makes your job harder that nobody has fixed?' Fix it, or get it fixed, within a week.", stretch: "A month later, note how that crew responds to your next safety request." },
  discuss: [
    "Who at work have you gone out of your way to help, because they once helped you?",
    "Would you agree that people listen more to someone who has already done something for them?",
    "What small problem do our crews keep raising that we could simply fix?"
  ],
  reflect: "What have you given your crews lately that they did not have to ask for?",
  quiz: [
    { q: "In Strohmetz et al. (2002), the largest increase in tips came from:", options: ["One sweet with the bill", "Two sweets with the bill", "One sweet, then a personal second one", "No sweets"], answer: 2, why: "About 23%, because it felt personal and unexpected." },
    { q: "Reciprocity works best when the gift is:", options: ["Large and expected", "Meaningful, unexpected and personal", "Demanded back later", "Given to everyone the same"], answer: 1, why: "Cialdini's three features." },
    { q: "Using reciprocity honestly means:", options: ["Keeping a list of favours owed", "Helping first without demanding a return", "Only helping senior staff", "Bargaining openly"], answer: 1, why: "A trick is noticed and backfires." }
  ],
  sources: [
    "Strohmetz, D. B., Rind, B., Fisher, R., & Lynn, M. (2002). Sweetening the till: The use of candy to increase restaurant tipping. Journal of Applied Social Psychology, 32(2), 300-309.",
    "Cialdini, R. B. (1984; rev. 2021). Influence: The Psychology of Persuasion. Harper Business."
  ]
},
{
  id: "w12-l1", week: 12, n: 1, track: "safety", area: "Toxicology", minutes: 25,
  title: "Carcinogens, sensitisers and diesel exhaust",
  book: "Yates, Ch. 7: Toxicology",
  bigIdea: "Some substances cause cancer years after exposure. Others turn the body against itself, so that a tiny later exposure triggers asthma or dermatitis. Neither gives an early warning.",
  why: "Diesel exhaust and silica, both present on most mines, are classed as known human carcinogens. Sensitisers can end a person's ability to do their job. These hazards need prevention, because there is no 'feel it and react'.",
  science: [
    "The International Agency for Research on Cancer (IARC) classifies agents as <b>Group 1</b> (carcinogenic to humans), <b>Group 2A</b> (probably), <b>Group 2B</b> (possibly) and <b>Group 3</b> (not classifiable). The groups describe the strength of evidence that something can cause cancer, not how strong the risk is.",
    "In June 2012 IARC moved <b>diesel engine exhaust</b> from Group 2A to <b>Group 1</b>, based on sufficient evidence of lung cancer, influenced by a large US study of exposed miners. Respirable crystalline silica is also Group 1.",
    "A <b>sensitiser</b> causes an allergic response after repeated exposure. Once someone is sensitised, very small amounts can trigger asthma or skin reactions, often for life. Isocyanates in some paints and foams, certain epoxy resins and some metals are common examples."
  ],
  evidence: "Established",
  evidenceNote: "IARC classifications are authoritative statements of evidence. A Group 1 label does not say how much risk a given exposure carries; that depends on dose.",
  work: [
    "Diesel exhaust: haul trucks idling near people, generators in enclosed areas, workshops with engines running. Controls include engine maintenance, low-emission engines, exhaust filters, ventilation, and switching engines off.",
    "For sensitisers, the first exposures often feel harmless. That is when protection matters most, before sensitisation happens."
  ],
  techniques: [
    { name: "List the Group 1s", how: "Know which known carcinogens exist on your site: likely diesel exhaust and silica at least." },
    { name: "Switch it off", how: "Idling engines near people are an easy, cheap target for diesel exposure." },
    { name: "Protect from the first day", how: "With sensitisers, skin and respiratory protection must start before any symptoms." }
  ],
  assignment: { level: "Investigate", task: "List every place on site where people spend time near running diesel engines. Note whether engines idle unnecessarily and whether ventilation exists.", stretch: "Check the safety data sheets of paints, resins and adhesives on site for 'may cause sensitisation' statements." },
  discuss: [
    "Did you know diesel exhaust is classed in the same evidence group as asbestos?",
    "Would you agree that a hazard with no early warning has to be controlled before anyone complains?",
    "Where do engines idle near people on our site for no good reason?"
  ],
  reflect: "How many hours a week do you yourself spend near idling diesel engines?",
  quiz: [
    { q: "IARC Group 1 means:", options: ["The strongest cancer risk", "Sufficient evidence the agent causes cancer in humans", "Possibly carcinogenic", "Not classifiable"], answer: 1, why: "It describes evidence strength, not risk size." },
    { q: "Diesel engine exhaust was classified as Group 1 in:", options: ["1988", "2002", "2012", "2020"], answer: 2, why: "Moved from Group 2A after miner studies." },
    { q: "Once a person is sensitised, a later exposure:", options: ["Is harmless", "Can trigger a reaction at very small amounts", "Cures the sensitivity", "Only affects the eyes"], answer: 1, why: "Sensitisation is often lifelong." }
  ],
  sources: [
    "IARC (2012). Press release No. 213: IARC: Diesel engine exhaust carcinogenic. International Agency for Research on Cancer.",
    "IARC (2014). Diesel and Gasoline Engine Exhausts and Some Nitroarenes. IARC Monographs, Vol. 105.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7. CRC Press."
  ]
},
{
  id: "w12-l2", week: 12, n: 2, track: "safety", area: "Occupational health", minutes: 25,
  title: "Biological monitoring: what the body tells us",
  book: "Yates, Ch. 7: Toxicology",
  bigIdea: "Air sampling measures what was in the air. Biological monitoring measures what actually got into the person, through every route, including skin and swallowing.",
  why: "Two workers in the same air can absorb very different amounts, depending on hygiene, PPE fit, workload and habits. Where a good biological test exists, it is the most direct check that controls are working for that person.",
  science: [
    "<b>Biological monitoring</b> measures a chemical or its breakdown products in blood, urine or exhaled breath. ACGIH publishes <b>Biological Exposure Indices (BEIs)</b>, reference values for some substances, alongside its air limits.",
    "Good examples exist for some metals and solvents: <b>blood lead</b> is the classic, and urine tests exist for several solvents and metals. For others, including manganese, biological tests are less reliable at telling individual exposure apart, so air monitoring remains the main tool.",
    "<b>Health surveillance</b> is related but different: it looks for early health effects, such as lung function changes, hearing shifts or skin conditions, rather than measuring the chemical itself."
  ],
  evidence: "Established",
  evidenceNote: "Biological monitoring is standard practice where validated tests exist. It raises consent, confidentiality and fairness questions that need clear rules before testing begins.",
  work: [
    "A welder whose air results look fine but whose blood lead is rising may be eating with contaminated hands or wearing a poorly fitting respirator. The air sample alone would never show it.",
    "Results are personal health information. Workers should be told what is tested, why, who sees the results and what will happen if they are high."
  ],
  techniques: [
    { name: "Know which tests exist", how: "For each major chemical on site, find out whether a validated biological test exists." },
    { name: "Use it to find routes", how: "A high biological result with low air results points to skin or ingestion routes." },
    { name: "Agree the rules first", how: "Consent, confidentiality and what happens with high results must be agreed before anyone is tested." }
  ],
  assignment: { level: "Investigate", task: "Find out what biological monitoring or health surveillance your site does, for which hazards, and how results are communicated to workers.", stretch: "Identify one hazard on site where a validated biological test exists but is not used." },
  discuss: [
    "If two people work side by side, could one absorb far more than the other? How?",
    "Would you agree that what gets into the body matters more than what was in the air?",
    "Who should see a worker's biological test results, and who should not?"
  ],
  reflect: "If your own blood were tested for what you work with, what would you expect to find?",
  quiz: [
    { q: "Biological monitoring measures:", options: ["Air concentration", "The chemical or its products in the body", "Noise", "Only symptoms"], answer: 1, why: "In blood, urine or breath." },
    { q: "The classic example of biological monitoring is:", options: ["Blood lead", "Hearing tests", "Chest X-rays", "Eye tests"], answer: 0, why: "Hearing tests and X-rays are health surveillance." },
    { q: "A high biological result with low air results suggests:", options: ["The test is wrong", "Exposure by skin or ingestion", "No exposure", "The air sample was too high"], answer: 1, why: "Biological results include all routes." }
  ],
  sources: [
    "ACGIH. TLVs and BEIs: Introduction to the Biological Exposure Indices.",
    "Health and Safety Executive (2022). Biological monitoring in the workplace (HSG167). HSE Books.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7. CRC Press."
  ]
},
{
  id: "w12-l3", week: 12, n: 3, track: "people", area: "Human error", minutes: 20,
  title: "Why good people break rules",
  book: null,
  bigIdea: "Most rule-breaking at work is not rebellion. It is people trying to get the job done when the rule makes that harder. Find what they gain from breaking it and you will find the fix.",
  why: "Discipline for violations feels decisive and often changes nothing. Understanding the types of violation lets you aim at the reason, not just the person.",
  science: [
    "James Reason and the UK Health and Safety Executive describe three common kinds. <b>Routine violations</b> become normal practice over time, often because everyone does it and nothing bad has happened. <b>Situational violations</b> happen because the rule cannot be followed as written in that situation: the wrong tool, not enough people, no time. <b>Optimising violations</b> are done for personal gain, such as finishing early, or for the thrill.",
    "Reason argued violations are shaped by beliefs and incentives: the perceived benefit of breaking the rule, the low chance of being caught, and what colleagues expect.",
    "Sidney Dekker and others describe the gap between <b>work as imagined</b> by those who write procedures and <b>work as done</b> by those who carry them out. Routine violations live in that gap."
  ],
  evidence: "Established",
  evidenceNote: "The violation types come from Reason's work and HSE guidance (HSG48), widely used across industries. Individual cases often mix types.",
  work: [
    "A permit for a five-minute job takes forty minutes to issue. Crews start before it arrives. That is a situational violation becoming routine. The fix is a faster permit route for low-risk tasks, not a warning letter.",
    "Optimising violations, such as racing to finish early, respond better to supervision, peer norms and removing the reward."
  ],
  techniques: [
    { name: "Ask 'what does it save?'", how: "For any common violation, ask what time, effort or discomfort breaking the rule saves." },
    { name: "Fix the rule first", how: "If a rule cannot be followed as written, rewrite it with the people who do the work." },
    { name: "Treat routine as a signal", how: "A rule everyone breaks is telling you the rule or the system is wrong." }
  ],
  assignment: { level: "Investigate", task: "Pick one rule you know is often broken. Ask three people who do the work, privately and without blame, why it is hard to follow. Classify the violation type.", stretch: "Propose one change to the rule or the system that removes the reason to break it." },
  discuss: [
    "Is there a rule here that everybody breaks, and everybody knows it?",
    "Would you agree that if a rule cannot be followed on a normal day, the rule is part of the problem?",
    "What would we learn if we asked, without blame, why people skip it?"
  ],
  reflect: "Which rule do you yourself bend, and what does it save you?",
  quiz: [
    { q: "A violation that has become normal practice is:", options: ["Situational", "Routine", "Optimising", "A slip"], answer: 1, why: "Everyone does it and nothing bad has happened yet." },
    { q: "Breaking a rule because the right tool is not available is:", options: ["Routine", "Situational", "Optimising", "A lapse"], answer: 1, why: "The situation makes compliance hard." },
    { q: "'Work as imagined' versus 'work as done' describes:", options: ["Two shifts", "The gap between how procedures assume work happens and how it actually happens", "Plan and budget", "Training and testing"], answer: 1, why: "Routine violations often live there." }
  ],
  sources: [
    "Reason, J. (1990). Human Error. Cambridge University Press.",
    "Health and Safety Executive (1999). Reducing Error and Influencing Behaviour (HSG48). HSE Books.",
    "Dekker, S. (2014). The Field Guide to Understanding 'Human Error' (3rd ed.). Ashgate."
  ]
},
{
  id: "w12-l4", week: 12, n: 4, track: "safety", area: "Hazard communication", minutes: 20,
  title: "Reading a safety data sheet in two minutes",
  book: "Yates, Ch. 7: Toxicology; Ch. 27: Hazardous Materials Management",
  bigIdea: "A safety data sheet has sixteen sections, always in the same order. You do not need to read all of them every time. Four sections answer most practical questions.",
  why: "People are told to 'read the SDS' and rarely do, because the document is long. Knowing where to look turns it into a two-minute tool you can actually teach.",
  science: [
    "Under the Globally Harmonized System (GHS), safety data sheets follow a fixed <b>16-section format</b>, so the same information is always in the same place regardless of supplier or country.",
    "Four sections carry most of what a user needs. <b>Section 2</b>: hazards, pictograms and signal word (Danger or Warning). <b>Section 4</b>: first aid. <b>Section 7</b>: safe handling and storage. <b>Section 8</b>: exposure limits and personal protection.",
    "Others matter for specialists: section 9 (physical properties, such as flash point and vapour density), section 10 (reactivity and what not to mix it with) and section 11 (toxicology, including chronic effects and target organs)."
  ],
  evidence: "Established",
  evidenceNote: "The 16-section format is set by the UN GHS and adopted in most national rules. The quality of the information inside varies by supplier.",
  work: [
    "Before a new chemical is used on site: section 2 tells you how dangerous, section 8 tells you which gloves and respirator, section 7 tells you how to store it, section 4 tells the first aider what to do.",
    "Check the date and the supplier. An SDS more than a few years old, or for a slightly different product, may be wrong."
  ],
  techniques: [
    { name: "Two, four, seven, eight", how: "Teach crews these four section numbers. It is the whole skill for most users." },
    { name: "Check the glove type", how: "Section 8 often names the glove material. 'Wear gloves' is not enough; the wrong material lets chemicals through." },
    { name: "Keep it where the work is", how: "An SDS locked in an office is useless at 2 a.m. Put it, or a summary card, at the point of use." }
  ],
  assignment: { level: "Practise", task: "Take one chemical used regularly on site. Using only sections 2, 4, 7 and 8 of its SDS, write a one-page summary card for the people who use it.", stretch: "Check whether the gloves actually used match the material named in section 8." },
  discuss: [
    "When did any of us last read an SDS before using a product?",
    "Would you agree that information nobody can find in two minutes might as well not exist?",
    "Which chemical here is used daily by people who have never seen its SDS?"
  ],
  reflect: "Could you find the first aid instructions for the chemicals in your area in under a minute?",
  quiz: [
    { q: "Exposure limits and PPE are found in SDS section:", options: ["2", "4", "7", "8"], answer: 3, why: "Exposure controls and personal protection." },
    { q: "A GHS safety data sheet has how many sections?", options: ["8", "10", "16", "24"], answer: 2, why: "Always in the same order." },
    { q: "First aid measures are in section:", options: ["1", "4", "9", "11"], answer: 1, why: "Section 4." }
  ],
  sources: [
    "United Nations (2023). Globally Harmonized System of Classification and Labelling of Chemicals (GHS), Rev. 10, Annex 4: Guidance on the preparation of safety data sheets.",
    "OSHA. 29 CFR 1910.1200, Hazard Communication, Appendix D: Safety Data Sheets.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 7 and Ch. 27. CRC Press."
  ]
},
{
  id: "w12-l5", week: 12, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Explaining a chemical hazard without causing panic or shrugs",
  book: null,
  bigIdea: "If you frighten people they stop listening; if you reassure them they stop caring. The way through is to be honest about the hazard, specific about the dose, and clear about what they can do.",
  why: "Words like 'cancer' and 'toxic' trigger fear. Repeated warnings trigger indifference. Getting the tone right decides whether a crew changes how it works.",
  science: [
    "Paul Slovic's research (Week 5) showed that dread and unfamiliarity make risks feel larger, while control and familiarity make them feel smaller. A new chemical with a frightening name will feel worse than daily diesel exhaust, whatever the real risk.",
    "Kim Witte's extended parallel process model (1992) proposed that fear messages work when people also believe they can do something effective. High threat with low confidence tends to produce denial or avoidance instead of protective action.",
    "Meta-analyses of fear appeals, such as Tannenbaum and colleagues in 2015, found they generally do change attitudes and behaviour, and work best when paired with clear, doable recommendations."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The pairing of threat with a doable action is well supported. Exact effects vary with audience and topic.",
  work: [
    "Too frightening: 'This stuff causes cancer.' Too soft: 'It's fine if you're careful.' Balanced: 'Breathing this vapour regularly over years raises cancer risk. Short, occasional exposure is a much smaller risk. With the extraction on and these gloves, your exposure stays very low. Here is how to check the extraction is working.'",
    "Always finish with the action, and make sure the action is actually available: the gloves are in the store, the fan works."
  ],
  techniques: [
    { name: "Hazard, dose, action", how: "Say what it can do, how much and how often matters, and exactly what protects them." },
    { name: "Give them control", how: "Show people how to check the control themselves. Control lowers dread and raises use." },
    { name: "Never promise zero", how: "Say 'very low' when it is true. 'Completely safe' is rarely true and destroys trust when found out." }
  ],
  assignment: { level: "Practise", task: "Choose one chemical hazard on site. Write a three-sentence explanation using hazard, dose and action. Try it on one worker and ask them to tell you what they will do differently.", stretch: "Test a scary version and a balanced version on two different people and compare their reactions." },
  discuss: [
    "When someone warns you about something frightening and gives you nothing to do, what do you do with that fear?",
    "Would you agree that people protect themselves when they believe they can?",
    "Which hazard here have we oversold or undersold?"
  ],
  reflect: "Do your warnings leave people more able to act, or just more worried?",
  quiz: [
    { q: "Witte's model suggests fear messages work best when:", options: ["They are as frightening as possible", "People also believe they can take effective action", "No action is mentioned", "They are repeated daily"], answer: 1, why: "High threat with low confidence leads to denial." },
    { q: "A balanced hazard message includes:", options: ["Only the worst outcome", "Hazard, dose and a specific action", "A promise of zero risk", "Legal penalties"], answer: 1, why: "It informs without freezing people." },
    { q: "Why avoid saying 'completely safe'?", options: ["It is too long", "It is rarely true and destroys trust when found out", "It is too technical", "It frightens people"], answer: 1, why: "Credibility is hard to rebuild." }
  ],
  sources: [
    "Witte, K. (1992). Putting the fear back into fear appeals: The extended parallel process model. Communication Monographs, 59(4), 329-349.",
    "Tannenbaum, M. B., et al. (2015). Appealing to fear: A meta-analysis of fear appeal effectiveness and theories. Psychological Bulletin, 141(6), 1178-1204.",
    "Slovic, P. (1987). Perception of risk. Science, 236(4799), 280-285."
  ]
},
{
  id: "w12-l6", week: 12, n: 6, track: "craft", area: "Leadership and culture", minutes: 20,
  title: "Learning from failure without blame",
  book: null,
  bigIdea: "Most failures are not anyone's fault in a moral sense, yet most get treated as if they were. When blame is the default, failures go unreported and their lessons are lost.",
  why: "Your investigations, your conversations after incidents and your reactions to bad news decide whether people bring you the next failure early or hide it.",
  science: [
    "Amy Edmondson asked executives in 2011 what share of failures in their organisations were truly blameworthy. They usually said <b>2 to 5 percent</b>. Asked how many were treated as blameworthy, they said <b>70 to 90 percent</b>.",
    "She described a <b>spectrum of reasons for failure</b>, from deliberate deviance (blameworthy) through inattention, lack of ability, process inadequacy, task challenge and uncertainty, to thoughtful experimentation (praiseworthy). Most failures sit in the middle.",
    "This links to <b>just culture</b> (Reason, Dekker): accountability for reckless choices, learning for honest mistakes, and a clear process for telling them apart."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The 2 to 5 versus 70 to 90 percent figures are executives' estimates reported by Edmondson, not measured rates. The underlying pattern is consistent with wider research on reporting.",
  work: [
    "A crew reports a dropped load. The first question is 'who was the rigger?' The next dropped load is not reported. Compare 'thank you, let's walk it through' and a review of the lift plan.",
    "Blameless does not mean consequence-free. Reckless or deliberate violations still need a response. The point is not to treat everything as if it were reckless."
  ],
  techniques: [
    { name: "Place it on the spectrum", how: "Before reacting, ask where on Edmondson's spectrum this failure sits." },
    { name: "Thank the reporter", how: "The person who reports a failure should leave the conversation glad they did." },
    { name: "Ask the system question", how: "'What made this possible?' before 'who did this?'" }
  ],
  assignment: { level: "Think", task: "Take three recent failures or incidents. Place each on the spectrum of reasons for failure. Compare where they sit with how they were actually treated.", stretch: "Draft a short one-page guide for supervisors on how to respond in the first five minutes after someone reports a failure." },
  discuss: [
    "Think of the last time you reported a mistake at work. What happened next, and would you report the next one?",
    "Would you agree that most failures here are not really anyone's fault?",
    "What would change if we treated only the truly reckless cases as blameworthy?"
  ],
  reflect: "When something goes wrong, how quickly do you look for a person to hold responsible?",
  quiz: [
    { q: "Executives estimated what share of failures are truly blameworthy?", options: ["2-5%", "20-30%", "50%", "70-90%"], answer: 0, why: "But said 70-90% were treated as blameworthy." },
    { q: "Which end of Edmondson's spectrum is praiseworthy?", options: ["Deviance", "Inattention", "Thoughtful experimentation", "Lack of ability"], answer: 2, why: "Well-designed experiments that fail produce learning." },
    { q: "A just culture means:", options: ["No consequences ever", "Accountability for reckless choices, learning for honest mistakes", "Blame for every error", "Only managers decide"], answer: 1, why: "It separates the two clearly." }
  ],
  sources: [
    "Edmondson, A. C. (2011). Strategies for learning from failure. Harvard Business Review, 89(4), 48-55.",
    "Dekker, S. (2016). Just Culture: Restoring Trust and Accountability in Your Organization (3rd ed.). CRC Press."
  ]
},
{
  id: "w12-l7", week: 12, n: 7, track: "people", area: "Behavioural influence", minutes: 20,
  title: "Liking: people say yes to people they like",
  book: null,
  bigIdea: "People are more easily persuaded by someone they like, and they like people who are similar to them, who show genuine interest in them, and who cooperate with them.",
  why: "The safety officer who is liked gets told about problems early and gets cooperation late in the shift. Being liked is not a soft extra; it is part of how influence works.",
  science: [
    "Cialdini lists <b>liking</b> as a principle of influence. People are more likely to agree with those they like, and liking grows from similarity, compliments, contact and cooperation toward shared goals.",
    "Jerry Burger and colleagues showed in 2004 that even trivial similarities raise compliance. Students who believed they <b>shared a birthday or first name</b> with a requester were more likely to agree to a favour, and the effect vanished when the shared feature was presented as common.",
    "Dale Carnegie's How to Win Friends and Influence People (1936) made the same point from practice: become genuinely interested in other people, remember names, talk in terms of the other person's interests."
  ],
  evidence: "Established",
  evidenceNote: "Similarity and liking effects are well replicated in social psychology. Carnegie's book is practical advice, not research, though much of it fits later findings.",
  work: [
    "A safety officer who knows the names of the crew's children, asks about the football and remembers last month's complaint is not being manipulative. They are building the relationship that lets a hard conversation land.",
    "Shared goals matter most. 'We both want everyone home tonight' is real similarity that a crew and a safety officer share."
  ],
  techniques: [
    { name: "Find something real in common", how: "A hometown, a team, a past job. Mention it only if it is true." },
    { name: "Use names", how: "Learn and use people's names. It is the simplest signal that you see them." },
    { name: "Name the shared goal", how: "Start difficult conversations with the goal you both hold." }
  ],
  assignment: { level: "Practise", task: "This week, learn the names of five people on a crew you work with but do not know well. Have one non-work conversation with each.", stretch: "Note whether those people raise issues with you more easily over the next month." },
  discuss: [
    "Who at work do you find it easiest to say yes to? Why them?",
    "Would you agree that people raise problems more readily with someone they trust and like?",
    "What do we and the crews genuinely have in common?"
  ],
  reflect: "How many people on your site would you say know you as a person, not just as 'safety'?",
  quiz: [
    { q: "In Burger et al. (2004), compliance rose when students believed they shared:", options: ["A job", "A birthday or first name with the requester", "A salary", "Nothing"], answer: 1, why: "Even trivial similarities increased agreement." },
    { q: "The similarity effect disappeared when the shared feature was:", options: ["Rare", "Presented as common", "Hidden", "Written down"], answer: 1, why: "A common feature does not create a bond." },
    { q: "The strongest honest basis for liking on site is often:", options: ["Flattery", "A shared goal, such as everyone going home safe", "Gifts", "Authority"], answer: 1, why: "It is real and relevant." }
  ],
  sources: [
    "Burger, J. M., Messian, N., Patel, S., del Prado, A., & Anderson, C. (2004). What a coincidence! The effects of incidental similarity on compliance. Personality and Social Psychology Bulletin, 30(1), 35-43.",
    "Cialdini, R. B. (1984; rev. 2021). Influence: The Psychology of Persuasion. Harper Business.",
    "Carnegie, D. (1936). How to Win Friends and Influence People. Simon and Schuster."
  ]
}
);
window.LESSONS.sort(function(a,b){ return a.week-b.week || a.n-b.n; });
