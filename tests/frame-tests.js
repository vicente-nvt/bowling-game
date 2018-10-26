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

    it("should identify that the frame contains a Spare", () => {
        var pinsOfFirstThrow = 7;
        var pinsOfSecondThrow = 3;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(frame.isSpare()).toBeTruthy();
    });

    it("should identify that the frame doesn't contains a Spare", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(frame.isSpare()).toBeFalsy();
    });

    it("should identify that the frame is complete when have two throws", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(frame.isComplete()).toBeTruthy();
    });

    it("should identify that the frame is complete when have a strike", () => {
        var pinsOfStrike = 10;

        frame.addThrow(pinsOfStrike);

        expect(frame.isComplete()).toBeTruthy();
    })

    it("should identify that the frame is not complete", () => {
        var pinsOfFirstThrow = 3;

        frame.addThrow(pinsOfFirstThrow);

        expect(frame.isComplete()).toBeFalsy();
    });

    it("should identify that the frame has a strike", () => {
        pinsOfStrike = 10;

        frame.addThrow(10);

        expect(frame.isStrike()).toBeTruthy();
    });
});
