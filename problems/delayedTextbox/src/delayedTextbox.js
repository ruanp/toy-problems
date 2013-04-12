/**
 * We have a textbox where we get the info with the following code:
 *
 *   var tb = $(".textbox");
 *
 * We want to get the text of that box, but only 600 ms after the person stops
 * typing in that box. How would you implement it?
 */
var keyTimer;
var textExtractor = function ($element) {
  console.log($element.val()); 
} 

$(document).ready(function() {
  var $tb = $(".textbox");

  $tb.keypress(function(event) {
    if (keyTimer) clearTimeout(keyTimer);
    keyTimer = setTimeout(textExtractor, 1000, $tb);
  });
});