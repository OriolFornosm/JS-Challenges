/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();

//Setup the roll dice btn and function
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
         //Add Random Number
        var dice = Math.floor(Math.random()*6) + 1;

        //Display the result
        var diceDOM = document.querySelector('.dice');
        document.querySelector('.dice').style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        //Update the round score If the number rolled is not 1
        if (dice !== 1){
            //Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //If player rolls a 1 -> Activate the next player function
            nextPlayer();
        
        }

    }
   
});

//Setup the Hold btn function
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add the current score to the players total score
        scores[activePlayer] += roundScore;
        //Update the UI to show the total players score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //Check if player won the game
        
        if (scores[activePlayer] >= 100) {
            //Show winner message on UI
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            //Set the gamePlaying variable to false, as the game will end here.
            gamePlaying = false;
        } else {
        //If player clicks hold -> Activate the next player function
        nextPlayer();
        
        }

    }
    
    
});

//Setup of the inital function
function init (){
    
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    var currentScore = document.querySelector('#score-0').textContent;

    //Setting player round scores to 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //Setting player total scores to 0
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    //Hide the dice from showing
    document.querySelector('.dice').style.display = 'none';
    //Restore the name of the players
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //Remove the winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Remove active player UI
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

function nextPlayer() {

            //Next Player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //? sign equals if and : equals else
        
            // Set roundscore back to 0
            roundScore = 0;
            //UI sets to 0 too
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
    
            //Chaging the UI to show the active player
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            //Hide the dice when player changes
            document.querySelector('.dice').style.display = 'none';

}

//New Game btn event
document.querySelector('.btn-new').addEventListener('click', init);


