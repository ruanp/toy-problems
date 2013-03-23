/**
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 *
 * Ugh, done already? Convert this functional instantiation pattern into a
 * prototypal or pseudoclassical pattern.
 **/


// Creates an instance of bubbleSort. Example usage:
// var bubbleSort = createBubbleSort();
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]
var makeBubbleSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.
  var bubbleSort = function(array) {
    // Moar code here plz
    if (Array.isArray(array) === false) throw new Error('Only plays with arrays');
    var iDidJack = false;
    var arraylength = array.length;
    if (arraylength === 0) return [];
    for (var i = 0; i < arraylength - 1; i++) {
      var ref = array[i+1];
      if (array[i] > ref) {
        array[i+1] = array[i];
        array[i] = ref;
        if (!iDidJack) iDidJack = true;
      }
    }
    return (iDidJack) ? 
    bubbleSort(array.slice(0,-1)).concat(array.slice(-1)) :
    array;
  };
  return bubbleSort;
};