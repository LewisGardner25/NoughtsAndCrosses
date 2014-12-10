noughtsAndCrossesApp.service('gameApi',function (gameModel){

    var serverCall = function (url, data) {
        var serverPost = {
            method: 'POST',
            url: url,
            data: data,
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
        }};

    this.newGame = function(){
        serverCall('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame',{'player1': gameModel.player1,'player2': gameModel.player2});
        console.log('test new game');
    };

};});