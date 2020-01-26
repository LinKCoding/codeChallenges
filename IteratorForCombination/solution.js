/* Thoughts:
Start with a function to create all combinations? 
Or start and end counter?
That works well with combinations of 2... but what about when combos get longer? 
*/
var CombinationIterator = function (characters, combinationLength) {
  this.arrayTracker = []
  for(let i = 0; i < combinationLength; i++) {
    this.arrayTracker[i] = i
  }
  this.characters = characters
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {

};


/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {

};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


let test = new CombinationIterator("abc", 2)
console.log(test.startCounter)
test.next()
test.next()
test.next()
test.next()
console.log(test.startCounter)