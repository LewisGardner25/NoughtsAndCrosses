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
            expect(gameModel.gameboard).to.equal('000000000')
        });



    });
}());