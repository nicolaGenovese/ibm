
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operations and store results in an object
        const results = performAllOperations(num1, num2);

        // Display the results
        displayAllResults(results);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function performAllOperations(a, b) {
    debugger; // Pause execution for debugging

    return {
        multiplication: a * b,
        addition: a + b,
        division: a / b
    };
}

function displayAllResults(results) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The results are:\n`;
    resultElement.textContent += `- Multiplication: ${results.multiplication}\n`;
    resultElement.textContent += `- Addition: ${results.addition}\n`;
    resultElement.textContent += `- Division: ${results.division}\n`;
}


function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
