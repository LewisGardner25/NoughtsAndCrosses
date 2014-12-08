noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,gameModel){

    $scope.gameModel = gameModel;

    $scope.newGame = function(){
          callServer = ('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame', {
              'player1': gameModel.firstPlayer,
              'player2': gameModel.secondPlayer
          },
       console.log('New Game Created'));
    };

    var callServer = {
        method: 'POST',
        url: '',
        data: '',
        'withCredentials': 'true',
        headers: {
            'content-type': 'application/json'
        }
    };

});
