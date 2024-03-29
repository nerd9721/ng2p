// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);



scotchApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl : '/app/app.html',
      controller  : 'mainController'
    })

  // route for the about page
    .when('/about', {
      templateUrl : '/videoquiz/index.html',
      controller  : 'aboutController'
    })

  // route for the contact page
    .when('/contact', {
      templateUrl : '/videoquiz/content.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

  // create a message to display in our view
  $scope.main_css = 'app/app.css';
  $scope.message = 'Everyone come and see how good I look!';
});


scotchApp.controller('videoquizIndexController', function($scope, $routeParams) {
  $scope.message = 'Look! I am an about page.';

  $scope.curr_level = $routeParams.lv;
  $scope.boji_size = $routeParams.boji;

  //alert($routeParams.lv);

    
});

scotchApp.controller('videoquizController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
