/* Daily HSE toolbox meeting topics. Replace this file each month.
   Entry format, one per day (only date and title are required):
   { date: "YYYY-MM-DD", title: "Short topic title", detail: "One line (optional)", lesson: "w3-l2" (optional related hub lesson),
     category: one of "Hazards & controls", "Permits", "First aid", "Ground control", "Substance abuse", "Environment",
               "Mindset", "Production & discipline", "Legal (LI 2182)", "Driving", "Housekeeping",
     material: { summary: "...", points: ["..."], ask: ["..."], sources: [{ label: "...", url: "https://..." }] } }
   TOPICS_MONTH holds the month's theme and the lines printed at the foot of the sheet. */
window.TOPICS_MONTH = {
  month: "2026-11",
  name: "November",
  theme: "Reliability and consistency",
  reminder: "Remember! Starting your day without a thought of safety is a hazard.",
  pledge: "I pledge to work with DISCIPLINE. I pledge to prioritize SAFETY. I pledge to drive PRODUCTIVITY. I will STOP WORK if it is unsafe, follow every rule, and look out for my team. Safety Starts With ME!",
  slogans: ["Y3 no SAA ma Safety", "The standard you walk pass is the standard you set"]
};

var SRC = {
  hseRisk: { label: "HSE (UK): Managing risks and risk assessment at work", url: "https://www.hse.gov.uk/risk/" },
  oshaHazId: { label: "OSHA: Hazard identification and assessment", url: "https://www.osha.gov/safety-management/hazard-identification" },
  hsePtw: { label: "HSE (UK): Permit to work systems, key principles", url: "https://www.hse.gov.uk/humanfactors/topics/ptw.htm" },
  hsg250: { label: "HSE (UK): HSG250 Guidance on permit-to-work systems", url: "https://www.hse.gov.uk/pubns/books/hsg250.htm" },
  nhsBurns: { label: "NHS: Burns and scalds", url: "https://www.nhs.uk/conditions/burns-and-scalds/" },
  redCrossBurns: { label: "British Red Cross: First aid for burns", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns" },
  crw: { label: "20CRW: 20 minutes of cool running water", url: "https://www.20crw.org/" },
  inhalation: { label: "Inhalation injury (Canadian Family Physician, via NIH)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4301764/" },
  mshaHighwall: { label: "MSHA: Highwall safety alert", url: "https://www.msha.gov/highwall-safety-alert" },
  ecfrGround: { label: "US 30 CFR Part 77 Subpart K: Ground control", url: "https://www.ecfr.gov/current/title-30/chapter-I/subchapter-O/part-77/subpart-K" },
  ccSud: { label: "Cleveland Clinic: Substance use disorder", url: "https://my.clevelandclinic.org/health/diseases/16652-drug-addiction-substance-use-disorder-sud" },
  mayoSud: { label: "Mayo Clinic: Drug addiction (substance use disorder)", url: "https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112" },
  nimhSud: { label: "NIMH: Co-occurring substance use and mental disorders", url: "https://www.nimh.nih.gov/health/topics/substance-use-and-mental-health" },
  samhsa: { label: "SAMHSA: Substance use", url: "https://www.samhsa.gov/substance-use" },
  unCauses: { label: "United Nations: Causes and effects of climate change", url: "https://www.un.org/en/climatechange/science/causes-effects-climate-change" },
  unClimate: { label: "United Nations: What is climate change?", url: "https://www.un.org/en/global-issues/climate-change" },
  unActNow: { label: "United Nations ActNow: Actions for a healthy planet", url: "https://www.un.org/en/actnow/ten-actions" },
  vaughan: { label: "Vaughan: The normalization of deviance (encyclopedia entry)", url: "https://study.sagepub.com/system/files/Vaughan%2C_Diane_-_The_Normalization_of_Deviance.pdf" },
  ndPubmed: { label: "When doing wrong feels so right: normalization of deviance (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/25742063/" },
  armyNd: { label: "US Army: When cutting corners becomes the norm", url: "https://www.army.mil/article/286745/when_cutting_corners_becomes_the_norm_how_normalizing_deviance_can_lead_to_disaster" },
  li2182: { label: "Minerals and Mining (Health, Safety and Technical) Regulations, 2012 (L.I. 2182), FAOLEX", url: "https://faolex.fao.org/docs/pdf/gha168930.pdf" },
  li2182mincom: { label: "L.I. 2182, Minerals Commission of Ghana", url: "https://www.mincom.gov.gh/wp-content/uploads/2021/06/Minerals-and-Mining-Health-Safety-and-Technical-Regulations-2012L.I.-2182.pdf" },
  epaLeak: { label: "US EPA WaterSense: Fix a Leak Week (home and workplace)", url: "https://www.epa.gov/watersense/fix-leak-week" },
  epaHome: { label: "US EPA WaterSense: Home maintenance", url: "https://www.epa.gov/watersense/home-maintenance" },
  ccohsHouse: { label: "CCOHS: Workplace housekeeping, basic guide", url: "https://www.ccohs.ca/oshanswers/hsprograms/housekeeping/house.html" },
  ccohsFalls: { label: "CCOHS: Prevention of slips, trips and falls", url: "https://www.ccohs.ca/oshanswers/safety_haz/falls.html" },
  plasticGhana: { label: "Macro impacts of plastic pollution in Ghana (Cambridge Prisms: Plastics)", url: "https://www.cambridge.org/core/journals/cambridge-prisms-plastics/article/macro-impacts-of-plastic-pollution-in-ghana/EF02FCA50A66EAE109C2EA0706E91736" },
  pulitzerBins: { label: "Pulitzer Center: Stolen trash bins contribute to malaria, flooding", url: "https://pulitzercenter.org/stories/stolen-trash-bins-contribute-malaria-flooding" },
  nscDriving: { label: "National Safety Council: Defensive driving", url: "https://www.nsc.org/safety-first/defensive-driving-the-fun-of-it" },
  hsg48: { label: "HSE (UK): HSG48 Reducing error and influencing behaviour", url: "https://www.hse.gov.uk/pubns/books/hsg48.htm" }
};

/* Shared blocks reused across the four "nothing happened the last time" days. */
var ND_SUMMARY = "Each time a shortcut works without harm, it starts to feel safe. Sociologist Diane Vaughan named this the normalisation of deviance after studying the 1986 Challenger launch decision: a departure from the standard slowly becomes the accepted way of working, until people no longer see it as wrong.";

window.TOPICS = [
  { date: "2026-11-01", category: "Hazards & controls",
    title: "Involving team members in identifying hazards and appropriate controls (hazard identification and risk assessment) before starting assigned tasks",
    material: {
      summary: "The people doing the job see hazards that a supervisor or a form can miss. Asking the crew to help identify hazards and choose controls before work starts produces a better assessment, and people follow controls they helped choose.",
      points: [
        "Hazard identification starts with collecting information about the task, the equipment, the area and what has gone wrong before, including near misses (OSHA).",
        "Walk the work area together before starting. Conditions change from shift to shift: weather, ground, nearby equipment, people.",
        "Choose controls from the top of the hierarchy first: eliminate, substitute, engineer, then procedures, then PPE.",
        "A risk assessment must be suitable and sufficient for the actual task, not a copied form (HSE).",
        "If something changes during the job, stop and reassess with the crew."
      ],
      ask: [
        "What on this job today could hurt someone that is not on the form?",
        "Who on the crew has done this task most often, and what do they watch for?",
        "Which control are we relying on most, and what happens if it fails?"
      ],
      sources: [SRC.oshaHazId, SRC.hseRisk]
    } },

  { date: "2026-11-02", category: "Production & discipline",
    title: "How discipline and safety help us achieve production targets consistently",
    material: {
      summary: "Incidents, injuries and equipment damage stop production. Doing the job the right way every time keeps work predictable, and predictable work is what makes targets reachable week after week.",
      points: [
        "An incident halts the task, often the area, and sometimes the whole operation while it is investigated.",
        "Rushing to recover lost time is when shortcuts and mistakes are most likely.",
        "Consistent pre-starts, inspections and procedures catch defects before they become breakdowns.",
        "Discipline means doing it right when nobody is watching and when time is short, not only during audits."
      ],
      ask: [
        "When did a shortcut on this site end up costing more time than it saved?",
        "What part of our routine gets skipped first when we are behind schedule?"
      ],
      sources: [SRC.hsg48]
    } },

  { date: "2026-11-03", category: "First aid",
    title: "First aid treatment: burns that need hospital treatment",
    material: {
      summary: "All burns get the same first step: cool the burn under cool running water for 20 minutes, as soon as possible. Some burns also need hospital care. Keep cooling while help is arranged.",
      points: [
        "Cool with cool (not ice-cold) running water for 20 minutes. Cooling within the first 3 hours still helps (NHS, British Red Cross).",
        "Remove jewellery and clothing near the burn, unless it is stuck to the skin.",
        "Cover loosely with cling film or a clean, non-fluffy dressing. No creams, butter, toothpaste or ice.",
        "Get hospital treatment for: large or deep burns (bigger than the injured person's hand), burns that look white, leathery or charred, burns to the face, hands, feet, joints or genitals, and chemical or electrical burns (NHS).",
        "Keep the casualty warm while cooling the burn. Cool the burn, warm the person."
      ],
      ask: [
        "Where is the nearest running water to where we work today?",
        "Who on this crew is a trained first aider, and how do we call the site emergency number?"
      ],
      sources: [SRC.nhsBurns, SRC.redCrossBurns, SRC.crw]
    } },

  { date: "2026-11-04", category: "Ground control",
    title: "Working safely near or below highwalls",
    material: {
      summary: "Falling rock from highwalls kills miners. MSHA reports that since 2012 falling rocks and material from hazardous highwalls caused 9 fatalities and 27 serious injuries in US mines. The controls are well known: examine, scale, keep clear, control water.",
      points: [
        "Follow the site ground control plan for every highwall where people work or travel nearby.",
        "Examine highwalls before work or travel near them. Look for loose rock, overhangs and cracks, and examine more often after rain.",
        "Scale hazards down from a position that does not expose anyone. Barricade and sign the area until it is made safe.",
        "Never park equipment, do maintenance or store materials beneath a highwall.",
        "Keep vegetation and loose material back from the crest, and drain surface water away from the wall."
      ],
      ask: [
        "Where on site do we routinely stop or park closer to a wall than we should?",
        "Who examines the highwall in our area, and how do we find out what they found?"
      ],
      sources: [SRC.mshaHighwall, SRC.ecfrGround]
    } },

  { date: "2026-11-05", category: "Substance abuse",
    title: "What is substance abuse and addiction?",
    material: {
      summary: "Substance use disorder (what used to be called addiction) is a health condition: a pattern of alcohol or drug use that keeps going despite the harm it causes. It changes how the brain's reward system works, which is why stopping is hard even when people want to.",
      points: [
        "Substances trigger a release of dopamine, which makes the brain want to repeat the experience (Cleveland Clinic).",
        "It sits on a spectrum from mild to severe, based on how many signs a person shows.",
        "Two signs are tolerance (needing more for the same effect) and withdrawal when stopping (NIMH).",
        "It is not a lack of willpower or morals. It is a condition that responds to treatment (SAMHSA).",
        "On a mine site, any impairment, including from alcohol the night before, puts the person and the crew at risk."
      ],
      ask: [
        "Why might someone hide a problem rather than ask for help, and what would make it easier to come forward?",
        "What does our site's alcohol and drug policy say about reporting and support?"
      ],
      sources: [SRC.ccSud, SRC.nimhSud, SRC.samhsa]
    } },

  { date: "2026-11-06", category: "Environment",
    title: "Climate change and its causes",
    material: {
      summary: "Climate change is the long-term shift in temperatures and weather patterns. Since the 1800s, human activity has been the main driver, mainly through burning coal, oil and gas, which releases greenhouse gases that trap heat (United Nations).",
      points: [
        "Burning fossil fuels for electricity and heat is a large share of global emissions.",
        "Industry and manufacturing produce emissions, mostly from the energy used to make cement, steel, plastics and other goods.",
        "Deforestation, agriculture and other land-use changes cause roughly a third of global greenhouse gas emissions (UN).",
        "Transport, buildings and food production systems all add to it.",
        "For mining: heavier rain events and more heat stress affect ground stability, drainage, haul roads and workers' health."
      ],
      ask: [
        "What changes in weather have we noticed on site over the years?",
        "Which of our activities use the most fuel or power?"
      ],
      sources: [SRC.unClimate, SRC.unCauses]
    } },

  { date: "2026-11-07", category: "Mindset",
    title: "What is the \"nothing happened the last time\" mindset?",
    material: {
      summary: ND_SUMMARY,
      points: [
        "Getting away with a shortcut does not prove it is safe. It may only mean the conditions for harm were not all present that day.",
        "Each success without consequence makes the next shortcut feel more normal.",
        "Vaughan's key finding was that the Challenger decision came from people conforming to their group's norms, not from rule-breakers acting alone.",
        "It is easier to prevent than to correct, which is why speaking up early matters."
      ],
      ask: [
        "Can you think of a rule on site that most people no longer follow? How did that happen?",
        "What would you say to a new starter who copies a shortcut they saw us take?"
      ],
      sources: [SRC.vaughan, SRC.ndPubmed]
    } },

  { date: "2026-11-08", category: "Permits",
    title: "Tasks on the GMC site that require work permits",
    material: {
      summary: "A permit to work is a formal written system for controlling high-risk, non-routine work. It makes sure the work is authorised, hazards and precautions are agreed, and everyone affected knows what is happening.",
      points: [
        "Permits are typically used for hot work, confined space entry, work on electrical or mechanical systems that need isolation, work at height, excavation and other non-routine high-risk jobs. Confirm the exact list in the site permit procedure.",
        "The permit names who is in charge, the hazards, the isolations and the precautions.",
        "Related permits must be linked. Two jobs on the same equipment can affect each other.",
        "Issuing a permit does not by itself make a job safe (HSE)."
      ],
      ask: [
        "Which permits does our team use most often, and who can issue them?",
        "Which jobs have we done without a permit that probably needed one?"
      ],
      sources: [SRC.hsePtw, SRC.hsg250]
    } },

  { date: "2026-11-09", category: "Production & discipline",
    title: "Unsafe behaviours that adversely impact production targets",
    material: {
      summary: "Unsafe behaviour does not only risk injury. It damages equipment, causes rework and leads to stoppages. Most unsafe acts are not deliberate: they come from time pressure, habit, poor design or unclear expectations (HSE, HSG48).",
      points: [
        "Common examples: speeding on haul roads, skipping pre-start checks, bypassing guards or interlocks, working without isolation, overloading equipment.",
        "Each can cause unplanned downtime that costs more than the time it saved.",
        "Look at why the behaviour happens. Fixing the cause works better than blaming the person.",
        "Report defects and near misses early, while they are cheap to fix."
      ],
      ask: [
        "Which unsafe act on site causes the most damage to equipment?",
        "What pressure makes people take that shortcut, and can we remove it?"
      ],
      sources: [SRC.hsg48]
    } },

  { date: "2026-11-10", category: "First aid",
    title: "First aid treatment: severe burns and scalds",
    material: {
      summary: "With a severe burn, call for help immediately and keep cooling the burn while you wait. Severe burns can cause shock, so watch the casualty closely.",
      points: [
        "Make the area safe first. Stop the burning: remove the person from the heat source or put out flames.",
        "Call the site emergency number straight away and keep cooling with cool running water for 20 minutes or until help arrives.",
        "Remove jewellery and loose clothing near the burn. Do not pull off anything stuck to the skin.",
        "Cover loosely with cling film or a clean, non-fluffy dressing. Do not burst blisters.",
        "Keep the person warm and watch for signs of shock: pale, clammy skin, fast breathing, confusion."
      ],
      ask: [
        "Which tasks on our site carry a risk of severe burns (hot surfaces, steam, hot slurry, welding, electrical)?",
        "Where are the burn dressings or burn kit kept?"
      ],
      sources: [SRC.nhsBurns, SRC.redCrossBurns]
    } },

  { date: "2026-11-11", category: "Ground control",
    title: "Rockfall and debris movement following heavy rainfall events",
    material: {
      summary: "Water is one of the main triggers of slope failure. Rain soaks into cracks and joints, adds weight and pushes blocks outward, which is why walls and slopes need extra checks after heavy rain.",
      points: [
        "Examine highwalls and slopes more often after rain (MSHA).",
        "Surface water should drain away from highwalls through ditches or graded ground, not pond at the crest or toe.",
        "Watch for new cracks at the crest, bulging, fresh rock at the toe, muddy seepage or water flowing from the face.",
        "Barricade and report any change. Do not enter until a competent person has inspected.",
        "Debris and mud can also move onto haul roads and benches, so check routes before travelling."
      ],
      ask: [
        "After last night's rain, what has changed in our working area?",
        "Where does water collect on our benches or roads after a storm?"
      ],
      sources: [SRC.mshaHighwall, SRC.ecfrGround]
    } },

  { date: "2026-11-12", category: "Substance abuse",
    title: "Common substances that are abused, and risk factors of substance abuse",
    material: {
      summary: "Commonly misused substances include alcohol, cannabis, tobacco and nicotine, prescription medicines such as painkillers and sedatives, and stimulants. Anyone can develop a substance use problem, but some factors raise the risk.",
      points: [
        "Risk factors include a mental health condition, a close relative with a substance use disorder, adverse childhood experiences, genetics, and easy access to substances (Cleveland Clinic).",
        "Stress and trauma can contribute to both substance use and mental health problems (NIMH).",
        "Long shifts, fatigue, isolation from family and money pressures are worth discussing honestly as possible triggers.",
        "Prescription medicines can impair driving and operating equipment too. Tell your supervisor or medical team if a medicine makes you drowsy."
      ],
      ask: [
        "Which pressures in our work could push someone toward drinking or drugs?",
        "Where can someone on this site go for confidential help?"
      ],
      sources: [SRC.ccSud, SRC.nimhSud, SRC.mayoSud]
    } },

  { date: "2026-11-13", category: "Environment",
    title: "Individual actions to combat climate change",
    material: {
      summary: "Individual actions add up, especially when a whole team or community does them. The UN's ActNow campaign lists everyday steps anyone can take.",
      points: [
        "Save energy: switch off lights, air conditioners and equipment that are not in use.",
        "Avoid unnecessary idling of vehicles and equipment. It wastes fuel and adds emissions.",
        "Reduce, reuse and recycle, and avoid single-use plastics.",
        "Plant and protect trees, and support rehabilitation of mined land.",
        "Waste less food and save water."
      ],
      ask: [
        "What is one energy-saving change our team could make this week?",
        "Where do we see engines left idling on site?"
      ],
      sources: [SRC.unActNow, SRC.unClimate]
    } },

  { date: "2026-11-14", category: "Mindset",
    title: "How does the \"nothing happened the last time\" mindset show up in the workplace?",
    material: {
      summary: ND_SUMMARY,
      points: [
        "Skipping a pre-start check because the machine was fine yesterday.",
        "Entering a barricaded area \"just for a second\".",
        "Not isolating for a quick adjustment.",
        "Walking past an unsafe condition because it has always been like that.",
        "Signing a permit or checklist without actually checking."
      ],
      ask: [
        "Which of these have you seen this month?",
        "Which has become so normal that nobody comments on it anymore?"
      ],
      sources: [SRC.vaughan, SRC.armyNd]
    } },

  { date: "2026-11-15", category: "Permits",
    title: "Why the requisite work permits must be completed and signed off for identified high-risk tasks",
    material: {
      summary: "The permit is how everyone involved agrees the job is safe to start and later confirms it is safe to hand back. Skipping the paperwork, or signing it without checking, removes that agreement.",
      points: [
        "It confirms that hazards were identified and controls are in place before work starts.",
        "It makes clear who is in charge and who does what, with no gaps or overlaps (HSE).",
        "If the job runs past one shift, the permit and handover make sure the next shift knows the state of the plant.",
        "Signing off at the end confirms the work is finished and the equipment is safe to return to service.",
        "A signature means you have checked. It is not a formality."
      ],
      ask: [
        "Have you ever been asked to sign a permit without seeing the job? What did you do?",
        "What should happen if conditions change after the permit is issued?"
      ],
      sources: [SRC.hsePtw, SRC.hsg250]
    } },

  { date: "2026-11-16", category: "Environment",
    title: "Water conservation strategies at home and in the workplace",
    material: {
      summary: "Most wasted water goes unnoticed through leaks and habits. Finding and fixing leaks is the quickest win. The US EPA estimates fixing easily corrected household leaks saves about 10 percent on water bills.",
      points: [
        "Report leaks at work in washrooms, pantries, pipes and outdoors to maintenance straight away.",
        "At home, check for leaks: read the water meter, wait two hours with no water in use, and read it again. Any change means a leak (EPA).",
        "Toilet test: put a few drops of food colouring in the tank and wait 10 minutes. Colour in the bowl means a leak.",
        "Turn taps off while brushing teeth or soaping. Fix dripping taps.",
        "On site, reuse process water where the system allows, and keep dust-suppression watering to what is needed."
      ],
      ask: [
        "Where have you seen water running to waste on site?",
        "Who do we report a leak to, and how fast does it get fixed?"
      ],
      sources: [SRC.epaLeak, SRC.epaHome]
    } },

  { date: "2026-11-17", category: "First aid",
    title: "First aid treatment: minor burns and scalds",
    material: {
      summary: "Most minor burns can be treated on the spot. Cool them well and keep them clean, and know when a minor burn needs a medical check.",
      points: [
        "Cool under cool running water for 20 minutes.",
        "Remove rings, watches and tight items before swelling starts.",
        "Cover with cling film or a clean, non-fluffy dressing. Do not use creams, butter, oil or ice.",
        "Do not burst blisters.",
        "Get it checked if it is bigger than the casualty's hand, blisters badly, shows signs of infection, or is on the face, hands, feet, joints or genitals (NHS)."
      ],
      ask: [
        "What home remedies have you heard of for burns, and why can they make things worse?",
        "Where is the nearest first aid kit right now?"
      ],
      sources: [SRC.nhsBurns, SRC.redCrossBurns]
    } },

  { date: "2026-11-18", category: "Legal (LI 2182)",
    title: "Permanent lighting at specific stationary machinery and surface installations",
    detail: "What does Reg 261 of LI 2182 say?",
    material: {
      summary: "Regulation 261 of the Minerals and Mining (Health, Safety and Technical) Regulations, 2012 (L.I. 2182) requires the mine manager to make sure machinery and regular surface workplaces are properly lit.",
      points: [
        "Reg 261(a): places where winding, driving, permanent pumping or any other machinery is installed must, while the machinery is in motion, be lit so that its moving parts can be clearly distinguished.",
        "Reg 261(b): suitable and sufficient permanent lighting must be provided and maintained at every place on the surface where work is regularly done during the hours of darkness, or where daylight is inadequate for the work.",
        "Poor lighting hides moving parts, trip hazards and approaching vehicles.",
        "Report failed lights as defects. Do not just work around them."
      ],
      ask: [
        "Which machinery or work areas on our site are poorly lit at night?",
        "Who do we report a failed light to?"
      ],
      sources: [SRC.li2182, SRC.li2182mincom]
    } },

  { date: "2026-11-19", category: "Substance abuse",
    title: "Signs, symptoms and effects of substance abuse",
    material: {
      summary: "Signs vary with the substance, but some patterns are common. Noticing them early, and responding with concern rather than accusation, can protect the person and the crew.",
      points: [
        "Behaviour: using more than planned, failing to cut down, continuing despite problems, giving up activities, secrecy (DSM-5 signs, via Cleveland Clinic).",
        "Physical: tolerance, withdrawal symptoms, changes in sleep or appetite, smell of alcohol, red eyes, unsteadiness.",
        "At work: lateness and absence, mood swings, poor concentration, near misses, conflict with colleagues.",
        "Effects reach health, family, finances and safety. Impaired workers put everyone around them at risk.",
        "If you suspect someone is impaired at work, stop them from doing safety-critical work and tell a supervisor. Follow the site policy."
      ],
      ask: [
        "How would you approach a workmate you were worried about?",
        "What should you do if a crew member looks unfit for duty at the start of a shift?"
      ],
      sources: [SRC.ccSud, SRC.mayoSud]
    } },

  { date: "2026-11-20", category: "Housekeeping",
    title: "Good housekeeping practices at the workplace",
    material: {
      summary: "Good housekeeping is the first and most important step in preventing slips and trips, and a basic part of fire prevention (CCOHS). Without it, other measures never fully work.",
      points: [
        "Clean up spills straight away, and mark wet areas until they are dry.",
        "Keep walkways, stairs and exits clear of tools, hoses, cables and materials.",
        "Store materials securely so they cannot fall, and stack them within safe limits.",
        "Remove combustible waste such as rags, cardboard and oily materials regularly.",
        "Keep work areas well lit and replace failed lights.",
        "Put tools back after use. Clean as you go, not only at the end of the shift."
      ],
      ask: [
        "Which area on our site is the worst for housekeeping, and why?",
        "What would make it easier to keep clean?"
      ],
      sources: [SRC.ccohsHouse, SRC.ccohsFalls]
    } },

  { date: "2026-11-21", category: "Mindset",
    title: "Why the \"nothing happened the last time\" mindset is not helpful, and its potential consequences",
    material: {
      summary: ND_SUMMARY,
      points: [
        "Luck is not a control. The fact that nothing went wrong says nothing about the next time.",
        "Over time the gap between the procedure and actual practice widens, until normal work sits very close to the edge.",
        "When an incident finally happens, it is often severe, because several defences have been quietly removed.",
        "The Challenger disaster killed all seven crew members after warning signs had been accepted as normal for many flights."
      ],
      ask: [
        "What is the worst outcome if the shortcut we take most often fails just once?",
        "Who on our crew is best placed to call it out when we drift?"
      ],
      sources: [SRC.vaughan, SRC.ndPubmed]
    } },

  { date: "2026-11-22", category: "Hazards & controls",
    title: "Why appropriate controls must be implemented to mitigate or eliminate identified hazards",
    material: {
      summary: "Identifying a hazard does nothing on its own. Only a control that is actually in place and working reduces the risk. The more a control depends on people remembering, the less reliable it is.",
      points: [
        "Hierarchy of controls: eliminate, substitute, engineering controls, administrative controls, then PPE.",
        "Engineering controls work every time. Procedures and PPE depend on people using them every time.",
        "Check that controls written in a risk assessment are actually in place at the job.",
        "Controls wear out and get bypassed. Inspect guards, barricades and interlocks regularly.",
        "A risk assessment must be suitable and sufficient, and acted on (HSE)."
      ],
      ask: [
        "For today's main hazard, which level of the hierarchy is our control on?",
        "Is there a control we could move up the hierarchy?"
      ],
      sources: [SRC.hseRisk, SRC.oshaHazId]
    } },

  { date: "2026-11-23", category: "Production & discipline",
    title: "Why it is important to consistently follow procedures and work safely every time",
    material: {
      summary: "Procedures capture lessons, often learned the hard way. Following them every time makes work predictable, and consistency is this month's theme.",
      points: [
        "Most of the time a shortcut works. That is why it is tempting, and why it is dangerous.",
        "A procedure only protects you if it is followed every time, not just when someone is watching.",
        "If a procedure is wrong, unclear or unworkable, raise it so it gets fixed. Do not quietly work around it (HSE, HSG48).",
        "Consistent work lets the crew predict what each other will do, which is a safety control in itself."
      ],
      ask: [
        "Which procedure do we find hardest to follow, and why?",
        "Is there a procedure that should be changed? Who do we tell?"
      ],
      sources: [SRC.hsg48]
    } },

  { date: "2026-11-24", category: "First aid",
    title: "First aid treatment: burns to the airway",
    material: {
      summary: "Burns to the airway, from hot gases, smoke or steam, can make the throat swell and block breathing, sometimes hours later. Treat any suspected airway burn as an emergency, even if the person seems fine at first.",
      points: [
        "Suspect an airway burn after a fire in an enclosed space, or if there are burns to the face or neck, singed nasal hair, soot around the mouth or nose, a hoarse voice, coughing or wheezing (Canadian Family Physician).",
        "Call the site emergency number immediately.",
        "Move the person to fresh air if it is safe to do so.",
        "Loosen clothing around the neck and help them sit in the position that is easiest for breathing.",
        "Monitor breathing closely, and be ready to start CPR if they stop breathing normally."
      ],
      ask: [
        "Where on site could someone breathe in hot gases or steam?",
        "Why does a casualty who says they feel fine still need medical assessment?"
      ],
      sources: [SRC.inhalation, SRC.nhsBurns]
    } },

  { date: "2026-11-25", category: "Legal (LI 2182)",
    title: "Emergency lighting in buildings",
    detail: "What does Reg 262 of LI 2182 say?",
    material: {
      summary: "Regulation 262 of L.I. 2182 applies to workplaces in buildings that depend only on artificial light, where a lighting failure could endanger people. These workplaces must have emergency lighting.",
      points: [
        "Reg 262(a): emergency lighting must turn on automatically when the regular lighting fails.",
        "Reg 262(b): it must be independent of the regular lighting source.",
        "Reg 262(c): it must give adequate light for evacuating the building.",
        "Reg 262(d): it must be tested as often as needed to make sure it will work in an emergency.",
        "Know your escape route without relying on the lights."
      ],
      ask: [
        "Which buildings on our site have no windows or depend on artificial light?",
        "When were the emergency lights in our building last tested?"
      ],
      sources: [SRC.li2182, SRC.li2182mincom]
    } },

  { date: "2026-11-26", category: "Substance abuse",
    title: "Preventive strategies and treatment of substance abuse",
    material: {
      summary: "Substance use disorders are treatable, and recovery is common. Prevention and early support work far better than waiting for an incident.",
      points: [
        "Prevention: clear policies, education, managing stress and fatigue, and a culture where asking for help is safe.",
        "Treatment can include counselling, behavioural therapy, support groups and, for some substances, medication, often combined (Mayo Clinic).",
        "Mental health conditions often occur alongside substance problems, and treating both together works best (NIMH).",
        "Recovery is ongoing. Relapse can happen and is a reason to continue treatment, not to give up.",
        "Use the employee assistance programme or site medical service for confidential help, if your site has one."
      ],
      ask: [
        "What would make a worker on this site feel safe asking for help?",
        "Do we know what support our company offers?"
      ],
      sources: [SRC.mayoSud, SRC.nimhSud, SRC.samhsa]
    } },

  { date: "2026-11-27", category: "Environment",
    title: "Littering and its adverse effects on health and the environment",
    material: {
      summary: "Litter, especially plastic, blocks drains and waterways. In Ghana, blocked drains worsen flooding, and stagnant water in choked drains breeds mosquitoes that spread malaria.",
      points: [
        "Plastic waste clogs drains and gutters, which makes flooding worse after heavy rain.",
        "Stagnant water in blocked drains is a breeding ground for mosquitoes (Pulitzer Center reporting from Ghana).",
        "Rotting waste attracts rats and flies and spreads disease.",
        "On site, litter becomes a slip, trip and fire hazard, can block drainage, and can be ingested by livestock and wildlife.",
        "Use the bins provided, separate waste where the site requires it, and pick up litter when you see it."
      ],
      ask: [
        "Where does litter collect on our site?",
        "Are there enough bins, in the right places?"
      ],
      sources: [SRC.plasticGhana, SRC.pulitzerBins]
    } },

  { date: "2026-11-28", category: "Mindset",
    title: "How can we change the \"nothing happened the last time\" mindset?",
    material: {
      summary: ND_SUMMARY + " Changing it takes deliberate effort and a team where speaking up is safe.",
      points: [
        "Judge actions by the risk, not by the outcome. A shortcut that worked was still a gamble.",
        "Speak up when you see drift, and thank people who speak up to you.",
        "Report near misses. They show where defences are wearing thin.",
        "Supervisors set the standard: the standard you walk past is the standard you set.",
        "Review procedures with the people who use them, so the written way and the real way stay the same."
      ],
      ask: [
        "What is one shortcut our crew will stop taking this week?",
        "How should we respond when a colleague challenges us?"
      ],
      sources: [SRC.vaughan, SRC.armyNd]
    } },

  { date: "2026-11-29", category: "Driving",
    title: "Defensive driving techniques: keys to safe driving",
    material: {
      summary: "Defensive driving means driving to prevent crashes despite the conditions and the actions of others. The National Safety Council's basics: slow down, keep your distance, give driving your full attention.",
      points: [
        "Slow down and drive to the conditions: rain, dust, night, road surface.",
        "Keep at least a 3-second following distance on public roads, more in poor conditions and with heavy vehicles (NSC).",
        "Give driving 100 percent of your attention. No phone use while driving.",
        "Always wear a seat belt, every trip, every passenger.",
        "Never drive tired or under the influence. On site, obey right of way rules for heavy equipment and keep out of blind spots."
      ],
      ask: [
        "What is the most dangerous stretch of road we use to get to and from site?",
        "What makes people speed on site, and how do we stop it?"
      ],
      sources: [SRC.nscDriving]
    } },

  { date: "2026-11-30", category: "Production & discipline",
    title: "Good habits and attitudes that help maintain safe and reliable production performance",
    material: {
      summary: "This month's theme in one day: reliability comes from small things done the same way every shift.",
      points: [
        "Arrive fit for work: rested, sober, focused.",
        "Do full pre-start checks and report defects early.",
        "Plan the job with the crew and agree on the controls.",
        "Follow procedures every time, and stop work if it becomes unsafe.",
        "Keep the work area tidy, look out for each other, and speak up."
      ],
      ask: [
        "Which habit from this month will you keep?",
        "What is one thing our crew will do differently next month?"
      ],
      sources: [SRC.hsg48]
    } }
];
