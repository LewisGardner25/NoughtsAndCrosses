noughtsAndCrossesApp.service('gameModel', function(){

    return {
        gameboard: '000000000',
        winner: 0,
        firstPlayer: 'random',
        secondPlayer: 'random',
        outcome: 'continue'
    };

});