noughtsAndCrossesApp.service('gameModel', function(){

    var gameModel = function(){
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'random';
        this.player2 = 'random';
        this.outcome = 'continue';
        this.currentPlayer = 1;
    };
    return new gameModel();
});