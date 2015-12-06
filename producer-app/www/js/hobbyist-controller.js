var app = angular.module('starter.controllers')

app.controller('HobbyistController', function($scope, $ionicModal){
// , $cordovaGeolocation

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

	// document.addEventListener("deviceready", function () {
		
	//   	  $cordovaGeolocation.getCurrentPosition(posOptions)
	//   	     .then(function (position) {
	//   	        latLon.lat  = position.coords.latitude
	//   	        latLon.lon = position.coords.longitude
	//   	      }, function(err) {
	//   	        // error
	//   	      });
	
	// }, false);



	$scope.createHobbiest = function(){
		console.log($scope.hobbiestData);
		$scope.hobbiestData.position = latLon;

	}





})