angular.module('urigoBlog', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: '/categories.html',   controller: pagesCtrl});
}]);