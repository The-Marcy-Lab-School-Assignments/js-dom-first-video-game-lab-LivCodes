let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  // left movement
  if(e.key === 'ArrowLeft' && square.style.left !== `0px`) {
    let leftNum = square.style.left.replace('px', '')
  let newLeft = parseInt(leftNum, 10)
  square.style.left = `${newLeft - 10}px`
  } else if (e.key === 'ArrowRight' && square.style.left !== `300px`) { //right movement
    let rightNum = square.style.left.replace('px', '')
  let newRight = parseInt(rightNum, 10)
  square.style.left = `${newRight + 10}px`
  } else if (e.key === 'ArrowUp' && square.style.top !== `0px`) { //upward movement
    let topNum = square.style.top.replace('px', '')
  let newTop = parseInt(topNum, 10)
  square.style.top = `${newTop - 10}px`
  } else if (e.key === 'ArrowDown' && square.style.top !== `300px`) {  //downward movement
    let downNum = square.style.top.replace('px', '')
  let newDown = parseInt(downNum, 10)
  square.style.top = `${newDown + 10}px`
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