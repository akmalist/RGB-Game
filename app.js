//jshint esversion:6

let numSquares =6;
let colors = generateRandomColor(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.getElementById("message");
let h1= document.querySelector("h1");
let resetButton= document.getElementById("reset");
let modeButtons =document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
		this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
    reset();
  });
}

function reset(){
  //pick a new random color from array
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent=pickedColor;
  resetButton.textContent="New Colors?";
  messageDisplay.textContent = "";
  //change colors of squares
  for (let i=0; i<squares.length; i++){
  if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    }else{
      squares[i].style.display="none";
    }
  }
  h1.style.background ="steelBlue";

}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares=3;
//   colors=generateRandomColor(numSquares);
//   pickedColor=pickColor();
//   colorDisplay.textContent=pickedColor;
//   for(let i=0; i<squares.length; i++){
//
//     if(colors[i]){
//       squares[i].style.backgroundColor=colors[i];
//     }else{
//       squares[i].style.display="none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//  easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares=6;
//    colors=generateRandomColor(numSquares);
//   pickedColor=pickColor();
//   colorDisplay.textContent=pickedColor;
//   for(let i=0; i<squares.length; i++){
//
//       squares[i].style.backgroundColor=colors[i];
//
//       squares[i].style.display="block";
//
//   }
//
// });


resetButton.addEventListener("click",function(){
  reset();

});

colorDisplay.textContent=pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let clickedColor= this.style.backgroundColor;

    if (clickedColor === pickedColor) {

      messageDisplay.textContent = "Correct! You did It!!!";

      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent= "Play Again?";

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
