noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,gameModel){

    $scope.gameModel = gameModel;



    var serverCall = function (url, data) {
        var serverPost = {
            method: 'POST',
            url: url,
            data: data,
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
        }};
    };

    $scope.newGame = function(){
        serverCall ('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame', {
                'player1': gameModel.player1,
                'player2': gameModel.player2
            },
            console.log('New Game Created'));
    };

    $scope.changePlayer1 = function () {
        if (gameModel.player1 === 'random'){
            gameModel.player1 = 'human';
        } else if (gameModel.player1 === 'human'){
            gameModel.player1 = 'pre-trained';
        } else {
            gameModel.player1 = 'random';
        }
    };

    $scope.changePlayer2 = function () {
        if (gameModel.player2 === 'random'){
            gameModel.player2 = 'human';
        } else if (gameModel.player2 === 'human'){
            gameModel.player2 = 'pre-trained';
        } else {
            gameModel.player2 = 'random';
        }
    };

});
