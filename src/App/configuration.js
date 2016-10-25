function routeConfiguration($routeProvider) {
    $routeProvider
        /*.when('/cv', {
            templateUrl: 'partials/cv.html',
            controller: 'GhCv'
        })
        .when('/cv/:cvSection', {
            templateUrl: 'partials/cv.html',
            controller: 'GhCv'
        })
        .when('/links', {
            templateUrl: 'partials/links.html',
            controller: 'GhLinks'
        })*/
        .otherwise({
            redirectTo: '/home',
            templateUrl: 'partials/home.html',
            controller: 'Home'
        });
}

routeConfiguration.$inject = ['$routeProvider'];

function angularMaterialConfiguration($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('pink')
        .warnPalette('red')
        .backgroundPalette('grey');
}