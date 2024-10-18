function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operator) {
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
            result = num2 !== 0 ? num1 / num2 : "Error: dividing by 0!";
            break;
        case '%':
            result = num1 % num2;
            break;
        case 'square':
            result = num1 * num1;
            break;

    }

    document.getElementById("calcResult").textContent = result;
}