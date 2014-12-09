noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,gameModel,$http){

    $scope.gameModel = gameModel;

    $scope.newGame = function(){
          serverCall ('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame', {
              'player1': gameModel.player1,
              'player2': gameModel.player2
              },
       console.log('New Game Created'));
    };

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
});
