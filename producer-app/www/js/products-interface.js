var server = angular.module('server', [])

server.factory('productsInterface', ['$http', function($http){

	productsInterface = {};
	var timeoutLength = 10000;
	var baseUrl = 'http://smartsales.heroku.com/products',
		url,
		method,
		params = {};
	var request = {
		    method: method,
		    url: url,
		    timeout: timeoutLength,
		    headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: params
		};

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
	}

	productsInterface.uploadImage = function(data, success, error){
		url = baseUrl + '/:id/upload';
		method = 'POST';
	}

	productsInterface.registerProduct = function(data, success, error){
		url = baseUrl + '/register';
		method = 'POST';

		params = { 'units' : data.units,
				   'description' : data.description, 
				   'name': data.name, 
				   'tags' : data.tags, 
				   'photos' : data.photos}

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