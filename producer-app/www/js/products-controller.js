var app = angular.module('starter.controllers')

app.controller('ProductsController', function($scope, $ionicModal, $timeout, productsInterface, $cordovaCamera, $cordovaFileTransfer, $cordovaFile, SharedProductId, SharedUid, SharedName) {



	$scope.productData = {};
	$scope.images = [];
	$scope.tags = ['food', 'halal', 'meat', 'pork', 'chicken', 'beef', 'lamb', 'vegitables', 'bread', 'baking', 'desert', 'alcohol', 'wine', 'beer', 'ale'];

  $scope.hobbyistName =  SharedName.sharedName;

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

  	$scope.addProduct = function() { 
      $scope.productData.hid = SharedUid.sharedUid;
  		console.log($scope.productData.hid);
      //id 
  		productsInterface.registerProduct($scope.productData, 
                                        function(data){
                                          console.log(data);
                                          $scope.productId = data._id;
                                          SharedProductId.sharedProductId = data._id;
                                          $scope.uploadPhoto();
                                        },
                                        function(){}
                                        );



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
       	 	// var newName = $scope.productId + '/upload';
       	 	
       	 	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
       	 		fileEntry.copyTo(fileSystem2,name, onCopySuccess,fail);
       	 	},fail);
       	}


       	function onCopySuccess(entry) {
       		$scope.$apply(function () {
       	 	$scope.images.push(entry.nativeURL);
          var name = entry.nativeURL.substr(entry.nativeURL.lastIndexOf('/') + 1);
          $scope.image1 = cordova.file.dataDirectory + name;
            var trueOrigin = cordova.file.dataDirectory + name;
            upload(trueOrigin, entry.nativeURL);
       	 	});
       	}
       	 
       	 function fail(error) {
       	 	console.log("fail: " + error.code);
       	 }


       }, function(err) {
         // error
       });


    }

    $scope.hideImage = false;
    $scope.message = '';

	function upload(imagePath) {
 
		console.log("upload function");
        var serverUrl = 'http://web.manthanhd.com:3000/product/'+$scope.productId+'/upload';
	
        var options = {
            httpMethod: 'POST',
            fileKey: "photo",
            fileName: "ionic.png",
            chunkedMode: false,
            mimeType: "image/png"
        };

        console.log(options);


        $cordovaFileTransfer.upload(imagePath, serverUrl, options).then(function(result) {
                console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });

        $timeout(function() {
          $scope.message = 'UPLOAD SUCCESS';
          $scope.hideImage = true;
        }, 3000);
        
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