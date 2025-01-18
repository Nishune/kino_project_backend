document.addEventListener('DOMContentLoaded', () => {
  const c = document.querySelector('.hamburger-btn'),
    l = document.querySelector('.close-btn'),
    s = document.querySelector('.menu-overlay'),
    e = document.querySelector('.overlay-blur');
  c == null ||
    c.addEventListener('click', () => {
      (s.style.display = 'block'), e.classList.add('active');
    }),
    l == null ||
      l.addEventListener('click', () => {
        (s.style.display = 'none'), e.classList.remove('active');
      }),
    e == null ||
      e.addEventListener('click', () => {
        (s.style.display = 'none'), e.classList.remove('active');
      });
});
document.addEventListener('DOMContentLoaded', () => {
  const c = document.querySelectorAll('.modal-open'),
    l = document.querySelectorAll('.modal-question'),
    s = (e, t) => {
      e.classList.toggle('open-button-clicked'),
        e.classList.contains('open-button-clicked')
          ? ((e.src = e.dataset.closeSrc), (e.alt = e.dataset.closeAlt), (t.style.display = ''))
          : ((e.src = e.dataset.openSrc), (e.alt = e.dataset.openAlt), (t.style.display = 'none'));
    };
  c.forEach((e) => {
    const o = e.closest('li').querySelector('.modal-answer');
    e.addEventListener('click', () => s(e, o));
  }),
    l.forEach((e) => {
      const t = e.closest('li'),
        o = t.querySelector('.modal-open'),
        n = t.querySelector('.modal-answer');
      e.addEventListener('click', () => s(o, n));
    });
});
