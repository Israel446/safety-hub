/* Weeks 9 and 10: particulates and gases (Yates Ch. 6), attention and situation awareness, explaining numbers. */
window.LESSONS.push(
{
  id: "w9-l1", week: 9, n: 1, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Particle size decides where dust ends up",
  book: "Yates, Ch. 6: Particulates and Gases",
  bigIdea: "The danger of a dust depends as much on the size of its particles as on what it is made of. The smallest ones, which you cannot see, reach the deepest part of the lung and stay there.",
  why: "People complain about the dust they can see. The dust they can't see does the lasting harm. If you understand particle size you can explain why a haul road that 'looks fine' can still be the problem.",
  science: [
    "Hygienists sort airborne particles by where they deposit. The <b>inhalable</b> fraction enters the nose and mouth; the sampling convention is set at 50 percent collection at about <b>100 micrometres</b>. The <b>thoracic</b> fraction passes the larynx into the airways, with a 50 percent cut at about <b>10 micrometres</b>. The <b>respirable</b> fraction reaches the gas-exchange region deep in the lung, with a 50 percent cut at about <b>4 micrometres</b>.",
    "For comparison, a human hair is roughly 50 to 100 micrometres across. Respirable particles are far too small to see individually; a dust cloud you can see is mostly larger particles.",
    "Different types matter too: <b>dusts</b> come from crushing and grinding solids, <b>fumes</b> are very fine particles formed when vaporised metal condenses (as in welding), <b>mists</b> are droplets, and <b>fibres</b> are long thin particles such as asbestos."
  ],
  evidence: "Established",
  evidenceNote: "These size conventions are set out in international standards (ISO 7708, adopted by ACGIH and CEN). Exposure limits often name which fraction they apply to, so read the limit carefully.",
  work: [
    "Crushing, screening and hauling manganese ore create all three fractions. A water cart that settles the visible dust on a haul road helps, but the respirable fraction near a crusher or in an enclosed workshop needs its own sampling and controls.",
    "Welding on manganese-bearing steel produces fume, which is almost entirely respirable. It is invisible in a breeze and does not settle quickly."
  ],
  techniques: [
    { name: "Ask 'which fraction?'", how: "For any dust result or limit, check whether it is inhalable, respirable or 'total'. Comparing one with the other is meaningless." },
    { name: "Use the light beam", how: "A strong torch beam shone across a work area shows fine dust that is invisible in normal light. It makes the hidden hazard visible to a crew." },
    { name: "Follow the process", how: "Crushing, grinding, cutting and welding make fine particles. Start sampling and controls there." }
  ],
  assignment: { level: "Investigate", task: "Find your site's most recent dust sampling results. For each, note whether it was inhalable or respirable, personal or area, and which limit it was compared with.", stretch: "Use a torch beam in one dusty workplace at the start of a shift and describe what the crew saw." },
  discuss: [
    "If a work area looks clear, does that mean the air is safe to breathe?",
    "The dust we can't see is the dust that reaches deepest. Did you know that before today?",
    "Which of our jobs make the finest particles?"
  ],
  reflect: "Which dusty job on your site have you judged by how it looks?",
  quiz: [
    { q: "The respirable fraction has a 50% collection cut-point of about:", options: ["100 micrometres", "25 micrometres", "10 micrometres", "4 micrometres"], answer: 3, why: "It reaches the gas-exchange region of the lung." },
    { q: "Welding fume particles are mostly:", options: ["Too large to inhale", "Respirable", "Visible individually", "Harmless"], answer: 1, why: "They form by condensation and are very fine." },
    { q: "A visible dust cloud is mostly made of:", options: ["Respirable particles", "Larger particles", "Gases", "Fibres only"], answer: 1, why: "The finest particles are invisible individually." }
  ],
  sources: [
    "ISO 7708:1995. Air quality: Particle size fraction definitions for health-related sampling.",
    "ACGIH. Appendix C: Particle Size-Selective Sampling Criteria for Airborne Particulate Matter, TLVs and BEIs.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6. CRC Press."
  ]
},
{
  id: "w9-l2", week: 9, n: 2, track: "safety", area: "Occupational health", minutes: 25,
  title: "Manganese: the hazard in our own ore",
  book: "Yates, Ch. 6: Particulates and Gases; Ch. 7: Toxicology",
  bigIdea: "Manganese is essential in tiny amounts and harmful to the nervous system when breathed in as fine dust or fume over years. The recommended exposure limit was cut tenfold in 2013 because subtle effects appeared at lower levels than once thought.",
  why: "Your site exists to produce it. Every safety professional at a manganese operation should be able to explain the health risk plainly, and know which limit their monitoring is judged against.",
  science: [
    "Long-term inhalation of manganese can cause <b>manganism</b>, a neurological condition with symptoms resembling Parkinson's disease: tremor, slowed movement, gait problems and mood changes. Before that stage, studies of exposed workers have found subtler effects on movement, coordination and reaction time.",
    "In 2013 the American Conference of Governmental Industrial Hygienists (ACGIH) lowered its recommended limit, the <b>TLV</b>, from 0.2 mg/m³ to <b>0.02 mg/m³ for the respirable fraction</b>, and added <b>0.1 mg/m³ for the inhalable fraction</b>, both as 8-hour averages. Its reason was evidence of early nervous-system changes at low chronic exposures.",
    "Legal limits vary. The US OSHA limit is a much older <b>5 mg/m³ ceiling</b>. Which limit applies on your site depends on Ghana's regulations and your company standard, but the ACGIH values show where current evidence points."
  ],
  evidence: "Established",
  evidenceNote: "Manganism is well documented in miners, smelter workers and welders. The exposure level at which the earliest effects begin is still researched, which is why limits have been lowered over time and differ between bodies.",
  work: [
    "Respirable manganese comes mainly from fine crushing, screening, transfer points, and any welding or cutting of manganese steel. Inhalable dust comes from haul roads, loading and stockpiles.",
    "Because the effects build slowly and quietly, nobody will report symptoms in the first years. Exposure monitoring and good controls are the only early warning you will get."
  ],
  techniques: [
    { name: "Know your limit", how: "Find out which manganese limit your site measures against, and whether results are respirable or inhalable. Write it on one card." },
    { name: "Map the fine sources", how: "List every task that makes fine manganese dust or fume. Those get personal sampling first." },
    { name: "Explain it in one line", how: "'Breathing fine manganese dust over years can damage the nerves that control movement. We measure it because you cannot feel it happening.'" }
  ],
  assignment: { level: "Investigate", task: "Find out what manganese exposure monitoring your site does: which jobs, which fraction, how often, and against which limit. Compare the latest results with the ACGIH respirable value of 0.02 mg/m³.", stretch: "Identify the job with the highest likely respirable exposure and list its current controls using the hierarchy." },
  discuss: [
    "If we asked ten workers what manganese dust can do to the body, how many could answer?",
    "A harm that takes years to show up has to be measured. We can't wait for it, can we?",
    "Which of our tasks makes the finest manganese dust or fume?"
  ],
  reflect: "How confident are you that you know your own site's manganese exposure numbers?",
  quiz: [
    { q: "Chronic manganese inhalation mainly affects the:", options: ["Skin", "Nervous system", "Hearing", "Liver only"], answer: 1, why: "Manganism resembles Parkinson's disease." },
    { q: "Since 2013 the ACGIH TLV for respirable manganese is:", options: ["5 mg/m³", "1 mg/m³", "0.2 mg/m³", "0.02 mg/m³"], answer: 3, why: "A tenfold cut from 0.2 mg/m³." },
    { q: "The ACGIH also set an inhalable manganese TLV of:", options: ["0.1 mg/m³", "0.02 mg/m³", "2 mg/m³", "None"], answer: 0, why: "Both are 8-hour time-weighted averages." }
  ],
  sources: [
    "ACGIH (2013). Manganese, elemental and inorganic compounds: TLV documentation.",
    "OSHA. Occupational Chemical Database: Manganese compounds and fume (as Mn).",
    "ATSDR (2012). Toxicological Profile for Manganese. U.S. Department of Health and Human Services.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6 and Ch. 7. CRC Press."
  ]
},
{
  id: "w9-l3", week: 9, n: 3, track: "people", area: "Attention", minutes: 20,
  title: "Vigilance: why watching gets harder after half an hour",
  book: null,
  bigIdea: "Watching for a rare event is hard work, even though it looks like resting. Detection drops within the first half hour on watch, and the people doing it rarely notice the drop.",
  why: "Spotters, gate guards, control room operators, conveyor watchers and inspectors all do vigilance work. If rosters assume attention lasts all shift, the rare event will arrive during the dip.",
  science: [
    "During the Second World War, Norman Mackworth studied why radar operators missed submarine echoes late in their watch. In his 1948 'clock test', people watched a pointer move in small steps and reported occasional double jumps. Detection fell by roughly <b>10 to 15 percent within the first 30 minutes</b>, then kept declining more slowly over two hours.",
    "This <b>vigilance decrement</b> has been reproduced many times. It is worse when signals are rare, faint or unpredictable, and when the task demands constant attention.",
    "Researchers once thought vigilance was boring and undemanding. Later work, notably by Joel Warm and colleagues, showed it is mentally effortful and stressful, which helps explain the decline."
  ],
  evidence: "Established",
  evidenceNote: "The decrement is one of the most robust findings in attention research. The exact timing depends on the task; it can appear within 15 minutes when demands are high.",
  work: [
    "A spotter guiding trucks at a tipping point for a whole shift will not perform at minute 200 as at minute 10. Neither will a plant operator watching a quiet control screen for a rare alarm.",
    "Short breaks, rotation between watching and doing, and making the signal more obvious all help. Telling people to 'stay alert' does not."
  ],
  techniques: [
    { name: "Rotate the watch", how: "Where a person's main job is watching for a rare event, plan rotation or short breaks around every 30 to 60 minutes." },
    { name: "Make the signal louder", how: "Brighter lights, distinct alarm tones and clear markings reduce how much the watcher has to strain to see." },
    { name: "Watch the long shifts", how: "Put the most vigilance-heavy tasks early in a shift where possible." }
  ],
  assignment: { level: "Investigate", task: "List three jobs on your site where a person's main task is watching for something rare. For each, note how long they watch without a break or change of task.", stretch: "Propose one rotation or signal change for the riskiest of the three." },
  discuss: [
    "Have you ever been on watch for something and realised you had not really been looking for the last while?",
    "'Stay alert' asks for something the brain can't give for hours on end. Has that been true for you?",
    "Which jobs here depend on someone noticing a rare event late in a shift?"
  ],
  reflect: "How long do you concentrate during an inspection before your attention drifts?",
  quiz: [
    { q: "Mackworth's clock test was designed to study:", options: ["Memory", "Vigilance during long monitoring", "Reaction to noise", "Fatigue from lifting"], answer: 1, why: "It simulated radar operators' watches." },
    { q: "Detection in the clock test declined notably within about:", options: ["5 minutes", "30 minutes", "4 hours", "8 hours"], answer: 1, why: "Roughly 10 to 15 percent in the first half hour." },
    { q: "The most effective control is usually:", options: ["Reminding people to stay alert", "Rotation, breaks and clearer signals", "Longer shifts", "Coffee only"], answer: 1, why: "Willpower does not offset the decrement." }
  ],
  sources: [
    "Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. Quarterly Journal of Experimental Psychology, 1(1), 6-21.",
    "Warm, J. S., Parasuraman, R., & Matthews, G. (2008). Vigilance requires hard mental work and is stressful. Human Factors, 50(3), 433-441."
  ]
},
{
  id: "w9-l4", week: 9, n: 4, track: "safety", area: "Occupational health", minutes: 25,
  title: "Respirable crystalline silica",
  book: "Yates, Ch. 6: Particulates and Gases",
  bigIdea: "Quartz is in most rock. Crush, cut or drill it and you release particles fine enough to scar the lungs for life. The limit is now measured in millionths of a gram per cubic metre.",
  why: "Silica is present at most mines, quarries and construction sites, including where manganese ore sits in quartz-bearing rock. Silicosis is incurable, and it is prevented almost entirely by dust control.",
  science: [
    "Breathing <b>respirable crystalline silica</b> over years causes <b>silicosis</b>, a progressive scarring of the lungs that cannot be reversed. It is also linked to lung cancer, tuberculosis, chronic obstructive lung disease and kidney disease.",
    "In 2016 US OSHA lowered its permissible exposure limit to <b>50 micrograms per cubic metre</b> (µg/m³) as an 8-hour average, with an <b>action level of 25 µg/m³</b> that triggers monitoring and medical surveillance. In 2024 the US mining regulator, MSHA, adopted the same 50 µg/m³ limit for all miners. ACGIH recommends 25 µg/m³.",
    "Fifty micrograms is 0.05 milligrams. The amount that matters is far too small to see. So you design the controls around the process, whatever the air looks like."
  ],
  evidence: "Established",
  evidenceNote: "The health effects of silica are among the best documented in occupational medicine. Limits differ between countries; confirm which applies on your site.",
  work: [
    "Drilling blast holes, crushing, screening and cutting rock all release silica. Water at the point of generation is the classic control: wet drilling, water sprays at transfer points, dust suppression on haul roads.",
    "Dry sweeping and compressed-air cleaning throw settled fine dust back into the air. Wet methods and vacuums with suitable filters do not."
  ],
  techniques: [
    { name: "Wet it where it's made", how: "Ask at every dusty task: is water applied at the point where the rock breaks?" },
    { name: "Ban dry sweeping", how: "Replace brooms and air lines for cleaning with wet methods or filtered vacuums." },
    { name: "Seal the cab", how: "Enclosed, filtered, pressurised cabs on drills and loaders protect operators from the worst of it." }
  ],
  assignment: { level: "Practise", task: "Walk one drilling, crushing or screening area. For each place dust is generated, note whether water or extraction is applied at that point. List the gaps.", stretch: "Find out whether your site measures respirable silica and against which limit." },
  discuss: [
    "If silicosis takes years to appear, who on our site is building it now?",
    "If we can see the dust, we're already too late, aren't we?",
    "Where do we still dry-sweep or blow down with air?"
  ],
  reflect: "Have you ever used compressed air to clean dust off your own clothes?",
  quiz: [
    { q: "Silicosis is:", options: ["Curable with antibiotics", "Progressive and irreversible lung scarring", "A skin condition", "Caused by gases"], answer: 1, why: "Prevention is the only treatment." },
    { q: "The US OSHA PEL for respirable crystalline silica since 2016 is:", options: ["500 µg/m³", "250 µg/m³", "100 µg/m³", "50 µg/m³"], answer: 3, why: "With an action level of 25 µg/m³." },
    { q: "The most effective way to control silica at a drill is usually:", options: ["Dust masks only", "Water at the point of generation", "Dry sweeping afterwards", "Working faster"], answer: 1, why: "It stops particles becoming airborne." }
  ],
  sources: [
    "OSHA (2016). Occupational Exposure to Respirable Crystalline Silica; Final Rule. 81 Fed. Reg. 16286.",
    "MSHA (2024). Lowering Miners' Exposure to Respirable Crystalline Silica and Improving Respiratory Protection; Final Rule. 89 Fed. Reg. 28218.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6. CRC Press."
  ]
},
{
  id: "w9-l5", week: 9, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Explaining an exposure number to a crew",
  book: null,
  bigIdea: "'0.04 mg/m³' means nothing to most people. 'You used up your safe amount for the day by lunchtime' means something to everyone. Translate numbers into time, comparison and action.",
  why: "Monitoring results only change behaviour if the people exposed understand them. Your job is to make the number matter to the person who breathed it.",
  science: [
    "Research on communicating risk numbers, reviewed by Isaac Lipkus in 2007, finds that many people struggle with small decimals and percentages, that frequencies and simple comparisons are understood better, and that visual aids help when they are kept simple.",
    "From earlier weeks: natural frequencies beat percentages (base rates), and absolute numbers beat relative ones (presenting risk numbers). The same principles apply to exposure results.",
    "This lesson's method of translating into time, comparison and action is the hub's practical synthesis of that research, not a separately tested technique."
  ],
  evidence: "Practice-based",
  evidenceNote: "The underlying findings on numeracy and risk communication are well supported. The three-step translation is a practical method built on them.",
  work: [
    "Result: a respirable manganese reading of 0.04 mg/m³ against a 0.02 limit. <b>Time</b>: 'That is twice the limit, so you reached a full day's safe amount in about four hours.' <b>Comparison</b>: 'Your crew is the highest on site this quarter.' <b>Action</b>: 'Here is what we are changing at the transfer point, and here is what you can do until it is fixed.'",
    "Noise works the same way: a dose of 300 percent means a full day's allowance was used up in the first third of the shift."
  ],
  techniques: [
    { name: "Convert to time", how: "Express any exposure over a limit as 'you reached your daily allowance by...'." },
    { name: "Compare locally", how: "Compare with their own past results or a neighbouring crew, not with a regulation number." },
    { name: "Always end with action", how: "Never give a bad number without saying what is being done about it and what they can do today." }
  ],
  assignment: { level: "Practise", task: "Take one real monitoring result from your site. Write a three-sentence explanation for the crew using time, comparison and action. Read it to one worker and ask them to explain it back.", stretch: "Turn it into a single simple chart or picture for the crew notice board." },
  discuss: [
    "When we post monitoring results on a notice board, who reads them, and what do they understand?",
    "Can a number nobody understands change what anybody does? Most of us would say no.",
    "Which of our results most needs translating for the people who are exposed?"
  ],
  reflect: "Have you ever delivered a result in a way that protected you more than it informed them?",
  quiz: [
    { q: "A noise dose of 200% means the daily allowance was used up after about:", options: ["2 hours", "4 hours", "8 hours", "16 hours"], answer: 1, why: "Twice the allowance in eight hours: the full allowance by half way." },
    { q: "Which is generally easiest for most people to understand?", options: ["0.0004", "0.04%", "4 in 10,000", "4 x 10^-4"], answer: 2, why: "Natural frequencies beat decimals and percentages." },
    { q: "Every explanation of a high result should end with:", options: ["The regulation number", "What is being done and what they can do", "An apology", "A warning letter"], answer: 1, why: "A number without action breeds anxiety or indifference." }
  ],
  sources: [
    "Lipkus, I. M. (2007). Numeric, verbal, and visual formats of conveying health risks: Suggested best practices and future recommendations. Medical Decision Making, 27(5), 696-713.",
    "Gigerenzer, G. (2002). Calculated Risks: How to Know When Numbers Deceive You. Simon and Schuster."
  ]
},
{
  id: "w9-l6", week: 9, n: 6, track: "craft", area: "Critical thinking", minutes: 25,
  title: "Reading a research paper in fifteen minutes",
  book: null,
  bigIdea: "You do not need a degree to judge a study. Five questions about who was studied, how, how many, how big the effect was and whether anyone repeated it will tell you most of what matters.",
  why: "Suppliers, consultants and headlines will quote research at you. This hub cites studies every day. Being able to check one quickly protects you from being sold something, and from passing on something false.",
  science: [
    "In 2015 the Open Science Collaboration, about 270 researchers, tried to repeat <b>100</b> published psychology studies. <b>97 percent</b> of the originals had reported statistically significant results; only <b>36 percent</b> of the repeats did. Effects in the repeats were, on average, about half the original size.",
    "That does not mean research is useless. It means one study is a clue, not a fact, especially if it is small, surprising or has never been repeated. Several lessons in this hub mark exactly this, for example the note-taking and Dunning-Kruger lessons.",
    "The structure of a paper helps you read it quickly: the <b>abstract</b> summarises, the <b>methods</b> say who and how, the <b>results</b> give the numbers, and the <b>discussion</b> gives the authors' interpretation and its limits."
  ],
  evidence: "Established",
  evidenceNote: "The replication project is itself a large, transparent study. Replication rates vary between fields; psychology is not uniquely affected.",
  work: [
    "A supplier says a product 'reduces hand injuries by 60 percent, proven in a study'. Ask: how many sites, how many workers, compared with what, over how long, and has anyone else found the same? If they cannot answer, you do not yet have evidence.",
    "Most of the papers cited in this hub have a free abstract online. Reading the abstract and methods of one cited study a month is a realistic habit."
  ],
  techniques: [
    { name: "Who and how many", how: "Who took part, and how many? Thirty students in a laboratory tell you little about three hundred miners on a site." },
    { name: "Compared with what", how: "Was there a control group? Were people randomly assigned? Without a comparison, an improvement could be anything." },
    { name: "How big, and again?", how: "How large was the effect, and has another team repeated it? Small and once is a clue, not a law." }
  ],
  assignment: { level: "Investigate", task: "Choose one study cited in this hub. Find its abstract online. Answer the five questions: who, how many, compared with what, how big, repeated? Write the answers in five lines.", stretch: "Find one claim in a safety product brochure and apply the same five questions." },
  discuss: [
    "Have you ever repeated a statistic you never checked?",
    "Shouldn't we treat one study as a clue and keep looking?",
    "Which claim do we hear often on site that nobody has ever checked?"
  ],
  reflect: "Which 'fact' about safety do you believe mainly because you have heard it many times?",
  quiz: [
    { q: "In the 2015 replication project, the share of repeated studies with significant results was about:", options: ["97%", "75%", "50%", "36%"], answer: 3, why: "Compared with 97% of the originals." },
    { q: "The part of a paper that tells you who was studied and how is the:", options: ["Abstract", "Methods", "Discussion", "References"], answer: 1, why: "Read it before trusting the results." },
    { q: "Which is the strongest evidence?", options: ["One small study", "A supplier's brochure", "Several independent studies finding the same effect", "An expert's opinion"], answer: 2, why: "Replication is what turns a clue into a finding." }
  ],
  sources: [
    "Open Science Collaboration (2015). Estimating the reproducibility of psychological science. Science, 349(6251), aac4716.",
    "Ioannidis, J. P. A. (2005). Why most published research findings are false. PLoS Medicine, 2(8), e124."
  ]
},
{
  id: "w9-l7", week: 9, n: 7, track: "people", area: "Attention", minutes: 20,
  title: "The invisible gorilla: looking is not seeing",
  book: null,
  bigIdea: "When attention is busy with one task, people can fail to see something obvious directly in front of them. Their eyes were pointed at it; their mind was not.",
  why: "'He must have seen it, it was right in front of him' appears in investigations and arguments every week. Often he didn't see it, and knowing why changes what you recommend.",
  science: [
    "In 1999 Daniel Simons and Christopher Chabris asked people to count basketball passes in a short video. Partway through, a person in a gorilla suit walked through the scene. Across their conditions, <b>46 percent</b> of viewers did not notice it.",
    "This is <b>inattentional blindness</b>: failing to perceive an unexpected object because attention is engaged elsewhere. People are also poor at predicting it; most are confident they would have seen the gorilla.",
    "It links to situation awareness: Jones and Endsley found in 1996 that about three quarters of situation awareness errors in aviation reports involved failures to perceive the needed information."
  ],
  evidence: "Established",
  evidenceNote: "Inattentional blindness is well replicated. Rates vary with how demanding the main task is and how similar the unexpected object is to what people are watching for.",
  work: [
    "A loader operator concentrating on bucket placement does not see a person walking into the swing area, even though they are in full view. A driver searching for a gap in traffic does not see the pedestrian.",
    "'He was careless' tells you nothing you can fix. It is that the design relied on him noticing something unexpected while his attention was fully used."
  ],
  techniques: [
    { name: "Ask what they were attending to", how: "In interviews: 'What were you concentrating on at that moment?' The answer explains what they missed." },
    { name: "Do not rely on noticing", how: "Where a missed person would be fatal, use exclusion zones, physical barriers or proximity alarms, not vigilance." },
    { name: "Make the unexpected expected", how: "Briefings that say what might appear ('expect people on foot near the workshop today') raise the chance it is seen." }
  ],
  assignment: { level: "Practise", task: "Show the 1999 basketball video (search 'selective attention test Simons') to three colleagues without warning. Count how many notice the gorilla, then discuss what it means for spotting people near equipment.", stretch: "Review one incident where someone 'should have seen' something. Note what their attention was on." },
  discuss: [
    "Did you see the gorilla the first time? How sure were you that you would?",
    "You can look straight at something and still not see it. Has that ever happened to you?",
    "Where on site do we rely on someone noticing an unexpected person?"
  ],
  reflect: "What have you missed during an inspection because you were looking for something else?",
  quiz: [
    { q: "In Simons and Chabris (1999), the share of viewers who missed the gorilla was about:", options: ["5%", "20%", "46%", "90%"], answer: 2, why: "Across their conditions." },
    { q: "Inattentional blindness is caused by:", options: ["Poor eyesight", "Attention being engaged elsewhere", "Bad lighting only", "Laziness"], answer: 1, why: "The eyes see; the attention does not register it." },
    { q: "Where a missed person would be fatal, the best control is:", options: ["Telling operators to look harder", "Physical separation or proximity alarms", "Brighter vests only", "A warning sign"], answer: 1, why: "Do not rely on noticing the unexpected." }
  ],
  sources: [
    "Simons, D. J., & Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. Perception, 28(9), 1059-1074.",
    "Jones, D. G., & Endsley, M. R. (1996). Sources of situation awareness errors in aviation. Aviation, Space, and Environmental Medicine, 67(6), 507-512.",
    "Chabris, C., & Simons, D. (2010). The Invisible Gorilla. Crown."
  ]
},
{
  id: "w10-l1", week: 10, n: 1, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Gases and vapours: ppm, mg/m³ and where gas goes",
  book: "Yates, Ch. 6: Particulates and Gases",
  bigIdea: "Gas limits come in two units, and you must be able to convert between them. Then ask the practical question: is this gas heavier or lighter than air, and where will it gather?",
  why: "Detectors read in ppm, some limits are written in mg/m³, and people die in pits, sumps and tanks where heavy gases collect. Both the arithmetic and the physics matter.",
  science: [
    "<b>ppm</b> (parts per million) is a ratio by volume. <b>mg/m³</b> is a mass per volume. At 25 °C and normal atmospheric pressure, <b>mg/m³ = ppm x molecular weight / 24.45</b>, and the reverse is ppm = mg/m³ x 24.45 / molecular weight. 24.45 is the volume in litres of one mole of gas under those conditions.",
    "Worked example: carbon monoxide has a molecular weight of 28. So 25 ppm is 25 x 28 / 24.45, about <b>29 mg/m³</b>. Hydrogen sulphide (molecular weight 34): 10 ppm is about 14 mg/m³.",
    "Gases with <b>vapour density</b> above air (above 1) tend to sink and collect in low places: hydrogen sulphide, carbon dioxide, many solvent vapours. Lighter gases such as methane tend to rise. Temperature and air movement can override this, so measure rather than assume."
  ],
  evidence: "Established",
  evidenceNote: "This is standard chemistry and is in every hygiene reference. The 24.45 constant applies at 25 °C and 1 atmosphere; at other conditions the value changes slightly.",
  work: [
    "A sump at the bottom of a pit, a dewatering pump sump or a drained tank can hold carbon dioxide or hydrogen sulphide long after the area above smells normal.",
    "Diesel exhaust in a poorly ventilated workshop builds up carbon monoxide. Test at breathing height and low down, not just at the door."
  ],
  techniques: [
    { name: "Carry the formula", how: "Write mg/m³ = ppm x MW / 24.45 on your notebook cover. Convert any limit before comparing it with a reading." },
    { name: "Test high, middle, low", how: "In any enclosed or low space, test at several heights. Heavy gases hide at the bottom." },
    { name: "Ask what sinks", how: "Before entry, name the gases that could be there and whether each sinks or rises." }
  ],
  assignment: { level: "Practise", task: "Find the exposure limits your site uses for carbon monoxide, hydrogen sulphide and one other gas. Convert each between ppm and mg/m³ by hand and check against the published values.", stretch: "Identify three low places on site where a heavy gas could collect and check whether any testing happens there." },
  discuss: [
    "Where on our site could a heavy gas collect without anyone smelling it?",
    "'It smells fine' isn't a gas test. We can all agree on that, can't we?",
    "Which units do our detectors show, and which units are our limits written in?"
  ],
  reflect: "Have you ever entered a low or enclosed space assuming the air was fine?",
  quiz: [
    { q: "Converting 50 ppm of a gas with molecular weight 24.45 gives:", options: ["2 mg/m³", "24 mg/m³", "50 mg/m³", "1,222 mg/m³"], answer: 2, why: "50 x 24.45 / 24.45 = 50." },
    { q: "A gas with vapour density greater than 1 tends to:", options: ["Rise", "Sink and collect low", "Disappear", "Stay at head height"], answer: 1, why: "It is heavier than air." },
    { q: "25 ppm of carbon monoxide (MW 28) is about:", options: ["9 mg/m³", "29 mg/m³", "70 mg/m³", "700 mg/m³"], answer: 1, why: "25 x 28 / 24.45 = 28.6." }
  ],
  sources: [
    "NIOSH Pocket Guide to Chemical Hazards: conversion factors and vapour densities.",
    "ACGIH. TLVs and BEIs: Introduction to the chemical substances.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6. CRC Press."
  ]
},
{
  id: "w10-l2", week: 10, n: 2, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Exposure limits: what they mean and what they do not",
  book: "Yates, Ch. 6: Particulates and Gases; Ch. 7: Toxicology",
  bigIdea: "An exposure limit marks the level at which nearly all workers are expected to be protected, based on the evidence when it was set. There are three kinds, and none of them is a clean line between safe and poisoned.",
  why: "Reports often say 'below the limit, therefore safe'. You should know what kind of limit was used, where it came from, and what to do when several chemicals are present at once.",
  science: [
    "There are three common forms. The <b>TWA</b> (time-weighted average) is the average allowed over an 8-hour day. The <b>STEL</b> (short-term exposure limit) is a 15-minute average that should not be exceeded even if the day's average is fine. The <b>ceiling</b> is a level never to be exceeded at any moment.",
    "Limits come from different bodies. In the US, <b>PELs</b> are OSHA's legal limits, many unchanged since the early 1970s. <b>TLVs</b> are ACGIH's recommendations, revised as evidence changes. <b>RELs</b> are NIOSH recommendations. ACGIH itself states that TLVs are not fine lines between safe and dangerous.",
    "For a <b>mixture</b> of substances with similar effects, add the fractions: C1/L1 + C2/L2 + ... where C is the measured level and L its limit. If the sum is above 1, the mixture exceeds the combined limit even when each substance is below its own."
  ],
  evidence: "Established",
  evidenceNote: "These definitions and the additive formula are standard ACGIH and OSHA practice. The additive approach assumes the substances act on the same organs; where they do not, it does not apply.",
  work: [
    "Two solvents measured at 60 percent and 50 percent of their own limits. Each is 'compliant'. Together, 0.6 + 0.5 = 1.1, so the combined exposure is over.",
    "A welder whose 8-hour manganese average is under the limit may still exceed a short-term limit during the ten minutes he welds inside a confined space. Check which form of limit a result is being compared with."
  ],
  techniques: [
    { name: "Ask which limit and whose", how: "TWA, STEL or ceiling? PEL, TLV or REL? A result means little until you know." },
    { name: "Add the mixtures", how: "Where several similar substances are present, do the sum before declaring compliance." },
    { name: "Aim below, not at", how: "Treat half the limit as the point where you act, not the limit itself. Many standards use an action level for exactly this reason." }
  ],
  assignment: { level: "Practise", task: "Take one exposure report from your site. For each result, note which form of limit was used and who set it. If more than one similar substance was measured, apply the additive formula.", stretch: "For one substance, compare the OSHA PEL with the current ACGIH TLV and note the difference." },
  discuss: [
    "If a result is 90 percent of the limit, are we happy?",
    "'Below the limit' and 'no harm' are two different claims, aren't they?",
    "Where do our people meet several chemicals at once?"
  ],
  reflect: "Which result have you reported as 'compliant' that you would not be comfortable breathing every day for thirty years?",
  quiz: [
    { q: "A STEL is averaged over:", options: ["8 hours", "1 hour", "15 minutes", "1 second"], answer: 2, why: "It protects against short peaks." },
    { q: "Two similar substances at 0.6 and 0.5 of their limits give a combined index of:", options: ["0.55", "1.1", "0.3", "Cannot be combined"], answer: 1, why: "Above 1 means the mixture exceeds." },
    { q: "ACGIH describes its TLVs as:", options: ["Legal limits", "Fine lines between safe and dangerous", "Not fine lines between safe and dangerous", "Maximum permitted doses"], answer: 2, why: "They are guidelines based on available evidence." }
  ],
  sources: [
    "ACGIH. TLVs and BEIs: Statement of Position and Introduction; Appendix E, Threshold Limit Values for Mixtures.",
    "OSHA. 29 CFR 1910.1000, Air Contaminants.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6 and Ch. 7. CRC Press."
  ]
},
{
  id: "w10-l3", week: 10, n: 3, track: "people", area: "Decision-making", minutes: 20,
  title: "Situation awareness: see, understand, predict",
  book: null,
  bigIdea: "Knowing what is going on has three levels: noticing the right things, understanding what they mean, and predicting what will happen next. Most failures happen at the first level.",
  why: "'Lost situational awareness' appears in many investigation reports as a cause. It is more useful as a question: at which level did it break, and why?",
  science: [
    "Mica Endsley's 1995 model defines situation awareness in three levels. <b>Level 1, perception</b>: noticing the relevant elements. <b>Level 2, comprehension</b>: understanding what they mean together. <b>Level 3, projection</b>: predicting what they will do next.",
    "Debra Jones and Endsley analysed aviation incident reports in 1996 and found that about <b>76 percent</b> of situation awareness errors were at level 1: the information was missed, not seen, or never available.",
    "The previous lessons on vigilance and inattentional blindness explain many of those level 1 failures. Level 3, prediction, is what separates experienced people: they see what is about to happen."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Endsley's model is the most widely used in human factors. Some researchers argue it is better treated as a description than a cause, and the 76 percent figure comes from aviation reports, not mining.",
  work: [
    "A grader operator at a haul road intersection. Level 1: does he see the approaching truck? Level 2: does he realise it is loaded and will take longer to stop? Level 3: does he predict it will reach the intersection before he clears it?",
    "Ask which level failed before recommending anything. A level 1 failure needs better visibility or detection. A level 3 failure needs experience, briefing or more time."
  ],
  techniques: [
    { name: "Ask the three questions", how: "In investigations: what did they see? What did they think it meant? What did they expect to happen next?" },
    { name: "Brief the prediction", how: "Pre-starts can include 'what could change this shift?', which builds level 3 for the whole crew." },
    { name: "Fix level 1 with design", how: "If people miss information, improve how it is presented: mirrors, cameras, alarms, layout." }
  ],
  assignment: { level: "Think", task: "Take one incident report that says 'loss of situational awareness'. Rewrite that finding as three statements: what was not perceived, what was misunderstood, and what was not predicted. Note which level the evidence supports.", stretch: "Use the three questions in your next interview." },
  discuss: [
    "When we write 'lost situational awareness', what exactly do we mean?",
    "You can't understand or predict what you never noticed. Fair?",
    "What do our most experienced operators predict that new starters miss?"
  ],
  reflect: "When you walk onto a work area, how quickly do you move from seeing to predicting?",
  quiz: [
    { q: "Level 3 situation awareness is:", options: ["Perception", "Comprehension", "Projection of future status", "Decision-making"], answer: 2, why: "Predicting what will happen next." },
    { q: "Jones and Endsley (1996) found most SA errors in aviation occurred at:", options: ["Level 1", "Level 2", "Level 3", "Equally across levels"], answer: 0, why: "About 76% were perception failures." },
    { q: "A level 1 failure is usually best addressed by:", options: ["Telling people to concentrate", "Improving how information is detected and presented", "More paperwork", "Discipline"], answer: 1, why: "You cannot understand what you never saw." }
  ],
  sources: [
    "Endsley, M. R. (1995). Toward a theory of situation awareness in dynamic systems. Human Factors, 37(1), 32-64.",
    "Jones, D. G., & Endsley, M. R. (1996). Sources of situation awareness errors in aviation. Aviation, Space, and Environmental Medicine, 67(6), 507-512."
  ]
},
{
  id: "w10-l4", week: 10, n: 4, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Gas detectors: bump test, calibration and trust",
  book: "Yates, Ch. 6: Particulates and Gases",
  bigIdea: "A gas detector that switches on and shows zero has told you almost nothing. Expose it to a known gas and you'll know the sensors and alarms work today.",
  why: "Confined space entries, workshop checks and emergency responses depend on portable detectors. A detector with a dead sensor looks exactly like one in clean air.",
  science: [
    "A <b>bump test</b> (function check) briefly exposes the detector to a known gas to confirm the sensors respond and the alarms sound. <b>Calibration</b> adjusts the detector's readings against a certified gas concentration so the numbers are accurate.",
    "OSHA's 2004 information bulletin on portable gas monitors, drawing on the International Safety Equipment Association, recommends verifying sensor operation <b>before each day's use</b>. Calibration intervals follow the manufacturer's instructions.",
    "Sensors drift and fail. Catalytic sensors for flammable gas can be <b>poisoned</b> by substances such as silicones, and electrochemical sensors degrade with age and exposure to high concentrations. In OSHA's confined space rules, oxygen below <b>19.5 percent</b> is treated as deficient."
  ],
  evidence: "Established",
  evidenceNote: "The bump test and calibration distinction is industry and regulator guidance. The OSHA bulletin is advisory, not a legal standard; your site's procedure and the manufacturer's manual govern.",
  work: [
    "A four-gas detector typically reads oxygen, flammable gas as a percentage of the lower explosive limit (LEL), carbon monoxide and hydrogen sulphide. Each sensor can fail independently.",
    "A docking station that bump tests and logs automatically removes most of the effort. Without one, keep a simple log: date, who, gas used, pass or fail."
  ],
  techniques: [
    { name: "No bump, no entry", how: "A detector without a bump test today does not go into a confined space." },
    { name: "Check the log", how: "Before relying on a detector, look at when it was last bump tested and calibrated." },
    { name: "Fresh air zero", how: "Zero the detector in known clean air, not at the entrance to the space you are testing." }
  ],
  assignment: { level: "Investigate", task: "Inspect every portable gas detector in your area. Record, for each, the last bump test date, the last calibration date and whether a log exists.", stretch: "Watch someone bump test a detector and check it against the manufacturer's procedure." },
  discuss: [
    "If a detector shows normal readings, how do we know the sensor is not dead?",
    "An untested detector gives false confidence, and that's worse than having none. Do you agree?",
    "Who on our site owns the detector logs, and when did someone last look?"
  ],
  reflect: "Have you ever trusted a gas reading without knowing when the detector was last tested?",
  quiz: [
    { q: "A bump test confirms that:", options: ["Readings are precisely accurate", "Sensors respond and alarms work", "The battery is full", "The detector is new"], answer: 1, why: "Calibration is what adjusts accuracy." },
    { q: "OSHA's 2004 bulletin recommends verifying sensor operation:", options: ["Monthly", "Annually", "Before each day's use", "Only after a fault"], answer: 2, why: "Following ISEA recommendations." },
    { q: "In OSHA's confined space rules, an oxygen-deficient atmosphere is below:", options: ["23.5%", "20.9%", "19.5%", "16%"], answer: 2, why: "Normal air is about 20.9%." }
  ],
  sources: [
    "OSHA (2004). Verification of Calibration for Direct-Reading Portable Gas Monitors. Safety and Health Information Bulletin SHIB 05-04-2004.",
    "OSHA. 29 CFR 1910.146, Permit-Required Confined Spaces (definition of oxygen-deficient atmosphere).",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 6. CRC Press."
  ]
},
{
  id: "w10-l5", week: 10, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Charts that tell the truth quickly",
  book: null,
  bigIdea: "A chart should make one point obvious in five seconds. Bars that start at zero, labels on the data and no decoration usually do that better than anything clever.",
  why: "Monthly safety reports are full of charts that nobody reads, and some that mislead. Good charts get your point to managers who will not read the paragraph underneath.",
  science: [
    "William Cleveland and Robert McGill tested in 1984 how accurately people read different kinds of chart. Judging <b>position along a common scale</b>, as in a bar or dot chart, was most accurate. Judging <b>angles and areas</b>, as in pie charts and bubbles, was less accurate.",
    "Bar charts encode values by length, so a bar axis that does not start at zero exaggerates differences. A drop from 10 to 9 can look like a collapse.",
    "Simple design guidance follows: one message per chart, a title that states the message, labels directly on the lines or bars instead of a separate legend, and colour only where it means something."
  ],
  evidence: "Established",
  evidenceNote: "Cleveland and McGill's ranking has been replicated, including in a 2010 online study by Heer and Bostock. The design guidance is widely agreed practice.",
  work: [
    "A pie chart of injury types across twelve categories forces the reader to compare slices. A sorted horizontal bar chart of the same data shows the top three in a glance.",
    "Title the chart with the finding: 'Hand injuries are half of all injuries this year', not 'Injuries by body part, Jan to Oct'."
  ],
  techniques: [
    { name: "Title it with the point", how: "Write the chart title as the sentence you want the reader to remember." },
    { name: "Bars from zero", how: "Bar charts always start at zero. If the differences then look small, they are small." },
    { name: "Sort and label", how: "Sort bars by size and put the number on each bar. Remove gridlines and legends you do not need." }
  ],
  assignment: { level: "Practise", task: "Take one chart from your last monthly safety report. Redraw it on paper or in a spreadsheet using the three techniques. Show both versions to a manager and ask which point each makes.", stretch: "Replace one pie chart in your reports permanently with a sorted bar chart." },
  discuss: [
    "Which chart in our monthly report could you explain without reading the text?",
    "If a chart needs a paragraph to explain it, it hasn't done its job, has it?",
    "Where might our current charts be making small changes look large?"
  ],
  reflect: "When you make a chart, are you trying to show the data or to look thorough?",
  quiz: [
    { q: "Cleveland and McGill found people judge most accurately:", options: ["Angles", "Areas", "Position along a common scale", "Colour shades"], answer: 2, why: "Bars and dots beat pies and bubbles." },
    { q: "A bar chart axis should start at:", options: ["The lowest value", "Zero", "The average", "Any convenient number"], answer: 1, why: "Bar length must be proportional to value." },
    { q: "The best chart title is usually:", options: ["The data range", "The finding in a sentence", "The department name", "Left blank"], answer: 1, why: "It tells the reader what to see." }
  ],
  sources: [
    "Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531-554.",
    "Heer, J., & Bostock, M. (2010). Crowdsourcing graphical perception: Using Mechanical Turk to assess visualization design. Proceedings of CHI 2010, 203-212."
  ]
},
{
  id: "w10-l6", week: 10, n: 6, track: "craft", area: "Learning how to learn", minutes: 20,
  title: "The memory palace",
  book: null,
  bigIdea: "People remember places far better than lists. Attach what you need to learn to locations along a route you know, and you can walk the route in your head to recall it, in order.",
  why: "Safety professionals carry long ordered lists: isolation steps, emergency sequences, exam content. This ancient technique turns a list into a walk you already know.",
  science: [
    "The <b>method of loci</b> dates back to ancient Greek and Roman orators, who used it to deliver long speeches without notes. Nearly all memory champions use it today.",
    "In 2017 Martin Dresler and colleagues trained 23 people with ordinary memories for 30 minutes a day over 40 days. Their recall of a 72-word list rose from an average of about <b>26 words to 62</b>, and stayed high four months later. Brain scans showed connectivity patterns shifting towards those of memory athletes.",
    "The method works best for ordered lists of separate items. It is not a substitute for understanding; use it to hold the sequence, and the lessons on retrieval and spacing to keep it."
  ],
  evidence: "Established",
  evidenceNote: "The method's benefits for list recall are well supported. The Dresler study had small groups, and the gains apply most clearly to the kind of list practised.",
  work: [
    "Learn the five rungs of the control ladder by placing one on each spot of your walk from the gate to your office: something vanishing at the gate (eliminate), a swapped vehicle in the car park (substitute), a machine guard on the office door (engineer), a signboard in the corridor (administrate), and a hard hat on your chair (PPE).",
    "The stranger and more vivid the images, the better they stick."
  ],
  techniques: [
    { name: "Choose a route you know cold", how: "Your home, your daily drive, your walk through the plant. Fix five to ten stops in order." },
    { name: "Make each image odd", how: "Picture each item exaggerated, moving or out of place at its stop. Ordinary images fade." },
    { name: "Walk it back", how: "Recall by walking the route in your mind. Repeat after a day and a week." }
  ],
  assignment: { level: "Practise", task: "Pick one ordered list from your work, such as an isolation sequence or emergency steps. Place each item on a stop along a route you know. Recall it tomorrow and in a week without notes.", stretch: "Teach the method to a colleague using the same list." },
  discuss: [
    "Can you walk through your own house in your mind and name what is in each room?",
    "Try it with your own house. Isn't the route easier to recall than any list?",
    "Which ordered list on our site matters most for people to recall under pressure?"
  ],
  reflect: "Which sequence do you still have to look up every time?",
  quiz: [
    { q: "The method of loci links items to:", options: ["Numbers", "Locations along a familiar route", "Colours", "Rhymes"], answer: 1, why: "Spatial memory carries the sequence." },
    { q: "In Dresler et al. (2017), trained participants' recall rose from about 26 words to:", options: ["30", "40", "62", "72"], answer: 2, why: "After 40 days of 30-minute training." },
    { q: "The method is best suited to:", options: ["Understanding concepts", "Recalling ordered lists of items", "Calculations", "Reading speed"], answer: 1, why: "It holds sequence, not meaning." }
  ],
  sources: [
    "Dresler, M., et al. (2017). Mnemonic training reshapes brain networks to support superior memory. Neuron, 93(5), 1227-1235.",
    "Yates, F. A. (1966). The Art of Memory. Routledge and Kegan Paul."
  ]
},
{
  id: "w10-l7", week: 10, n: 7, track: "people", area: "Leadership", minutes: 20,
  title: "Goals that help and goals that backfire",
  book: null,
  bigIdea: "Specific, challenging goals raise performance. Narrow numerical goals can also push people to hit the number by any means, including hiding what the number measures. Safety targets do both.",
  why: "Zero-harm and injury-rate targets are everywhere. If you understand when goals help and when they distort, you can argue for measures that improve safety instead of measures that improve the report.",
  science: [
    "Edwin Locke and Gary Latham summarised decades of research in 2002: <b>specific, difficult goals</b> lead to higher performance than vague 'do your best' goals, provided people are committed, have the ability, and get feedback.",
    "In 2009 Lisa Ordóñez, Maurice Schweitzer, Adam Galinsky and Max Bazerman argued in 'Goals Gone Wild' that goal setting has been over-prescribed. Its side effects include a <b>narrow focus that neglects non-goal areas</b>, <b>more unethical behaviour</b>, distorted risk-taking and weaker intrinsic motivation.",
    "Both can be true. Goals work on what they measure, and people are very good at moving the measure."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Goal-setting effects are among the most replicated in organisational psychology. The side-effects argument is a review of evidence and cases, and the debate between the two camps is ongoing.",
  work: [
    "A bonus tied to a lost-time injury rate rewards fewer reported lost-time injuries. That can happen through better safety or through restricted-duty arrangements, delayed reporting and pressure not to report. The number improves either way.",
    "Goals on activities you control, such as critical control verifications completed or actions closed on time, are harder to game and point at prevention."
  ],
  techniques: [
    { name: "Ask how it could be gamed", how: "For any safety target, ask: what is the easiest way to hit this number without being safer? Then watch for that." },
    { name: "Pair outcome with activity", how: "Never use an injury rate alone. Pair it with measures of controls and reporting." },
    { name: "Reward reporting", how: "Make sure no target makes it costly for someone to report an injury or near miss." }
  ],
  assignment: { level: "Think", task: "List every safety target or KPI your department is measured on. For each, write one honest way it could be hit without improving safety. Mark which ones carry that risk most.", stretch: "Propose one replacement or paired measure for the riskiest target." },
  discuss: [
    "Has a target ever made you, or someone you know, do something you knew was not the point?",
    "Haven't you seen people hit the number they're given, one way or another?",
    "Which of our safety targets could be quietly discouraging reporting?"
  ],
  reflect: "Which number are you most measured on, and what does it make you do?",
  quiz: [
    { q: "Locke and Latham found the best performance usually follows goals that are:", options: ["Vague", "Specific and challenging", "Easy", "Set by others without explanation"], answer: 1, why: "Given commitment, ability and feedback." },
    { q: "'Goals Gone Wild' warns that narrow goals can:", options: ["Never cause harm", "Encourage neglect of other areas and unethical behaviour", "Only affect sales staff", "Improve intrinsic motivation"], answer: 1, why: "Ordóñez et al. (2009)." },
    { q: "A safer kind of safety goal is one based on:", options: ["Injury rate alone", "Activities that prevent harm, paired with outcomes", "Zero reported incidents", "Days without an injury sign"], answer: 1, why: "Harder to game, and focused on prevention." }
  ],
  sources: [
    "Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. American Psychologist, 57(9), 705-717.",
    "Ordóñez, L. D., Schweitzer, M. E., Galinsky, A. D., & Bazerman, M. H. (2009). Goals gone wild: The systematic side effects of overprescribing goal setting. Academy of Management Perspectives, 23(1), 6-16."
  ]
}
);
window.LESSONS.sort(function(a,b){ return a.week-b.week || a.n-b.n; });
