/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const button = document.getElementById("btn__reset");
const letterKeys = document.querySelectorAll(".key");

button.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

for (let i = 0; i < letterKeys.length; i++) {
    letterKeys[i].addEventListener("click", () => {
        game.handleInteraction(letterKeys[i]);
    })
}