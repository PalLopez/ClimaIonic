angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Chats, Units, Cities, Dias) {
   $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Cities.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Units.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.city = data.city.name;
      });
    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Cities.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Units.get()).success(function (data) {
      Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      $scope.city = data.city.name;
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('ChatsCtrl', function($scope, $http, Chats, Units, Cities, Dias) {
  $scope.chats = Chats.all();
  $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + Cities.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Units.get()).success(function (data) {
      Chats.set(data.list);
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('horasCtrl', function($scope, $http, Chats, Units, Cities, Dias) {
  $http.get("http://api.openweathermap.org/data/2.5/forecast/?q=" + Cities.get() + "&cnt=" + Dias.get() + "&lang=es&units=" + Units.get()).success(function (data) {
    Chats.set(data.list);
    $scope.chats = Chats.all();
  });
})

.controller('horasDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Units, Cities) {
  $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }
  $scope.cancun = function(){
      Cities.set("cancun");
  }
  $scope.merida = function(){
      Cities.set("merida");
  }
})

.controller('GradosCtrl', function($scope, Units) {
  $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }
})

.controller('CiudadesCtrl', function($scope, Cities) {
  $scope.cancun = function(){
      Cities.set("cancun");
  }
  $scope.merida = function(){
      Cities.set("merida");
  }
  $scope.guadalajara = function(){
      Cities.set("guadalajara");
  }
  $scope.chetumal = function(){
      Cities.set("chetumal");
  }
})

.controller('selectdiasCtrl', function($scope, Dias) {
  $scope.uno = function(){
      Dias.set("1");
  }
  $scope.dos = function(){
      Dias.set("2");
  }
  $scope.tres = function(){
      Dias.set("3");
  }
   $scope.cuatro = function(){
      Dias.set("4");
  }
  $scope.cinco= function(){
      Dias.set("5");
  }
  $scope.seis = function(){
      Dias.set("6");
  }
  $scope.siete = function(){
      Dias.set("7");
  }
  $scope.ocho = function(){
      Dias.set("8");
  }
  $scope.nueve = function(){
      Dias.set("9");
  }
});
