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

    it("should add the third throw on frame", () => {
        var pinsOfFirstThrow = 2;
        var pinsOfSecondThrow = 8;
        var pinsOfThirdThrow = 8;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);
        frame.addThrow(pinsOfThirdThrow);

        expect(pinsOfSecondThrow).toBe(frame.getThirdThrow());
    });

    it("should not be possible to add a third ball if is not a spare or strike", () => {
        var pinsOfFirstThrow = 4;
        var pinsOfSecondThrow = 4;
        var pinsOfThirdThrow = 8;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);
        var act = () => frame.addThrow(pinsOfThirdThrow);

        expect(act).toThrow(new Error("It isn't possible to add a third throw without a mark"));
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

    it("should identify that the frame has two throws", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 4;

        frame.addThrow(pinsOfFirstThrow);
        frame.addThrow(pinsOfSecondThrow);

        expect(frame.hasTwoThrows()).toBeTruthy();
    });

    it("should identify that the frame don't have two throws", () => {
        var pinsOfFirstThrow = 3;

        frame.addThrow(pinsOfFirstThrow);

        expect(frame.hasTwoThrows()).toBeFalsy();
    });

    it("should identify that the frame has a strike", () => {
        pinsOfStrike = 10;

        frame.addThrow(10);

        expect(frame.isStrike()).toBeTruthy();
    });
});
