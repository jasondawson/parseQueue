var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postData = function(question) {
		dfd = $q.defer();
		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: {
				'question': question,
				'status': 'red'
			}
		}).then(function(res) {
			//console.log(res);
			dfd.resolve(res);
		})

		return dfd.promise;
	}


	this.getData = function() {
		dfd = $q.defer();
		$http.get('https://api.parse.com/1/classes/questions').then(function(res) {
			res = res.data.results;
			dfd.resolve(res);


		});
		return dfd.promise;
	}

	this.updateData = function(id) {
		dfd = $q.defer();
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/questions/' + id,
			data: {
				'status': 'yellow'
			}
		})

	}

	this.deleteData = function(id) {
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/questions/' + id
		})
	}

})