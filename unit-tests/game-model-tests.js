(function(){
    'use strict';
    describe('gameModel Unit Tests', function(){

        var gameModel;

        beforeEach(function(){
            module('tombola.noughtAndCrosses.services');
            inject(function($injector){
                gameModel = $injector.get('gameModel')
            });
        });

        it('Checks if a new game has been created',function(){
            gameModel.isNewGame();
            expect(gameModel.gameboard).to.equal('000000000');
        });

        it('Test player1 type toggles correctly',function(){
            expect(gameModel.player1).to.equal('human');
            gameModel.switchPlayer1();
            expect(gameModel.player1).to.equal('random');
            gameModel.switchPlayer1();
            expect(gameModel.player1).to.equal('pre-trained');
            gameModel.switchPlayer1();
            expect(gameModel.player1).to.equal('human');
        });

        it('Test player2 type toggles correctly',function(){
            expect(gameModel.player2).to.equal('human');
            gameModel.switchPlayer2();
            expect(gameModel.player2).to.equal('random');
            gameModel.switchPlayer2();
            expect(gameModel.player2).to.equal('pre-trained');
            gameModel.switchPlayer2();
            expect(gameModel.player2).to.equal('human');
        });

        it('Display winner message function returns the winner name',function(){
            expect(gameModel.displayWinnerMessage).to.equal(gameModel.winnerName === 'No One');
        });

        it('resetCurrentPlayer finds which player is selected ',function(){
            expect(gameModel.resetCurrentPlayer).to.equal(gameModel.currentPlayer === 1||2);
        });

    });
}());