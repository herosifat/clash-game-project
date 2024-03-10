// function play(){
// const homeSection = document.getElementById('home-section');
// homeSection.classList.add('hidden');
// // play section
// const playSection = document.getElementById('play-section');
// playSection.classList.remove('hidden');

// }
function EventbuttonHandelar(){
    console.log('button press')
}
document.addEventListener('keyup',EventbuttonHandelar)


function continueGame(){
const Alphabet = getARandomAlphabet();

// set regenareted Alphabet display
const currentAlphabet = document.getElementById('current-text');
currentAlphabet.innerText =Alphabet;

addBacgraoundColor(Alphabet);
}

function play(){
    hideElements('home-section');
    showElements('play-section');
    continueGame()
}