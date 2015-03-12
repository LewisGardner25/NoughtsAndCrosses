describe('gameApiTest', function(){

    var gameApiTest;
    var gameApi;
    var gameApiMock;
    var noughtsAndCrossesApp;

    beforeEach(function(){
        module('noughtsAndCrossesApp.gameApi');
        $injector(function($injector){
            gameApiTest = ('unit-tests/game-api-tests');
            gameApi = $injector.get('main-app/app/scripts/gameApi.js');
            gameApiMock = $injector.get('unit-tests/game-api-mock.js');
            noughtsAndCrossesApp = $injector('main-app/app/scripts/app.js');
        });
        module(function($provide){
            $provide.constant('gameApi', gameApiMock.mockApi);
        });
    });

    it('Should contain gameApi service', function(){
        expect(noughtsAndCrossesApp.gameApi)
            .to.have.property('noughtsAndCrossesApp.service(gameApi,function ($http,$q,gameApiConstants)')
    });

    it('makeMove function contains appropriate playerNumber and squareNumber', function(){
        expect(noughtsAndCrossesApp.gameApi.makeMove)
            .to.have.property(gameApi.makeMove.playerNumber = 'playerNumber',gameApi.makeMove.squareNumber = 'squareNumber');
    });

    it('newGame function contains constants', function(){
        expect(noughtsAndCrossesApp.gameApi.newGame)
            .to.have.property(gameApi.newGame.player1 = 'player1Type',gameApi.newGame.player2 = 'player2Type');
    });

    it('gameApi service contains promise', function(){
        expect(noughtsAndCrossesApp.gameApi)
            .to.have.property(gameApi.to.have.property('serverCall'));
    });

    /*it('serverCall returns data', function(){
        $httpBackend
            .expectPOST(mock.gameApiMock.url);
            .respond(function(){
                return [404,'Not found',{}]
            });
     });*/

    it('Tests run mock service', function(){
        expect(gameApiTest)
            .to.have.property(gameApiMock.mockApi)
    });

});
