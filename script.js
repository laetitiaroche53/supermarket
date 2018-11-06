
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
        timeSeconds: 15,
        ingredientsBons: [0, 1, 2, 3, 4],
        supermarket: [
            [0, 5, 6],
            [1, 3, 8],
            [7, 2, 4],
        ],
    },
];


window.onload = function () {
    $('.gif').hide();
    var startButton = document.getElementById('start');
    startButton.onclick = function () {

    chronometer.startWatch();

    document.getElementsByClassName('recette-name').innerHTML = recettes[0].name;
    var ingredientsName = document.getElementsByClassName("ingredients-name");
    ingredientsName.innerHTML = recettes[0].ingredientsBons;

    var supermarket = recettes[0].supermarket
    for (var i = 0; i < supermarket.length; i++) {
        for (var j = 0; j < supermarket[i].length; j++) {
            var element1id = recettes[0].supermarket[i][j];
            var imgurl = ingredients[element1id].image;
            var img = $('.row' + i + '>.image' + j);
            img.height = 100;
            img.width = 100;
            img.css("background-image", "url(" + imgurl + ")");
        }
    }
};
};

function loseGame(){
    $('.game').hide();
    $('.gif').show();
    $('.recette .texte').hide();
    $('.recette .chronometer').hide();
}

var positionCaddy = { x: -1, y: 0 };

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: $(".caddy").animate({ "left": "-=200px" });
            positionCaddy.y = positionCaddy.y - 1;
            console.log('left');
            break;

        case 39: $(".caddy").animate({ "left": "+=200px" });
            positionCaddy.y = positionCaddy.y + 1;
            console.log('right');
            break;

        case 38: $(".caddy").animate({ "top": "-=140px" });
            positionCaddy.x = positionCaddy.x - 1;
            console.log('up');
            break;

        case 40: $(".caddy").animate({ "top": "+=140px" });
            positionCaddy.x = positionCaddy.x + 1;
            console.log('down');
            break;
    };

    var ingredient = recettes[0].supermarket[positionCaddy.x][positionCaddy.y];
    console.log(ingredient, positionCaddy);
    if (!recettes[0].ingredientsBons.includes(ingredient)) {
        loseGame();
    }
    window.onload;
}


var chronometer = {
    seconds: 0,
    minutes: 0,
    underTen: function () {
        if (chronometer.seconds < 10) {
        chronometer.seconds = String(this.seconds).padStart(2, "0");
        }
        if (chronometer.minutes < 10) { chronometer.minutes = String(this.minutes).padStart(2, "0"); }
    },

    run: function () {
        chronometer.underTen();

        if (chronometer.seconds == 59) {
            chronometer.minutes++;
            chronometer.seconds = 0;
        }
        else {
        chronometer.seconds++;
        };
        if (chronometer.seconds == recettes[0].timeSeconds) {
            loseGame();
        };    
        document.getElementById("seconds").innerHTML = chronometer.seconds;
        document.getElementById("minutes").innerHTML = chronometer.minutes;
    },
    intervalRef: {},
    startWatch: function () {
        this.intervalRef = setInterval(this.run, 1000);
    },
};




// document.getElementsByClassName("recette-name").innerHTML = "an apple pie";


// function loseGame(){

// }


// function getRecetteName(){
//     var recetteChoice = document.getElementsByClassName("recette-name");
//     return recetteChoice.innerHTML="an apple pie";
//   }




