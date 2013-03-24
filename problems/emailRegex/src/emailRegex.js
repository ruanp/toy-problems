/**
 * Write a function that, given an email address, will return true if the
 * email address is valid and false if it's not.
 *
 * Extra credit: There are some commented lines in spec/spec.js. Uncomment
 * them.
 */

var emailValidator = function(address) {
  var myRE = /^([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]+|(\\"[.\s]\\"))+@\[?[a-z0-9\-\.\:]*\]?$/i
  return address.match(myRE);
};
