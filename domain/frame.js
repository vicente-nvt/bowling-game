class Frame {
    constructor(){
        this._throws = new Array();
    }
    
    addThrow(pins){
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
        return this.isStrike() || (!this.isSpare()
        && this.getFirstThrow() != undefined 
        && this.getSecondThrow() != undefined);
    }

    isStrike(){
        return this._throws[0] == 10;
    }
}

module.exports = Frame;