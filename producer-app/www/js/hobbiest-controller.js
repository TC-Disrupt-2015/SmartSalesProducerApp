var app = angular.module('starter.controllers')

app.controller('HobbiestController', function($scope, $ionicModal){


	$scope.hobbiestData = {};

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


	$scope.createHobbiest = function(){
		console.log($scope.hobbiestData);

	}





})