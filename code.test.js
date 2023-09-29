const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

// This function piggybacks off the other test function and leverages the property of the negative
// portion of the Fibonacci sequence being every other term being negative. This starts at fib(-2),
// which is index 2 with how I've set it up. So, the for loop simply makes every other term negative.
function negfibTest(m) {
    var negfib = fibTest(m);
    for(var i = 2; i < negfib.length(); i+2) {
        negfib[i] = -negfib[i];
    }
}


const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
        
    });

    // This new test is to test the negative portion of my function
    jsc.forall("nat", function(m) {
        return JSON.stringify(fib(-m)) == JSON.stringify(negfibTest(m))

    });
jsc.assert(test);


// Simple test to make sure it was working the way I wanted
//fib(-5);