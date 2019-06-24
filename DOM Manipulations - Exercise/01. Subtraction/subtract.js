function subtract() {
    let result = document.querySelector("#result");
    let firstNumber = +document.querySelector("#firstNumber").value;
    let secondNumber = +document.querySelector("#secondNumber").value;

    result.textContent = firstNumber - secondNumber;
}