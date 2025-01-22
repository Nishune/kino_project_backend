const l = document.querySelector('.hamburger-btn'),
  a = document.querySelector('.close-btn'),
  o = document.querySelector('.menu-overlay'),
  c = document.querySelector('.overlay-blur');
l == null ||
  l.addEventListener('click', () => {
    o.classList.add('active'), c.classList.add('active');
  });
a == null ||
  a.addEventListener('click', () => {
    o.classList.remove('active'), c.classList.remove('active');
  });
c == null ||
  c.addEventListener('click', () => {
    o.classList.remove('active'), c.classList.remove('active');
  });
const n = document.querySelectorAll('.modal-open'),
  d = document.querySelectorAll('.modal-question'),
  i = (e, s) => {
    e.classList.toggle('open-button-clicked'),
      e.classList.contains('open-button-clicked')
        ? ((e.src = e.dataset.closeSrc), (e.alt = e.dataset.closeAlt), s.classList.add('active'))
        : ((e.src = e.dataset.openSrc), (e.alt = e.dataset.openAlt), s.classList.remove('active'));
  };
n.forEach((e) => {
  const t = e.closest('li').querySelector('.modal-answer');
  e.addEventListener('click', () => i(e, t));
});
d.forEach((e) => {
  const s = e.closest('li'),
    t = s.querySelector('.modal-open'),
    r = s.querySelector('.modal-answer');
  e.addEventListener('click', () => i(t, r));
});
