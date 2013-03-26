/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 *
 * Extra credit: Write a function that generates a list of all prime numbers
 * between a user-specified range. If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var OptimizePrime = function() {

  var sieve = [];
  var primes = [2,3,5];
  var rArray = [undefined, 0, 0, 0, 0, 0];
  var history = 1;

  var init = function(n) {
    // sieve = [];
    // primes = [];
    for (i = history; i <= n ; i++) {
      sieve[i] = false;
      rArray[i] = i % 60;
    }
  };

  var setSieve = function(n) {
    var fplus = [1,13,17,29,37,41,49,53];
    var tplus = [7,19,31,43];
    var tminus = [11,23,47,59];
    var n1,n2,n3;

    for (x = history; x <= n; x++) {
      for (y = history; y <= n; y++) {
        n1 = 4*(Math.pow(x,2)) + Math.pow(y,2);
        n2 = 3*(Math.pow(x,2)) + Math.pow(y,2);
        n3 = 3*(Math.pow(x,2)) - Math.pow(y,2);

        if (n1 < n && n1 && fplus.indexOf(rArray[n1]) !== -1) {
          sieve[n1] = true;
        }
        if (n2 < n && tplus.indexOf(rArray[n2]) !== -1) {
          sieve[n2] = true;
        }
        if (n3 < n && tminus.indexOf(rArray[n3]) !== -1) {
          sieve[n3] = true;
        }
      }
    }
  };

  var getValidSquares = function(x, limit) {
    var square = Math.pow(x,2);
    var multiplier = 2;
    var result = [];
    var product = 0;

    while (product < limit) {
      product = multiplier * square;
      result.push(product);
      multiplier++;
    }

    return result;
  };

  var setSieveFalse = function(el) {
    sieve[el] = false;
  };

  var siever = function(n) {

    var setFalse = [];

    for (i = history; i < n; i++) {
      if (sieve[i] === true) {
        primes.push(i);
        setFalse = getValidSquares(i,sieve.length);
        setFalse.forEach(setSieveFalse);
      }
    }
  };

  this.stored = function() {
    return [primes, sieve, rArray, history];
  }

  this.call = function(n) {
    if (history < n) {
      init(n);
      setSieve(n);
      siever(n);
      history = n;
      return primes;
    } else {
      return primes.filter(function(el) {
        return (el <=n) ? true : false;
      })
    }
  };

};


// var primeTester = function(n) {
//   // Your code here

// };
