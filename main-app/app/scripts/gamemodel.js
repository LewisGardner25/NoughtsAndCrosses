noughtsAndCrossesApp.service('gameModel', function(){

    var gameModel = function(){
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.outcome = 'continue';
        this.currentPlayer = 1;

        var nextPlayerType = function (currentPlayer){
            if(currentPlayer === 'human'){
                return 'random';
            }
            if(currentPlayer === 'random'){
                return 'pre-trained';
            }
            return 'human';
        };

        this.playerSwitch = function(){
            if(currentPlayer === 1){
                return currentPlayer === 2;
            }
            return currentPlayer === 1;
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