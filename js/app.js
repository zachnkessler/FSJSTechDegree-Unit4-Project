/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";

const button = document.getElementById("btn__reset");

button.addEventListener("click", (e) => {
    let game = new Game();
    game.startGame();
})