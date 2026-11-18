/* Weeks 7 and 8: noise and hearing conservation (Yates Ch. 10), habits, toolbox talks. */
window.LESSONS.push(
{
  id: "w7-l1", week: 7, n: 1, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "How noise destroys hearing",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "Loud noise kills the tiny hair cells that turn sound into nerve signals. In humans they never grow back.",
  why: "Workers who say 'my ears are used to it' are describing damage, not adaptation. If you can explain what is happening inside the ear, you can answer that sentence instead of arguing with it.",
  science: [
    "Sound travels through the ear canal, moves the eardrum and three small bones, and sets up waves in the fluid of the <b>cochlea</b>, a snail-shaped tube in the inner ear. Along it sit rows of <b>hair cells</b>. Each region of the cochlea responds to a different pitch, and the hair cells there turn movement into nerve signals.",
    "Intense noise over-stimulates and damages those cells. After a loud shift many people notice muffled hearing or ringing that fades by the next day. That is a <b>temporary threshold shift</b>. Repeated over months and years, it becomes a <b>permanent threshold shift</b>: the hair cells have died, and mammals cannot regenerate them.",
    "Noise damage usually shows first as a dip in hearing around <b>4,000 Hz</b>, often called the noise notch, while hearing at other pitches is still fair. Speech sounds such as s, f and th sit in that high range, so the first complaint is not deafness. It is that people seem to mumble, especially in a crowd."
  ],
  evidence: "Established",
  evidenceNote: "The mechanism and the 4 kHz notch are standard audiology. Research since 2009 also suggests noise can damage nerve connections before hearing tests show any loss, sometimes called hidden hearing loss; that work is still developing.",
  work: [
    "A crusher operator who 'can't hear his wife at dinner' but passes a quick hearing check is a common pattern. The loss sits in the frequencies that matter for speech in noise, and it was building for years before he noticed.",
    "Tinnitus, the ringing after a shift, is a warning that the exposure that day was enough to injure. Treat a crew's reports of ringing as a near miss for hearing."
  ],
  techniques: [
    { name: "Ask about the ringing", how: "At a pre-start in a noisy area, ask who had ringing ears after their last shift. Every hand is a data point about exposure." },
    { name: "Explain 'used to it'", how: "'Your ears have not got used to it. The cells that heard that noise are gone, so there is less left to complain.'" },
    { name: "Point to the speech test", how: "Ask whether people struggle to follow conversation in a noisy bar or at a family gathering. That is the first everyday sign." }
  ],
  assignment: { level: "Practise", task: "Ask five people who work in noisy areas two questions: do your ears ring after a shift, and do you find it hard to follow conversation in a crowd? Record the answers anonymously.", stretch: "Compare their answers with whether they wear hearing protection all the time, some of the time or never." },
  discuss: [
    "Has anyone here walked out of a loud place with ringing ears? What does that tell us about what just happened?",
    "When someone says 'I'm used to it', that can be the sound of damage already done, can't it?",
    "Who on our site would notice their hearing loss first, and who would be last to admit it?"
  ],
  reflect: "What would you lose first if your own high-frequency hearing went?",
  quiz: [
    { q: "Noise-induced hearing loss mainly damages:", options: ["The eardrum", "Hair cells in the cochlea", "The ear canal", "The middle-ear bones"], answer: 1, why: "Hair cells convert vibration to nerve signals and do not regenerate in humans." },
    { q: "Early noise damage typically shows as a dip around:", options: ["250 Hz", "1,000 Hz", "4,000 Hz", "12,000 Hz"], answer: 2, why: "The so-called noise notch." },
    { q: "Ringing ears and muffled hearing that recover overnight are a:", options: ["Permanent threshold shift", "Temporary threshold shift", "Sign of adaptation", "Middle-ear infection"], answer: 1, why: "Repeated temporary shifts lead to permanent loss." }
  ],
  sources: [
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria. DHHS (NIOSH) Publication No. 98-126.",
    "Kujawa, S. G., & Liberman, M. C. (2009). Adding insult to injury: Cochlear nerve degeneration after 'temporary' noise-induced hearing loss. Journal of Neuroscience, 29(45), 14077-14085.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w7-l2", week: 7, n: 2, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Measuring noise: meters, dosimeters and weightings",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "A sound level meter tells you how loud a place is. A dosimeter tells you how much noise a person took home. You usually need both, and they answer different questions.",
  why: "Noise surveys get quoted in audits and arguments. If you know what each instrument measures and which weighting it used, you can tell whether a number means what people say it means.",
  science: [
    "A <b>sound level meter</b> is held at a location and reads the level at that moment, or the average over a period. It is best for mapping areas, finding the loudest sources and checking a control worked.",
    "A <b>noise dosimeter</b> is worn by a person, with the microphone near the ear, for the whole shift. It integrates everything they were exposed to as they moved around and reports a <b>dose</b> as a percentage of the allowed daily amount, and an equivalent average level.",
    "Both use <b>weightings</b>. <b>A-weighting (dBA)</b> filters the sound roughly the way human hearing responds, playing down very low frequencies, and it is what exposure limits use. <b>C-weighting (dBC)</b> is flatter and is used for peak levels and some hearing protector calculations. The same noise can read several decibels apart on the two scales."
  ],
  evidence: "Established",
  evidenceNote: "These are standard instrument definitions. Settings that change results, such as exchange rate and threshold on a dosimeter, must match the standard you are measuring against.",
  work: [
    "A meter survey shows the screening plant at 98 dBA. Yet the fitter who works there has a dose well under 100 percent, because he spends most of the shift in the workshop. The area is hazardous; his exposure, today, is not. Both facts matter.",
    "Before trusting a dosimeter result, check it was calibrated before and after, worn for the full shift, set to the right exchange rate and threshold, and that nobody shouted into it or tapped the microphone."
  ],
  techniques: [
    { name: "Ask which instrument", how: "Any noise figure: area or personal? Spot reading or full shift? dBA or dBC? The answer changes what you can conclude." },
    { name: "Calibrate both ends", how: "Field-check against a calibrator before and after. If the readings drift, the result is suspect." },
    { name: "Shadow the wearer", how: "Spend part of the shift with the person wearing the dosimeter and note what they did when. It turns a number into a story you can act on." }
  ],
  assignment: { level: "Investigate", task: "Find your site's most recent noise survey. For three results, write down whether each was an area or personal measurement, its duration, its weighting and the exchange rate used.", stretch: "If no personal dosimetry exists for a high-noise job, draft a short plan for doing it." },
  discuss: [
    "If an area reads 98 dBA, is everyone who works there overexposed?",
    "Can we agree that a noise number without its instrument and settings can mislead us?",
    "Which job here moves through loud and quiet areas so much that only a dosimeter would tell the truth?"
  ],
  reflect: "When did you last ask how a figure in a report was measured?",
  quiz: [
    { q: "A noise dosimeter is best for:", options: ["Mapping loud areas", "Measuring one person's full-shift exposure", "Measuring peak blasts only", "Testing hearing"], answer: 1, why: "It is worn and integrates exposure over the shift." },
    { q: "Exposure limits for noise normally use:", options: ["dBA", "dBC", "dBZ", "Hertz"], answer: 0, why: "A-weighting approximates human hearing sensitivity." },
    { q: "Before trusting a dosimeter result you should check:", options: ["The colour of the device", "Calibration, full-shift wear and the settings used", "Only the final number", "The wearer's age"], answer: 1, why: "Any of these can invalidate the result." }
  ],
  sources: [
    "OSHA. 29 CFR 1910.95, Occupational Noise Exposure, Appendices A and G.",
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w7-l3", week: 7, n: 3, track: "people", area: "Habits", minutes: 20,
  title: "How habits form: cue, routine, reward",
  book: null,
  bigIdea: "A habit is a behaviour your surroundings trigger without a decision. Most of what people do at work, safe or unsafe, runs this way. Posters and reminders barely touch it.",
  why: "You spend much of your time trying to change behaviour. If the behaviour is a habit, information will not reach it. You need to change the cue, the routine or the reward.",
  science: [
    "Psychologists describe a habit as an action that has become linked to a context through repetition, so the context starts the action automatically. Wendy Wood's diary studies estimated that roughly <b>43 percent</b> of everyday actions are performed out of habit, often while people are thinking about something else.",
    "Charles Duhigg popularised a three-part loop: a <b>cue</b> that triggers the behaviour, the <b>routine</b> itself, and a <b>reward</b> that makes the loop worth repeating. The reward does not need to be large. Saving thirty seconds is enough.",
    "In 2010 Phillippa Lally and colleagues followed 96 people adding one new daily behaviour. Among those whose data could be modelled, reaching near-automatic took a <b>median of 66 days</b>, ranging from 18 to 254. Missing a single day did not undo the progress."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Habit as context-triggered behaviour is well supported. The 66-day figure is a median from the minority of participants whose curves fitted the model, not a rule for everyone. The cue-routine-reward loop is a useful simplification from a popular book.",
  work: [
    "Watch someone climb down from a loader. Same step, same hand, same direction, every time. If that routine skips three-point contact, a toolbox talk will not touch it. The cue is the door opening; the reward is getting down quicker.",
    "Good habits work the same way. A crew that always chocks wheels the moment the engine stops does not think about it. That is the goal."
  ],
  techniques: [
    { name: "Find the cue", how: "Ask: what happens just before the behaviour? A sound, a place, a time, a person. That is where you can intervene." },
    { name: "Name the hidden reward", how: "Shortcuts pay out in time, comfort or looking competent. You cannot remove the reward without offering another." },
    { name: "Expect months, not days", how: "Plan follow-up for at least two months after any behaviour change, not a one-off campaign." }
  ],
  assignment: { level: "Think", task: "Choose one unsafe habit you see regularly. Write its cue, routine and reward in one line each. Then write one change to the cue or the reward that could shift it.", stretch: "Do the same for one of your own habits at work." },
  discuss: [
    "What do you do at work every day without deciding to?",
    "If a behaviour happens without thinking, telling people to think harder won't change it. Does that match your experience?",
    "What reward does our most common shortcut give people?"
  ],
  reflect: "Which of your own safe habits would you struggle to explain, because you never decide to do them?",
  quiz: [
    { q: "A habit is best described as:", options: ["A conscious choice repeated often", "A behaviour triggered automatically by its context", "A personality trait", "A rule people follow"], answer: 1, why: "Repetition links the context to the action." },
    { q: "In Lally et al. (2010), the median time to near-automaticity was about:", options: ["21 days", "30 days", "66 days", "1 year"], answer: 2, why: "With a range of 18 to 254 days among modelled participants." },
    { q: "Missing one day while building a habit:", options: ["Resets it to zero", "Did not materially affect habit formation", "Doubles the time needed", "Makes it permanent"], answer: 1, why: "One of Lally's more encouraging findings." }
  ],
  sources: [
    "Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998-1009.",
    "Wood, W., Quinn, J. M., & Kashy, D. A. (2002). Habits in everyday life: Thought, emotion, and action. Journal of Personality and Social Psychology, 83(6), 1281-1297.",
    "Duhigg, C. (2012). The Power of Habit. Random House."
  ]
},
{
  id: "w7-l4", week: 7, n: 4, track: "safety", area: "Occupational hygiene", minutes: 30,
  title: "Calculating noise dose and TWA",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "A worker's noise exposure is a sum: each period at each level uses up part of the day's allowance. Add the parts and you have the dose. Convert the dose and you have the time-weighted average.",
  why: "This calculation sits in every hearing conservation programme and every safety exam. Doing it by hand also shows you which part of someone's day is doing the damage.",
  science: [
    "Dose is <b>D = 100 x (C1/T1 + C2/T2 + ...)</b>, where each C is the time actually spent at a level and each T is the time allowed at that level. A dose of 100 percent means the full daily allowance has been used.",
    "The allowed time depends on the criterion and the exchange rate. On the NIOSH basis from Week 2 (85 dBA, 3 dB): <b>T = 8 / 2^((L - 85) / 3)</b> hours. On the US OSHA basis (90 dBA, 5 dB): <b>T = 8 / 2^((L - 90) / 5)</b> hours.",
    "To turn an OSHA dose into a time-weighted average: <b>TWA = 16.61 x log10(D / 100) + 90</b>. On the NIOSH basis the equivalent is <b>TWA = 10 x log10(D / 100) + 85</b>. Always state which basis you used."
  ],
  evidence: "Established",
  evidenceNote: "These are the published formulas from OSHA 29 CFR 1910.95 Appendix A and the NIOSH criteria document. Your site may follow a different national limit, so check it.",
  work: [
    "NIOSH basis worked example. A driller spends 2 hours at 94 dBA (allowed 1 hour), 3 hours at 88 dBA (allowed 4 hours) and 3 hours at 82 dBA (allowed 16 hours). Dose = 100 x (2/1 + 3/4 + 3/16) = 100 x 2.94 = 294 percent. TWA = 10 x log10(2.94) + 85 = about 89.7 dBA.",
    "Look at the parts. The two hours at 94 dBA contribute 200 of the 294 percent. Cut that one period and you fix most of the problem. Doing the sum by hand is how you spot it."
  ],
  techniques: [
    { name: "Build a little table", how: "Columns for level, time spent, time allowed and fraction. It keeps the arithmetic honest and shows the biggest contributor." },
    { name: "Hunt the biggest fraction", how: "Controls aimed at the period with the largest C/T give the most reduction per shilling spent." },
    { name: "Check against the dosimeter", how: "If you have a dosimeter reading, your hand calculation from a task log should land near it. If not, ask why." }
  ],
  assignment: { level: "Practise", task: "Build a task log for one noisy job: levels and hours for a typical shift. Calculate the dose and TWA on the NIOSH basis by hand, and identify which task contributes most.", stretch: "Recalculate on the OSHA basis and explain the difference in one sentence." },
  discuss: [
    "If one task gives two-thirds of a person's dose, where should our money go first?",
    "A single 'average' level hides which part of the day does the harm, doesn't it?",
    "Which job here has a short, very loud task that may dominate the whole shift?"
  ],
  reflect: "Have you ever controlled the loudest area rather than the loudest part of a person's day?",
  quiz: [
    { q: "On the NIOSH basis, the allowed time at 91 dBA is:", options: ["8 hours", "4 hours", "2 hours", "1 hour"], answer: 2, why: "91 is two 3 dB steps above 85, so 8 halves twice." },
    { q: "A dose of 100% means:", options: ["The worker is deaf", "The full daily allowance has been used", "Noise is 100 dBA", "Protection is fully effective"], answer: 1, why: "Over 100% means the allowance is exceeded." },
    { q: "1 hour at 94 dBA and 7 hours in quiet gives a NIOSH dose of about:", options: ["50%", "100%", "150%", "800%"], answer: 1, why: "Allowed time at 94 dBA is 1 hour, so 1/1 = 100%." }
  ],
  sources: [
    "OSHA. 29 CFR 1910.95, Occupational Noise Exposure, Appendix A: Noise Exposure Computation.",
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria, Chapter 1.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w7-l5", week: 7, n: 5, track: "craft", area: "Teaching and facilitation", minutes: 20,
  title: "Building a toolbox talk in ten minutes",
  book: "Yates, Ch. 19: Training",
  bigIdea: "A good toolbox talk has one message, one real example, one question to the crew, and one thing they'll do differently this shift.",
  why: "You will deliver hundreds of these. A simple, repeatable structure lets you prepare one in ten minutes and makes each one far more likely to change what happens next.",
  science: [
    "Robert Gagne's <b>nine events of instruction</b> (1965) set out what effective teaching includes: gain attention, state the objective, recall prior learning, present the content, guide, practise, give feedback, assess and help transfer to the job. A five-minute talk cannot do all nine, but it can do the ones that matter most.",
    "From earlier weeks: one message beats many (the curse of knowledge), asking beats telling (commitment), and recall beats rereading (retrieval practice). A short structure that builds those in will outperform a longer talk that does not.",
    "The structure in this lesson is the hub's own, assembled from those findings. It is a practical template, not a tested programme."
  ],
  evidence: "Practice-based",
  evidenceNote: "Gagne's model is established instructional design. The specific five-part toolbox structure is the hub's synthesis of research covered in earlier lessons, not a separately studied method.",
  work: [
    "Topic: reversing on the ROM pad. <b>Hook</b>: 'Who has had a truck reverse closer than they liked this month?' <b>Message</b>: 'If you cannot see the truck's mirror, the driver cannot see you.' <b>Example</b>: last week's near miss at the tipping point, in two sentences. <b>Ask</b>: 'Where on the pad is that hardest to follow?' <b>Commit</b>: each person says where they will stand today.",
    "That is five minutes, one message, and the crew has done half the talking."
  ],
  techniques: [
    { name: "Hook, message, example, ask, commit", how: "Write one line for each before you walk out. If the message line is longer than fifteen words, cut it." },
    { name: "Use this week's event", how: "A near miss from your own site beats a video from overseas every time." },
    { name: "End on their words", how: "The last thing said should come from the crew, not from you." }
  ],
  assignment: { level: "Practise", task: "Prepare and deliver one toolbox talk using the five lines. Time your own speaking. Aim for under half of the total talk.", stretch: "Ask the supervisor to deliver the next one using the same five lines, and coach them." },
  discuss: [
    "In the last talk you sat through, who spoke more, the presenter or the crew?",
    "Aren't people more likely to act on a talk they helped write?",
    "What topic do we keep repeating that might work better with this structure?"
  ],
  reflect: "If a crew member could only remember one sentence from your last talk, which would you want it to be?",
  quiz: [
    { q: "The five parts in this lesson's structure are:", options: ["Intro, body, summary, quiz, sign-off", "Hook, message, example, ask, commit", "Hazard, risk, control, PPE, permit", "Plan, do, check, act, review"], answer: 1, why: "Each line takes about a minute." },
    { q: "Gagne's nine events of instruction start with:", options: ["Assessing performance", "Gaining attention", "Presenting content", "Giving feedback"], answer: 1, why: "Nothing else lands without attention." },
    { q: "The best example to use in a toolbox talk is usually:", options: ["A dramatic overseas video", "A recent event from your own site", "A regulation number", "A statistic from the national report"], answer: 1, why: "Local and recent is concrete and believable." }
  ],
  sources: [
    "Gagne, R. M. (1965). The Conditions of Learning. Holt, Rinehart and Winston.",
    "Heath, C., & Heath, D. (2007). Made to Stick. Random House.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 19. CRC Press."
  ]
},
{
  id: "w7-l6", week: 7, n: 6, track: "craft", area: "Attention", minutes: 20,
  title: "The myth of multitasking",
  book: null,
  bigIdea: "Your brain can't do two attention-demanding things at once. It switches between them, and each switch costs time and accuracy, even when it feels smooth.",
  why: "Radios, phones, paperwork and conversation all compete with the task in front of a worker, and with your own inspections. Knowing the cost lets you design work, and your own day, with fewer switches.",
  science: [
    "Joshua Rubinstein, David Meyer and Jeffrey Evans (2001) measured <b>task-switching costs</b>: people were slower and made more errors when alternating between tasks than when repeating one, and the cost grew with task complexity.",
    "David Strayer, Frank Drews and Dennis Crouch (2006) put drivers in a simulator. Drivers talking on a phone, <b>hands-free included</b>, showed impairments that the authors judged comparable overall to drivers at the US legal alcohol limit of 0.08 percent, though the pattern differed: phone drivers reacted more slowly, drunk drivers drove more aggressively.",
    "The problem is attention, not hands. A conversation pulls attention away from the road even when nothing is in the driver's hands."
  ],
  evidence: "Established",
  evidenceNote: "Task-switching costs are robust in laboratory research. The phone and alcohol comparison is a simulator study, so treat it as a strong indication of scale, not a precise equivalence.",
  work: [
    "A light vehicle driver on the haul road takes a radio call about a breakdown while approaching an intersection. Hands on the wheel, eyes on the road, attention on the call. The intersection gets less of him than he thinks.",
    "Your own inspections suffer the same way. Answering messages while walking a work area means you inspect half of it."
  ],
  techniques: [
    { name: "Stop to talk", how: "For non-urgent radio calls on the move, the rule can be: pull over, then answer." },
    { name: "Batch the interruptions", how: "Check messages at set times, not continuously, when you need to think." },
    { name: "Single-task the critical step", how: "During isolations, lifts and reversing, no conversation unless it is about the task." }
  ],
  assignment: { level: "Investigate", task: "For one shift, count how many times your own work is interrupted by calls, messages or questions. Note which interruptions could have waited ten minutes.", stretch: "Look at one recent incident and ask whether a radio call or conversation was happening just before it." },
  discuss: [
    "Have you ever finished a phone call while driving and realised you did not remember the last few kilometres?",
    "Hands-free and attention-free are different things, aren't they?",
    "Which radio habits on our site make people switch attention at the worst moment?"
  ],
  reflect: "What do you do while 'listening' in meetings, and what does it cost?",
  quiz: [
    { q: "Task-switching costs mean that alternating between tasks:", options: ["Saves time", "Costs time and accuracy", "Has no effect", "Improves memory"], answer: 1, why: "Rubinstein, Meyer and Evans (2001)." },
    { q: "In Strayer et al. (2006), hands-free phone use while driving:", options: ["Removed the impairment", "Still impaired driving", "Improved reaction time", "Was not tested"], answer: 1, why: "The demand is on attention, not hands." },
    { q: "The most effective control for radio calls on the move is often:", options: ["Louder radios", "Pulling over to answer non-urgent calls", "Shorter calls", "Hands-free headsets"], answer: 1, why: "It removes the competing task." }
  ],
  sources: [
    "Rubinstein, J. S., Meyer, D. E., & Evans, J. E. (2001). Executive control of cognitive processes in task switching. Journal of Experimental Psychology: Human Perception and Performance, 27(4), 763-797.",
    "Strayer, D. L., Drews, F. A., & Crouch, D. J. (2006). A comparison of the cell phone driver and the drunk driver. Human Factors, 48(2), 381-391."
  ]
},
{
  id: "w7-l7", week: 7, n: 7, track: "people", area: "Behavioural influence", minutes: 20,
  title: "Social proof: what the crew next door is doing",
  book: null,
  bigIdea: "When people are unsure how to act, they copy what others like them are doing. Telling them that most of their peers already do the right thing can be more persuasive than any reason.",
  why: "Many safety messages accidentally say 'nobody does this', which tells people the norm is to skip it. Turning the message around costs nothing and puts peer pressure on your side.",
  science: [
    "Noah Goldstein, Robert Cialdini and Vladas Griskevicius (2008) tested towel-reuse cards in a hotel. The standard environmental message produced reuse of about <b>35 percent</b>. A card saying most guests reused their towels raised it to about <b>44 percent</b>. A card saying most guests <b>who had stayed in this room</b> reused them did best, about <b>49 percent</b>.",
    "The closer the comparison group is to the reader, the stronger the effect. Cialdini calls this <b>social proof</b>, one of his principles of influence.",
    "The danger runs both ways. Cialdini has warned that messages stressing how many people do the wrong thing, such as 'many people steal wood from this forest', can increase the very behaviour they condemn."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Descriptive norm effects are well replicated. The hotel figures are from one field study; a 2014 replication by Bohner and Schluter found a weaker effect, so expect the direction to hold more reliably than the size.",
  work: [
    "'Too many people are not wearing seat belts in light vehicles' tells everyone that not wearing one is normal. 'Nine in ten of our drivers belt up before moving' tells them the opposite, and it is probably true.",
    "Use the nearest comparison: this crew, this shift, this pit. 'Your crew had 100 percent pre-start completion last month' beats a company-wide figure."
  ],
  techniques: [
    { name: "Count the good news", how: "Measure how many people do it right, and say that number out loud." },
    { name: "Make it local", how: "Compare people with their own crew or area, not with the company or the industry." },
    { name: "Retire 'nobody does'", how: "Rewrite any message that advertises a bad norm before it goes on a poster." }
  ],
  assignment: { level: "Practise", task: "Find one safety message on your site that advertises the wrong norm. Rewrite it to state the good norm with a real, local number. Check the number is true before using it.", stretch: "Use the rewritten version in a toolbox talk and note the crew's reaction." },
  discuss: [
    "When you join a new crew, how do you work out what is really expected?",
    "Saying 'everyone ignores this rule' advertises ignoring it. Have you seen that happen?",
    "Which good habit do most of our people already have that we never mention?"
  ],
  reflect: "What norm are you advertising by what you complain about in front of crews?",
  quiz: [
    { q: "In Goldstein et al. (2008), the most effective card referred to:", options: ["The environment", "Guests in general", "Guests who had stayed in the same room", "The hotel's savings"], answer: 2, why: "About 49% reuse, the closest comparison group." },
    { q: "A message stressing how many people break a rule can:", options: ["Always reduce breaches", "Increase the behaviour it condemns", "Have no effect", "Only work on managers"], answer: 1, why: "It signals the bad behaviour is normal." },
    { q: "Social proof is strongest when the comparison group is:", options: ["Large and distant", "Similar and close to the reader", "Senior management", "Another country"], answer: 1, why: "People copy those most like them." }
  ],
  sources: [
    "Goldstein, N. J., Cialdini, R. B., & Griskevicius, V. (2008). A room with a viewpoint: Using social norms to motivate environmental conservation in hotels. Journal of Consumer Research, 35(3), 472-482.",
    "Cialdini, R. B. (2003). Crafting normative messages to protect the environment. Current Directions in Psychological Science, 12(4), 105-109.",
    "Bohner, G., & Schluter, L. E. (2014). A room with a viewpoint revisited: Descriptive norms and hotel guests' towel reuse behavior. PLoS ONE, 9(8), e104086."
  ]
},
{
  id: "w8-l1", week: 8, n: 1, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Hearing protection: the label versus the ear",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "The number on the box is what a hearing protector achieves in a laboratory with perfect fitting. On a real worker it is usually much less, and if it comes out for even a few minutes, most of the benefit goes.",
  why: "Hearing protection is often the main control for noise on mines. Overestimate it and a site can believe it has a hearing programme while its workers go deaf.",
  science: [
    "In the US, protectors carry a <b>Noise Reduction Rating (NRR)</b>, measured in a laboratory. OSHA's guidance for estimating protection against an A-weighted exposure is to <b>subtract 7 dB from the NRR and halve the result</b> as a safety margin for real-world use. An NRR 27 earplug is then credited with about 10 dB.",
    "Wearing time matters enormously because of the logarithmic scale. A protector worn for most but not all of a loud shift loses a large share of its benefit: the unprotected minutes dominate the dose.",
    "<b>Fit testing</b> systems now measure the attenuation an individual actually gets from their own protector. Results commonly vary widely between people using the same product, which is why many programmes now fit-test rather than rely on the label."
  ],
  evidence: "Established",
  evidenceNote: "The derating method is OSHA guidance and is deliberately conservative. Other countries use different rating systems (such as SNR), so check what your products and regulator use.",
  work: [
    "A driller at 100 dBA wears NRR 30 earmuffs. Derated: (30 - 7) / 2 = 11.5 dB, giving about 88.5 dBA at the ear. On the NIOSH basis that still uses most of a day's allowance, and that assumes the muffs stay on and seal over safety glasses.",
    "Safety glasses arms break the seal of earmuffs. Hair, beards and hard hat clips do too. Earplugs inserted half-way give a fraction of their rating."
  ],
  techniques: [
    { name: "Derate every time", how: "Never compare a noise level with the label rating. Apply (NRR - 7) / 2 first, or your own regulator's method." },
    { name: "Check the fit, not the issue", how: "Ask a worker to show you how they insert their plugs. Roll, pull the ear up and back, insert, hold." },
    { name: "Count the minutes off", how: "Ask when protection comes off during the shift: talking, radio, breaks near machines. Those minutes may be most of the dose." }
  ],
  assignment: { level: "Practise", task: "Watch five workers fit their hearing protection. Record how many achieve a correct fit and how many have something breaking the seal.", stretch: "For the noisiest job, calculate the derated protection and the estimated exposure at the ear." },
  discuss: [
    "When you take your earplugs out 'just for a minute' to talk, how much of the day's protection do you think you lose?",
    "If we've never seen a hearing protector fitted correctly, we're only hoping it works. Fair?",
    "Where on site does PPE get worn but not sealed?"
  ],
  reflect: "If hearing protection is your main noise control, how sure are you that it works on your people today?",
  quiz: [
    { q: "Using OSHA's derating method, an NRR 27 earplug is credited with about:", options: ["27 dB", "20 dB", "10 dB", "3 dB"], answer: 2, why: "(27 - 7) / 2 = 10 dB." },
    { q: "Removing hearing protection for short periods in loud noise:", options: ["Has little effect", "Can remove a large share of the protection", "Improves hearing", "Only matters below 85 dBA"], answer: 1, why: "Unprotected minutes dominate the dose on a log scale." },
    { q: "Fit testing measures:", options: ["The laboratory rating", "The attenuation a person actually gets", "The noise level", "Hearing loss"], answer: 1, why: "It reveals individual fit problems." }
  ],
  sources: [
    "OSHA. 29 CFR 1910.95, Appendix B; and OSHA Technical Manual, Section III, Chapter 5: Noise.",
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria, Chapter 6.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w8-l2", week: 8, n: 2, track: "safety", area: "Occupational hygiene", minutes: 25,
  title: "Engineering out noise: source, path, receiver",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "Noise travels from a source, along a path, to a receiver. Control it at the source first, then on the path, and only then at the person's ear.",
  why: "This is the hierarchy of controls applied to noise, and it gives you a concrete list of engineering options to propose before anyone reaches for earplugs.",
  science: [
    "<b>Source</b> controls reduce the noise produced: quieter equipment bought at the start, maintenance of worn bearings and loose panels, silencers on exhausts and air releases, rubber linings in chutes and screens, slower speeds.",
    "<b>Path</b> controls stop the sound reaching people: enclosures around the source, barriers, absorbent panels, and <b>distance</b>. For a small source in open air, sound level falls by about <b>6 dB each time the distance doubles</b> (the inverse square law). Indoors, reflections reduce that benefit.",
    "<b>Receiver</b> controls protect the person: sound-insulated cabins and control rooms, reduced time in noisy areas, then hearing protection. Buy-quiet policies at procurement are often the cheapest control of all."
  ],
  evidence: "Established",
  evidenceNote: "The source-path-receiver model and the inverse square law are standard acoustics. Real reductions depend on the setting, so measure before and after.",
  work: [
    "A screen deck lined with polyurethane panels instead of steel can be several decibels quieter at the source. A worker who stands 8 metres from an open-air compressor rather than 2 metres gains about 12 dB from distance alone: two doublings.",
    "An air-conditioned, sealed cab turns a 100 dBA machine into a much quieter workplace, as long as the doors stay shut and the seals are maintained."
  ],
  techniques: [
    { name: "Walk the path", how: "Stand where people work and trace the sound back to its source. Every surface and gap on the way is an option." },
    { name: "Use the doubling rule", how: "Ask whether a workstation can move further away. Each doubling of distance outdoors is worth about 6 dB." },
    { name: "Buy quiet", how: "Add a noise limit to equipment purchase specifications. It is cheaper than any retrofit." }
  ],
  assignment: { level: "Investigate", task: "Choose your noisiest work area. List at least one possible source control, one path control and one receiver control, other than hearing protection.", stretch: "Estimate the reduction for one of them and find out roughly what it would cost." },
  discuss: [
    "For our loudest machine, has anyone asked the supplier whether a quieter version exists?",
    "A decibel removed at the source protects everyone, earplugs or not. Can we agree on that?",
    "Which noisy job could be done further away?"
  ],
  reflect: "Have you ever recommended an engineering noise control, or only hearing protection?",
  quiz: [
    { q: "Outdoors, doubling the distance from a small noise source reduces the level by about:", options: ["1 dB", "3 dB", "6 dB", "20 dB"], answer: 2, why: "The inverse square law." },
    { q: "Rubber lining in a chute is a:", options: ["Receiver control", "Path control", "Source control", "Administrative control"], answer: 2, why: "It reduces noise where it is generated." },
    { q: "Often the cheapest noise control is:", options: ["Retrofit enclosures", "Buying quieter equipment in the first place", "Audiometry", "Earmuffs"], answer: 1, why: "Prevention at procurement avoids retrofit costs." }
  ],
  sources: [
    "Health and Safety Executive (2005). Controlling Noise at Work: The Control of Noise at Work Regulations 2005 (L108). HSE Books.",
    "NIOSH. Buy Quiet initiative and noise control resources.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w8-l3", week: 8, n: 3, track: "people", area: "Habits", minutes: 20,
  title: "Changing a habit: if-then plans",
  book: null,
  bigIdea: "Intentions are weak. Plans tied to a specific moment are strong. 'When I step out of the cab, I will look for the truck' beats 'I will be more careful' by a wide margin.",
  why: "Week 7 showed habits run on cues. This one gives you the simplest tool for attaching a new behaviour to a cue that already exists in the day.",
  science: [
    "Peter Gollwitzer called these plans <b>implementation intentions</b>: 'If situation X arises, then I will do Y.' Writing the plan in that form links the response to the cue, so the cue later triggers the action with less deliberate thought.",
    "Gollwitzer and Paschal Sheeran pooled <b>94 tests</b> in 2006 and found a <b>medium-to-large</b> average effect on goal attainment (d = 0.65).",
    "A much larger 2024 meta-analysis by Sheeran, Listrom and Gollwitzer, covering 642 tests, found a smaller average effect, around d = 0.27 for behaviour. If-then plans help reliably, but less dramatically than the early estimate suggested."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The effect is well replicated. Its size has shrunk as the evidence grew, which is normal and worth saying out loud. Plans work best when people already want the goal.",
  work: [
    "Vague: 'Use three points of contact.' If-then: 'When my hand touches the door handle to get out, I turn to face the cab.' The first is a rule. The second is a trigger.",
    "Crews can write their own: 'When the radio calls a blast clearance, we...'; 'When I park on a slope, I...'. People commit more to plans they wrote."
  ],
  techniques: [
    { name: "Use an existing cue", how: "Anchor the new behaviour to something that already happens every time: a door, a key, a radio call, a gate." },
    { name: "Write it as if-then", how: "One sentence. 'If [moment], then I will [specific action].' Vague actions do not trigger." },
    { name: "Plan for the obstacle", how: "'If I am running late, then I still...' covers the moment the plan usually breaks." }
  ],
  assignment: { level: "Practise", task: "Help one crew write a single if-then plan for a behaviour they agree matters. Check after one week and again after four whether it is happening.", stretch: "Write one if-then plan for your own work habits and track it for a month." },
  discuss: [
    "What is something you intended to do differently that never happened? What was missing?",
    "Isn't it true that 'be careful' gives your brain nothing to hold on to?",
    "Which moment in our day could carry a new safe habit, because it already happens every time?"
  ],
  reflect: "What would your own if-then plan be for the habit you most want to change?",
  quiz: [
    { q: "An implementation intention has the form:", options: ["I will try harder", "If situation X, then I will do Y", "Never do Y", "Y is mandatory"], answer: 1, why: "It links an action to a specific cue." },
    { q: "Gollwitzer and Sheeran's 2006 meta-analysis found an effect that was:", options: ["Zero", "Small and negative", "Medium-to-large", "Larger than any other intervention ever"], answer: 2, why: "d = 0.65 across 94 tests." },
    { q: "Larger later evidence suggests the effect is:", options: ["Real but smaller", "Fake", "Much larger", "Only for students"], answer: 0, why: "Effect sizes shrink as more studies are added." }
  ],
  sources: [
    "Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. American Psychologist, 54(7), 493-503.",
    "Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38, 69-119.",
    "Sheeran, P., Listrom, O., & Gollwitzer, P. M. (2024, published online). The when and how of planning: Meta-analysis of the scope and components of implementation intentions in 642 tests."
  ]
},
{
  id: "w8-l4", week: 8, n: 4, track: "safety", area: "Occupational health", minutes: 25,
  title: "Audiometry and a hearing conservation programme",
  book: "Yates, Ch. 10: Noise and OSHA's Hearing Conservation Program",
  bigIdea: "Hearing tests show whether the noise controls are working on real people, early enough to stop the damage. Nothing else tells you that.",
  why: "Many programmes test hearing every year and never act on the results. You should know what a significant change looks like, and what must happen when one appears.",
  science: [
    "A hearing conservation programme under OSHA 29 CFR 1910.95 has several parts: exposure monitoring, engineering and administrative controls, audiometric testing, hearing protection, training and recordkeeping. The programme is required where exposure reaches an 8-hour TWA of <b>85 dBA</b>.",
    "Audiometry starts with a <b>baseline</b> test, then annual tests. Each annual result is compared with the baseline. A <b>standard threshold shift (STS)</b> is an average worsening of <b>10 dB or more at 2,000, 3,000 and 4,000 Hz</b> in either ear.",
    "An STS triggers action: notify the worker in writing, refit and retrain on hearing protection, and investigate. A test that finds a shift and changes nothing has wasted its purpose."
  ],
  evidence: "Established",
  evidenceNote: "The STS definition and programme elements are from the US OSHA standard, which is widely used as a reference. Check your national requirement, which may differ.",
  work: [
    "Ask for anonymised trends, not just individual results: how many STS cases this year, in which areas and jobs. A cluster in one department points straight at a failing control.",
    "Test before the shift, or after a quiet period, so a temporary threshold shift from yesterday's noise does not mask or mimic a change."
  ],
  techniques: [
    { name: "Ask for the shift count", how: "One question to the health provider: how many standard threshold shifts did we have last year, and where?" },
    { name: "Close the loop", how: "For each STS, check that refitting, retraining and an exposure review happened." },
    { name: "Use it as feedback", how: "Show a crew, anonymously, how their area's hearing results compare. It makes an invisible harm visible." }
  ],
  assignment: { level: "Investigate", task: "Find out how audiometry is done on your site: who tests, when, where results go, and what happens after a shift is found. Write the process as it really runs, step by step.", stretch: "Compare your process with the programme elements in this lesson and list the gaps." },
  discuss: [
    "If a hearing test shows someone's hearing has worsened, what happens next on our site?",
    "A test nobody acts on is only a record of harm, isn't it?",
    "Which department would we expect to see most shifts, and do we know?"
  ],
  reflect: "When did you last see hearing test results used to change a control?",
  quiz: [
    { q: "An STS under OSHA is an average change of 10 dB or more at:", options: ["500, 1,000, 2,000 Hz", "2,000, 3,000, 4,000 Hz", "4,000, 6,000, 8,000 Hz", "1,000 Hz only"], answer: 1, why: "Averaged at 2, 3 and 4 kHz relative to baseline." },
    { q: "OSHA requires a hearing conservation programme from an 8-hour TWA of:", options: ["80 dBA", "85 dBA", "90 dBA", "100 dBA"], answer: 1, why: "The action level." },
    { q: "After an STS is found, a key step is to:", options: ["File the result", "Refit and retrain on hearing protection and investigate", "Wait for the next annual test", "Dismiss the worker"], answer: 1, why: "The point of the test is to act." }
  ],
  sources: [
    "OSHA. 29 CFR 1910.95(c)-(o), Hearing Conservation Program.",
    "NIOSH (1998). Criteria for a Recommended Standard: Occupational Noise Exposure, Revised Criteria, Chapter 5.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 10. CRC Press."
  ]
},
{
  id: "w8-l5", week: 8, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Telling a story in a toolbox talk",
  book: null,
  bigIdea: "People argue with facts and remember stories. A short, specific story about a real person carries a safety message past the part of the mind that is busy finding exceptions.",
  why: "You already have the stories: near misses, incidents, things you have seen. Telling them well is a skill. Get it right and the crew repeats your talk at lunch instead of sitting through it.",
  science: [
    "Melanie Green and Timothy Brock (2000) described <b>narrative transportation</b>: being absorbed in a story. In their experiments, readers who were more transported found fewer false notes in the story and shifted their beliefs further toward it.",
    "A story works by giving the listener a person to follow, a moment of tension and a consequence. The lesson arrives as something the listener concluded, not something they were told, which fits the hub's principle of letting people reach conclusions themselves.",
    "Stories also help memory. Specific, concrete detail is easier to recall than abstract statements, as the Week 1 lesson on the curse of knowledge showed."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Transportation effects on beliefs are well replicated in laboratory studies. Evidence that stories change workplace safety behaviour specifically is thinner.",
  work: [
    "A shape that works in two minutes: <b>person and place</b> ('Kofi, night shift, the ROM pad'), <b>the ordinary moment</b> ('he had done this a hundred times'), <b>the turn</b> ('the light on the reverse alarm had gone'), <b>what happened</b>, and <b>the question</b> ('what would you have noticed?').",
    "Use real events with permission and without blame, or say clearly that a story is illustrative. Never invent an incident and present it as real."
  ],
  techniques: [
    { name: "Start with a name and a place", how: "Not 'a worker once'. A named person in a specific place pulls the listener in." },
    { name: "Slow down at the turn", how: "The moment things change is the part to tell in detail. Rush the rest." },
    { name: "End with their question", how: "Do not state the moral. Ask what they would have done, and let them say it." }
  ],
  assignment: { level: "Practise", task: "Take one near miss from your site. Write it as a two-minute story using the five-part shape. Tell it at a toolbox talk and note whether the crew asks questions afterwards.", stretch: "Record yourself telling it and cut anything that does not serve the turn." },
  discuss: [
    "What is a safety story you heard years ago that you still remember? Why that one?",
    "Have you noticed that people argue with statistics but listen to stories?",
    "Which event from our own site should become a story every new starter hears?"
  ],
  reflect: "Do you tell stories to make a point, or to let people find it?",
  quiz: [
    { q: "Narrative transportation refers to:", options: ["Moving workers between sites", "Being absorbed in a story", "Telling stories in vehicles", "Writing reports"], answer: 1, why: "Green and Brock (2000)." },
    { q: "In Green and Brock's studies, more transported readers:", options: ["Noticed more false notes", "Shifted beliefs further toward the story", "Remembered less", "Were less persuaded"], answer: 1, why: "Absorption lowers counter-arguing." },
    { q: "The best ending for a safety story is usually:", options: ["A long moral", "A question for the listeners", "A regulation number", "A threat"], answer: 1, why: "They reach the conclusion themselves." }
  ],
  sources: [
    "Green, M. C., & Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. Journal of Personality and Social Psychology, 79(5), 701-721.",
    "Heath, C., & Heath, D. (2007). Made to Stick. Random House."
  ]
},
{
  id: "w8-l6", week: 8, n: 6, track: "craft", area: "Learning how to learn", minutes: 20,
  title: "Notes you will actually use",
  book: null,
  bigIdea: "Copying what is said word for word feels productive and teaches little. Notes help when you put ideas in your own words and come back to them later.",
  why: "You take notes in courses, meetings and investigations. A few changes make those notes a tool you can learn and work from, instead of a record you never read.",
  science: [
    "In 2014 Pam Mueller and Daniel Oppenheimer reported that students taking notes on laptops did worse on conceptual questions than those writing by hand, apparently because typists copied lectures word for word. The study was widely reported as 'handwriting beats typing'.",
    "Later direct replications did not support that headline. Morehead, Dunlosky and Rawson (2019) and Urry and colleagues (2021) found no reliable advantage for longhand on conceptual learning. What did hold up is that <b>verbatim copying</b> tends to go with poorer learning.",
    "What reliably helps is <b>generating</b>: summarising in your own words, making questions from your notes, and reviewing them later, which connects to the retrieval and spacing lessons."
  ],
  evidence: "Contested",
  evidenceNote: "The pen-versus-laptop claim is not supported by later replications. The benefit of summarising in your own words and reviewing later rests on wider learning research.",
  work: [
    "In an investigation interview, write the witness's key phrases in their words, because exact wording matters there. In a course or meeting, write the idea in yours.",
    "A simple layout: a narrow left column for questions or keywords, a wide right column for notes, and two lines at the bottom summarising the page. This is the Cornell method, developed at Cornell University in the 1950s."
  ],
  techniques: [
    { name: "Write it your way", how: "If you catch yourself copying sentences, stop and write what it means instead." },
    { name: "Turn notes into questions", how: "After a session, write three questions your notes can answer. Use them to test yourself later." },
    { name: "Summarise in two lines", how: "End each page or meeting with a two-line summary. If you cannot write it, you did not follow it." }
  ],
  assignment: { level: "Practise", task: "Take notes at your next meeting or training using a question column and a two-line summary. A week later, cover the notes and answer your own questions.", stretch: "Compare with notes you took the old way and decide which you would rather use." },
  discuss: [
    "When did you last reread notes from a course? What did you find there?",
    "Copying down what someone says and understanding it are different things. Fair?",
    "What should our investigation notes always capture word for word, and what in our own words?"
  ],
  reflect: "Do your notes help you think, or only prove you were there?",
  quiz: [
    { q: "Later replications of Mueller and Oppenheimer (2014) found:", options: ["Handwriting always wins", "No reliable longhand advantage for conceptual learning", "Laptops always win", "Notes do not matter"], answer: 1, why: "Morehead et al. 2019; Urry et al. 2021." },
    { q: "What tends to go with poorer learning?", options: ["Summarising", "Verbatim copying", "Making questions", "Reviewing later"], answer: 1, why: "Copying skips the processing that builds understanding." },
    { q: "In an investigation interview, a witness's key phrases should be recorded:", options: ["In your own words", "Word for word", "Not at all", "Only if they agree"], answer: 1, why: "Exact wording can matter as evidence." }
  ],
  sources: [
    "Mueller, P. A., & Oppenheimer, D. M. (2014). The pen is mightier than the keyboard. Psychological Science, 25(6), 1159-1168.",
    "Morehead, K., Dunlosky, J., & Rawson, K. A. (2019). How much mightier is the pen than the keyboard for note-taking? Educational Psychology Review, 31(3), 753-780.",
    "Urry, H. L., et al. (2021). Don't ditch the laptop just yet: A direct replication of Mueller and Oppenheimer's (2014) Study 1. Psychological Science, 32(3), 326-339."
  ]
},
{
  id: "w8-l7", week: 8, n: 7, track: "people", area: "Leadership", minutes: 20,
  title: "Feedback that improves performance, and feedback that does not",
  book: null,
  bigIdea: "Feedback helps on average, but in about one case in three it makes performance worse. The difference is whether it points attention at the task or at the person.",
  why: "Inspections, observations and coaching are all feedback. If yours lands on the person ('you are careless') rather than the task ('the chock was on the downhill side'), you may be making things worse.",
  science: [
    "Avraham Kluger and Angelo DeNisi analysed 607 effect sizes in 1996. Feedback improved performance on average (d = 0.41), but <b>over a third of feedback interventions decreased performance</b>. This could not be explained by sampling error.",
    "Their explanation: feedback works when it keeps attention on the <b>task</b>, what to do and how to do it. It fails when it pulls attention up to the <b>self</b>, such as how good or bad a person is, how they compare with others, and what the boss thinks of them.",
    "Praise and criticism of the person both risk this. Specific, behavioural feedback on the work tends to be safer."
  ],
  evidence: "Established",
  evidenceNote: "This meta-analysis is one of the most cited in the field and its main finding has held. The mechanism is a theory with good support, not a settled law.",
  work: [
    "Task feedback: 'When you reversed, the spotter was out of your mirror for about five seconds. Where could he stand so you keep him?' Self feedback: 'You are always rushing.' The first gives the operator something to do. The second gives him something to defend.",
    "Behaviour-based safety observations often fail for exactly this reason: the conversation becomes about the worker, not the work."
  ],
  techniques: [
    { name: "Describe, do not label", how: "Say what you saw, where and when. Leave out adjectives about the person." },
    { name: "Ask, then add", how: "'How did that lift go from where you were?' Let them assess it first, then add what you saw." },
    { name: "One thing to try", how: "End with a single specific change for next time, not a list." }
  ],
  assignment: { level: "Practise", task: "In your next three observations or coaching conversations, give feedback only about the task: what you saw and one thing to try. Note how each person responded.", stretch: "Ask a colleague to watch one of your feedback conversations and count any comments about the person rather than the work." },
  discuss: [
    "What is the most useful feedback you have ever received? Was it about you or about what you did?",
    "Tell someone 'you are careless' and all they can do is defend themselves. Isn't that right?",
    "How much of our observation feedback is about the person rather than the work?"
  ],
  reflect: "When you give feedback, are you trying to improve the work or to be right?",
  quiz: [
    { q: "Kluger and DeNisi found that feedback interventions:", options: ["Always improved performance", "Improved performance on average but over a third made it worse", "Never helped", "Only helped managers"], answer: 1, why: "607 effect sizes; d = 0.41 overall." },
    { q: "Feedback tends to work best when it directs attention to:", options: ["The person's character", "Comparison with others", "The task and how to do it", "The manager's opinion"], answer: 2, why: "Self-focused feedback tends to backfire." },
    { q: "Which is task-focused feedback?", options: ["You're always rushing", "Good job, you're a star", "The chock was on the downhill side; put it on the uphill side", "You need a better attitude"], answer: 2, why: "Specific, behavioural and actionable." }
  ],
  sources: [
    "Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance: A historical review, a meta-analysis, and a preliminary feedback intervention theory. Psychological Bulletin, 119(2), 254-284.",
    "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81-112."
  ]
}
);
window.LESSONS.sort(function(a,b){ return a.week-b.week || a.n-b.n; });
