// Loading the whole DOM content
document.addEventListener('DOMContentLoaded', function() {
    // checking for correct MCQ answer
    let corrects = document.querySelectorAll('.Correct');
    for (let i = 0; i < corrects.length; i++) {
        corrects[i].addEventListener('click', function() {
            corrects[i].style.backgroundColor = 'green';
            document.querySelector("#answer" + CSS.escape(i+1)).innerHTML = 'Correct!';
        });
    };

    // checking for incorrect MCQ answer
    let sections = document.querySelectorAll(".section");
    for (let j = 0; j < sections.length; j++) {
        let incorrects1 = document.querySelectorAll("#question" + CSS.escape(j+1) + " > .Incorrect");
        for (let i = 0; i < incorrects1.length; i++) {
            incorrects1[i].addEventListener('click', function() {
                incorrects1[i].style.backgroundColor = 'red';
                document.querySelector('#answer' + CSS.escape(j+1)).innerHTML = 'Incorrect!';
            });
        };
    };

    // checking for free response question - Greek
    document.querySelector('#submit').addEventListener('click', function() {
    let input = document.querySelector('#input-greek');
    if (input.value == 'Sparta') {
        input.style.backgroundColor = 'green';
        document.querySelector('#answer10').innerHTML = 'Correct!';
    } else {
        input.style.backgroundColor = 'red';
        document.querySelector('#answer10').innerHTML = 'Incorrect!';
    }
    });

    // checking for free response question - JJK
    document.querySelector('#submit').addEventListener('click', function() {
    let input = document.querySelector('#input-jjk');
    if (input.value == 'Gauri') {
        input.style.backgroundColor = 'green';
        document.querySelector('#answer10-jjk').innerHTML = 'Correct!';
    } else {
        input.style.backgroundColor = 'red';
        document.querySelector('#answer10-jjk').innerHTML = 'Incorrect!';
    }
    });
});