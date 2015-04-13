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
            gameModel.switchPlayer1();
            expect(gameModel.player2).to.equal('random');
            gameModel.switchPlayer1();
            expect(gameModel.player2).to.equal('pre-trained');
            gameModel.switchPlayer1();
            expect(gameModel.player2).to.equal('human');
        });

        it('updateGameBoard updates the gameBoard inside the gameModel to its current state',function(){
            //TODO: Test should check if game model is in a winning state
            expect(gameModel.updateGameBoard.gameModel).to.equal('000000000');
        });

        it('Display winner message function returns the winner',function(){
            //TODO: Checks which player is the winner
            expect(gameModel.displayWinnerMessage).to.equal('human');
        });

        it('toggleCurrentPlayer cycles between player 1 and 2',function(){
            //TODO: Checks different player states
            expect(gameModel.toggleCurrentPlayer).to.equal('player1'||'player2');
        });

    });
}());