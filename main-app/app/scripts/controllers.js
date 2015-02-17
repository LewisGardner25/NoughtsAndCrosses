noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,gameModel,gameApi,audioService){

    $scope.gameModel = gameModel;
    $scope.gameApi = gameApi;
    $scope.audioService = audioService;

    $scope.newGame = function(){
        gameModel.resetCurrentPlayer();
        updateGameBoard(gameApi.newGame($scope.gameModel.player1, $scope.gameModel.player2));
        audioService.newGameAudioSprite();
    };

    $scope.makeMove = function(squareNumber){
        updateGameBoard(gameApi.makeMove($scope.gameModel.currentPlayer, squareNumber));
        audioService.makeMoveAudioSprite();
    };

    $scope.switchPlayer1 = function(){
        gameModel.switchPlayer1();
    };

    $scope.switchPlayer2 = function(){
        gameModel.switchPlayer2();
    };

    var updateGameBoard = function (promise){
        promise.then(function(newGameData){
            $scope.gameModel.gameboard = newGameData.gameboard;
            if($scope.gameModel.isNewGame())
                {
                    $scope.gameModel.toggleCurrentPlayer();
                }
            })
            .catch(function(errorMessage){
                if(errorMessage.httpStatus == 500){
                    alert(errorMessage.message);
                }
                else {
                    alert('Technical fault:' + errorMessage.httpStatus + ' Message: ' + errorMessage.message );
                }
            });
        };

});


