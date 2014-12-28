/**
 * Created by LG on 22/12/2014.

 */

var MyFirstApp = angular.module('MyFirstApp');

MyFirstApp.directive('basicDirective', function(){
    return {
        //determina donde puede usarse
        restrict: 'E',
//        transclude: false,
        templateUrl: 'scripts/basic-directive/views/basic-directive-view.html',
        scope: {
            pirulo: '&funny'
        }
    }
});
