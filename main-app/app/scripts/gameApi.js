noughtsAndCrossesApp.service('gameApi',function ($http, $q){

    var serverCall = function (url, data) {
        var deferred = $q.defer();
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
                deferred.resolve(data);
            })
            .error(function(data, status) {
                deferred.reject({httpStatus: status, message: data});
                console.log('Error');
                console.log(data);
                console.log(status);
            });
        return deferred.promise;
    };


    this.newGame = function(player1Type, player2Type){
        return serverCall('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',
        {
        'player1': player1Type,
        'player2': player2Type,
        });
    };

    this.makeMove = function(currentPlayer, squareNumber){
        return serverCall('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove',
        {
        'playerNumber': currentPlayer,
        'chosenSquare': squareNumber
        });
    };

});