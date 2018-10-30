
//Cacher le gif au démarrage
$('.gif').hide();

var ingredients = [
    { id: 0, name: "Flour", image: "./images/flour.png" },
    { id: 1, name: "Sugar", image: "./images/sugar.png" },
    { id: 2, name: "Butter", image: "./images/butter.png" },
    { id: 3, name: "Apple", image: "./images/apple.png" },
    { id: 4, name: "Honey", image: "./images/honey.png" },
    { id: 5, name: "banana", image: "./images/banana.png" },
    { id: 6, name: "rice", image: "./images/rice.png" },
    { id: 7, name: "chicken", image: "./images/chicken.png" },
    { id: 8, name: "milk", image: "./images/milk.png" },
    // { id: 9, name: "ananas", image: },
    // { id: 10, name: "cheese", image: },
    // { id: 11, name: "chocolat", image: },
    // { id: 12, name: "citron", image: },
    // { id: 13, name: "concombre", image: },
    // { id: 14, name: "pain", image: },
    // { id: 15, name: "pasta", image: },
    // { id: 16, name: "salad", image: },
    // { id: 17, name: "tomate", image: },
    // { id: 18, name: "yahourt", image: },
    // { id: 19, name: "steack", image: },
];



var recettes = [
    {
        name: "An apple pie ",
        time: [30],
        ingredientsBons: [0, 1, 2, 3, 4],
        supermarket: [
            [0, 5, 6],
            [1, 3, 8],
            [7, 2, 4],
        ],
    },
];

// function startGame(){
//      var beginGame = document.getElementsByClassName('button');
//      beginGame.onclick = window.onload();
//  };

// window.onload = function() {
//     document.getElementById("start-button").onclick = function() {
//       startGameWay()
//       startGameGrass()
//       startGameLine()
//       drawCar()
//       obstacle1();
//       obstacle2();
//     };
//    }



window.onload = function () {
    $('.gif').hide();
    var btnLeft     = document.getElementById('start');
    btnLeft.onclick = function(){
    chronometer.startStopwatch()
    };
    var supermarket = recettes[0].supermarket
    for (var i = 0; i < supermarket.length; i++) {
        for (var j = 0; j < supermarket[i].length; j++) {
            var element1id = recettes[0].supermarket[i][j];
            var imgurl = ingredients[element1id].image;
            var img= $('.row' + i + '>.image' + j);
            img.height=100;
            img.width=100;
            img.css("background-image", "url(" + imgurl + ")");
    }}
};


var positionCaddy = {x:-1, y:0};

document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: $(".caddy").animate({ "left": "-=200px" }); 
      positionCaddy.y = positionCaddy.y-1;
      console.log ('left'); 
      break;

      case 39: $(".caddy").animate({ "left": "+=200px" }); 
      positionCaddy.y = positionCaddy.y+1;
      console.log ('right'); 
      break;

      case 38: $(".caddy").animate({ "top": "-=140px" }); 
      positionCaddy.x = positionCaddy.x-1;
      console.log ('up'); 
      break;

      case 40: $(".caddy").animate({ "top": "+=140px" }); 
      positionCaddy.x = positionCaddy.x+1;
      console.log ('down'); 
      break;
    };

    var ingredient = recettes[0].supermarket[positionCaddy.x][positionCaddy.y];
    console.log(ingredient, positionCaddy);
    if (recettes[0].ingredientsBons.includes(ingredient)){
        for (var i=0; i<6; i++) {
        continue;}
    }else{
            $('.game').hide();
            $('.gif').show();
            // $('.game').image("https://giphy.com/gifs/148funQReeOjAI/html5");
        }

    window.onload;
  }


  var chronometer = {
    seconds: 0,
    minutes: 0,
    underTen: function(){
      if  (chronometer.seconds < 10) {chronometer.seconds = String(this.seconds).padStart(2,"0");
      }
      if  (chronometer.minutes < 10) {chronometer.minutes = String(this.minutes).padStart(2,"0");}
    },
    
    run: function () {
      chronometer.underTen();
   
      if (chronometer.seconds == 59){
        chronometer.minutes++;
        chronometer.seconds = 0;
      }
      else { chronometer.seconds++;
      };
        document.getElementById("seconds").innerHTML = chronometer.seconds;
        document.getElementById("minutes").innerHTML = chronometer.minutes;
      },
    split: function (){
      let li =  String(chronometer.minutes).padStart(2,"0") + ":" + String(chronometer.seconds).padStart(2,"0") + ":" + String(this.miliseconds).padStart(2,"0");
      let splitArray = document.getElementById("splits");
      splitArray.insertAdjacentHTML('beforeend', `<li>${li}</li>`);
      },
      reset: function (){ 
      document.getElementById("seconds").innerHTML = "00";
      chronometer.seconds = 0;
      document.getElementById("minutes").innerHTML = "00";
      chronometer.minutes = 0;
      document.getElementById("splits").innerHTML = "";
      },
    intervalRef: {},
      startStopwatch: function() {
        this.intervalRef = setInterval(this.run, 10);
      },
      stopStopwatch: function() {
        clearInterval(chronometer.intervalRef);
    }
  };
  
//   function endGame(){
//       if ()
//   }

  

//   var recetteChoice = document.getElementById("recette-name");
//   recetteChoice.innerHTML = "an apple pie";

// document.getElementsByClassName("recette-name").innerHTML = "an apple pie";


// function loseGame(){

// }

//   document.onkeydown {
//     $( ".rowstart" ).animate({ "left": "+=50px" }, "slow" );
//   });

// function getRecetteName(){
//     var recetteChoice = document.getElementById('recette-name');
//     return recetteChoice.innerHTML="an apple pie";
//   }





// function randomSelector(recettes){
//     var keysArr = Object.keys(recette);
//     var numKeys = keysArr.length;
//     var rndIndx = Math.floor(Math.random() * numKeys);
//     return recette[keysArr[rdnIndx]];
//     console.log(recette[keysArr[rdnIndx]];);
// };


// GIF SUR JQUERY 
        // jQuery(function($){
        //     $('#ajax-loading').hide(); // On masque le gif au chargement de la page
             

        // http://www.finalclap.com/faq/225-jquery-ajax-loading-gif
        //     $('#ajax-load').click(function(e){
        //         // Affichage du gif de chargement et envoi requête AJAX
        //         $('#ajax-loading').show();
        //         $.get(
        //             'http://api.geonames.org/citiesJSON',
        //             {north: 44.1, south: -9.9, east: -22.4, west: 55.2, lang: 'de', username: 'demo'},
        //             function(data){
        //                 $('#ajax-loading').hide(); // On masque le gif de chargement quand le serveur a répondu
        //             }
        //         );
        //     });
        // });


//     
//     //window.open("https://giphy.com/gifs/148funQReeOjAI/html5",
//    
