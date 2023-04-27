

function doSomethingTenTimes(callback) {
    for (let i = 0; i< 10; i++) {
        callback();
        console.log(a);
    }
}

doSomethingTenTimes(function() {
    const a = 3;
    setInterval(function() {
        console.log(a);
        console.log("Ciao");
    }, 2000);
});

console.log(10);
addEventListener('click', function() {
    console.log(15);
});
console.log(11);



// --------------
// nel codice del browser

function setInterval(callback, delay) {
    // da qualche parte..
    // instruzioni che aspettano "delay" secondi
    callback();
}



// --- equivalenti

function stampa() {
    console.log("Ciao");
}

setInterval(stampa, 2000);