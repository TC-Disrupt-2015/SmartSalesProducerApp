var app = angular.module('starter.controllers')

app.controller('ProductsController', function($scope, $ionicModal, $timeout, productsInterface) {

	$scope.productData = {};
	$scope.tags = ['food', 'halal', 'meat', 'pork', 'chicken', 'beef', 'lamb', 'vegitables', 'bread', 'baking', 'desert', 'alcohol', 'wine', 'beer', 'ale'];

	$ionicModal.fromTemplateUrl('templates/add-product.html', {
    	scope: $scope
  	}).then(function(modal) {
    	$scope.modal = modal;
  	}); 	 

  	$scope.closeProductModal = function() {
  	  $scope.modal.hide();
  	};

  	// Open the login modal
  	$scope.openProductModal = function() {
  	  $scope.modal.show();
  	};

  	$scope.listProduct = function() { 
  		console.log($scope.productData);
  		productsInterface.registerProduct($scope.productData, success, error)	



  		$timeout(function() {
  		 	$scope.closeProductModal();
  		}, 1000);
  	}

  $scope.products = [
    { title: 'Beer', id: 1 },
    { title: 'Flan', id: 2 },
    { title: 'Bread', id: 3 },
    { title: 'Carrots', id: 4 },
    { title: 'Leeks', id: 5 },
    { title: 'Wine', id: 6 }
  ];



})