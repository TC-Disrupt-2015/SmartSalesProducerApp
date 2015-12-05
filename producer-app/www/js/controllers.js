angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// .controller('ProductsController', function($scope, $ionicModal, $timeout, productsInterface) {


// 	$scope.productData = {};
// 	$scope.tags = ['food', 'halal', 'meat', 'pork', 'chicken', 'beef', 'lamb', 'vegitables', 'bread', 'baking', 'desert', 'alcohol', 'wine', 'beer', 'ale'];

// 	$ionicModal.fromTemplateUrl('templates/add-product.html', {
//     	scope: $scope
//   	}).then(function(modal) {
//     	$scope.modal = modal;
//   	}); 	 

//   	$scope.closeProductModal = function() {
//   	  $scope.modal.hide();
//   	};

//   	// Open the login modal
//   	$scope.openProductModal = function() {
//   	  $scope.modal.show();
//   	};

//   	$scope.listProduct = function() { 
//   		console.log($scope.productData);
//   		productsInterface.registerProduct($scope.productData, success, error)	



//   		$timeout(function() {
//   		 	$scope.closeProductModal();
//   		}, 1000);
//   	}

//   $scope.products = [
//     { title: 'Beer', id: 1 },
//     { title: 'Flan', id: 2 },
//     { title: 'Bread', id: 3 },
//     { title: 'Carrots', id: 4 },
//     { title: 'Leeks', id: 5 },
//     { title: 'Wine', id: 6 }
//   ];

 





// })

// .controller('productsController', function($scope, $stateParams) {
// });



















