describe('gameApiTest', function(){

    var gameApi;
    var gameModel;
    var $httpBackend;

    beforeEach(function(){

        module('tombola.noughtAndCrosses.services');
        module(function($provide) {
            $provide.value('gameApiConstants', mocks.gameApiConstants);
        });

        inject(function($injector){
            gameApi = $injector.get('gameApi');
            $httpBackend = $injector.get('$httpBackend');
        });
    });

    it('newGame function should reset the game board', function(){
        //TODO: set expectation on $http backaend - expect POST, URL and Data
        gameApi.newGame(/*TODO Pass test values */);
        //TODO: Finish Up $Http backend requests

        //TODO: Check returned values from service
    });

    it('makeMove function finds currentPlayer and squareNumber placement',function(){
        //gameApi.makeMove();
        //expect(gameModel.currentPlayer).to.equal(1||2);
    });

    it('serverCall returns a promise',function(){
        expect().to.equal();
    });

    afterEach(function(){
        //TODO: Make sure expected calls have happened.
    });

});