/* Curriculum map. Weekly rhythm: 7 lessons = 3 safety science (book-anchored) + 2 people/craft on weekdays, 2 non-book lessons at the weekend. */
window.CURRICULUM = {
  rhythm: "Seven lessons a week. Monday to Friday: three in safety science, anchored to the book, and two from people skills and professional craft. Saturday and Sunday: topics from outside the book, such as learning, thinking and personal development.",
  arc: [
    { year: 1, title: "Foundations", note: "Core safety science from the chapters most used on site, plus how people think, how to speak and how to influence." },
    { year: 2, title: "Full coverage", note: "The remaining book chapters (law, construction, radiation, environment, economics, ethics) and a second, deeper pass on year 1." },
    { year: 3, title: "Application", note: "Major incident case studies, mining-specific fatal risks, and investigations taught as a craft." },
    { year: 4, title: "Leadership", note: "Culture change, the business case for safety, managing upward, and coaching other safety professionals." },
    { year: 5, title: "Mastery", note: "Current research, emerging technology, and participants writing and teaching lessons of their own." }
  ],
  /* [fromWeek, toWeek, safety focus, book chapters, people theme, craft theme] */
  year1: [
    [1, 2, "Foundations: risk, controls, causation, measurement", "Ch. 26, 22, 3, 10", "How people think", "Clear communication"],
    [3, 4, "Accident causation and investigation", "Ch. 22", "Cognitive biases", "Asking better questions"],
    [5, 6, "Risk assessment and management", "Ch. 26", "Risk perception", "Writing findings people act on"],
    [7, 8, "Noise and hearing conservation", "Ch. 10", "Habits", "Toolbox talks"],
    [9, 10, "Particulates and gases", "Ch. 6", "Attention and fatigue", "Explaining numbers"],
    [11, 12, "Toxicology", "Ch. 7", "Human error types", "Storytelling"],
    [13, 13, "Review week and masterclass", "", "", ""],
    [14, 15, "Air sampling", "Ch. 8", "Persuasion: reciprocity and liking", "Public speaking basics"],
    [16, 17, "Ventilation", "Ch. 9", "Persuasion: social proof", "Handling questions"],
    [18, 19, "Personal protective equipment", "Ch. 14", "Persuasion: authority and scarcity", "Difficult conversations"],
    [20, 21, "Electrical safety", "Ch. 16", "Resistance and reactance", "Negotiation"],
    [22, 23, "Fire prevention and protection", "Ch. 12", "Motivation", "Giving feedback"],
    [24, 25, "Thermal stressors", "Ch. 13", "Winning cooperation", "Listening"],
    [26, 26, "Review week and masterclass", "", "", ""],
    [27, 28, "Ergonomics", "Ch. 24", "Habit change", "Critical thinking: assumptions"],
    [29, 30, "Materials handling and storage", "Ch. 30", "Group behaviour", "Critical thinking: evidence"],
    [31, 32, "Walking and working surfaces, falls", "Ch. 29", "Conformity and obedience", "Logical fallacies"],
    [33, 34, "Hazardous energy and confined spaces", "Ch. 4", "Normalisation of deviance", "Report writing"],
    [35, 36, "Hazardous materials and hazard communication", "Ch. 27, 4", "Stress and decision-making", "Reading research"],
    [37, 38, "Training and adult learning", "Ch. 19", "Memory and learning", "Facilitating a session"],
    [39, 39, "Review week and masterclass", "", "", ""],
    [40, 41, "Safety management systems", "Ch. 31", "Organisational culture", "Leading without authority"],
    [42, 43, "Measuring performance", "Ch. 36, 3", "Psychological safety", "Presenting to management"],
    [44, 45, "Auditing", "Ch. 37", "Just culture", "The business case for safety"],
    [46, 47, "Management of change", "Ch. 38", "Why change fails", "Coaching"],
    [48, 49, "Emergency management", "Ch. 39", "Behaviour in emergencies", "Briefing under pressure"],
    [50, 51, "Math and statistics for safety", "Ch. 5, 15", "Statistical intuition", "Showing data clearly"],
    [52, 52, "Year review and assessment", "", "", ""]
  ],
  year2chapters: "Ch. 1 The profession and ASP/CSP exam, Ch. 2 Legal aspects, Ch. 4 Regulations in depth, Ch. 11 Biological hazards, Ch. 17 Mechanics, Ch. 18 Hydrostatics and hydraulics, Ch. 20 Engineering economics, Ch. 21 Management theories, Ch. 23 Workers' compensation, Ch. 25 Construction safety, Ch. 28 Radiation safety, Ch. 32 Site security, Ch. 33 Sustainability, Ch. 34 Environmental management, Ch. 35 Prevention through Design, Ch. 40 Code of ethics.",
  upcoming: [
    { week: 7, n: 1, track: "safety", title: "How the ear is damaged: the physics and the biology" },
    { week: 7, n: 2, track: "safety", title: "Measuring noise: sound level meters and dosimeters" },
    { week: 7, n: 3, track: "people", title: "How habits form: cue, routine, reward" },
    { week: 7, n: 4, track: "safety", title: "Calculating noise dose and time-weighted average" },
    { week: 7, n: 5, track: "craft", title: "Building a toolbox talk in ten minutes" },
    { week: 7, n: 6, track: "craft", title: "Weekend: attention and the myth of multitasking" },
    { week: 7, n: 7, track: "people", title: "Weekend: social proof and what the crew next door is doing" },
    { week: 8, n: 1, track: "safety", title: "Hearing protection: ratings, fit and real-world performance" },
    { week: 8, n: 2, track: "safety", title: "Engineering noise at the source and along the path" },
    { week: 8, n: 3, track: "people", title: "Changing a habit: make it easy, make it obvious" },
    { week: 8, n: 4, track: "safety", title: "Audiometry and a hearing conservation programme" },
    { week: 8, n: 5, track: "craft", title: "Telling a story in a toolbox talk" },
    { week: 8, n: 6, track: "craft", title: "Weekend: note-taking that you will actually use" },
    { week: 8, n: 7, track: "people", title: "Weekend: giving and receiving feedback" }
  ]
};
