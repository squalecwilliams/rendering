
function renderCircles(circlesAbstraction) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()
    const circlesHTML = circlesAbstraction.map( circle =>{
        return `
            <div style='width:${circle.radius*2}px; height:${circle.radius*2}px; border-radius:${circle.radius}px; background-color:${circle.color}; margin:10px;' ></div>
        `
    })
    return `
        <div class="text-center mt-5">
            <div class="circle-stack">
                ${circlesHTML.join('')}
            </div>
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}