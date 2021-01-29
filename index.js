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

sectionOneTitle.innerText = "Feel The Bern!!"
sectionOneTitle.addEventListener("click", function(e) {
  if(e.target === sectionOneTitle) {
    sectionOneTitle.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  }
})

const opponent = document.createElement('div')
const game = document.querySelector("#game")

let random = Math.floor((Math.random() * (250 - 0) + 0)/10 )*10
opponent.style = `top: ${random}px; left: ${random + 50}px;`

game.appendChild(opponent)

opponent.style.display = "block"
opponent.style.height = "50px";
opponent.style.width = "50px";
opponent.style.position = "absolute"
opponent.style.backgroundColor = "white"

document.addEventListener("keydown", () => {
if(square.style.left === opponent.style.left && square.style.top === opponent.style.top) {
  game.removeChild(opponent)
  setInterval(addChild, 4000)
} 
})

function addChild () {
let img = document.createElement("img")
img.src = "https://media.giphy.com/media/uR6JMOFCtLmXkcKOkG/giphy.gif"
let random2 = Math.floor((Math.random() * (250 - 0) + 0)/10 )*10
img.style = `top: ${random2}px; left: ${random2 + 50}px;`
img.style.display = "block"
img.style.height = "50px";
img.style.width = "50px";
img.style.position = "absolute"

game.appendChild(img)
document.addEventListener("keydown", () => {
if(square.style.left === img.style.left && square.style.top === img.style.top) {
  game.removeChild(img)
  setInterval(addChild, 10000)
} 
})
}

