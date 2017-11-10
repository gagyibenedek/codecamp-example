const present = require('present');

require("webassembly")
.load("fibc.wasm")
.then(module => {
    const fib = module.exports.fib;
});

function simpleFib(n) {
    let i, t, a = 0, b = 1;
    for (i = 0; i < n; i++) {
        t = a + b; a = b; b = t;
    }
    return b;
}

function timer(fn, input) {
    const t0 = present();
    fn(input);
    const t1 = present();
    console.log(t1 - t0);
}




















// function timer(fn, input) {
//     const t0 = present();
//     for(let i = 0; i< input; i++) {
//         fn(input);
//     }
//     const t1 = present();
//     console.log(t0 - t1);
// }