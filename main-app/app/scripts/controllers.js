noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope){

    $scope.gameModel = gameModel;

    var serverPost = {
        method: 'POST',
        url: '',
        withCredentials: 'true',
        headers: {
            'content-type': 'application/json'
        }
    };
});
