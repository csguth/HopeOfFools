'use strict';
angular.module('Hopeoffools.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('FinanceiroCtrl', function($scope, $ionicModal, $timeout) {
  $scope.iniciar = function()
  {
    $scope.movimentacoes = [];
    $scope.novaMovimentacao = {
      nome: '',
      valor: 0,
      data: 1288323623006
    };
    $scope.buscarMovimentacoes();
      // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/financeiro-adicionar.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
  };

  $scope.buscarMovimentacoes = function()
  {
    $scope.movimentacoes.push(
    {
      nome: "Caixa inicial",
      valor: 325.0,
      data: 1288323623006
    },
    {
      nome: "Van para Curitiba",
      valor: -700.0,
      data: 1288323623006
    },
    {
      nome: "Venda de Camisetas no Célula",
      valor: 500.0,
      data: 1288323623006
    },
    {
      nome: "Venda de EPS",
      valor: 93.0,
      data: 1288323623006
    });
  };
  $scope.mostrarFormulario = function()
  {
    $scope.novaMovimentacao.data = new Date().getTime();
    $scope.modal.show();
  };
  $scope.esconderFormulario = function()
  {
    $scope.modal.hide();
  };
  $scope.adicionarMovimentacao = function()
  {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    
    $scope.movimentacoes.push($scope.novaMovimentacao);
    $scope.novaMovimentacao = {
      nome: '',
      valor: 0,
      data: 1288323623006
    };
    $scope.esconderFormulario();
    $timeout(function() {
      $scope.buscarMovimentacoes();
    }, 1000);
  };
  $scope.saldo = function()
  {
    var saldo = 0.0;
    angular.forEach($scope.movimentacoes, function(mov)
      {
        saldo += mov.valor;
      });
    return saldo;
  };

  $scope.iniciar();
});
