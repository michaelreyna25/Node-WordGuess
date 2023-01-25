const Letter = require("./Letter");

class Word {
	constructor(word) {
		this.word = word;
		this.letters = word.split('').map(letter => new Letter(letter));
	}
	guessLetter(char) {
		let hasGuessedALetter = false
		this.letters.forEach(letter => {
			hasGuessedALetter = letter.guess(char) ? true : hasGuessedALetter
		});
		return hasGuessedALetter;
	}
	guessedCorrectly() {
		return !this.letters.find((letter)=>!letter.guessed)
	}
	toString() {
		return this.letters.map(_=>_.toString())
	}
}

module.exports = Word;
