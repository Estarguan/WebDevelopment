//map
const numberArray = [1,2,3,4,5,6,7,8,9,10];

const squaredArray = numberArray.map((element, index, originalArray) => element*index);

console.log(squaredArray);

