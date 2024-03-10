function hideElements (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElements (elementId){
const element = document.getElementById(elementId);
element.classList.remove('hidden');
}

function addBacgraoundColor(elementId){
const element = document.getElementById(elementId)
element.classList.add('bg-red-500')
}

function getARandomAlphabet (){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    // console.log(alphabets);


    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);
    

    const alphabet =alphabets[index];
    console.log(index, alphabet);
    return alphabet;

}