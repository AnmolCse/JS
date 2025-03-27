# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target){
      case grey:
        body.style.backgroundColor = e.target.id;
      
      case white:
        body.style.backgroundColor = e.target.id;

      case blue:
        body.style.backgroundColor = e.target.id;

      case yellow:
        body.style.backgroundColor = e.target.id;
    }
  })
})

```

## Project 2 Solution
``` javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  let height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `Please enter a valid height value ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `Please enter a valid weight value ${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }
})

```

## Project 3 Solution 

``` javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## Project 4 Solution

``` javascript

const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(Guess)
  })
}

function validateGuess(guess){
  if(NaN(guess)){
    alert('Please enter a valid Number')
  }else if(guess < 1){
    alert('Please enter a number more than 0')
  }else if(guess > 100){
    alert('Please enter a number less than 101')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage(`You guessed it right.`)
  }
  else if(guess < randomNumber){
    displayMessage(`You guess was TOO low.`)
  }
  else if(guess > randomNumber){
    displayMessage(`You guessed was TOO high.`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  remaining.innerHTML = `${12 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(message){
  userInput.value = ''
  userInput.setAttribute = ('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`
  startOver.append(p)
  playGame = false
  newGame()
}

function newGame(message){
  //
}

```