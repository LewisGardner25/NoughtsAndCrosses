(function(){
    'use strict';

    describe('gameApiConstants checking API defaults are not altered', function(){

        var gameApiConstants;

        beforeEach(function(){
            module('tombola.noughtAndCrosses.services');
            inject(function($injector){
                gameApiConstants = $injector.get('gameApiConstants');
            });
        });

        it('Check new game constant as expected', function(){
            expect(gameApiConstants.newGameUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame');
        });

        it('Check make make move constant as expected', function(){
            expect(gameApiConstants.makeMoveUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove');
        });
    });

}());
