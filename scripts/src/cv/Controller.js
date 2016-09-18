GhCv.$inject = ['$scope', '$routeParams'];

function GhCv($scope, $routeParams, Page) {
    $scope.Page = Page;

    var cvSection = $routeParams.cvSection;

    selectSection();
    Page.setMainClass('cv');

    function showAllSections(){
        $scope.profile = true;
        $scope.employment = true;
        $scope.education = true;
        $scope.technologies = true;
        $scope.software = true;
        $scope.voluntary = true;

        Page.setTitle('Georgina Hughes');
    }

    function selectSection(){
        if(cvSection){
            switch(cvSection){
                case 'profile':
                    Page.setTitle('About Georgina Hughes');
                    $scope.profile = true;
                    break;
                case 'employment':
                    Page.setTitle('Where has Georgina Hughes worked?');
                    $scope.employment = true;
                    break;
                case 'education':
                    Page.setTitle('What has Georgina Hughes learned?');
                    $scope.education = true;
                    break;
                case 'technologies':
                    Page.setTitle('Does Georgina Hughes know the latest technologies?');
                    $scope.technologies = true;
                    break;
                case 'software':
                    Page.setTitle('Does Georgina Hughes know how to use software?');
                    $scope.technologies = true;
                    break;
                case 'voluntary':
                    Page.setTitle('How does Georgina Hughes have time to volunteer?');
                    $scope.voluntary = true;
                    break;
                default:
                    showAllSections();
                    break;
            }
        } else {
            showAllSections();
        }
    }
}