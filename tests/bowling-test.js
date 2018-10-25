var Bowling = require("../domain/bowling")();

describe("Bowling tests", () => {
    
    var game;

    beforeEach(() => {
        game = new Bowling();
    })

    it("should be possible to throw a ball", () => {
        var pinsKnockedDown = 4;

        game.addThrow(pinsKnockedDown);

        expect(pinsKnockedDown).toBe(game.getThrow(0));
    });

    it("should return the score of two throws without a mark", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 1;
        var scoreExpected = 4;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);

        expect(scoreExpected).toBe(game.getScore());
    });

    it("should return the score for completed frames", () => {
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 1;
        var pinsOfThirdThrow = 9;
        var scoreExpected = 4;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);
        game.addThrow(pinsOfThirdThrow);

        expect(scoreExpected).toBe(game.getScore());
    });

    it("should return the score for a spare only when the next ball is thrown", () => {
        var scoreExpected = 0;
        var pinsOfFirstThrow = 9;
        var pinsOfSecondThrow = 1;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);

        expect(scoreExpected).toBe(game.getScore());
    });

    it("should return the score for a spare after the next ball is thrown", () => {
        var scoreExpected = 13;
        var pinsOfFirstThrow = 9;
        var pinsOfSecondThrow = 1;
        var pinsOfThirdThrow = 3;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);
        game.addThrow(pinsOfThirdThrow);

        expect(scoreExpected).toBe(game.getScore());
    })
});