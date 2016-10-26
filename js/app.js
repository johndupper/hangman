// fix: answer checks for spaces only
var console, answer;

function showGame() {
    'use strict';
    console.log('call showGame');
}

function isSolutionValid() {
    'use strict';

    if (answer.includes(' ')) {
        console.log('not valid solution');
        return false;
    } else {
        console.log('valid solution');
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
        showGame();
    }
}

// call prepareGame on button click
document.getElementById("solutionButton").addEventListener("click", prepareGame);