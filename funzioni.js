

function print(whatToPrint) {
    console.log(whatToPrint);
}

print("Hello world");


function random(min, max) {
    return (Math.random() * (max - min)) + min;
}


random(10, 100);

/** E' pari o no */

function isEven(number) {
    return number % 2 === 0;
}

const input = parseInt(prompt("Inserisci un numero"));
if (!isNaN(input) && isEven(input)) {
    console.log("è un numero pari");
}

