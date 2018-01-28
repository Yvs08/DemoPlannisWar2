
'use strict';


/**
 * Déclaration de l'application routeApp
 */
var routeApp = angular.module('routeApp', [
    // Dépendances du "module"
    'ngRoute',
    'routeAppControllers'
]);
// mainApp ng-app
var routeAppControllers = angular.module('routeAppControllers', []);


// Contrôleur de la page de delete
routeAppControllers.controller('homeCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.plop = {};

        $scope.plop = {
            state: 'todo'

        };


        $scope.submitForms = function () {
            console.log("posting data....");
            var formData = $scope.plop;
            console.log(formData);
            var addUrl = 'http://localhost:8080/deletetodobyforms';
            $http.post(addUrl, formData)
                    .success(function ( ) {
                        
                    });
        };
    }
]);

routeAppControllers.factory('MathService', function () {
    var factory = {};

    factory.multiply = function (a, b) {
        return a * b; 
    };
    return factory;
});

routeAppControllers.service('CalcService', function (MathService) {
    this.square = function (a) {
        return MathService.multiply(a, a);
    }
});

routeAppControllers.controller('CalcController', function ($scope, CalcService) {
    $scope.square = function () {
        $scope.result = CalcService.square($scope.number);
    }
});




// Contrôleur de la page de validation
routeAppControllers.controller('contactCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.plop = {};

        $scope.plop = {
            state: 'todo'

        };
        $scope.message = "Vous avez Validé cette Todo Dans la Base";
        $scope.submitFormse = function () {
            console.log("posting data....");
            var formData = $scope.plop;
            console.log(formData);
            var addUrl = 'http://localhost:8080/validatetodobyforms';
            $http.post(addUrl, formData)
                    .success(function (response) {
                        $scope.validate = response;
                    });
        };
    }
]);


routeAppControllers.controller('contactadd', ['$scope', '$http', '$window',
    function ($scope, $http, $window) {
      
        $scope.user = {};
        $scope.message = "Vous avez inserer ce User Dans la Base";

        $scope.submitForm = function () {
            console.log("posting data....");
            var formData = $scope.user;
            console.log(formData);
            var addUrl = 'http://localhost:8080/demo/add';
            console.log(addUrl);
            $http.post(addUrl, formData)
                    .success(function(response){
                       console.log('in success:',response); 
                       $window.location.href = '/#/list';
                    })
                    .error(function(response){
                       console.log('in Error:',response);  
                    });
                            
        };



    }
]);


routeAppControllers.controller('contactadaffaire', ['$scope', '$http', '$window',
    function ($scope, $http, $window) {
       
       $scope.message = "Vous avez inserer Un nouveau Partners Dans la Base";

        $scope.submitForm = function () {
            console.log("posting data....");
            var formData = $scope.partners;
            console.log(formData);
            var addUrl = 'http://localhost:8080/demo/addParts';
            $http.post(addUrl, formData)
                    .success(function (response) {
                        $scope.status = 'The partners was saved!';
                        $scope.date = response;
                        $window.location.href = '/#/list';
                    }).error(function(response){
                       console.log('in Error:',response);  
                    });
        };
    }
]);



routeAppControllers.controller('contactad', ['$scope', '$http',
    function ($scope, $http) {
        $scope.submitFormular1 = function () {
            console.log("posting data....");
            var formData = $scope.plop;
            console.log(formData);
            var addUrl = 'http://localhost:8080/searchtodobyforms';
            $http.post(addUrl, formData)
                    .success(function (response) {

                        $scope.plo = response;

                    });
        };

    }
]);

routeAppControllers.controller('contactad1', ['$scope', '$http',
    function ($scope, $http) {
        $scope.submitFormular4 = function () {
            console.log("posting data....");
            var formData = $scope.plop;
            console.log(formData);
            var addUrl = 'http://localhost:8080/sorttodobyforms';
            $http.post(addUrl, formData)
                    .success(function (response) {

                        $scope.sort = response;

                    });
        };

    }
]);
routeAppControllers.controller('contactad2', ['$scope', '$http',
    function ($scope, $http) {
        var url = "http://localhost:8080/todo"
        $scope.message = "Overviews TodoList In DataBase";

        $http.get(url).success(function (response) {
            $scope.plopes = response;
        });


    }
]);



routeApp.config(['$routeProvider',
    function ($routeProvider) {

        // Système de routage
        $routeProvider
                .when('/delete', {
                    templateUrl: 'views/delete.html',
                    controller: 'homeCtrl'
                })
                .when('/validate', {
                    templateUrl: 'views/validate.html',
                    controller: 'contactCtrl'
                })

                .when('/add', {
                    templateUrl: 'views/addAfaire.html',
                    controller: 'contactadaffaire'
                })

                .when('/service', {
                    templateUrl: 'views/service.html',
                    controller: 'CalcController'
                })
                .when('/search', {
                    templateUrl: 'views/searchTodo.html',
                    controller: 'contactad'
                })
                .when('/sort', {
                    templateUrl: 'views/sortTodo.html',
                    controller: 'contactad1'
                })
                .when('/list', {
                    templateUrl: 'views/listTodo.html',
                    controller: 'contactad2'
                })
                .when('/afaire', {
                    templateUrl: 'views/index2.html',
                    controller: 'contactadd'
                })


                .otherwise({
                    redirectTo: '/add'
                });

    }
]);