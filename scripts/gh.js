/*Date: 2016-10-24 3:53:24*/angular.module('app', ['ngRoute', 'ngMaterial', 'ngAria']);

angular.module('app')
    .controller('Home', Home)
    .factory('Page', Page);

angular.module('app')
    .config(['$routeProvider', routeConfiguration])
    .config(angularMaterialConfiguration);





/*.controller('GhCv', GhCv)
 .controller('GhLinks', GhLinks)*/
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
function Page() {
    var title = 'Agile Consultancy',
        menuMessage = 'Menu',
        mainClass = 'home',
        menuIsOpen = false;

    return {
        getTitle: getTitle,
        setTitle: setTitle,
        getMenuMessage: getMenuMessage,
        setMenuMessage: setMenuMessage,
        getMainClass: getMainClass,
        setMainClass: setMainClass,
        getMenuIsOpen: getMenuIsOpen,
        setMenuIsOpen: setMenuIsOpen,
        toggleMenu: toggleMenu,
        load: load
    };

    function getTitle() {
        return title;
    }

    function setTitle(newTitle){
        title = newTitle;
    }

    function getMenuMessage(){
        return menuMessage;
    }

    function setMenuMessage(newMessage){
        menuMessage = newMessage;
    }

    function getMainClass(){
        return mainClass;
    }

    function setMainClass(newClass){
        mainClass = newClass;
    }

    function getMenuIsOpen(){
        return menuIsOpen;
    }

    function setMenuIsOpen(isOpen){
        menuIsOpen = isOpen;
    }

    function toggleMenu(){
        if(menuIsOpen){
            setMenuMessage('Menu');
        } else {
            setMenuMessage('Close');
        }

        menuIsOpen = !menuIsOpen;
    }

    function load(){
        setMenuMessage('Menu');
        setMenuIsOpen(false);
    }
}
function Home($scope, Page){
    $scope.Page = Page;

    $scope.Page.setTitle('Georgina Hughes');

    Page.setMainClass('home');
}