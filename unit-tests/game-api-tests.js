describe('gameApiTest', function(){

    var gameApi;
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
        $httpBackend.expect('POST', 'url', 'data');
        gameApi.newGame('human','human');
        $httpBackend.when('POST','http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame').respond(200,'Posted');
        expect(mocks.newGameUrl).to.equal('000000000')
    });

    it('makeMove function finds currentPlayer and squareNumber placement',function(){
        gameApi.makeMove();
        expect(gameModel.currentPlayer).to.equal(1||2);
    });

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});