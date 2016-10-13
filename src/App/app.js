angular.module('app', ['ngRoute', 'ngMaterial', 'ngAria']);

angular.module('app')
    .controller('Home', Home)
    .factory('Page', Page);

angular.module('app')
    .config(['$routeProvider', routeConfiguration])
    .config(angularMaterialConfiguration);





/*.controller('GhCv', GhCv)
 .controller('GhLinks', GhLinks)*/