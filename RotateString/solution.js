const rotateString = (A, B) => {
  if(A.length !== B.length) return false 
  let i = 1
  while (i < B.length) {
    let stringSnippet = B.substring(B.length - i)
    if (A.includes(stringSnippet)) {
      i++
    } else {
      i--
      break
    }
  }
  
  return B.substring(0, B.length - i) === A.substring(i, A.length)
};


// let A = 'abcde', B = 'cdeab' // true
// let A = 'abcde', B = 'abced' // false
let A = 'abcde', B = 'deabc' // true

// console.log()

console.log(rotateString(A,B));