document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const menuOverlay = document.querySelector('.menu-overlay');
  const overlayBlur = document.querySelector('.overlay-blur');

  hamburgerBtn?.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    overlayBlur.classList.add('active');
  });

  closeBtn?.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    overlayBlur.classList.remove('active');
  });

  overlayBlur?.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    overlayBlur.classList.remove('active');
  });
});
