noughtsAndCrossesApp.service('gameModel', function(){

    var gameModel = function(){
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'random';
        this.player2 = 'random';
        this.outcome = 'continue';
        this.currentPlayer = 1;

        var nextPlayerType = function (currentPlayer){
            if(currentPlayer === 'random'){
                return 'human';
            }
            if(currentPlayer === 'human'){
                return 'pre-trained';
            }
            return 'random';
        };

        this.switchPlayer1 = function(){
            var me = this;
            me.player1 = nextPlayerType(me.player1);
        };

        this.switchPlayer2 = function(){
            var me = this;
            this.player2 = nextPlayerType(me.player2);
        };
    };
    return new gameModel();
});