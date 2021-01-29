let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(e) {
  // console.log(e.key)
  // left movement
  const moveLeft = square.offsetLeft
  const moveTop = square.offsetTop
  if(e.key === 'ArrowLeft' && square.style.left !== `0px`) {
    let move = (moveLeft - 10) + "px"
    square.style.left = move
  } else if (e.key === 'ArrowRight' && square.style.left !== `300px`) { //right movement
    let move = (moveLeft + 10) + "px"
    square.style.left = move
  } else if (e.key === 'ArrowUp' && square.style.top !== `0px`) { //upward movement
    let move = (moveTop - 10) + "px"
    square.style.top = move
  } else if (e.key === 'ArrowDown' && square.style.top !== `300px`) {  //downward movement
    let move = (moveTop + 10) + "px"
    square.style.top = move
  };


});

document.addEventListener("click", function(a) {
  if(a.target === square) {
    let randomNum = Math.floor(Math.random() * 255)
    let randomNum1 = Math.floor(Math.random() * 255)
    let randomNum2 = Math.floor(Math.random() * 255)
    square.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum})`
  }
})
const rootBody = document.body
rootBody.style.backgroundColor = "#002147"


const sectionOne = document.createElement('div')
const sectionOneTitle = document.createElement('h1')

rootBody.appendChild(sectionOne)
sectionOne.append(sectionOneTitle)

sectionOneTitle.innerText = "Square Up!!"
sectionOneTitle.addEventListener("click", function(e) {
  if(e.target === sectionOneTitle) {
    sectionOneTitle.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  }
})

const opponent = document.createElement('div')
const game = document.querySelector("#game")

let random = Math.floor(Math.random() * 250)*10
let randomPosition = opponent.style = `top: ${random}px; left: ${random + 50}px;`

game.appendChild(opponent)
opponent.style.display = "block"
opponent.style = randomPosition
opponent.style.height = "50px";
opponent.style.width = "50px";
opponent.style.position = "absolute"
opponent.style.backgroundColor = "white"






/**
 *### Bonus Feature
* Create a button "Generate Opponent". 
As a user, I can click on this button in order 
to spawn a white "opponent" square somewhere 
randomly inside the black box. If I move my 
square and it collides with this opponent square, 
then the opponent will be removed. 
* You can decide if multiple opponent squares 
are allowed at the same time, or if only one 
opponent can exist at once!
 */