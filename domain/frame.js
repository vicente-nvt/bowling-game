class Frame {
    constructor(){
        this._throws = new Array();
        this._score = 0;
    }
    
    addThrow(pins){
        if (this._throws.length === 2)
            throw new Error("It isn't possible to add a third throw");

        this._throws.push(pins);
    }

    getFirstThrow(){
        return this._throws[0];
    }

    getSecondThrow(){
        return this._throws[1];
    }

    isSpare() {
        return this._throws[0] + this._throws[1] === 10;
    }

    isComplete(){
        return !this.isSpare() 
        && this.getFirstThrow() != undefined 
        && this.getSecondThrow() != undefined;
    }
}

module.exports = Frame;