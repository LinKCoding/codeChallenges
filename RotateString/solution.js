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

  console.log("i is:", i)
  console.log("latter string is:", B.substring(0, B.length - i));
  // console.log(A.substring(i, A.length));
  
  if(B.substring(0, B.length - i) === A.substring(i, A.length)) {
    return true
  }
  return false
};


// let A = 'abcde', B = 'cdeab' // true
let A = 'abcde', B = 'abced' // false
// let A = 'abcde', B = 'deabc' // true

// console.log()

console.log(rotateString(A,B));