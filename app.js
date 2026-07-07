const form = document.querySelector("#greeting-form");
const input = document.querySelector("#name-input");
const formCard = document.querySelector("#form-card");
const resultCard = document.querySelector("#result-card");
const greetingTitle = document.querySelector("#greeting-title");
const resetButton = document.querySelector("#reset-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();

  if (!name) {
    input.focus();
    return;
  }

  greetingTitle.textContent = `Здравствуйте, ${name}!`;
  formCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
});

resetButton.addEventListener("click", () => {
  input.value = "";
  resultCard.classList.add("hidden");
  formCard.classList.remove("hidden");
  input.focus();
});
