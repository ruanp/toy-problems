// Implement multiply, divide, and modulo using only the addition and
// subtraction operators.
//
// Step 2: Make your functions produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply accept more than two arguments.
//
// Terror mode: Re-implement all three functions using only bitwise operators.

var multiply = function(x, y) {
  // Does not handle:
  // 1. Negative numbers
  // 2. Decimal numbers where both numbers are decimal
  var factor = ( !(x < 0) ^ !(y > 0)) ? -1 : 1
    );
  var solution = 0;
  if (x > y) {
    for (i = 0; i < x; i++) {
      solution = solution + y;
    } 
  } else {
    for (i = 0; i < y; i++) {
      solution = solution + x;
    }
  }
  return solution;
};

var divide = function(x, y) {
  // Handles only non-negative integer inputs
  var solution = 0;
  var numerator = x;
  while (numerator >= y) {
    numerator = numerator - y;
    solution++;
  }
  var decpiece = 0;
  while () {

  }
  solution = solution;
  return solution;
};

var modulo = function(x, y) {
  // Your code goes here
  var solution = 0;
  var numerator = x;
  while (numerator >= y) {
    numerator = numerator - y;
    solution++;
  }
  return numerator;
};

