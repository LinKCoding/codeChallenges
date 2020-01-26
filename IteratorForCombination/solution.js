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
  this.arrLen = this.arrayTracker.length
  this.characters = characters
  this.charLength = characters.length
  this.comboLength = combinationLength
};

// 
CombinationIterator.prototype.nextComboArray = function () {
  if (this.arrayTracker[this.arrLen - 1] != this.charLength - 1) {
    
    this.arrayTracker[this.arrLen - 1]++
  } else {
    let findNext = this.arrLen - 1
    // Something's wrong here, going too far back...
    while (findNext > 0 && this.arrayTracker[findNext] + 1 !== findNext) {
      findNext--
    }

    if (this.arrayTracker[findNext] !== this.charLength - this.comboLength) {
      let nextValue = this.arrayTracker[findNext] + 1
      // console.log(this.arrayTracker[findNext])
      for (let i = findNext; i < this.arrLen; i++) {
        // console.log("next value is:", nextValue, i)
        this.arrayTracker[i] = nextValue
        nextValue++
      }
    }
    
  }
}
/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  const returnString = this.arrayTracker.map(idx => this.characters[idx]).join("")
  for(let i = this.comboLength - 1; i >= 0; i--) {

  }
  return returnString
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


let test = new CombinationIterator("abcde", 3)
for(let i = 0; i < 9; i++){
  console.log(`on iteration #${i}`)
  console.log(test.arrayTracker)
  test.nextComboArray()
}

