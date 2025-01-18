document.addEventListener('DOMContentLoaded', () => {
  const u = document.querySelector('.hamburger-btn'),
    e = document.querySelector('.close-btn'),
    m = document.querySelector('.menu-overlay'),
    s = document.querySelector('.overlay-blur');
  u == null ||
    u.addEventListener('click', () => {
      (m.style.display = 'block'), s.classList.add('active');
    }),
    e == null ||
      e.addEventListener('click', () => {
        (m.style.display = 'none'), s.classList.remove('active');
      }),
    s == null ||
      s.addEventListener('click', () => {
        (m.style.display = 'none'), s.classList.remove('active');
      });
});
async function S() {
  return await (await fetch('/data/infoModal.json')).json();
}
async function T() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const e = await S(),
    m = document.querySelector('.info-modal'),
    s = document.querySelector('.info-modal-list'),
    x = document.querySelector('.info');
  if (x) {
    const c = e.sections[0],
      n = document.querySelector('.cinema-title'),
      d = document.querySelector('.cinema-open'),
      o = document.createElement('button');
    (o.innerText = e.buttons[2].text), (n.innerText = c.title), (d.innerText = c.text);
    const t = document.querySelector('.kino-img'),
      r = document.querySelector('.info-2'),
      l = e.sections[1].modal,
      p = l[3].open,
      a = document.createElement('h3'),
      i = document.createElement('p');
    (a.innerText = l[3].title), (i.innerText = l[3].text), (t.src = e.kinoImg.src), (t.alt = e.kinoImg.alt);
    const y = document.createElement('div');
    y.appendChild(a),
      y.appendChild(i),
      y.setAttribute('class', 'open-div'),
      a.setAttribute('class', 'desktop-open-title'),
      i.setAttribute('class', 'desktop-open-paragraph'),
      p.forEach((f) => {
        const b = document.createElement('div'),
          E = document.createElement('p'),
          h = document.createElement('p'),
          v = document.createElement('p');
        b.setAttribute('class', 'open-times'),
          E.setAttribute('class', 'open-times-day'),
          h.setAttribute('class', 'open-times-date'),
          v.setAttribute('class', 'open-times-time'),
          (E.innerText = f.dag),
          (h.innerText = f.datum),
          (v.innerText = f.tid),
          b.appendChild(E),
          b.appendChild(h),
          b.appendChild(v),
          y.appendChild(b);
      }),
      r.prepend(y),
      x.appendChild(r);
  }
  const C = e.sections[1].modal;
  let q = 0;
  C.forEach((c) => {
    if (c.text == null) {
      const n = document.createElement('p');
      n.setAttribute('class', 'modal-title'), (n.innerText = c.title), m.prepend(n);
    } else {
      const n = document.createElement('li'),
        d = document.createElement('p'),
        o = document.createElement('p'),
        t = document.createElement('img');
      n.setAttribute('class', 'modal-item-' + q),
        q++,
        d.setAttribute('class', 'modal-question'),
        o.setAttribute('class', 'modal-answer'),
        t.setAttribute('class', 'modal-open'),
        (d.innerText = c.title),
        (o.innerText = c.text),
        (o.style.display = 'none'),
        (t.src = e.buttons[0].openButton),
        (t.alt = e.buttons[0].alt),
        n.appendChild(t),
        n.appendChild(d),
        t.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (o.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (o.style.display = 'none'));
        }),
        d.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = e.buttons[1].closeButton), (t.alt = e.buttons[1].alt), (o.style.display = ''))
              : ((t.src = e.buttons[0].openButton), (t.alt = e.buttons[0].alt), (o.style.display = 'none'));
        }),
        'open' in c
          ? c.open.forEach((r) => {
              const l = document.createElement('p'),
                p = document.createElement('p'),
                a = document.createElement('p'),
                i = document.createElement('div');
              i.setAttribute('class', 'open-times'),
                l.setAttribute('class', 'open-times-day'),
                p.setAttribute('class', 'open-times-date'),
                a.setAttribute('class', 'open-times-time'),
                (l.innerText = r.dag),
                (p.innerText = r.datum),
                (a.innerText = r.tid),
                i.appendChild(l),
                i.appendChild(p),
                i.appendChild(a),
                o.appendChild(i),
                n.appendChild(o),
                s.appendChild(n);
            })
          : (n.appendChild(o), s.appendChild(n));
    }
  });
}
(document.querySelector('.info') || document.querySelector('.info-modal')) && T();
