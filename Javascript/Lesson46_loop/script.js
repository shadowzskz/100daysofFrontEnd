console.log("WHILE");
/** While */
var a=0;
while (a<10) {
    console.log(`${a+1}` + " Hello World");
    a++;
}
/***DO WHILE */
console.log("DO WHILE");
var a=0;
do {
    console.log(`${a+1}` + " Bye World");
    a++;
}while (a<10)
console.log("FOR");
/**FOR LOOP */
for (i=0; i<20; i++) {
    console.log(`${a+1}` + " Hi there");
}
console.log("BREAK");
/**BREAK */
for (i=0; i<20; i++) {
    console.log(`${a+1}` + " Hi there");
    if (i===6) {
        console.log("TA CHAKKA");
        break;
    }
}
/**Continue */
console.log("CONTINUE");
for (i=0; i<20; i++) {
    console.log(`${a+1}` + " Hi there");
    if (i===6) {
        console.log("TA CHAKKA");
        continue;
    }
}