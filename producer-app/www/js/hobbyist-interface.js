var server = angular.module('server')

server.factory('hobbyistInterface', ['$http', function($http){

	hobbyistInterface = {};
	var timeoutLength = 10000;

	var baseUrl = 'http://web.manthanhd.com:3000/hobbyist',
		url,
		method,
		params = {};
	

	hobbyistInterface.createHobbyist = function(data, success, error){
		url = baseUrl + '/register';
		method = 'POST';


		params = { 'radius': 20,
					'name' : data.name,
				    'email' : data.email, 
				    'location': {"lat": 51.511093,
        						"lon": -0.033544 }
				}

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

	hobbyistInterface.login = function(data, success, error){
		url = baseUrl + '/login/'+data;
		method = 'GET';
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




	return hobbyistInterface;
}])
