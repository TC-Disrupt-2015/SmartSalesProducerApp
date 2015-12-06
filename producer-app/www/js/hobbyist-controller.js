var app = angular.module('starter.controllers')

app.controller('HobbyistController', function($scope, $ionicModal, $timeout, $cordovaGeolocation, hobbyistInterface, SharedUid, SharedName){


	$scope.hobbyistData = {};
	$scope.loginData = {};
	var latLon = {'lat': '', 'lon': ''};
	// var posOptions = {timeout: 10000, enableHighAccuracy: false};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/modals/create-hobbiest.html', {
	  scope: $scope
	}).then(function(modal) {
	  $scope.signUpModal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeModal = function() {
	  $scope.signUpModal.hide();
	};

	// Open the login modal
	$scope.openModal = function() {
	  $scope.signUpModal.show();
	};


	$scope.createHobbyist = function(){
		console.log($scope.hobbyistData);
		hobbyistInterface.createHobbyist($scope.hobbyistData, 
										 function(data){
										 	SharedUid.sharedUid = data._id,
										 	console.log(SharedUid.sharedUid);}, 
										 function(){
										 	// error..
										 });
		 $timeout(function() {
      		$scope.closeModal();
    	}, 1000);
		// $scope.hobbiestData.position
		
	}

	// $ionicModal.fromTemplateUrl('templates/login.html', {
	//   scope: $scope
	// }).then(function(modal) {
	//   $scope.loginModal = modal;
	// });

	// // Triggered in the login modal to close it
	// $scope.closeLogin = function() {
	//   scope.loginModal.hide();
	// };

	// // Open the login modal
	// $scope.openLoginlogin = function() {
	//   $scope.loginModal.show();
	// };

	// // Perform the login action when the user submits the login form
	// $scope.doLogin = function() {
	//   console.log('Doing login', $scope.loginData);

	//   hobbyistInterface.login($scope.loginData.email, 
	//                           function(data){
	//                             console.log(data);
	//                             SharedUid.sharedUid = data._id;
	//                             SharedName.sharedName = data.name;
	//                             console.log(SharedUid.sharedUid);
	//                           }, 
	//                           function(){});

	//   // Simulate a login delay. Remove this and replace with your login
	//   // code if using a login system
	//   $timeout(function() {
	//     $scope.closeLogin();
	//   }, 1000);
	// };





})