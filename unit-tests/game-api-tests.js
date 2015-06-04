describe('gameApiTest', function(){

    var gameApi;
    var $httpBackend;

    beforeEach(function(){
        module('tombola.noughtAndCrosses.services');
        module(function($provide) {
            $provide.constant('gameApiConstants', mocks.gameApiConstants);
        });
        inject(function($injector){
            gameApi = $injector.get('gameApi');
            $httpBackend = $injector.get('$httpBackend');
        });
    });

    it('newGame function should reset the game board', function(){
        $httpBackend.expect('post', 'url', 'data');
        gameApi.newGame('human','human');
        $httpBackend.when('POST').respond(200,'Posted');
        expect(mocks.gameApiConstants.newGameUrl).to.equal(mocks.gameApiConstants.newGameUrl);
    });

    it('makeMove function finds currentPlayer and squareNumber placement',function(){
        $httpBackend.expect('post','url','data');
        gameApi.makeMove();
        $httpBackend.when('POST').respond(200,'Posted');
        expect(mocks.gameApiConstants.makeMoveUrl).to.equal(mocks.gameApiConstants.makeMoveUrl);
    });

});