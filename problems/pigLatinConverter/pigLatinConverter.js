// Write a function that takes an English word as a string and converts it to
// Pig Latin. Your Pig Latin implementation should follow two basic rules: For
// words that begin with consonants, move the first letter to the end of the
// word and add "ay" onto the end. For example:
//
//   "happy" → "appyhay"
//
// For words that begin with vowels, add "ay" to the end of the word.
// For example:
//
//   "anchor" → "anchoray"
//
//
// Extra credit: Make your function accept a string that contains multiple
// words. Don't worry about punctuation.
//
// Extra extra credit: Make your function handle punctuation properly.


var convertToPigLatin = function(string) {
  // Your code here
  wordsArray = string.split(" ");

  var upperCons = /[BCDFGHJKLMNPQRSTVWXYZ]/; 
  var lowerCons = /[bcdfghjklmnpqrstvwxyz]/;
  var vowels = /[AEIOUaeiou]/;

  for (i = 0; i < wordsArray.length; i++) {
    var tarEl = wordsArray[i];
    if (upperCons.test(tarEl[0]) === true) {
      
      console.log(tarEl.slice(1,2).toUpperCase());
      console.log(tarEl.slice(2));
      console.log(tarEl.slice(0,1).toLowerCase());
      console.log("ay");
      
      tarEl = tarEl.slice(1,2).toUpperCase().concat(tarEl.slice(2),tarEl.slice(0,1).toLowerCase(),"ay");
    } else if (lowerCons.test(tarEl[0]) === true) {

      console.log(tarEl.slice(1,2));
      console.log(tarEl.slice(0,1));
      console.log("ay");

      tarEl = tarEl.slice(1,2).concat(tarEl.slice(0,1),"ay");
    } else if (vowels.test(tarEl[0]) === true) {
      
      console.log(tarEl);
      console.log("ay");
      tarEl = tarEl + "ay";

    }
    wordsArray[i] = tarEl;
  };

  return wordsArray.join(' ');

};
