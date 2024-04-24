let expression = ""; // Initialize expression outside the function
let display = document.querySelector('.display');
let buttons = document.querySelectorAll("button");


function getValue(value) {
    if (value === "AC") {
        display.textContent = "";
        expression = ""; // Reset expression when AC button is clicked
    } else if (value === "=") {
   
        // Call the calculate function when equals button is clicked and pass the current expression
        calculate(display.textContent); 
    } else {
        display.textContent += value;
        expression = display.textContent; // Update expression when a value is added to the display
    }
}

function calculate(expression) {
    
    const parts = expression.match(/(\d+|\+|\-|\*|\/)/g);


    let result = parseFloat(parts[0]);

    // Iterate through the parts to perform calculations
    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const nextNumber = parseFloat(parts[i + 1]);

        // Perform calculation based on the operator
        switch (operator) {
            case "+":
                result += nextNumber;
                break;
            case "-":
                result -= nextNumber;
                break;
            case "*":
                result *= nextNumber;
                break;
            case "/":
                // Check for division by zero
                if (nextNumber === 0) {
                    display.textContent = "Error: Division by zero";
                    return; // Exit the function if there's an error
                }
                result /= nextNumber;
                break;
            default:
                display.textContent = "Error: Invalid operator";
                return; // Exit the function if there's an error
        }
    }

    // Display the result on the calculator's display
    display.textContent = result;
}




