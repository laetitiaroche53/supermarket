
var ingredients = [
    { id: 0, name: "Flour", image: "./images/flour.png" },
    { id: 1, name: "Sugar", image: "./images/sugar.jpg" },
    { id: 2, name: "Butter", image: "./images/butter.png" },
    { id: 3, name: "Apple", image: "./images/apple.jpg" },
    { id: 4, name: "Honey", image: "./images/honey.jpg" },
    { id: 5, name: "banana", image: "./images/banana.png" },
    { id: 6, name: "rice", image: "./images/rice.jpg" },
    { id: 7, name: "chicken", image: "./images/chicken.png" },
    { id: 8, name: "milk", image: "./images/milk.png" },
];

var recettes = [
    {
        name: "An apple pie ",
        ingredientsBons: [0, 1, 2, 3, 4],
        supermarket: [
            [0, 5, 6],
            [1, 3, 8],
            [7, 2, 4],
        ],
    },
];

// function startGame(){
//     var startGame = document.getElementsByClassName('button');
//      startGame.onclick = window.onload();
//  }

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



document.onkeydown = function(e) {
    var positionCaddy = {x:0, y:-1};
    switch (e.keyCode) {
      case 37: $(".caddy").animate({ "left": "-=200px" }); 
      positionCaddy.x = positionCaddy.x-1;
      console.log ('left'); 
      break;

      case 39: $(".caddy").animate({ "left": "+=200px" }); 
      positionCaddy.x = positionCaddy.x+1;
      console.log ('right'); 
      break;

      case 38: $(".caddy").animate({ "top": "-=140px" }); 
      positionCaddy.y = positionCaddy.y-1;
      console.log ('up'); 
      break;

      case 40: $(".caddy").animate({ "top": "+=140px" }); 
      positionCaddy.y = positionCaddy.y+1;
      console.log ('down'); 
      break;
    };

  //position caddy
  if(positionCaddy.x===positionCaddy.x && positionCaddy.y===positionCaddy.y+1){
    console.log("you lose");
  }else if(positionCaddy.x===positionCaddy.x && positionCaddy.y===positionCaddy.y+2){
  console.log("you lose");
  }else if(positionCaddy.x===positionCaddy.x+1 && positionCaddy.y===positionCaddy.y+2){
  console.log("you lose");
  }else if(positionCaddy.x===positionCaddy.x+2 && positionCaddy.y===positionCaddy.y){
  console.log("you lose"); 
  } else { for (var i = 0; i < 6; i++){
      continue;
  };
  };

    window.onload;
  }
  




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



