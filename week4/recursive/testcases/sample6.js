let arr = [
  {key: 1, value: 10},
  {key: 2, value: 20},
  {key: 3, value: 30}
];

let reformat = arr.map(function(obj) {
  let newObj = {}
  newObj[obj.key] = obj.value;
  return newObj;
});

console.log(reformat);