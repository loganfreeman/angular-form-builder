.controller('nav', ['$scope', '$http', 'global', function ($scope, $http, global) {

	// Check to see if feed has loaded
    $scope.$watch(function(){
        $scope.isLoading = global.isLoading
    })

}])
