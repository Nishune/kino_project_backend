document.addEventListener('DOMContentLoaded', () => {
  const n = document.querySelector('.hamburger-btn'),
    e = document.querySelector('.close-btn'),
    d = document.querySelector('.menu-overlay'),
    a = document.querySelector('.overlay-blur');
  n == null ||
    n.addEventListener('click', () => {
      (d.style.display = 'block'), a.classList.add('active');
    }),
    e == null ||
      e.addEventListener('click', () => {
        (d.style.display = 'none'), a.classList.remove('active');
      }),
    a == null ||
      a.addEventListener('click', () => {
        (d.style.display = 'none'), a.classList.remove('active');
      });
});
async function g() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function v() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const e = await g(),
    d = document.querySelector('.info-modal'),
    a = document.querySelector('.info-modal-list'),
    b = document.querySelector('.info');
  if (b) {
    const s = e.sections[0],
      o = document.querySelector('.cinema-title'),
      m = document.querySelector('.cinema-open'),
      c = document.createElement('button');
    (c.innerText = e.buttons[2].text), (o.innerText = s.title), (m.innerText = s.text);
    const t = document.querySelector('.kino-img'),
      u = document.querySelector('.info-2'),
      l = e.sections[1].modal,
      p = l[3].open,
      r = document.createElement('h3'),
      i = document.createElement('p');
    (r.innerText = l[3].title), (i.innerText = l[3].text), (t.src = e.kinoImg.src), (t.alt = e.kinoImg.alt);
    const h = document.createElement('div');
    h.appendChild(r),
      h.appendChild(i),
      h.setAttribute('class', 'open-div'),
      r.setAttribute('class', 'desktop-open-title'),
      i.setAttribute('class', 'desktop-open-paragraph'),
      p.forEach((y) => {
        const C = document.createElement('div'),
          x = document.createElement('p'),
          S = document.createElement('p'),
          q = document.createElement('p');
        C.setAttribute('class', 'open-times'),
          x.setAttribute('class', 'open-times-day'),
          S.setAttribute('class', 'open-times-date'),
          q.setAttribute('class', 'open-times-time'),
          (x.innerText = y.dag),
          (S.innerText = y.datum),
          (q.innerText = y.tid),
          C.appendChild(x),
          C.appendChild(S),
          C.appendChild(q),
          h.appendChild(C);
      }),
      u.prepend(h),
      b.appendChild(u);
  }
  const f = e.sections[1].modal;
  let E = 0;
  f.forEach((s) => {
    if (s.text == null) {
      const o = document.createElement('p');
      o.setAttribute('class', 'modal-title'), (o.innerText = s.title), d.prepend(o);
    } else {
      const o = document.createElement('li'),
        m = document.createElement('p'),
        c = document.createElement('p'),
        t = document.createElement('img');
      o.setAttribute('class', 'modal-item-' + E),
        E++,
        m.setAttribute('class', 'modal-question'),
        c.setAttribute('class', 'modal-answer'),
        t.setAttribute('class', 'modal-open'),
        (m.innerText = s.title),
        (c.innerText = s.text),
        (c.style.display = 'none'),
        (t.src = e.buttons[0].openButton),
        (t.alt = e.buttons[0].alt),
        o.appendChild(t),
        o.appendChild(m),
        t.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (c.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (c.style.display = 'none'));
        }),
        m.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (c.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (c.style.display = 'none'));
        }),
        'open' in s
          ? s.open.forEach((u) => {
              const l = document.createElement('p'),
                p = document.createElement('p'),
                r = document.createElement('p'),
                i = document.createElement('div');
              i.setAttribute('class', 'open-times'),
                l.setAttribute('class', 'open-times-day'),
                p.setAttribute('class', 'open-times-date'),
                r.setAttribute('class', 'open-times-time'),
                (l.innerText = u.dag),
                (p.innerText = u.datum),
                (r.innerText = u.tid),
                i.appendChild(l),
                i.appendChild(p),
                i.appendChild(r),
                c.appendChild(i),
                o.appendChild(c),
                a.appendChild(o);
            })
          : (o.appendChild(c), a.appendChild(o));
    }
  });
}
async function A() {
  const e = await (await fetch('/data/about.json')).json();
  return { mainHeadline: e.aboutUs, headline: e.headline, aboutPage: e.aboutPage };
}
async function T() {
  const { mainHeadline: n, headline: e, aboutPage: d } = await A();
  n && e && d && k(d, e, n);
}
function k(n, e, d) {
  if (!document.querySelector('.about-page')) return;
  const a = document.querySelector('.about-main-header'),
    b = document.createElement('h1');
  (b.textContent = d), a.appendChild(b);
  const f = document.querySelector('.about-header'),
    E = document.createElement('h2');
  (E.textContent = e), f.appendChild(E);
  const s = document.querySelector('.section-1'),
    o = document.createElement('h3');
  o.textContent = n[0].section;
  const m = document.createElement('p');
  (m.textContent = n[0].content), s.appendChild(o), s.appendChild(m);
  const c = document.querySelector('.section-2'),
    t = document.createElement('h3');
  t.textContent = n[1].section;
  const u = document.createElement('p');
  (u.textContent = n[1].content), c.appendChild(t), c.appendChild(u);
  const l = document.querySelector('.section-3'),
    p = document.createElement('h3');
  p.textContent = n[2].section;
  const r = document.createElement('p');
  (r.textContent = n[2].content), l.appendChild(p), l.appendChild(r);
  const i = document.querySelector('.section-4'),
    h = document.createElement('h3');
  h.textContent = n[3].section;
  const y = document.createElement('p');
  (y.textContent = n[3].content), i.appendChild(h), i.appendChild(y);
}
T();
(document.querySelector('.info') || document.querySelector('.info-modal')) && v();
