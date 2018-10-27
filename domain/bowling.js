var Frame = require("../domain/frame");

class Bowling {
    constructor() {
        this._frames = new Array();
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

    shouldCreateNewFrame() {
        if (this.currentFrame() == undefined)
            return true;

        if (this.isLastFrame(this.currentFrame()))
            return false;

        return (this.currentFrame().hasTwoThrows() || this.currentFrame().isStrike());
    }

    getScore() {
        var score = 0;
        this._frames.forEach((frame) => {
            if (this.frameWasStrike(frame)) 
                score += this.scoreStrike(frame);
            else if (this.frameWasSpare(frame))
                score += this.scoreSpare(frame);
            else if (this.wasNormalFrame(frame))
                score += this.scoreNormalFrame(frame);
        });
        return score;
    }

    wasNormalFrame(frame) {
        return frame.hasTwoThrows() && !frame.isStrike() && !frame.isSpare();
    }

    frameWasSpare(frame) {
        return frame.isSpare() && (this.isLastFrame(frame) || this.hasNextFrame(frame));
    }

    frameWasStrike(frame) {
        return frame.isStrike() && (this.isLastFrame(frame) || this.nextFrameIsComplete(frame));
    }

    scoreNormalFrame(frame) {
        return frame.getFirstThrow() + frame.getSecondThrow();
    }

    scoreSpare(frame) {
        return frame.getFirstThrow() + frame.getSecondThrow() + this.getNextBallForSpare(frame);
    }

    scoreStrike(frame) {
        return frame.getFirstThrow() + this.getNextTwoBallsForStrike(frame);
    }

    getNextBallForSpare(frame) {
        if (this.isLastFrame(frame))
            return frame.getThirdThrow();

        return this.nextFrame(frame).getFirstThrow();
    }

    getNextTwoBallsForStrike(frame) {
        if (this.isLastFrame(frame))
            return frame.getSecondThrow() + frame.getThirdThrow();

        if (this.hasNextFrame(frame) && this.nextFrame(frame).isStrike()){
            if (this.isLastFrame(this.nextFrame(frame)))
                return this.nextFrame(frame).getFirstThrow() + this.nextFrame(frame).getSecondThrow();
            else
            return this.nextFrame(frame).getFirstThrow() + this.nextFrame(this.nextFrame(frame)).getFirstThrow();
        }

        return this.nextFrame(frame).getFirstThrow() + this.nextFrame(frame).getSecondThrow();
    }

    nextFrame(currentFrame) {
        return this._frames[this._frames.indexOf(currentFrame) + 1];
    }

    hasNextFrame(currentFrame){
        return this.nextFrame(currentFrame) != undefined;
    }

    nextFrameIsComplete(currentFrame) {
        return this.hasNextFrame(currentFrame) &&
               (this.nextFrame(currentFrame).hasTwoThrows() ||
                this.nextFrame(currentFrame).isStrike());
    }

    isLastFrame(currentFrame) {
        var indexOfLastFrame = 9;
        return this._frames.indexOf(currentFrame) == indexOfLastFrame;
    }
}

module.exports = Bowling;