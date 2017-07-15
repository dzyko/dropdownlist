'use strict';

define([], function() {
    ListItemCtrl.$inject = ['$scope'];
    function ListItemCtrl($scope) {
        var ctrl = this;
        console.log('============ ListItemCtrl constructor ================');

        $scope.select = function(item) {
            // console.log(item);
            // console.log(ctrl.dropdownListCtrl);
            ctrl.dropdownListCtrl.onChange({value: item});
        };

        ctrl.$onInit = function() {
            ctrl.dropdownListCtrl.addItem(ctrl);
            console.log(ctrl);
        };
    };
    return ListItemCtrl;
});