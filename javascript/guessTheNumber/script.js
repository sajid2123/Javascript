'use strict'

/*
console.log(document.querySelector('.message')
.textContent);

document.querySelector('.message').textContent = 'Correct Number 🥳';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17


document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
*/
let score = 20;
let number;
number = Math.floor(Math.random() * (20 -1) +1)
document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    //If no number selected
    if(!guess){
        document.querySelector('.message').textContent = 'No number selected';

        //When the guess is Higher
    }else if(guess > number){
        if(score > 1){
            document.querySelector('.message').textContent = 'Lower'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0;
        }

        //When the guess is Lower
    }else if(guess < number){
        if(score > 1){
            document.querySelector('.message').textContent = 'Higher'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0;
        } 
        //When player wins
    }else if(guess === number){
        document.querySelector('.message').textContent = 'Correct Number 🥳';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
    }
})
document.querySelector('.again').addEventListener('click', function(){
    score=20;
    number = Math.floor(Math.random() * (20 -1) +1)

    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').value = number;
    document.querySelector('.number').style.width = '15rem';
   
})
