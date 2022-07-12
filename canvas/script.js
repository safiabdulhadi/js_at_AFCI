const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');


const width = 400;
const height = 600;

// paddle
let paddleWidth = 50;
let paddleHeight = 50;

canvas.width = width;
canvas.height = height;

// create a rect
context.fillRect(0,0,width,height);
context.fillStyle = "black";

// Create a paddle top 
context.fillStyle = "white";
context.fillRect(175,10,paddleWidth,paddleHeight);

// Create a paddle bottom
context.fillStyle = "white";
context.fillRect(175,height - 20,paddleWidth, paddleHeight);


