noughtsAndCrossesApp.service('gameModel', function(){

    return{
        gameboard: '000000000',
        winner: 0,
        player1: 'random',
        player2: 'random',
        outcome: 'continue',
        currentPlayer: 1
        };

});