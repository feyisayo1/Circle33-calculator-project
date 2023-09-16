//Declaring Variables
const numberBtns = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll(".operation-btn");
const clearBtn = document.querySelector(".clr-btn");
const deleteBtn = document.querySelector(".delete-btn");
const equalsBtn = document.querySelector(".equals-btn");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");


const simpleCalculator = (previousOperandTextElement, currentOperandTextElement) => {
let previousOperand = "";
let currentOperand = "";
let operation = null;


  const operationToPerform = (selectedOperation) => {
    if (currentOperand === '') {
      return;
    }
    if (previousOperand !== '') {
      compute();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
  }
  operationBtns.forEach(button => (
    button.addEventListener('click', () => {
      operationToPerform(button.textContent);
    })
  ));
    
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
    updateDisplay();
  })
);
equalsBtn.addEventListener("click", () => {
  compute();
  updateDisplay();
});
 const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) {
      return
    }
    switch (operation) {
      case '+':
      computation = prev + current;
      break;
      case '-':
        computation = prev - current;
        break;
        case '*':
          computation = prev * current;
          break;
          case '/':
            computation = prev / current;
            break;
            default: //if none of these signs (+, -, *, /) match our operation, we want to return, to avoid invalid response
              return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
 }

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
