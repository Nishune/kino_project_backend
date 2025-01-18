document.addEventListener('DOMContentLoaded', () => {
  const modalButtons = document.querySelectorAll('.modal-open');
  const modalQuestions = document.querySelectorAll('.modal-question');

  const toggleAnswer = (button, answer) => {
    button.classList.toggle('open-button-clicked');
    const isOpen = button.classList.contains('open-button-clicked');

    if (isOpen) {
      button.src = button.dataset.closeSrc;
      button.alt = button.dataset.closeAlt;
      answer.style.display = '';
    } else {
      button.src = button.dataset.openSrc;
      button.alt = button.dataset.openAlt;
      answer.style.display = 'none';
    }
  };

  modalButtons.forEach((button) => {
    const listItem = button.closest('li');
    const answer = listItem.querySelector('.modal-answer');

    button.addEventListener('click', () => toggleAnswer(button, answer));
  });

  modalQuestions.forEach((question) => {
    const listItem = question.closest('li');
    const button = listItem.querySelector('.modal-open');
    const answer = listItem.querySelector('.modal-answer');

    question.addEventListener('click', () => toggleAnswer(button, answer));
  });
});
