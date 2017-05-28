(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.items="";
$scope.message="";
$scope.validation_message="";
$scope.color="";
$scope.count=function(){

 if ($scope.items=="") {
   $scope.message="";
   $scope.color="red";
   $scope.validation_message="Please enter data first";
 }
 else {
   var itemlist=[];
   itemlist=$scope.items.split(',');
   var len=itemlist.length;
   for (var i = 0; i < len; i++) {
     if(itemlist[i]=="" || itemlist[i]==" "){
       len=len-1;
     }
   }
   if (len<=3) {
      $scope.validation_message="";
     $scope.message="Enjoy";
     $scope.color="green";
   }
   else{
      $scope.validation_message="";
     $scope.message="Too much!";
      $scope.color="green";
   }
 }
}


}
})();
