var Frame = require("../domain/frame");

describe("Frame tests", () => {

    var frame;

    beforeEach(() => {
        frame = new Frame();
    })

    it("should add the first throw on frame", () => {
        var pinsOfFirstThrow = 5;

        frame.addThrow(pinsOfFirstThrow);

        expect(pinsOfFirstThrow).toBe(frame.getFirstThrow());
    });

    it("should add the second throw on frame", () => {
        var pinsOfSecondThrow = 4;
        var pinsOfFirstThrow = 3;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(pinsOfSecondThrow).toBe(frame.getSecondThrow());
    });

    it("should not be possible to add a third throw", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;
        var pinsOfThirdThrow = 2;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        var act = () => frame.addThrow(pinsOfThirdThrow);

        expect(act).toThrow(new Error("It isn't possible to add a third throw"));
    });

    it("should identify that the frame contains a Spare", () => {
        var isSpare = true;
        var pinsOfFirstThrow = 7;
        var pinsOfSecondThrow = 3;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(isSpare).toBe(frame.isSpare());
    });

    it("should identify that the frame doesn't contains a Spare", () => {
        var isSpare = false;
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(isSpare).toBeFalsy(frame.isSpare());
    });

    it("should identify that the frame is complete", () => {
        var isComplete = true;
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(isComplete).toBeTruthy(frame.isComplete());
    });

    it("should identify that the frame is not complete", () => {
        var isComplete = false;
        var pinsOfFirstThrow = 3;

        frame.addThrow(pinsOfFirstThrow);

        expect(isComplete).toBeFalsy(frame.isComplete());
    });
});
