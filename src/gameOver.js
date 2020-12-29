function gameOver(square, result, isGameOver, squares) {
  result.innerHTML = "Game Over!";
  isGameOver = true;

  //show ALL the bombs
  squares.forEach((square) => {
    if (square.classList.contains("bomb")) {
      square.innerHTML = "@";
      square.classList.remove("bomb");
      square.classList.add("checked");
    }
  });
}

export default gameOver;
