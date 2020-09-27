(function(){

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuCategoriesService',MenuCategoriesService)

function MenuCategoriesController($scope, MenuCategoriesService){
	var promise = MenuCategoriesService.addfunction()
	$scope.found1=['a']
	$scope.prakash=""
	promise.then(function(response){
		akash=response.data.menu_items
		prakash=akash
		
	}).catch(function(){
		console.log("some error has occured!!")
	})
	$scope.founds=[]

	$scope.checkitem= function(singh){
      found=[]

		for(var i=0;i<prakash.length;i++){

			if(prakash[i].description.toLowerCase().indexOf(singh)!=-1 && singh!='')
			{
				found.push(prakash[i])
			}
		}
		if(found.length==0){
		$scope.found1=[]	
		}else{
			$scope.found1=['a']
		}
		$scope.founds=found
		
		}
	$scope.removeitem= function(index){
    $scope.founds.splice(index, 1);
}
}
function MenuCategoriesService($http){
 this.addfunction= function(){
 	var response=$http({
 		method:"GET",
 		url: "https://davids-restaurant.herokuapp.com/menu_items.json"
 	})
 	return response
 }
}

})();

// (function () {
// 'use strict';

// angular.module('MenuCategoriesApp', [])
// .controller('MenuCategoriesController', MenuCategoriesController)
// .service('MenuCategoriesService', MenuCategoriesService)


// MenuCategoriesController.$inject = ['MenuCategoriesService'];
// function MenuCategoriesController(MenuCategoriesService) {
//   var menu = this;

//   var promise = MenuCategoriesService.getMenuCategories();

//   promise.then(function (response) {
//     console.log(response.data)
//     menu.categories = response.data;
//   })
//   .catch(function (error) {
//     console.log("Something went terribly wrong.");
//   });

//   menu.logMenuItems = function (shortName) {
//     var promise = MenuCategoriesService.getMenuForCategory(shortName);

//     promise.then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   };

// }


// MenuCategoriesService.$inject = ['$http'];
// function MenuCategoriesService($http) {
//   var service = this;

//   service.getMenuCategories = function () {
//     var response = $http({
//       method: "GET",
//       url: "https://davids-restaurant.herokuapp.com/menu_items.json",
//     });

//     return response;
//   };


//   service.getMenuForCategory = function (shortName) {
//     var response = $http({
//       method: "GET",
//       url: "https://davids-restaurant.herokuapp.com/menu_items.json",
//       params: {
//         category: shortName
//       }
//     });

//     return response;
//   };

// }

// })();