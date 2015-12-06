var server = angular.module('server', [])

server.factory('productsInterface', ['$http', function($http){

	productsInterface = {};
	var timeoutLength = 10000;
	var baseUrl = 'http://web.manthanhd.com:3000/product',
		url,
		method,
		params = {};
	

	productsInterface.getProduct = function(){
		url = baseUrl + '/:id';
		method = 'GET';
	}

	productsInterface.getProductsByTag = function(){
		url = baseUrl + '/all/:tagId';
		method = 'GET';
	}	

	productsInterface.getAllProducts = function(){
		 url = baseUrl + '/all';
		 method = 'GET';

		 // $http(request)
		 // .success(function(data, status, headers, config){
		 //     success(data, status, headers, config);
		 // })
		 // .error(function(data, status, headers, config){
		 //     error(data, status, headers, config);
		 // });

	}

	productsInterface.uploadImage = function(data, success, error){
		url = baseUrl + '/:id/upload';
		method = 'POST';

		params = { 'photos': data.photos};
	}

	productsInterface.registerProduct = function(data, success, error){
		url = baseUrl + '/register';
		method = 'POST';

		params = { 'name': data.name, 
				   'description' : data.description, 
		 		   'unitsAvailable' : data.units,
				   'price' : data.price, 
				   'tags' : 'tag1,tag2,tag3,tag4',
				    'hId' : data.hid}

		var request = {
		    method: method,
		    url: url,
		    timeout: timeoutLength,
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    data: params
		};

		console.log(request);		   

		$http(request)
		.success(function(data, status, headers, config){
		    success(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
		    error(data, status, headers, config);
		});


	}


	 return productsInterface;
}])