const square = (a, b) => {
    return a * b
}

console.log(`Площа прямокутника: ${square(3, 4)}`);


const round = (r) => {
    return Math.PI * Math.pow(r, 2)
}

console.log(`Площа кола: ${Math.floor(round(5))}`);



const cylinder = (r, h) => {
    return 2 * Math.PI * r * (h + r)
}

console.log(`Площа циліндру: ${Math.floor(cylinder(2, 4))}`);



const array = (arr) =>  {

    for (const arrElement of arr) {

        console.log(arrElement);

    }
}

array([1, 2, 3, 'test', 'Dealer911', false])



const createParagraph = (input) => {
    return document.write(`<p>${input}</p>`)
}

createParagraph('Skype')



const createUl = (input) => {

    document.write('<ul>');

    for (let i = 0; i < 3; i++) {
        document.write(`<li>${input}</li>`)
    }

    document.write('</ul>');
}

createUl('Match')



const createUll = (input, count) => {

    document.write('<ul>');

    for (let i = 0; i < count; i++) {
        document.write(`<li>${input}</li>`)
    }

    document.write('</ul>');
}

createUll('Dealer911', 10)



const createList = (array) => {

    document.write('<ul>List');

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        document.write(`<li>${element}</li>`)
    }


    document.write('</ul>');

}

createList([1, 2, 3, 4, 5, 'text', 'owu', true, false])


const idk = () => {
    return console.log('i see you');

}

idk();


const minElement = (array) => {

    let min = array[0];

    for (const number of array) {

        if (number < min) {
            min = number;
        }
    }

    return min

}

console.log(minElement([1000, 132, 3432, 4324]))



const sumArray = (array) => {

    let index = 0;

    for (const arrayElement of array) {

        index += arrayElement;

    }

    return index
};

console.log(sumArray([1, 2, 10]));