var Frame = require("../domain/frame");
var Scorer = require("../domain/scorer");

class Bowling {
    constructor() {
        this._frames = new Array();
        this._scorer = new Scorer()
    }
    
    addThrow(pins) {
        this.getFrame().addThrow(pins);
    }

    getFrame() {
        if (this.shouldCreateNewFrame()) {
            this._frames.push(new Frame());
        }

        return this.currentFrame();
    }

    currentFrame(){
        return this._frames[this._frames.length - 1];
    }

    isLastFrame(){
        return this._frames.length == 10;
    }
    
    shouldCreateNewFrame() {
        if (this.currentFrame() == undefined)
            return true;

        if (this.isLastFrame())
            return false;

        return (this.currentFrame().hasTwoThrows() || this.currentFrame().isStrike());
    }

    getScore() {
        return this._scorer.getScore(this._frames);
    }

}

module.exports = Bowling;