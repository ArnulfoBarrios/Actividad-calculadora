let display = document.getElementById('display');
let currentValue = '';
let currentOperator = '';
let previousValue = '';

// Agregar número al display
const addToDisplay = (value) => {
    currentValue += value;
    display.value = currentValue;
};

// Asignar el operador y almacenar el valor previo
const operate = (operator) => {
    if (currentValue === '') return; 
    previousValue = currentValue;
    currentOperator = operator;
    currentValue = '';
};

// Realizar el cálculo
const calculate = () => {
    if (previousValue === '' || currentValue === '') return;
    
    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = `${num1} ${currentOperator} ${num2} = ${result}`;
    currentValue = result.toString();
    previousValue = '';
    currentOperator = '';
};

// Limpiar el display
const clearDisplay = () => {
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    display.value = '';
};
