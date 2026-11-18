/* Weeks 5 and 6: risk assessment and management (Yates Ch. 26), risk perception, writing findings people act on. */
window.LESSONS.push(
{
  id: "w5-l1", week: 5, n: 1, track: "safety", area: "Risk management", minutes: 25,
  title: "The risk matrix: useful, and flawed",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "A risk matrix gets a conversation about priority started. Treat its colours as measurements and you'll make wrong decisions.",
  why: "You probably fill one in every week. Knowing exactly where matrices mislead lets you keep using them without being fooled, and lets you explain why a 'medium' can deserve more attention than a 'high'.",
  science: [
    "A matrix multiplies or cross-references a likelihood category and a consequence category to give a rating. IEC 31010 lists it as a screening technique: quick, visual, good for sorting many risks roughly.",
    "In 2008 Tony Cox published a mathematical critique in Risk Analysis. He showed matrices have <b>poor resolution</b>, since very different risks land in the same cell; suffer <b>range compression</b>, since a category like 'major' can span a single fatality and many; and can even <b>rank a quantitatively smaller risk above a larger one</b>.",
    "There is also a human problem. Likelihood words mean different things to different people, and ratings tend to drift toward whatever colour avoids extra paperwork."
  ],
  evidence: "Established",
  evidenceNote: "Cox's argument is mathematical and has not been refuted. Matrices remain standard practice because nothing equally simple has replaced them.",
  work: [
    "Two risks are both rated 'medium'. One is frequent minor hand injuries. The other is a rare vehicle rollover that would kill the driver. Scored as likelihood times consequence they tie. They are different kinds of problem, and they shouldn't compete for the same attention.",
    "Many mining companies now treat anything with a credible fatal consequence separately, whatever its likelihood score, for exactly this reason."
  ],
  techniques: [
    { name: "Read consequence first", how: "Sort by worst credible consequence before looking at the overall score. Fatal potential gets its own list." },
    { name: "Anchor the words", how: "Define each likelihood level with a number or example, such as 'has happened on this site in the last five years'." },
    { name: "Record the reasoning", how: "Next to each rating, write one line on why. The sentence is worth more than the colour." }
  ],
  assignment: { level: "Think", task: "Take a risk register or a set of JHAs. Find two risks with the same rating that you would not treat as equal. Write what the matrix hid in each case.", stretch: "Ask three colleagues separately to rate the same hazard and compare their answers." },
  discuss: [
    "Have you ever adjusted a rating until it came out the colour you needed?",
    "A rare fatality and a frequent bruise shouldn't share a box, should they?",
    "What do 'unlikely' and 'possible' mean, in numbers, to each of us?"
  ],
  reflect: "How often do you decide the rating first and then choose the scores to match?",
  quiz: [
    { q: "Cox (2008) showed risk matrices can:", options: ["Predict incidents accurately", "Assign a higher rating to a quantitatively smaller risk", "Replace quantitative analysis", "Remove bias"], answer: 1, why: "One of several mathematical limitations he demonstrated." },
    { q: "'Range compression' means:", options: ["Too many colours", "Very different consequences fall in one category", "The matrix is too small to print", "Likelihood is ignored"], answer: 1, why: "'Major' may cover one death or twenty." },
    { q: "A sensible use of a matrix is:", options: ["Precise ranking of all risks", "Rough screening to start a discussion", "Proving a risk is acceptable", "Replacing controls"], answer: 1, why: "It sorts; it does not measure." }
  ],
  sources: [
    "Cox, L. A. (2008). What's wrong with risk matrices? Risk Analysis, 28(2), 497-512.",
    "IEC 31010:2019, Risk management: Risk assessment techniques.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w5-l2", week: 5, n: 2, track: "safety", area: "Risk management", minutes: 25,
  title: "How low is low enough? ALARP",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "Zero risk doesn't exist, so you need a way to decide when to stop adding controls. ALARP gives an answer: when the cost of the next control is grossly out of proportion to the risk it would remove.",
  why: "Sooner or later a manager will ask why you want more spent on a risk that is already controlled, or a worker will ask why the company has not done more. ALARP is the reasoning both of them deserve.",
  science: [
    "ALARP means <b>as low as reasonably practicable</b>. The idea comes from a 1949 English court case, Edwards v National Coal Board. The court held that a risk must be weighed against the money, time and trouble needed to avert it, and that the measure may only be left undone if that sacrifice is <b>grossly disproportionate</b> to the risk.",
    "The test is deliberately tilted. It is not a break-even calculation. The duty holder must act unless the cost clearly and heavily outweighs the benefit, and the bias grows as the risk grows.",
    "The UK Health and Safety Executive's framework, Reducing Risks, Protecting People (2001), sets three bands: <b>unacceptable</b>, <b>tolerable if ALARP</b>, and <b>broadly acceptable</b>. As guide figures it suggests an individual risk of death of 1 in 1,000 a year as the upper limit for workers, and 1 in a million a year as broadly acceptable."
  ],
  evidence: "Established",
  evidenceNote: "This is settled UK law and regulator policy, and many mining companies adopt it by choice. It is not automatically the legal test in Ghana, so check what your own regulations and company standard say.",
  work: [
    "A haul road has a 30 metre drop on one side. A full-height berm is in place. Someone proposes a second, engineered barrier at very high cost. Is the remaining risk fatal? Yes. Is the cost grossly disproportionate to it? That is the argument to have, openly, with numbers.",
    "\"We comply with the standard\" is where the ALARP argument starts, not where it ends. The question is always what else could reasonably be done."
  ],
  techniques: [
    { name: "List the options not taken", how: "For each major risk, record the further controls considered and why each was rejected. That record is your ALARP case." },
    { name: "Start from good practice", how: "Compare your controls with what similar operations do. Falling below common practice needs a strong reason." },
    { name: "Scale the tilt", how: "The worse the consequence, the more disproportion you should demand before saying no." }
  ],
  assignment: { level: "Think", task: "Choose one significant risk on your site. List the controls in place, then two further controls that could be added. For each, write whether you think its cost is grossly disproportionate, and why.", stretch: "Find out whether your company's risk standard uses ALARP or another test, and what words it uses." },
  discuss: [
    "When we say a risk is 'acceptable', acceptable to whom?",
    "If we were the ones carrying a risk, we'd want to know why more wasn't done. Wouldn't we?",
    "Which risk here do we tolerate mainly because it has always been there?"
  ],
  reflect: "Which control did you once argue was too expensive, and would you defend that today?",
  quiz: [
    { q: "Under ALARP, a further control may be left out only if its cost is:", options: ["Higher than the benefit", "Not budgeted", "Grossly disproportionate to the risk reduced", "Above an industry average"], answer: 2, why: "The test is weighted in favour of safety." },
    { q: "The principle originates from:", options: ["ISO 45001", "Edwards v National Coal Board (1949)", "The OSH Act 1970", "Heinrich (1931)"], answer: 1, why: "An English Court of Appeal judgment." },
    { q: "The HSE's three bands are unacceptable, tolerable if ALARP, and:", options: ["Negligible", "Broadly acceptable", "Insured", "Transferred"], answer: 1, why: "Set out in Reducing Risks, Protecting People." }
  ],
  sources: [
    "Edwards v National Coal Board [1949] 1 KB 704.",
    "Health and Safety Executive (2001). Reducing Risks, Protecting People: HSE's decision-making process. HSE Books.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w5-l3", week: 5, n: 3, track: "people", area: "Risk perception", minutes: 20,
  title: "Why people fear the wrong things",
  book: null,
  bigIdea: "People do not judge risk by counting deaths. They judge it by how dreadful and how unfamiliar it feels. So a crew can worry about a new chemical and stay relaxed on the haul road.",
  why: "If you present statistics and expect behaviour to follow, you will be disappointed. To shift how a crew treats a risk you need to understand what makes it feel large or small to them.",
  science: [
    "Paul Slovic's 1987 paper in Science summarised a decade of studies asking people to rate dozens of hazards. Two factors explained most of the pattern. <b>Dread</b>: is it catastrophic, uncontrollable, fatal, involuntary? <b>Unknown</b>: is it new, invisible, delayed, poorly understood by science?",
    "Hazards high on both, such as nuclear power in his data, were rated far more risky by the public than by experts. Hazards low on both, such as driving or home appliances, were rated less risky than their death tolls justified.",
    "Earlier, Chauncey Starr (1969) had estimated that people accept roughly a thousand times more risk from activities they choose than from those imposed on them. Control and choice make a risk feel smaller."
  ],
  evidence: "Established",
  evidenceNote: "The two-factor pattern has been repeated in many countries. Starr's thousandfold figure was a rough estimate from limited data and should be read as an order of magnitude at most.",
  work: [
    "Light vehicle driving on site scores low on both factors: familiar, voluntary, under the driver's own control. So it feels safe, and it is one of the leading killers in mining. A cyanide delivery scores high on both and gets full attention, though exposure is brief and tightly controlled.",
    "Chronic harms such as dust and noise are an odd case: invisible and delayed, yet so familiar that the unknown factor fades. They get neither dread nor novelty."
  ],
  techniques: [
    { name: "Make the familiar strange", how: "Show the routine hazard from a new angle: the view from the haul truck cab, the dust seen under a strong light, the audiogram." },
    { name: "Give control back for the dreaded", how: "For hazards that frighten people, explain what they can do. Control lowers dread to a workable level." },
    { name: "Ask before you tell", how: "\"What here worries you most?\" Then compare with your register. The gaps are your communication plan." }
  ],
  assignment: { level: "Investigate", task: "Ask five workers to name the three most dangerous things on site. Compare their answers with the fatal risks in your register. Note which real fatal risks nobody mentioned.", stretch: "For one neglected risk, plan a two-minute demonstration that would make it feel real." },
  discuss: [
    "What is the most dangerous thing you do in a normal week that does not feel dangerous?",
    "Haven't you noticed that being in control of something makes it feel safer than it is?",
    "Which of our fatal risks have become so normal that nobody mentions them?"
  ],
  reflect: "Which risk in your own life do you underrate because you chose it?",
  quiz: [
    { q: "Slovic's two main factors in risk perception are:", options: ["Cost and benefit", "Dread and unknown", "Frequency and severity", "Age and experience"], answer: 1, why: "They explain most differences between public and expert ratings." },
    { q: "A familiar, voluntary, controllable hazard tends to be:", options: ["Overrated", "Underrated", "Accurately judged", "Ignored by experts"], answer: 1, why: "Low dread and low novelty make it feel safe." },
    { q: "Starr estimated people accept far more risk when it is:", options: ["Imposed", "Voluntary", "Invisible", "Rare"], answer: 1, why: "Choice and control shrink perceived risk." }
  ],
  sources: [
    "Slovic, P. (1987). Perception of risk. Science, 236(4799), 280-285.",
    "Starr, C. (1969). Social benefit versus technological risk. Science, 165(3899), 1232-1238.",
    "Fischhoff, B., Slovic, P., Lichtenstein, S., Read, S., & Combs, B. (1978). How safe is safe enough? Policy Sciences, 9(2), 127-152."
  ]
},
{
  id: "w5-l4", week: 5, n: 4, track: "safety", area: "Risk management", minutes: 25,
  title: "Bow-tie analysis",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "A bow-tie puts one unwanted event in the middle, everything that could cause it on the left, everything it could lead to on the right, and shows which barrier stands on each path.",
  why: "It is the clearest single picture of a major risk, and the format most mining companies use for their fatal risks. If you can draw and read one, you can see at a glance which threats have no real barrier.",
  science: [
    "The centre is the <b>top event</b>: the moment control of the hazard is lost, such as 'vehicle leaves the haul road'. On the left are <b>threats</b>, each a separate cause. On the right are <b>consequences</b>. It is, in effect, a simplified fault tree joined to a simplified event tree.",
    "<b>Preventive barriers</b> sit between each threat and the top event. <b>Mitigating barriers</b> sit between the top event and each consequence. <b>Escalation factors</b> are conditions that weaken a barrier, such as a berm eroded by rain, and each should have its own control.",
    "The method is commonly traced to work at ICI in the late 1970s and was taken up widely after Shell adopted it in the 1990s, though its early history is not well documented. The CCPS and Energy Institute published the standard guide in 2018."
  ],
  evidence: "Established practice",
  evidenceNote: "Bow-ties are a communication and structuring tool, endorsed by industry bodies. There is little research testing whether they reduce incidents; their value is in exposing gaps.",
  work: [
    "Top event: haul truck leaves the road at the ramp edge. Threats: brake failure, operator fatigue, wet surface, poor visibility. Consequences: rollover and fatality, collision with plant below. Draw each threat's line and place the barriers on it.",
    "The fatigue line may hold only 'operator self-reports' and 'supervisor observes'. Both rely on judgement, late at night. The picture has just shown you a threat with no hard barrier."
  ],
  techniques: [
    { name: "One line per threat", how: "Never share a barrier across threats without checking it really acts on each. Brake testing does nothing for fatigue." },
    { name: "A barrier must act by itself", how: "It needs to detect, decide and act. 'Training' and 'procedure' support barriers; they are not barriers." },
    { name: "Count the hard barriers", how: "For each threat, count barriers that work without a person remembering. A line with none is your priority." }
  ],
  assignment: { level: "Practise", task: "Draw a bow-tie by hand for one fatal risk on your site: one top event, at least three threats, two consequences, and the barriers on every line. Mark each barrier H (hard) or P (depends on a person).", stretch: "Add one escalation factor to your most important barrier and say what controls it." },
  discuss: [
    "For our top fatal risk, can we name the barriers on each cause without looking them up?",
    "A barrier that needs someone to remember is weaker than one that doesn't. Does that fit what you've seen?",
    "Which threat line would we find nearly empty if we drew it honestly?"
  ],
  reflect: "Which item on your site's bow-ties is listed as a barrier but could not stop anything unaided?",
  quiz: [
    { q: "In a bow-tie, the top event is:", options: ["The worst consequence", "The root cause", "The point where control of the hazard is lost", "The first threat"], answer: 2, why: "Threats lead to it; consequences follow from it." },
    { q: "Barriers on the right-hand side are:", options: ["Preventive", "Mitigating", "Administrative only", "Escalation factors"], answer: 1, why: "They act after the top event to limit consequences." },
    { q: "An escalation factor is:", options: ["A second top event", "A condition that weakens a barrier", "A very severe consequence", "A new threat"], answer: 1, why: "It needs its own control." }
  ],
  sources: [
    "CCPS & Energy Institute (2018). Bow Ties in Risk Management: A Concept Book for Process Safety. Wiley.",
    "International Council on Mining and Metals (2015). Health and Safety Critical Control Management: Good Practice Guide.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w5-l5", week: 5, n: 5, track: "craft", area: "Writing", minutes: 20,
  title: "Writing findings people act on",
  book: null,
  bigIdea: "A finding that says 'housekeeping poor' gets a shrug. A finding that says what you saw, what should be there, why the gap exists and what it could cost gets fixed.",
  why: "Inspection and audit findings are most of what a safety department produces in writing. Vague ones are closed with a photograph of a swept floor. Specific ones change something.",
  science: [
    "Internal audit practice structures a finding with five elements, often called the five Cs. <b>Condition</b>: what you found. <b>Criteria</b>: what the standard requires. <b>Cause</b>: why the gap exists. <b>Consequence</b>: what could result. <b>Corrective action</b>: what should change. Leave one out and the reader has to guess it.",
    "Plain wording matters more than writers expect. In 2006 Daniel Oppenheimer gave readers versions of the same texts with simple or needlessly complex vocabulary. Authors of the complex versions were judged <b>less intelligent</b>, not more.",
    "Long words and passive sentences do not make a finding sound authoritative. They make it slower to read and easier to ignore."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The five-element structure is professional audit practice, not research. Oppenheimer's experiments are peer reviewed and used student readers, so apply the result as a strong hint.",
  work: [
    "Weak: \"Inadequate guarding observed on conveyor.\" Strong: \"The tail pulley guard on CV-04 was missing on 12 March (condition). Site standard requires fixed guards on all nip points (criteria). It was removed for a belt repair on 3 March and the job was closed without a reinstatement check (cause). A hand or sleeve could be drawn in (consequence). Add guard reinstatement to the work order close-out (action).\"",
    "The second takes forty more seconds to write and cannot be closed with a photograph alone, because it names the cause."
  ],
  techniques: [
    { name: "Five Cs, five sentences", how: "One sentence each. If you cannot write the cause, say so and ask; do not skip it." },
    { name: "Name the thing", how: "Equipment number, location, date. 'Several areas' cannot be fixed." },
    { name: "Short words, active verbs", how: "\"The guard was missing\" beats \"an absence of guarding was noted\"." }
  ],
  assignment: { level: "Practise", task: "Take three findings from a recent inspection report. Rewrite each with all five elements. For any where the cause is unknown, go and find it.", stretch: "Send one rewritten finding to the area owner and note how the response differs from usual." },
  discuss: [
    "When you receive a finding, what do you need in it before you can act?",
    "Isn't it true that a finding without a cause invites a fix that won't last?",
    "Which words do we use in reports that we would never say out loud?"
  ],
  reflect: "Read your last report aloud. Would you speak that way to the person who has to fix it?",
  quiz: [
    { q: "Which is NOT one of the five Cs of a finding?", options: ["Condition", "Criteria", "Culprit", "Consequence"], answer: 2, why: "The fifth is corrective action; cause is about why, not who." },
    { q: "Oppenheimer (2006) found needlessly complex wording made authors seem:", options: ["More expert", "Less intelligent", "More trustworthy", "No different"], answer: 1, why: "Simple language was rated higher." },
    { q: "'Criteria' in a finding means:", options: ["What you saw", "What the standard requires", "Who is responsible", "What it will cost"], answer: 1, why: "The gap is condition against criteria." }
  ],
  sources: [
    "Institute of Internal Auditors. International Professional Practices Framework: guidance on communicating results.",
    "Oppenheimer, D. M. (2006). Consequences of erudite vernacular utilized irrespective of necessity: Problems with using long words needlessly. Applied Cognitive Psychology, 20(2), 139-156."
  ]
},
{
  id: "w5-l6", week: 5, n: 6, track: "craft", area: "Critical thinking", minutes: 20,
  title: "The pre-mortem: imagine it has already failed",
  book: null,
  bigIdea: "Before a job or a project starts, tell the team it has gone badly wrong and ask them to write down why. People who would never object to a plan will happily explain a failure.",
  why: "Planning meetings reward agreement. By the time a risky lift or a shutdown plan reaches sign-off, doubt feels like disloyalty. A pre-mortem makes voicing doubt the task itself.",
  science: [
    "Gary Klein described the method in Harvard Business Review in 2007. The leader says: imagine we are months ahead and this has failed badly. Everyone independently writes the reasons, then the list is read out and the plan is strengthened.",
    "It rests on <b>prospective hindsight</b>. Mitchell, Russo and Pennington (1989) found that imagining an event as having already happened increased people's ability to identify reasons for the outcome by about <b>30 percent</b>, compared with asking what might happen.",
    "Daniel Kahneman has called it one of the few practical techniques against overconfident planning, because it legitimises dissent and reaches the knowledge of people who would otherwise stay quiet."
  ],
  evidence: "Emerging",
  evidenceNote: "The underlying prospective-hindsight study is peer reviewed. Direct tests of pre-mortems in workplaces are few, so treat it as a promising, low-cost practice.",
  work: [
    "Before a tandem lift: \"It is tomorrow afternoon. The load has dropped. Take two minutes and write why.\" You will get: the ground was soft after rain, the second operator had not done one before, the radio channel was shared with haulage.",
    "None of those was on the lift plan. Each came from someone who signed it."
  ],
  techniques: [
    { name: "State it as fact", how: "Say \"it has failed\", not \"what could go wrong\". The certainty is what unlocks the reasons." },
    { name: "Write before talking", how: "Two silent minutes, on paper, so the first speaker does not set everyone's answer." },
    { name: "Junior voices first", how: "Read out the least senior person's list first." }
  ],
  assignment: { level: "Practise", task: "Run a five-minute pre-mortem before one non-routine task this week. Record every reason the team wrote and which ones were not in the JHA.", stretch: "Run one on a plan of your own and ask a colleague to add to the list." },
  discuss: [
    "Have you ever had a doubt about a plan and kept it to yourself? What made that the easier choice?",
    "Most people find it easier to explain a failure than to challenge a plan. Is that true here?",
    "Which task this month would be worth five minutes of imagining it gone wrong?"
  ],
  reflect: "What plan are you committed to right now that you have not let anyone attack?",
  quiz: [
    { q: "A pre-mortem asks the team to:", options: ["Review a past incident", "Assume the plan has failed and explain why", "Vote on the plan", "List the benefits"], answer: 1, why: "Framing failure as certain releases doubts." },
    { q: "Prospective hindsight was found to increase the reasons identified by about:", options: ["3%", "30%", "100%", "300%"], answer: 1, why: "Mitchell, Russo and Pennington (1989)." },
    { q: "Why write silently first?", options: ["To save time", "So the first speaker does not anchor everyone else", "For the record", "To test spelling"], answer: 1, why: "Independent lists surface more." }
  ],
  sources: [
    "Klein, G. (2007). Performing a project premortem. Harvard Business Review, 85(9), 18-19.",
    "Mitchell, D. J., Russo, J. E., & Pennington, N. (1989). Back to the future: Temporal perspective in the explanation of events. Journal of Behavioral Decision Making, 2(1), 25-38.",
    "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux."
  ]
},
{
  id: "w5-l7", week: 5, n: 7, track: "people", area: "Cognitive biases", minutes: 20,
  title: "Unskilled and unaware: the Dunning-Kruger effect",
  book: null,
  bigIdea: "The skills you need to do something well are often the same skills you need to judge whether you are doing it well. So the people with the most to learn can be the least able to see it.",
  why: "New operators who feel ready, supervisors sure their crew is safe, and safety officers certain of their own investigations are all hard to coach for the same reason. This applies to you as well.",
  science: [
    "In 1999 Justin Kruger and David Dunning tested students on logic, grammar and humour, then asked them to estimate how they had done. Those in the <b>bottom quarter</b> scored on average around the 12th percentile and estimated themselves at about the <b>62nd</b>. Top performers slightly underestimated themselves.",
    "When the weakest participants were given training in the skill, their self-assessment became more accurate. Learning what good looks like let them see their own gap.",
    "The interpretation is debated. Critics including Nuhfer and colleagues (2016) and Gignac and Zajenkowski (2020) argue much of the pattern arises from statistical artefacts: nearly everyone rates themselves above average, and extreme scores drift toward the middle on any second measure."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "That people in general overrate themselves, and that feedback improves calibration, is solid. Whether the least skilled are specially blind is contested. The popular 'Mount Stupid' graph does not appear in the research.",
  work: [
    "A newly ticketed operator says they are comfortable on a machine after three shifts. They are not lying. They do not yet know what the difficult situations look like, so they cannot count them.",
    "The practical lesson holds whichever side of the debate is right: confidence is weak evidence of competence, and people calibrate through specific feedback, not through being told they are overconfident."
  ],
  techniques: [
    { name: "Verify, do not ask", how: "\"Are you competent on this?\" measures confidence. Watching the task against a standard measures competence." },
    { name: "Show what good looks like", how: "Let people see an expert do it, with commentary. Then they can see their own gap." },
    { name: "Predict, then score", how: "Before an assessment, ask the person to predict their result. Compare. The gap is the lesson." }
  ],
  assignment: { level: "Think", task: "Before taking this lesson's quiz and the next two, write down the score you expect. Compare with what you get. Note whether you run high or low.", stretch: "Ask a colleague to rate one of your skills from 1 to 10, rate it yourself separately, then compare and discuss." },
  discuss: [
    "What is something you were sure you were good at until you saw an expert do it?",
    "Feeling confident and being competent are different things, aren't they?",
    "Where do we sign people off on the strength of how sure they sound?"
  ],
  reflect: "In which part of your job have you had no honest feedback for over a year?",
  quiz: [
    { q: "Kruger and Dunning's bottom-quartile performers estimated themselves at about the:", options: ["12th percentile", "30th percentile", "62nd percentile", "90th percentile"], answer: 2, why: "While actually scoring around the 12th." },
    { q: "What made weak performers' self-assessment more accurate?", options: ["Being told they were wrong", "Training in the skill itself", "Time", "Rewards"], answer: 1, why: "Learning the standard revealed the gap." },
    { q: "A fair summary of the current evidence is:", options: ["The effect is fully proven", "The effect is a hoax", "Overconfidence is real; the special blindness of the least skilled is debated", "Experts are the most overconfident"], answer: 2, why: "Statistical critiques challenge part of the original interpretation." }
  ],
  sources: [
    "Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it. Journal of Personality and Social Psychology, 77(6), 1121-1134.",
    "Nuhfer, E., Cogan, C., Fleisher, S., Gaze, E., & Wirth, K. (2016). Random number simulations reveal how random noise affects the measurements and graphical portrayals of self-assessed competency. Numeracy, 9(1), Article 4.",
    "Gignac, G. E., & Zajenkowski, M. (2020). The Dunning-Kruger effect is (mostly) a statistical artefact. Intelligence, 80, 101449."
  ]
},
{
  id: "w6-l1", week: 6, n: 1, track: "safety", area: "Risk management", minutes: 25,
  title: "Critical controls: the few that matter most",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "A fatal risk may have thirty controls on paper. A handful of them do nearly all the work. Find those, define exactly what working looks like, and check them constantly.",
  why: "Mining fatalities keep occurring at operations with thick risk registers. The controls existed; nobody knew which ones were essential or whether they were functioning that day. Critical control management grew out of that problem.",
  science: [
    "The International Council on Mining and Metals published its Critical Control Management guide in 2015. It starts from <b>material unwanted events</b>: the small number of events that could kill people or cause major harm.",
    "A <b>critical control</b> is one that is crucial to preventing the event or limiting its consequences, such that its absence or failure would significantly increase the risk even with the other controls in place.",
    "Each critical control gets a clear <b>objective</b>, a <b>performance standard</b> saying what it must do, and <b>verification</b> activities with a named owner. The guide sets this out in nine steps, from planning to responding when a control is found failing."
  ],
  evidence: "Established practice",
  evidenceNote: "This is industry guidance agreed by major mining companies. It is based on reasoning and experience from fatality investigations more than on controlled evaluation.",
  work: [
    "Material unwanted event: light vehicle struck by heavy vehicle. The register lists inductions, licences, speed limits, radios, flags, signage, berms, segregated roads, proximity detection. Which would you least want to lose? Probably segregation and proximity detection.",
    "For proximity detection the performance standard might read: alarms the heavy vehicle operator at 30 metres, tested at every pre-start, any fault means the vehicle is parked. Now you have something to verify."
  ],
  techniques: [
    { name: "The removal test", how: "For each control ask: if this vanished today, would the risk rise significantly? If not, it is not critical." },
    { name: "Write the standard as a test", how: "A performance standard should be something you can pass or fail in the field." },
    { name: "Verify in the field", how: "Check the control itself, not the paperwork about it. Stand at the berm with a tape." }
  ],
  assignment: { level: "Investigate", task: "Pick one fatal risk on your site. List its controls and choose the three you judge critical. For each, find out whether a written performance standard exists and when it was last verified in the field.", stretch: "Go and verify one yourself against its standard and record the result." },
  discuss: [
    "For our most serious risk, could each of us name the three controls that matter most?",
    "Three controls checked every shift protect more than thirty nobody checks. Can we agree on that?",
    "How would we know, today, if one of our critical controls had stopped working?"
  ],
  reflect: "Which control are you assuming is working because nobody has said otherwise?",
  quiz: [
    { q: "A critical control is one whose failure would:", options: ["Break a rule", "Significantly increase risk despite other controls", "Cost the most to replace", "Be noticed immediately"], answer: 1, why: "The ICMM definition." },
    { q: "A performance standard states:", options: ["Who is to blame", "What the control must do to be effective", "The purchase cost", "The supplier"], answer: 1, why: "It makes the control testable." },
    { q: "Verification should check:", options: ["That the form is signed", "The control itself, in the field", "The risk rating", "The training matrix"], answer: 1, why: "Paper can be complete while the control has failed." }
  ],
  sources: [
    "International Council on Mining and Metals (2015). Health and Safety Critical Control Management: Good Practice Guide.",
    "International Council on Mining and Metals (2015). Critical Control Management: Implementation Guide.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w6-l2", week: 6, n: 2, track: "safety", area: "Risk management", minutes: 25,
  title: "Layers of protection, and the trap of shared weakness",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "Several layers of protection only multiply your safety if they fail independently. Layers that share a power supply, a sensor or a tired person fail together, and you have far less protection than the count suggests.",
  why: "People take comfort in defence in depth. Often they're counting controls that all depend on the same thing. Spotting common-cause failure is one of the most valuable habits in risk work.",
  science: [
    "Layer of protection analysis, set out by the Center for Chemical Process Safety in 2001, estimates risk by taking the frequency of an initiating event and multiplying by the failure probability of each protection layer in turn.",
    "That multiplication is valid only for <b>independent protection layers</b>. To count, a layer must be effective by itself, <b>independent</b> of the initiating event and of the other layers, and auditable.",
    "A <b>common-cause failure</b> is a single condition that defeats more than one layer at once. Two alarms on one power circuit. A procedure and a supervisor check both done by the same rushed person. Two inspections that both rely on the same out-of-date drawing."
  ],
  evidence: "Established",
  evidenceNote: "The mathematics of independence is not in question. The failure probabilities used in practice are estimates, often generous ones.",
  work: [
    "A tailings pond has a level sensor with a high alarm, and a second high-high alarm. Two layers, each failing perhaps one time in ten: one in a hundred together. But both transmitters sit on the same pole, share a cable and report to the same control room screen. A lightning strike takes out both. The true figure is nearer one in ten.",
    "Human layers are the most often double-counted. 'Operator checks' and 'supervisor checks' are one layer if the supervisor trusts the operator's tick."
  ],
  techniques: [
    { name: "Ask what they share", how: "For any two controls on the same risk, list what both depend on: power, people, data, timing, weather." },
    { name: "Diversify", how: "A second layer of a different kind beats a duplicate. A mechanical stop behind an electronic alarm." },
    { name: "Discount human pairs", how: "Treat two checks by people in the same team, on the same shift, as one and a bit, not two." }
  ],
  assignment: { level: "Think", task: "Choose one risk with at least three listed controls. For each pair, write what they have in common. Decide how many truly independent layers there are.", stretch: "Propose one change that would make two of them properly independent." },
  discuss: [
    "When we say a risk has 'multiple controls', how many of them rely on the same person doing the right thing?",
    "A second copy of the same control is worth less than a different kind of control, isn't it?",
    "What single failure, such as a power cut or one absent person, would take out several of our controls at once?"
  ],
  reflect: "Which two of your controls would the same bad day defeat?",
  quiz: [
    { q: "Multiplying failure probabilities across layers is valid only if the layers are:", options: ["Expensive", "Independent", "Automated", "Documented"], answer: 1, why: "Shared dependencies break the multiplication." },
    { q: "Two alarms on the same power circuit are an example of:", options: ["Diversity", "Redundancy with a common-cause weakness", "An independent protection layer", "Elimination"], answer: 1, why: "One fault can disable both." },
    { q: "Which pairing is most independent?", options: ["Two identical sensors side by side", "Operator check and supervisor sign-off of the same form", "An electronic alarm and a mechanical overflow weir", "Two procedures"], answer: 2, why: "Different mechanisms, different failure causes." }
  ],
  sources: [
    "Center for Chemical Process Safety (2001). Layer of Protection Analysis: Simplified Process Risk Assessment. AIChE/Wiley.",
    "IEC 31010:2019, Risk management: Risk assessment techniques.",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w6-l3", week: 6, n: 3, track: "people", area: "Risk perception", minutes: 20,
  title: "Risk compensation: when people spend the safety you gave them",
  book: null,
  bigIdea: "Make something feel safer and some people will use part of that margin to go faster, closer or longer. The control still helps, but less than its design promised.",
  why: "New equipment, better PPE and automatic systems are sold on their full protective effect. Planning for how behaviour may shift lets you keep more of the benefit.",
  science: [
    "In 1975 economist Sam Peltzman argued that drivers in cars with mandated safety features drove with less care, offsetting part of the gain. Gerald Wilde went further with <b>risk homeostasis</b> (1982): people have a level of risk they accept and adjust their behaviour to stay near it.",
    "The best-known field test is a Munich taxi study reported by Aschenbrenner and Biehl (1994). Part of a fleet had anti-lock brakes. Over three years the ABS cabs had <b>no fewer crashes</b>, and observers rated their drivers as braking harder and following closer.",
    "The strong version, that safety measures are fully cancelled out, is not supported. Seat belts, helmets and guards do reduce deaths and injuries overall. The fair conclusion is that compensation happens sometimes, in part, mostly when the measure changes how safe people feel or lets them go faster."
  ],
  evidence: "Contested",
  evidenceNote: "Some adaptation is well documented. How large and how common it is remains disputed, and full risk homeostasis is rejected by most reviewers. Use this lesson as a prompt to check, not as a law.",
  work: [
    "A site fits collision-avoidance alarms to haul trucks. Six months on, operators have learned they will be warned, so they reverse without looking. The system that was meant to be a backup has become the only check.",
    "Same pattern with cut-resistant gloves and knife handling, or a wider, smoother haul road and speed."
  ],
  techniques: [
    { name: "Ask what will feel different", how: "Before introducing a control, ask what operators might do differently once they trust it." },
    { name: "Measure behaviour, not only outcomes", how: "After a change, observe speeds, following distances and checks, alongside the incident count." },
    { name: "Present it as a backup", how: "Say plainly: this catches you when you slip. It does not replace looking." }
  ],
  assignment: { level: "Investigate", task: "Pick one safety improvement introduced on your site in the last two years. Observe or ask how people's behaviour around it has changed since. Record anything they now do that they did not before.", stretch: "Find the pre-change and post-change data for one behaviour, such as speed, and compare." },
  discuss: [
    "Do you drive any differently in a vehicle with better brakes or more airbags?",
    "Have you seen a control people trust so completely that it becomes the only one?",
    "Which of our newer safety systems are operators now relying on in place of their own checks?"
  ],
  reflect: "What safety feature do you lean on so heavily that you have stopped doing the thing it was meant to back up?",
  quiz: [
    { q: "In the Munich taxi study, cabs with ABS had:", options: ["Far fewer crashes", "No fewer crashes, with harder braking and closer following", "More fatal crashes", "No change in driving style"], answer: 1, why: "Drivers used the extra margin." },
    { q: "The evidence best supports which statement?", options: ["Safety measures never work", "Safety measures always deliver full benefit", "Behaviour sometimes adapts and offsets part of the benefit", "People seek maximum risk"], answer: 2, why: "Partial, situation-dependent compensation." },
    { q: "A useful response is to:", options: ["Remove the control", "Observe behaviour after introducing a control", "Hide the control from operators", "Lower pay"], answer: 1, why: "Outcomes alone will not show the shift early enough." }
  ],
  sources: [
    "Peltzman, S. (1975). The effects of automobile safety regulation. Journal of Political Economy, 83(4), 677-725.",
    "Wilde, G. J. S. (1982). The theory of risk homeostasis: Implications for safety and health. Risk Analysis, 2(4), 209-225.",
    "Aschenbrenner, M., & Biehl, B. (1994). Improved safety through improved technical measures? In Trimpop & Wilde (Eds.), Challenges to Accident Prevention. Styx."
  ]
},
{
  id: "w6-l4", week: 6, n: 4, track: "safety", area: "Risk management", minutes: 20,
  title: "Take 5 and pre-task risk assessment: thinking or ticking?",
  book: "Yates, Ch. 26: Risk Assessment and Management",
  bigIdea: "A pre-task risk assessment is meant to make a person stop and think about this job, today. Once it becomes a form to hand in, it protects the company's records and nobody's fingers.",
  why: "You probably collect and count these cards. If the count is the goal, you will get a full box of identical cards and no extra thinking. The purpose is the pause.",
  science: [
    "The idea of <b>dynamic risk assessment</b> was formalised by the UK fire service in the late 1990s: a continuous assessment made by the person at the scene as conditions change, because no written plan can anticipate a live incident.",
    "Industry versions such as Take 5 and step-back cards turn that into a short prompt: stop, look, identify hazards, control them, proceed.",
    "David Borys studied these programmes on Australian worksites in 2009. He found a gap between how managers imagined the tools were used and how workers used them. Managers saw a thinking aid. Many workers saw paperwork required before starting, often completed afterwards or copied from the last one."
  ],
  evidence: "Emerging",
  evidenceNote: "Dynamic risk assessment is established practice in emergency services. Evidence that card-based versions reduce injuries is thin, and the main field study is qualitative. Their value depends heavily on how they are used.",
  work: [
    "Collect twenty Take 5 cards from one crew. If the same three hazards appear on every card, in the same handwriting rhythm, whatever the task, the cards are recording a habit of writing, not a habit of looking.",
    "Compare a supervisor who asks at the job, \"what is different about this one?\" and listens. No card, more thinking. The card is useful when it prompts that conversation, not when it replaces it."
  ],
  techniques: [
    { name: "Ask for the difference", how: "One question does most of the work: what is different today from the last time you did this?" },
    { name: "Stop counting cards", how: "Measure how many jobs were changed or stopped because of the assessment, not how many forms were filled." },
    { name: "Do it at the workface", how: "A card completed in the crib room is a memory test. Stand at the job." }
  ],
  assignment: { level: "Investigate", task: "Collect ten completed pre-task assessments from different jobs. Count how many list hazards specific to that task and day, and how many could have been written without seeing the job.", stretch: "Stand with a crew as they complete one and note how long they look at the job itself." },
  discuss: [
    "Have you ever filled in a Take 5 after the job was done?",
    "A form filled in without looking tells us nothing about the job. Fair?",
    "If we stopped collecting the cards tomorrow, what would we lose, and what would we have to do in their place?"
  ],
  reflect: "What do you measure about pre-task assessments, and what behaviour does that measure reward?",
  quiz: [
    { q: "Dynamic risk assessment was formalised by:", options: ["Toyota", "The UK fire service", "NASA", "ICMM"], answer: 1, why: "For conditions that change faster than any written plan." },
    { q: "Borys (2009) found many workers saw pre-task cards as:", options: ["A valued thinking tool", "Paperwork needed before starting work", "A legal document", "A training record"], answer: 1, why: "A gap between work as imagined and work as done." },
    { q: "A better measure of the tool's value is:", options: ["Cards submitted per shift", "Jobs changed or stopped as a result", "Neatness of handwriting", "Time to complete"], answer: 1, why: "It reflects thinking, not form-filling." }
  ],
  sources: [
    "Home Office (1998). Dynamic Management of Risk at Operational Incidents: A Fire Service Guide. The Stationery Office.",
    "Borys, D. (2009). Exploring risk-awareness as a cultural approach to safety: Exposing the gap between work as imagined and work as actually performed. Safety Science, 47(6).",
    "Yates, W. D. (2025). Safety Professional's Reference and Study Guide, 4th ed., Ch. 26. CRC Press."
  ]
},
{
  id: "w6-l5", week: 6, n: 5, track: "craft", area: "Communication", minutes: 20,
  title: "Presenting risk numbers without misleading anyone",
  book: null,
  bigIdea: "\"Risk doubled\" and \"risk rose from one in seven thousand to two in seven thousand\" describe the same fact. The first causes panic. The second lets people judge. How you present a number decides what people do with it.",
  why: "You report rates, trends and comparisons to managers and crews. A relative figure with no baseline can frighten people over nothing or reassure them over something serious, and either way your credibility is spent.",
  science: [
    "In October 1995 the UK Committee on Safety of Medicines warned that a newer contraceptive pill <b>doubled</b> the risk of blood clots, a 100 percent increase. Many women stopped taking it. The underlying figures were about 1 case in 7,000 women rising to 2 in 7,000.",
    "Gerd Gigerenzer and colleagues, reviewing the episode in 2007, reported an estimated <b>13,000 additional abortions</b> in England and Wales the following year. The absolute increase was 1 in 7,000. The relative framing did the harm.",
    "Their recommendations: give <b>absolute risks</b> with the baseline, use <b>natural frequencies</b> (counts out of a stated number), keep the same denominator when comparing, and always state the time period."
  ],
  evidence: "Established",
  evidenceNote: "The pill scare is well documented, and the benefit of absolute risks and frequencies is supported by many experiments with doctors and patients.",
  work: [
    "\"Hand injuries are up 50 percent.\" From what? If that is four last year and six this year, it may be noise, as Week 2 showed. If it is forty and sixty, it is a problem. The percentage alone cannot tell you.",
    "Equally, \"our rate is 30 percent below industry average\" says nothing about whether anyone is at risk of being killed."
  ],
  techniques: [
    { name: "Count, base, period", how: "Every figure carries three things: how many, out of how many, over what time. \"6 injuries in 410,000 hours, January to June.\"" },
    { name: "Absolute beside relative", how: "If you must give a percentage change, put the two raw numbers next to it." },
    { name: "Same denominator", how: "Never compare '1 in 250' with '3 in 1,000'. Convert both to the same base." }
  ],
  assignment: { level: "Practise", task: "Find three statistics in a recent safety report or presentation. Rewrite each with count, base and period. Note any that turned out less, or more, alarming than they first sounded.", stretch: "Present one of them both ways to two different colleagues and compare their reactions." },
  discuss: [
    "If I say a risk has doubled, what is the first thing you would want to know?",
    "Can we agree that a percentage without its starting number can mean almost anything?",
    "Which figure in our monthly report would look different if we showed the raw counts?"
  ],
  reflect: "Have you ever chosen a way of presenting a number because it made your point stronger?",
  quiz: [
    { q: "In the 1995 pill scare, a '100% increase' was actually a rise from about:", options: ["1 in 70 to 2 in 70", "1 in 700 to 2 in 700", "1 in 7,000 to 2 in 7,000", "1 in 70,000 to 2 in 70,000"], answer: 2, why: "A small absolute change presented as a large relative one." },
    { q: "A relative risk increase tells you:", options: ["How many people are affected", "The change as a proportion of the starting risk", "The baseline", "The time period"], answer: 1, why: "Without the baseline it cannot show scale." },
    { q: "Which statement is clearest?", options: ["Injuries up 50%", "Injury risk has risen sharply", "6 injuries this half against 4 last half, in similar hours", "Performance is trending adversely"], answer: 2, why: "It gives counts, comparison and exposure." }
  ],
  sources: [
    "Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M., & Woloshin, S. (2007). Helping doctors and patients make sense of health statistics. Psychological Science in the Public Interest, 8(2), 53-96.",
    "Furedi, A. (1999). The public health implications of the 1995 'pill scare'. Human Reproduction Update, 5(6), 621-626."
  ]
},
{
  id: "w6-l6", week: 6, n: 6, track: "craft", area: "Learning how to learn", minutes: 20,
  title: "Learn it by teaching it",
  book: null,
  bigIdea: "Preparing to explain something to another person makes you organise it, find the holes and put it in plain words. Then explaining it shows you which parts you only thought you understood.",
  why: "This hub asks you to teach colleagues on team days. You'll gain more than they do. Teaching is the best study method you have, and the fastest way to become the person others come to.",
  science: [
    "John Nestojko and colleagues (2014) had students read a passage. Half were told they would be tested, half that they would teach it to another student. Nobody taught. Those <b>expecting to teach</b> recalled more, and organised it better, than those expecting a test.",
    "Logan Fiorella and Richard Mayer (2013) separated the two steps. Expecting to teach helped on an immediate test. <b>Teaching for real</b> produced the gain that was still there on a delayed test.",
    "The popular 'Feynman technique', explaining an idea in simple words as if to a beginner and going back wherever you stumble, is a practical version of the same thing. The name is informal; the research above is what supports it."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "Several experiments show the effect, mainly with students and short texts. The benefit depends on generating the explanation yourself, not reading a script.",
  work: [
    "Two officers attend the same confined-space course. One files the certificate. The other is asked to brief the department for ten minutes the following week. Six months later only one of them can still explain how to calculate purge time.",
    "This is also why reading out a slide deck someone else wrote teaches the presenter almost nothing."
  ],
  techniques: [
    { name: "Study as if you teach tomorrow", how: "Read every lesson asking: how would I explain this to a new graduate trainee?" },
    { name: "Explain without notes", how: "Say it aloud, to a person or a phone recorder. Wherever you hesitate, that is the part to restudy." },
    { name: "Ban the jargon", how: "If you can only explain it using the textbook's words, you have memorised it, not understood it." }
  ],
  assignment: { level: "Practise", task: "Choose one lesson from the last three weeks. Explain it to a colleague or family member in three minutes without notes. Write down where you got stuck.", stretch: "Volunteer to lead the next team session using that lesson's teaching edition." },
  discuss: [
    "What is something you only really understood once you had to explain it to someone?",
    "If we can't explain a control simply, maybe we don't fully understand it ourselves. Is that fair?",
    "Who will lead the next session, and which lesson will they teach?"
  ],
  reflect: "Which topic in your job do you avoid explaining, and what does that tell you?",
  quiz: [
    { q: "Nestojko et al. (2014) found students who expected to teach:", options: ["Recalled less", "Recalled more and organised it better", "Performed the same", "Refused the task"], answer: 1, why: "Even though they never actually taught." },
    { q: "Fiorella and Mayer (2013) found the longer-lasting benefit came from:", options: ["Rereading", "Expecting to teach only", "Actually teaching", "Highlighting"], answer: 2, why: "Teaching showed gains on a delayed test." },
    { q: "Reading out someone else's slides is weak for learning because:", options: ["Slides are too short", "You do not generate the explanation yourself", "Audiences dislike slides", "It takes too long"], answer: 1, why: "The benefit comes from building the explanation." }
  ],
  sources: [
    "Nestojko, J. F., Bui, D. C., Kornell, N., & Bjork, E. L. (2014). Expecting to teach enhances learning and organization of knowledge in free recall of text passages. Memory & Cognition, 42(7), 1038-1048.",
    "Fiorella, L., & Mayer, R. E. (2013). The relative benefits of learning by teaching and teaching expectancy. Contemporary Educational Psychology, 38(4), 281-288."
  ]
},
{
  id: "w6-l7", week: 6, n: 7, track: "people", area: "Decision-making", minutes: 20,
  title: "Losses, gains and how a message is framed",
  book: null,
  bigIdea: "People respond differently to the same facts depending on whether they are described as something to gain or something to lose. Offered a sure gain, they play safe. Facing a sure loss, they gamble.",
  why: "Every safety message is framed, whether you choose the frame or not. And a worker deciding whether to stop a job that is already behind is facing a sure loss, and that's when people take chances.",
  science: [
    "In 1981 Amos Tversky and Daniel Kahneman asked people to choose a programme against a disease expected to kill 600. Framed as lives saved, <b>72 percent</b> chose the certain option (200 saved) over a gamble. Framed as deaths, with identical numbers, <b>78 percent</b> chose the gamble.",
    "This follows from their <b>prospect theory</b> (1979): people judge outcomes as gains or losses from a reference point, avoid risk when ahead, and seek risk to escape a loss. Losses also tend to weigh more than equal gains, known as <b>loss aversion</b>.",
    "For health messages, Rothman and Salovey (1997) proposed that gain frames suit prevention behaviours. A 2007 meta-analysis by O'Keefe and Jensen found gain framing was slightly more persuasive for prevention, but the effect was small."
  ],
  evidence: "Established, with caveats",
  evidenceNote: "The framing effect on risky choices is robust. How strong loss aversion is has been questioned (Gal and Rucker, 2018), and framing safety messages as gain or loss makes only a small difference on average.",
  work: [
    "A crew is two hours behind. Stopping to fetch the right equipment is a certain further loss of forty minutes. Carrying on with what they have is a gamble that will probably pay off. Prospect theory predicts the gamble, and so does experience.",
    "You change that choice by changing the reference point. If the supervisor has already said the deadline has moved, stopping is no longer a loss."
  ],
  techniques: [
    { name: "Remove the sure loss", how: "When a job runs late, say out loud that the time is already gone and nobody will be judged for stopping." },
    { name: "Check your own frame", how: "Notice whether you are describing a control as a cost or as protection, and what the listener is being asked to give up." },
    { name: "Test, do not assume", how: "Try a message both ways with two crews and watch what happens. The research says the difference may be small." }
  ],
  assignment: { level: "Think", task: "Recall a recent case where someone took a shortcut under time pressure. Describe the choice as they would have seen it: what was the sure loss, and what was the gamble? Write what a supervisor could have said to change the reference point.", stretch: "Rewrite one safety poster or message on your site in the opposite frame and ask three people which they find more convincing." },
  discuss: [
    "When you are running late, are you more or less likely to take a chance?",
    "When you've nothing to make up, you rarely gamble. Isn't that how it feels?",
    "What do we say to a crew that is behind schedule, and what does it tell them about stopping?"
  ],
  reflect: "When did you last take a risk mainly to avoid admitting a loss?",
  quiz: [
    { q: "In the disease problem, when outcomes were framed as deaths, most people chose:", options: ["The certain option", "The gamble", "Neither", "Both equally"], answer: 1, why: "78% took the risky option under the loss frame." },
    { q: "Prospect theory says people facing a sure loss tend to:", options: ["Avoid risk", "Seek risk", "Do nothing", "Ask for advice"], answer: 1, why: "They gamble to escape the loss." },
    { q: "Research on gain versus loss framing of prevention messages shows:", options: ["Loss frames always win", "Gain frames are slightly more persuasive, with a small effect", "Framing has a huge effect", "No studies exist"], answer: 1, why: "O'Keefe and Jensen's meta-analysis." }
  ],
  sources: [
    "Tversky, A., & Kahneman, D. (1981). The framing of decisions and the psychology of choice. Science, 211(4481), 453-458.",
    "Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263-291.",
    "O'Keefe, D. J., & Jensen, J. D. (2007). The relative persuasiveness of gain-framed and loss-framed messages for encouraging disease prevention behaviors: A meta-analytic review. Journal of Health Communication, 12(7), 623-644.",
    "Gal, D., & Rucker, D. D. (2018). The loss of loss aversion: Will it loom larger than its gain? Journal of Consumer Psychology, 28(3), 497-516."
  ]
}
);
window.LESSONS.sort(function(a,b){ return a.week-b.week || a.n-b.n; });
