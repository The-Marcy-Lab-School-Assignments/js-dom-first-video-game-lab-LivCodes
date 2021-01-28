let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  // left movement
  if(e.key === 'ArrowLeft') {
    let leftNum = square.style.left.replace('px', '')
  let newLeft = parseInt(leftNum, 10)
  square.style.left = `${newLeft - 10}px`
  } else if (e.key === 'ArrowRight') { //right movement
    let rightNum = square.style.left.replace('px', '')
  let newRight = parseInt(rightNum, 10)
  square.style.left = `${newRight + 10}px`
  } else if (e.key === 'ArrowUp') { //upward movement
    let topNum = square.style.top.replace('px', '')
  let newTop = parseInt(topNum, 10)
  square.style.top = `${newTop - 10}px`
  } else if (e.key === 'ArrowDown') {  //downward movement
    let downNum = square.style.top.replace('px', '')
  let newDown = parseInt(downNum, 10)
  square.style.top = `${newDown + 10}px`
  };


});

