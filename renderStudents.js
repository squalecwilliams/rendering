
function renderStudents(studentsAbs) {
    const rollCall = studentsAbs.map( student => {
        var color, present;
        if(student.isPresent){
            color = 'lightgreen';
            present = 'Present';
        } else{
            color = 'rgb(255, 86, 80)';
            present = 'Absent';
        }
        return `
            <div class='student-sort' style='background-color:${color};'>
                <h2>${student.name}</h2>
                <h4>${present}</h4>
            </div>
        `
    })

    return `
        <div class="text-center mt-5 roll">
            <h1><b>Roll Call!</b></h1>
            <div class='student-col'>
                ${rollCall.join('')}
            </div>
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}