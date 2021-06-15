
function renderNametags(nametagsAbstraction) {
    const nametagsHTML = nametagsAbstraction.map( name => {
        return `
            <div class='nametag'>
                <p class='intro' style='color:white;'>Hello, my name is:</p>
                <p class='name'>${name}</p>
            </div>
        `
    })
    return `
        <div class="text-center mt-5">
            ${nametagsHTML.join('')}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}