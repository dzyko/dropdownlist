'use strict';

define([], function() {
    DropdownListCtrl.$inject = ['$scope'];
    function DropdownListCtrl($scope) {
        var ctrl = this;
        console.log('============ DropdownListCtrl constructor ================');

        $scope.itemsList = [];

        ctrl.addItem = function(item) {
            $scope.itemsList.push(item);
        };

        // $scope.select = function(item) {
        //     ctrl.onChange(item);
        // };
    };
    return DropdownListCtrl;
});