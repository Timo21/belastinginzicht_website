var app = angular.module('routingApp', [
	'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/", {templateUrl: "partials/waarom.html", controller: "PageCtrl"})
	.when("/loon", {templateUrl: "partials/loon.html", controller: "PageCtrl"})
	.when("/minder-werken", {templateUrl: "partials/minder-werken.html", controller: "PageCtrl"})
	.otherwise("/404", {templateUrl: "partials/404.html", controller:"PageCtrl"})
}]);

app.controller('PageCtrl', function(/* $scope, $location, $http */){
})

app.directive('bsActiveLink', ['$location', function ($location) {
	return {
	    restrict: 'A', //use as attribute
	    replace: false,
	    link: function (scope, elem) {
	        //after the route has changed
	        scope.$on("$routeChangeSuccess", function () {
	            var hrefs = ['/#' + $location.path(),
	                         '#' + $location.path(), //html5: false
	                         $location.path()]; //html5: true
	            angular.forEach(elem.find('a'), function (a) {
	                a = angular.element(a);
	                if (-1 !== hrefs.indexOf(a.attr('href'))) {
	                    a.parent().addClass('active');
	                } else {
	                    a.parent().removeClass('active');
	                };
	            });
	        });
	    }
	}
}]);
