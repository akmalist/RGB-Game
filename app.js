let colors = generateRandomColor(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.getElementById("message");
let h1= document.querySelector("h1");
let resetButton= document.getElementById("reset");

resetButton.addEventListener("click",function(){
   //pick a new random color from array 
  colors = generateRandomColor(6);
  pickedColor = pickColor(); 
  //change colorDisplay to match picked Color
  colorDisplay.textContent=pickedColor;
    h1.style.background ="#3c4f65";
   

    //change colors of squares 
    for (i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
  };

  
  
});

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  
  
  squares[i].addEventListener("click", function() {
    let clickedColor= this.style.backgroundColor;

    if (clickedColor === pickedColor) {
    
      messageDisplay.textContent = "Correct! You did It!!!";
     
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent= "Play Again?"
 
    } else {
        this.style.backgroundColor = "#3c4f65";
        messageDisplay.textContent = "Oops,close! Try again";
     
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
