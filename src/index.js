'use strict';

var jquery = require('jquery');
window.jQuery = jquery;
window.$ = jquery;

require(['angular', 'bootstrap', './components'], function(angular) {
        angular.module('app', ['components'])
        .controller('app', function($scope, $locale) {
            $scope.value = {a:7};
            $scope.items = [{title:'111', id:1}, {title:'222', id:2}, {title:'333', id:3}];
            $scope.test = function(ii) {
                console.log('============== test ===============');
                console.log(ii);
            };
        });
        angular.bootstrap(document, ['app']);
    }
);


 
//test2
//test3