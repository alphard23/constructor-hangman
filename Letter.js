function Letter(crt) {
    this.character = crt;
    this.guessed = false;

    this.showTheLetters = function() {
        if (this.guessed) {
            return this.guessed;
        } else if (this.character === " ") {
            this.guessed = true;
            return this.character;
        } else {
            return "_ ";
        }
    }
    this.thisIsRight = function(guess) {
        if (guess === this.character) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;