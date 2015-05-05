angular.module('tombola.noughtAndCrosses.services')
    .service('gameApi',function ($http,$q,gameApiConstants){

    var serverCall = function (url, data) {
        var deferred = $q.defer();
        var serverPost = {
            method: 'POST',
            url: url,

            data: data,
            'wit1hCredentials': 'true',
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
        return serverCall(gameApiConstants.newGameUrl,
        {
        'player1': player1Type,
        'player2': player2Type
        });
    };

    this.makeMove = function(currentPlayer, squareNumber){
        return serverCall(gameApiConstants.makeMoveUrl,
        {
        'playerNumber': currentPlayer,
        'chosenSquare': squareNumber
        });
    };

});