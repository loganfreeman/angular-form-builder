.controller('carousel', ['$scope', 'global', function ($scope, global) {

	// Check to see if feed has loaded
    $scope.$watch(function(){
        $scope.isLoading = global.isLoading
    })

    $scope.config = {
    	"bullets"   : true,
    	"navArrows" : true,
    	"autoplay"  : true
    }

    $scope.slides = [{
    	"title" : "lorem Ipsum",
    	"copy"  : "lorem Ispum"
    },{
    	"title" : "lorem Ipsum",
    	"copy"  : "lorem Ispum"
    },{
    	"title" : "lorem Ipsum",
    	"copy"  : "lorem Ispum"
    },{
        "title" : "lorem Ipsum",
        "copy"  : "lorem Ispum"
    }]

}])
