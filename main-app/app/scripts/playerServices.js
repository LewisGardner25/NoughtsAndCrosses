noughtsAndCrossesApp.service('playerServices', function(gameModel){

    var nextPlayerType = function(){
        if(nextPlayerType === 'random'){
            return 'human';
        }
        if(nextPlayerType === 'human'){
            return 'pre-trained';
        }
        return 'random';
    };

    this.switchPlayer1 = function(nextPlayerType){
        gameModel.player1 = nextPlayerType;
    };

    this.switchPlayer2 = function(nextPlayerType){
        gameModel.player2 = nextPlayerType;
    };

});