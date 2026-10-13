// بيانات المباريات (يمكن استبدالها لاحقاً بـ API)
const upcomingMatches = [
  {
    home: "TP مازيمبي",
    away: "النادي الإفريقي",
    competition: "دوري أبطال أفريقيا - تصفيات",
    date: "17 أكتوبر 2026",
    time: "15:00",
    venue: "خارج الديار"
  },
  {
    home: "النادي الإفريقي",
    away: "الترجي الرياضي",
    competition: "الرابطة المحترفة 1",
    date: "21 أكتوبر 2026",
    time: "20:00",
    venue: "المنزل"
  },
  {
    home: "النادي الإفريقي",
    away: "TP مازيمبي",
    competition: "دوري أبطال أفريقيا - تصفيات",
    date: "25 أكتوبر 2026",
    time: "18:00",
    venue: "المنزل"
  },
  {
    home: "النجم الساحلي",
    away: "النادي الإفريقي",
    competition: "الرابطة المحترفة 1",
    date: "28 أكتوبر 2026",
    time: "20:00",
    venue: "خارج الديار"
  }
];

const recentMatches = [
  {
    home: "بنقردان",
    away: "النادي الإفريقي",
    score: "2 - 1",
    competition: "الرابطة المحترفة 1",
    date: "10 أكتوبر 2026",
    result: "خسارة"
  },
  {
    home: "النادي الإفريقي",
    away: "الزرزيس",
    score: "1 - 0",
    competition: "الرابطة المحترفة 1",
    date: "20 سبتمبر 2026",
    result: "فوز"
  },
  {
    home: "جوليبا",
    away: "النادي الإفريقي",
    score: "2 - 2",
    competition: "دوري أبطال أفريقيا",
    date: "12 سبتمبر 2026",
    result: "تعادل"
  },
  {
    home: "النادي الإفريقي",
    away: "جوليبا",
    score: "1 - 0",
    competition: "دوري أبطال أفريقيا",
    date: "5 سبتمبر 2026",
    result: "فوز"
  }
];

const predictions = [
  {
    match: "النادي الإفريقي vs TP مازيمبي",
    home: 45,
    draw: 28,
    away: 27,
    tip: "توقعاتنا: تعادل أو فوز ضيق للإفريقي في الإياب"
  },
  {
    match: "النادي الإفريقي vs الترجي",
    home: 38,
    draw: 32,
    away: 30,
    tip: "مباراة كلاسيكو صعبة • تعادل محتمل"
  }
];

const news = [
  {
    title: "الإفريقي يخسر أمام بنقردان بهدفين لهدف",
    content: "سقط الفريق في فخ الخسارة الأولى هذا الموسم أمام مضيفه اتحاد بنقردان بنتيجة 2-1 في الجولة الخامسة من الرابطة المحترفة الأولى.",
    date: "10 أكتوبر 2026"
  },
  {
    title: "الإفريقي يستعد لمواجهة مازيمبي في دوري الأبطال",
    content: "يخوض الفريق مواجهة صعبة أمام الغريم الكونغولي TP مازيمبي في الدور الثاني من تصفيات دوري أبطال أفريقيا.",
    date: "9 أكتوبر 2026"
  },
  {
    title: "الإفريقي يتصدر مؤقتاً بمعدل نقاط مثالي",
    content: "قبل مباراة بنقردان، كان الفريق متصدراً بمعدل 9 نقاط من 3 انتصارات متتالية دون تلقي أهداف.",
    date: "8 أكتوبر 2026"
  }
];

// عرض المباريات القادمة
function renderUpcoming() {
  const container = document.getElementById("upcoming-matches");
  container.innerHTML = upcomingMatches.map(m => `
    <div class="match-item">
      <div class="teams">
        <span>${m.home}</span>
        <span class="score">VS</span>
        <span>${m.away}</span>
      </div>
      <div class="meta">${m.competition} • ${m.date} • ${m.time} • ${m.venue}</div>
    </div>
  `).join("");
}

// عرض النتائج الأخيرة
function renderRecent() {
  const container = document.getElementById("recent-matches");
  container.innerHTML = recentMatches.map(m => `
    <div class="match-item">
      <div class="teams">
        <span>${m.home}</span>
        <span class="score">${m.score}</span>
        <span>${m.away}</span>
      </div>
      <div class="meta">${m.competition} • \( {m.date} • <strong style="color: \){m.result === 'فوز' ? '#4caf50' : m.result === 'خسارة' ? '#f44336' : '#ff9800'}">${m.result}</strong></div>
    </div>
  `).join("");
}

// عرض التوقعات
function renderPredictions() {
  const container = document.getElementById("predictions-list");
  container.innerHTML = predictions.map(p => `
    <div class="prediction-item card">
      <strong>${p.match}</strong>
      <div class="prediction-bar">
        <div class="home" style="width:${p.home}%"></div>
        <div class="draw" style="width:${p.draw}%"></div>
        <div class="away" style="width:${p.away}%"></div>
      </div>
      <div class="prediction-percentages">
        <span>فوز ${p.home}%</span>
        <span>تعادل ${p.draw}%</span>
        <span>خسارة ${p.away}%</span>
      </div>
      <p style="color:#c8102e; font-size:0.9rem;">${p.tip}</p>
    </div>
  `).join("");
}

// عرض الأخبار
function renderNews() {
  const container = document.getElementById("news-list");
  container.innerHTML = news.map(n => `
    <div class="news-item card">
      <h4>${n.title}</h4>
      <p>${n.content}</p>
      <div class="date">${n.date}</div>
    </div>
  `).join("");
}

// التنقل بين الأقسام
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// تشغيل التطبيق
renderUpcoming();
renderRecent();
renderPredictions();
renderNews();