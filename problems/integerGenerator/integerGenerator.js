/**
 * Given a function which produces a random integer in the range 1 to 5, write
 * a function which produces a random integer in the range 1 to 7.
 */

var random1to5 = function() {
 return Math.ceil(Math.random()*5);
};

var random1to7 = function() {
  // Got a little help from Marcus and Mark to get 3's and 6's to show up.
  var random;
  do {
    random = random1to5() + random1to5() -1;
  } while(random < 1 || random > 7)
  return random;
};

var getSamples = function(func, count) {
  var samples = []
  for (var i = 0; i < count - 1; i++) {
    samples.push(func());
  }
  return samples;
}