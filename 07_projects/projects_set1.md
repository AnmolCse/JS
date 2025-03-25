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

