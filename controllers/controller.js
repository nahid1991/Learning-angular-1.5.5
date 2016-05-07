var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		//template: 'Welcome user!'
		templateUrl: 'loginpage.html'
	})
	.when('/dashboard', {
		//template: 'Welcome user again!'
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCntrl', function($scope){
	$scope.submit = function(){
		var uname = $scope.username;
		var passworod = $scope.password;
	};
});