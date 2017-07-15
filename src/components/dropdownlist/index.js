'use strict';

define(['angular', './dropdownList.controller', './listItemCtrl.controller'], function(angular, DropdownListCtrl, ListItemCtrl) {
        return angular.module('components.dropdownlist', [])
            .component('dropdownList', {
                templateUrl: 'components/dropdownlist/dropdownList.html',
                transclude: true,
                // template: '<div>dropdownList</div>',
                bindings: {
                    title: '@',
                    onChange: '&'
                },                
                controller: DropdownListCtrl,
            })
            .component('listItem', {
                require: {
                    dropdownListCtrl: '^dropdownList'
                },
                transclude: true,
                templateUrl: 'components/dropdownlist/listItem.html',
                bindings: {
                    title: '@',
                    value: '<'
                },                
                controller: ListItemCtrl,
            })
            .name;
    }
);
