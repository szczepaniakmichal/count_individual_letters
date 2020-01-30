const str = document.querySelector('.text').textContent;

const result = document.querySelector('.result');

const countLetter = (letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = ` ${count}`;
    p.textContent = `Litera "${letter}" ilosc wystompien to: `;
    p.appendChild(span);
    result.appendChild(p);
};

countLetter('a');
countLetter('b');
countLetter('c');
countLetter('ć');
countLetter('d');
countLetter('e');
countLetter('f');
countLetter('g');
countLetter('h');
countLetter('i');
countLetter('j');
countLetter('k');
countLetter('l');
countLetter('ł');
countLetter('m');
countLetter('n');
countLetter('o');
countLetter('ó');
countLetter('p');
countLetter('r');
countLetter('s');
countLetter('ś');
countLetter('t');
countLetter('w');
countLetter('u');
countLetter('x');
countLetter('y');
countLetter('z');
countLetter('ź');
countLetter('q');

const getAllLetters = [...document.querySelectorAll('span')];

function compareNumbers(a, b) {
    return a - b
}

const sortAllLetters = getAllLetters.map((el) => {
    return el.textContent;
});

sortAllLetters.sort((a,b) => {
    return b - a
});
console.log(sortAllLetters);

// result.textContent = '';


sortAllLetters.forEach((el) => {

});
