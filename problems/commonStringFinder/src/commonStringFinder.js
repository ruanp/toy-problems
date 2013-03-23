/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the characters found in both strings, in the order that
 * they appeared in `a`. Write a version which is order N-squared and one which
 * is order N.
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var stringToArray = function(string) {  
    var baseArray = [];
  _(string).each(function(char) {
    baseArray.push(char);
  });
  return baseArray;
};

var screenTarget = function(specimen, target) {
  result = []
  screener = new RegEx('[' + _(specimen).uniq().join() + ']');
  result.


};

var option1 = function(string1, string2) {
  // Your code here
  var specimenArray = stringToArray(string1);
  var searchArray = stringToArray(string2);
  var resultsArray = [];

  for (var i = 0; i < specimenArray.length; i++) {
    if(searchArray.indexOf(specimenArray[i]) != -1 && resultsArray.indexOf(specimenArray[i]) === -1 && specimenArray[i] != " ") {
      resultsArray.push(specimenArray[i]);
    }
  }
  return resultsArray.join('');
};

var option2 = function(string1, string2) {
  var specimenArray = stringToArray(string1);

  return screenTarget(string1, string2);
};




var commonStringFinder = option1;