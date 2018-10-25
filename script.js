
var recette = [
    {recetteName: 'Apple Pie', ingredients: [{ name : "Flour", image : "./images/flour.png"}, 
                                     { name : "Sugar", image : "./images/sugar.jpg"},
                                     { name : "Butter", image : "./images/butter.png" },
                                     { name : "Apple", image : "./images/apple.jpg" },
                                     { name : "Honey", image : "./images/honey.jpg"},
    {recetteName: 'Burger',    ingredients: ["Bread", "Steack", "Salad", "Tomato", "Cheese"]},
];   

//fonction pour générer aléatoirement une des recettes ??
function randomSelector(recette){
    var keysArr = Object.keys(recette);
    var numKeys = keysArr.length;
    var rndIndx = Math.floor(Math.random() * numKeys);
    return recette[keysArr[rdnIndx]];
    console.log(recette[keysArr[rdnIndx]];);
};




