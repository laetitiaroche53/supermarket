
//Cacher le gif au démarrage
$('.gif').hide();
var positionCaddy;
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
    { id: 9, name: "ananas", image: "./images/ananas.png"},
    { id: 10, name: "cheese", image: "./images/cheese.png" },
    { id: 11, name: "chocolat", image: "./images/chocolat.png"},
    { id: 12, name: "citron", image:"./images/citron.png" },
    { id: 13, name: "concombre", image:"./images/concombre.png" },
    { id: 14, name: "pain", image:"./images/pain.png" },
    { id: 15, name: "pasta", image: "./images/pasta.png"},
    { id: 16, name: "salad", image: "./images/salad.png"},
    { id: 17, name: "tomate", image:"./images/tomate.png" },
    { id: 18, name: "yahourt", image: "./images/yahourt.png"},
    { id: 19, name: "steack", image:"./images/steack.png" },
];



var recettes = [
    {
        name: "An apple pie ",
        timeMinuts: 0,
        timeSeconds: 50,
        ingredientsBons: [0, 1, 2, 3, 4],
        supermarket: [
            [0, 5, 6],
            [1, 3, 8],
            [7, 2, 4],
        ],
    },
    {
        name: "Burger ",
        timeMinuts: 0,
        timeSeconds: 50,
        ingredientsBons: [14, 10, 16, 19, 17],
        supermarket: [
            [9, 10, 14],
            [17, 16, 11],
            [12, 19, 15],
        ],
    },
];


window.onload = function () {
    $('.gif').show();
    $('.lose').hide();
    $('.won').hide();
    $('.caddy').hide();

    var startButton = document.getElementById('start');
    startButton.onclick = function () {

    $('.game').show();
    $('.caddy').show();
    $('.gif').hide();
    $('.won').hide();
    $('.lose').hide();
    $('.recette .texte').show();
    $('.recette .chronometer').show();
    
    chronometer.reset();
    chronometer.startWatch();
    

    document.getElementById("recette-name").innerHTML = recettes[0].name;

    document.getElementById("ingredients-name").innerHTML = " " + ingredients[0].name + " " +ingredients[1].name + " " + ingredients[2].name + " " + ingredients[3].name + " " + ingredients[4].name

    document.getElementById("time-minutes").innerHTML = recettes[0].timeMinuts;
    document.getElementById("time-seconds").innerHTML = recettes[0].timeSeconds;
    
    positionCaddy = { x: -1, y: 0 };
    $('.caddy').top = '0px';
    $('.caddy').left = '0px';

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
    $('.lose').show();
    $('.recette .texte').hide();
    $('.recette .chronometer').hide();
    $('.won').hide();
    $('.gif').hide();
    document.getElementById("perduPlayer").play();
}

function winGame(){
    $('.won').show();
    $('.game').hide();
    $('.lose').hide();
    $('.recette .texte').hide();
    $('.recette .chronometer').hide();
    $('.gif').hide();
    document.getElementById("caissePlayer").play();
}

positionCaddy = { x: -1, y: 0 };

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
    } else if (recettes[0].ingredientsBons[4]==(ingredient)) {
        winGame();
    } else if (recettes[0].ingredientsBons[0]==(ingredient)) {
        document.getElementById("bipPlayer").play();
    } else if (recettes[0].ingredientsBons[1]==(ingredient)) {
    document.getElementById("bipPlayer").play();
    } else if (recettes[0].ingredientsBons[2]==(ingredient)) {
    document.getElementById("bipPlayer").play();
    } else if (recettes[0].ingredientsBons[3]==(ingredient)) {
    document.getElementById("bipPlayer").play();
    } else if (recettes[0].ingredientsBons[4]==(ingredient)) {
    document.getElementById("bipPlayer").play();
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

    reset: function (){ 
        document.getElementById("seconds").innerHTML = "00";
        chronometer.seconds = 0;
        document.getElementById("minutes").innerHTML = "00";
        chronometer.minutes = 0;
        clearInterval(this.intervalRef);
        },

    intervalRef: {},
    startWatch: function () {
        this.intervalRef = setInterval(this.run, 1000);
    },
};









