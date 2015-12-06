var app = angular.module('starter.controllers')

app.controller('ProductsController', function($scope, $ionicModal, $timeout, productsInterface, $cordovaCamera, $cordovaFileTransfer, $cordovaFile) {



	$scope.productData = {};
	$scope.images = [];
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
  		// productsInterface.registerProduct($scope.productData, success, error)	



  		$timeout(function() {
  		 	$scope.closeProductModal();
  		}, 1000);
  	}

  	

    $scope.uploadPhoto = function(){

      var options = {
       destinationType : Camera.DestinationType.FILE_URI,
       sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
       allowEdit : false,
       encodingType: Camera.EncodingType.JPEG,
       popoverOptions: CameraPopoverOptions,
       };

       $cordovaCamera.getPicture(options).then(function(imageData) {
       	console.log(imageData);

       	onImageSuccess(imageData);
       	
       	function onImageSuccess(fileURI) {
       		createFileEntry(fileURI);
       	}
       	
       	function createFileEntry(fileURI) {
       		console.log(fileURI);
       		window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
       	}

       	function copyFile(fileEntry) {
       		console.log(fileEntry);
       		var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
       	 	var newName = makeid() + name;
       	 	
       	 	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
       	 		fileEntry.copyTo(fileSystem2,newName, onCopySuccess,fail);
       	 	},fail);
       	}

       	function upload() {
   	        var options = {
   	            fileKey: "avatar",
   	            fileName: "image.png",
   	            chunkedMode: false,
   	            mimeType: "image/png"
   	        };
   	        $cordovaFileTransfer.upload("http://smartsales.heroku.com/product/:id/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
   	            console.log("SUCCESS: " + JSON.stringify(result.response));
   	        }, function(err) {
   	            console.log("ERROR: " + JSON.stringify(err));
   	        }, function (progress) {
   	            // constant progress updates
   	        });
       	}
       	// $cordovaFileTransfer.upload(server, filePath, options)

       	function onCopySuccess(entry) {
       		$scope.$apply(function () {
       	 	$scope.images.push(entry.nativeURL);
       	 	});
       	}
       	 
       	 function fail(error) {
       	 	console.log("fail: " + error.code);
       	 }

       	 function makeid() {
       	 	var text = "";
       	  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
       	  
       	  	for (var i=0; i < 5; i++) {
       	  		text += possible.charAt(Math.floor(Math.random() * possible.length));
       	  	}
       	  	return text;
       	 }
       	 

       }, function(err) {
         // error
       });


    }


    $scope.urlForImage = function(imageName) {
        var name = imageName.substr(imageName.lastIndexOf('/') + 1);
        var trueOrigin = cordova.file.dataDirectory + name;
        console.log(trueOrigin);
        return trueOrigin;
    }

	function upload() {
        var options = {
            fileKey: "avatar",
            fileName: "image.png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        $cordovaFileTransfer.upload("http://smartsales.heroku.com/product/:id/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
	}


	// The Android Persistent storage location now defaults to "Internal". Please check this plugins README to see if you application needs any changes in its config.xml.
	// If this is a new application no changes are required.
	// If this is an update to an existing application that did not specify an "AndroidPersistentFileLocation" you may need to add:
 //      "<preference name="AndroidPersistentFileLocation" value="Compatibility" />"
	// to config.xml in order for the application to find previously stored files.


  $scope.products = [
    { title: 'Beer', id: 1 },
    { title: 'Flan', id: 2 },
    { title: 'Bread', id: 3 },
    { title: 'Carrots', id: 4 },
    { title: 'Leeks', id: 5 },
    { title: 'Wine', id: 6 }
  ];



})