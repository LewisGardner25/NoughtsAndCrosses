//describe('gameApiTest', function(){
//
//    var gameApi;
//
//    beforeEach(function(){
//        module('tombola.noughtAndCrosses.services');
//        inject(function($injector){
//            gameApi = $injector.get('gameApi');
//        });
//    });
//
//    it('Should contain gameApi service', function(){
//        expect(noughtsAndCrossesApp.gameApi)
//            .to.have.property('noughtsAndCrossesApp.service(gameApi,function ($http,$q,gameApiConstants)')
//    });
//
//    it('makeMove function contains appropriate playerNumber and squareNumber', function(){
//        expect(noughtsAndCrossesApp.gameApi.makeMove)
//            .to.have.property(gameApi.makeMove.playerNumber = 'playerNumber',gameApi.makeMove.squareNumber = 'squareNumber');
//    });
//
//    it('newGame function contains constants', function(){
//        expect(noughtsAndCrossesApp.gameApi.newGame)
//            .to.have.property(gameApi.newGame.player1 = 'player1Type',gameApi.newGame.player2 = 'player2Type');
//    });
//
//    it('gameApi service contains promise', function(){
//        expect(noughtsAndCrossesApp.gameApi)
//            .to.have.property(gameApi.to.have.property('serverCall'));
//    });
//
//});
