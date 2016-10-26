// fix: answer checks for spaces only
// fix: input doesn't clear back to placeholder

var alert, console, answer;

// create game HTML elements
function createGameHTML() {
    'use strict';
    
    var i, letter, checkButton, userGuess;
    
    for (i  = 1; i <= answer.length; i += 1) {
        letter = document.createElement('input');
        letter.type = 'text';
        letter.className = 'letter';
        letter.id = i;
        letter.value = '';
        letter.placeholder = '__';
        letter.readOnly = true;
        document.body.appendChild(letter);
    }
    
    userGuess = document.createElement('input');
    userGuess.type = 'text';
    userGuess.id = 'userGuess';
    document.body.appendChild(userGuess);
    
    checkButton = document.createElement('input');
    checkButton.type = 'submit';
    checkButton.id = 'checkButton';
    checkButton.value = 'Survey Says...';
    document.body.appendChild(checkButton);
}

// hide solution input
function prepareGame() {
    'use strict';
    
    answer = document.getElementById('solutionWord').value;
    
    if (answer === '' || answer.includes(' ')) {
        answer = '';
        alert('Please enter a valid word');
    } else {
        document.getElementById('solutionWord').style.display = 'none';
        document.getElementById('solutionButton').style.display = 'none';
        createGameHTML();
    }
}

// call prepareGame on button click or return key
document.getElementById('solutionButton').addEventListener('click', prepareGame);
document.getElementById('solutionWord').addEventListener('keyup', function (keyboard) {
    'use strict';
    if (keyboard.keyCode === 13) {
        prepareGame();
    }
});