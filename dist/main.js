const r = document.querySelector('.hamburger-btn'),
  n = document.querySelector('.close-btn'),
  l = document.querySelector('.menu-overlay'),
  t = document.querySelector('.overlay-blur');
r.addEventListener('click', () => {
  l.classList.add('active'), t.classList.add('active');
});
n.addEventListener('click', () => {
  l.classList.remove('active'), t.classList.remove('active');
});
t.addEventListener('click', () => {
  l.classList.remove('active'), t.classList.remove('active');
});
const i = document.querySelectorAll('.modal-open'),
  d = document.querySelectorAll('.modal-question'),
  a = (e, s) => {
    e.classList.toggle('open-button-clicked'),
      e.classList.contains('open-button-clicked')
        ? ((e.src = e.dataset.closeSrc), (e.alt = e.dataset.closeAlt), s.classList.add('active'))
        : ((e.src = e.dataset.openSrc), (e.alt = e.dataset.openAlt), s.classList.remove('active'));
  };
i.forEach((e) => {
  const c = e.closest('li').querySelector('.modal-answer');
  e.addEventListener('click', () => a(e, c));
});
d.forEach((e) => {
  const s = e.closest('li'),
    c = s.querySelector('.modal-open'),
    o = s.querySelector('.modal-answer');
  e.addEventListener('click', () => a(c, o));
});
