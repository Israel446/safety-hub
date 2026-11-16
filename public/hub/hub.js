
(function(){
window.__hubBooted=true;
"use strict";
var L = window.LESSONS || [], C = window.CURRICULUM || {};
var T = window.TOPICS || [], TM = window.TOPICS_MONTH || {};
var byId = {}; L.forEach(function(l){ byId[l.id] = l; });
/* Quiz options are shuffled once, the same way on every device, so the right answer is not always in the same position. */
L.forEach(function(l){ l.quiz.forEach(function(q,i){
  var s=0, key=l.id+":"+i, k, j, r, t, idx=q.options.map(function(_,n){return n;}), correct=q.options[q.answer];
  for(k=0;k<key.length;k++) s=(s*31+key.charCodeAt(k))>>>0;
  for(j=idx.length-1;j>0;j--){ s=(Math.imul(s,1664525)+1013904223)>>>0; r=(s>>>8)%(j+1); t=idx[j]; idx[j]=idx[r]; idx[r]=t; }
  q.options=idx.map(function(n){return q.options[n];}); q.answer=q.options.indexOf(correct);
}); });
var TRACK = {safety:"Safety science", people:"People", craft:"Craft"};
var $view = document.getElementById("view"), $sync = document.getElementById("sync");

/* ---------- state ---------- */
function blank(){ return {done:{}, quiz:{}, work:{}, days:[], review:{}}; }
function loadLocal(){ try{ return Object.assign(blank(), JSON.parse(localStorage.getItem(("fp-state:"+document.getElementById("view").dataset.userId))||"{}")); }catch(e){ return blank(); } }
function saveLocal(){ try{ localStorage.setItem(("fp-state:"+document.getElementById("view").dataset.userId), JSON.stringify(S)); }catch(e){} }
var S = loadLocal();
S.review = S.review || {};
var INTERVALS=[1,3,7,14,30], reviewSession=null;
/* One-time catch-up: lessons finished before review existed get their questions queued, due today. */
function enrollDone(){ var added=false; Object.keys(S.done).forEach(function(id){ var l=byId[id]; if(!l) return; l.quiz.forEach(function(q,i){ var k=id+":"+i; if(!S.review[k]){ S.review[k]={box:0, due:today(), t:Date.now()}; added=true; } }); }); return added; }
var db=null, user=null, sample=null, uid=null, me=null, isOwner=false;
var sync="local", members=[], hub={}, writeChain=Promise.resolve(), pending=false;
var subCache={}, quizShown={}, chat={lesson:null,msgs:[],busy:false,label:""};

function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
function strip(s){ return String(s).replace(/<[^>]+>/g,""); }
function today(){ var d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dayOffset(n){ var d=new Date(); d.setDate(d.getDate()-n); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dayAhead(n){ var d=new Date(); d.setDate(d.getDate()+n); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dueReviews(){
  return Object.keys(S.review).filter(function(k){
    var parts=k.split(":"), l=byId[parts[0]];
    return l && l.quiz[Number(parts[1])] && S.review[k].due<=today();
  }).sort(function(a,b){ return S.review[a].due<S.review[b].due?-1:S.review[a].due>S.review[b].due?1:a.localeCompare(b); });
}
function streakOf(days){ var set={}; (days||[]).forEach(function(x){set[x]=1;}); var n=0, i=set[dayOffset(0)]?0:1; while(set[dayOffset(i)]){ n++; i++; } return n; }
function doneCount(done){ return L.filter(function(l){ return done && done[l.id]; }).length; }
function nextLesson(){ for(var i=0;i<L.length;i++){ if(!S.done[L[i].id]) return L[i]; } return null; }
function ago(ts){ if(!ts) return "not yet"; var d=Math.floor((Date.now()-ts)/86400000); return d<=0?"today":d===1?"yesterday":d+" days ago"; }

function merge(r){
  var changed=false; r=r||{};
  Object.keys(r.done||{}).forEach(function(k){ if(!S.done[k]){ S.done[k]=r.done[k]; changed=true; } });
  Object.keys(r.quiz||{}).forEach(function(k){ if(S.quiz[k]==null || r.quiz[k]>S.quiz[k]){ S.quiz[k]=r.quiz[k]; changed=true; } });
  Object.keys(r.review||{}).forEach(function(k){ if(!S.review[k] || (r.review[k].t||0)>(S.review[k].t||0)){ S.review[k]=r.review[k]; changed=true; } });
  var set={}; S.days.concat(r.days||[]).forEach(function(d){ set[d]=1; });
  var days=Object.keys(set).sort(); if(days.length!==S.days.length){ S.days=days; changed=true; }
  return changed;
}
function localAhead(r){ r=r||{}; return Object.keys(S.review).some(function(k){return !(r.review||{})[k] || (S.review[k].t||0)>(r.review[k].t||0);}) || Object.keys(S.done).some(function(k){return !(r.done||{})[k];}) || Object.keys(S.quiz).some(function(k){return (r.quiz||{})[k]!==S.quiz[k];}); }
function pushRemote(){
  if(!db || !uid || sync==="readonly" || pending) return;
  pending=true;
  setTimeout(function(){
    pending=false;
    var body={done:S.done, quiz:S.quiz, days:S.days.slice(-120), updatedAt:Date.now()};
    body.review=S.review;
    writeChain=writeChain.then(function(){ return db.doc("members/"+uid).set(body); })
      .then(function(){ sync="synced"; paintSync(); })
      .catch(function(e){ if(e && e.code==="invalid_argument") sync="readonly"; paintSync(); });
  },700);
}
function paintSync(){
  $sync.textContent = sync==="synced" ? "Progress synced with your team" : sync==="readonly" ? "Progress saved on this device only" : "Progress saved on this device";
}
function commit(){ saveLocal(); pushRemote(); }

/* ---------- views ---------- */
function chip(l){ return '<span class="chip '+l.track+'">'+TRACK[l.track]+'</span>'; }
function lessonNo(l){ return "Week "+l.week+" · Lesson "+l.n; }

function topicDate(date){
  var parts=date.split("-"), d=new Date(Number(parts[0]), Number(parts[1])-1, Number(parts[2]));
  return d.toLocaleDateString("en-GB", {weekday:"short", day:"numeric", month:"short"});
}
function sortedTopics(){
  return T.slice().sort(function(a,b){ return a.date<b.date?-1:a.date>b.date?1:0; });
}
function topicLesson(t){
  return t.lesson && Object.prototype.hasOwnProperty.call(byId,t.lesson) ? '<a href="#'+esc(t.lesson)+'">Open related lesson</a>' : '';
}
function topicCategory(t){
  var categories={
    "Hazards & controls":["amber",'<path d="M12 3 2 21h20L12 3Z M12 9v5 M12 17v1"/>'],
    "Permits":["blue",'<path d="M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h4"/>'],
    "First aid":["red",'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>'],
    "Ground control":["rust",'<path d="m2 17 6-9 4 5 4-10 6 14 M2 21h20"/>'],
    "Substance abuse":["violet",'<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>'],
    "Environment":["green",'<path d="M4 20C2 8 11 3 21 3c0 11-6 18-17 17Z M4 20 16 8"/>'],
    "Mindset":["violet",'<path d="M9 21v-4a7 7 0 1 1 9-7l3 4h-4v7 M8 9h6 M11 6v6"/>'],
    "Production & discipline":["teal",'<path d="m3 13 6 6L21 5"/>'],
    "Legal (LI 2182)":["blue",'<path d="M12 3v18 M5 21h14 M3 7h18 M6 7l-4 8h8L6 7Z M18 7l-4 8h8l-4-8Z"/>'],
    "Driving":["amber",'<path d="m5 5-3 9v6h3v-3h14v3h3v-6l-3-9H5Z M2 13h20 M6 15h2 M16 15h2"/>'],
    "Housekeeping":["teal",'<path d="m16 3-6 10 M7 11l8 5-4 6-9-6 5-5Z M6 15l-2 3 M10 17l-2 3"/>']
  };
  return Object.prototype.hasOwnProperty.call(categories,t.category) ? categories[t.category] : ["neutral",'<circle cx="12" cy="12" r="9"/><path d="M12 10v7 M12 6v1"/>'];
}
function categoryChip(t){
  var c=topicCategory(t);
  return '<span class="category-chip cat-'+c[0]+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+c[1]+'</svg>'+esc(t.category||"General safety")+'</span>';
}
function topicMaterial(t,open,flat){
  var m=t.material;
  if(!m || typeof m!=="object") return "";
  var h=flat?'<div class="more-content material-flat">':'<details class="more"'+(open?' open':'')+'><summary>More on this topic</summary><div class="more-content">';
  if(m.summary) h+=(flat?'<section><h4>Summary</h4><p>':'<p>')+esc(m.summary)+(flat?'</p></section>':'</p>');
  if(Array.isArray(m.points) && m.points.length) h+='<div><h4>Key points</h4><ul>'+m.points.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  if(Array.isArray(m.ask) && m.ask.length) h+='<div><h4>Ask the crew</h4><ol>'+m.ask.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ol></div>';
  if(Array.isArray(m.sources) && m.sources.length) h+='<div><h4>Sources</h4><ul>'+m.sources.map(function(x){
    var label=esc(x.label||x.url||"Source"), url=String(x.url||"");
    return '<li>'+(/^https:\/\//.test(url)?'<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+label+'</a>':label)+'</li>';
  }).join('')+'</ul></div>';
  return h+(flat?'</div>':'</div></details>');
}
function topicsLinkLabel(){
  var month=String(TM.month||""), match=/^\d{4}-(0[1-9]|1[0-2])$/.exec(month);
  return match ? 'All '+['January','February','March','April','May','June','July','August','September','October','November','December'][Number(match[1])-1]+' topics' : 'This month';
}
function topicBanner(){
  var t=sortedTopics().filter(function(x){return x.date>=today();})[0];
  return t?'<a class="topic-pill" href="#day-'+esc(t.date)+'"><span class="category-dot cat-'+topicCategory(t)[0]+'"></span><span class="truncate">'+esc((t.date===today()?'Today: ':'Next · '+topicDate(t.date)+': ')+t.title)+'</span><span aria-hidden="true">›</span></a>':'';
}
function topicOn(date){return T.filter(function(t){return t.date===date;})[0];}
function viewToday(){
  var date=today(), month=/^\d{4}-\d{2}/.test(date)?date.slice(0,7):TM.month;
  var parts=month.split('-'), first=new Date(Number(parts[0]),Number(parts[1])-1,1), days=new Date(Number(parts[0]),Number(parts[1]),0).getDate();
  var topics=sortedTopics().filter(function(t){return t.date.slice(0,7)===month;}), cats={}, h='<section class="month-head"><h1>'+esc(first.toLocaleDateString('en-GB',{month:'long',year:'numeric'}))+'</h1><p>'+esc(TM.theme||'Reliability and consistency')+'</p><p class="small muted">'+esc(TM.reminder||'Remember… make safety part of every day.')+'</p></section><div class="legend" aria-label="Topic categories">';
  topics.forEach(function(t){if(!cats[t.category]){cats[t.category]=true;h+=categoryChip(t);}});
  h+='</div><div class="calendar" aria-label="Month calendar">';
  ['M','T','W','T','F','S','S'].forEach(function(d){h+='<span class="weekday" aria-hidden="true">'+esc(d)+'</span>';});
  var i;for(i=0;i<(first.getDay()+6)%7;i++) h+='<span aria-hidden="true"></span>';
  for(i=1;i<=days;i++){
    var key=month+'-'+(i<10?'0':'')+i,t=topicOn(key),cls='day'+(t?' has-topic cat-'+topicCategory(t)[0]:'')+(key<date?' is-past':'')+(key===date?' is-today':'');
    h+='<button class="'+cls+'" id="day-'+esc(key)+'"'+(t?' data-day="'+esc(key)+'"':' disabled')+(key===date?' aria-current="date"':'')+' aria-label="'+esc(topicDate(key)+(t?', '+(t.category||'General safety')+': '+t.title:', No topic'))+'"><span class="day-number">'+esc(i)+'</span>'+(t?'<span class="category-dot" aria-hidden="true"></span>':'')+'</button>';
  }
  h+='</div>';
  var current=topicOn(date), next=sortedTopics().filter(function(t){return t.date>date;})[0], topic=current||next;
  if(topic) h+='<a class="today-row" href="#day-'+esc(topic.date)+'"><span class="category-dot cat-'+topicCategory(topic)[0]+'"></span><span class="grow"><span class="small muted">'+esc(current?'Today':'Next topic · '+topicDate(topic.date))+'</span><span class="two-lines">'+esc(topic.title)+'</span></span><span aria-hidden="true">›</span></a>';
  var n=nextLesson(),dc=doneCount(S.done),due=dueReviews(),circ=201.062;
  h+='<h2>Your learning</h2><div class="learning">';
  h+='<section class="learning-tile"><span class="small muted">Next lesson'+(n?' · '+esc(n.minutes)+' min':'')+'</span><h3>'+esc(n?n.title:'You are up to date')+'</h3>'+(n?'<a class="btn primary" href="#'+esc(n.id)+'">'+esc(dc?'Continue':'Start')+'</a>':'')+'</section>';
  h+='<section class="learning-tile"><span class="small muted">Daily review</span><h3>'+esc(due.length?due.length+' due':'Done for today')+'</h3><a class="btn" href="#review">'+esc(due.length?'Start review':'View review')+'</a></section>';
  h+='<section class="learning-tile"><span class="small muted">Progress</span><svg class="progress-ring" viewBox="0 0 80 80" role="img" aria-label="'+esc(dc+' of '+L.length+' lessons done')+'"><circle class="track" cx="40" cy="40" r="32" fill="none" stroke-width="6"/><circle class="fill" cx="40" cy="40" r="32" fill="none" stroke-width="6" stroke-dasharray="'+esc(circ)+'" stroke-dashoffset="'+esc(circ*(1-(L.length?dc/L.length:0)))+'"/><text x="40" y="44" text-anchor="middle">'+esc(dc+'/'+L.length)+'</text></svg><p class="small muted">'+esc(streakOf(S.days)+'-day streak')+'</p></section></div>';
  if(hub.lesson && byId[hub.lesson]){var l=byId[hub.lesson];h+='<h2>Next team session</h2><a class="card" href="#'+esc(l.id)+'"><h3>'+esc(l.title)+'</h3><p class="muted">'+esc(hub.note||'Read it before the session.')+'</p></a>';}
  return h;
}

function viewReview(){
  var session=reviewSession, h='<h1>Daily review</h1>';
  if(!session || !session.items.length) return h+'<section class="card"><p>No questions due today.</p><a href="#today">Back to Today</a></section>';
  if(session.index===session.items.length) return h+'<section class="card"><h2>Review complete: '+esc(session.right)+' of '+esc(session.items.length)+' right</h2><a href="#today">Back to Today</a></section>';
  var key=session.items[session.index], parts=key.split(":"), l=byId[parts[0]], q=l.quiz[Number(parts[1])];
  h+='<p class="small muted">Question '+esc(session.index+1)+' of '+esc(session.items.length)+'</p><section class="card"><p class="small muted">'+esc(l.title)+'</p><fieldset><legend>'+esc(q.q)+'</legend>';
  q.options.forEach(function(o,j){
    var cls="opt", picked=session.pick===j;
    if(session.checked){ if(j===q.answer) cls+=" right"; else if(picked) cls+=" wrong"; }
    h+='<label class="'+cls+'"><input type="radio" name="review-answer" value="'+esc(j)+'" '+(picked?'checked ':'')+(session.checked?'disabled':'')+'><span>'+esc(o)+'</span></label>';
  });
  h+='</fieldset>';
  if(session.checked) h+='<p><b>'+esc(session.pick===q.answer?'Correct':'Incorrect')+'</b></p><div class="why">'+esc(q.why)+'</div><button class="primary" data-act="review-next">Next</button>';
  else h+='<button class="primary" data-act="review-check">Check</button><span class="small muted" id="review-msg"></span>';
  return h+'</section>';
}

function viewLesson(l){
  var done=!!S.done[l.id], w=S.work[l.id];
  var h='<div class="row">'+chip(l)+'<span class="chip plain">'+esc(l.area)+'</span><span class="chip plain">'+l.minutes+' min</span>'+(done?'<span class="chip done">Completed</span>':'')+'</div>';
  h+='<div class="small muted">'+lessonNo(l)+'</div><h1>'+esc(l.title)+'</h1>';
  if(l.book) h+='<p class="small muted">Book reference: '+esc(l.book)+'</p>';
  h+='<section class="card lead"><h2 style="margin:0">The big idea</h2><p class="big">'+esc(l.bigIdea)+'</p></section>';
  h+='<h2>Why it matters</h2><div class="prose"><p>'+esc(l.why)+'</p></div>';
  h+='<h2>The science</h2><div class="prose">'+l.science.map(function(p){return "<p>"+p+"</p>";}).join("")+
     '<div class="ev"><b>Evidence: '+esc(l.evidence)+'.</b> '+esc(l.evidenceNote)+'</div></div>';
  h+='<h2>On site</h2><div class="prose">'+l.work.map(function(p){return "<p>"+p+"</p>";}).join("")+'</div>';
  h+='<h2>Techniques to use</h2><section class="card tech">'+l.techniques.map(function(t){return "<div><b>"+esc(t.name)+"</b>"+esc(t.how)+"</div>";}).join("")+'</section>';
  h+='<h2>Check yourself</h2><section class="card" id="quiz">'+quizHtml(l)+'</section>';
  h+='<h2>Assignment · '+esc(l.assignment.level)+'</h2><section class="card"><p>'+esc(l.assignment.task)+'</p>'+
     (l.assignment.stretch?'<p class="muted"><b>Stretch:</b> '+esc(l.assignment.stretch)+'</p>':'')+
     '<label class="small muted" for="work">What you did and what you found'+(sync==="synced"?" (your team can read this)":"")+'</label>'+
     '<textarea id="work" maxlength="1200">'+esc(w?w.text:"")+'</textarea>'+
     '<div class="row"><button data-act="save-work">Save assignment</button><span class="small muted" id="work-msg">'+(w?"Saved "+ago(w.ts):"")+'</span></div></section>';
  h+='<h2>For the team session</h2><section class="card"><ol class="q">'+l.discuss.map(function(q){return "<li>"+esc(q)+"</li>";}).join("")+'</ol>'+
     '<p class="muted"><b>Reflect:</b> '+esc(l.reflect)+'</p>'+
     (isOwner?'<div class="row"><button data-act="set-team">Set as next team session</button><span class="small muted" id="team-msg">'+(hub.lesson===l.id?"This is the current team lesson":"")+'</span></div>':'')+'</section>';
  h+='<h2>AI tutor</h2><section class="card" id="tutor">'+tutorHtml(l)+'</section>';
  h+='<h2>Sources</h2><ul class="src">'+l.sources.map(function(s){return "<li>"+esc(s)+"</li>";}).join("")+'</ul>';
  var idx=L.indexOf(l), nx=L[idx+1];
  h+='<div class="row" style="margin-top:8px"><button class="primary" data-act="complete" '+(done?"disabled":"")+'>'+(done?"Lesson completed":"Mark lesson complete")+'</button>'+
     (nx?'<a class="btn" href="#'+nx.id+'">Next lesson</a>':'')+'</div>';
  return h;
}

function quizHtml(l){
  var shown=quizShown[l.id], h="";
  l.quiz.forEach(function(q,i){
    h+='<fieldset><legend>'+(i+1)+". "+esc(q.q)+'</legend>';
    q.options.forEach(function(o,j){
      var cls="opt", picked=shown && shown[i]===j;
      if(shown){ if(j===q.answer) cls+=" right"; else if(picked) cls+=" wrong"; }
      h+='<label class="'+cls+'" for="q'+i+'o'+j+'"><input type="radio" id="q'+i+'o'+j+'" name="q'+i+'" value="'+j+'" '+(picked?"checked":"")+' '+(shown?"disabled":"")+'><span>'+esc(o)+'</span></label>';
    });
    if(shown) h+='<div class="why">'+esc(q.why)+'</div>';
    h+='</fieldset>';
  });
  if(shown){
    var sc=l.quiz.filter(function(q,i){return shown[i]===q.answer;}).length;
    h+='<div class="row"><b>'+sc+' of '+l.quiz.length+' correct</b><button data-act="quiz-retry">Try again</button></div>';
  } else {
    h+='<div class="row"><button data-act="quiz-check">Check answers</button>'+(S.quiz[l.id]!=null?'<span class="small muted">Best so far: '+S.quiz[l.id]+' of '+l.quiz.length+'</span>':'')+'</div>';
  }
  return h;
}

var MODES = {
  deeper:{label:"Go deeper", ask:"Go deeper on this lesson. Explain the underlying research in more detail, give one worked example from a surface mine, state the strongest criticism or limit of the idea, and recommend up to three real sources to read next. About 400 words."},
  teach:{label:"Teach me", ask:"Teach me this lesson interactively. Ask me one question at a time to check my understanding, wait for my answer, then correct it or build on it. Keep each turn under 120 words. Ask your first question now."},
  quiz:{label:"New quiz", ask:"Write five new multiple-choice questions on this lesson, different from the ones already in it, each with four options. List all the questions first. Then, under a heading 'Answers', give each answer with a one-line explanation."},
  challenge:{label:"Department challenge", ask:"Write a department challenge for this lesson: one practical activity colleagues do on site this week in pairs. Give clear steps, what each pair brings back, and how the group reviews it together. Under 200 words."},
  slides:{label:"Teaching edition", ask:"Create a teaching edition of this lesson for a 20 to 30 minute session with fellow safety professionals: 8 to 12 slides. For each slide write '## Slide N: title', then 2 to 4 short bullets, then '**Teacher notes:**' followed by 60 to 100 words on what to say and how to run that part.\nDesign rules: lead the group to reach the conclusions themselves through questions instead of telling them; include questions the group will naturally answer yes to; ask the group what they want and think; near the end have them state in their own words what can be expected of them. Near the start include one short side story that makes the idea relatable: it opens with a named person in a specific place and moment, uses an uncommon but plausible name, and is set outside mining and outside safety work (for example an army unit, a security firm, a fabrication shop, a bakery, a ferry crew). Say in the teacher notes that it is an illustrative story, not a real case. Finish with a practical exercise slide. Use only facts from the lesson text for any statistic or study."}
};
var RULES="You are the tutor inside a daily learning hub for occupational safety professionals, most of them working at a surface mining operation in Ghana. Write plain, direct English. Never invent studies, statistics, quotations or references. Cite a source only if you are confident it exists, and say so plainly when you are unsure. Where it matters, say whether a claim is established evidence, emerging research or your own interpretation. Stay on the lesson topic. Format with simple Markdown only: '## ' headings, '- ' bullets and **bold**.";

function lessonText(l){
  return "Title: "+l.title+"\nArea: "+l.area+"\nBig idea: "+l.bigIdea+"\nWhy it matters: "+l.why+"\nScience: "+l.science.map(strip).join(" ")+
    "\nEvidence: "+l.evidence+". "+l.evidenceNote+"\nOn site: "+l.work.join(" ")+"\nTechniques: "+l.techniques.map(function(t){return t.name+": "+t.how;}).join(" | ")+
    "\nAssignment: "+l.assignment.task+"\nSources: "+l.sources.join(" ; ");
}
function md(t){
  var out=[], inList=false;
  esc(t).split(/\r?\n/).forEach(function(line){
    var s=line.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
    var m;
    if((m=s.match(/^\s*#{1,4}\s+(.*)$/))){ if(inList){out.push("</ul>");inList=false;} out.push("<h4>"+m[1]+"</h4>"); }
    else if((m=s.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/))){ if(!inList){out.push("<ul>");inList=true;} out.push("<li>"+m[1]+"</li>"); }
    else { if(inList){out.push("</ul>");inList=false;} if(s.trim()) out.push("<p>"+s+"</p>"); }
  });
  if(inList) out.push("</ul>");
  return out.join("");
}
function tutorHtml(l){
  if(!sample) return '<p class="muted">The tutor appears when the hub is opened by someone signed in. It can go deeper, quiz you, teach interactively and build a teaching edition with teacher notes.</p>';
  if(chat.lesson!==l.id){ chat={lesson:l.id,msgs:[],busy:false,label:""}; }
  var h='<div class="row">'+Object.keys(MODES).map(function(k){return '<button data-act="tutor" data-mode="'+k+'">'+MODES[k].label+'</button>';}).join("")+'</div>';
  h+='<div class="tutor-log" id="tlog">'+logHtml()+'</div>';
  h+='<div class="row" id="tform" style="'+(chat.msgs.length?"":"display:none")+'"><input type="text" id="tin" placeholder="Reply or ask a follow-up" autocomplete="off"><button data-act="tutor-send">Send</button><button data-act="tutor-copy">Copy last answer</button></div>';
  h+='<p class="small muted">The tutor writes fresh each time and can be wrong. The lesson above is the checked version.</p>';
  return h;
}
function logHtml(){
  return chat.msgs.map(function(m,i){
    if(m.role==="user") return '<div class="msg u">'+esc(i===0?chat.label:m.content)+'</div>';
    return '<div class="msg a">'+md(m.content)+'</div>';
  }).join("");
}
function paintLog(live){
  var el=document.getElementById("tlog"); if(!el) return;
  el.innerHTML=logHtml()+(live!=null?'<div class="msg a">'+(live?md(live):'<span class="muted">Thinking…</span>')+'</div>':"");
  var f=document.getElementById("tform"); if(f) f.style.display=chat.msgs.length?"":"none";
}
function runTutor(){
  if(chat.busy||!sample) return; chat.busy=true; paintLog("");
  var forLesson=chat.lesson;
  sample(chat.msgs.slice(), {cache:false, onText:function(e){ if(chat.lesson===forLesson) paintLog(e.text); }})
    .then(function(r){ if(chat.lesson!==forLesson) return; chat.msgs.push({role:"assistant",content:(r&&r.text)||""}); chat.busy=false; paintLog(null); })
    .catch(function(e){
      if(chat.lesson!==forLesson) return;
      chat.busy=false; chat.msgs.pop();
      var msg = e && e.code==="rate_limited" ? "The tutor is busy. Wait a minute and try again." : e && e.code==="not_granted" ? "The tutor was not allowed for this visit." : "The tutor could not answer. Try again.";
      paintLog(null); var el=document.getElementById("tlog"); if(el) el.insertAdjacentHTML("beforeend",'<div class="msg a muted">'+msg+'</div>');
    });
}

function viewPath(){
  var h='<h1>The learning path</h1><p class="small muted">'+esc(C.rhythm||"")+'</p>', weeks=[];
  L.forEach(function(l){if(weeks.indexOf(l.week)<0) weeks.push(l.week);});
  weeks.sort(function(a,b){return a-b;});
  h+='<h2>Available now</h2>';
  weeks.forEach(function(week){
    var lessons=L.filter(function(l){return l.week===week;}), done=lessons.filter(function(l){return S.done[l.id];}).length;
    h+='<section class="card"><div class="week-heading"><h3 class="week-title">Week '+esc(week)+'</h3><span class="small muted">'+done+' / 7 done</span></div><div class="completion-track" role="progressbar" aria-label="Week '+esc(week)+' completion" aria-valuemin="0" aria-valuemax="7" aria-valuenow="'+done+'"><div class="completion-bar" style="width:'+Math.min(100,100*done/7)+'%"></div></div><div class="list">'+lessons.map(function(l){
      return '<a class="item" href="#'+l.id+'"><span class="tick '+(S.done[l.id]?"on":"")+'"></span><span class="grow"><span class="t">'+esc(l.title)+'</span><br><span class="small muted">'+lessonNo(l)+' · '+TRACK[l.track]+'</span></span></a>';
    }).join('')+'</div></section>';
  });
  if(C.upcoming && C.upcoming.length){
    h+='<h2>Coming next</h2><section class="card"><div class="list">'+C.upcoming.map(function(u){
      return '<div class="item"><span class="num">W'+u.week+' L'+u.n+'</span><span class="grow">'+esc(u.title)+'<br><span class="small muted">'+TRACK[u.track]+'</span></span></div>';
    }).join("")+'</div></section>';
  }
  h+='<h2>Year 1 map</h2><section class="card"><div class="scroll"><table class="map">'+(C.year1||[]).map(function(r){
    var wk = r[0]===r[1] ? "Week "+r[0] : "Weeks "+r[0]+"–"+r[1];
    return '<tr><td>'+wk+'</td><td><b>'+esc(r[2])+'</b>'+(r[3]?' <span class="muted">('+esc(r[3])+')</span>':'')+(r[4]?'<br><span class="muted">People: '+esc(r[4])+' · Craft: '+esc(r[5])+'</span>':'')+'</td></tr>';
  }).join("")+'</table></div></section>';
  h+='<h2>Year 2 book chapters</h2><section class="card"><p class="small">'+esc(C.year2chapters||"")+'</p></section>';
  h+='<h2>Five-year arc</h2><section class="card"><div class="list">'+(C.arc||[]).map(function(a){
    return '<div class="item"><span class="num">Year '+a.year+'</span><span class="grow"><span class="t">'+esc(a.title)+'</span><br><span class="small muted">'+esc(a.note)+'</span></span></div>';
  }).join("")+'</div></section>';
  return h;
}

function viewTeam(){
  var h='<h1>Team</h1>';
  if(isOwner && db && members.length){
    var now=Date.now(), weekMs=7*86400000;
    var counts=members.map(function(m){ return doneCount(m.done); }).sort(function(a,b){ return a-b; });
    var middle=Math.floor(counts.length/2);
    var median=counts.length%2?counts[middle]:(counts[middle-1]+counts[middle])/2;
    var active=0, totalDone=0, quizGot=0, quizTotal=0;
    members.forEach(function(m){
      if(m.updatedAt && now-m.updatedAt<=weekMs) active++;
      totalDone+=doneCount(m.done);
      Object.keys(m.quiz||{}).forEach(function(id){
        var l=byId[id];
        if(l && l.quiz.length && m.quiz[id]!=null){ quizGot+=Number(m.quiz[id]); quizTotal+=l.quiz.length; }
      });
    });
    h+='<h2>'+esc("Owner dashboard")+'</h2><div class="stats four">'+[
      [members.length,"Members"], [active,"Active this week"],
      [(totalDone/members.length).toFixed(1),"Average lessons done"],
      [quizTotal?Math.round(100*quizGot/quizTotal)+"%":"–","Team quiz accuracy"]
    ].map(function(s){ return '<div class="stat"><div class="n">'+esc(s[0])+'</div><div class="l">'+esc(s[1])+'</div></div>'; }).join("")+'</div>';
    var nudges=members.filter(function(m){ return !m.updatedAt || now-m.updatedAt>weekMs || median-doneCount(m.done)>=7; });
    h+='<section class="card"><h3>'+esc("Needs a nudge")+'</h3><div class="list">'+(nudges.length?nudges.map(function(m){
      var count=doneCount(m.done), inactive=!m.updatedAt || now-m.updatedAt>weekMs;
      var reason=inactive?(m.updatedAt?"Inactive "+Math.floor((now-m.updatedAt)/86400000)+" days":"Inactive · no activity recorded"):(median-count)+" lessons behind";
      return '<div class="item"><img class="avatar" alt="" data-av="'+esc(m.id)+'"><span class="grow"><span class="t" data-name="'+esc(m.id)+'">'+esc("Member")+'</span><br><span class="small muted">'+esc(reason)+'</span></span><span class="num">'+esc(count+" / "+L.length)+'</span></div>';
    }).join(""):'<p class="muted">'+esc("Everyone is active and on pace.")+'</p>')+'</div></section>';
    var hardest=L.map(function(l){
      var scores=members.filter(function(m){ return m.quiz && m.quiz[l.id]!=null; });
      var accuracy=l.quiz.length && scores.length?scores.reduce(function(sum,m){ return sum+Number(m.quiz[l.id])/l.quiz.length; },0)/scores.length:0;
      return {lesson:l, people:scores.length, accuracy:accuracy};
    }).filter(function(r){ return r.people>=2 && r.lesson.quiz.length; }).sort(function(a,b){ return a.accuracy-b.accuracy; }).slice(0,5);
    h+='<section class="card"><h3>'+esc("Hardest lessons")+'</h3><div class="list">'+(hardest.length?hardest.map(function(r){
      return '<a class="item" href="#'+esc(r.lesson.id)+'"><span class="grow"><span class="t">'+esc(r.lesson.title)+'</span><br><span class="small muted">'+esc(lessonNo(r.lesson))+'</span><br><span class="num">'+esc(Math.round(100*r.accuracy)+"% avg · "+r.people+" people")+'</span></span></a>';
    }).join(""):'<p class="muted">'+esc("Not enough quiz results yet.")+'</p>')+'</div></section>';
    var ordered=L.slice().sort(function(a,b){ return a.week-b.week || a.n-b.n; });
    var finished=ordered.map(function(l){ return members.filter(function(m){ return m.done && m.done[l.id]; }).length; });
    var furthest=-1;
    finished.forEach(function(count,i){ if(count) furthest=i; });
    h+='<section class="card"><h3>'+esc("Lesson completion")+'</h3><div class="list">'+ordered.slice(0,furthest+1).map(function(l,i){
      return '<div class="item"><div class="grow"><div class="small">'+esc(lessonNo(l)+" · "+l.title)+'</div><div class="completion-track"><div class="completion-bar" style="width:'+esc(100*finished[i]/members.length)+'%"></div></div></div><span class="num">'+esc(finished[i]+" / "+members.length)+'</span></div>';
    }).join("")+'</div></section>';
  }
  if(!db){ return h+'<section class="card"><p>The team view shows each member\'s progress and assignments. It appears for people who open the hub signed in and have been given access by the owner.</p><p class="muted">Until then, your progress is kept on this device.</p></section>'; }
  if(hub.lesson && byId[hub.lesson]){
    var t=byId[hub.lesson];
    h+='<h2>Next team session</h2><a class="card lead" href="#'+t.id+'" style="text-decoration:none"><div class="row">'+chip(t)+'<span class="small muted">'+lessonNo(t)+'</span></div><h3>'+esc(t.title)+'</h3>'+(hub.note?'<p class="muted">'+esc(hub.note)+'</p>':'')+'</a>';
  } else if(isOwner){
    h+='<h2>Next team session</h2><section class="card"><p class="muted">No team session is set. Open a lesson and choose "Set as next team session".</p></section>';
  }
  if(isOwner){
    h+='<section class="card"><div class="row"><input type="text" id="team-note" maxlength="200" value="'+esc(hub.note||"")+'" placeholder="Team session note"><button data-act="save-note">Save note</button><span class="small muted" id="team-msg"></span></div></section>';
  }
  var list=members.slice().sort(function(a,b){ return doneCount(b.done)-doneCount(a.done); });
  h+='<h2>Members ('+list.length+')</h2><section class="card"><div class="list">'+(list.length?list.map(function(m){
    return '<div class="item"><img class="avatar" alt="" data-av="'+esc(m.id)+'"><span class="grow"><span class="t" data-name="'+esc(m.id)+'">Member</span><br><span class="small muted">Active '+ago(m.updatedAt)+' · '+streakOf(m.days)+' day streak</span></span><span class="num" style="text-align:right">'+doneCount(m.done)+' / '+L.length+'</span></div>';
  }).join(""):'<p class="muted">Nobody has synced progress yet.</p>')+'</div></section>';
  if(hub.lesson && byId[hub.lesson]){
    var sc=subCache[hub.lesson];
    h+='<h2>Assignments for this session</h2><section class="card"><div class="list">';
    if(!sc){ h+='<p class="muted">Loading…</p>'; loadSubs(hub.lesson); }
    else if(!sc.length){ h+='<p class="muted">No assignments shared yet.</p>'; }
    else { h+=sc.map(function(s){ return '<div class="item" style="align-items:flex-start"><img class="avatar" alt="" data-av="'+esc(s.id)+'"><span class="grow"><span class="t" data-name="'+esc(s.id)+'">Member</span><br><span>'+esc(s.text)+'</span></span></div>'; }).join(""); }
    h+='</div></section>';
  }
  return h;
}
function loadSubs(lessonId){
  var ids=members.map(function(m){return m.id;});
  Promise.all(ids.map(function(id){ return db.doc("members/"+id+"/work/"+lessonId).get().then(function(s){ return s.exists?{id:id,text:String((s.data()||{}).text||"")}:null; }).catch(function(){return null;}); }))
    .then(function(r){ subCache[lessonId]=r.filter(function(x){return x && x.text;}); if(route()==="team") render(); });
}
function paintNames(){
  if(!user) return;
  var ids={}; document.querySelectorAll("[data-name]").forEach(function(el){ ids[el.getAttribute("data-name")]=1; });
  var arr=Object.keys(ids); if(!arr.length) return;
  user.profiles(arr).then(function(ps){
    document.querySelectorAll("[data-name]").forEach(function(el){ var p=ps[el.getAttribute("data-name")]; if(p) el.textContent=(p.name||"Member")+(p.isMe?" (you)":""); });
    document.querySelectorAll("[data-av]").forEach(function(el){ var p=ps[el.getAttribute("data-av")]; if(p && p.avatarUrl) el.src=p.avatarUrl; });
  });
}

function viewMe(){
  var h='<h1>Your progress</h1>';
  h+='<div class="stats">'+["safety","people","craft"].map(function(t){
    var all=L.filter(function(l){return l.track===t;}), d=all.filter(function(l){return S.done[l.id];}).length;
    return '<div class="stat"><div class="n">'+d+'<span class="muted" style="font-size:0.9375rem"> / '+all.length+'</span></div><div class="l">'+TRACK[t]+'</div></div>';
  }).join("")+'</div>';
  var qs=L.filter(function(l){return S.quiz[l.id]!=null;});
  var tot=qs.reduce(function(a,l){return a+l.quiz.length;},0), got=qs.reduce(function(a,l){return a+S.quiz[l.id];},0);
  h+='<section class="card"><div class="row"><b>Quiz accuracy</b><span>'+(tot?Math.round(100*got/tot)+"% across "+qs.length+" lessons":"No quizzes taken yet")+'</span></div>'+
     '<div class="row"><b>Day streak</b><span>'+streakOf(S.days)+'</span></div><p class="small muted">'+(sync==="synced"?"Your lesson count, streak and assignments are visible to your team.":"Progress is stored on this device. Clearing browser data will remove it.")+'</p></section>';
  var ws=L.filter(function(l){return S.work[l.id];});
  h+='<h2>Your assignments</h2><section class="card"><div class="list">'+(ws.length?ws.map(function(l){
    return '<a class="item" href="#'+l.id+'" style="align-items:flex-start"><span class="grow"><span class="t">'+esc(l.title)+'</span><br><span class="small muted">'+esc(S.work[l.id].text)+'</span></span></a>';
  }).join(""):'<p class="muted">Nothing saved yet. Each lesson ends with a task to try on site.</p>')+'</div></section>';
  var weak=qs.filter(function(l){return S.quiz[l.id]<l.quiz.length;});
  if(weak.length){ h+='<h2>Worth revisiting</h2><section class="card"><div class="list">'+weak.map(function(l){return '<a class="item" href="#'+l.id+'"><span class="grow t">'+esc(l.title)+'</span><span class="num">'+S.quiz[l.id]+' / '+l.quiz.length+'</span></a>';}).join("")+'</div></section>'; }
  return h;
}

/* ---------- routing and events ---------- */
function route(){ var h=(location.hash||"").replace(/^#/,""); return h || "today"; }
var sheetLayer=null, sheetDate=null, sheetReturn=null, dayFromToday=false;
function closeDay(){
  if(dayFromToday) history.back(); else location.hash='#today';
}
function removeSheet(){
  if(sheetLayer){sheetLayer.parentNode.removeChild(sheetLayer);sheetLayer=null;}
  document.body.classList.remove('sheet-open');
  document.querySelector('.wrap').removeAttribute('inert');
}
function openDay(t,changed){
  var focused=document.activeElement, oldDate=sheetDate;
  removeSheet();sheetDate=t.date;
  if(!oldDate) sheetReturn=focused;
  var all=sortedTopics(),pos=all.indexOf(t),h='<div class="sheet-scrim" data-close="true"></div><section class="day-sheet" role="dialog" aria-modal="true" aria-labelledby="day-title" tabindex="-1"><div class="sheet-grab"><div class="handle" aria-hidden="true"></div><div class="sheet-heading"><span class="small muted">'+esc(topicDate(t.date))+'</span><button data-close="true" aria-label="Close day">×</button></div></div><div class="sheet-scroll">'+categoryChip(t)+'<h1 id="day-title">'+esc(t.title)+'</h1>'+(t.detail?'<p>'+esc(t.detail)+'</p>':'')+topicMaterial(t,true,true)+(topicLesson(t)?'<div class="topic-links">'+topicLesson(t)+'</div>':'')+'<footer class="sheet-footer">';
  h+='<button data-neighbor="'+esc(pos>0?all[pos-1].date:'')+'"'+(pos>0?'':' disabled')+'>‹ Prev day</button><button data-neighbor="'+esc(pos<all.length-1?all[pos+1].date:'')+'"'+(pos<all.length-1?'':' disabled')+'>Next day ›</button></footer></div></section>';
  sheetLayer=document.createElement('div');sheetLayer.className='sheet-layer';sheetLayer.innerHTML=h;document.body.appendChild(sheetLayer);
  document.body.classList.add('sheet-open');document.querySelector('.wrap').setAttribute('inert','');
  var sheet=sheetLayer.querySelector('.day-sheet'),grab=sheetLayer.querySelector('.sheet-grab');
  if(!changed) {sheet.style.animation='none';sheetLayer.querySelector('.sheet-scrim').style.animation='none';}
  sheet.focus();
  sheetLayer.addEventListener('click',function(e){var close=e.target.closest('[data-close]'),neighbor=e.target.closest('[data-neighbor]');if(close) closeDay();if(neighbor && neighbor.getAttribute('data-neighbor')) location.replace('#day-'+neighbor.getAttribute('data-neighbor'));});
  var drag=null,reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  grab.addEventListener('pointerdown',function(e){if(e.target.closest('button') || e.button!==0)return;drag={id:e.pointerId,start:e.clientY,last:e.clientY,time:e.timeStamp,velocity:0,dy:0};grab.setPointerCapture(e.pointerId);sheet.style.transition='none';sheet.style.animation='none';});
  grab.addEventListener('pointermove',function(e){if(!drag || drag.id!==e.pointerId)return;var dt=e.timeStamp-drag.time;drag.velocity=dt>0?(e.clientY-drag.last)/dt:0;drag.last=e.clientY;drag.time=e.timeStamp;drag.dy=e.clientY-drag.start;var y=drag.dy<0?drag.dy*.18:drag.dy;sheet.style.transform=reduced?'none':'translateY('+y+'px)';});
  function release(e){if(!drag || drag.id!==e.pointerId)return;var dismiss=e.type!=='pointercancel' && (drag.dy>sheet.offsetHeight*.25 || (drag.dy>0 && drag.velocity>.5 && e.timeStamp-drag.time<100));drag=null;sheet.style.transition='';sheet.style.transform='';if(dismiss)closeDay();}
  grab.addEventListener('pointerup',release);grab.addEventListener('pointercancel',release);
}
document.addEventListener('keydown',function(e){
  if(!sheetLayer)return;
  if(e.key==='Escape'){e.preventDefault();closeDay();}
  if(e.key==='Tab'){var items=sheetLayer.querySelectorAll('a[href],button:not(:disabled)'),first=items[0],last=items[items.length-1];if(e.shiftKey && (document.activeElement===first || document.activeElement===sheetLayer.querySelector('.day-sheet'))){e.preventDefault();last.focus();}else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}}
});
var lastRoute=null;
function render(){
  var r=route();
  if(r==='topics'){location.replace('#today');return;}
  var dayMatch=/^day-(\d{4}-\d{2}-\d{2})$/.exec(r),dayTopic=dayMatch?topicOn(dayMatch[1]):null;
  if(dayMatch && !dayTopic){location.replace('#today');return;}
  var oldSheetDate=sheetDate,changed=r!==lastRoute;
  if(dayTopic && !sheetDate) dayFromToday=lastRoute==='today';
  if(!dayTopic){removeSheet();sheetDate=null;}
  var l=byId[r], tab = l ? "path" : (r==="topics" || r==="review") ? "today" : r;
  if(r==="review" && lastRoute!=="review") reviewSession={items:dueReviews().slice(0,10), index:0, right:0, checked:false, pick:null};
  $view.innerHTML = ((r==="today" || dayTopic || r==="review") ? "" : topicBanner()) + (l ? viewLesson(l) : r==="review" ? viewReview() : r==="path" ? viewPath() : r==="team" ? viewTeam() : r==="me" ? viewMe() : viewToday());
  document.querySelectorAll("nav.tabs a").forEach(function(a){ a.classList.toggle("on", a.getAttribute("data-tab")===(byId[r]?"path":(["today","path","team","me"].indexOf(tab)>=0?tab:"today"))); });
  var selected=["today","path","team","me"].indexOf(l?'path':tab);if(selected<0)selected=0;
  document.querySelector('.tab-highlight').style.transform='translateX('+(selected*100)+'%)';
  document.querySelectorAll('a[data-tab]').forEach(function(a){if(a.classList.contains('on'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(dayTopic){if(sheetDate!==dayTopic.date || !sheetLayer || !document.body.contains(sheetLayer)) openDay(dayTopic,changed);}
  else if(oldSheetDate){var returnCell=document.getElementById('day-'+oldSheetDate);if(returnCell)returnCell.focus();else if(sheetReturn && document.contains(sheetReturn))sheetReturn.focus();}
  if(r==="team") paintNames();
  if(r!==lastRoute){
    $view.classList.remove("view-enter");
    void $view.offsetWidth;
    $view.classList.add("view-enter");
    if(!((r==='today' || dayTopic) && (lastRoute==='today' || oldSheetDate))) window.scrollTo(0,0); lastRoute=r;
  }
  paintSync();
}
$view.addEventListener("animationend", function(ev){
  if(ev.target===$view) $view.classList.remove("view-enter");
});
window.addEventListener("hashchange", render);

$view.addEventListener("click", function(ev){
  var day=ev.target.closest("[data-day]");if(day){location.hash="#day-"+day.getAttribute("data-day");return;}
  var b=ev.target.closest("[data-act]"); if(!b) return;
  var act=b.getAttribute("data-act"), l=byId[route()];
  if(act==="review-check" && route()==="review" && reviewSession && !reviewSession.checked && reviewSession.index<reviewSession.items.length){
    var picked=document.querySelector('input[name="review-answer"]:checked');
    if(!picked){ document.getElementById("review-msg").textContent=" Choose an answer first."; return; }
    var key=reviewSession.items[reviewSession.index], parts=key.split(":"), q=byId[parts[0]].quiz[Number(parts[1])];
    reviewSession.pick=Number(picked.value); reviewSession.checked=true;
    var correct=reviewSession.pick===q.answer, box=correct?Math.min(4,S.review[key].box+1):0;
    if(correct) reviewSession.right++;
    S.review[key]={box:box, due:dayAhead(INTERVALS[box]), t:Date.now()}; commit(); render();
  } else if(act==="review-next" && route()==="review" && reviewSession && reviewSession.checked){
    reviewSession.index++; reviewSession.checked=false; reviewSession.pick=null;
    if(reviewSession.index===reviewSession.items.length){ if(S.days.indexOf(today())<0) S.days.push(today()); commit(); }
    render();
  } else if(act==="complete" && l){
    l.quiz.forEach(function(q,i){ var key=l.id+":"+i; if(!S.review[key]) S.review[key]={box:0, due:dayAhead(1), t:Date.now()}; });
    S.done[l.id]=Date.now(); if(S.days.indexOf(today())<0) S.days.push(today()); commit(); render();
  } else if(act==="quiz-check" && l){
    var picks=l.quiz.map(function(q,i){ var el=document.querySelector('input[name="q'+i+'"]:checked'); return el?Number(el.value):-1; });
    if(picks.indexOf(-1)>=0){ if(!document.getElementById("quiz-msg")) b.insertAdjacentHTML("afterend",'<span class="small muted" id="quiz-msg"> Answer every question first.</span>'); return; }
    quizShown[l.id]=picks; var sc=l.quiz.filter(function(q,i){return picks[i]===q.answer;}).length;
    if(S.quiz[l.id]==null || sc>S.quiz[l.id]){ S.quiz[l.id]=sc; commit(); }
    document.getElementById("quiz").innerHTML=quizHtml(l);
  } else if(act==="quiz-retry" && l){
    delete quizShown[l.id]; document.getElementById("quiz").innerHTML=quizHtml(l);
  } else if(act==="save-work" && l){
    var text=document.getElementById("work").value.trim().slice(0,1200), msg=document.getElementById("work-msg");
    if(!text){ msg.textContent="Write a few lines first."; return; }
    S.work[l.id]={text:text, ts:Date.now()}; saveLocal(); msg.textContent="Saved on this device";
    if(db && uid && sync!=="readonly"){
      db.doc("members/"+uid+"/work/"+l.id).set({text:text, ts:Date.now()})
        .then(function(){ msg.textContent="Saved and shared with your team"; delete subCache[l.id]; })
        .catch(function(){ msg.textContent="Saved on this device. It could not be shared."; });
    }
  } else if(act==="set-team" && l && db){
    var tm=document.getElementById("team-msg");
    db.doc("hub/team").set({lesson:l.id, note:hub.note||"", setAt:Date.now()}).then(function(){ tm.textContent="Set as the next team session"; }).catch(function(){ tm.textContent="Could not save. Try again."; });
  } else if(act==="save-note" && isOwner && db){
    var note=document.getElementById("team-note").value.trim().slice(0,200), nm=document.getElementById("team-msg");
    db.doc("hub/team").set({lesson:hub.lesson||null, note:note, setAt:hub.setAt||Date.now()}).then(function(){
      var msg=document.getElementById("team-msg"); if(msg) msg.textContent="Note saved";
    }).catch(function(){ nm.textContent="Could not save. Try again."; });
  } else if(act==="tutor" && l && sample && !chat.busy){
    var m=MODES[b.getAttribute("data-mode")];
    chat={lesson:l.id, busy:false, label:m.label, msgs:[{role:"user", content:RULES+"\n\nLESSON\n"+lessonText(l)+"\n\nREQUEST\n"+m.ask}]};
    runTutor();
  } else if(act==="tutor-send" && l && sample && !chat.busy){
    var inp=document.getElementById("tin"), v=inp.value.trim(); if(!v) return;
    inp.value=""; chat.msgs.push({role:"user",content:v}); runTutor();
  } else if(act==="tutor-copy"){
    var last=chat.msgs.filter(function(x){return x.role==="assistant";}).pop();
    if(last && navigator.clipboard){ navigator.clipboard.writeText(last.content).then(function(){ b.textContent="Copied"; }).catch(function(){ b.textContent="Copy not allowed here"; }); }
  }
});
$view.addEventListener("keydown", function(ev){ if(ev.key==="Enter" && ev.target.id==="tin"){ ev.preventDefault(); var s=document.querySelector('[data-act="tutor-send"]'); if(s) s.click(); } });

/* ---------- capabilities ---------- */
function softRender(){ var r=route(); if(r.indexOf("day-")===0||r==="today"||r==="team"||r==="me"||r==="path") render(); }
function init(){
  if(enrollDone()) saveLocal();
  render();
  var cl=window.claude; if(!cl || typeof cl.use!=="function") return;
  Promise.all([cl.use("user"), cl.use("db"), cl.use("sample")]).then(function(a){
    user=a[0]; db=a[1]; sample=a[2];
    return user ? user.me() : null;
  }).then(function(m){
    me=m; uid=m?m.id:null; isOwner=!!(m&&m.isOwner);
    if(byId[route()]){ var t=document.getElementById("tutor"); if(t) t.innerHTML=tutorHtml(byId[route()]); } else render();
    if(!db) return;
    db.collection("members").onSnapshot(function(q){ members=q.docs.map(function(d){ return Object.assign({id:d.id}, d.data()||{}); }); softRender(); }, function(){});
    db.doc("hub/team").onSnapshot(function(s){ hub=s.exists?(s.data()||{}):{}; softRender(); }, function(){});
    if(!uid) return;
    return db.doc("members/"+uid).get().then(function(s){
      var r=s.exists?s.data():null, changed=merge(r); if(enrollDone()) changed=true;
      if(changed){ saveLocal(); softRender(); }
      if(!s.exists || localAhead(r)) pushRemote(); else { sync="synced"; paintSync(); }
      return Promise.all(L.filter(function(l){return !S.work[l.id];}).map(function(l){
        return db.doc("members/"+uid+"/work/"+l.id).get().then(function(w){
          if(!w.exists || S.work[l.id]) return false;
          var data=w.data()||{}; S.work[l.id]={text:data.text, ts:data.ts}; return l.id;
        }).catch(function(){return false;});
      })).then(function(added){ if(added.some(function(x){return x;})){
        saveLocal();
        var id=route();
        if(byId[id]){
          var work=document.getElementById("work"), msg=document.getElementById("work-msg");
          if(added.indexOf(id)>=0 && work && !work.value && document.activeElement!==work){
            work.value=S.work[id].text||"";
            if(msg) msg.textContent="Saved "+ago(S.work[id].ts);
          }
        } else softRender();
      } });
    });
  }).catch(function(){});
}
init();
})();
