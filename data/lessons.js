/* Curated lessons. Original teaching text; the Yates book is referenced by chapter only.
   Add new batches by appending to this array. */
window.LESSONS = [
{
  id: "w1-l1", week: 1, n: 1, track: "safety", area: "Risk management", minutes: 20,
  title: "A hazard is not a risk",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "A hazard is the thing that can hurt you. Risk is how likely it is to hurt you, and how badly. Mixing the two is the most common reason risk assessments end up as lists of scary nouns.",
  why: "If your assessment says the risk is \"haul truck\", nobody knows what to do next. If it says \"a light vehicle is struck by a haul truck at the pit ramp intersection, likely fatal\", the controls almost write themselves.",
  science: [
    "ISO 45001:2018 treats a <b>hazard</b> as a source with the potential to cause injury or ill health. It treats <b>OH&amp;S risk</b> as the combination of how likely a hazardous event or exposure is and how severe the resulting harm could be. ISO 31000:2018 goes wider and calls risk the effect of uncertainty on objectives.",
    "The practical consequence: a hazard exists whether or not anyone is near it. Risk only exists when people, plant or the environment can be exposed. A stockpile face is a hazard at 3 a.m. with nobody around. It becomes a risk when a dozer operator works under it.",
    "A useful risk statement has three parts: the <b>hazard</b>, the <b>event</b> that releases it, and the <b>consequence</b>. Write all three and you can rate likelihood and severity honestly. Write only the hazard and the rating is a guess."
  ],
  evidence: "Established",
  evidenceNote: "These definitions come straight from international standards that most safety management systems are built on.",
  work: [
    "Pull any risk assessment or JHA from your site and read the hazard column. You will often find events (\"slipping\"), consequences (\"injury\") and hazards (\"wet floor\") mixed together in one column. Each of those belongs in a different place.",
    "Sorting them matters because controls attach to different parts. Some controls remove the hazard, some stop the event, some limit the consequence. You cannot see which you are missing until the three are separated."
  ],
  techniques: [
    { name: "The three-part risk statement", how: "\"There is a risk that [event] because of [hazard], resulting in [consequence].\" Refuse to rate anything that is not written this way." },
    { name: "The empty-site test", how: "Ask: would this still be here if nobody was on site? If yes, it is a hazard. If it needs a person to exist, it is an event or a behaviour." },
    { name: "One hazard, several events", how: "For each hazard, list at least two different ways it could hurt someone. One hazard rarely has one risk." }
  ],
  assignment: { level: "Practise", task: "Take one JHA or risk assessment you have used this month. Rewrite three of its lines as three-part risk statements. Note whether the risk rating still looks right once the statement is clear.", stretch: "Show the before and after to the supervisor who signed the original and ask what they notice." },
  discuss: [
    "Think of the last risk assessment you signed. Could a new employee have told from it exactly what could go wrong?",
    "Would we agree that a control is easier to choose when we know which event it is meant to stop?",
    "What would change in our toolbox talks if we always named the event, and never only the hazard?"
  ],
  reflect: "Which hazards on your site have become so familiar that people no longer see the risk in them?",
  quiz: [
    { q: "A loaded stockpile face with nobody near it is best described as:", options: ["A risk", "A hazard", "An incident", "A consequence"], answer: 1, why: "It has the potential to cause harm, but nobody is exposed yet." },
    { q: "Which is a complete risk statement?", options: ["Working at height", "Fall from height", "A worker falls from the unguarded platform edge because of the 4 m drop, resulting in serious injury", "Serious injury"], answer: 2, why: "It names the hazard, the event and the consequence." },
    { q: "In ISO 45001, OH&S risk combines:", options: ["Hazard and control", "Likelihood and severity", "Frequency and cost", "Exposure and PPE"], answer: 1, why: "Likelihood of the event or exposure, and severity of the harm." }
  ],
  sources: [
    "ISO 45001:2018, Occupational health and safety management systems, clause 3 (terms and definitions).",
    "ISO 31000:2018, Risk management: Guidelines.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w1-l2", week: 1, n: 2, track: "safety", area: "Risk management", minutes: 20,
  title: "The hierarchy of controls: why PPE comes last",
  book: "Yates, Ch. 26: Risk Assessment and Management; Ch. 35: Prevention through Design",
  bigIdea: "Controls are not equal. The ones that change the workplace beat the ones that depend on people remembering, every shift, for years.",
  why: "Most corrective actions after an incident are retraining, a new procedure or a toolbox talk. Those sit near the bottom of the hierarchy. A safety professional who can argue for a higher control is worth more than one who can only write a new rule.",
  science: [
    "NIOSH ranks controls in five levels, from most to least effective: <b>elimination</b>, <b>substitution</b>, <b>engineering controls</b>, <b>administrative controls</b> and <b>personal protective equipment</b>. ISO 45001 clause 8.1.2 requires organisations to work through a very similar order.",
    "The ranking follows one question: how much does the control depend on human behaviour? Removing a hazard needs nobody to do anything afterwards. A guard works without the operator thinking about it. A procedure works only when it is known, remembered and followed. PPE works only when it is the right type, fits, is worn correctly and is maintained.",
    "Lower controls are still necessary. Most real jobs need a combination. The hierarchy tells you where to look first and what to be suspicious of when a serious risk is controlled only by rules and PPE."
  ],
  evidence: "Established",
  evidenceNote: "The hierarchy is standard practice across NIOSH, ISO 45001 and most national regulators. The ordering is based on reliability reasoning more than on controlled trials.",
  work: [
    "Take dust at a crusher. Elimination: is the crushing step needed here at all? Substitution: a wet process in place of a dry one. Engineering: enclosure, water sprays, extraction. Administrative: rotating operators, exclusion zones. PPE: respirators with fit testing.",
    "Notice how the cost of getting it wrong moves. If the sprays fail, a maintenance alarm can tell you. If someone lifts a respirator to talk, nothing tells you."
  ],
  techniques: [
    { name: "Climb one rung", how: "For any proposed control, ask: what would the control one level higher look like? You will not always get it, but you will have asked." },
    { name: "Count the human steps", how: "List every action a person must take, every time, for the control to work. The longer the list, the weaker the control." },
    { name: "Label your corrective actions", how: "Write E, S, Eng, A or P next to each action in an investigation report. A column of A and P for a high-severity event should be challenged." }
  ],
  assignment: { level: "Think", task: "Pick the last three incident reports or near-miss close-outs you can access. Label every corrective action with its level in the hierarchy. Count how many fall in each level.", stretch: "For the most serious of the three, write one engineering or substitution option that nobody proposed, and what it would roughly need." },
  discuss: [
    "When we close out an incident, which level do most of our actions land on? Are we happy with that?",
    "Would you agree that a control which works on a bad day is worth more than one which works on a good day?",
    "What stops us proposing engineering controls? Cost, time, or simply habit?"
  ],
  reflect: "Where on your site is a potentially fatal risk currently held back mainly by a rule and a piece of PPE?",
  quiz: [
    { q: "Which control sits highest in the hierarchy?", options: ["Engineering controls", "Elimination", "Substitution", "Administrative controls"], answer: 1, why: "Removing the hazard needs no further human action." },
    { q: "Job rotation to limit noise exposure is:", options: ["Engineering", "Substitution", "Administrative", "PPE"], answer: 2, why: "It changes how people work, not the noise itself." },
    { q: "Why does PPE rank last?", options: ["It is expensive", "It only protects the wearer and depends on correct use every time", "It is uncomfortable", "Regulations say so"], answer: 1, why: "It leaves the hazard in place and relies entirely on behaviour and fit." }
  ],
  sources: [
    "NIOSH. Hierarchy of Controls. National Institute for Occupational Safety and Health, CDC.",
    "ISO 45001:2018, clause 8.1.2, Eliminating hazards and reducing OH&S risks.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26 and Ch. 35. CRC Press."
  ]
},
{
  id: "w1-l3", week: 1, n: 3, track: "people", area: "Psychology and human behaviour", minutes: 20,
  title: "Two speeds of thinking",
  book: null,
  bigIdea: "Most of what experienced people do at work runs on fast, automatic thinking. That is why they are good at the job, and also why they miss the one thing that has changed.",
  why: "\"He should have known better\" is usually true and usually useless. He did know better. Knowing lives in slow thinking. The task was being run by fast thinking. Until you understand that gap, your corrective actions will keep aiming at knowledge that was never missing.",
  science: [
    "Daniel Kahneman's <i>Thinking, Fast and Slow</i> (2011) describes two modes. <b>System 1</b> is fast, automatic and effortless. <b>System 2</b> is slow, deliberate and tiring. The labels came from Keith Stanovich and Richard West (2000). They are a description of how thinking behaves, not two parts of the brain.",
    "A classic demonstration is Shane Frederick's bat-and-ball question (2005): a bat and a ball cost $1.10 together, and the bat costs $1.00 more than the ball. How much is the ball? Most people's first answer is 10 cents. The correct answer is 5 cents. The wrong answer arrives instantly and feels right, so many people never check it.",
    "Skilled, repeated work migrates to System 1. That frees attention, but it also means the operator stops consciously checking steps that have always gone fine. Fatigue, time pressure and distraction all make System 2 less likely to step in."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The two-mode description is widely used in psychology. Some specific studies cited in Kahneman's book, particularly on behavioural priming, later failed to replicate, and Kahneman acknowledged this. Treat the framework as sound and individual striking experiments with care.",
  work: [
    "A fitter who has isolated the same conveyor two hundred times is not thinking about isolation. Their hands are doing it. On the day the isolation point has been moved, the hands still go to the old place.",
    "This is why \"be more careful\" does not work. You cannot instruct System 1. You can only interrupt it, or design the task so that the automatic action is the safe one."
  ],
  techniques: [
    { name: "Build in a forced pause", how: "Put a physical or verbal stop at the point where the routine must be checked: a tag that has to be signed, a call-out to a colleague, a lock that needs a second key." },
    { name: "Flag what is different today", how: "Open pre-start talks with one question: what is different about this job today compared with last time? Change is what System 1 misses." },
    { name: "Ask about the autopilot, not the rule", how: "In an investigation, ask \"talk me through what your hands were doing\" before \"did you know the procedure?\"" }
  ],
  assignment: { level: "Practise", task: "At one pre-start or toolbox talk this week, ask the crew only this: \"What is different about today's job?\" Write down what they say and whether anything surprised the supervisor.", stretch: "Try it with a crew you do not normally work with." },
  discuss: [
    "Have you ever driven a familiar road and arrived without remembering part of the trip? What does that tell us about experienced operators?",
    "If the person already knew the rule, is retraining them likely to prevent the next one?",
    "Which of our routine tasks would be most dangerous on the day something small changes?"
  ],
  reflect: "Think of a mistake you made at work on a task you knew well. Which system was in charge?",
  quiz: [
    { q: "System 1 thinking is best described as:", options: ["Slow and deliberate", "Fast and automatic", "Emotional only", "Used only by novices"], answer: 1, why: "It runs without effort and handles most routine activity." },
    { q: "In the bat-and-ball problem the ball costs:", options: ["10 cents", "5 cents", "1 cent", "15 cents"], answer: 1, why: "Ball 5c + bat $1.05 = $1.10. The intuitive 10c answer is wrong." },
    { q: "The most reliable way to prevent an autopilot error is to:", options: ["Tell people to concentrate", "Retrain on the procedure", "Design a forced check or make the automatic action the safe one", "Increase supervision for a week"], answer: 2, why: "You cannot instruct automatic thinking, only interrupt or redesign around it." }
  ],
  sources: [
    "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
    "Stanovich, K. E., & West, R. F. (2000). Individual differences in reasoning. Behavioral and Brain Sciences, 23(5), 645-665.",
    "Frederick, S. (2005). Cognitive reflection and decision making. Journal of Economic Perspectives, 19(4), 25-42."
  ]
},
{
  id: "w1-l4", week: 1, n: 4, track: "safety", area: "Accident causation", minutes: 25,
  title: "Swiss cheese: where accidents really come from",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "The person closest to the accident is usually the last hole in a long line of holes. Many of the others were made months earlier, by people who were nowhere near the scene.",
  why: "If your investigations stop at the operator, you will fix one person and leave the conditions in place for the next one. Learning to look upstream is the single biggest upgrade to how a safety professional investigates.",
  science: [
    "James Reason set out the model in <i>Human Error</i> (1990) and summarised it in the BMJ in 2000. A system has several layers of defence. Each layer has weaknesses, like holes in slices of cheese. An accident happens when the holes line up and a hazard passes through every layer.",
    "Reason separated two kinds of hole. <b>Active failures</b> are the unsafe acts of people at the sharp end, with effects felt almost immediately. <b>Latent conditions</b> are built in earlier by design, procedures, maintenance, staffing and management decisions. They can lie unnoticed for years.",
    "He also contrasted two ways of explaining error. The <b>person approach</b> blames individuals for forgetfulness or carelessness. The <b>system approach</b> assumes people will make errors and asks why the defences failed. Reason argued the system approach is the one that prevents repeats."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The model is the most widely used accident metaphor in safety and healthcare. It is a way of thinking, not a predictive tool. Reason, Hollnagel and Paries (2006) themselves reviewed its limits, including that it can be read too linearly.",
  work: [
    "A light vehicle is clipped by a haul truck at an intersection. Active failure: the driver did not stop. Now look at the slices behind it. Was the stop sign visible from the cab? Was the berm at the right height? Had the intersection layout changed? Was the radio channel congested? Was the driver on their fifth night shift?",
    "Each of those is a latent condition somebody could have found before the event. That is the real value of the model: it tells you where to look during inspections, long before anything goes wrong."
  ],
  techniques: [
    { name: "List the slices first", how: "Before interviewing anyone, write down every defence that was supposed to stop this event. Then check each one for holes." },
    { name: "Ask \"what made that the sensible thing to do?\"", how: "Use it in place of \"why did you do that?\". It leads you to latent conditions and keeps the person talking." },
    { name: "Two-column findings", how: "Split your findings into active failures and latent conditions. If the second column is empty, the investigation is not finished." }
  ],
  assignment: { level: "Investigate", task: "Take one closed incident report from your site. List the defences that should have stopped it. For each, write whether the report examined it. Identify at least two latent conditions the report did not mention.", stretch: "Draft the one question you would have asked a manager, not the operator, during that investigation." },
  discuss: [
    "In our last investigation, how many of the findings were about one person and how many were about the system?",
    "Would you agree that if we replaced that person with another competent worker, the same conditions would still be waiting?",
    "Which latent conditions on our site do we all know about and work around every day?"
  ],
  reflect: "What is one hole in a defence on your site that you have walked past more than once?",
  quiz: [
    { q: "A maintenance backlog that leaves a warning light broken for months is:", options: ["An active failure", "A latent condition", "A violation", "An unsafe act"], answer: 1, why: "It was created upstream and sat unnoticed until it mattered." },
    { q: "The system approach to error assumes:", options: ["Good workers do not make errors", "Errors are expected, so defences must be robust", "Blame improves performance", "Training removes error"], answer: 1, why: "It asks why defences failed, not who failed." },
    { q: "In the model, an accident occurs when:", options: ["One layer fails completely", "A worker violates a rule", "Holes in several layers line up", "PPE is not worn"], answer: 2, why: "The hazard needs a path through every defence." }
  ],
  sources: [
    "Reason, J. (1990). Human Error. Cambridge University Press.",
    "Reason, J. (2000). Human error: models and management. BMJ, 320(7237), 768-770.",
    "Reason, J., Hollnagel, E., & Paries, J. (2006). Revisiting the Swiss cheese model of accidents. EUROCONTROL Experimental Centre, EEC Note 13/06.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w1-l5", week: 1, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "The curse of knowledge and the one-message talk",
  book: "Yates, Ch. 19: Training",
  bigIdea: "Once you know something well, you can no longer remember what it was like not to know it. That is why the talk that felt perfectly clear to you left the crew with nothing.",
  why: "Safety professionals speak to crews every day. A toolbox talk with seven points has, in practice, no points. One message that is still remembered at the end of the shift does more than a complete briefing that is forgotten by the gate.",
  science: [
    "In 1990 Elizabeth Newton, a Stanford graduate student, asked people to tap the rhythm of well-known songs on a table while a listener tried to name the tune. Tappers predicted listeners would get it right about half the time. Out of 120 songs, listeners named 3, which is 2.5 percent.",
    "The tappers could hear the melody in their heads. The listeners heard knocking. Economists Camerer, Loewenstein and Weber had named this effect the <b>curse of knowledge</b> in 1989, and Chip and Dan Heath made the tapping study famous in <i>Made to Stick</i> (2007).",
    "When you brief a crew on something you have studied, you are the tapper. Your head is full of the regulation, the incident, the reasoning. They hear a list."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The curse of knowledge is well supported in economics and psychology. Newton's tapping study itself is an unpublished doctoral dissertation, so its exact figures are known mainly through the Heaths' account. Use it as a vivid illustration, not as precise data.",
  work: [
    "Listen to a typical toolbox talk and count the separate instructions. It is common to reach ten in three minutes. Then ask a crew member an hour later what the talk was about.",
    "The fix is not to say less about safety overall. It is to say one thing per talk, say it concretely, and have the crew say it back in their own words."
  ],
  techniques: [
    { name: "One message, one sentence", how: "Before any talk, write the single sentence you want repeated at the end of the shift. If you cannot write it, you are not ready to speak." },
    { name: "Make it concrete", how: "Swap abstractions for things people can picture. \"Maintain situational awareness\" becomes \"before you step out of the cab, look for the truck.\"" },
    { name: "Teach-back", how: "End with \"tell me in your own words what we are doing differently today.\" If they cannot, the gap is in the talk." }
  ],
  assignment: { level: "Practise", task: "Deliver one toolbox talk this week built around a single sentence. One hour later, ask two people from that crew what the talk was about and write down exactly what they say.", stretch: "Ask a colleague to count how many separate instructions you gave." },
  discuss: [
    "Can you recall the message of the last toolbox talk you attended? What does your answer suggest?",
    "Would you agree that if the crew cannot repeat it, we have not really said it?",
    "What would we have to leave out to get down to one message, and where else could that information go?"
  ],
  reflect: "What do you explain so often that you have stopped noticing whether people follow it?",
  quiz: [
    { q: "In Newton's study, tappers predicted about 50% success. Listeners actually scored:", options: ["40%", "25%", "10%", "2.5%"], answer: 3, why: "3 of 120 songs were identified." },
    { q: "The curse of knowledge means:", options: ["Experts know too little", "Knowing something makes it hard to imagine not knowing it", "Training always fails", "Listeners do not care"], answer: 1, why: "The expert hears the tune; the audience hears taps." },
    { q: "The best check that a talk worked is:", options: ["A signed attendance sheet", "The speaker felt it went well", "The crew can say the message back in their own words", "It lasted the planned time"], answer: 2, why: "Teach-back tests what was received, not what was sent." }
  ],
  sources: [
    "Newton, E. L. (1990). The rocky road from actions to intentions. Doctoral dissertation, Stanford University.",
    "Camerer, C., Loewenstein, G., & Weber, M. (1989). The curse of knowledge in economic settings. Journal of Political Economy, 97(5), 1232-1254.",
    "Heath, C., & Heath, D. (2007). Made to Stick. Random House.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 19. CRC Press."
  ]
},
{
  id: "w2-l1", week: 2, n: 1, track: "safety", area: "Measuring performance", minutes: 25,
  title: "Reading injury rates without being fooled",
  book: "Yates, Ch. 3: Recording and Reporting Occupational Injuries and Illnesses; Ch. 36: Measuring Safety and Health Performance",
  bigIdea: "An injury rate is a count divided by hours and multiplied by a constant. Know the formula and the constant, and you can check any number put in front of you. Know its limits, and you will stop celebrating noise.",
  why: "Managers judge safety departments on these rates. If you cannot calculate one by hand, explain what the multiplier means, or say why a small site's rate jumps around, you cannot defend your numbers or question someone else's.",
  science: [
    "The OSHA incidence rate is <b>(number of cases x 200,000) / total hours worked</b>. The 200,000 stands for 100 full-time workers doing 40 hours a week for 50 weeks. So the result reads as \"cases per 100 full-time workers per year\". Count all recordable cases and you get the total case rate (TCIR or TRIR). Count only cases with days away, restriction or transfer and you get the DART rate.",
    "Many mining companies report frequency rates <b>per 1,000,000 hours</b> instead, such as the lost time injury frequency rate (LTIFR). Same formula, different constant. A rate per million hours is five times the rate per 200,000 for the same data. Always ask which base a number uses before comparing.",
    "Rates built from small counts are unstable. A site with 400,000 hours and one lost time injury has an LTIFR of 2.5. One more injury doubles it. Nothing about the underlying risk has doubled. These are also <b>lagging</b> measures: they count harm that has already happened and say little about exposure to fatal risk."
  ],
  evidence: "Established",
  evidenceNote: "The formulas are defined by regulators and industry reporting conventions. The statistical instability of small counts is basic arithmetic.",
  work: [
    "Worked example. A contractor has 3 recordable cases in 480,000 hours. TRIR = 3 x 200,000 / 480,000 = 1.25. The same data per million hours = 3 x 1,000,000 / 480,000 = 6.25.",
    "Check your own site's definitions too. What counts as recordable, lost time or restricted work differs between OSHA rules, company standards and local regulation. Ghana's mining requirements sit in the Minerals and Mining (Health, Safety and Technical) Regulations, 2012 (L.I. 2182), so confirm what your site reports against."
  ],
  techniques: [
    { name: "Ask three questions of any rate", how: "What is counted in the top line? Over how many hours? Multiplied by what constant?" },
    { name: "Show the count beside the rate", how: "Report \"LTIFR 2.5 (1 injury, 400,000 hours)\". It stops people over-reading small changes." },
    { name: "Pair it with a leading measure", how: "Next to each rate, report something about controls: critical control verifications completed, actions closed on time, hazards fixed." }
  ],
  assignment: { level: "Practise", task: "Get last year's hours worked and injury counts for your department or a contractor. Calculate the rate by hand on both the 200,000 and the 1,000,000 base. Compare with the officially reported figure and explain any difference.", stretch: "Work out how much the rate would move if there had been one more, or one fewer, case." },
  discuss: [
    "If our rate halved this year on two fewer injuries, would you be confident our risk had halved?",
    "Would you agree that a number we cannot recalculate ourselves is a number we cannot fully trust?",
    "What do we measure today that would warn us before someone is hurt?"
  ],
  reflect: "Which number does your site celebrate that you now suspect is mostly chance?",
  quiz: [
    { q: "A site has 4 recordable cases in 640,000 hours. The TRIR (200,000 base) is:", options: ["0.8", "1.25", "2.5", "6.25"], answer: 1, why: "4 x 200,000 / 640,000 = 1.25." },
    { q: "The 200,000 in the OSHA formula represents:", options: ["Average annual hours for a mine", "100 workers x 40 hours x 50 weeks", "A legal exposure limit", "Hours in 20 years"], answer: 1, why: "It converts the result to cases per 100 full-time workers." },
    { q: "2 lost time injuries in 800,000 hours gives an LTIFR per million hours of:", options: ["0.5", "1.6", "2.5", "4.0"], answer: 2, why: "2 x 1,000,000 / 800,000 = 2.5." }
  ],
  sources: [
    "OSHA. 29 CFR 1904, Recording and Reporting Occupational Injuries and Illnesses; and OSHA incidence rate guidance.",
    "Minerals and Mining (Health, Safety and Technical) Regulations, 2012 (L.I. 2182), Ghana.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 3 and Ch. 36. CRC Press."
  ]
},
{
  id: "w2-l2", week: 2, n: 2, track: "safety", area: "Accident causation", minutes: 25,
  title: "Heinrich's triangle: what to keep and what to drop",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "The triangle taught the profession to care about near misses. It also planted two ideas that do not hold up: that most accidents are the worker's fault, and that fewer small injuries will automatically mean fewer deaths.",
  why: "You will meet the triangle in almost every induction and exam, including the one this book prepares for. A strong safety professional can explain it, and can also explain where it misleads, without dismissing either side.",
  science: [
    "H. W. Heinrich, working for an insurer, published <i>Industrial Accident Prevention</i> in 1931. He proposed that for every major injury there are 29 minor injuries and 300 no-injury accidents. He also claimed 88 percent of accidents are caused by unsafe acts of persons, 10 percent by unsafe conditions and 2 percent are unpreventable. Frank Bird later proposed a different ratio from insurance data, 1 serious injury to 10 minor injuries, 30 property damage events and 600 near misses.",
    "Fred Manuele examined Heinrich's work in <i>Heinrich Revisited</i> (2002) and in a 2011 Professional Safety paper. He found that the original research files do not exist, that the ratios changed between editions without explanation, and that the 88 percent figure pushes prevention toward the worker and away from the system in which the work is done.",
    "Manuele's second point matters most in mining: reducing the frequency of minor injuries does not reduce serious injuries and fatalities by the same proportion. Fatal events often have different causes from cut fingers and sprains."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "That Heinrich published these ratios is historical fact. Their validity is disputed, and the critique is itself peer reviewed. The idea that only some minor events carry fatal potential is now widely held but still being researched.",
  work: [
    "A site can have an excellent recordable rate and still be one event from a fatality, because the things that kill people (vehicle interaction, falls of ground, energy release, working at height) are rarely the things that fill the first aid register.",
    "Keep what works: reporting and learning from events that did not hurt anyone. Drop what does not: treating every near miss as equally important, and reading worker error as the cause."
  ],
  techniques: [
    { name: "Sort by potential, not outcome", how: "For each near miss ask: under slightly different conditions, could this have killed someone? Investigate those deeply, whatever the actual outcome." },
    { name: "Track the fatal risks separately", how: "Keep a short list of your site's fatal risks and report on the health of their controls, apart from the injury rate." },
    { name: "Challenge \"88 percent\" calmly", how: "When someone says most accidents are caused by unsafe acts, ask what made the act likely. You are not arguing; you are continuing the investigation." }
  ],
  assignment: { level: "Investigate", task: "Review the last 20 near-miss or hazard reports on your site. Mark each as having fatal potential or not. Compare how much investigation effort each group received.", stretch: "Read Manuele's 2011 paper and write five lines on which of his arguments you find strongest and weakest." },
  discuss: [
    "Of our last 20 reports, how many could realistically have been fatal? Did they get more attention than the rest?",
    "Would you agree that a low injury rate and a low fatality risk are two different things?",
    "If we stopped saying \"unsafe act\", what would we have to say instead?"
  ],
  reflect: "Which of your own beliefs about accident causes came from a slide you never questioned?",
  quiz: [
    { q: "Heinrich's ratio of major injury : minor injuries : no-injury accidents was:", options: ["1 : 10 : 600", "1 : 29 : 300", "1 : 30 : 300", "1 : 100 : 1000"], answer: 1, why: "1-29-300, published in 1931." },
    { q: "One of Manuele's main criticisms is that:", options: ["Heinrich ignored near misses", "The original research files do not exist and ratios changed between editions", "The triangle is too recent", "It applies only to mining"], answer: 1, why: "The research cannot be reviewed or verified." },
    { q: "The most defensible use of near-miss data is to:", options: ["Predict next year's fatalities from the count", "Find and deeply investigate events with serious potential", "Rank workers by number of reports", "Prove 88% of accidents are unsafe acts"], answer: 1, why: "Potential severity, not frequency, should drive attention." }
  ],
  sources: [
    "Heinrich, H. W. (1931). Industrial Accident Prevention: A Scientific Approach. McGraw-Hill.",
    "Manuele, F. A. (2002). Heinrich Revisited: Truisms or Myths. National Safety Council.",
    "Manuele, F. A. (2011). Reviewing Heinrich: Dislodging two myths from the practice of safety. Professional Safety, 56(10), 52-61.",
    "Bird, F. E., & Germain, G. L. (1985). Practical Loss Control Leadership. International Loss Control Institute.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w2-l3", week: 2, n: 3, track: "people", area: "Behavioural influence", minutes: 20,
  title: "Small yes, big yes: commitment and consistency",
  book: null,
  bigIdea: "People work hard to stay consistent with what they have already said and done. A small, voluntary, visible yes today makes a larger yes far more likely later.",
  why: "Most of your job is getting people to do things you cannot force. Asking for the big change first, backed by the rulebook, invites resistance. Starting with something small that people choose for themselves builds the identity of someone who works safely.",
  science: [
    "In 1966 Jonathan Freedman and Scott Fraser went door to door in Palo Alto, California. One group of homeowners was asked to put a large, ugly \"Drive Carefully\" sign on their front lawn. About 17 percent agreed. A second group had been asked two weeks earlier to display a small \"Be a safe driver\" sign. Of those, 76 percent agreed to the large sign.",
    "They called it the <b>foot-in-the-door</b> technique. Robert Cialdini later made <b>commitment and consistency</b> one of the principles in <i>Influence</i> (1984). His reading: agreeing to the small request changed how people saw themselves. They had become people who support safe driving, and then acted to match.",
    "Cialdini notes commitments bind most strongly when they are <b>active</b> (the person does or says something), <b>public</b> (others see it), <b>effortful</b>, and <b>freely chosen</b>. A commitment made under pressure produces compliance while you are watching and little else."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The original experiment is a classic and the effect has been repeated many times, but later studies show mixed results and it depends on conditions. Jerry Burger's 1999 review sets out when it works and when it does not.",
  work: [
    "Compare two approaches with a crew that resists seat belts in light vehicles. One: announce that anyone caught without a belt will be disciplined. Two: ask each driver, in front of the crew, \"what would you want your passenger to do before you move off?\" and let them say it.",
    "In the second, the standard came out of their own mouth. The next request, to check passengers before moving, is now consistent with something they already said."
  ],
  techniques: [
    { name: "Ask, do not tell", how: "Turn the instruction into a question whose honest answer is the behaviour you want. Let the person state the standard." },
    { name: "Start with the small visible yes", how: "Ask for one easy, public action first: signing a crew-written pledge, choosing the crew's own pre-start check." },
    { name: "Let them write it", how: "Have the crew write their own three rules for a task. People defend what they wrote." }
  ],
  assignment: { level: "Practise", task: "Choose one behaviour you have struggled to change. This week, replace one instruction with a question that lets the person state the safe standard themselves. Record what they said and what they did afterwards.", stretch: "Use it with the person on site you find hardest to influence." },
  discuss: [
    "Do you find it easier to keep a promise you made yourself, or a rule someone handed you?",
    "Would you agree that people rarely argue with their own words?",
    "Where is the line between influencing someone for their safety and manipulating them? How would we know we had crossed it?"
  ],
  reflect: "Use this honestly. If you would be uncomfortable explaining to the person exactly what you did and why, do not do it.",
  quiz: [
    { q: "In Freedman and Fraser's study, agreement to the large sign rose from about 17% to:", options: ["30%", "48%", "76%", "95%"], answer: 2, why: "Among those who had earlier accepted the small sign." },
    { q: "Commitments are strongest when they are:", options: ["Private and forced", "Active, public, effortful and freely chosen", "Written by management", "Rewarded with money"], answer: 1, why: "Cialdini's four conditions." },
    { q: "Which request uses the principle best?", options: ["\"Wear your belt or face discipline\"", "\"The rule says belts are mandatory\"", "\"What do you check before you move off with a passenger?\"", "\"I will be watching\""], answer: 2, why: "The person states the standard themselves." }
  ],
  sources: [
    "Freedman, J. L., & Fraser, S. C. (1966). Compliance without pressure: The foot-in-the-door technique. Journal of Personality and Social Psychology, 4(2), 195-202.",
    "Cialdini, R. B. (1984; rev. 2021). Influence: The Psychology of Persuasion. Harper Business.",
    "Burger, J. M. (1999). The foot-in-the-door compliance procedure: A multiple-process analysis and review. Personality and Social Psychology Review, 3(4), 303-325."
  ]
},
{
  id: "w2-l4", week: 2, n: 4, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Decibels do not add: the 3 dB rule",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "The decibel scale is logarithmic. A rise of 3 dB doubles the sound energy reaching the ear. So 88 is not \"a bit more\" than 85. It is twice the dose.",
  why: "Noise-induced hearing loss is permanent, painless and slow, which makes it easy to ignore. If you read decibels as if they were ordinary numbers, you will badly underestimate exposures and overestimate how long someone can safely stay.",
  science: [
    "Because the scale is logarithmic, two identical machines at 90 dB each produce 93 dB together, not 180. Every 3 dB step doubles the sound energy. A 10 dB step is ten times the energy, and is heard as roughly twice as loud.",
    "NIOSH recommends an exposure limit of <b>85 dBA as an 8-hour time-weighted average</b>, with a <b>3 dB exchange rate</b>: for every 3 dB increase, allowable time halves. That gives 4 hours at 88 dBA, 2 hours at 91, 1 hour at 94 and about 15 minutes at 100.",
    "OSHA's legal limit in the United States is 90 dBA over 8 hours with a 5 dB exchange rate, and a hearing conservation programme is required from 85 dBA. NIOSH's 1998 criteria document estimated the excess risk of hearing loss over a 40-year working life at 8 percent at 85 dBA and 25 percent at 90 dBA, and stated the 3 dB rate is better supported by the science."
  ],
  evidence: "Established",
  evidenceNote: "The physics is fixed. The NIOSH and OSHA limits are published values. Limits differ by country, so confirm the figures that apply on your site.",
  work: [
    "A drill rig cab measures 97 dBA with the door open. On the NIOSH basis that is 12 dB over 85, which is four halvings: 8 hours becomes 30 minutes. An operator who keeps the door open for airflow for half the shift has taken many times the recommended daily dose.",
    "Now apply the hierarchy from Week 1. Fix the cab seal and air conditioning before reaching for earplugs. Hearing protection in real use delivers less than its labelled rating, because fit is rarely perfect."
  ],
  techniques: [
    { name: "Count the threes", how: "Subtract 85 from the measured level, divide by 3, and halve 8 hours that many times. It gives a fast field estimate of allowable time." },
    { name: "Arm's length test", how: "If you must raise your voice to be understood by someone an arm's length away, the level is probably hazardous and should be measured." },
    { name: "Ask why protection is needed at all", how: "Wherever you see mandatory hearing protection signs, ask what engineering control was considered first." }
  ],
  assignment: { level: "Practise", task: "Find the most recent noise survey for an area you cover. Pick three measured levels above 85 dBA and calculate the allowable exposure time for each on the 3 dB basis. Compare with how long people actually spend there.", stretch: "For the worst of the three, propose one engineering control and estimate the reduction it would need to achieve." },
  discuss: [
    "If a reading went from 85 to 91, how much more dose is that? Did the answer surprise anyone?",
    "Would you agree that a harm nobody feels is one we are likely to under-control?",
    "Where on site do we rely on earplugs for a problem that engineering could reduce?"
  ],
  reflect: "How many people on your site already have hearing loss they do not know about?",
  quiz: [
    { q: "Two identical machines each produce 90 dB. Together they produce about:", options: ["180 dB", "100 dB", "93 dB", "91 dB"], answer: 2, why: "Doubling the energy adds 3 dB." },
    { q: "On the NIOSH basis, allowable time at 94 dBA is:", options: ["4 hours", "2 hours", "1 hour", "15 minutes"], answer: 2, why: "85 to 94 is three halvings of 8 hours." },
    { q: "NIOSH's recommended exposure limit and exchange rate are:", options: ["90 dBA, 5 dB", "85 dBA, 3 dB", "85 dBA, 5 dB", "80 dBA, 3 dB"], answer: 1, why: "85 dBA as an 8-hour TWA with a 3 dB exchange rate." }
  ],
  sources: [
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria. DHHS (NIOSH) Publication No. 98-126.",
    "OSHA. 29 CFR 1910.95, Occupational Noise Exposure.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w2-l5", week: 2, n: 5, track: "people", area: "Leadership and culture", minutes: 20,
  title: "Psychological safety: why the best teams report more",
  book: "Yates, Ch. 21: Management Theories",
  bigIdea: "A team that reports many problems is not necessarily a team with many problems. It may be the only team telling you the truth.",
  why: "Everything a safety department does depends on people telling you what is really happening. If speaking up costs them embarrassment or trouble, your near-miss numbers measure fear, not risk.",
  science: [
    "In the 1990s Amy Edmondson studied hospital nursing units, expecting better-led teams to make fewer medication errors. The data showed the opposite: the better teams had higher recorded error rates. Looking closer, she concluded they were not making more errors. They were more willing to report and discuss them. She published this in 1996.",
    "In a 1999 study of 51 work teams in a manufacturing company, she defined <b>team psychological safety</b> as a shared belief that the team is safe for interpersonal risk-taking. Teams with more of it showed more learning behaviour, such as asking for help, admitting mistakes and seeking feedback, and that learning behaviour was linked to better performance.",
    "Edmondson is clear about what it is not. It is not being nice, lowering standards or avoiding accountability. High standards with low psychological safety produce anxiety and silence. High standards with high psychological safety produce learning."
  ],
  evidence: "Established",
  evidenceNote: "Both studies are peer reviewed and the finding has been repeated across many industries since. Most of the evidence shows association, so be careful about claiming it directly causes fewer injuries.",
  work: [
    "Watch what happens in the ten seconds after someone reports a mistake. If the first response is \"who did that?\", the crew learns to stay quiet. If it is \"thank you, tell me more\", the crew learns reports are welcome.",
    "A sudden drop in near-miss reports after someone was disciplined is not an improvement. It is information going underground."
  ],
  techniques: [
    { name: "Thank first", how: "Make \"thank you for telling me\" your automatic first response to any bad news, before any question." },
    { name: "Go first", how: "Share a mistake of your own at a pre-start. Leaders admitting fallibility is one of the behaviours Edmondson found opens the door for others." },
    { name: "Ask what you are missing", how: "End inspections with \"what am I not seeing here that you would fix if it were up to you?\"" }
  ],
  assignment: { level: "Practise", task: "At one meeting this week, describe a mistake you made at work and what you learned from it. Afterwards, note whether anyone else offered one of their own.", stretch: "Ask a crew member privately: \"what happens here when someone reports a mistake?\" Write down the answer word for word." },
  discuss: [
    "If one crew reports ten near misses a month and another reports none, which crew are you more worried about?",
    "Would you agree that people decide whether to speak up based on what happened to the last person who did?",
    "What is one thing each of us does, without meaning to, that makes people less likely to tell us bad news?"
  ],
  reflect: "When did you last stay silent about something at work, and what were you protecting yourself from?",
  quiz: [
    { q: "Edmondson found better-led hospital teams recorded more errors because they:", options: ["Were less skilled", "Had sicker patients", "Were more willing to report and discuss errors", "Had more staff"], answer: 2, why: "Reporting reflected openness, not error frequency." },
    { q: "Psychological safety is best defined as:", options: ["Freedom from physical hazards", "A shared belief the team is safe for interpersonal risk-taking", "Never being criticised", "Low performance standards"], answer: 1, why: "Edmondson's 1999 definition." },
    { q: "High standards combined with low psychological safety tends to produce:", options: ["Learning", "Comfort", "Anxiety and silence", "Apathy"], answer: 2, why: "People hide problems to protect themselves." }
  ],
  sources: [
    "Edmondson, A. C. (1996). Learning from mistakes is easier said than done. The Journal of Applied Behavioral Science, 32(1), 5-28.",
    "Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350-383.",
    "Edmondson, A. C. (2018). The Fearless Organization. Wiley.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 21. CRC Press."
  ]
}
];
