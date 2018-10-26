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

        if (pins != 10)
            this._isFirstThrowOfFrame = !this._isFirstThrowOfFrame;

        if (this.isLastFrame(this._currentFrame))
            this._isFirstThrowOfFrame = false;

        this._currentFrame.addThrow(pins);
    }

    getScore() {
        var score = 0;
        this._frames.forEach((frame) => {

            if (frame.isStrike() && this.nextFrameIsComplete(frame))
                score += 10 + this.firstThrowOfNextFrame(frame) + this.secondThrowOfNextFrame(frame);
            else if (frame.isSpare() && this.hasNextFrame(frame))
                score += 10 + this.firstThrowOfNextFrame(frame);
            else if (frame.isComplete() && !frame.isStrike())
                score += frame.getFirstThrow() + frame.getSecondThrow();
        });
        return score;
    }

    secondThrowOfNextFrame(currentFrame){
        return this._frames[this.indexOfNextFrame(currentFrame)].getSecondThrow();
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

    nextFrameIsComplete(currentFrame) {
        return this.hasNextFrame(currentFrame) && this._frames[this.indexOfNextFrame(currentFrame)].isComplete();
    }
    
    isLastFrame(currentFrame) {
        return this._frames.indexOf(currentFrame) == 9;
    }
}

module.exports = Bowling;