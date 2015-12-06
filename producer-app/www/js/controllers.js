angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, SharedUid, hobbyistInterface, SharedName) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
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

