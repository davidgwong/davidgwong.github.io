app.controller('ProjectDescriptionController', ['$scope', '$routeParams', 'ProjectsList', function ($scope, $routeParams, ProjectsList) {
    $scope.detail = ProjectsList.projects[$routeParams.id];
}]);
