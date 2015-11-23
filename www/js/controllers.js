angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
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

.controller('SearchCtrl', function($scope) {

  $scope.results_autores = [
    {
      nombre: 'Pablo Neruda',
      ciudad: 'Isla Negra',
      pais: 'Chile',
      edad: '70',
      cuentos: 45,
      shares: 1542,
      img: 'img/pabloneruda.png'
    },
    {
      nombre: 'Manuel Barrientos',
      ciudad: 'Pudahuel',
      pais: 'Chile',
      edad: '24',
      cuentos: 2,
      shares: 134,
      img: 'img/manuelbarrientos.png'
    },
    {
      nombre: 'Juan C. Márquez',
      ciudad: 'P. Aguirre Cerda',
      pais: 'Chile',
      edad: '50',
      cuentos: 3,
      shares: 12,
      img: 'img/juan.png'
    },
    {
      nombre: 'Eli Paniceres',
      ciudad: 'Montevideo',
      pais: 'Uruguay',
      edad: '19',
      cuentos: 3,
      shares: 233,
      img: 'img/eli.png'
    },
    {
      nombre: 'Ian McEwan',
      ciudad: 'Londres',
      pais: 'Inglaterra',
      edad: '56',
      cuentos: 23,
      shares: 890,
      img: 'img/ianmcewan.png'
    },
    {
      nombre: 'Paulo Coehlo',
      ciudad: 'Rio de Janeiro',
      pais: 'Brazil',
      edad: '85',
      cuentos: 130,
      shares: 2134,
      img: 'img/paulocoehlo.png'
    },        

  ];
  $scope.mas_cuentos = function(result){
    return result.cuentos;
  }
  $scope.ratio_order = function(result){
    return Math.round(100*(result.likes - result.dislikes)/(result.likes + result.dislikes));
  }
  $scope.most_shares = function(result){
    return result.shares;
  }


  $scope.results_cuentos = [
    { 
      title: 'Escrito hallado en un respaldo de asiento de micro', 
      autor: 'Julio Gutiérrez',
      likes: 452,
      dislikes: 52,
      shares: 23,
      id: 1 
    },
    { 
      title: 'Estar Juntos', 
      autor: 'María Beatriz Ortiz',
      likes: 200,
      dislikes: 34,
      shares: 14,
      id: 2 
    },
    { 
      title: 'De Mall', 
      autor: 'María Beatriz Ortiz',
      likes: 200,
      dislikes: 34,
      shares: 45,
      id: 3 
    },
    { 
      title: 'Presunta Inocencia', 
      autor: 'Luisa Urrejola',
      likes: 124,
      dislikes: 12,
      shares: 210, 
      id: 4 
    },
    { 
      title: 'Normandie', 
      autor: 'Soledad Rodillo',
      likes: 1000,
      dislikes: 3,
      shares: 48, 
      id: 5 
    },
    { 
      title: 'Cesante', 
      autor: 'Soledad Rodillo',
      likes: 344,
      dislikes: 43,
      shares: 12,  
      id: 6 
    },
    { 
      title: 'Versos del Ciudadano', 
      autor: 'Jaime Ramos',
      likes: 4526,
      dislikes: 1780,
      shares: 123,  
      id: 7 
    },
    { 
      title: 'Conversando', 
      autor: 'Manuel Barrientos',
      likes: 745,
      dislikes: 4,
      shares: 69,  
      id: 8 
    }
  ];
})

.controller('CuentoCtrl', function($scope) {
  $scope.Math = window.Math;
  $scope.cuento_id = 0;

  $scope.next = function() {
    $scope.cuento_id++;
    if( $scope.cuento_id >= $scope.cuentos.length)
      $scope.cuento_id = 0;
  };

  $scope.cuentos = [
    { 
      title: 'Holocausto',
      author: 'Hugo Aravena',
      text: 'Una vez abierta la entrada comencé a bajar por las frías escaleras hacia la oscuridad. ¡Cuánto tiempo había pasado! Los líquenes cubrían gran parte de las paredes, la humedad se sentía en el aire. Llegando al primer nivel, iluminé con mi linterna una gran bóveda alargada, una especie de túnel cubierto de hermosos mosaicos. Hubiera pensado que era un sistema de navegación subterránea, pero era tal la claridad del agua que me permitió ver los rieles en el fondo. Esta especie de tren cubría kilómetros y kilómetros, como un torrente sanguíneo de la tierra.',
      origin: 'Cerro Navia',
      date: 'Marzo 2010',
      id: 1 
    },
    { 
      title: 'Abracadabra',
      author: 'Patricia Middleton',
      text: 'Cuando la hechicera se transformó en bruja y la varita fue uslero y el amor odio y el odio indiferencia, bastaron siete años y cinco tragos para que el educado caballero no fuera tan caballero ni educado. Hicieron los intentos de rigor: rezos, terapias, amantes, vudú. Volaron plumas y escobas. Se arrancaron gritos y cabellos, hasta que la sangre llegó al río y a todas partes.',
      origin: 'Linares, Chile',
      date: 'Enero 2015', 
      id: 2 
    },
    { 
      title: 'Desencuentro',
      author: 'Ángel Beltrán',
      text: '“Así que Santiago es grande”, señaló él con ironía. \n“¡Ciertamente, inmenso!”, dijo con firmeza la mujer.\n“Entonces nunca nos volveremos a ver”.',
      origin: 'Las Condes, Chile',
      date: 'Febrero 2012',  
      id: 3 
    },
    { 
      title: '¿Me puede explicar, señor Profesor?',
      author: 'Tito Matamala',
      text: 'Aquel que se creía profesor delante de nosotros se ufanaba de la tecnología de punta, de la tecnología de punta, de la tecnología de punta. Hasta que, desde su puesto de la última fila, Claudio sólo le preguntó qué era eso de la tecnología de punta. Y aquel que se creía profesor agarró un lápiz y trazó en la pizarra una flecha ordinaria con aires de pintura rupestre, se dio vuelta hacia nosotros, indicó con el dedo la punta de su flecha mal dibujada y dijo: “Tecnología de punta es la que va aquí”.',
      origin: 'Concepción, Chile',
      date: 'Mayo 2010', 
      id: 4 
    }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});