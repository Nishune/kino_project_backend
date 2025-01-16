document.addEventListener('DOMContentLoaded', () => {
  const o = document.querySelector('.hamburger-btn'),
    t = document.querySelector('.close-btn'),
    p = document.querySelector('.menu-overlay'),
    l = document.querySelector('.overlay-blur');
  o == null ||
    o.addEventListener('click', () => {
      (p.style.display = 'block'), l.classList.add('active');
    }),
    t == null ||
      t.addEventListener('click', () => {
        (p.style.display = 'none'), l.classList.remove('active');
      }),
    l == null ||
      l.addEventListener('click', () => {
        (p.style.display = 'none'), l.classList.remove('active');
      });
});
const b = screen.width;
async function T() {
  try {
    const o = await fetch('/data/barnkalasEvent.json');
    if (!o.ok) throw new Error('Could not fetch data');
    const t = await o.json(),
      p = document.querySelector('.article-party');
    t.kalas.forEach((l) => {
      const c = document.createElement('div');
      c.classList.add('party-div'), p.append(c);
      const u = document.createElement('img');
      u.classList.add('party-img'), (u.src = l.image), (u.alt = l.imageAlt), c.append(u);
      const r = document.createElement('div');
      r.classList.add('party-styling'), c.append(r);
      const a = document.createElement('h2');
      a.classList.add('party-header'), (a.innerText = l.titel), r.append(a);
      const n = document.createElement('p');
      n.classList.add('party-text'), (n.innerText = l.description), r.append(n);
      const m = document.createElement('ol');
      m.classList.add('party-list'),
        r.append(m),
        l.content.forEach((s) => {
          const d = document.createElement('li');
          d.classList.add('party-listItem'), (d.innerText = s), m.append(d);
        });
      const e = document.createElement('button');
      e.classList.add('party-button'), (e.innerText = l.book), r.append(e);
    });
  } catch (o) {
    console.error(o);
  }
}
async function k() {
  try {
    const o = await fetch('./data/barnkalasContent.json');
    if (!o.ok) throw new Error('Could not fetch data');
    const t = await o.json(),
      p = document.querySelector('.div-hero'),
      l = document.querySelector('.article-kids');
    t.barnkalas.forEach((c) => {
      const u = document.createElement('img');
      u.classList.add('kids-hero'),
        b < 1280 ? (u.src = c.imgHero) : (u.src = c.imgHeroDesktop),
        (u.alt = c.imgAltHero),
        p.append(u);
      const r = document.createElement('img');
      r.classList.add('kids-img'),
        b < 1280 ? (r.src = c.imgTextMobile) : (r.src = c.imgTextDesktop),
        (r.alt = c.imgAltMobile),
        p.append(r);
      const a = document.createElement('div');
      a.classList.add('kids-div'), l.append(a);
      const n = document.createElement('h2');
      n.classList.add('kids-header'),
        b < 1280 ? (n.innerText = c.titelMobile) : (n.innerText = c.titelDesktop),
        a.append(n);
      const m = document.createElement('button');
      m.classList.add('kids-button'), (m.innerText = c.book), (m.type = 'button'), a.append(m);
      const i = document.createElement('h1');
      i.classList.add('kids-mainHeader'),
        b < 1280 ? (i.innerText = c.mainTitelMobile) : (i.style.display = 'none'),
        a.append(i);
      const e = document.createElement('p');
      e.classList.add('kids-text'),
        b < 1280 ? (e.innerText = c.descriptionMobile) : (e.innerText = c.descriptionDesktop),
        a.append(e);
    });
  } catch (o) {
    console.error(o);
  }
}
async function S() {
  T(), k();
}
async function q() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function w() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const t = await q(),
    p = document.querySelector('.info-modal'),
    l = document.querySelector('.info-modal-list'),
    c = document.querySelector('.info');
  if (c) {
    const a = t.sections[0],
      n = document.querySelector('.cinema-title'),
      m = document.querySelector('.cinema-open'),
      i = document.createElement('button');
    (i.innerText = t.buttons[2].text), (n.innerText = a.title), (m.innerText = a.text);
    const e = document.querySelector('.kino-img'),
      s = document.querySelector('.info-2'),
      d = t.sections[1].modal,
      h = d[3].open,
      E = document.createElement('h3'),
      f = document.createElement('p');
    (E.innerText = d[3].title), (f.innerText = d[3].text), (e.src = t.kinoImg.src), (e.alt = t.kinoImg.alt);
    const y = document.createElement('div');
    y.appendChild(E),
      y.appendChild(f),
      y.setAttribute('class', 'open-div'),
      E.setAttribute('class', 'desktop-open-title'),
      f.setAttribute('class', 'desktop-open-paragraph'),
      h.forEach((x) => {
        const C = document.createElement('div'),
          g = document.createElement('p'),
          v = document.createElement('p'),
          L = document.createElement('p');
        C.setAttribute('class', 'open-times'),
          g.setAttribute('class', 'open-times-day'),
          v.setAttribute('class', 'open-times-date'),
          L.setAttribute('class', 'open-times-time'),
          (g.innerText = x.dag),
          (v.innerText = x.datum),
          (L.innerText = x.tid),
          C.appendChild(g),
          C.appendChild(v),
          C.appendChild(L),
          y.appendChild(C);
      }),
      s.prepend(y),
      c.appendChild(s);
  }
  const u = t.sections[1].modal;
  let r = 0;
  u.forEach((a) => {
    if (a.text == null) {
      const n = document.createElement('p');
      n.setAttribute('class', 'modal-title'), (n.innerText = a.title), p.prepend(n);
    } else {
      const n = document.createElement('li'),
        m = document.createElement('p'),
        i = document.createElement('p'),
        e = document.createElement('img');
      n.setAttribute('class', 'modal-item-' + r),
        r++,
        m.setAttribute('class', 'modal-question'),
        i.setAttribute('class', 'modal-answer'),
        e.setAttribute('class', 'modal-open'),
        (m.innerText = a.title),
        (i.innerText = a.text),
        (i.style.display = 'none'),
        (e.src = t.buttons[0].openButton),
        (e.alt = t.buttons[0].alt),
        n.appendChild(e),
        n.appendChild(m),
        e.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = t.buttons[1].closeButton), (e.alt = t.buttons[1].alt), (i.style.display = ''))
              : ((e.src = t.buttons[0].openButton), (e.alt = t.buttons[0].alt), (i.style.display = 'none'));
        }),
        m.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = t.buttons[1].closeButton), (e.alt = t.buttons[1].alt), (i.style.display = ''))
              : ((e.src = t.buttons[0].openButton), (e.alt = t.buttons[0].alt), (i.style.display = 'none'));
        }),
        'open' in a
          ? a.open.forEach((s) => {
              const d = document.createElement('p'),
                h = document.createElement('p'),
                E = document.createElement('p'),
                f = document.createElement('div');
              f.setAttribute('class', 'open-times'),
                d.setAttribute('class', 'open-times-day'),
                h.setAttribute('class', 'open-times-date'),
                E.setAttribute('class', 'open-times-time'),
                (d.innerText = s.dag),
                (h.innerText = s.datum),
                (E.innerText = s.tid),
                f.appendChild(d),
                f.appendChild(h),
                f.appendChild(E),
                i.appendChild(f),
                n.appendChild(i),
                l.appendChild(n);
            })
          : (n.appendChild(i), l.appendChild(n));
    }
  });
}
(async function () {
  try {
    const p = await (await fetch('/data/footer.json')).json(),
      l = document.querySelector('.footer-container'),
      c = document.createElement('div');
    c.classList.add('sections-container'),
      p.footer.sections.forEach((n) => {
        const m = document.createElement('section');
        m.classList.add('footer-section');
        const i = document.createElement('h4');
        (i.textContent = n.title), m.append(i);
        const e = document.createElement('ul');
        n.contact
          ? n.contact.forEach((s) => {
              const d = document.createElement('li');
              (d.textContent = `E-post: ${s.mail}`), e.append(d);
              const h = document.createElement('li');
              (h.textContent = `Telefonnummer: ${s.phoneNumber}`), e.append(h);
            })
          : n.links
            ? n.links.forEach((s) => {
                const d = document.createElement('li');
                if (s.icon) {
                  const E = document.createElement('img');
                  (E.src = s.icon), (E.alt = `${s.text || s.name} icon`), E.classList.add('footer-icon'), d.append(E);
                }
                const h = document.createElement('a');
                (h.href = s.url),
                  (h.textContent = s.text || s.name),
                  h.classList.add('footer-a'),
                  d.append(h),
                  e.append(d);
              })
            : n.adress &&
              n.adress.forEach((s) => {
                const d = document.createElement('li');
                (d.textContent = s.street), e.appendChild(d);
                const h = document.createElement('li');
                (h.textContent = s.town), e.appendChild(h);
                const E = document.createElement('li'),
                  f = document.createElement('a');
                (f.href = s.url),
                  (f.textContent = s.findUs),
                  f.classList.add('footer-afind'),
                  E.appendChild(f),
                  e.appendChild(E);
              }),
          m.append(e),
          c.append(m);
      }),
      l.append(c);
    const u = document.createElement('span');
    u.classList.add('footer-logo-p'), l.append(u);
    const r = document.createElement('img');
    (r.src = p.footer.logo), (r.alt = 'Kino Bio Logo'), r.classList.add('footer-logo'), u.append(r);
    const a = document.createElement('p');
    (a.textContent = p.footer.text), a.classList.add('footer-logotext'), u.append(a);
  } catch (t) {
    console.error('error', t);
  }
})();
async function A() {
  const t = await (await fetch('/data/about.json')).json();
  return { mainHeadline: t.aboutUs, headline: t.headline, aboutPage: t.aboutPage };
}
async function H() {
  const { mainHeadline: o, headline: t, aboutPage: p } = await A();
  o && t && p && j(p, t, o);
}
function j(o, t, p) {
  if (!document.querySelector('.about-page')) return;
  const l = document.querySelector('.about-main-header'),
    c = document.createElement('h1');
  (c.textContent = p), l.appendChild(c);
  const u = document.querySelector('.about-header'),
    r = document.createElement('h2');
  (r.textContent = t), u.appendChild(r);
  const a = document.querySelector('.section-1'),
    n = document.createElement('h3');
  n.textContent = o[0].section;
  const m = document.createElement('p');
  (m.textContent = o[0].content), a.appendChild(n), a.appendChild(m);
  const i = document.querySelector('.section-2'),
    e = document.createElement('h3');
  e.textContent = o[1].section;
  const s = document.createElement('p');
  (s.textContent = o[1].content), i.appendChild(e), i.appendChild(s);
  const d = document.querySelector('.section-3'),
    h = document.createElement('h3');
  h.textContent = o[2].section;
  const E = document.createElement('p');
  (E.textContent = o[2].content), d.appendChild(h), d.appendChild(E);
  const f = document.querySelector('.section-4'),
    y = document.createElement('h3');
  y.textContent = o[3].section;
  const x = document.createElement('p');
  (x.textContent = o[3].content), f.appendChild(y), f.appendChild(x);
}
H();
const M = document.querySelector('.article-kids');
M && S();
(document.querySelector('.info') || document.querySelector('.info-modal')) && w();
