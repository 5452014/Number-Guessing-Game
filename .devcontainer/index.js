const randomNumber=Math.floor(Math.random()*100)+1

const guesses=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')

const guessField=document.querySelector('.guessField')
const guessSubmit=document.querySelector('.guessSubmit')

let guessCount=1;
let resetButton;

function checkGuess(params) {
    let userGuess=Number(guessField.value)

    if (guessCount === 1) {
        guesses.textContent = 'previous guesses:'
      }
      guesses.textContent = `${guesses.textContent} ${userGuess}`;


    if (userGuess===randomNumber) {
        lastResult.textContent='Congratulation ! you got it Right!'
        lastResult.style.background="green"
        lowOrHi.textContent=''
        setGameOver()
        
    } else if(guessCount===10){
        lastResult.textContent='Game Over!!'
        lowOrHi.textContent = ''
        setGameOver()
    }else{
        lastResult.textContent='Wrong!'
        lastResult.style.background='red'

        if(userGuess>randomNumber){
         lowOrHi.textContent='Too Low! Try Again'

        }else if(userGuess<randomNumber){
            lowOrHi.textContent='Too High! Try Again'
        }
        
    }

guessCount++;
        guessField.value = ''
        guessField.focus()
    
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled=true;
    guessSubmit.disabled=true;

   resetButton=document.createElement('button')
   resetButton.textContent = "Start new Game"
   document.body.append(resetButton)
   resetButton.addEventListener('click', resetGame)
}


function resetGame() {
    guessCount=1;

    const restPara=document.querySelectorAll('.resultParas')

    for (const restPara of restPara) {
        restPara.textContent=""
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled=false;
    guessSubmit.disabled=false;

    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;

}

guesses.textContent = "Where is my paragraph?";
guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";