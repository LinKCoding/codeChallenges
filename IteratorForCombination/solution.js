/* Thoughts:
Can I change this to a class? 
Need to use closure? No.
I need a way to keep track of the start element
Use `this` keyword
What returns when I reach the end of the characters?

*/
var CombinationIterator = function (characters, combinationLength) {
  this.startCounter = 0 
  this.characters = characters
  this.increment = combinationLength
};

let test = new CombinationIterator("abc", 2)
console.log(test.startCounter)


/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  this.startCounter++
  console.log(this.startCounter)
};

test.next()
console.log(test.startCounter)

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