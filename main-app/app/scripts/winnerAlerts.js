noughtsAndCrossesApp.directive('ngWinnerAlerts', function(){
    return {
        restrict: 'E',
        template: '<div class="winnerAlerts">{{gameModel.winnerName}}</div>',

    };
});