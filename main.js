// word konami
// empty array to track the keys user will press
const pressed = [];
// secret code to match
const secretCode = 'konami';

window.addEventListener('keyup', function(e) {
    // push every key pressed by user into pressed
    pressed.push(e.key);
    // cutting the array of pressed to only include the most recent
    // pressed keys, up until the length of the secret code
    // if pressed.length < secretCode.length, no cutting will be done
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        doSpecialThing();
    }
});

// object of keys involved in konami code
const konamiKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the classic konami
const konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// position variable for markng which point of the sequence we are at
let konamiIndex = 0;

document.addEventListener('keyup', function(e) {
    // get the value of the key code from the key map
    const key = konamiKeys[e.keyCode];
    // get the value of the required key from the konami code
    const keyNeeded = konami[konamiIndex];
    // compare the key with the required key
    if (key == keyNeeded) {
        konamiIndex++;
        // if at the end of sequence, do your KONAMI ACTION
        if (konamiIndex == konami.length) {
            doSpecialThing();
            konamiIndex = 0; // reset konami code index
        }
    } else {
        konamiIndex = 0; // reset konami code index
    }
});

const doSpecialThing = () => {
    document.body.style.backgroundImage = "url('images/cheatBackground.png')";

    var audio = new Audio('audio/pling.mp3');
    audio.play();

    alert("doing special thing");
}


$(function () {
    $('a').smoothScroll();
});