describe('gameApiTest', function(){

    var gameApi;
    var gameModel;

    beforeEach(function(){
        module('tombola.noughtAndCrosses.services');
        inject(function($injector){
            gameApi = $injector.get('gameApi');
            gameModel = $injector.get('NoughtsAndCrosses/unit-tests/mocks/mock-game-model.js')
        });
    });

    it('newGame function should reset the game board', function(){
        gameApi.newGame();
        expect(gameModel.gameboard).to.equal('000000000');
    });

    it('makeMove function finds currentPlayer and squareNumber placement',function(){
        gameApi.makeMove();
        expect(gameModel.currentPlayer).to.equal(1||2);
    });
});