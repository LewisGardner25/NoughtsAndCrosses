noughtsAndCrossesApp.service('gameApi',function (gameModel,$http){

    var serverCall = function (url, data) {
        var serverPost = {
            method: 'POST',
            url: url,
            data: data,
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            }};
        $http(serverPost);
    };

    this.newGame = function(){
        serverCall('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newGame',
        {'player1': gameModel.player1,'player2': gameModel.player2});
    };

    

});