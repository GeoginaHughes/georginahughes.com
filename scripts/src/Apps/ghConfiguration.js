function ghRouteConfiguration($routeProvider) {
    $routeProvider
        .when('/cv', {
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
        })
        .otherwise({
            redirectTo: '/home',
            templateUrl: 'partials/home.html',
            controller: 'GhHome'
        });
}

ghRouteConfiguration.$inject = ['$routeProvider'];