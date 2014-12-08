noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope){

    $scope.doSum = function () {
        $scope.total = 10+10;
    };

    var callServer = {
        method: 'POST',
        url: '',
        data: '',
        'withCredentials': 'true',
        headers: {
            'content-type': 'application/json'
        }
    };

});
