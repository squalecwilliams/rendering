
function renderSurveys(surveysAbs) {
    const title = `${surveysAbs[0].title}`;
    const surveysHTML = surveysAbs.map(survey => {
        const fields = survey.fields.map(field => {
            
            return `
                <div>
                    <h4>${field.label}</h4>
                    ${typeDifferential(field.type, field)}
                </div>
            `
        })
        return `
            <div>
                <h1>${survey.title}</h1>
                <hr>
                <div>
                    ${fields.join('<br>')}
                </div>
                <br>
                <input type="submit" value="Submit Survey" style='background-color:blue; color:white; border-radius:10%;'>
            </div>
        `
    })
    return `
        <div class="text-left mt-5">
            ${surveysHTML.join('<br><br>')}
        </div>
    `
}

function typeDifferential(type, field){
    if(type == 'radio') {
        
        const opt = field.options.map(option => {
                
            return `
                <div>
                    <input type='radio' id='${option}' value='${option}' name='${field.label}'> 
                    <label for='${option}'>${option}</label>
                </div>
            `
        })

        return `
            ${opt.join('')}
        `
    } else {
        return `
            <textarea style='width:300px; height:100px;'></textarea> 
        `
    }
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "textarea"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}