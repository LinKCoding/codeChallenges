const lemonadeChange =  bills => {
  let cashier = { 5: 0, 10: 0, 20: 0};
  for(let i = 0; i < bills.length; i++) {
    if(bills[i] === 5) {
      cashier[5]++
    } else if(bills[i] === 10) {
      if(!cashier[5]) return false 
      cashier[5]--
      cashier[10]++
    } else if(bills[i] === 20) {
      if(cashier[10] < 1 && cashier[5] < 3) {
        return false 
      }
      if(cashier[10] >= 1) {
        if(cashier[5] < 1) {
          return false
        } else {
          cashier[5]--
          cashier[10]--
        }
      } else if(cashier[5] >= 3) {
        cashier[5] -= 3
      }
    }
  }
  return true
};

const line1 = [5, 5, 5, 10, 20] // true
const line2 = [5, 5, 10] // true
const line3 = [10, 10] // false 
const line4 = [5, 5, 10, 10, 20] // false 

// console.log(lemonadeChange(line1))
// console.log(lemonadeChange(line2));
// console.log(lemonadeChange(line3));
// console.log(lemonadeChange(line4));
console.log(lemonadeChange([5, 10, 20]));