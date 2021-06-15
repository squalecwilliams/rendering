
function renderRectangle(rectangleAbstraction) {
    return `
        <div class="text-center mt-5">
            <div style='background-color:${rectangleAbstraction.color}; width:${rectangleAbstraction.width}px; height:${rectangleAbstraction.height}px;'></div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}