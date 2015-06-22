(function(){
    'use strict';
    describe('audio Unit Tests', function() {

        var audioService;

        beforeEach(function(){
            module('tombola.noughtAndCrosses.services');
            inject(function($injector){
                audioService = $injector.get('audioService');
            });
        });

        it('createSpriteElement creates a new sprite',function(){

        });



    });
}());