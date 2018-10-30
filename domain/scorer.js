class Scorer {

    getScore(frames, frameNumber) {
        this._frames = frames;
        var score = 0;

        for (var frameIndex = 0; frameIndex < frameNumber; frameIndex++){
            var frame = frames[frameIndex];

            if (this.wasStrike(frame)) 
                score += this.scoreStrike(frame);
            else if (this.wasSpare(frame))
                score += this.scoreSpare(frame);
            else if (this.wasNormal(frame))
                score += this.scoreNormalFrame(frame);
        }

        return score;
    }

    wasStrike(frame) {
        return frame.isStrike() && (this.isLastFrame(frame) || this.nextFrameIsComplete(frame));
    }

    scoreStrike(frame) {
        return frame.getFirstThrow() + this.getNextTwoBallsForStrike(frame);
    }

    getNextTwoBallsForStrike(frame) {
        if (this.isLastFrame(frame))
            return frame.getSecondThrow() + frame.getThirdThrow();

        if (!this.hasNextFrame(frame))
            return 0;

        if (this.nextFrame(frame).isStrike() && !this.isLastFrame(this.nextFrame(frame)))
            return this.nextFrame(frame).getFirstThrow() + this.nextFrame(this.nextFrame(frame)).getFirstThrow();

        return this.nextFrame(frame).getFirstThrow() + this.nextFrame(frame).getSecondThrow();
    }

    wasSpare(frame) {
        return frame.isSpare() && (this.isLastFrame(frame) || this.hasNextFrame(frame));
    }

    scoreSpare(frame) {
        return frame.getFirstThrow() + frame.getSecondThrow() + this.getNextBallForSpare(frame);
    }

    getNextBallForSpare(frame) {
        if (this.isLastFrame(frame))
            return frame.getThirdThrow();

        return this.nextFrame(frame).getFirstThrow();
    }

    wasNormal(frame) {
        return frame.hasTwoThrows() && !frame.isStrike() && !frame.isSpare();
    }

    scoreNormalFrame(frame) {
        return frame.getFirstThrow() + frame.getSecondThrow();
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
        return this._frames.indexOf(currentFrame) == 9;
    }
}

module.exports = Scorer;