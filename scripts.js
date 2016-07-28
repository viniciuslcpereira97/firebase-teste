var config = {
    apiKey: "AIzaSyAlHIWhJG4B1xL1moWeAPutmhDZjZs9lg8",
    authDomain: "reciclo-50c10.firebaseapp.com",
    databaseURL: "https://reciclo-50c10.firebaseio.com",
    storageBucket: "reciclo-50c10.appspot.com",
};
firebase.initializeApp(config);

firebase.database().ref('/recipes').on('value', function(recipes) {
    $('.recipe_card').remove();
    recipes.forEach(function(recipe) {
        drawCard('recipes-container', recipe);
    });
});
