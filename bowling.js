class Bowling {
    
    constructor() {
        this._throws = new Array();
        this._currentThrow = 0;
        this._score = 0;
        this._isFirstThrowOfFrame = true;
    }
    addThrow(pins) {
        this._throws.push(pins);

        if (!this._isFirstThrowOfFrame) {
            this._score += pins + this.getThrow(this._currentThrow - 1);
            this._isFirstThrowOfFrame = true;
        }
        else {
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
}

module.exports = () => {
    return Bowling;
}