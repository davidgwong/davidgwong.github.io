// This is needed for the tabs to remember active states by providing the route parameters to scope

app.controller('NavController', ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}])
