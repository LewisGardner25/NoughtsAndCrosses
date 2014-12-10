noughtsAndCrossesApp.service('playerServices', function(gameModel){

    this.switchPlayer1 = function(){
        if(gameModel.player1 === 'random'){
            gameModel.player1 = 'human';
        } else if(gameModel.player1 === 'human'){
            gameModel.player1 = 'pre-trained';
        } else {
            gameModel.player1 = 'random';
        }
    };

    this.switchPlayer2 = function(){
        if(gameModel.player2 === 'random'){
            gameModel.player2 = 'human';
        } else if(gameModel.player2 === 'human'){
            gameModel.player2 = 'pre-trained';
        } else {
            gameModel.player2 = 'random';
        }
    };

});