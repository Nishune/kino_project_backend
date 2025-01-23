const modalButtons = document.querySelectorAll('.modal-open');
const modalQuestions = document.querySelectorAll('.modal-question');

// ========================================
// toggleAnswer handles the opening and closing of the faq-modal.
// If isopen it changes img to a "close btn", else its the "open-btn" img.
//=========================================

const toggleAnswer = (button, answer) => {
  button.classList.toggle('open-button-clicked');
  const isOpen = button.classList.contains('open-button-clicked');

  if (isOpen) {
    button.src = button.dataset.closeSrc;
    button.alt = button.dataset.closeAlt;
    answer.classList.add('active');
  } else {
    button.src = button.dataset.openSrc;
    button.alt = button.dataset.openAlt;
    answer.classList.remove('active');
  }
};

// ========================================
// Loops through all the modal buttons and add an eventlistener to toggle their answers.
//=========================================

modalButtons.forEach((button) => {
  const listItem = button.closest('li');
  const answer = listItem.querySelector('.modal-answer');
  button.addEventListener('click', () => toggleAnswer(button, answer));
});

// ========================================
// Allows clicking the question text to toggle the answers next to the button.
//=========================================

modalQuestions.forEach((question) => {
  const listItem = question.closest('li');
  const button = listItem.querySelector('.modal-open');
  const answer = listItem.querySelector('.modal-answer');
  question.addEventListener('click', () => toggleAnswer(button, answer));
});
