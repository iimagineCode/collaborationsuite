(function(){
    'use strict';

    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dash');

    $stateProvider
        .state('dash', {
            url: '/dash',
            templateUrl: 'src/dashboard/board.html',
            controller: 'boardCtrl',
            controllerAs: 'vm'
        });
    });
})();