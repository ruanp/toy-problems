// Using regular expressions, write a method to replace all spaces in a string
// with %20. For example, the string:
//
//   "Les Cousins Dangereux"
//
//  Would become:
//
//   "Les%20Cousins%20Dangereux"
//
//
// Extra credit: Rewrite your function to not use regular expressions.
//
// Moar credits: Make your function convert the entire string to HTML escape
// codes. (Pro tip: JavaScript's charCodeAt() method will be helpful here.)
//
// JavaScript's character codes should largely match up with HTML's entity
// codes. You can find a list of those here:
//
//   http://www.degraeve.com/reference/urlencoding.php
//

//Converts entire string into HTML escape codes
var htmlEscaper = function(string) {
  var result = [];
  for (i = 0; i < string.length; i++) {
    result[i] = "%" + string.charCodeAt(i);
  }
  return result.join('');
};

