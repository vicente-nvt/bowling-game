var Frame = require("../domain/frame")();

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
            if (frame.isComplete()){
                score += frame.getFirstThrow() + frame.getSecondThrow();
            }
        });
        return score;
    }
}

module.exports = () => {
    return Bowling;
}