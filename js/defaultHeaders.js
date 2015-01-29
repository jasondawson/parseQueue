var app = angular.module('parseQ');

	app.factory('httpRequestInterceptor', function () {
	  return {
	    request: function (config) {
	      config.headers = {'X-Parse-Application-Id': '8dqSX0s0XXlcYWOmqwyEw2nZtOoSkqMx321y59fY', 'X-Parse-REST-API-Key': 'XnY18wY7lJ26PUIjijiqXTdziSGxhbEqeANmdAA7', 'Content-type': 'application/json'}
	      return config;
	    }
	  };
	});