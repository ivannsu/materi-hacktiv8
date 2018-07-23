function countProfit(shoppers) {
  if(shoppers.length === 0) return shoppers

  let listBarang = [ 
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];
  let results = []

  for(let i = 0; i < listBarang.length; i++) {
    let obj = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
    }
    for(let j = 0; j < shoppers.length; j++) {
      if(obj.product === shoppers[j].product) {
        if(obj.leftOver > shoppers[j].amount) {
          obj.shoppers.push(shoppers[j].name)
          obj.leftOver -= shoppers[j].amount
          obj.totalProfit += (listBarang[i][1] * shoppers[j].amount)
        }
      }
    }
    results.push(obj)
  }
  return results
}

// TEST CASES
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, 
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, 
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]))
console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}
]))
console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Naiki', amount: 5}
]))
console.log(countProfit([]))