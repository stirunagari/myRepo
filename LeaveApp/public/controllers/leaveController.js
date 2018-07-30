(function(){

	angular
	.module('leaveApp')
	.controller('leaveController',leaveController);
	leaveController.$inject = ['$scope', '$rootScope', '$location', '$http'];

	function leaveController ($scope, $rootScope, $location, $http){
	getAllLeaves();

    function getAllLeaves (){
    	$http({
		    method: 'GET',
		    url: '/api/getAllLeaves'
	  	}).then(function(data){
	  		$scope.myLeaves = data.data.leaves;
	  		debugger;
	  	},function(error) {
	  		debugger;
	  	});
    }

 }
})()

