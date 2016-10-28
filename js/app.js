// fix: answer checks for spaces only
// fix: input doesn't clear back to placeholder
// fix: build the picture in css

var alert, console, answer, guess;

function checkLetter() {
    'use strict';
    
    guess = document.getElementById('userGuess').value;
    
    var i;
    for (i = 0; i < answer.length; i += 1) {
        if (guess === answer.charAt(i)) {
            document.getElementById(i).value = guess;
        }
    }
}



// create game HTML elements
function createGameHTML() {
    'use strict';
    
    var i, attr, letter, userGuess, checkButton;
    
    for (i  = 0; i < answer.length; i += 1) {
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
    attr = document.createAttribute('maxlength');
    attr.value = '1';
    userGuess.setAttributeNode(attr);
    userGuess.addEventListener('keyup', function (keyboard) {
        if (keyboard.keyCode === 13) {
            checkLetter();
        }
    });
    document.body.appendChild(userGuess);
    
    checkButton = document.createElement('input');
    checkButton.type = 'submit';
    checkButton.id = 'checkButton';
    checkButton.value = 'Survey Says...';
    checkButton.addEventListener('click', checkLetter);
    document.body.appendChild(checkButton);
}

// hide solution input
function prepareGame() {
    'use strict';
    
    answer = document.getElementById('solutionWord').value.toLowerCase();
    
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