describe('gameApiTest', function(gameModel){

    var controllerMock;

    beforeEach(function(){
        controllerMock = jasmine.createSpyObj('gameApi',['asyncCall']);
    });

    it('Should contain gameApi directive', function(){
        expect(noughtsAndCrossesApp.gameApi).toBeDefined();
    });

    it('makeMove function contains API constants', function(){
        expect(noughtsAndCrossesApp.gameApi.makeMove)
            .to.have.property(gameModel.playerNumber = 'playerNumber',gameModel.squareNumber = 'squareNumber');
    });

});
