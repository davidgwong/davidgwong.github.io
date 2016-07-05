app.controller('CarouselController', ['$scope', 'slides', function ($scope, slides) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = slides.slides;
}])
