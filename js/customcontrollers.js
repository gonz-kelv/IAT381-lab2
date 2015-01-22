var BestApp = angular.module('BestApp', []);

BestApp.controller('bestCtrlr', function ($scope) {
  $scope.computers = [
    {'name': 'Razer Blade',
     'award': 'Best Portable Gaming Laptop'},
    {'name': 'Macbook Air',
     'award': 'Best Slimmest Laptop'},
	 {'name': 'Asus ROG MotherBoard',
	 'award': 'Best Gaming Motherboard'}
  ];
  $scope.name = "Kelvin Gonzales";
  
  $scope.school = "SFU";
  
  $scope.tech = "Tech";
  
  $scope.header = "Custom Controller in my Best App!";
});

