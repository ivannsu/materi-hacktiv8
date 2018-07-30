let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
  return fruits.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems('ap'));
console.log(filterItems('an'));
console.log(filterItems('x'));