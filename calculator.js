document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('first-num');
    const num2Input = document.getElementById('second-num');
    const resultBox = document.getElementById('result');
    const notiBox = document.getElementById('noti');
   
    document.getElementById('add-btn').addEventListener('click', setOperation('+'));
    document.getElementById('sub-btn').addEventListener('click', setOperation('-'));
    document.getElementById('mul-btn').addEventListener('click', setOperation('x'));
    document.getElementById('div-btn').addEventListener('click', setOperation('/'));
    document.getElementById('equal-btn').addEventListener('click', calculate);
    const operationButtons = document.querySelectorAll('.func button');
    operationButtons.forEach(button => {
        button.addEventListener('click', function() {
            operationButtons.forEach(opButton => {
                opButton.classList.remove('clicked');
            });

            button.classList.add('clicked');
        });
    });
function setOperation(op) 
{
    return function () {
            operation = op;
    }
}
function calculate() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        let result = 0;
        
        if (isNaN(num1) || isNaN(num2)) {
            notiBox.textContent = 'Please enter valid numbers!';
            resultBox.textContent = '...';
        }
        else {
            notiBox.textContent = '';
            result='...';
            if (operation === '+') {
                result = num1 + num2;
            } else if (operation === '-') {
                result = num1 - num2;
            } else if (operation === 'x') {
                result = num1 * num2;
            } else if (operation === '/') {
                if (num2 === 0) {
                    notiBox.textContent = 'Division by zero is not allowed!';
                    resultBox.textContent = '...';
                    return;
                } else {
                    result = num1 / num2;
                }
             }
            else{
            notiBox.textContent = 'Please choose operator!';
            }
        resultBox.textContent = `${result}`;
        }
}
    
});