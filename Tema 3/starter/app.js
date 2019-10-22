/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

var currentScore = document.querySelector('#score-0').textContent;

//Setting player current scores to 0
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//Setting player total scores to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

console.log(currentScore);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){
    //Add Random Number
    var dice = Math.floor(Math.random()*6) + 1;

    //Display the result

    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //Update the round score If the number rolled is not 1

});


