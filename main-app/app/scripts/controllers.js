noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,$http,gameModel,gameApi,promise){

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
        promise.gameApiPromise();
    };

    return{
        gameApiPromise: function(){
            var playerPromise = gameModel.$http.promise;
            console.log('calling');
            return playerPromise
                .then(function(){
                    if(gameModel.displayWinnerMessage === true){
                        return new gameModel();
                    }
                    else{
                        return $q.reject(playerPromise);
                    }
                });
        }
    };

});
