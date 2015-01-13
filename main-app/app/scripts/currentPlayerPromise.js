noughtsAndCrossesApp.factory('currentPlayerPromise',function($q,gameModel){
    return{
        currentPlayerType: function(){
            return $http.get('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame')
                .then(function(){
                    if(gameModel.player1 !== 'human'){
                        return gameModel.currentPlayer === 2;
                    }
                    else{
                        return gameModel.currentPlayer === 1;
                    }
                }, function(response){
            return $q.reject(gameModel.currentPlayer === 1 || 2);
        });
    }};
});

