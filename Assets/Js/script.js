var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumberWrapper.innerHTML > 10) {
        window.alert("O limite máximo foi atingido!");
        currentNumber = 10
        currentNumberWrapper.innerHTML = currentNumber;
   
    }
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumberWrapper.innerHTML < 0) {
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}