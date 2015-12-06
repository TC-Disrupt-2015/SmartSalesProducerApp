var app = angular.module('starter.controllers')

app.controller('HobbyistController', function($scope, $ionicModal, $cordovaGeolocation){


	$scope.hobbiestData = {};
	var latLon = {'lat': '', 'lon': ''};
	var posOptions = {timeout: 10000, enableHighAccuracy: false};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/modals/create-hobbiest.html', {
	  scope: $scope
	}).then(function(modal) {
	  $scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeModal = function() {
	  $scope.modal.hide();
	};

	// Open the login modal
	$scope.openModal = function() {
	  $scope.modal.show();
	};

	document.addEventListener("deviceready", function () {
		console.log(posOptions);
	  	  $cordovaGeolocation.getCurrentPosition(posOptions)
	  	     .then(function (position) {
	  	        $scope.latitude  = position.coords.latitude
      			$scope.longitude = position.coords.longitude
	  	      }, function(err) {
	  	        // error
	  	      });

	  	   
	
	}, false);



	$scope.getLocation = function(){
		console.log("get location function");
		console.log(posOptions);
		$cordovaGeolocation.getCurrentPosition(posOptions)
	  	     .then(function (position) {
	  	        $scope.latitude  = position.coords.latitude
      			$scope.longitude = position.coords.longitude
	  	      }, function(err) {
	  	        // error
	  	      });

	}

	// console.log(lat, lon);

	// var options = { enableHighAccuracy: true };
	// navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	$scope.createHobbiest = function(){
		console.log($scope.hobbiestData);
		// $scope.hobbiestData.position
		$cordovaGeolocation.getCurrentPosition(posOptions)
	  	     .then(function (position) {
	  	     	var lat  = position.coords.latitude
      			var lon = position.coords.longitude
	  	     }, function(err) {
	  	        // error
	  	     });
	
	  	console.log($scope.hobbiestData);     

	}





})