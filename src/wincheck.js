function checkForWin(squares, bombAmount, result, isGameOver) {
  let matches = 0;

  for (let i = 0; i < squares.length; i++) {
    if (
      squares[i].classList.contains("flag") &&
      squares[i].classList.contains("bomb")
    ) {
      matches++;
    }
    if (matches === bombAmount) {
      result.innerHTML = "YOU WIN!";
      isGameOver = true;
    }
  }
}

export default checkForWin;
