describe('controllerTest', function($scope){

    var controllerMock;
    var controller = $scope.noughtsAndCrossesController;

    beforeEach(function(){
        controllerMock = jasmine.createSpyObj('controllerService',['asyncCall']);
    });

    it('Should contain noughtsAndCrossesController', function(){
        expect(noughtsAndCrossesApp.noughtsAndCrossesController).toBeDefined();
    });



});