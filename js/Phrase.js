/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const phraseList = document.querySelector("#phrase ul");
            const newListItem = document.createElement("li");
            if (this.phrase.charAt(i) !== " ") {
                newListItem.classList = `hide letter ${this.phrase.charAt(i)}`;
                newListItem.innerHTML = `${this.phrase.charAt(i)}`;
                phraseList.appendChild(newListItem);
            } else {
                newListItem.classList = "hide space";
                newListItem.innerHTML = " ";
                phraseList.appendChild(newListItem);
            }
        }
    };
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };
    showMatchedLetter(letter) {
        const letterSelected = letter.textContent;
        const phraseLetters = document.querySelectorAll("li.hide.letter");
        for (let i = 0; i < phraseLetters.length; i++) {
            if (phraseLetters[i] === letterSelected) {
                phraseLetters[i].classList = `show letter ${letterSelected}`;
            }
        }
    }; 
 }