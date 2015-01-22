noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;

    $scope.newGame = function(){
        gameModel.resetCurrentPlayer();
        gameApi.newGame();
    };

   $scope.makeMove = function(squareNumber){
        gameApi.makeMove(squareNumber);
        gameModel.toggleCurrentPlayer();
    };

   $scope.switchPlayer1 = function(){
        gameModel.switchPlayer1();
    };

   $scope.switchPlayer2 = function(){
        gameModel.switchPlayer2();
    };

    $scope.findWinner = function(){
        gameModel.displayWinnerMessage();
    };

});
