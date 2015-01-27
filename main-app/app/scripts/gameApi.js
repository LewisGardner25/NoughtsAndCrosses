noughtsAndCrossesApp.service('gameApi',function ($http,$q,gameModel,promise){

    var serverCall = function (url, data) {
        var serverPost = {
            method: 'POST',
            url: url,
            data: data,
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            }};


        $http(serverPost)
            .success(function(data){
                var me = this;
                gameModel.gameboard = data.gameboard;
                gameModel.winner = data.winner;
                gameModel.outcome = data.outcome;


               me.updatePromise = function(){
                    gameModel.displayWinnerMessage()
                        .then(function(){
                            if(promise.gameApiPromise === true){
                                gameModel.displayWinnerMessage();
                            }
                            else{
                                console.log('Winner Not Found');
                            }
                        },
                            function(error){
                                console.log('error', error);
                        }
                    );
                };


            })
            .error(function(data, status) {
                console.log('Error');
                console.log(data);
                console.log(status);
            });
    };

    this.newGame = function(){
        return serverCall('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',
        {
        'player1': gameModel.player1,
        'player2': gameModel.player2,
        'currentPlayer': gameModel.currentPlayer
        });
    };

    this.makeMove = function(squareNumber){
        serverCall('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove',
        {
        'playerNumber': gameModel.currentPlayer,
        'chosenSquare': squareNumber
        });
    };

});