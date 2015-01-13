noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi,currentPlayerPromise){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;

    $scope.newGame = function(){
        gameApi.newGame();
        $scope.findingCurrentPlayer();
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

    $scope.findingCurrentPlayer = function(){
        currentPlayerPromise.currentPlayerType()
            .then(function(data){
                console.log('+++++++starting+++++++');
                if(gameModel.currentPlayer !== 1){
                    console.log('+++++++if+++++++');
                    return gameModel.currentPlayer === 2;
                }
                else{
                    console.log('+++++++else+++++++');
                    return $q.reject(data);
                }
                function(response){
                    console.log('+++++++reject+++++++');
                    return $q.reject(response.data);
                }
        });
    };

});
