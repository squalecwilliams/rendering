
function renderPokerHand(pokerHandAbstraction) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    const pokerhandHTML = pokerHandAbstraction.map( hand => {
        return `
            <img src='cards/${hand.value}${hand.suit}.png' class='pokerHand'>
        `
    })
    
    return `
        <div class="text-center mt-5 hand">
            ${pokerhandHTML.join('')}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}