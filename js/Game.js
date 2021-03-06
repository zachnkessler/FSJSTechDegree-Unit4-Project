/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("hello world"),
            new Phrase("i love democracy"),
            new Phrase("coding is fun"),
            new Phrase("milwaukee wisconsin"),
            new Phrase("i understand nothing")
        ];
        this.activePhrase = null;
     };
     getRandomPhrase() {
        let randomPhraseIndex = Math.floor((Math.random() * 5));
        this.activePhrase = this.phrases[randomPhraseIndex];
        return this.activePhrase;
     };
     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     };
     handleInteraction(key) {
        key.disabled = true;
        if (this.activePhrase.checkLetter(key.textContent) === true) {
            key.classList = "chosen";
            this.activePhrase.showMatchedLetter(key.textContent);
            if (this.checkForWin() === true) {
                this.gameOver(false);
            }
        } else {
            key.classList = "wrong";
            this.removeLife();
        }
    };
     checkForWin() {
        const letterLI = document.querySelectorAll("li.hide.letter");
        if (letterLI.length === 0) {
            return true;
        } else {
            return false;
        }
     };
     removeLife() {
        this.missed++;
        let images = document.querySelector("img[src='images/liveHeart.png']");
        if (this.missed < 5) {
            images.src = "images/lostHeart.png";
        } else if (this.missed === 5) {
            this.gameOver(true);
        }
    };
     gameOver(boolean) {
         const overlay = document.getElementById("overlay");
         overlay.style.display = "block";
         const gameOverMessage = document.getElementById("game-over-message");
         if (boolean === true) {
             gameOverMessage.innerHTML = "Sorry, better luck next time!";
             overlay.classList = "lose";
             this.resetGame();
         } else if (boolean === false) {
             gameOverMessage.innerHTML = "You are a winner!"
             overlay.classList = "win";
             this.resetGame();
         }
     };
     resetGame() {
        let ul = document.querySelector("#phrase ul");
        let letterItems = Array.from(ul.children);
        for (let i = 0; i < letterItems.length; i++) {
            ul.removeChild(letterItems[i]);
        };
        for (let i = 0; i < letterKeys.length; i++) {
            letterKeys[i].disabled = false;
            letterKeys[i].classList = "key";
        };
        let images = document.querySelectorAll("#scoreboard img");
        for (let i = 0; i < images.length; i++) {
            images[i].src = "images/liveHeart.png";
        };
     };
 }