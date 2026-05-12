let arr = [1, [2, 3]];
let arrDeep = [1, [2, [3, [4]]]];

function flatten(arr) {
  return arr.flat();
}
function flattenInfInity(arr) {
  return arr.flat(Infinity);
}
// this will not work for deep flat
console.log(flattenInfInity(arrDeep));

// Both of this are existing method we can not use it in interview

function flattenArrayRecursive(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArrayRecursive(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArrayRecursive(arrDeep));

function flattenWithReduce(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenWithReduce(item) : item);
  }, []);
}

console.log(flattenWithReduce(arrDeep))
