
function drawCard(container_id, recipe) {
    let recyclecount;
    recipe.child('recyclecount').val() != null ? recyclecount = 'recyclecount' : recyclecount = 'reciclecount';

    $("#" + container_id).append('<div class="recipe_card col s3 m3 l4">' + 
        '<div class="card blue-grey darken-1">' + 
            '<div class="card-content white-text">' + 
                '<span class="card-title">' + 
                    recipe.child('name').val() + 
                '</span>' +
                '<h4>' + 
                    recipe.child(recyclecount).val() + 
                '</h4>' + 
            '</div>' + 
        '<div class="card-action">' + 
        '<a href="#">This is a link</a><a href="#">This is a link</a></div></div></div>'
    );

}