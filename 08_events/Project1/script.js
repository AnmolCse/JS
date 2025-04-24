const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let background;

const startChangingColor = function(){
    document.body.style.backgroundColor = randomColor();
}

document.querySelector('#start').addEventListener('click', function () {
    if(!background){
    background = setInterval(startChangingColor, 2000)
    }
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(background)
    background = null
})