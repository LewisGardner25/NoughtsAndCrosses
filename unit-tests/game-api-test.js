describe('gameApiTest', function(){
    
    var gameApi;
    var gameModel;

    beforeEach(function(){
        module('noughtsAndCrossesApp.gameApi');
        module(function($provide){
            $provide.constant('main-app/app/scripts/gameApi.js');
        });
        $injector(function($injector){
            gameApi = $injector.get('main-app/app/scripts/gameApi.js');
            gameModel = $injector.get('main-app/app/scripts/gameModel.js');
        });
    });

    it('Should contain gameApi directive', function(){
        expect(noughtsAndCrossesApp.gameApi)
            .to.have.property('noughtsAndCrossesApp.service(gameApi,function ($http,$q,gameApiConstants)')
    });

    it('makeMove function contains appropriate playerNumber and squareNumber', function(){
        expect(noughtsAndCrossesApp.gameApi.makeMove)
            .to.have.property(gameApi.makeMove.playerNumber = 'playerNumber',gameModel.squareNumber = 'squareNumber');
    });

    it('newGame function contains constants', function(){
        expect(noughtsAndCrossesApp.gameApi.newGame)
            .to.have.property(gameModel);
    });

});
