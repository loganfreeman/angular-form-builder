.directive('tiles', function(){
	return{
		restrict:"AE",
		link : function(scope,element,attrs){

			var tiles = element.children();

			for (var i = 0; i < tiles.length; i ++ ){
				console.log(tiles[i].clientHeight, tiles[i].clientWidth)
			}
		}
	}
})