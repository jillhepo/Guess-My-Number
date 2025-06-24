'use strict';
/*
console.log(document.querySelector('.message').textContent);

//Set the content
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

//To get a content
document.querySelector('guess').value = 23;
console.log(document.querySelector('guess').value);
*/

//Giving the game logic
//Define the secret number and the score variable
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

//Refactoring .message as a function
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;  
}

//Event listener
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); //creación de un evento para el botón check
    console.log(guess);

    //Logica del botón check
    if(!guess){
        //document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');
    } else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        //Manipular css con JS
        //Se va cambiar el color de fondo cuando adivinen el número secreto
        document.querySelector('body').style.backgroundColor = '#60b347';
        //Cambiar el tamaño del número al ganar
        document.querySelector('.number').style.width = '30rem'

        //Asignando el valor de highscore
        if(score > highscore){
            highscore = score;
            //Asignando el valor a la etiqueta de html donde se debe mostrar el valor
            document.querySelector('.highscore').textContent = highscore;
        }
    //When guess is wrong!
    } else if(guess !== secretNumber){
        if(score > 1){
            //document.querySelector('.message').textContent = guess > secretNumber ? '↗️ Too High!' : '↘️ Too Low!';
            displayMessage(guess > secretNumber ? '↗️ Too High!' : '↘️ Too Low!');
            //Score decrementa cuando el número no es incorrecto
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            displayMessage('💥 You lose the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

});

//Here is where the code go back to the original values
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = score;

});