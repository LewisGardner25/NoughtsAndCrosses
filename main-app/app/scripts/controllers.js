noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi,playerServices){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;
    $scope.playerServices = playerServices;

    $scope.newGame = function(){
        gameApi.newGame();
    };

   $scope.switchPlayer1 = function(){
        playerServices.switchPlayer1();
    };

    $scope.switchPlayer2 = function(){
        playerServices.switchPlayer2();
    };

});
