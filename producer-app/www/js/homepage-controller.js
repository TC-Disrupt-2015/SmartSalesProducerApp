var app = angular.module('starter.controllers')

app.controller('HomepageController', function($scope, productsInterface) {


	$scope.allProducts = function(){

		productsInterface.getAllProducts();

	}


})
