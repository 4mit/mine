import gameOver from "./gameOver";
import checkSquare from "./checkSquare";

function click(square, isGameOver, result, squares, width) {
  let currentId = square.id;
  if (isGameOver) return;
  if (square.classList.contains("checked") || square.classList.contains("flag"))
    return;
  if (square.classList.contains("bomb")) {
    gameOver(square, result, isGameOver, squares);
  } else {
    let total = square.getAttribute("data");
    if (total != 0) {
      square.classList.add("checked");
      if (total == 1) square.classList.add("one");
      if (total == 2) square.classList.add("two");
      if (total == 3) square.classList.add("three");
      if (total == 4) square.classList.add("four");
      square.innerHTML = total;
      return;
    }
    checkSquare(square, currentId, width, squares);
  }
  square.classList.add("checked");
}

export default click;
