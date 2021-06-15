
function renderRestaurants(restaurantsAbstraction) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    const restaurantsHTML = restaurantsAbstraction.map( restaurant => {
        var arr = [];
        for(var i = 0; i < restaurant.priceRating; i++){
            arr.push(`<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Font_Awesome_5_solid_dollar-sign.svg/135px-Font_Awesome_5_solid_dollar-sign.svg.png' class='food-img' style='color:green'>`);
        }
        return `
            <div class='food-item-sort'>
                <h1>${restaurant.name}</h1>
                <p style='color:grey;'><b>${restaurant.type}</b></p>
                <div class='money'>
                    ${arr.join('')}
                </div>
            </div>
        `
    })
    
    return `
        <div class="mt-5 food-sort">
            ${restaurantsHTML.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}