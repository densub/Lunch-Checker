(function(){
'use strict';


angular.module('myapp', [])
.controller('ctrl', ctrl );

ctrl.$inject = ['$scope'];

function ctrl ($scope) {
$scope.food = "";
$scope.message = "";
$scope.enjoy = function() {
    var array = $scope.food.split(',');
    if ($scope.food == ""){
        $scope.message = "Please enter data";
    }else{
        if (array.length <= 3){
            $scope.message = "Enjoy!";
            
        }else{
            $scope.message= "too much";
        }
    }

};
}









})();  
    
