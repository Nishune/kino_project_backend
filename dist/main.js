document.addEventListener('DOMContentLoaded', () => {
  const c = document.querySelector('.hamburger-btn'),
    o = document.querySelector('.close-btn'),
    s = document.querySelector('.menu-overlay'),
    e = document.querySelector('.overlay-blur');
  c == null ||
    c.addEventListener('click', () => {
      s.classList.add('active'), e.classList.add('active');
    }),
    o == null ||
      o.addEventListener('click', () => {
        s.classList.remove('active'), e.classList.remove('active');
      }),
    e == null ||
      e.addEventListener('click', () => {
        s.classList.remove('active'), e.classList.remove('active');
      });
});
document.addEventListener('DOMContentLoaded', () => {
  const c = document.querySelectorAll('.modal-open'),
    o = document.querySelectorAll('.modal-question'),
    s = (e, t) => {
      e.classList.toggle('open-button-clicked'),
        e.classList.contains('open-button-clicked')
          ? ((e.src = e.dataset.closeSrc), (e.alt = e.dataset.closeAlt), t.classList.add('active'))
          : ((e.src = e.dataset.openSrc), (e.alt = e.dataset.openAlt), t.classList.remove('active'));
    };
  c.forEach((e) => {
    const a = e.closest('li').querySelector('.modal-answer');
    e.addEventListener('click', () => s(e, a));
  }),
    o.forEach((e) => {
      const t = e.closest('li'),
        a = t.querySelector('.modal-open'),
        l = t.querySelector('.modal-answer');
      e.addEventListener('click', () => s(a, l));
    });
});
