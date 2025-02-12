function calculateFactorial() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    if (isNaN(number) || number < 0) {
        alert('Please enter a non-negative integer.');
        return;
    }

    let result = factorial(number);
    document.getElementById('result').textContent = `Factorial of ${number} is ${result}.`;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
        // This console.log can be replaced with a breakpoint for observing each step.
        console.log(`Step ${i - 1}: ${result}`);
    }
    return result;
}
