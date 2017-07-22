'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('bricks', {
      url: '/bricks/:color',
      templateUrl: 'views/bricks.html',
      controllerProvider: function($stateParams) {
        return $stateParams.color.charAt(0).toUpperCase() + $stateParams.color.slice(1) + 'BricksCtrl';
      },
      controllerAs: 'brick'
    });

    $stateProvider.state('bricks.cart', {
      url: '/cart',
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl as cart'
    });

    $stateProvider.state('cart', {
      url: '/cart',
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl as cart'
    });

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/instructions.html'
    });
});
