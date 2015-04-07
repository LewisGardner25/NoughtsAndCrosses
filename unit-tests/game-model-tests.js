(function(){
    'use strict';
    describe('*******TODO*******', function(){

        var gameModel;

        beforeEach(function(){
            module('tombola.noughtAndCrosses.services');
            inject(function($injector){
                gameModel = $injector.get('gameModel')
            });
        });

        it('Checks if a new game has been created',function(){
            expect(gameModel.gameboard).to.equal('000000000');
        });

        it('player1 and player2 are set to human upon beginning a new game',function(){
            expect(gameModel.player1).to.equal('human');
            expect(gameModel.player2).to.equal('human');
        });

        it('nextPlayerType function cycles through the different player types',function(){
            expect(gameModel.nextPlayerType()).to.equal('human');
        });

        it('Switch player1 function cycles player1 through human, random and pre-trained',function(){
            expect(gameModel.player1 = gameModel.nextPlayerType(gameModel.player1));
        });

        it('updateGameBoard updates the gameBoard inside the gameModel to its current state',function(){
            expect(gameModel.updateGameBoard.gameModel);
        });

    });
}());