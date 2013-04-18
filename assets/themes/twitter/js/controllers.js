function mainCtrl($scope)
{
    $scope.locale = 'en';
}

function pagesCtrl($window, $location, $rootScope, $route, $scope, $routeParams, $http) {

    if ($routeParams.locale != undefined)
        $scope.$parent.locale = $routeParams.locale;

    if ($routeParams.urlParam == undefined ||
        $routeParams.urlParam == '')
    {
        $scope.templateUrl = '/Map/Map.html';

        $.ajax({
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('https://github.com/Urigo/urigo.github.com/commits/master.atom'),
            dataType: 'json',
            success: function(data) {
                $scope.latestUpdates = data.responseData.feed;
                $scope.$apply();
            }
        });
        console.log($scope.latestUpdates);
    }
    else{
        var x = $routeParams.urlParam.lastIndexOf('/');
        var fileName = $routeParams.urlParam.substr(x+1);
        $scope.templateUrl = '/Map/'+$routeParams.urlParam+'/'+fileName+'.html';
    }

    $scope.afterPartialLoaded = function() {
        var currentPageId = $scope.templateUrl;
        loadDisqus(currentPageId);
    };

    var github = new Github({
        username: "Urigo",
        password: "puryk456+123",
        auth: "basic"
    });

    $scope.saveToGit = function(){
        var user = github.getUser();
        console.log(user);
        user.userRepos('Urigo', function(err, repos) {
            console.log(repos);
        });
        user.repos(function(err, repos) {
            console.log(repos);
        });

        var repo = github.getRepo('Urigo', 'urigo.github.com');

        repo.show(function(err, repo) {
            console.log('error');
            console.log(err);
            console.log('repo');
            console.log(repo);
        });
        repo.write('master',
            'urigo.github.com/blob/master/Map/Time/Time.html',
            'New lalala',
            'Testing api',
            function(err) {
                console.log($scope.yes + ' repo!');
            });

    };

    /*
     $rootScope.$on('$routeChangeStart', function(scope, newRoute){
     if (!newRoute) return;
     //Load any required resources here
     console.log("Do conditional loading here");
     alert($location.url());
     alert($scope.locale);
     alert(JSON.stringify(newRoute));

     if ($scope.locale == 'he')
     $window.location.href = $location.url() + '?locale=he';
     //$rootScope.templates = newRoute.$route.templates;
     });    */

    $scope.yes = "yes!";
}