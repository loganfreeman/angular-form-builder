
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: '/views/global/home/home.html'
        })

        .when('/styleguide', {
        	templateUrl: '/views/modules/styleguide/base.html'
    	})

    	.when('/tiles', {
        	templateUrl: '/views/modules/tiles/tiles.html',
    	})

        .when('/carousel', {
            templateUrl: '/views/modules/carousel/carousel.html',
        })
        

	$locationProvider.html5Mode(true);
}])