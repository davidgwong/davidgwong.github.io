app.controller('MainController', ['$scope', 'ProjectsList', function($scope, ProjectsList) {
    $scope.projects = ProjectsList.projects;
}])
