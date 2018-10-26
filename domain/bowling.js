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

            if (this.isStrike(frame)) 
                score += this.scoreStrike(frame);
            else if (this.isSpare(frame))
                score += this.scoreSpare(frame);
            else if (this.isNormalFrame(frame))
                score += this.scoreNormalFrame(frame);
        });
        return score;
    }

    isNormalFrame(frame) {
        return frame.hasTwoThrows() && !frame.isStrike() && !frame.isSpare();
    }

    isSpare(frame) {
        return frame.isSpare() && (this.hasNextFrame(frame) || this.isLastFrame(frame));
    }

    isStrike(frame) {
        return frame.isStrike() && (this.nextFrameIsComplete(frame) || this.isLastFrame(frame));
    }

    scoreNormalFrame(frame) {
        return frame.getFirstThrow() + frame.getSecondThrow();
    }

    scoreSpare(frame) {
        if (this.isLastFrame(frame))
            return this.sumOfThreeThrowsOfLastFrame(frame);

        return frame.getFirstThrow() + frame.getSecondThrow() + this.firstThrowOfNextFrame(frame);
    }

    scoreStrike(frame) {
        if (this.isLastFrame(frame))
            return this.sumOfThreeThrowsOfLastFrame(frame);

        return frame.getFirstThrow() + this.firstThrowOfNextFrame(frame) + this.secondThrowOfNextFrame(frame);
    }

    sumOfThreeThrowsOfLastFrame(frame){
        return frame.getFirstThrow() + frame.getSecondThrow() + frame.getThirdThrow();
    }

    secondThrowOfNextFrame(currentFrame){
        var nextFrame = this._frames[this.indexOfNextFrame(currentFrame)];
        return nextFrame.isStrike() ? this._frames[this.indexOfNextFrame(nextFrame)].getFirstThrow() : nextFrame.getSecondThrow();
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
        var nextFrame = this._frames[this.indexOfNextFrame(currentFrame)];
        return this.hasNextFrame(currentFrame) && (nextFrame.hasTwoThrows() || nextFrame.isStrike());
    }
    
    isLastFrame(currentFrame) {
        return this._frames.indexOf(currentFrame) == 9;
    }
}

module.exports = Bowling;