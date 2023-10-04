/**Loop   */
console.log("Loop");
function loopfrom (x, y) {
    for (i=x; i<=y; i++) {
        console.log(i + " Hello World");
    }
}
loopfrom(1,2);

/**Loop with break */
console.log("Loop with break");
function loopfrombreak(x, y, z) {
    for (i=x; i<=y; i++) {
        console.log(i + " Hello World");
        if (i===z) {
            console.log(i + " Break the World");
            break;
        }
    }
}
loopfrombreak(0,10,5);

/**Loop with Contine */
console.log("Loop with Contine");
function loopfromcon(x, y, z) {
    for (i=x; i<=y; i++) {
        console.log(i + " Hello World");
        if (i===z) {
            console.log(i + " Continue the World");
            continue;
        }
    }
}
loopfromcon(0,10,5);