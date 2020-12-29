import checkForWin from "./wincheck";

function addFlag(
  square,
  isGameOver,
  flags,
  bombAmount,
  flagsLeft,
  result,
  squares
) {
  if (isGameOver) return;
  if (!square.classList.contains("checked") && flags < bombAmount) {
    if (!square.classList.contains("flag")) {
      square.classList.add("flag");
      square.innerHTML = "-";
      flags++;
      flagsLeft.innerHTML = bombAmount - flags;
      checkForWin(squares, bombAmount, result, isGameOver);
    } else {
      square.classList.remove("flag");
      square.innerHTML = "";
      flags--;
      flagsLeft.innerHTML = bombAmount - flags;
    }
  }
}

export default addFlag;
