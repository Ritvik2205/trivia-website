// Loading the whole DOM content
document.addEventListener('DOMContentLoaded', function() {
    // checking for correct MCQ answer
    let correct = document.querySelector('#question1 > .Correct');
    correct.addEventListener('click', function() {
        correct.style.backgroundColor = 'green';
        document.querySelector('#answer1').innerHTML = 'Correct!';
    });

    let correct2 = document.querySelector('#question2 > .Correct');
    correct2.addEventListener('click', function() {
        correct2.style.backgroundColor = 'green';
        document.querySelector('#answer2').innerHTML = 'Correct!';
    });

    // checking for incorrect MCQ answer
    let incorrects = document.querySelectorAll("#question1 > .Incorrect");
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function() {
            incorrects[i].style.backgroundColor = 'red';
            document.querySelector('#answer1').innerHTML = 'Incorrect!';
        })
    }

    let incorrects2 = document.querySelectorAll("#question2 > .Incorrect");
    for (let i = 0; i < incorrects2.length; i++) {
        incorrects2[i].addEventListener('click', function() {
            incorrects2[i].style.backgroundColor = 'red';
            document.querySelector('#answer2').innerHTML = 'Incorrect!';
        })
    }

    // checking for free response question
    document.querySelector('#submit').addEventListener('click', function() {
    let input = document.querySelector('input');
    if (input.value == 'Sparta') {
        input.style.backgroundColor = 'green';
        document.querySelector('#answer3').innerHTML = 'Correct!';
    } else {
        input.style.backgroundColor = 'red';
        document.querySelector('#answer3').innerHTMl = 'Incorrect!';
    }
    });
});