const t = document.querySelector('.hamburger-btn'),
  l = document.querySelector('.close-btn'),
  a = document.querySelector('.menu-overlay'),
  s = document.querySelector('.overlay-blur');
t == null ||
  t.addEventListener('click', () => {
    a.classList.add('active'), s.classList.add('active');
  });
l == null ||
  l.addEventListener('click', () => {
    a.classList.remove('active'), s.classList.remove('active');
  });
s == null ||
  s.addEventListener('click', () => {
    a.classList.remove('active'), s.classList.remove('active');
  });
const i = document.querySelectorAll('.modal-open');
document.querySelectorAll('.modal-question');
const r = (e, c) => {
  e.classList.toggle('open-button-clicked'),
    e.classList.contains('open-button-clicked')
      ? ((e.src = e.dataset.closeSrc), (e.alt = e.dataset.closeAlt), c.classList.add('active'))
      : ((e.src = e.dataset.openSrc), (e.alt = e.dataset.openAlt), c.classList.remove('active'));
};
i.forEach((e) => {
  const o = e.closest('li').querySelector('.modal-answer');
  e.addEventListener('click', () => r(e, o));
});
