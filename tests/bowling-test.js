var Bowling = require("../domain/bowling");

describe("Bowling tests", () => {
    
    var game;

    beforeEach(() => {
        game = new Bowling();
    })

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

    it("should not return the score for a spare when the next ball is not thrown yet", () => {
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
    });

    it("should not return the score for a strike when both next balls are not thrown yet", () => {
        var scoreExpected = 4;
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 1;
        var pinsOfFourthThrow = 4;
        var pinsOfStrike = 10;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);
        game.addThrow(pinsOfStrike);
        game.addThrow(pinsOfFourthThrow);

        expect(scoreExpected).toBe(game.getScore());
    });

    it ("should return the score for a strike", () => {
        var scoreExpected = 32;
        var pinsOfFirstThrow = 3;
        var pinsOfSecondThrow = 1;
        var pinsOfFourthThrow = 4;
        var pinsOfFifthThrow = 5;
        var pinsOfStrike = 10;

        game.addThrow(pinsOfFirstThrow);
        game.addThrow(pinsOfSecondThrow);
        game.addThrow(pinsOfStrike);
        game.addThrow(pinsOfFourthThrow);
        game.addThrow(pinsOfFifthThrow);

        expect(scoreExpected).toBe(game.getScore());
    });

    it ("should return the score for a complete game", () => {
        var scoreExpected = 133;
        
        game.addThrow(1);
        game.addThrow(4);
        game.addThrow(4);
        game.addThrow(5);
        game.addThrow(6);
        game.addThrow(4);
        game.addThrow(5);
        game.addThrow(5);
        game.addThrow(10);
        game.addThrow(0);
        game.addThrow(1);
        game.addThrow(7);
        game.addThrow(3);
        game.addThrow(6);
        game.addThrow(4);
        game.addThrow(10);
        game.addThrow(2);
        game.addThrow(8);
        game.addThrow(6);

        expect(scoreExpected).toBe(game.getScore());
    });

    it ("should return the score for a perfect game", () => {
        var scoreExpected = 300;
        
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);
        game.addThrow(10);

        expect(scoreExpected).toBe(game.getScore());
    });

});
