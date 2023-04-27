

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

random(10, 100);

const random = function(min, max) {
    return (Math.random() * (max - min)) + min;
}

random();

const random = (min, max) => {
    return (Math.random() * (max - min)) + min;
}




function returnsSix() {
    return 6;
}

const a = 3 + returnsSix();
a();