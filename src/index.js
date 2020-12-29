import "./styles.css";
import createBoard from "./creatBoard";

const grid = document.querySelector(".grid");
const flagsLeft = document.querySelector("#flags-left");
const result = document.querySelector("#result");
let width = 10;
let bombAmount = 20;
let flags = 0;
let squares = [];
let isGameOver = false;

createBoard(bombAmount, width, grid, squares, isGameOver, result);
