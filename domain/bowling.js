class Bowling {
    
    constructor() {
        this._throws = new Array();
        this._currentThrow = 0;
        this._score = 0;
        this._isFirstThrowOfFrame = true;
    }
    addThrow(pins) {
        this._throws.push(pins);

        if (!this._isFirstThrowOfFrame && !this.isSpare(this._currentThrow)) {
            this._score += pins + this.getThrow(this._currentThrow - 1);
            this._isFirstThrowOfFrame = true;
        }
        else {
            if (this.isSpare(this._currentThrow -1)) 
                this._score += pins + 10;
            this._isFirstThrowOfFrame = false;
        }

        this._currentThrow++;
    }

    getThrow(throwNumber) {
        return this._throws[throwNumber];
    }

    getScore() {
        return this._score;
    }

    isSpare(numberOfThrow) { 
        return this.getThrow(numberOfThrow - 1) + this.getThrow(numberOfThrow)  === 10;
    };
}

module.exports = () => {
    return Bowling;
}