noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;

    $scope.newGame = function(){
        gameApi.newGame();
    };

   $scope.switchPlayer1 = function(){
        gameModel.switchPlayer1();
    };

    $scope.switchPlayer2 = function(){
        gameModel.switchPlayer2();
    };

});
