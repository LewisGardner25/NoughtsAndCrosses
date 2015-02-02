noughtsAndCrossesApp.service('gameModel', function(){

    var gameModel = function(){
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.outcome = 'continue';
        this.currentPlayer = 1;
        this.winnerName = 'No One';


        this.isNewGame = function(){
            var me = this;
            return me.gameboard !=='000000000';
        };

        var nextPlayerType = function(currentPlayer){
            if(currentPlayer === 'human'){
                return 'random';
            }
            if(currentPlayer === 'random'){
                return 'pre-trained';
            }
            return 'human';
        };

        this.displayWinnerMessage = function(){
            var me = this;
            if(me.winner === 0){
                me.winnerName = 'No One';
            }
            if(me.winner === '1'){
                me.winnerName = 'Reece';
            }
            if(me.winner === '2'){
                me.winnerName = 'Mark';
            }
            return me.winnerName;
        };

        this.toggleCurrentPlayer = function(){
            if(this.player1 !== 'human'){
                return;
            }
            if(this.player2 !== 'human'){
                return;
            }
            this.currentPlayer = this.currentPlayer === 1?2:1;
        };

        this.switchPlayer1 = function(){
            var me = this;
            me.player1 = nextPlayerType(me.player1);
        };

        this.switchPlayer2 = function(){
            var me = this;
            this.player2 = nextPlayerType(me.player2);
        };

        this.resetCurrentPlayer = function(){
            var me = this;
            if(me.player1 === 'human'){
                me.currentPlayer = 1;
                return;
            }
            if(me.player2 === 'human'){
                me.currentPlayer = 2;
            }
        };
    };
    return new gameModel();
});