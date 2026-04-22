export default function Home() {
  return (
    <>
    <!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>AgendaYa — Tu clienta agenda por WhatsApp. Tú solo atiendes.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#FFF8F5;--bg-warm:#FFF1EC;--bg-card:#FFFFFF;--ink:#2D1B14;--ink-soft:#6B5147;--ink-mute:#A08E86;--coral:#FF4D6A;--coral-light:#FF6B84;--coral-deep:#E8375A;--coral-glow:rgba(255,77,106,0.15);--coral-pale:#FFE4E9;--gold:#D4A853;--green:#2DB87A;--wa-green:#075E54;--wa-light:#DCF8C6;--wa-bg:#E5DDD5;--shadow-sm:0 1px 3px rgba(45,27,20,0.06);--shadow-md:0 4px 20px rgba(45,27,20,0.08);--shadow-lg:0 12px 40px rgba(45,27,20,0.1);--radius:16px;--radius-sm:10px}
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased;line-height:1.6;overflow-x:hidden}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:100;padding:14px 0;background:rgba(255,248,245,0.88);backdrop-filter:blur(16px);border-bottom:1px solid rgba(45,27,20,0.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'DM Serif Display',serif;font-size:22px;color:var(--ink);text-decoration:none}.logo em{font-style:italic;color:var(--coral)}
.nav-links{display:flex;gap:24px;align-items:center}.nav-links a{font-size:14px;font-weight:500;color:var(--ink-soft);text-decoration:none;transition:color .2s}.nav-links a:hover{color:var(--coral)}
.nav-cta{background:var(--coral);color:#fff;padding:9px 18px;border-radius:999px;font-size:13px;font-weight:600;text-decoration:none;transition:all .2s;box-shadow:0 4px 14px rgba(255,77,106,0.3)}.nav-cta:hover{background:var(--coral-deep);transform:translateY(-1px)}
@media(max-width:640px){.nav-links{display:none}}
.hero{padding:60px 0 70px;text-align:center}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--coral-pale);color:var(--coral-deep);padding:6px 16px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:24px}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(40px,7vw,66px);line-height:1.08;letter-spacing:-0.02em;margin-bottom:18px}.hero h1 em{font-style:italic;color:var(--coral)}
.hero .subtitle{font-size:18px;color:var(--ink-soft);max-width:420px;margin:0 auto 32px}
.hero-cta{display:inline-flex;align-items:center;gap:10px;background:var(--coral);color:#fff;padding:16px 32px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:all .2s;box-shadow:0 8px 28px rgba(255,77,106,0.35)}.hero-cta:hover{background:var(--coral-deep);transform:translateY(-2px);box-shadow:0 12px 36px rgba(255,77,106,0.4)}
.hero-note{margin-top:14px;font-size:13px;color:var(--ink-mute)}
.hero-visual{margin-top:48px;display:flex;justify-content:center}
.wa-phone{width:280px;border-radius:28px;background:#000;padding:6px;box-shadow:0 20px 50px rgba(45,27,20,0.15),0 0 0 1px rgba(0,0,0,0.08)}
@keyframes phoneIn{from{opacity:0;transform:translateY(40px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.wa-screen{border-radius:22px;overflow:hidden;background:var(--wa-bg)}
.wa-statusbar{background:var(--wa-green);padding:4px 14px;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:rgba(255,255,255,0.85);font-weight:500}
.wa-statusbar-icons{display:flex;gap:4px;align-items:center}
.wa-header{background:var(--wa-green);padding:6px 8px 8px;display:flex;align-items:center;gap:6px}
.wa-back{color:rgba(255,255,255,0.9);font-size:18px;flex-shrink:0}
.wa-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#25D366,#128C7E);display:grid;place-items:center;flex-shrink:0;font-size:18px;color:#fff}
.wa-contact{flex:1;min-width:0}.wa-contact-name{color:#fff;font-size:13px;font-weight:600}.wa-contact-status{color:rgba(255,255,255,0.7);font-size:10px}
.wa-header-icons{display:flex;gap:12px;color:rgba(255,255,255,0.9)}.wa-header-icons svg{width:15px;height:15px}
.wa-chat{padding:10px 10px 14px;min-height:180px;display:flex;flex-direction:column;gap:5px;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9bfb2' fill-opacity='0.08'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='15' r='1.2'/%3E%3Ccircle cx='15' cy='45' r='0.8'/%3E%3Ccircle cx='45' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E") var(--wa-bg)}
.wa-date{align-self:center;background:rgba(225,218,210,0.9);padding:3px 10px;border-radius:6px;font-size:10px;color:#54656f;box-shadow:0 1px 1px rgba(0,0,0,0.06);margin-bottom:4px}
.wa-msg{max-width:82%;padding:5px 8px 2px;border-radius:7px;font-size:11.5px;line-height:1.4;position:relative;animation:waIn .4s ease-out both}
.wa-msg-out{background:#D9FDD3;align-self:flex-end;border-top-right-radius:0}.wa-msg-in{background:#fff;align-self:flex-start;border-top-left-radius:0}
.wa-msg-meta{display:flex;justify-content:flex-end;align-items:center;gap:4px;margin-top:1px;padding-bottom:2px}
.wa-msg-time{font-size:9px;color:#667781}.wa-ticks{color:#53bdeb;font-size:10px}
.wa-msg:nth-child(2){animation-delay:.2s}.wa-msg:nth-child(3){animation-delay:.5s}.wa-msg:nth-child(4){animation-delay:.9s}.wa-msg:nth-child(5){animation-delay:1.3s}.wa-msg:nth-child(6){animation-delay:1.7s}.wa-msg:nth-child(7){animation-delay:2.1s}
@keyframes waIn{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
.wa-inputbar{display:flex;align-items:center;gap:5px;padding:4px 6px;background:#f0f2f5}
.wa-input-field{flex:1;background:#fff;border-radius:18px;padding:6px 12px;font-size:11px;color:#667781;border:none}
.wa-send{width:32px;height:32px;border-radius:50%;background:#00a884;display:grid;place-items:center;flex-shrink:0}.wa-send svg{width:15px;height:15px;color:#fff}
.wa-emoji{color:#54656f;font-size:17px}
section{padding:70px 0}
.sec-label{font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--coral);margin-bottom:12px}
.sec-title{font-family:'DM Serif Display',serif;font-size:clamp(28px,4vw,38px);line-height:1.15;margin-bottom:16px}
.sec-sub{font-size:16px;color:var(--ink-soft);max-width:500px;margin-bottom:40px}
.sec-center{text-align:center}.sec-center .sec-sub{margin-left:auto;margin-right:auto}
.pains{display:grid;gap:14px;max-width:580px;margin:0 auto}
.pain{display:flex;align-items:flex-start;gap:16px;background:var(--bg-card);padding:20px 22px;border-radius:var(--radius-sm);border:1px solid rgba(45,27,20,0.06);transition:all .2s}.pain:hover{box-shadow:var(--shadow-md);border-color:var(--coral-pale)}
.pain-num{font-family:'DM Serif Display',serif;font-size:18px;color:var(--coral);flex-shrink:0;width:28px}.pain p{font-size:15px;color:var(--ink-soft);line-height:1.5}
.steps-section{background:var(--bg-warm)}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}@media(max-width:720px){.steps{grid-template-columns:1fr}}
.step{background:var(--bg-card);border-radius:var(--radius);padding:32px 26px;border:1px solid rgba(45,27,20,0.05);transition:all .25s}.step:hover{box-shadow:var(--shadow-md);transform:translateY(-3px)}
.step-num{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:var(--coral-pale);color:var(--coral-deep);font-weight:700;font-size:14px;margin-bottom:18px}
.step h3{font-family:'DM Serif Display',serif;font-size:20px;margin-bottom:10px}.step p{font-size:14px;color:var(--ink-soft);line-height:1.6}
.step-icon{margin-top:20px;display:flex;justify-content:center}.step-icon svg{width:64px;height:64px}
.testimonial-section{background:var(--bg-warm)}.testimonial{max-width:520px;margin:0 auto;text-align:center}
.testimonial blockquote{font-family:'DM Serif Display',serif;font-size:22px;font-style:italic;line-height:1.5;margin-bottom:20px;color:var(--ink)}
.testimonial cite{font-style:normal;font-size:14px;color:var(--ink-mute);display:block}.testimonial cite strong{color:var(--ink-soft);font-weight:600}
.stars{color:var(--gold);font-size:18px;margin-bottom:14px}
.plans-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;align-items:start}
@media(max-width:960px){.plans-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.plans-grid{grid-template-columns:1fr;max-width:380px;margin:0 auto}}
.plan{background:var(--bg-card);border-radius:var(--radius);padding:28px 22px;border:1px solid rgba(45,27,20,0.06);transition:all .25s}.plan:hover{box-shadow:var(--shadow-md)}
.plan.popular{border:2px solid var(--coral);position:relative;box-shadow:var(--shadow-md)}
.popular-tag{position:absolute;top:-11px;right:16px;background:var(--coral);color:#fff;padding:3px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase}
.plan-name{font-weight:600;font-size:14px;color:var(--ink-soft);margin-bottom:6px}
.plan-price{font-family:'DM Serif Display',serif;font-size:36px;line-height:1;margin-bottom:2px}.plan-price .per{font-size:15px;color:var(--ink-mute);font-family:'DM Sans',sans-serif}
.plan-desc{font-size:13px;color:var(--ink-mute);margin-bottom:18px;font-style:italic}
.plan ul{list-style:none;padding:0;margin-bottom:22px}.plan li{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:var(--ink-soft);padding:4px 0}
.plan li svg{width:16px;height:16px;flex-shrink:0;margin-top:2px}.ic-check{color:var(--green)}.ic-x{color:#ccc}.plan li.no{color:var(--ink-mute)}
.plan-btn{display:block;text-align:center;padding:12px 18px;border-radius:999px;font-weight:600;font-size:13px;text-decoration:none;transition:all .2s;border:1.5px solid rgba(45,27,20,0.12);color:var(--ink);background:transparent}
.plan-btn:hover{border-color:var(--coral);color:var(--coral)}.plan-btn.filled{background:var(--coral);color:#fff;border-color:var(--coral);box-shadow:0 6px 20px rgba(255,77,106,0.3)}.plan-btn.filled:hover{background:var(--coral-deep);transform:translateY(-1px)}
.plan-btn.outline-coral{border-color:var(--coral);color:var(--coral)}.plan-btn.outline-coral:hover{background:var(--coral-pale)}
.final-cta{text-align:center;padding:60px 30px;background:linear-gradient(135deg,var(--coral-pale),#FFF1EC);border-radius:24px;max-width:680px;margin:0 auto}
.final-cta h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,4vw,34px);margin-bottom:12px}.final-cta p{font-size:16px;color:var(--ink-soft);margin-bottom:28px}
.wa-btn{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;padding:16px 30px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:all .2s;box-shadow:0 8px 24px rgba(37,211,102,0.3)}.wa-btn:hover{background:#1fbc59;transform:translateY(-2px)}.wa-btn svg{width:22px;height:22px}
footer{padding:30px 0 20px;border-top:1px solid rgba(45,27,20,0.06);text-align:center}
.footer-main{font-size:13px;color:var(--ink-mute);margin-bottom:10px}.footer-legal{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
.footer-legal a{font-size:12px;color:var(--ink-mute);text-decoration:none;transition:color .2s}.footer-legal a:hover{color:var(--coral);text-decoration:underline}
.modal-overlay{display:none;position:fixed;inset:0;z-index:999;background:rgba(0,0,0,0.45);backdrop-filter:blur(4px);justify-content:center;align-items:center;padding:24px}.modal-overlay.active{display:flex}
.modal-box{background:#fff;border-radius:20px;max-width:640px;width:100%;max-height:80vh;overflow-y:auto;padding:36px 32px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.15)}
.modal-close{position:absolute;top:16px;right:18px;background:none;border:none;font-size:22px;color:var(--ink-mute);cursor:pointer;padding:4px 8px;border-radius:8px;transition:background .2s}.modal-close:hover{background:rgba(0,0,0,0.05)}
.modal-box h2{font-family:'DM Serif Display',serif;font-size:24px;margin-bottom:20px}.modal-box h3{font-size:15px;font-weight:600;margin:18px 0 8px;color:var(--ink)}.modal-box p{font-size:13px;color:var(--ink-soft);line-height:1.7;margin-bottom:8px}
/* ===== HERO DECORATIVE BLOBS ===== */
.hero{position:relative;overflow:hidden}
.hero-blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:0.35;pointer-events:none;z-index:0}
.hero-blob-1{width:400px;height:400px;background:var(--coral);top:-120px;left:-100px}
.hero-blob-2{width:350px;height:350px;background:var(--coral-light);bottom:-80px;right:-80px}
.hero .wrap{position:relative;z-index:1}

/* ===== PHONE FLOAT ===== */
@keyframes phoneFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.wa-phone{animation:phoneFloat 4s ease-in-out infinite}

/* ===== SCROLL ANIMATIONS ===== */
.reveal{opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* ===== FAQ ===== */
.faq-list{max-width:620px;margin:0 auto;display:grid;gap:12px}
.faq-item{background:var(--bg-card);border-radius:var(--radius-sm);border:1px solid rgba(45,27,20,0.06);overflow:hidden;transition:box-shadow .2s}
.faq-item:hover{box-shadow:var(--shadow-sm)}
.faq-q{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;cursor:pointer;font-size:15px;font-weight:600;color:var(--ink);gap:12px;user-select:none}
.faq-q:hover{color:var(--coral)}
.faq-icon{width:20px;height:20px;flex-shrink:0;transition:transform .3s ease;color:var(--coral)}
.faq-item.open .faq-icon{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .35s ease;padding:0 22px}
.faq-item.open .faq-a{max-height:200px;padding:0 22px 18px}
.faq-a p{font-size:14px;color:var(--ink-soft);line-height:1.6}
</style>
</head>
<body>
<nav><div class="wrap nav-inner"><a href="#" class="logo">Agenda<em>Ya</em></a><div class="nav-links"><a href="#funciona">Cómo funciona</a><a href="#planes">Planes</a><a href="/login">Iniciar sesión</a><a class="nav-cta" href="/registro">Empieza gratis</a></div></div></nav>

<header class="hero">
<div class="hero-blob hero-blob-1"></div>
<div class="hero-blob hero-blob-2"></div>
<div class="wrap">
<div class="hero-badge">✨ Para salones de belleza</div>
<h1>Agenda<em>Ya</em></h1>
<p class="subtitle">Tu clienta agenda por WhatsApp.<br>Tú solo atiendes.</p>
<a class="hero-cta" href="/registro">Empieza gratis →</a>
<p class="hero-note">Sin tarjeta · 14 días gratis</p>
<div class="hero-visual"><div class="wa-phone"><div class="wa-screen">
<div class="wa-statusbar"><span>10:24</span><div class="wa-statusbar-icons"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg></div></div>
<div class="wa-header"><div class="wa-back">‹</div><div class="wa-avatar">💇</div><div class="wa-contact"><div class="wa-contact-name">Salón Glamour ✨</div><div class="wa-contact-status">en línea</div></div><div class="wa-header-icons"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></div></div>
<div class="wa-chat">
<div class="wa-date">HOY</div>
<div class="wa-msg wa-msg-out">Hola, quiero agendar una cita 💅<div class="wa-msg-meta"><span class="wa-msg-time">10:23</span><span class="wa-ticks">✓✓</span></div></div>
<div class="wa-msg wa-msg-in">¡Hola! 😊 Bienvenida a <b>Salón Glamour</b>. Soy Luna, tu asistente.<br><br>1️⃣ Corte — S/35<br>2️⃣ Keratina — S/150<br>3️⃣ Manicure — S/25<br>4️⃣ Tinte — S/80<div class="wa-msg-meta"><span class="wa-msg-time">10:23</span></div></div>
<div class="wa-msg wa-msg-in">✅ <b>¡Cita confirmada!</b><br><br>📋 Keratina<br>📅 Mar 22 · 2:00 p.m.<br>📍 Salón Glamour, Ate<br><br>Te aviso 2h antes 💕<div class="wa-msg-meta"><span class="wa-msg-time">10:25</span></div></div>
</div>
<div class="wa-inputbar"><span class="wa-emoji">😊</span><div class="wa-input-field">Escribe un mensaje</div><div class="wa-send"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></div></div>
</div></div></div>
</div></header>

<section class="reveal"><div class="wrap sec-center">
<div class="sec-label">¿Te suena familiar?</div>
<div class="pains">
<div class="pain"><div class="pain-num">01</div><p>Respondes WhatsApp mientras atiendes a tus clientas</p></div>
<div class="pain"><div class="pain-num">02</div><p>Clientas que agendan y luego no llegan</p></div>
<div class="pain"><div class="pain-num">03</div><p>Pierdes citas en la noche porque no puedes contestar</p></div>
<div class="pain"><div class="pain-num">04</div><p>No sabes cuánto ganaste hasta fin de semana</p></div>
</div></div></section>

<section class="steps-section reveal" id="funciona"><div class="wrap">
<div class="sec-center"><div class="sec-label">Cómo funciona</div><div class="sec-title">3 pasos. Sin instalar nada.</div><p class="sec-sub">AgendaYa conecta tu WhatsApp con un bot inteligente que agenda por ti.</p></div>
<div class="steps">
<div class="step"><div class="step-num">01</div><h3>Tu clienta escribe</h3><p>Manda un WhatsApp y el bot responde al instante, 24/7. Tú no tocas el celular.</p><div class="step-icon"><svg viewBox="0 0 64 64" fill="none"><rect x="16" y="6" width="32" height="52" rx="6" stroke="var(--coral)" stroke-width="2"/><circle cx="32" cy="50" r="3" fill="var(--coral-pale)" stroke="var(--coral)" stroke-width="1.5"/><rect x="22" y="18" width="20" height="3" rx="1.5" fill="var(--coral-pale)"/><rect x="22" y="24" width="14" height="3" rx="1.5" fill="var(--coral-pale)"/><rect x="26" y="32" width="16" height="8" rx="3" fill="var(--coral)" opacity="0.2"/><rect x="22" y="32" width="12" height="8" rx="3" fill="#DCF8C6" stroke="#b5dba0" stroke-width="0.8"/></svg></div></div>
<div class="step"><div class="step-num">02</div><h3>Elige su cita</h3><p>Selecciona servicio, fecha y hora en segundos. Todo automático.</p><div class="step-icon"><svg viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="42" rx="6" stroke="var(--coral)" stroke-width="2"/><line x1="8" y1="24" x2="56" y2="24" stroke="var(--coral)" stroke-width="1.5"/><rect x="18" y="14" width="2" height="6" rx="1" fill="var(--coral)"/><rect x="44" y="14" width="2" height="6" rx="1" fill="var(--coral)"/><rect x="14" y="30" width="8" height="6" rx="2" fill="var(--coral-pale)"/><rect x="28" y="30" width="8" height="6" rx="2" fill="var(--coral)" opacity="0.9"/><rect x="42" y="30" width="8" height="6" rx="2" fill="var(--coral-pale)"/><rect x="14" y="40" width="8" height="6" rx="2" fill="var(--coral-pale)"/><rect x="28" y="40" width="8" height="6" rx="2" fill="var(--coral-pale)"/></svg></div></div>
<div class="step"><div class="step-num">03</div><h3>Tú recibes la cita</h3><p>Aparece en tu panel lista. Sin hacer nada. Con recordatorio automático.</p><div class="step-icon"><svg viewBox="0 0 64 64" fill="none"><rect x="6" y="10" width="52" height="38" rx="5" stroke="var(--coral)" stroke-width="2"/><line x1="6" y1="20" x2="58" y2="20" stroke="var(--coral)" stroke-width="1.2"/><circle cx="14" cy="28" r="3" fill="var(--green)"/><rect x="20" y="26" width="24" height="3" rx="1.5" fill="var(--coral-pale)"/><circle cx="14" cy="37" r="3" fill="var(--coral)" opacity="0.4"/><rect x="20" y="35" width="18" height="3" rx="1.5" fill="var(--coral-pale)"/><rect x="10" y="13" width="16" height="4" rx="2" fill="var(--coral-pale)"/><path d="M50 25l3 3 6-6" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div></section>

<section class="testimonial-section reveal"><div class="wrap"><div class="testimonial">
<div class="stars">★★★★★</div>
<blockquote>"Antes perdía citas por no contestar a tiempo. Ahora mis clientas agendan solas y yo solo me preocupo por atender bien."</blockquote>
<cite><strong>María López</strong> · Salón Glamour, Ate - Lima</cite>
</div></div></section>

<section class="reveal" id="planes"><div class="wrap">
<div class="sec-center"><div class="sec-label">Planes</div><div class="sec-title">Un plan para cada salón.</div><p class="sec-sub">Empieza gratis. Crece cuando tu negocio crece.</p></div>
<div class="plans-grid">
<div class="plan">
<div class="plan-name">Free</div><div class="plan-price">S/0 <span class="per">/mes</span></div><div class="plan-desc">Para probar sin riesgo</div>
<ul>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Hasta 15 citas al mes</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Bot de WhatsApp básico</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Panel de citas</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Registro de clientas</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin recordatorios</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin personalización</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin historial</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin reportes</li>
</ul><a class="plan-btn" href="/registro">Empezar gratis</a></div>

<div class="plan">
<div class="plan-name">Básico</div><div class="plan-price">S/39 <span class="per">/mes</span></div><div class="plan-desc">Para el salón con clientela fija</div>
<ul>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Hasta 50 citas al mes</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Todo del plan Free</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Recordatorios 24h antes</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Historial de clientas</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Bienvenida personalizada</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Nombre de asistente virtual</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin reportes de ingresos</li>
<li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ic-x"><path d="M18 6L6 18M6 6l12 12"/></svg>Sin múltiples empleadas</li>
</ul><a class="plan-btn" href="/registro">Elegir Básico →</a></div>

<div class="plan popular"><div class="popular-tag">Popular</div>
<div class="plan-name">Premium</div><div class="plan-price">S/69 <span class="per">/mes</span></div><div class="plan-desc">Para el salón que quiere crecer</div>
<ul>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Citas ilimitadas</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Todo del plan Básico</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Reportes semanales</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Reseñas post-cita</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Recordatorio de retorno</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Mensaje de cumpleaños</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Hasta 3 empleadas</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Bot con tu logo y colores</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Soporte prioritario (&lt;4h)</li>
</ul><a class="plan-btn filled" href="/registro">Elegir Premium →</a></div>

<div class="plan">
<div class="plan-name">Personalizado</div><div class="plan-price" style="font-size:24px;line-height:1.4;">A consultar</div><div class="plan-desc">Para negocios que necesitan más</div>
<ul>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Todo del plan Premium</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Bot con IA (preguntas libres)</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Empleadas ilimitadas</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Integración con tu sistema</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Múltiples sucursales</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Panel de reportes avanzado</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Dominio propio del bot</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Capacitación a tu equipo</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Soporte dedicado 24/7</li>
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="ic-check"><path d="M20 6L9 17l-5-5"/></svg>Actualizaciones a medida</li>
</ul><a class="plan-btn" href="https://wa.me/51913276046?text=Hola%20quiero%20info%20del%20plan%20Personalizado%20de%20AgendaYa">Consultar →</a></div>
</div></div></section>

<!-- FAQ -->
<section class="reveal">
<div class="wrap">
<div class="sec-center">
<div class="sec-label">Preguntas frecuentes</div>
<div class="sec-title">¿Tienes dudas?</div>
</div>
<div class="faq-list">
<div class="faq-item">
<div class="faq-q">¿Necesito instalar algo?<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>
<div class="faq-a"><p>No. AgendaYa funciona 100% desde WhatsApp para tus clientas y desde el navegador web para ti. No necesitas descargar ninguna app.</p></div>
</div>
<div class="faq-item">
<div class="faq-q">¿Funciona con mi número de WhatsApp actual?<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>
<div class="faq-a"><p>Sí. Conectamos el bot a tu número de WhatsApp Business. Si aún no tienes WhatsApp Business, te ayudamos a configurarlo gratis.</p></div>
</div>
<div class="faq-item">
<div class="faq-q">¿Qué pasa si no pago?<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>
<div class="faq-a"><p>Tu cuenta pasa automáticamente al plan Free. No pierdes tus datos ni tus clientas. Simplemente se limitan las funciones hasta que renueves.</p></div>
</div>
<div class="faq-item">
<div class="faq-q">¿Puedo cancelar cuando quiera?<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>
<div class="faq-a"><p>Sí, sin penalidad. Cancelas desde tu panel en un click y no se te vuelve a cobrar. Sin contratos, sin letra chica.</p></div>
</div>
</div>
</div>
</section>

<section class="reveal"><div class="wrap"><div class="final-cta">
<h2>Deja de anotar citas en el cuaderno.</h2>
<p>Tu primera clienta puede agendar sola hoy mismo.</p>
<a class="wa-btn" href="https://wa.me/51913276046?text=Hola%20quiero%20probar%20AgendaYa" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
Empezar por WhatsApp</a>
</div></div></section>

<footer><div class="wrap">
<p class="footer-main">© 2026 AgendaYa · Hecho en Perú 🇵🇪</p>
<div class="footer-legal">
<a href="#" onclick="document.getElementById('modal-terms').classList.add('active');return false;">Términos y Condiciones</a>
<a href="#" onclick="document.getElementById('modal-privacy').classList.add('active');return false;">Política de Privacidad</a>
</div></div></footer>

<div class="modal-overlay" id="modal-terms"><div class="modal-box">
<button class="modal-close" onclick="this.closest('.modal-overlay').classList.remove('active')">✕</button>
<h2>Términos y Condiciones</h2>
<p><em>Última actualización: abril 2026</em></p>
<h3>1. Aceptación</h3><p>Al usar AgendaYa aceptas estos términos. Si no estás de acuerdo, no uses el servicio.</p>
<h3>2. Descripción del servicio</h3><p>AgendaYa es un sistema de agenda automática por WhatsApp para negocios de servicios. Incluye bot de WhatsApp, panel web de citas y funcionalidades según el plan contratado.</p>
<h3>3. Planes y pagos</h3><p>Los precios están en soles peruanos (S/). Los pagos son mensuales y se renuevan automáticamente. Puedes cancelar en cualquier momento sin penalidad. El plan Free no tiene costo.</p>
<h3>4. Uso aceptable</h3><p>No puedes usar AgendaYa para enviar spam, contenido ilegal, o cualquier actividad que viole las leyes peruanas. Nos reservamos el derecho de suspender cuentas que incumplan estos términos.</p>
<h3>5. Disponibilidad</h3><p>AgendaYa se ofrece "tal cual". Hacemos nuestro mejor esfuerzo para mantener el servicio disponible 24/7 pero no garantizamos disponibilidad ininterrumpida.</p>
<h3>6. Propiedad intelectual</h3><p>El software, diseño y marca AgendaYa son propiedad de sus creadores. Los datos de tus clientas son tuyos y puedes exportarlos en cualquier momento.</p>
<h3>7. Modificaciones</h3><p>Podemos actualizar estos términos. Te notificaremos por email o WhatsApp sobre cambios importantes.</p>
<h3>8. Contacto</h3><p>Para consultas sobre estos términos, escríbenos por WhatsApp.</p>
</div></div>

<div class="modal-overlay" id="modal-privacy"><div class="modal-box">
<button class="modal-close" onclick="this.closest('.modal-overlay').classList.remove('active')">✕</button>
<h2>Política de Privacidad</h2>
<p><em>Última actualización: abril 2026</em></p>
<h3>1. Datos que recopilamos</h3><p>Nombre del negocio, número de WhatsApp, servicios ofrecidos y datos de citas agendadas (nombre de clienta, servicio, fecha y hora).</p>
<h3>2. Uso de los datos</h3><p>Usamos los datos exclusivamente para operar el servicio de agenda: enviar mensajes, gestionar citas y generar reportes.</p>
<h3>3. Compartir datos</h3><p>No vendemos ni compartimos tus datos con terceros. Solo usamos servicios técnicos necesarios para operar (servidores, WhatsApp Business API).</p>
<h3>4. Seguridad</h3><p>Protegemos los datos con cifrado en tránsito y en reposo. El acceso al panel está protegido por contraseña.</p>
<h3>5. Tus derechos</h3><p>Puedes solicitar la eliminación de tus datos en cualquier momento. Al cancelar tu cuenta, eliminamos tus datos en 30 días.</p>
<h3>6. WhatsApp</h3><p>AgendaYa usa la API oficial de WhatsApp Business. Los mensajes se procesan según las políticas de Meta/WhatsApp.</p>
<h3>7. Contacto</h3><p>Para dudas sobre privacidad, escríbenos por WhatsApp.</p>
</div></div>

<script>
// Modals
document.querySelectorAll('.modal-overlay').forEach(m=>{m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('active')})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-overlay.active').forEach(m=>m.classList.remove('active'))});

// Scroll reveal
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{q.addEventListener('click',()=>{const item=q.parentElement;const wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));if(!wasOpen)item.classList.add('open')})});
</script>
</body>
</html>
</>
  )
}
