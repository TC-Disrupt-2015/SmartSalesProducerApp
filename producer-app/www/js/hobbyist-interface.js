var server = angular.module('server')

server.factory('hobbyistInterface', ['$http', function($http){

	hobbiestInterface = {};

	var baseUrl = 'http://smartsales.heroku.com/hobbyist',
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

	hobbiestInterface.createHobbiest = function(data){
		url = baseUrl + '/register';
		method = 'POST';

		params = { 'name' : data.name,
				   'email' : data.email, 
				   'position': data.position}

		$http(request)
		.success(function(data, status, headers, config){
		    success(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
		    error(data, status, headers, config);
		});

	}	


	return hobbiestInterface;
}])
