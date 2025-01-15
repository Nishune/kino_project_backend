async function L() {
  return await (await fetch('/data/header.json')).json();
}
function T(t) {
  const o = document.querySelector('#navigation-menu'),
    u = document.createElement('nav');
  u.className = 'main-nav';
  const r = document.createElement('div');
  r.className = 'nav-left';
  const d = document.createElement('a');
  d.href = 'index.html';
  const p = document.createElement('img');
  (p.src = t.header.mainHeader.logo), (p.alt = t.header.mainHeader.alt), (p.className = 'nav-logo'), d.appendChild(p);
  const n = document.createElement('a');
  n.href = 'index.html';
  const c = document.createElement('span');
  (c.className = 'brand-name'),
    (c.textContent = t.header.mainHeader.brandName),
    n.appendChild(c),
    r.appendChild(d),
    r.appendChild(n);
  const a = document.createElement('div');
  a.className = 'nav-right';
  const i = document.createElement('button');
  (i.className = 'hamburger-btn'), (i.innerHTML = '<i class="fas fa-bars"></i>');
  const s = document.createElement('div');
  (s.className = 'menu-overlay'), (s.style.display = 'none');
  const e = document.createElement('div');
  e.className = 'overlay-blur';
  const l = document.createElement('div');
  l.className = 'overlay-logo';
  const m = document.createElement('button');
  (m.className = 'close-btn'), (m.innerHTML = '<i class="fas fa-times"></i>'), s.appendChild(m);
  const h = document.createElement('img');
  (h.src = t.header.hamburgerMenu.menuLogo),
    (h.alt = t.header.mainHeader.alt),
    (h.className = 'overlay-logo'),
    l.appendChild(h),
    s.appendChild(l);
  const E = document.createElement('ul');
  (E.className = 'menu-links'),
    t.header.hamburgerMenu.menuLinks.forEach((f) => {
      const g = document.createElement('li'),
        y = document.createElement('a');
      switch (f.text) {
        case 'Om oss':
          y.href = '/about';
          break;
        case 'Barnkalas':
          y.href = '/kids';
          break;
        default:
          y.href = '/';
      }
      (y.textContent = f.text), g.appendChild(y), E.appendChild(g);
    }),
    s.appendChild(E),
    i.addEventListener('click', () => {
      (s.style.display = 'block'), e.classList.add('active');
    }),
    m.addEventListener('click', () => {
      (s.style.display = 'none'), e.classList.remove('active');
    }),
    e.addEventListener('click', () => {
      (s.style.display = 'none'), e.classList.remove('active');
    }),
    a.appendChild(E.cloneNode(!0)),
    a.appendChild(i),
    u.appendChild(r),
    u.appendChild(a),
    o.appendChild(u),
    o.appendChild(s),
    o.appendChild(e);
}
async function S() {
  const t = await L();
  T(t);
}
const b = screen.width;
async function w() {
  try {
    const t = await fetch('/data/barnkalasEvent.json');
    if (!t.ok) throw new Error('Could not fetch data');
    const o = await t.json(),
      u = document.querySelector('.article-party');
    o.kalas.forEach((r) => {
      const d = document.createElement('div');
      d.classList.add('party-div'), u.append(d);
      const p = document.createElement('img');
      p.classList.add('party-img'), (p.src = r.image), (p.alt = r.imageAlt), d.append(p);
      const n = document.createElement('div');
      n.classList.add('party-styling'), d.append(n);
      const c = document.createElement('h2');
      c.classList.add('party-header'), (c.innerText = r.titel), n.append(c);
      const a = document.createElement('p');
      a.classList.add('party-text'), (a.innerText = r.description), n.append(a);
      const i = document.createElement('ol');
      i.classList.add('party-list'),
        n.append(i),
        r.content.forEach((l) => {
          const m = document.createElement('li');
          m.classList.add('party-listItem'), (m.innerText = l), i.append(m);
        });
      const e = document.createElement('button');
      e.classList.add('party-button'), (e.innerText = r.book), n.append(e);
    });
  } catch (t) {
    console.error(t);
  }
}
async function q() {
  try {
    const t = await fetch('./data/barnkalasContent.json');
    if (!t.ok) throw new Error('Could not fetch data');
    const o = await t.json(),
      u = document.querySelector('.div-hero'),
      r = document.querySelector('.article-kids');
    o.barnkalas.forEach((d) => {
      const p = document.createElement('img');
      p.classList.add('kids-hero'),
        b < 1280 ? (p.src = d.imgHero) : (p.src = d.imgHeroDesktop),
        (p.alt = d.imgAltHero),
        u.append(p);
      const n = document.createElement('img');
      n.classList.add('kids-img'),
        b < 1280 ? (n.src = d.imgTextMobile) : (n.src = d.imgTextDesktop),
        (n.alt = d.imgAltMobile),
        u.append(n);
      const c = document.createElement('div');
      c.classList.add('kids-div'), r.append(c);
      const a = document.createElement('h2');
      a.classList.add('kids-header'),
        b < 1280 ? (a.innerText = d.titelMobile) : (a.innerText = d.titelDesktop),
        c.append(a);
      const i = document.createElement('button');
      i.classList.add('kids-button'), (i.innerText = d.book), (i.type = 'button'), c.append(i);
      const s = document.createElement('h1');
      s.classList.add('kids-mainHeader'),
        b < 1280 ? (s.innerText = d.mainTitelMobile) : (s.style.display = 'none'),
        c.append(s);
      const e = document.createElement('p');
      e.classList.add('kids-text'),
        b < 1280 ? (e.innerText = d.descriptionMobile) : (e.innerText = d.descriptionDesktop),
        c.append(e);
    });
  } catch (t) {
    console.error(t);
  }
}
async function H() {
  w(), q();
}
async function A() {
  const t = await fetch('/data/movies.json');
  if (!t.ok) throw new Error(`HTTP-error! Status: ${t.status}`);
  const o = await t.json(),
    u = document.querySelector('.movie-container'),
    r = document.createElement('div');
  r.classList.add('modal'),
    (r.innerHTML = `
    <div class="modal-content">
      <i class="close-button fas fa-times"></i>
      <div class="modal-body"></div>
    </div>
  `),
    document.body.appendChild(r);
  const d = document.querySelector('.modal-body');
  document.querySelector('.close-button').addEventListener('click', () => {
    r.style.display = 'none';
  }),
    window.addEventListener('click', (n) => {
      n.target === r && (r.style.display = 'none');
    }),
    o.forEach((n) => {
      const c = document.createElement('div');
      c.classList.add('movie-card'), u.appendChild(c);
      const a = document.createElement('img');
      (a.src = n.Bild), (a.alt = `Bild för ${n.Titel}`), c.appendChild(a);
      const i = document.createElement('h2');
      (i.textContent = n.Titel), c.appendChild(i);
      const s = document.createElement('p');
      (s.textContent = n.Genre),
        c.appendChild(s),
        i.addEventListener('click', (e) => {
          e.stopPropagation(),
            (d.innerHTML = `
        <p><strong>Titel:</strong> ${n.Titel}</p>
        <p><strong>Genre:</strong> ${n.Genre}</p>
        <p><strong>Handling:</strong> ${n.Beskrivning}</p>
        <p><strong>Skådespelare:</strong> ${n.Skådespelare}</p>
        <p><strong>Språk:</strong> ${n.Språk}</p>
        <p><strong>Rating:</strong> ${n.Rating}</p>
        <p><strong>Speltid:</strong> ${n.Längd}</p>
        <p><strong>Rek. ålder:</strong> ${n.RekommenderadAlder}</p>
        <p><strong>Status:</strong> ${n.Label}</p>`),
            (r.style.display = 'block');
        });
    });
}
async function N() {
  const t = await fetch('data/moviesHeadline.json');
  if (!t.ok) throw new Error(`HTTP-error! Status: ${t.status}`);
  const o = await t.json(),
    u = document.querySelector('.movie-headline');
  u.textContent = o.HeadlineText;
}
async function M() {
  N(), A();
}
async function B() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function j() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const o = await B(),
    u = document.querySelector('.info-modal'),
    r = document.querySelector('.info-modal-list'),
    d = document.querySelector('.info');
  if (d) {
    const c = o.sections[0],
      a = document.querySelector('.cinema-title'),
      i = document.querySelector('.cinema-open'),
      s = document.createElement('button');
    (s.innerText = o.buttons[2].text), (a.innerText = c.title), (i.innerText = c.text);
    const e = document.querySelector('.kino-img'),
      l = document.querySelector('.info-2'),
      m = o.sections[1].modal,
      h = m[3].open,
      E = document.createElement('h3'),
      f = document.createElement('p');
    (E.innerText = m[3].title), (f.innerText = m[3].text), (e.src = o.kinoImg.src), (e.alt = o.kinoImg.alt);
    const g = document.createElement('div');
    g.appendChild(E),
      g.appendChild(f),
      g.setAttribute('class', 'open-div'),
      E.setAttribute('class', 'desktop-open-title'),
      f.setAttribute('class', 'desktop-open-paragraph'),
      h.forEach((y) => {
        const C = document.createElement('div'),
          v = document.createElement('p'),
          x = document.createElement('p'),
          k = document.createElement('p');
        C.setAttribute('class', 'open-times'),
          v.setAttribute('class', 'open-times-day'),
          x.setAttribute('class', 'open-times-date'),
          k.setAttribute('class', 'open-times-time'),
          (v.innerText = y.dag),
          (x.innerText = y.datum),
          (k.innerText = y.tid),
          C.appendChild(v),
          C.appendChild(x),
          C.appendChild(k),
          g.appendChild(C);
      }),
      l.prepend(g),
      d.appendChild(l);
  }
  const p = o.sections[1].modal;
  let n = 0;
  p.forEach((c) => {
    if (c.text == null) {
      const a = document.createElement('p');
      a.setAttribute('class', 'modal-title'), (a.innerText = c.title), u.prepend(a);
    } else {
      const a = document.createElement('li'),
        i = document.createElement('p'),
        s = document.createElement('p'),
        e = document.createElement('img');
      a.setAttribute('class', 'modal-item-' + n),
        n++,
        i.setAttribute('class', 'modal-question'),
        s.setAttribute('class', 'modal-answer'),
        e.setAttribute('class', 'modal-open'),
        (i.innerText = c.title),
        (s.innerText = c.text),
        (s.style.display = 'none'),
        (e.src = o.buttons[0].openButton),
        (e.alt = o.buttons[0].alt),
        a.appendChild(e),
        a.appendChild(i),
        e.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = o.buttons[1].closeButton), (e.alt = o.buttons[1].alt), (s.style.display = ''))
              : ((e.src = o.buttons[0].openButton), (e.alt = o.buttons[0].alt), (s.style.display = 'none'));
        }),
        i.addEventListener('click', () => {
          e.classList.toggle('open-button-clicked'),
            e.className === 'modal-open open-button-clicked'
              ? ((e.src = o.buttons[1].closeButton), (e.alt = o.buttons[1].alt), (s.style.display = ''))
              : ((e.src = o.buttons[0].openButton), (e.alt = o.buttons[0].alt), (s.style.display = 'none'));
        }),
        'open' in c
          ? c.open.forEach((l) => {
              const m = document.createElement('p'),
                h = document.createElement('p'),
                E = document.createElement('p'),
                f = document.createElement('div');
              f.setAttribute('class', 'open-times'),
                m.setAttribute('class', 'open-times-day'),
                h.setAttribute('class', 'open-times-date'),
                E.setAttribute('class', 'open-times-time'),
                (m.innerText = l.dag),
                (h.innerText = l.datum),
                (E.innerText = l.tid),
                f.appendChild(m),
                f.appendChild(h),
                f.appendChild(E),
                s.appendChild(f),
                a.appendChild(s),
                r.appendChild(a);
            })
          : (a.appendChild(s), r.appendChild(a));
    }
  });
}
(async function () {
  try {
    const u = await (await fetch('/data/footer.json')).json(),
      r = document.querySelector('.footer-container'),
      d = document.createElement('div');
    d.classList.add('sections-container'),
      u.footer.sections.forEach((a) => {
        const i = document.createElement('section');
        i.classList.add('footer-section');
        const s = document.createElement('h4');
        (s.textContent = a.title), i.append(s);
        const e = document.createElement('ul');
        a.contact
          ? a.contact.forEach((l) => {
              const m = document.createElement('li');
              (m.textContent = `E-post: ${l.mail}`), e.append(m);
              const h = document.createElement('li');
              (h.textContent = `Telefonnummer: ${l.phoneNumber}`), e.append(h);
            })
          : a.links
            ? a.links.forEach((l) => {
                const m = document.createElement('li');
                if (l.icon) {
                  const E = document.createElement('img');
                  (E.src = l.icon), (E.alt = `${l.text || l.name} icon`), E.classList.add('footer-icon'), m.append(E);
                }
                const h = document.createElement('a');
                (h.href = l.url),
                  (h.textContent = l.text || l.name),
                  h.classList.add('footer-a'),
                  m.append(h),
                  e.append(m);
              })
            : a.adress &&
              a.adress.forEach((l) => {
                const m = document.createElement('li');
                (m.textContent = l.street), e.appendChild(m);
                const h = document.createElement('li');
                (h.textContent = l.town), e.appendChild(h);
                const E = document.createElement('li'),
                  f = document.createElement('a');
                (f.href = l.url),
                  (f.textContent = l.findUs),
                  f.classList.add('footer-afind'),
                  E.appendChild(f),
                  e.appendChild(E);
              }),
          i.append(e),
          d.append(i);
      }),
      r.append(d);
    const p = document.createElement('span');
    p.classList.add('footer-logo-p'), r.append(p);
    const n = document.createElement('img');
    (n.src = u.footer.logo), (n.alt = 'Kino Bio Logo'), n.classList.add('footer-logo'), p.append(n);
    const c = document.createElement('p');
    (c.textContent = u.footer.text), c.classList.add('footer-logotext'), p.append(c);
  } catch (o) {
    console.error('error', o);
  }
})();
async function $() {
  const o = await (await fetch('/data/about.json')).json();
  return { mainHeadline: o.aboutUs, headline: o.headline, aboutPage: o.aboutPage };
}
async function I() {
  const { mainHeadline: t, headline: o, aboutPage: u } = await $();
  t && o && u && P(u, o, t);
}
function P(t, o, u) {
  if (!document.querySelector('.about-page')) return;
  const r = document.querySelector('.about-main-header'),
    d = document.createElement('h1');
  (d.textContent = u), r.appendChild(d);
  const p = document.querySelector('.about-header'),
    n = document.createElement('h2');
  (n.textContent = o), p.appendChild(n);
  const c = document.querySelector('.section-1'),
    a = document.createElement('h3');
  a.textContent = t[0].section;
  const i = document.createElement('p');
  (i.textContent = t[0].content), c.appendChild(a), c.appendChild(i);
  const s = document.querySelector('.section-2'),
    e = document.createElement('h3');
  e.textContent = t[1].section;
  const l = document.createElement('p');
  (l.textContent = t[1].content), s.appendChild(e), s.appendChild(l);
  const m = document.querySelector('.section-3'),
    h = document.createElement('h3');
  h.textContent = t[2].section;
  const E = document.createElement('p');
  (E.textContent = t[2].content), m.appendChild(h), m.appendChild(E);
  const f = document.querySelector('.section-4'),
    g = document.createElement('h3');
  g.textContent = t[3].section;
  const y = document.createElement('p');
  (y.textContent = t[3].content), f.appendChild(g), f.appendChild(y);
}
I();
S();
const U = document.querySelector('.article-kids');
U && H();
const G = document.querySelector('.movie-container');
G && M();
(document.querySelector('.info') || document.querySelector('.info-modal')) && j();
