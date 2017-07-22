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

    $stateProvider.state('redBricks', {
      url: '/bricks/red',
      templateUrl: 'views/bricks.html',
      controller: 'RedBricksCtrl as brick'
    });

    $stateProvider.state('blueBricks', {
      url: '/bricks/blue',
      templateUrl: 'views/bricks.html',
      controller: 'BlueBricksCtrl as brick'
    });

    $stateProvider.state('greenBricks', {
      url: '/bricks/green',
      templateUrl: 'views/bricks.html',
      controller: 'GreenBricksCtrl as brick'
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
