// function play(){
// const homeSection = document.getElementById('home-section');
// homeSection.classList.add('hidden');
// // play section
// const playSection = document.getElementById('play-section');
// playSection.classList.remove('hidden');

// }
function EventbuttonHandelar(event){
    const playPress =event.key;
    console.log(playPress);

    // expected to press;
    const currentAlphabet = document.getElementById('current-text');
    const currentElement = currentAlphabet.innerText;
   const currentAlphabets =currentElement.toLowerCase();
    console.log(playPress,currentAlphabets);

    // check
    if(playPress===currentAlphabets){
        console.log('you are win');
        console.log('you have press Alphabet',currentAlphabets)

        // set score
        const currentScore = document.getElementById('current-score');
        const currentScoreText = currentScore.innerText;
        const currentElementScore=parseInt(currentScoreText);

        const newScore = currentElementScore +1;

        currentScore.innerText =newScore;



        // continue game
        removebackgraoundColor(currentAlphabets)
        continueGame();

    }
    else{
        console.log('you miss & live miss')

        const lifeScore = document.getElementById('life-score');
        const lifeScoreText =lifeScore.innerText;
        const life =parseInt(lifeScoreText)
    const newScore = life -1;
    lifeScore.innerText =newScore;

    }
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