noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;

    $scope.newGame = function(){
        gameApi.newGame();
    };

});
