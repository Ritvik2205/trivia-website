// Loading the whole DOM content
document.addEventListener('DOMContentLoaded', function() {
    // checking for correct MCQ answer

    // let sections = document.querySelectorAll('.section');
    // sections.forEach(function (section) {
    //     let correct = document.querySelector(CSS.escape(section) + '> .Correct');
    //     correct.addEventListener('click', function() {
    //         correct.style.backgroundColor = 'green';
    //         document.querySelector(CSS.escape(section) + '> .answer').innerHTML = 'Correct!';
    //     });
    // });

    let corrects = document.querySelectorAll('.Correct');
    for (let i = 0; i < corrects.length; i++) {
        corrects[i].addEventListener('click', function() {
            corrects[i].style.backgroundColor = 'green';
            document.querySelector("#answer" + CSS.escape(i+1)).innerHTML = 'Correct!';
        });
    };

    // let correct = document.querySelector('#question1 > .Correct');
    // correct.addEventListener('click', function() {
    //     correct.style.backgroundColor = 'green';
    //     document.querySelector('#answer1').innerHTML = 'Correct!';
    // });

    // let correct2 = document.querySelector('#question2 > .Correct');
    // correct2.addEventListener('click', function() {
    //     correct2.style.backgroundColor = 'green';
    //     document.querySelector('#answer2').innerHTML = 'Correct!';
    // });

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


    // let incorrects = document.querySelectorAll("#question1 > .Incorrect");
    // for (let i = 0; i < incorrects.length; i++) {
    //     incorrects[i].addEventListener('click', function() {
    //         incorrects[i].style.backgroundColor = 'red';
    //         document.querySelector('#answer1').innerHTML = 'Incorrect!';
    //     })
    // }

    // let incorrects2 = document.querySelectorAll("#question2 > .Incorrect");
    // for (let i = 0; i < incorrects2.length; i++) {
    //     incorrects2[i].addEventListener('click', function() {
    //         incorrects2[i].style.backgroundColor = 'red';
    //         document.querySelector('#answer2').innerHTML = 'Incorrect!';
    //     })
    // }

    // checking for free response question
    document.querySelector('#submit').addEventListener('click', function() {
    let input = document.querySelector('input');
    if (input.value == 'Sparta') {
        input.style.backgroundColor = 'green';
        document.querySelector('#answer10').innerHTML = 'Correct!';
    } else {
        input.style.backgroundColor = 'red';
        document.querySelector('#answer10').innerHTML = 'Incorrect!';
    }
    });
});