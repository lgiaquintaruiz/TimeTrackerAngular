var MyFirstApp = angular.module('MyFirstApp', []);

MyFirstApp.controller('SecondaryCtrl', function($scope, TaskList){

//    Hello2Srv.setValue('Two');
//    HelloSrv.setValue('One');
//    $scope.valor2 = Hello2Srv.getValue();
//    $scope.valor1 = HelloSrv.getValue();
    $scope.name = "Leonardo Giaquinta";
//    Se rellena la lista de tareas
    $scope.tasks = [
    {
        "Desc" : "Survey Stage",
        "Time" : "8:30hs",
        "Edit" : "X"
    },
    {
        "Desc" : "Analysis Stage",
        "Time" : "20hs",
        "Edit" : "X"
    },
    {
        "Desc" : "Desing Stage",
        "Time" : "10hs",
        "Edit" : "X"
    },
    {
        "Desc" : "Development Stage",
        "Time" : "30hs",
        "Edit" : "X"
    }
    ];

    $scope.addTask = function (){
        $scope.tasks.push(
            {
                "Desc" : document.getElementById("txtTask").value,
                "Time" : document.getElementById("txtTime").value,
                "Edit" : "X"
            }
        );
    };
});

MyFirstApp.factory('HelloSrv', function(){
    var _value = null;

    return {

        setValue: function(value){
            _value = value;
        },
        getValue: function(){
            return _value;
        }
    }
});

MyFirstApp.service('Hello2Srv', function(){
   var _value   = null;

    this.setValue = function(value){
        _value = value;
    },
    this.getValue = function(){
        return _value;
    }
});

MyFirstApp.service('TaskList', function(){
    var _value   = null;

    this.setValue = function(value){
        _value = value;
    },
        this.getValue = function(){
            return _value;
        }
});