const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const overlayBlur = document.querySelector('.overlay-blur');

// ========================================
// Open the mobile menu
//=========================================

hamburgerBtn.addEventListener('click', () => {
  menuOverlay.classList.add('active');
  overlayBlur.classList.add('active');
});

// ========================================
// Closing the mobile menu
//=========================================

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  overlayBlur.classList.remove('active');
});

// ========================================
// Close mobile menu when clicking outside the overlay, on the blur.
//=========================================

overlayBlur.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  overlayBlur.classList.remove('active');
});
