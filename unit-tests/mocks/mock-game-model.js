angular.module('tombola.noughtAndCrosses.services')
    .service('gameModel',function(){

        var gameModel = function(){
            var me = this;
            var NEW_GAME_BOARD = '000000000';


            this.gameboard = NEW_GAME_BOARD;
            this.winner = 0;
            this.player1 = 'human';
            this.player2 = 'human';
            this.outcome = 'continue';
            this.currentPlayer = 1;
            this.winnerName = 'No One'; //TODO: Remove and use winner number - use filter

            this.isNewGame = function(){
                return me.gameboard === NEW_GAME_BOARD;
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
                if(me.winner === 0){
                    me.winnerName = 'No One';
                }
                if(me.winner === '1'){
                    me.winnerName = 'Reece';
                }
                if(me.winner === '2'){
                    me.winnerName = 'Mark';
                }
            };

            var toggleCurrentPlayer = function(){
                if(me.player1 !== 'human'){
                    return;
                }
                if(me.player2 !== 'human'){
                    return;
                }

                me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;
            };

            //TODO: pass in winner number
            this.updateGameBoard = function(newGameModel){
                me.gameboard = newGameModel.gameboard;
                me.winner = newGameModel.winner;
                me.displayWinnerMessage();
                //todo : update winner number
                if(!me.isNewGame()) {
                    toggleCurrentPlayer();
                }
            };

            this.switchPlayer1 = function(){
                me.player1 = nextPlayerType(me.player1);
            };

            this.switchPlayer2 = function(){
                this.player2 = nextPlayerType(me.player2);
            };


            //TODO: KPB Rename reset...
            this.resetCurrentPlayer = function(){
                me.winnerName = 'No One';
                me.gameboard = NEW_GAME_BOARD;
                //todo: reset winner number
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