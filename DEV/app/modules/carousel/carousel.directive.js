.directive('carousel', function(){
	return{
		restrict : "AE",
		replace : true,
		templateUrl : "/views/modules/carousel/carousel.template.html",
		scope : {
			config : "=config",
			slides : "=slides"
		},
		link : function(scope, element, attrs){
			scope.currentSlide = 0
		}		
	}
})