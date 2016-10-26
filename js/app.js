// fix: answer checks for spaces only
// fix: enter button for solution input

var console, answer;

function showGame() {
    'use strict';
    console.log('call showGame');
    var i, letter;
    for (i  = 1; i <= answer.length; i += 1) {
        console.log(i);
        letter = document.createElement('input');
        letter.type = 'text';
        letter.className = 'letter';
        letter.id = i;
        document.body.appendChild(letter);
    }
    
}

function isSolutionValid() {
    'use strict';

    if (answer === '' || answer.includes(' ')) {
        console.log('not valid solution');
        answer = '';
        return false;
    } else {
        console.log('valid solution');
        showGame();
        return true;
    }
}



// hide solution input
function prepareGame() {
    'use strict';
    
    answer = document.getElementById('solutionWord').value;
    
    if (isSolutionValid()) {
        document.getElementById('solutionWord').style.display = 'none';
        document.getElementById("solutionButton").style.display = 'none';
    }
}

// call prepareGame on button click
document.getElementById("solutionButton").addEventListener("click", prepareGame);
document.getElementById("solutionButton").addEventListener("keyup", function (event) {
    'use strict';
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("solutionButton").click(prepareGame);
    }
});
