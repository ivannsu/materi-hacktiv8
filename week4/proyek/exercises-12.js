function shoppingTime(memberId, money) {

  if(memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  } else if(memberId === undefined || money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  let productName = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniqlo', 'Casing HP'];
  let productPrice = [1500000, 500000, 250000, 175000, 50000];
  
  let buyer = {};
  buyer.memberId = memberId;
  buyer.money = money;
  buyer.listPurchased = [];
  buyer.changeMoney = money;

  for(let i = 0; i < productName.length; i++) {
    if(buyer.changeMoney >= productPrice[i]) {
      buyer.listPurchased.push(productName[i]);
      buyer.changeMoney -= productPrice[i]; 
    }
  }

  return buyer;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());