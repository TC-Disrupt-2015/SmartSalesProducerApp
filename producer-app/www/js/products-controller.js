var app = angular.module('starter.controllers')

app.controller('ProductsController', function($scope, $ionicModal, $timeout, productsInterface, $cordovaCamera, $cordovaFileTransfer) {

	$scope.productData = {};
	$scope.productImage = {};
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

  	document.addEventListener("deviceready", function () {

  	  var options = {
  	    quality: 50,
  	    destinationType: Camera.DestinationType.DATA_URL,
  	    sourceType: Camera.PictureSourceType.CAMERA,
  	    allowEdit: true,
  	    encodingType: Camera.EncodingType.JPEG,
  	    targetWidth: 100,
  	    targetHeight: 100,
  	    popoverOptions: CameraPopoverOptions,
  	    saveToPhotoAlbum: false,
  	    correctOrientation:true
  	  };

  	  $cordovaCamera.getPicture(options).then(function(imageData) {
  	    var image = document.getElementById('myImage');
  	    image.src = "data:image/jpeg;base64," + imageData;
  	  }, function(err) {
  	    // error
  	  });

  	}, false);

  	document.addEventListener('deviceready', function () {

  	    $cordovaFileTransfer.upload(server, filePath, options)
  	      .then(function(result) {
  	        // Success!
  	      }, function(err) {
  	        // Error
  	      }, function (progress) {
  	        // constant progress updates
  	      });

  	  }, false);

  $scope.products = [
    { title: 'Beer', id: 1 },
    { title: 'Flan', id: 2 },
    { title: 'Bread', id: 3 },
    { title: 'Carrots', id: 4 },
    { title: 'Leeks', id: 5 },
    { title: 'Wine', id: 6 }
  ];



})