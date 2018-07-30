let arr = [
  {id: 15}, {id: -1}, {id: 0}, {id: 3}, {id: 12.2}, {}, {id: null}, {id: NaN}, {id: undefined}
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterById(item) {
  if(isNumber(item.id) && item.id !== 0) return true;
  
  invalidEntries++;
  return false;
}

let arrById = arr.filter(filterById);

console.log('Filtered Array \n', arrById);
console.log('Number of Invalid Entries = ', invalidEntries);

