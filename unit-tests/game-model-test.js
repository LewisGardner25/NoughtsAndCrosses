(function(){
    'use strict';
    describe('gameModel.js functions work properly'), function(){
        var gameModel;
        beforeEach(function(){
            module('tombola.noughtAndCrosses.services');
            inject(function($injector){
                gameModel = $injector.get('gameModel')
            });
        })
    };
}());