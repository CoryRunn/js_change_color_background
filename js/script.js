//Choose a random color
var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['red', 'blue', 'green', 'pink', 'purple', 'orange', 'gray'];

body.style.backgroundColor = 'yellow';
button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    var colorIndex = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

