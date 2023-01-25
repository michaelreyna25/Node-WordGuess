class Letter {
	constructor(char){
		this.char = char;
		this.visible = /[^a-z0-9]/i.test(this.char);
		this.guessed = this.visible;
	}
	toString(){
		return this.visible ? this.char : "_"
	}
	guess(letter){
		if(this.char === letter){
			this.guessed = true;
			this.visible = true;
			return true;
		}
		return false;
	}
	getSolution(){
		return this.char;
	}
}

module.exports = Letter;
