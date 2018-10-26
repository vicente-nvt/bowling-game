class Frame {
    constructor() {
        this._throws = new Array();
    }
    
    addThrow(pins) {
        if (this.hasTwoThrows() && !(this.isSpare() || this.isStrike()))
            throw new Error("It isn't possible to add a third throw without a mark");

        this._throws.push(pins);
    }

    getFirstThrow() {
        return this._throws[0];
    }

    getSecondThrow() {
        return this._throws[1];
    }

    getThirdThrow() {
        return this._throws[2];
    }

    isSpare() {
        return this._throws[0] + this._throws[1] === 10;
    }

    hasTwoThrows(){
        return this.getFirstThrow() != undefined 
            && this.getSecondThrow() != undefined;
    }

    isStrike(){
        return this._throws[0] == 10;
    }
}

module.exports = Frame;