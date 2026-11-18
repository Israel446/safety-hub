/* Weeks 3 and 4: accident causation and investigation (Yates Ch. 22), cognitive biases, asking better questions. */
window.LESSONS.push(
{
  id: "w3-l1", week: 3, n: 1, track: "safety", area: "Accident causation", minutes: 25,
  title: "Three families of accident model",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "Every investigator carries a model of how accidents happen, even one they've never named. That model decides what you look for, and so what you find.",
  why: "If your model is a chain, you will find a broken link. If it is a set of barriers, you will find holes. If it is a system, you will find pressures and trade-offs. Knowing all three lets you choose, instead of defaulting to the one you were first taught.",
  science: [
    "Erik Hollnagel groups accident models into three families. <b>Sequential</b> models treat an accident as a chain of events. Heinrich's 1931 domino model is the classic: social environment, fault of the person, unsafe act or condition, accident, injury. Remove one domino and the chain stops.",
    "<b>Epidemiological</b> models borrow from public health. John Gordon argued in 1949 that accidents, like disease, come from the interaction of host, agent and environment. William Haddon's matrix and Reason's Swiss cheese belong here: harm needs several conditions to be present together, some of them long-standing.",
    "<b>Systemic</b> models hold that accidents can emerge from normal work with nothing obviously broken. Jens Rasmussen (1997) described organisations drifting toward the boundary of safe operation under cost and workload pressure. Nancy Leveson's STAMP (2004) treats safety as a control problem, and Hollnagel's FRAM looks at how everyday variability combines."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The models themselves are well documented. Which one finds more, or prevents more, has rarely been tested head to head. Treat them as lenses, not as rival truths.",
  work: [
    "A grader clips a parked light vehicle. Sequential view: the operator did not check the mirror. Epidemiological view: the mirror was cracked, the parking bay was unmarked, the spotter rule had lapsed. Systemic view: the haul road was being regraded during shift change because production would not release it earlier.",
    "All three are true. Each points to a different kind of fix, and only the last one explains why the same thing will happen at another site next month."
  ],
  techniques: [
    { name: "Name your model", how: "Before starting an investigation, write which model your method assumes. A timeline is sequential. A barrier analysis is epidemiological." },
    { name: "Run a second lens", how: "After your first analysis, ask one question from another family. After a timeline, ask: what pressures made this timing normal?" },
    { name: "Match depth to potential", how: "A sequential model is fine for a low-potential event. Events with fatal potential deserve the systemic questions." }
  ],
  assignment: { level: "Think", task: "Take one closed investigation. Decide which model family it used. Then write three findings it would have reached if it had used one of the other two.", stretch: "Read the abstract and conclusion of Rasmussen (1997) and explain 'drift' to a colleague in two minutes." },
  discuss: [
    "Which of the three would describe most of our investigation reports?",
    "Can we agree that we only find what our method lets us look for?",
    "What is one pressure on this site that no timeline would ever show?"
  ],
  reflect: "Which model were you taught first, and how much of your thinking still runs on it?",
  quiz: [
    { q: "Heinrich's domino model is an example of a:", options: ["Systemic model", "Sequential model", "Epidemiological model", "Statistical model"], answer: 1, why: "It describes a linear chain of events." },
    { q: "Rasmussen's 'drift' describes:", options: ["Equipment wear over time", "Organisations moving toward the boundary of safe operation under pressure", "Workers changing shifts", "Dust movement in a pit"], answer: 1, why: "Normal pressures gradually erode safety margins." },
    { q: "The Swiss cheese model is usually classed as:", options: ["Sequential", "Epidemiological", "Systemic", "None of these"], answer: 1, why: "Harm requires several latent and active conditions together." }
  ],
  sources: [
    "Hollnagel, E. (2004). Barriers and Accident Prevention. Ashgate.",
    "Gordon, J. E. (1949). The epidemiology of accidents. American Journal of Public Health, 39(4), 504-515.",
    "Rasmussen, J. (1997). Risk management in a dynamic society: A modelling problem. Safety Science, 27(2-3), 183-213.",
    "Leveson, N. (2004). A new accident model for engineering safer systems. Safety Science, 42(4), 237-270.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w3-l2", week: 3, n: 2, track: "safety", area: "Investigation", minutes: 25,
  title: "The first hour: preserving evidence",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "Most of what an investigation will ever know is decided in the first hour. Evidence that is moved, cleaned, overwritten or talked over cannot be recovered later.",
  why: "You are often the first safety person at a scene, with a supervisor keen to restart. What you protect in that hour sets the ceiling on every finding that follows.",
  science: [
    "Guidance from regulators such as the UK HSE (HSG245) and OSHA puts the order plainly: make the area safe and care for the injured first, then preserve the scene, then gather evidence. Nothing about evidence justifies delaying help.",
    "A common way to sort evidence is the <b>four Ps</b>: <b>people</b> (what witnesses saw and did), <b>positions</b> (where things and people were), <b>parts</b> (equipment, failed components, PPE) and <b>paper</b> (permits, logs, procedures, electronic records). Positions and people are the most fragile. Parts and paper usually last longer, though machine data can be overwritten within hours.",
    "Witness memory is easily contaminated. Gabbert, Memon and Allan (2003) showed pairs of people slightly different videos of the same event and let them talk. <b>71 percent</b> of those who discussed it went on to report details they had not seen themselves."
  ],
  evidence: "Established practice",
  evidenceNote: "The sequence comes from regulator guidance, not experiments. The memory finding is a controlled laboratory study and has been repeated.",
  work: [
    "At the scene: barricade wider than you think you need. Photograph wide, then medium, then close, before anything is moved. Note what has already been moved and by whom. Ask the control room to save radio recordings, dispatch records and fleet data now.",
    "Keep witnesses apart and get a short first account from each, in their own words, before they compare stories. Check what your site procedure and L.I. 2182 require about notifying the inspector and leaving a serious accident scene undisturbed."
  ],
  techniques: [
    { name: "Wide, medium, close", how: "Three photographs of everything: one showing where it sits in the scene, one showing the item, one showing the detail. Include something for scale." },
    { name: "Freeze the data", how: "Keep a short list of who to call to preserve electronic records, and how long each system keeps them." },
    { name: "Separate, then ask one question", how: "\"Tell me what you saw, from the start.\" Write it down as said. The detailed interview comes later." }
  ],
  assignment: { level: "Investigate", task: "Find out how long your site keeps each of these before it is overwritten: two-way radio recordings, fleet or dispatch data, CCTV, gate access logs. Write the answers and who can preserve each.", stretch: "Build a one-page first-hour card for your department from what you found." },
  discuss: [
    "At our last serious event, what was moved or cleaned before anyone photographed it?",
    "An hour's delay in restarting costs less than an investigation with no evidence. Is that a fair trade?",
    "Who here knows how to get the radio recording saved at two in the morning?"
  ],
  reflect: "If something serious happened on your next shift, what is the first thing you would lose?",
  quiz: [
    { q: "The first priority at any incident scene is:", options: ["Photographs", "Witness statements", "Making the area safe and caring for the injured", "Securing documents"], answer: 2, why: "Evidence never comes before people." },
    { q: "Which evidence is usually most fragile?", options: ["Permits", "Positions and people's memories", "Failed components", "Procedures"], answer: 1, why: "Scenes get disturbed and memories change quickly." },
    { q: "In Gabbert et al. (2003), what share of witnesses who talked together reported things they had not seen?", options: ["11%", "31%", "51%", "71%"], answer: 3, why: "Discussion contaminates memory, so separate witnesses early." }
  ],
  sources: [
    "Health and Safety Executive (2004). Investigating accidents and incidents (HSG245). HSE Books.",
    "OSHA (2015). Incident [Accident] Investigations: A Guide for Employers.",
    "Gabbert, F., Memon, A., & Allan, K. (2003). Memory conformity: Can eyewitnesses influence each other's memories for an event? Applied Cognitive Psychology, 17(5), 533-543.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w3-l3", week: 3, n: 3, track: "people", area: "Cognitive biases", minutes: 20,
  title: "Hindsight bias: why it all looks obvious afterwards",
  book: null,
  bigIdea: "Once you know how something ended, you cannot un-know it. The outcome makes the warning signs look brighter than they ever were to the people living through it.",
  why: "Every investigator starts with the one thing the worker did not have: the ending. Unless you correct for it, your report will say the hazard was obvious, and your recommendation will be that people should pay more attention.",
  science: [
    "In 1975 Baruch Fischhoff gave people an account of a little-known nineteenth-century war between the British and the Gurkhas. Some were told how it ended. Those told an outcome rated that outcome as far more likely, and believed they would have predicted it without being told.",
    "A related effect is <b>outcome bias</b>. Baron and Hershey (1988) showed that people judge the same decision as worse when it happens to turn out badly, even when they know the decision-maker had identical information.",
    "Sidney Dekker describes the investigator's version as looking down into a tunnel from above. You can see every turning the worker missed. The worker, inside the tunnel, saw one stretch at a time, with many signals competing and no label on the one that mattered."
  ],
  evidence: "Established",
  evidenceNote: "Hindsight bias is among the most repeated findings in judgment research, and telling people about it reduces it only slightly. Process, not awareness, is the defence.",
  work: [
    "A report says the operator \"failed to notice\" a hydraulic leak that had been dripping for two days. Afterwards, the leak is the story. Before, it was one of perhaps thirty small defects on an ageing machine, on a shift that was short of a fitter.",
    "The useful question is not why they missed it. It is what the leak looked like among everything else that day, and what would have made it stand out."
  ],
  techniques: [
    { name: "Rebuild the view from inside", how: "List what the person could see, hear and know at each decision point, and what else was demanding attention. Leave out anything learned afterwards." },
    { name: "Strike the hindsight phrases", how: "\"Failed to\", \"should have\", \"did not realise\" and \"obvious\" all describe the gap between what you know now and what they knew then. Replace each with what they did, and why it made sense to them." },
    { name: "Judge the decision, not the result", how: "Ask: with the same information, would this decision have been criticised if nothing had gone wrong?" }
  ],
  assignment: { level: "Practise", task: "Take one investigation report and underline every \"failed to\", \"should have\" and \"did not\". Rewrite three of those sentences to describe what the person did and what they knew at the time.", stretch: "Ask the person involved, if you can, what was competing for their attention." },
  discuss: [
    "Think of a decision of yours that turned out badly. Was it a bad decision, or a reasonable one with a bad result?",
    "If it were us, we'd want to be judged on what we knew at the time, wouldn't we?",
    "Which phrases in our report template build hindsight in before we start?"
  ],
  reflect: "How often have you said \"I knew that would happen\" about something you did nothing to stop?",
  quiz: [
    { q: "Hindsight bias is the tendency to:", options: ["Forget past events", "See past outcomes as more predictable than they were", "Blame equipment", "Trust first impressions"], answer: 1, why: "Knowing the outcome inflates how foreseeable it seems." },
    { q: "Outcome bias means judging a decision by:", options: ["The information available", "How it happened to turn out", "Who made it", "How long it took"], answer: 1, why: "The same decision is rated worse after a bad result." },
    { q: "The most reliable defence against hindsight is:", options: ["Being aware of it", "Experience", "Reconstructing what the person knew at each point", "A longer report"], answer: 2, why: "Awareness alone barely reduces the bias." }
  ],
  sources: [
    "Fischhoff, B. (1975). Hindsight is not equal to foresight: The effect of outcome knowledge on judgment under uncertainty. Journal of Experimental Psychology: Human Perception and Performance, 1(3), 288-299.",
    "Baron, J., & Hershey, J. C. (1988). Outcome bias in decision evaluation. Journal of Personality and Social Psychology, 54(4), 569-579.",
    "Dekker, S. (2014). The Field Guide to Understanding 'Human Error' (3rd ed.). Ashgate."
  ]
},
{
  id: "w3-l4", week: 3, n: 4, track: "safety", area: "Investigation", minutes: 25,
  title: "Interviewing witnesses without leading them",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "Memory is rebuilt each time it is recalled, and your questions are part of the building material. A single word in a question can change what a witness remembers.",
  why: "Witness accounts are usually your richest evidence and your easiest to damage. Most of the damage comes from well-meaning interviewers asking closed, suggestive questions in a hurry.",
  science: [
    "In 1974 Elizabeth Loftus and John Palmer showed people film of car crashes and asked how fast the cars were going when they \"smashed into\" or \"contacted\" each other. The verb changed the answer: about 41 mph for \"smashed\", about 32 mph for \"contacted\". A week later, <b>32 percent</b> of the \"smashed\" group remembered broken glass that was never there, against <b>14 percent</b> of the \"hit\" group.",
    "Ronald Fisher and Edward Geiselman developed the <b>cognitive interview</b> to get more from witnesses without suggestion. Its core moves: build rapport, ask the witness to mentally return to the scene, invite a free account without interruption, and only then probe with open questions.",
    "A 2010 meta-analysis by Memon, Meissner and Fraser found the cognitive interview produces substantially more correct detail than a standard interview, with a small increase in incorrect detail."
  ],
  evidence: "Established",
  evidenceNote: "Both findings are well replicated. Most studies involve crime witnesses, so expect the direction to hold for workplace incidents, not the exact size.",
  work: [
    "Compare \"Was he speeding when he came round the bend?\" with \"Tell me about the vehicle as it came into view.\" The first plants speed, the bend and blame. The second lets the witness give you what they have.",
    "Interview near the scene if it is safe, one person at a time, soon after the event. Say at the start that you are trying to understand what happened, not decide who is at fault. Then keep quiet."
  ],
  techniques: [
    { name: "Free recall first", how: "Open with \"Start wherever you like and tell me everything, even details that seem unimportant.\" Do not interrupt. Note your questions for later." },
    { name: "Take them back", how: "\"Picture where you were standing. What could you see? What could you hear?\" Context brings detail with it." },
    { name: "Neutral verbs only", how: "Use the witness's own words back to them. Never introduce a description they have not used." }
  ],
  assignment: { level: "Practise", task: "Interview a colleague for five minutes about a routine event from yesterday, such as their drive in. Use free recall first and only open questions. Afterwards count how many closed or leading questions slipped out.", stretch: "Record it, with permission, and count how many seconds you let silence run before speaking." },
  discuss: [
    "How many of the questions on our witness statement form can be answered yes or no?",
    "Have you noticed that a witness who feels accused tells you less?",
    "What words do we use in interviews that already contain our conclusion?"
  ],
  reflect: "In your last interview, who did most of the talking?",
  quiz: [
    { q: "In Loftus and Palmer's study, changing the verb in the question changed:", options: ["Nothing", "Only the witness's confidence", "Speed estimates and later memory of broken glass", "The film shown"], answer: 2, why: "Wording altered both the estimate and what was remembered a week later." },
    { q: "A cognitive interview begins with:", options: ["A checklist of closed questions", "Rapport and an uninterrupted free account", "A signed statement", "Showing photographs"], answer: 1, why: "Probing questions come only after free recall." },
    { q: "Which question is least leading?", options: ["Was he on his phone?", "How fast was the truck going when it hit?", "Tell me what you saw from where you stood.", "You saw the barricade was down, didn't you?"], answer: 2, why: "It introduces no detail the witness has not offered." }
  ],
  sources: [
    "Loftus, E. F., & Palmer, J. C. (1974). Reconstruction of automobile destruction. Journal of Verbal Learning and Verbal Behavior, 13(5), 585-589.",
    "Fisher, R. P., & Geiselman, R. E. (1992). Memory-Enhancing Techniques for Investigative Interviewing: The Cognitive Interview. Charles C. Thomas.",
    "Memon, A., Meissner, C. A., & Fraser, J. (2010). The cognitive interview: A meta-analytic review and study space analysis of the past 25 years. Psychology, Public Policy, and Law, 16(4), 340-372.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w3-l5", week: 3, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Open questions and the power of silence",
  book: null,
  bigIdea: "The quality of what you learn depends on the question you ask and on how long you can bear to wait for the answer.",
  why: "Inspections, interviews, coaching and toolbox talks all run on questions. Most of us ask closed ones and answer them ourselves within a second. Learn to wait three seconds. It costs nothing and you'll hear things you've been missing.",
  science: [
    "Mary Budd Rowe recorded hundreds of classroom lessons in the 1970s. Teachers waited on average about <b>one second</b> after asking a question before speaking again. When they were trained to wait <b>three seconds or more</b>, students gave longer answers, offered more unprompted contributions, and fewer failed to respond at all.",
    "She found a second pause mattered as much: waiting after the answer, before reacting. That is when people add the part they were unsure about.",
    "Open questions begin with what, how, tell me, describe. Closed questions can be answered yes or no. Investigative interviewing models such as the UK's PEACE framework teach <b>TED</b> prompts: Tell me, Explain, Describe. Closed questions still have a place, at the end, to confirm specifics."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Rowe's findings come from classrooms and have been repeated there. Their transfer to workplace conversations is reasonable but less directly studied.",
  work: [
    "On an inspection: \"Is everything OK here?\" gets \"Yes.\" Try \"What is the hardest part of this job to do safely?\" and then count to three in your head.",
    "The silence will feel long to you. To the other person it is thinking time, and a signal that you want a real answer."
  ],
  techniques: [
    { name: "Count three, twice", how: "Three seconds after your question, and three more after their answer, before you speak." },
    { name: "TED openers", how: "\"Tell me about...\", \"Explain how...\", \"Describe what...\". Prepare two before any conversation that matters." },
    { name: "Swap why for what", how: "\"Why did you do that?\" sounds like an accusation. \"What led up to that?\" gets the same information without the defence." }
  ],
  assignment: { level: "Practise", task: "On your next inspection, ask three people one open question each and wait three full seconds. Write down the question and the most useful thing each person told you.", stretch: "Ask a colleague to time your silences without telling you when." },
  discuss: [
    "When someone asks you a question and immediately answers it themselves, what do you conclude about how much they want your view?",
    "Don't people tell you more when they don't feel rushed?",
    "What is one closed question we ask every day that we could reopen?"
  ],
  reflect: "What makes silence uncomfortable for you, and what do you usually fill it with?",
  quiz: [
    { q: "Rowe found the average wait after a teacher's question was about:", options: ["One second", "Five seconds", "Ten seconds", "Thirty seconds"], answer: 0, why: "Extending it to three seconds or more improved responses." },
    { q: "TED stands for:", options: ["Test, Evaluate, Decide", "Tell me, Explain, Describe", "Talk, Engage, Direct", "Time, Event, Detail"], answer: 1, why: "Three openers that invite a full account." },
    { q: "Closed questions are best used:", options: ["To open an interview", "Never", "At the end, to confirm specific facts", "When someone is upset"], answer: 2, why: "They confirm detail once the open account is complete." }
  ],
  sources: [
    "Rowe, M. B. (1986). Wait time: Slowing down may be a way of speeding up! Journal of Teacher Education, 37(1), 43-50.",
    "Milne, R., & Bull, R. (1999). Investigative Interviewing: Psychology and Practice. Wiley."
  ]
},
{
  id: "w3-l6", week: 3, n: 6, track: "craft", area: "Learning how to learn", minutes: 20,
  title: "Spacing and mixing: how to study so it lasts",
  book: null,
  bigIdea: "Studying a little, leaving it, and coming back beats studying a lot at once. Mixing topics beats finishing one before starting the next. Both feel harder while you do them, and both work better.",
  why: "This hub is built on both ideas: lessons revisit earlier weeks on purpose, and the tracks are mixed. If you are preparing for an exam or training others, the same two changes cost nothing.",
  science: [
    "Hermann Ebbinghaus showed in 1885 that memory fades fast at first and then more slowly, and that relearning after a gap takes less effort each time. In 2006 Nicholas Cepeda and colleagues reviewed more than a century of experiments and confirmed that <b>spaced</b> study beats massed study for long-term retention.",
    "In a 2008 study the same group found the best gap depends on how long you need to remember: roughly 10 to 20 percent of that period. To remember for a year, review after a month or two, not the next day.",
    "Doug Rohrer and Kelli Taylor (2007) taught students four types of maths problem. One group practised each type in a block; the other had the types shuffled. The blocked group did better during practice. On a test a week later the shuffled group scored <b>63 percent</b> against <b>20 percent</b>."
  ],
  evidence: "Established",
  evidenceNote: "The spacing effect is one of the oldest and most reliable results in psychology. Interleaving is strongest where the skill is telling similar problems apart.",
  work: [
    "Annual refresher training is massed practice with a twelve-month gap: a full day once, then nothing. The same eight hours split into short sessions through the year would be remembered far better.",
    "Mixing matters for judgement. A crew that practises only fire scenarios in one session learns the drill. A crew given a fire, then a medical case, then a spill has to work out which is which, as they would on the day."
  ],
  techniques: [
    { name: "Review on a widening gap", how: "After a lesson, revisit it the next day, then after a week, then after a month. Three short returns beat one long session." },
    { name: "Shuffle your practice", how: "When revising calculations or procedures, mix the types so you must first decide which method applies." },
    { name: "Trust the difficulty", how: "If practice feels smooth, it is probably too easy to stick. Effort during study is a good sign." }
  ],
  assignment: { level: "Practise", task: "Pick three lessons from weeks 1 and 2. Without opening them, write what you remember of each. Then check. Put a reminder in your phone to do the same in one month.", stretch: "Redesign one annual refresher on your site as four short sessions and show it to whoever owns the training plan." },
  discuss: [
    "What do you remember from the last full-day training you attended?",
    "Feeling confident right after a course tells us little about what we'll know in six months. Has that been your experience?",
    "Which of our trainings could be split up without costing any more time?"
  ],
  reflect: "How much of what you studied for your last qualification could you still use today?",
  quiz: [
    { q: "The spacing effect means that:", options: ["Longer sessions are better", "Study spread over time is retained better than the same study in one block", "Breaks waste time", "Only young people benefit"], answer: 1, why: "Confirmed across more than a century of studies." },
    { q: "In Rohrer and Taylor (2007), a week later the shuffled-practice group scored:", options: ["20% against 63%", "63% against 20%", "The same as the blocked group", "Lower in every case"], answer: 1, why: "Even though blocked practice felt easier at the time." },
    { q: "To remember something for a year, a good first review gap is about:", options: ["One hour", "One day", "One to two months", "One year"], answer: 2, why: "Roughly 10 to 20 percent of the retention period." }
  ],
  sources: [
    "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354-380.",
    "Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. Psychological Science, 19(11), 1095-1102.",
    "Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35(6), 481-498."
  ]
},
{
  id: "w3-l7", week: 3, n: 7, track: "people", area: "Group behaviour", minutes: 20,
  title: "The bystander effect: why everyone saw it and nobody spoke",
  book: null,
  bigIdea: "The more people who can see a problem, the less each one feels it is theirs to act on. Twenty people walking past a hazard is not twenty chances that it gets reported.",
  why: "\"If you see something, say something\" assumes that seeing leads to saying. In a crowd it often does not, and a busy mine is a crowd. Once you understand why, you can design reporting that doesn't wait for a volunteer.",
  science: [
    "In 1968 John Darley and Bibb Latane had students overhear what sounded like another participant having a seizure. When a student believed they were the only listener, <b>85 percent</b> went for help. When they believed four others could also hear, <b>31 percent</b> did. The researchers called this <b>diffusion of responsibility</b>.",
    "In a second study, smoke was pumped into a room. Alone, most people reported it. Sitting with others who stayed calm, most did not. People look to each other to decide whether something is an emergency, and each person's stillness tells the others it is fine.",
    "Later work adds balance. A 2011 meta-analysis by Peter Fischer and colleagues found the effect is weaker when the danger is clear and serious. A 2020 study of street CCTV by Richard Philpot and colleagues found that in about nine out of ten public conflicts at least one bystander stepped in."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The laboratory effect is solid. It shrinks when the situation is unambiguous and dangerous, and real-world intervention is more common than the early studies implied. Ambiguity is what silences people.",
  work: [
    "A handrail is loose on a walkway used by eighty people a shift. Each one assumes it has been reported, because surely somebody has. Each one sees the others walk past, which confirms it cannot be urgent.",
    "The fix is to remove the ambiguity and the anonymity: make it one named person's job, or make it visible whether a report exists."
  ],
  techniques: [
    { name: "Name a person", how: "\"Someone should report that\" fails. \"Kwame, will you log that before break?\" works. Responsibility that is assigned does not diffuse." },
    { name: "Tag it", how: "A dated tag on a reported defect tells everyone else it is known. An untagged defect then clearly needs a report." },
    { name: "Say it out loud", how: "Naming a hazard aloud in a group breaks the shared silence that tells everyone it is fine." }
  ],
  assignment: { level: "Investigate", task: "Find one defect or hazard in a shared area that has clearly been there for some time. Ask five people who pass it whether they noticed it and whether they reported it. Record their reasons.", stretch: "Propose one change that would make it obvious to everyone whether that kind of defect has already been reported." },
  discuss: [
    "Have you ever walked past something assuming it had already been reported?",
    "Isn't it true that 'everyone is responsible' can end up meaning nobody is?",
    "Where on site does the number of people passing make reporting less likely, not more?"
  ],
  reflect: "What did you walk past this week?",
  quiz: [
    { q: "Diffusion of responsibility means:", options: ["Responsibility is shared fairly", "Each person feels less obliged to act as the number of witnesses grows", "Managers delegate tasks", "Nobody saw the event"], answer: 1, why: "Darley and Latane's explanation for reduced helping." },
    { q: "In the seizure study, helping fell from 85% (alone) to about:", options: ["75%", "62%", "31%", "5%"], answer: 2, why: "When the listener believed four others could also hear." },
    { q: "The effect is weakest when:", options: ["The group is large", "The situation is clearly dangerous", "People are strangers", "It is night"], answer: 1, why: "Clear danger removes the ambiguity that keeps people still." }
  ],
  sources: [
    "Darley, J. M., & Latane, B. (1968). Bystander intervention in emergencies: Diffusion of responsibility. Journal of Personality and Social Psychology, 8(4), 377-383.",
    "Fischer, P., et al. (2011). The bystander-effect: A meta-analytic review on bystander intervention in dangerous and non-dangerous emergencies. Psychological Bulletin, 137(4), 517-537.",
    "Philpot, R., Liebst, L. S., Levine, M., Bernasco, W., & Lindegaard, M. R. (2020). Would I be helped? Cross-national CCTV footage shows that intervention is the norm in public conflicts. American Psychologist, 75(1), 66-75."
  ]
},
{
  id: "w4-l1", week: 4, n: 1, track: "safety", area: "Investigation", minutes: 20,
  title: "Five Whys: where it works and where it fails",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "Asking why five times is a good way to get past the first answer. It is a poor way to investigate anything with more than one cause, which is nearly everything serious.",
  why: "Five Whys is on most investigation forms because it is quick and needs no training. You should be able to use it well for small events and explain why large ones need more.",
  science: [
    "The method comes from Toyota, credited to Sakichi Toyoda and described by Taiichi Ohno in his account of the Toyota Production System. Its purpose was to stop engineers fixing the symptom of a machine fault: keep asking why until you reach something you can change.",
    "Alan Card set out the weaknesses in a 2017 paper in BMJ Quality and Safety. The method follows <b>one causal path</b>, when real events have several. It <b>stops at an arbitrary point</b>. Different people reach different answers from the same event. And the investigator can only reach causes they already know about.",
    "A single chain also invites the last why to land on a person, because \"did not follow procedure\" is always available as an answer."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The origin is documented. The criticisms are reasoned argument in a peer-reviewed journal, with little experimental testing either way.",
  work: [
    "A pump trips. Why? Overload. Why? Bearing seized. Why? No lubrication. Why? The lube round was missed. Why? The route sheet was not updated when the pump was installed. That is a good result: one cause, one fix, twenty minutes.",
    "Now try it on a vehicle collision. Each why has three honest answers. Pick one and you have discarded the other two for no reason except the shape of the form."
  ],
  techniques: [
    { name: "Branch it", how: "At every why, ask \"and what else?\" Draw a tree, not a line. This is already most of a cause map." },
    { name: "Test each link", how: "Read the chain backwards with \"therefore\". If a step does not follow, the link is a guess." },
    { name: "Stop on something changeable", how: "End each branch at a condition the organisation can alter. Never end on a person's state of mind." }
  ],
  assignment: { level: "Practise", task: "Take a recent minor event and run a Five Whys. Then go back and at each step ask \"what else?\" Count how many causes the straight line missed.", stretch: "Have a colleague run their own Five Whys on the same event separately and compare end points." },
  discuss: [
    "When we do a Five Whys, how often does the last answer name a person or a procedure?",
    "A serious event rarely has a single cause. Does that match what you've seen?",
    "For which kinds of event is a quick single chain good enough?"
  ],
  reflect: "When did you last stop asking why because you had reached an answer you expected?",
  quiz: [
    { q: "Five Whys was developed at:", options: ["NASA", "Toyota", "DuPont", "Bell Laboratories"], answer: 1, why: "As part of the Toyota Production System." },
    { q: "A main weakness of Five Whys is that it:", options: ["Takes too long", "Needs software", "Follows a single causal path", "Cannot be written down"], answer: 2, why: "Real events have several contributing paths." },
    { q: "A good place to stop a why-chain is at:", options: ["The fifth why exactly", "The worker's attitude", "A condition the organisation can change", "The first procedure breach"], answer: 2, why: "Otherwise the finding cannot be acted on." }
  ],
  sources: [
    "Ohno, T. (1988). Toyota Production System: Beyond Large-Scale Production. Productivity Press.",
    "Card, A. J. (2017). The problem with '5 whys'. BMJ Quality & Safety, 26(8), 671-677.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w4-l2", week: 4, n: 2, track: "safety", area: "Analytical methods", minutes: 30,
  title: "Fault trees and event trees by hand",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques; Ch. 26: Risk Assessment and Management",
  bigIdea: "A fault tree works backwards from an unwanted event to its causes. An event tree works forwards from a starting event to its outcomes. Put them together and you have a bow-tie.",
  why: "These two diagrams sit behind most formal risk studies and appear in every safety exam. You do not need software. If you can draw an AND gate and an OR gate, you can test whether a set of controls is as strong as people believe.",
  science: [
    "Fault tree analysis was developed in 1962 at Bell Laboratories by H. A. Watson for the Minuteman missile launch system. The undesired outcome, the <b>top event</b>, goes at the top. Below it, causes are joined by gates. An <b>AND gate</b> means all inputs must occur. An <b>OR gate</b> means any one is enough.",
    "With probabilities, an AND gate <b>multiplies</b> and an OR gate approximately <b>adds</b> (for small, independent probabilities). So AND gates are where safety comes from: two independent barriers each failing one time in ten fail together one time in a hundred.",
    "An <b>event tree</b> starts with an initiating event and asks at each barrier: does it work or fail? Each path ends in an outcome with its own probability."
  ],
  evidence: "Established",
  evidenceNote: "The logic is mathematics. The numbers you put in are usually estimates, so treat the answer as a comparison tool, not a prediction.",
  work: [
    "Top event: a light vehicle is struck at a pit intersection. It needs the light vehicle to enter without stopping AND a truck to be passing AND the truck not to avoid it. With illustrative figures of 0.01, 0.1 and 0.5 per crossing, that is 0.0005, or 1 in 2,000 crossings.",
    "Now look under \"enters without stopping\": brake failure OR sign not seen OR driver chooses not to stop. That is an OR gate. Any one path is enough, so the weakest branch drives the number. The tree shows you where a control changes the result."
  ],
  techniques: [
    { name: "Hunt for OR gates near the top", how: "An OR gate directly under the top event means a single failure can cause it. Those are your priorities." },
    { name: "Check AND gates for independence", how: "If two barriers share a cause, such as the same power supply or the same tired person, they are not really an AND." },
    { name: "Use it to compare, not predict", how: "Change one input and see how much the top moves. Ignore the absolute number." }
  ],
  assignment: { level: "Practise", task: "Draw a fault tree for one unwanted event on your site, three levels deep, by hand. Mark each gate AND or OR. Circle any single failure that leads straight to the top.", stretch: "Put rough probabilities on it and find which input, if halved, lowers the top event most." },
  discuss: [
    "For our worst credible event, how many things have to go wrong together? Or is one enough?",
    "Two controls that rely on the same person are really one control, aren't they?",
    "Where do we believe we have several barriers when they share a common weakness?"
  ],
  reflect: "Which control on your site is everyone relying on without knowing the others are too?",
  quiz: [
    { q: "Two independent barriers each fail 1 time in 10. Through an AND gate, both fail:", options: ["2 in 10", "1 in 20", "1 in 100", "1 in 10"], answer: 2, why: "0.1 x 0.1 = 0.01." },
    { q: "An OR gate under the top event means:", options: ["All inputs are needed", "Any one input is enough to cause it", "The event cannot happen", "Inputs cancel out"], answer: 1, why: "That is a single point of failure." },
    { q: "An event tree starts from:", options: ["The final consequence", "An initiating event and works forward", "A list of hazards", "A root cause"], answer: 1, why: "A fault tree runs the other way." }
  ],
  sources: [
    "Vesely, W. E., Goldberg, F. F., Roberts, N. H., & Haasl, D. F. (1981). Fault Tree Handbook (NUREG-0492). U.S. Nuclear Regulatory Commission.",
    "IEC 31010:2019, Risk management: Risk assessment techniques.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22 and Ch. 26. CRC Press."
  ]
},
{
  id: "w4-l3", week: 4, n: 3, track: "people", area: "Cognitive biases", minutes: 20,
  title: "Confirmation bias in investigations",
  book: null,
  bigIdea: "Once you have a theory, you start collecting evidence for it and stop noticing evidence against it. The first explanation you hear at a scene is the one you are most at risk of proving.",
  why: "By the time you reach an incident, someone has usually told you what happened. From that moment your questions, your photographs and your choice of witnesses lean toward that story unless you deliberately push the other way.",
  science: [
    "In 1960 Peter Wason gave people the numbers 2, 4, 6 and asked them to discover the rule by proposing other triples. Most guessed \"rising by two\" and tested only triples that fitted, such as 8, 10, 12. Each was confirmed, and they grew confident. The real rule was \"any ascending numbers\". Few tried a triple that could have proved them wrong.",
    "Raymond Nickerson's 1998 review found the same pattern across law, medicine and science. It affects experts too. In 2006 Itiel Dror and colleagues gave five fingerprint examiners prints they had each previously judged a match, with a suggestion that they were not. <b>Four of the five changed their own earlier decision.</b>",
    "In safety, Lundberg, Rollenhagen and Hollnagel (2009) named the result: <b>what you look for is what you find</b>. An investigation manual built around human error finds human error."
  ],
  evidence: "Established",
  evidenceNote: "Confirmation bias is very widely replicated. The fingerprint study is small, with five examiners, but later forensic research points the same way.",
  work: [
    "A supervisor meets you at the gate: \"He was on his phone.\" You now ask about the phone, pull the phone record, and note that he looked distracted. You do not ask about the sun angle, the missing delineators or the radio call that came at the same moment.",
    "None of that is dishonest. It is what a mind does with a ready-made story."
  ],
  techniques: [
    { name: "Hold two stories", how: "Write a second, different explanation before you collect anything. Gather evidence that would separate them." },
    { name: "Look for what would prove you wrong", how: "For your leading theory, ask: if this were false, what would I expect to see? Then go and look for exactly that." },
    { name: "Borrow a fresh pair of eyes", how: "Give the evidence, without your conclusion, to someone who has not heard the story. See where they land." }
  ],
  assignment: { level: "Think", task: "For one open or recent investigation, write the explanation everyone accepts. Then write a different one that fits the same facts. List two pieces of evidence that would tell them apart, and whether anyone collected them.", stretch: "Try the 2-4-6 task on three colleagues and note how many test a triple that breaks their own guess." },
  discuss: [
    "At our last incident, how soon did we have an explanation, and did it change afterwards?",
    "Haven't you found that the first story you hear shapes the questions you ask next?",
    "Who in our team is allowed to argue the other side, and do we ever ask them to?"
  ],
  reflect: "What do you already believe about why incidents happen on your site, and when did you last test it?",
  quiz: [
    { q: "In Wason's 2-4-6 task, most people:", options: ["Found the rule at once", "Tested only examples that fitted their guess", "Refused to guess", "Tested descending numbers first"], answer: 1, why: "They sought confirmation, not disproof." },
    { q: "In Dror et al. (2006), how many of five fingerprint experts changed their own earlier decision?", options: ["None", "One", "Four", "Five"], answer: 2, why: "Contextual suggestion overrode their previous judgement." },
    { q: "The best single defence is to:", options: ["Trust experience", "Decide quickly", "Actively look for evidence that would disprove your theory", "Collect more of the same evidence"], answer: 2, why: "More confirming evidence only increases false confidence." }
  ],
  sources: [
    "Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129-140.",
    "Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175-220.",
    "Dror, I. E., Charlton, D., & Peron, A. E. (2006). Contextual information renders experts vulnerable to making erroneous identifications. Forensic Science International, 156(1), 74-78.",
    "Lundberg, J., Rollenhagen, C., & Hollnagel, E. (2009). What-You-Look-For-Is-What-You-Find. Safety Science, 47(10), 1297-1311."
  ]
},
{
  id: "w4-l4", week: 4, n: 4, track: "safety", area: "Investigation", minutes: 25,
  title: "Corrective actions that survive six months",
  book: "Yates, Ch. 22: Accident Causation and Investigation Techniques",
  bigIdea: "An investigation is only worth its actions. Most actions are weak, get closed on paper, and have faded by the time the same event comes round again.",
  why: "You can run a flawless investigation and still change nothing if the action list reads \"retrain, remind, review procedure\". Writing actions that hold is a separate skill from finding causes.",
  science: [
    "The US Veterans Affairs National Center for Patient Safety ranks corrective actions by strength, and the 2015 RCA2 guidance from the National Patient Safety Foundation adopted the same scheme. <b>Stronger actions</b> change the physical world or remove the need to remember: engineering changes, forcing functions, simplifying a process, standardising equipment.",
    "<b>Intermediate actions</b> reduce reliance on memory without removing it: checklists, extra staffing, software prompts, reduced distractions. <b>Weaker actions</b> depend on people behaving differently: training, new procedures, warnings, double checks.",
    "RCA2 recommends that every review produce at least one stronger or intermediate action. This is the hierarchy of controls from Week 1 applied to your own recommendations."
  ],
  evidence: "Established practice",
  evidenceNote: "The ranking is expert consensus from healthcare safety bodies, based on reliability reasoning. It is widely used but has not been validated by controlled trials.",
  work: [
    "Weak: \"Operators to be reminded to chock wheels.\" Stronger: \"Fit wheel-chock interlock to the maintenance bay door so it will not open without chocks in the cradle. Owner: Maintenance Superintendent. Due: 30 March. Check: tested monthly, recorded on the bay inspection.\"",
    "A good action names what will physically be different, who owns it, when, and how someone will know in six months that it is still in place."
  ],
  techniques: [
    { name: "Rate every action", how: "Mark each S, I or W. If the list is all W for an event with serious potential, go back to the causes." },
    { name: "Write the six-month test", how: "For each action, add one line: \"In six months we will confirm this by...\" If you cannot write it, the action is not specific enough." },
    { name: "One owner, one date", how: "A department is not an owner. A named role with authority to spend is." }
  ],
  assignment: { level: "Investigate", task: "Pick three corrective actions closed more than six months ago. Go and check whether each is still in place and working. Record what you find.", stretch: "For one that has faded, rewrite it as a stronger action with an owner, a date and a six-month test." },
  discuss: [
    "Of the actions we closed last year, how many would we find still working if we walked out now?",
    "Can we agree that 'closed' and 'effective' are two different things?",
    "What stops us recommending stronger actions: cost, authority, or not thinking of them?"
  ],
  reflect: "Which action have you signed off that you privately doubted would last?",
  quiz: [
    { q: "Which is a 'stronger' action in the VA hierarchy?", options: ["Retraining", "A new warning sign", "A forcing function that makes the error impossible", "A revised procedure"], answer: 2, why: "It does not depend on memory or vigilance." },
    { q: "Checklists and software prompts are classed as:", options: ["Stronger", "Intermediate", "Weaker", "Not actions"], answer: 1, why: "They help memory but still rely on people using them." },
    { q: "RCA2 recommends each review includes at least one:", options: ["Training action", "Disciplinary action", "Stronger or intermediate action", "Procedure rewrite"], answer: 2, why: "Weaker actions alone rarely prevent recurrence." }
  ],
  sources: [
    "National Patient Safety Foundation (2015). RCA2: Improving Root Cause Analyses and Actions to Prevent Harm.",
    "U.S. Department of Veterans Affairs, National Center for Patient Safety. Root Cause Analysis Tools: Action Hierarchy.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 22. CRC Press."
  ]
},
{
  id: "w4-l5", week: 4, n: 5, track: "craft", area: "Writing", minutes: 20,
  title: "The one-page investigation summary",
  book: null,
  bigIdea: "The people who can fund your recommendations will read one page, if that. Put the answer first, then the reasons, then the detail for anyone who wants it.",
  why: "A forty-page report that nobody finishes changes nothing. Being the person whose summaries get read, and acted on, is one of the fastest ways to gain influence in a safety role.",
  science: [
    "Barbara Minto's <b>pyramid principle</b>, developed for consultants writing to executives, says to start with the conclusion, follow with the few key points that support it, and put evidence under each point. The reader can stop at any level and still have the message.",
    "Military writing uses the same idea under the name <b>BLUF</b>: bottom line up front. The opening lines state what happened, what it means and what is needed from the reader.",
    "Most technical writers do the reverse. They narrate in the order they worked: background, method, findings, and finally, on the last page, what should be done."
  ],
  evidence: "Practice-based",
  evidenceNote: "This is long-standing professional practice, not a research finding. It is included because it works reliably, and it is labelled so you know the difference.",
  work: [
    "A one-page summary has five blocks. <b>What happened</b>, in two sentences. <b>How bad it could have been</b>. <b>Why it happened</b>: three causes at most, system causes first. <b>What we will change</b>: three actions, each with owner and date. <b>What I need from you</b>: the decision or the money.",
    "Write the last block first. If you do not know what you are asking for, you are not ready to write."
  ],
  techniques: [
    { name: "Answer first", how: "The opening sentence should survive being the only one read: \"A light vehicle was struck at Ramp 3 because the stop sign is hidden by the new berm; we need approval to realign the intersection.\"" },
    { name: "Rule of three", how: "Three causes, three actions. If you have nine, group them. Readers hold three." },
    { name: "Read it aloud in sixty seconds", how: "If you cannot, it is too long for one page." }
  ],
  assignment: { level: "Practise", task: "Rewrite the summary of one existing investigation report onto a single page using the five blocks. Give both versions to a supervisor and ask which they would rather receive.", stretch: "Ask them to tell you, an hour later, what the report asked for." },
  discuss: [
    "When a long report lands on your desk, which part do you read first?",
    "A recommendation nobody reads has the same effect as none at all. Fair?",
    "What do our managers need from us in the first three lines?"
  ],
  reflect: "Do you write to show how much work you did, or to get something changed?",
  quiz: [
    { q: "The pyramid principle says to begin with:", options: ["Background", "Method", "The conclusion", "Acknowledgements"], answer: 2, why: "Then supporting points, then evidence." },
    { q: "BLUF stands for:", options: ["Brief List of Useful Facts", "Bottom Line Up Front", "Before Leaving, Update File", "Basic Level User Format"], answer: 1, why: "State the message and the ask first." },
    { q: "Which block should you draft first?", options: ["What happened", "Why it happened", "What I need from you", "The appendix"], answer: 2, why: "Knowing the ask shapes everything above it." }
  ],
  sources: [
    "Minto, B. (2009). The Pyramid Principle: Logic in Writing and Thinking (3rd ed.). Pearson."
  ]
},
{
  id: "w4-l6", week: 4, n: 6, track: "craft", area: "Critical thinking", minutes: 25,
  title: "Base rates: what a positive test really tells you",
  book: null,
  bigIdea: "How much a positive result means depends on how common the thing was to begin with. Test for something rare, even with a good test, and most of your positives will be false.",
  why: "Alcohol and drug screens, gas alarms, fatigue monitors and medical surveillance all produce positives. If you do not think in base rates you will treat every alarm as certain, or, after enough false ones, treat none of them seriously.",
  science: [
    "Kahneman and Tversky showed in 1973 that people judging a case largely ignore how common the category is and go by how well the description fits. They called it <b>base rate neglect</b>.",
    "David Eddy put a classic problem to physicians in 1982. A disease affects 1 percent of women screened. The test detects 80 percent of cases and gives a false positive for 9.6 percent of healthy women. A woman tests positive: how likely is it she has the disease? Most physicians said about 75 percent. The answer is under <b>8 percent</b>.",
    "Gerd Gigerenzer and Ulrich Hoffrage (1995) found people do far better with <b>natural frequencies</b>. Picture 1,000 women: 10 have the disease and 8 test positive. Of the 990 healthy women, about 95 also test positive. So 8 of 103 positives are real."
  ],
  evidence: "Established",
  evidenceNote: "Both the error and the natural-frequency fix have been repeated many times, including with doctors and lawyers.",
  work: [
    "Suppose 2 percent of a workforce would test positive for a substance on a given day, and the screening device catches 95 percent of true cases with a 5 percent false positive rate. Of 1,000 people tested, 20 are true cases and 19 are caught. Of the other 980, 49 test positive falsely. So only 19 of 68 positives, about 28 percent, are real.",
    "That is why a screening positive needs a confirmatory test before anyone is treated as guilty. The figures here are illustrative; use your own device's data."
  ],
  techniques: [
    { name: "Think in a thousand people", how: "Convert every percentage into counts out of 1,000. Sort them into true positives and false positives, then compare." },
    { name: "Ask the base rate first", how: "Before reacting to any positive or alarm, ask how common the real thing is in this population." },
    { name: "Screen, then confirm", how: "A cheap sensitive test first, a more specific test second. Act on the second." }
  ],
  assignment: { level: "Think", task: "Choose one screening test or alarm on your site. Find or estimate how often the real condition occurs and the device's false positive rate. Work out, per 1,000, how many positives are real.", stretch: "Explain the result to a supervisor using counts only, no percentages, and note whether it changed their view." },
  discuss: [
    "If an alarm goes off and is false nine times in ten, what do people start doing on the tenth?",
    "Shouldn't a positive screen be treated as a reason to check?",
    "Which of our alarms do people already ignore, and what is its false alarm rate?"
  ],
  reflect: "When did you last treat a single positive result as proof?",
  quiz: [
    { q: "In Eddy's problem (1% prevalence, 80% detection, 9.6% false positives), the chance a positive is real is about:", options: ["80%", "75%", "50%", "8%"], answer: 3, why: "8 true positives against about 95 false ones per 1,000." },
    { q: "Base rate neglect means ignoring:", options: ["The test's accuracy", "How common the condition is in the first place", "The cost of testing", "The person's history"], answer: 1, why: "Rarity is what makes false positives dominate." },
    { q: "People reason best about test results when given:", options: ["Percentages", "Odds ratios", "Natural frequencies, such as counts out of 1,000", "Decimals"], answer: 2, why: "Gigerenzer and Hoffrage's finding." }
  ],
  sources: [
    "Kahneman, D., & Tversky, A. (1973). On the psychology of prediction. Psychological Review, 80(4), 237-251.",
    "Eddy, D. M. (1982). Probabilistic reasoning in clinical medicine: Problems and opportunities. In Kahneman, Slovic & Tversky (Eds.), Judgment Under Uncertainty. Cambridge University Press.",
    "Gigerenzer, G., & Hoffrage, U. (1995). How to improve Bayesian reasoning without instruction: Frequency formats. Psychological Review, 102(4), 684-704."
  ]
},
{
  id: "w4-l7", week: 4, n: 7, track: "people", area: "Human performance", minutes: 20,
  title: "Sleep, fatigue and judgement",
  book: null,
  bigIdea: "A tired brain performs like a drunk one, with one difference: a tired person is much worse at noticing how impaired they are.",
  why: "Shift work, call-outs and long commutes make fatigue one of the most common conditions behind incidents in mining. It is also the one people are most likely to deny, because the faculty that judges it is the first to go.",
  science: [
    "In 1997 Drew Dawson and Kathryn Reid compared the effect of staying awake with the effect of alcohol on the same tracking task. After <b>17 hours awake</b>, performance matched a blood alcohol concentration of about <b>0.05 percent</b>. After <b>24 hours</b>, it matched about <b>0.10 percent</b>.",
    "Hans Van Dongen and colleagues (2003) restricted volunteers to six hours in bed a night for two weeks. Their performance declined steadily to a level comparable to going one to two nights with no sleep at all. Their own ratings of sleepiness barely rose. They felt slightly tired and believed they had adapted.",
    "Fatigue hits vigilance and judgement first: noticing a change, weighing a risk, deciding to stop. Physical skill holds up longer, which is why a tired operator can still drive but stops seeing."
  ],
  evidence: "Established",
  evidenceNote: "Both are controlled laboratory studies and have been widely repeated. The alcohol comparison is for one type of task, so use it as an illustration of scale, not an exact equivalence.",
  work: [
    "An operator who wakes at 4 a.m. for day shift and is still driving home at 9 p.m. after overtime is at the 17-hour mark. Nobody would let that person drive at the legal alcohol limit, yet the roster did exactly that.",
    "Because self-assessment fails, \"are you fit for work?\" is a weak control. Hours awake, hours slept in the last 24 and 48, and time of night are better guides than how someone says they feel."
  ],
  techniques: [
    { name: "Ask for numbers, not feelings", how: "\"How many hours did you sleep last night, and when did you wake up?\" is more reliable than \"Are you tired?\"" },
    { name: "Watch the low points", how: "Risk peaks between about 2 and 6 a.m. and again mid-afternoon. Schedule the most demanding tasks away from them where you can." },
    { name: "Count hours awake at the end, not the start", how: "Check overtime and travel against total time since waking." }
  ],
  assignment: { level: "Investigate", task: "For three recent incidents, find the time of day, how far into the shift it occurred, and what the roster had been for the previous three days. Note whether the report mentioned fatigue at all.", stretch: "Work out the hours awake at the end of the longest shift-plus-commute on your site." },
  discuss: [
    "How many hours had you been awake the last time you drove home after overtime?",
    "Asking a tired person whether they're tired is asking the wrong instrument, isn't it?",
    "Which of our rosters or overtime habits puts people past seventeen hours awake?"
  ],
  reflect: "How much sleep did you get last night, and would you have admitted it if asked at the gate?",
  quiz: [
    { q: "Dawson and Reid found 17 hours awake impaired performance like a blood alcohol level of about:", options: ["0.01%", "0.05%", "0.15%", "0.20%"], answer: 1, why: "And 24 hours awake was comparable to about 0.10%." },
    { q: "After two weeks of six hours' sleep a night, Van Dongen's volunteers:", options: ["Fully adapted", "Declined in performance while feeling only slightly sleepy", "Improved", "Refused to continue"], answer: 1, why: "Self-assessment did not track the real decline." },
    { q: "Fatigue degrades which first?", options: ["Physical strength", "Vigilance and judgement", "Hearing", "Routine motor skill"], answer: 1, why: "People keep operating but stop noticing and weighing risk." }
  ],
  sources: [
    "Dawson, D., & Reid, K. (1997). Fatigue, alcohol and performance impairment. Nature, 388(6639), 235.",
    "Van Dongen, H. P. A., Maislin, G., Mullington, J. M., & Dinges, D. F. (2003). The cumulative cost of additional wakefulness. Sleep, 26(2), 117-126.",
    "Williamson, A. M., & Feyer, A.-M. (2000). Moderate sleep deprivation produces impairments in cognitive and motor performance equivalent to legally prescribed levels of alcohol intoxication. Occupational and Environmental Medicine, 57(10), 649-655."
  ]
}
);
window.LESSONS.sort(function(a,b){ return a.week-b.week || a.n-b.n; });
