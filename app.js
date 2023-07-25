document.getElementById('guess-button').onclick = function() {
    let numberInput = document.getElementById('number-imput').value;
    console.log(numberInput);
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let message;

    if (numberInput == randomNumber) {
        message = "Congratulations! You've guessed correctly.";
    } else {
        message = "Sorry, your guess is incorrect. The correct number was " + randomNumber + ".";
    }

    document.getElementById('message').textContent = message;
};
