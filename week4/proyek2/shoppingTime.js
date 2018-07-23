function shoppingTime(memberId, money) {
  if(memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if(money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  let products = [
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater Uniqlo', 175000],
    ['Casing HP', 50000]
  ]
  let buyer = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  }

  for(let i = 0; i < products.length; i++) {
    if(money >= products[i][1]) {
      buyer.listPurchased.push(products[i][0])
      buyer.changeMoney -= products[i][1]
    }
  }
  return buyer
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); 
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());