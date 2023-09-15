//Declaring Variables
const numberBtns = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll(".operation-btn");
const clearBtn = document.querySelector(".clr-btn");
const deleteBtn = document.querySelector(".delete-btn");
const equalsBtn = document.querySelector(".equals-btn");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");


const simpleCalculator = (previousOperandTextElement, currentOperandTextElement) => {







//this is the Update display code to display the function that has been called
const updateDisplay = () => {
    currentOperandTextElement.textContent = currentOperand;
    if (operation !== null) {
      previousOperandTextElement.textContent = `${previousOperand} ${operation}`;
    } else {
      previousOperandTextElement.textContent = '';
    }
  };
  return {
    clearScreen,
    appendNumber,
    operationToPerform,
    compute,
    updateDisplay,
  };
};
simpleCalculator(previousOperandTextElement, currentOperandTextElement); //passing argument into the simpleCalculator function