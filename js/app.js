function test() {
    'use strict';
}
test();

// create text inputs
function addInputs() {
    'use strict';
    var i, textBox;
    for (i = 1; i < 5; i += 1) {
        textBox = document.createElement('input');
        textBox.setAttribute('type', 'text');
        textBox.id = "textbox" + i;
        textBox.addEventListener('onkeyup', test());
        document.body.appendChild(textBox);
        console.log(textBox.id);
    }
}
addInputs();