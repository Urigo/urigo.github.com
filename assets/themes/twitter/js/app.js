angular.module('binkClient', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: '/categories.html',   controller: pagesCtrl});
}]);