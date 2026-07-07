const form = document.querySelector("#greeting-form");
const input = document.querySelector("#name-input");
const formPanel = document.querySelector("#form-panel");
const resultPanel = document.querySelector("#result-panel");
const greetingTitle = document.querySelector("#greeting-title");
const resetButton = document.querySelector("#reset-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();

  if (!name) {
    input.focus();
    return;
  }

  greetingTitle.textContent = `Privet, ${name}!`;
  formPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
});

resetButton.addEventListener("click", () => {
  input.value = "";
  resultPanel.classList.add("hidden");
  formPanel.classList.remove("hidden");
  input.focus();
});
