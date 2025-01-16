document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelector('.hamburger-btn'),
    e = document.querySelector('.close-btn'),
    r = document.querySelector('.menu-overlay'),
    i = document.querySelector('.overlay-blur');
  n == null ||
    n.addEventListener('click', () => {
      (r.style.display = 'block'), i.classList.add('active');
    }),
    e == null ||
      e.addEventListener('click', () => {
        (r.style.display = 'none'), i.classList.remove('active');
      }),
    i == null ||
      i.addEventListener('click', () => {
        (r.style.display = 'none'), i.classList.remove('active');
      });
});
const C = screen.width;
async function T() {
  try {
    const n = await fetch('/data/barnkalasEvent.json');
    if (!n.ok) throw new Error('Could not fetch data');
    const e = await n.json(),
      r = document.querySelector('.article-party');
    e.kalas.forEach((i) => {
      const c = document.createElement('div');
      c.classList.add('party-div'), r.append(c);
      const m = document.createElement('img');
      m.classList.add('party-img'), (m.src = i.image), (m.alt = i.imageAlt), c.append(m);
      const d = document.createElement('div');
      d.classList.add('party-styling'), c.append(d);
      const s = document.createElement('h2');
      s.classList.add('party-header'), (s.innerText = i.titel), d.append(s);
      const o = document.createElement('p');
      o.classList.add('party-text'), (o.innerText = i.description), d.append(o);
      const l = document.createElement('ol');
      l.classList.add('party-list'),
        d.append(l),
        i.content.forEach((h) => {
          const p = document.createElement('li');
          p.classList.add('party-listItem'), (p.innerText = h), l.append(p);
        });
      const t = document.createElement('button');
      t.classList.add('party-button'), (t.innerText = i.book), d.append(t);
    });
  } catch (n) {
    console.error(n);
  }
}
async function S() {
  try {
    const n = await fetch('./data/barnkalasContent.json');
    if (!n.ok) throw new Error('Could not fetch data');
    const e = await n.json(),
      r = document.querySelector('.div-hero'),
      i = document.querySelector('.article-kids');
    e.barnkalas.forEach((c) => {
      const m = document.createElement('img');
      m.classList.add('kids-hero'),
        C < 1280 ? (m.src = c.imgHero) : (m.src = c.imgHeroDesktop),
        (m.alt = c.imgAltHero),
        r.append(m);
      const d = document.createElement('img');
      d.classList.add('kids-img'),
        C < 1280 ? (d.src = c.imgTextMobile) : (d.src = c.imgTextDesktop),
        (d.alt = c.imgAltMobile),
        r.append(d);
      const s = document.createElement('div');
      s.classList.add('kids-div'), i.append(s);
      const o = document.createElement('h2');
      o.classList.add('kids-header'),
        C < 1280 ? (o.innerText = c.titelMobile) : (o.innerText = c.titelDesktop),
        s.append(o);
      const l = document.createElement('button');
      l.classList.add('kids-button'), (l.innerText = c.book), (l.type = 'button'), s.append(l);
      const a = document.createElement('h1');
      a.classList.add('kids-mainHeader'),
        C < 1280 ? (a.innerText = c.mainTitelMobile) : (a.style.display = 'none'),
        s.append(a);
      const t = document.createElement('p');
      t.classList.add('kids-text'),
        C < 1280 ? (t.innerText = c.descriptionMobile) : (t.innerText = c.descriptionDesktop),
        s.append(t);
    });
  } catch (n) {
    console.error(n);
  }
}
async function q() {
  T(), S();
}
async function L() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function A() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const e = await L(),
    r = document.querySelector('.info-modal'),
    i = document.querySelector('.info-modal-list'),
    c = document.querySelector('.info');
  if (c) {
    const s = e.sections[0],
      o = document.querySelector('.cinema-title'),
      l = document.querySelector('.cinema-open'),
      a = document.createElement('button');
    (a.innerText = e.buttons[2].text), (o.innerText = s.title), (l.innerText = s.text);
    const t = document.querySelector('.kino-img'),
      h = document.querySelector('.info-2'),
      p = e.sections[1].modal,
      E = p[3].open,
      y = document.createElement('h3'),
      u = document.createElement('p');
    (y.innerText = p[3].title), (u.innerText = p[3].text), (t.src = e.kinoImg.src), (t.alt = e.kinoImg.alt);
    const b = document.createElement('div');
    b.appendChild(y),
      b.appendChild(u),
      b.setAttribute('class', 'open-div'),
      y.setAttribute('class', 'desktop-open-title'),
      u.setAttribute('class', 'desktop-open-paragraph'),
      E.forEach((f) => {
        const x = document.createElement('div'),
          g = document.createElement('p'),
          k = document.createElement('p'),
          v = document.createElement('p');
        x.setAttribute('class', 'open-times'),
          g.setAttribute('class', 'open-times-day'),
          k.setAttribute('class', 'open-times-date'),
          v.setAttribute('class', 'open-times-time'),
          (g.innerText = f.dag),
          (k.innerText = f.datum),
          (v.innerText = f.tid),
          x.appendChild(g),
          x.appendChild(k),
          x.appendChild(v),
          b.appendChild(x);
      }),
      h.prepend(b),
      c.appendChild(h);
  }
  const m = e.sections[1].modal;
  let d = 0;
  m.forEach((s) => {
    if (s.text == null) {
      const o = document.createElement('p');
      o.setAttribute('class', 'modal-title'), (o.innerText = s.title), r.prepend(o);
    } else {
      const o = document.createElement('li'),
        l = document.createElement('p'),
        a = document.createElement('p'),
        t = document.createElement('img');
      o.setAttribute('class', 'modal-item-' + d),
        d++,
        l.setAttribute('class', 'modal-question'),
        a.setAttribute('class', 'modal-answer'),
        t.setAttribute('class', 'modal-open'),
        (l.innerText = s.title),
        (a.innerText = s.text),
        (a.style.display = 'none'),
        (t.src = e.buttons[0].openButton),
        (t.alt = e.buttons[0].alt),
        o.appendChild(t),
        o.appendChild(l),
        t.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (a.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (a.style.display = 'none'));
        }),
        l.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (a.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (a.style.display = 'none'));
        }),
        'open' in s
          ? s.open.forEach((h) => {
              const p = document.createElement('p'),
                E = document.createElement('p'),
                y = document.createElement('p'),
                u = document.createElement('div');
              u.setAttribute('class', 'open-times'),
                p.setAttribute('class', 'open-times-day'),
                E.setAttribute('class', 'open-times-date'),
                y.setAttribute('class', 'open-times-time'),
                (p.innerText = h.dag),
                (E.innerText = h.datum),
                (y.innerText = h.tid),
                u.appendChild(p),
                u.appendChild(E),
                u.appendChild(y),
                a.appendChild(u),
                o.appendChild(a),
                i.appendChild(o);
            })
          : (o.appendChild(a), i.appendChild(o));
    }
  });
}
async function w() {
  const e = await (await fetch('/data/about.json')).json();
  return { mainHeadline: e.aboutUs, headline: e.headline, aboutPage: e.aboutPage };
}
async function H() {
  const { mainHeadline: n, headline: e, aboutPage: r } = await w();
  n && e && r && M(r, e, n);
}
function M(n, e, r) {
  if (!document.querySelector('.about-page')) return;
  const i = document.querySelector('.about-main-header'),
    c = document.createElement('h1');
  (c.textContent = r), i.appendChild(c);
  const m = document.querySelector('.about-header'),
    d = document.createElement('h2');
  (d.textContent = e), m.appendChild(d);
  const s = document.querySelector('.section-1'),
    o = document.createElement('h3');
  o.textContent = n[0].section;
  const l = document.createElement('p');
  (l.textContent = n[0].content), s.appendChild(o), s.appendChild(l);
  const a = document.querySelector('.section-2'),
    t = document.createElement('h3');
  t.textContent = n[1].section;
  const h = document.createElement('p');
  (h.textContent = n[1].content), a.appendChild(t), a.appendChild(h);
  const p = document.querySelector('.section-3'),
    E = document.createElement('h3');
  E.textContent = n[2].section;
  const y = document.createElement('p');
  (y.textContent = n[2].content), p.appendChild(E), p.appendChild(y);
  const u = document.querySelector('.section-4'),
    b = document.createElement('h3');
  b.textContent = n[3].section;
  const f = document.createElement('p');
  (f.textContent = n[3].content), u.appendChild(b), u.appendChild(f);
}
H();
const j = document.querySelector('.article-kids');
j && q();
(document.querySelector('.info') || document.querySelector('.info-modal')) && A();
