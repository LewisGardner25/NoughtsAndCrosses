(function(){
    'use strict';
    describe('gameApiConstants checking API defaults are not altered', function(){

        var gameApiConstants;

        beforeEach(function(){
            //Change to tombola.noughtsAndCrosses.
            module('tombola.noughtAndCrosses.services');

            inject(function($injector){
                gameApiConstants = $injector.get('gameApiConstants');
            });

        });

        it('Should contain gameApi service', function(){
            assert.fail();
        });

//    it('makeMove function contains appropriate playerNumber and squareNumber', function(){
//        expect(noughtsAndCrossesApp.gameApi.makeMove)
//            .to.have.property(gameApi.makeMove.playerNumber = 'playerNumber',gameApi.makeMove.squareNumber = 'squareNumber');
//    });

    });




}());
