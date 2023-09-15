let previousOperand = "";
let currentOperand = "";
let operation = null;

const clearScreen = () => {
  previousOperand = "";
  currentOperand = "";
  operation = null;
};
clearBtn.addEventListener("click", () => {
  clearScreen();
  updateDisplay();
});

const singleDelete = () => {
  currentOperand = currentOperand.toString().slice(0, -1);
};
deleteBtn.addEventListener("click", () => {
  singleDelete();
  updateDisplay();
});

const appendNumber = (number) => {
  if (number === "." && currentOperand.includes(".")) {
    return;
  }
  currentOperand = currentOperand.toString() + number.toString();
};
numberBtns.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
    console.log("clicked");
    updateDisplay();
  })
);
