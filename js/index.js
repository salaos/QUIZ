console.clear();

const bookmark1 = document.querySelector('[data-js="bookmark-button"]');
// const bookmark2 = document.querySelector('[data-js="bookmark-button2"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');

// Toggle visibility of answer-text and button textContent

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }

  answer.classList.toggle("card__answer--hidden");
});

// Toggle bookmark-backgroundcolor using class

// bookmark1.addEventListener("click", () => {
// });
