/* =========================================================
   Botee — demó SPA logika
   1) Robot SVG   2) Router   3) Animációk   4) Matek demó
   ========================================================= */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1) A ROBOT — inline SVG, saját animációkkal
     --------------------------------------------------------- */
  function robotSVG(uid) {
    var g = function (n) { return uid + '-' + n; };
    return '' +
'<svg viewBox="0 0 440 560" role="img" aria-label="Botee, a tanuló robot: 3 colos arckijelzővel a fején és 6 colos feladatkijelzővel a hasán">' +
'  <defs>' +
'    <linearGradient id="' + g('head') + '" x1="0" y1="0" x2="0" y2="1">' +
'      <stop offset="0" stop-color="#9C8CFF"/><stop offset="1" stop-color="#6C5CE7"/></linearGradient>' +
'    <linearGradient id="' + g('body') + '" x1="0" y1="0" x2="1" y2="1">' +
'      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#EFEBFF"/><stop offset="1" stop-color="#D8D0FF"/></linearGradient>' +
'    <linearGradient id="' + g('limb') + '" x1="0" y1="0" x2="0" y2="1">' +
'      <stop offset="0" stop-color="#8A7BFF"/><stop offset="1" stop-color="#5C4CD6"/></linearGradient>' +
'    <linearGradient id="' + g('bar') + '" x1="0" y1="0" x2="1" y2="0">' +
'      <stop offset="0" stop-color="#22D3A6"/><stop offset="1" stop-color="#FFC93C"/></linearGradient>' +
'  </defs>' +

/* antenna */
'  <g>' +
'    <rect x="216" y="26" width="8" height="34" rx="4" fill="#5C4CD6"/>' +
'    <circle cx="220" cy="22" r="13" fill="#FFC93C">' +
'      <animate attributeName="r" values="13;15.5;13" dur="2.2s" repeatCount="indefinite"/></circle>' +
'    <circle cx="220" cy="22" r="13" fill="none" stroke="#FFC93C" stroke-width="2" opacity=".6">' +
'      <animate attributeName="r" values="13;28" dur="2.2s" repeatCount="indefinite"/>' +
'      <animate attributeName="opacity" values=".6;0" dur="2.2s" repeatCount="indefinite"/></circle>' +
'  </g>' +

/* fülek */
'  <rect x="104" y="104" width="22" height="56" rx="11" fill="url(#' + g('limb') + ')"/>' +
'  <rect x="314" y="104" width="22" height="56" rx="11" fill="url(#' + g('limb') + ')"/>' +

/* fej + 3" arckijelző */
'  <rect x="122" y="54" width="196" height="150" rx="48" fill="url(#' + g('head') + ')"/>' +
'  <rect x="146" y="76" width="148" height="106" rx="30" fill="#14142B"/>' +
'  <rect x="146" y="76" width="148" height="106" rx="30" fill="none" stroke="#ffffff" stroke-opacity=".12" stroke-width="2"/>' +
'  <g fill="#22D3A6">' +
'    <ellipse cx="190" cy="122" rx="14" ry="16">' +
'      <animate attributeName="ry" values="16;16;2;16;16" keyTimes="0;.86;.89;.92;1" dur="4.5s" repeatCount="indefinite"/></ellipse>' +
'    <ellipse cx="250" cy="122" rx="14" ry="16">' +
'      <animate attributeName="ry" values="16;16;2;16;16" keyTimes="0;.86;.89;.92;1" dur="4.5s" repeatCount="indefinite"/></ellipse>' +
'  </g>' +
'  <path d="M196 150 q24 22 48 0" stroke="#FFC93C" stroke-width="7" stroke-linecap="round" fill="none">' +
'    <animate attributeName="d" values="M196 150 q24 22 48 0;M196 152 q24 30 48 0;M196 150 q24 22 48 0" dur="3.4s" repeatCount="indefinite"/></path>' +
'  <circle cx="168" cy="152" r="7" fill="#FF6B6B" opacity=".55"/>' +
'  <circle cx="272" cy="152" r="7" fill="#FF6B6B" opacity=".55"/>' +

/* nyak */
'  <rect x="196" y="196" width="48" height="30" rx="12" fill="#5C4CD6"/>' +

/* karok */
'  <g transform="translate(60,268)">' +
'    <rect x="-18" y="0" width="38" height="132" rx="19" fill="url(#' + g('limb') + ')"/>' +
'    <animateTransform attributeName="transform" type="rotate" values="0;-16;0;6;0" dur="4.8s" repeatCount="indefinite" additive="sum"/>' +
'  </g>' +
'  <g transform="translate(380,268)">' +
'    <rect x="-20" y="0" width="38" height="132" rx="19" fill="url(#' + g('limb') + ')"/>' +
'    <animateTransform attributeName="transform" type="rotate" values="0;14;0;-8;0" dur="5.4s" repeatCount="indefinite" additive="sum"/>' +
'  </g>' +

/* test */
'  <rect x="62" y="216" width="316" height="278" rx="66" fill="url(#' + g('body') + ')" stroke="#C9BFFF" stroke-width="3"/>' +

/* 6" haskijelző */
'  <rect x="92" y="246" width="256" height="200" rx="32" fill="#0F0F22"/>' +
'  <rect x="92" y="246" width="256" height="200" rx="32" fill="none" stroke="#6C5CE7" stroke-opacity=".5" stroke-width="3"/>' +

/* képernyő tartalom — A: feladat */
'  <g font-family="Baloo 2, Nunito, sans-serif" text-anchor="middle">' +
'    <g>' +
'      <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.28;.34;.94;1" dur="9s" repeatCount="indefinite"/>' +
'      <text x="220" y="292" fill="#22D3A6" font-size="15" letter-spacing="2">SZORZÓTÁBLA</text>' +
'      <text x="220" y="352" fill="#FFFFFF" font-size="46" font-weight="800">7 × 8 = ?</text>' +
'      <rect x="130" y="378" width="80" height="40" rx="14" fill="#ffffff" fill-opacity=".1"/>' +
'      <text x="170" y="405" fill="#FFFFFF" font-size="22" font-weight="700">54</text>' +
'      <rect x="230" y="378" width="80" height="40" rx="14" fill="#22D3A6" fill-opacity=".25" stroke="#22D3A6" stroke-width="2"/>' +
'      <text x="270" y="405" fill="#22D3A6" font-size="22" font-weight="700">56</text>' +
'    </g>' +
/* B: pontszám */
'    <g opacity="0">' +
'      <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.34;.40;.62;.68;1" dur="9s" repeatCount="indefinite"/>' +
'      <text x="220" y="300" fill="#FFC93C" font-size="15" letter-spacing="2">SZUPER VOLT!</text>' +
'      <text x="220" y="356" fill="#FFC93C" font-size="52" font-weight="800">+10 ⭐</text>' +
'      <text x="220" y="396" fill="#FFFFFF" fill-opacity=".65" font-size="18">4 jó válasz egymás után</text>' +
'    </g>' +
/* C: mértékegység */
'    <g opacity="0">' +
'      <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.68;.74;.90;.94;1" dur="9s" repeatCount="indefinite"/>' +
'      <text x="220" y="300" fill="#2E90FA" font-size="15" letter-spacing="2">MÉRTÉKEGYSÉG</text>' +
'      <text x="220" y="358" fill="#FFFFFF" font-size="40" font-weight="800">2 kg = ? g</text>' +
'      <text x="220" y="400" fill="#FFFFFF" fill-opacity=".55" font-size="18">⚖️ mérjük meg együtt!</text>' +
'    </g>' +
'  </g>' +

/* haladás csík a kijelző alján */
'  <rect x="120" y="424" width="200" height="8" rx="4" fill="#ffffff" fill-opacity=".12"/>' +
'  <rect x="120" y="424" width="60" height="8" rx="4" fill="url(#' + g('bar') + ')">' +
'    <animate attributeName="width" values="40;200;40" dur="9s" repeatCount="indefinite"/></rect>' +

/* lábak */
'  <rect x="126" y="486" width="76" height="34" rx="17" fill="url(#' + g('limb') + ')"/>' +
'  <rect x="238" y="486" width="76" height="34" rx="17" fill="url(#' + g('limb') + ')"/>' +
'</svg>';
  }

  var stage1 = $('#robotStage');
  var stage2 = $('#robotStage2');
  if (stage1) stage1.insertAdjacentHTML('afterbegin', robotSVG('r1'));
  if (stage2) stage2.innerHTML = robotSVG('r2');

  /* ---------------------------------------------------------
     2) ROUTER
     --------------------------------------------------------- */
  var views = $$('.view');
  var routes = views.map(function (v) { return v.dataset.view; });

  function route() {
    var path = (location.hash || '#/').replace(/^#/, '');
    if (routes.indexOf(path) === -1) path = '/';

    views.forEach(function (v) { v.classList.toggle('is-active', v.dataset.view === path); });
    $$('[data-link]').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + path);
    });

    $('#navLinks').classList.remove('is-open');
    $('#burger').setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });

    // az új nézet elemeit újra megjelenítjük
    requestAnimationFrame(function () { hookReveals(); });
    document.title = ({
      '/': 'Botee — AI magántanár robot gyerekeknek',
      '/robot': 'A robot — Botee',
      '/demo': 'Élő demó — Botee',
      '/eredmenyek': 'Eredmények — Botee',
      '/kapcsolat': 'Kapcsolat — Botee'
    })[path];
  }
  window.addEventListener('hashchange', route);

  /* mobil menü */
  $('#burger').addEventListener('click', function () {
    var open = $('#navLinks').classList.toggle('is-open');
    this.setAttribute('aria-expanded', String(open));
  });

  /* sticky nav + scroll progress */
  var nav = $('#nav'), navProg = $('#navProgress');
  function onScroll() {
    nav.classList.toggle('is-stuck', window.scrollY > 8);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    navProg.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------------------------------------------------
     3) ANIMÁCIÓK — reveal, számlálók, sávok, írógép
     --------------------------------------------------------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('is-in');
      $$('.count', el).concat(el.classList.contains('count') ? [el] : []).forEach(countUp);
      $$('.bar', el).forEach(function (b) { b.classList.add('is-on'); });
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) : null;

  function hookReveals() {
    $$('.view.is-active .reveal:not(.is-in)').forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 45, 320) + 'ms';
      if (io) { io.observe(el); } else { el.classList.add('is-in'); }
    });
    if (!io) { $$('.bar').forEach(function (b) { b.classList.add('is-on'); }); }
  }

  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var to = parseFloat(el.dataset.to || '0');
    var suf = el.dataset.suffix || '';
    var dur = reduced ? 0 : 1200, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / (dur || 1), 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* hero írógép */
  var twEl = $('#tw');
  var phrases = ['elmagyarázza a matekot', 'sosem veszti el a türelmét', 'játékká teszi a gyakorlást', 'mindig válaszol a kérdésre'];
  if (twEl) {
    if (reduced) {
      twEl.textContent = phrases[0];
    } else {
      var pi = 0, ci = 0, del = false;
      (function type() {
        var word = phrases[pi];
        ci += del ? -1 : 1;
        twEl.textContent = word.slice(0, ci);
        var wait = del ? 35 : 65;
        if (!del && ci === word.length) { del = true; wait = 1900; }
        else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; wait = 320; }
        setTimeout(type, wait);
      })();
    }
  }

  /* toast */
  var toastEl = $('#toast'), toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('is-on'); }, 3200);
  }

  /* ---------------------------------------------------------
     4) MATEK DEMÓ
     --------------------------------------------------------- */
  var TOTAL = 8;
  var quiz = { i: 0, score: 0, streak: 0, best: 0, q: null, locked: true, correctCount: 0 };

  var rnd = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var pick = function (arr) { return arr[rnd(0, arr.length - 1)]; };

  var generators = [
    function mult() {
      var a = rnd(3, 9), b = rnd(3, 9), r = a * b;
      return {
        topic: 'Szorzótábla',
        text: a + ' × ' + b + ' = ?',
        visual: '✖️',
        answer: r,
        hint: 'A ' + a + ' × ' + b + ' azt jelenti: adjunk össze ' + b + ' darab ' + a + '-est. Számold így: ' +
              a * (b - 1) + ' (' + a + '×' + (b - 1) + ') meg még egy ' + a + ' — az ' + r + '. Ha megvan a ' + a +
              '-es sor, ez már sosem fog kifogni rajtad!'
      };
    },
    function divide() {
      var b = rnd(2, 9), r = rnd(2, 9), a = b * r;
      return {
        topic: 'Osztás',
        text: a + ' ÷ ' + b + ' = ?',
        visual: '➗',
        answer: r,
        hint: 'Fordítsd meg a kérdést! Nem osztunk, hanem szorzunk: „hányszor van meg a ' + b + ' a ' + a +
              '-ben?” Vagyis ' + b + ' × ? = ' + a + '. A válasz ' + r + ', mert ' + b + ' × ' + r + ' = ' + a + '.'
      };
    },
    function gram() {
      var kg = rnd(2, 9);
      if (Math.random() < 0.5) {
        return {
          topic: 'Mértékegység',
          text: kg + ' kg = ? g',
          visual: '⚖️',
          answer: kg * 1000,
          hint: '1 kilogramm pontosan 1000 gramm — mint 1000 gemkapocs egy zacskóban. Ha ' + kg +
                ' kilóból indulsz, ' + kg + '-ször veszed az 1000-et: ' + kg + ' × 1000 = ' + (kg * 1000) +
                ' g. Trükk: kg-ból g-ba írj mögé három nullát.'
        };
      }
      return {
        topic: 'Mértékegység',
        text: (kg * 1000) + ' g = ? kg',
        visual: '⚖️',
        answer: kg,
        hint: 'Most visszafelé megyünk: grammból kilóba. Mivel 1000 g = 1 kg, oszd el 1000-rel — vagyis húzz le a végéről három nullát. ' +
              (kg * 1000) + ' g → ' + kg + ' kg.'
      };
    },
    function meter() {
      var m = rnd(2, 9);
      if (Math.random() < 0.5) {
        return {
          topic: 'Hosszúság',
          text: m + ' m = ? cm',
          visual: '📏',
          answer: m * 100,
          hint: 'Egy méteres vonalzón 100 centi van. Ha ' + m + ' métered van, ' + m +
                '-szor van meg benne a 100: ' + m + ' × 100 = ' + (m * 100) + ' cm. Méterből centibe: két nulla a végére.'
        };
      }
      return {
        topic: 'Hosszúság',
        text: (m * 100) + ' cm = ? m',
        visual: '📏',
        answer: m,
        hint: 'Centiből méterbe kicsinyítünk, tehát osztunk 100-zal: ' + (m * 100) + ' : 100 = ' + m +
              ' m. Egyszerűbben: húzz le a végéről két nullát.'
      };
    },
    function addSub() {
      var a = rnd(24, 78), b = rnd(11, 21), plus = Math.random() < 0.5;
      return {
        topic: 'Fejszámolás',
        text: plus ? (a + ' + ' + b + ' = ?') : ((a + b) + ' − ' + b + ' = ?'),
        visual: plus ? '➕' : '➖',
        answer: plus ? a + b : a,
        hint: 'Bontsd szét kerek számokra! ' + (plus
          ? (a + ' + ' + Math.floor(b / 10) * 10 + ' = ' + (a + Math.floor(b / 10) * 10) + ', aztán még + ' + (b % 10) + ' = ' + (a + b))
          : ('Előbb vedd el a ' + Math.floor(b / 10) * 10 + '-t, utána a maradék ' + (b % 10) + '-t. Így fejben is könnyű.')) +
          ' A kerek tízesek a legjobb barátaid.'
      };
    }
  ];

  function makeOptions(ans) {
    var set = [ans];
    var deltas = [1, -1, 2, -2, 10, -10, 100, -100];
    while (set.length < 4) {
      var d = pick(deltas);
      var v = (ans > 200 && Math.abs(d) < 5) ? ans + d * 100 : ans + d;
      if (v > 0 && set.indexOf(v) === -1) set.push(v);
    }
    for (var i = set.length - 1; i > 0; i--) { var j = rnd(0, i), t = set[i]; set[i] = set[j]; set[j] = t; }
    return set;
  }

  var faceEl = $('#face'), sayEl = $('#say'), stageEl = $('#stage');
  var qTopic = $('#qTopic'), qText = $('#qText'), qVisual = $('#qVisual'), answersEl = $('#answers');
  var scoreEl = $('#score'), streakEl = $('#streak'), qIdxEl = $('#qIdx'), barEl = $('#bar');
  var startBtn = $('#startBtn'), resetBtn = $('#resetBtn'), helpBtn = $('#helpBtn'), ttsBox = $('#ttsToggle');

  function mood(m, fx) {
    faceEl.dataset.mood = m;
    if (fx) {
      faceEl.classList.remove('is-cheer', 'is-shake');
      void faceEl.offsetWidth;
      faceEl.classList.add(fx);
    }
  }

  var sayTimer;
  function say(text, speak) {
    clearInterval(sayTimer);
    if (reduced) { sayEl.textContent = text; }
    else {
      sayEl.textContent = '';
      var i = 0;
      sayTimer = setInterval(function () {
        sayEl.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(sayTimer);
      }, 16);
    }
    if (speak !== false && ttsBox && ttsBox.checked && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.lang = 'hu-HU'; u.rate = 0.98; u.pitch = 1.25;
        window.speechSynthesis.speak(u);
      } catch (e) { /* a hang nem kötelező */ }
    }
  }

  function updateHud() {
    scoreEl.textContent = quiz.score;
    streakEl.textContent = quiz.streak;
    qIdxEl.textContent = Math.min(quiz.i + 1, TOTAL);
    barEl.style.width = (quiz.i / TOTAL) * 100 + '%';
  }

  function nextQuestion() {
    if (quiz.i >= TOTAL) return finish();
    quiz.q = pick(generators)();
    quiz.locked = false;
    updateHud();

    qTopic.textContent = quiz.q.topic;
    qText.textContent = quiz.q.text;
    qText.style.animation = 'none'; void qText.offsetWidth; qText.style.animation = '';
    qVisual.textContent = quiz.q.visual;

    answersEl.innerHTML = '';
    makeOptions(quiz.q.answer).forEach(function (v) {
      var b = document.createElement('button');
      b.className = 'ans';
      b.type = 'button';
      b.textContent = v;
      b.addEventListener('click', function () { answer(b, v); });
      answersEl.appendChild(b);
    });

    mood('think');
    say(pick([
      'Jöhet a következő! ' + quiz.q.text,
      'Ez most egy ' + quiz.q.topic.toLowerCase() + ' feladat. Mennyi lesz?',
      'Gondolkodj nyugodtan, nem sietünk. ' + quiz.q.text
    ]));
  }

  function answer(btn, val) {
    if (quiz.locked) return;
    quiz.locked = true;
    var ok = val === quiz.q.answer;

    $$('.ans', answersEl).forEach(function (b) {
      b.disabled = true;
      if (parseInt(b.textContent, 10) === quiz.q.answer) b.classList.add('is-right');
      else if (b !== btn) b.classList.add('is-dim');
    });
    if (!ok) btn.classList.add('is-wrong');

    if (ok) {
      quiz.streak++;
      quiz.correctCount++;
      quiz.best = Math.max(quiz.best, quiz.streak);
      var gain = 10 + Math.min((quiz.streak - 1) * 2, 10);
      quiz.score += gain;
      mood('happy', 'is-cheer');
      stageEl.classList.remove('is-flash'); void stageEl.offsetWidth; stageEl.classList.add('is-flash');
      burst();
      say(pick([
        'Pontosan! +' + gain + ' pont. ' + (quiz.streak >= 3 ? quiz.streak + ' jó válasz egymás után — ez már sorozat! 🔥' : 'Így tovább!'),
        'Ez az! +' + gain + ' pont a zsebedbe. ⭐',
        'Tökéletes! +' + gain + ' pont. Látod, megy ez neked!'
      ]));
    } else {
      quiz.streak = 0;
      mood('oops', 'is-shake');
      stageEl.classList.remove('is-buzz'); void stageEl.offsetWidth; stageEl.classList.add('is-buzz');
      say('Semmi baj, ebből tanulunk! A helyes válasz ' + quiz.q.answer + '. ' + quiz.q.hint);
    }

    quiz.i++;
    updateHud();
    setTimeout(nextQuestion, ok ? 1600 : 5200);
  }

  function finish() {
    var stars = quiz.correctCount >= 7 ? '⭐⭐⭐' : quiz.correctCount >= 5 ? '⭐⭐' : '⭐';
    answersEl.innerHTML = '';
    qTopic.textContent = 'Kör vége';
    qText.textContent = 'Szép munka!';
    qVisual.textContent = '';
    stageEl.querySelector('.answers').innerHTML =
      '<div class="result" style="grid-column:1/-1">' +
      '<div class="result__stars">' + stars + '</div>' +
      '<div class="result__score">' + quiz.score + ' pont</div>' +
      '<p class="result__txt">' + quiz.correctCount + '/' + TOTAL + ' jó válasz · leghosszabb sorozat: ' + quiz.best + '</p>' +
      '</div>';
    barEl.style.width = '100%';
    mood('happy', 'is-cheer');
    burst(120);
    say('Vége a körnek! ' + quiz.correctCount + ' feladatot oldottál meg helyesen, és ' + quiz.score +
        ' pontot gyűjtöttél. A robot ilyenkor elmenti, mi ment nehezen — legközelebb pont abból kapsz többet.');
    startBtn.hidden = true;
    resetBtn.hidden = false;
    resetBtn.textContent = 'Újra játszom';
  }

  function startQuiz() {
    quiz = { i: 0, score: 0, streak: 0, best: 0, q: null, locked: true, correctCount: 0 };
    startBtn.hidden = true;
    resetBtn.hidden = false;
    resetBtn.textContent = 'Újrakezdem';
    updateHud();
    nextQuestion();
  }

  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
    resetBtn.addEventListener('click', startQuiz);
    helpBtn.addEventListener('click', function () {
      mood('think');
      if (!quiz.q) {
        say('Nyomd meg az „Indulhat!” gombot, és rögtön kapsz egy feladatot. Utána bármikor kérhetsz tőlem magyarázatot — annyiszor, ahányszor csak akarod.');
        return;
      }
      say('Nézzük együtt! ' + quiz.q.hint);
    });
  }

  /* konfetti */
  var cv = $('#confetti'), ctx = cv ? cv.getContext('2d') : null, parts = [], raf = null;
  function sizeCanvas() {
    if (!cv) return;
    var r = cv.getBoundingClientRect();
    cv.width = r.width; cv.height = r.height;
  }
  window.addEventListener('resize', sizeCanvas);

  function burst(n) {
    if (!ctx || reduced) return;
    sizeCanvas();
    var colors = ['#6C5CE7', '#22D3A6', '#FFC93C', '#FF6B6B', '#2E90FA'];
    for (var i = 0; i < (n || 70); i++) {
      parts.push({
        x: cv.width / 2, y: cv.height / 2,
        vx: (Math.random() - 0.5) * 11, vy: Math.random() * -11 - 2,
        s: 4 + Math.random() * 7, c: pick(colors),
        rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3, life: 1
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter(function (p) { return p.life > 0; });
    parts.forEach(function (p) {
      p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.011;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (parts.length) { raf = requestAnimationFrame(tick); }
    else { ctx.clearRect(0, 0, cv.width, cv.height); raf = null; }
  }

  /* ---------------------------------------------------------
     5) KAPCSOLAT ŰRLAP
     --------------------------------------------------------- */
  var form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = $('#formNote');
      var name = $('#cname'), mail = $('#cmail');
      var bad = false;
      [name, mail].forEach(function (f) {
        var invalid = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle('is-bad', invalid);
        if (invalid) bad = true;
      });
      if (bad) {
        note.textContent = 'Hoppá — a nevet és egy érvényes e-mail címet kérünk szépen.';
        note.className = 'form-note bad';
        return;
      }
      note.textContent = 'Köszönjük, ' + name.value.trim() + '! Ez egy demó oldal, így az üzenet nem megy sehova — élesben 1 munkanapon belül válaszolnánk.';
      note.className = 'form-note ok';
      toast('Üzenet elküldve (demó) 🚀');
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     indítás
     --------------------------------------------------------- */
  route();
  onScroll();
  sizeCanvas();
  if (faceEl) mood('idle');
})();
