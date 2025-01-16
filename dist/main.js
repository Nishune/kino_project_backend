async function k() {
  return await (await fetch('/data/header.json')).json();
}
function T(o) {
  const t = document.querySelector('#navigation-menu'),
    f = document.createElement('nav');
  f.className = 'main-nav';
  const h = document.createElement('div');
  h.className = 'nav-left';
  const c = document.createElement('a');
  c.href = '/';
  const m = document.createElement('img');
  (m.src = o.header.mainHeader.logo), (m.alt = o.header.mainHeader.alt), (m.className = 'nav-logo'), c.appendChild(m);
  const r = document.createElement('a');
  r.href = '/';
  const s = document.createElement('span');
  (s.className = 'brand-name'),
    (s.textContent = o.header.mainHeader.brandName),
    r.appendChild(s),
    h.appendChild(c),
    h.appendChild(r);
  const n = document.createElement('div');
  n.className = 'nav-right';
  const l = document.createElement('button');
  (l.className = 'hamburger-btn'), (l.innerHTML = '<i class="fas fa-bars"></i>');
  const a = document.createElement('div');
  (a.className = 'menu-overlay'), (a.style.display = 'none');
  const e = document.createElement('div');
  e.className = 'overlay-blur';
  const d = document.createElement('div');
  d.className = 'overlay-logo';
  const i = document.createElement('button');
  (i.className = 'close-btn'), (i.innerHTML = '<i class="fas fa-times"></i>'), a.appendChild(i);
  const p = document.createElement('img');
  (p.src = o.header.hamburgerMenu.menuLogo),
    (p.alt = o.header.mainHeader.alt),
    (p.className = 'overlay-logo'),
    d.appendChild(p),
    a.appendChild(d);
  const u = document.createElement('ul');
  (u.className = 'menu-links'),
    o.header.hamburgerMenu.menuLinks.forEach((E) => {
      const C = document.createElement('li'),
        y = document.createElement('a');
      switch (E.text) {
        case 'Alla filmer':
          y.href = '/movies';
          break;
        case 'Om oss':
          y.href = '/about';
          break;
        case 'Barnkalas':
          y.href = '/kids';
          break;
        default:
          y.href = '/';
      }
      (y.textContent = E.text), C.appendChild(y), u.appendChild(C);
    }),
    a.appendChild(u),
    l.addEventListener('click', () => {
      (a.style.display = 'block'), e.classList.add('active');
    }),
    i.addEventListener('click', () => {
      (a.style.display = 'none'), e.classList.remove('active');
    }),
    e.addEventListener('click', () => {
      (a.style.display = 'none'), e.classList.remove('active');
    }),
    n.appendChild(u.cloneNode(!0)),
    n.appendChild(l),
    f.appendChild(h),
    f.appendChild(n),
    t.appendChild(f),
    t.appendChild(a),
    t.appendChild(e);
}
async function S() {
  const o = await k();
  T(o);
}
const g = screen.width;
async function q() {
  try {
    const o = await fetch('/data/barnkalasEvent.json');
    if (!o.ok) throw new Error('Could not fetch data');
    const t = await o.json(),
      f = document.querySelector('.article-party');
    t.kalas.forEach((h) => {
      const c = document.createElement('div');
      c.classList.add('party-div'), f.append(c);
      const m = document.createElement('img');
      m.classList.add('party-img'), (m.src = h.image), (m.alt = h.imageAlt), c.append(m);
      const r = document.createElement('div');
      r.classList.add('party-styling'), c.append(r);
      const s = document.createElement('h2');
      s.classList.add('party-header'), (s.innerText = h.titel), r.append(s);
      const n = document.createElement('p');
      n.classList.add('party-text'), (n.innerText = h.description), r.append(n);
      const l = document.createElement('ol');
      l.classList.add('party-list'),
        r.append(l),
        h.content.forEach((d) => {
          const i = document.createElement('li');
          i.classList.add('party-listItem'), (i.innerText = d), l.append(i);
        });
      const e = document.createElement('button');
      e.classList.add('party-button'), (e.innerText = h.book), r.append(e);
    });
  } catch (o) {
    console.error(o);
  }
}
async function w() {
  try {
    const o = await fetch('./data/barnkalasContent.json');
    if (!o.ok) throw new Error('Could not fetch data');
    const t = await o.json(),
      f = document.querySelector('.div-hero'),
      h = document.querySelector('.article-kids');
    t.barnkalas.forEach((c) => {
      const m = document.createElement('img');
      m.classList.add('kids-hero'),
        g < 1280 ? (m.src = c.imgHero) : (m.src = c.imgHeroDesktop),
        (m.alt = c.imgAltHero),
        f.append(m);
      const r = document.createElement('img');
      r.classList.add('kids-img'),
        g < 1280 ? (r.src = c.imgTextMobile) : (r.src = c.imgTextDesktop),
        (r.alt = c.imgAltMobile),
        f.append(r);
      const s = document.createElement('div');
      s.classList.add('kids-div'), h.append(s);
      const n = document.createElement('h2');
      n.classList.add('kids-header'),
        g < 1280 ? (n.innerText = c.titelMobile) : (n.innerText = c.titelDesktop),
        s.append(n);
      const l = document.createElement('button');
      l.classList.add('kids-button'), (l.innerText = c.book), (l.type = 'button'), s.append(l);
      const a = document.createElement('h1');
      a.classList.add('kids-mainHeader'),
        g < 1280 ? (a.innerText = c.mainTitelMobile) : (a.style.display = 'none'),
        s.append(a);
      const e = document.createElement('p');
      e.classList.add('kids-text'),
        g < 1280 ? (e.innerText = c.descriptionMobile) : (e.innerText = c.descriptionDesktop),
        s.append(e);
    });
  } catch (o) {
    console.error(o);
  }
}
async function A() {
  q(), w();
}
async function H() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function N() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const t = await H(),
    f = document.querySelector('.info-modal'),
    h = document.querySelector('.info-modal-list'),
    c = document.querySelector('.info');
  if (c) {
    const s = t.sections[0],
      n = document.querySelector('.cinema-title'),
      l = document.querySelector('.cinema-open'),
      a = document.createElement('button');
    (a.innerText = t.buttons[2].text), (n.innerText = s.title), (l.innerText = s.text);
    const e = document.querySelector('.kino-img'),
      d = document.querySelector('.info-2'),
      i = t.sections[1].modal,
      p = i[3].open,
      u = document.createElement('h3'),
      E = document.createElement('p');
    (u.innerText = i[3].title), (E.innerText = i[3].text), (e.src = t.kinoImg.src), (e.alt = t.kinoImg.alt);
    const C = document.createElement('div');
    C.appendChild(u),
      C.appendChild(E),
      C.setAttribute('class', 'open-div'),
      u.setAttribute('class', 'desktop-open-title'),
      E.setAttribute('class', 'desktop-open-paragraph'),
      p.forEach((y) => {
        const b = document.createElement('div'),
          x = document.createElement('p'),
          v = document.createElement('p'),
          L = document.createElement('p');
        b.setAttribute('class', 'open-times'),
          x.setAttribute('class', 'open-times-day'),
          v.setAttribute('class', 'open-times-date'),
          L.setAttribute('class', 'open-times-time'),
          (x.innerText = y.dag),
          (v.innerText = y.datum),
          (L.innerText = y.tid),
          b.appendChild(x),
          b.appendChild(v),
          b.appendChild(L),
          C.appendChild(b);
      }),
      d.prepend(C),
      c.appendChild(d);
  }
  const m = t.sections[1].modal;
  let r = 0;
  m.forEach((s) => {
    if (s.text == null) {
      const n = document.createElement('p');
      n.setAttribute('class', 'modal-title'), (n.innerText = s.title), f.prepend(n);
    } else {
      const n = document.createElement('li'),
        l = document.createElement('p'),
        a = document.createElement('p'),
        e = document.createElement('img');
      n.setAttribute('class', 'modal-item-' + r),
        r++,
        l.setAttribute('class', 'modal-question'),
        a.setAttribute('class', 'modal-answer'),
        e.setAttribute('class', 'modal-open'),
        (l.innerText = s.title),
        (a.innerText = s.text),
        (a.style.display = 'none'),
        (e.src = t.buttons[0].openButton),
        (e.alt = t.buttons[0].alt),
        n.appendChild(e),
        n.appendChild(l),
        e.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = t.buttons[1].closeButton), (e.alt = t.buttons[1].alt), (a.style.display = ''))
              : ((e.src = t.buttons[0].openButton), (e.alt = t.buttons[0].alt), (a.style.display = 'none'));
        }),
        l.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = t.buttons[1].closeButton), (e.alt = t.buttons[1].alt), (a.style.display = ''))
              : ((e.src = t.buttons[0].openButton), (e.alt = t.buttons[0].alt), (a.style.display = 'none'));
        }),
        'open' in s
          ? s.open.forEach((d) => {
              const i = document.createElement('p'),
                p = document.createElement('p'),
                u = document.createElement('p'),
                E = document.createElement('div');
              E.setAttribute('class', 'open-times'),
                i.setAttribute('class', 'open-times-day'),
                p.setAttribute('class', 'open-times-date'),
                u.setAttribute('class', 'open-times-time'),
                (i.innerText = d.dag),
                (p.innerText = d.datum),
                (u.innerText = d.tid),
                E.appendChild(i),
                E.appendChild(p),
                E.appendChild(u),
                a.appendChild(E),
                n.appendChild(a),
                h.appendChild(n);
            })
          : (n.appendChild(a), h.appendChild(n));
    }
  });
}
(async function () {
  try {
    const f = await (await fetch('/data/footer.json')).json(),
      h = document.querySelector('.footer-container'),
      c = document.createElement('div');
    c.classList.add('sections-container'),
      f.footer.sections.forEach((n) => {
        const l = document.createElement('section');
        l.classList.add('footer-section');
        const a = document.createElement('h4');
        (a.textContent = n.title), l.append(a);
        const e = document.createElement('ul');
        n.contact
          ? n.contact.forEach((d) => {
              const i = document.createElement('li');
              (i.textContent = `E-post: ${d.mail}`), e.append(i);
              const p = document.createElement('li');
              (p.textContent = `Telefonnummer: ${d.phoneNumber}`), e.append(p);
            })
          : n.links
            ? n.links.forEach((d) => {
                const i = document.createElement('li');
                if (d.icon) {
                  const u = document.createElement('img');
                  (u.src = d.icon), (u.alt = `${d.text || d.name} icon`), u.classList.add('footer-icon'), i.append(u);
                }
                const p = document.createElement('a');
                (p.href = d.url),
                  (p.textContent = d.text || d.name),
                  p.classList.add('footer-a'),
                  i.append(p),
                  e.append(i);
              })
            : n.adress &&
              n.adress.forEach((d) => {
                const i = document.createElement('li');
                (i.textContent = d.street), e.appendChild(i);
                const p = document.createElement('li');
                (p.textContent = d.town), e.appendChild(p);
                const u = document.createElement('li'),
                  E = document.createElement('a');
                (E.href = d.url),
                  (E.textContent = d.findUs),
                  E.classList.add('footer-afind'),
                  u.appendChild(E),
                  e.appendChild(u);
              }),
          l.append(e),
          c.append(l);
      }),
      h.append(c);
    const m = document.createElement('span');
    m.classList.add('footer-logo-p'), h.append(m);
    const r = document.createElement('img');
    (r.src = f.footer.logo), (r.alt = 'Kino Bio Logo'), r.classList.add('footer-logo'), m.append(r);
    const s = document.createElement('p');
    (s.textContent = f.footer.text), s.classList.add('footer-logotext'), m.append(s);
  } catch (t) {
    console.error('error', t);
  }
})();
async function B() {
  const t = await (await fetch('/data/about.json')).json();
  return { mainHeadline: t.aboutUs, headline: t.headline, aboutPage: t.aboutPage };
}
async function j() {
  const { mainHeadline: o, headline: t, aboutPage: f } = await B();
  o && t && f && M(f, t, o);
}
function M(o, t, f) {
  if (!document.querySelector('.about-page')) return;
  const h = document.querySelector('.about-main-header'),
    c = document.createElement('h1');
  (c.textContent = f), h.appendChild(c);
  const m = document.querySelector('.about-header'),
    r = document.createElement('h2');
  (r.textContent = t), m.appendChild(r);
  const s = document.querySelector('.section-1'),
    n = document.createElement('h3');
  n.textContent = o[0].section;
  const l = document.createElement('p');
  (l.textContent = o[0].content), s.appendChild(n), s.appendChild(l);
  const a = document.querySelector('.section-2'),
    e = document.createElement('h3');
  e.textContent = o[1].section;
  const d = document.createElement('p');
  (d.textContent = o[1].content), a.appendChild(e), a.appendChild(d);
  const i = document.querySelector('.section-3'),
    p = document.createElement('h3');
  p.textContent = o[2].section;
  const u = document.createElement('p');
  (u.textContent = o[2].content), i.appendChild(p), i.appendChild(u);
  const E = document.querySelector('.section-4'),
    C = document.createElement('h3');
  C.textContent = o[3].section;
  const y = document.createElement('p');
  (y.textContent = o[3].content), E.appendChild(C), E.appendChild(y);
}
j();
S();
const I = document.querySelector('.article-kids');
I && A();
(document.querySelector('.info') || document.querySelector('.info-modal')) && N();
