var Frame = require("../domain/frame");

class Bowling {
    constructor() {
        this._frames = new Array();
        this._isFirstThrowOfFrame = true;
    }
    
    addThrow(pins) {
        if (this._isFirstThrowOfFrame) {
            this._currentFrame = new Frame();
            this._frames.push(this._currentFrame);
        }

        this._isFirstThrowOfFrame = !this._isFirstThrowOfFrame;

        this._currentFrame.addThrow(pins);
    }

    getScore() {
        var score = 0;
        this._frames.forEach((frame) => {

            if (frame.isSpare() && this.hasNextFrame(frame)){
                score += 10 + this.firstThrowOfNextFrame(frame);
            }
            else if (frame.isComplete()){
                score += frame.getFirstThrow() + frame.getSecondThrow();
            }
        });
        return score;
    }

    firstThrowOfNextFrame(currentFrame) {
        return this._frames[this.indexOfNextFrame(currentFrame)].getFirstThrow();
    }

    indexOfNextFrame(currentFrame) {
        return this._frames.indexOf(currentFrame) + 1;
    }

    hasNextFrame(currentFrame){
        return this._frames[this.indexOfNextFrame(currentFrame)] != undefined;
    }
}

module.exports = Bowling;