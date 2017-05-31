'use strict';

// FIND THE ODD OCCURENCE IN AN ARRAY
function findOdd1(input) {
  const obj = input.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1
    }else {
      acc[curr] += 1
    }
    return acc
  }, {});

  for (let item in obj) {
    if (obj[item] % 2 === 1) {
      console.log('The number occurring an odd number of times is ' + item)
    }
  }
}
findOdd1([2, 5, 9, 1, 5, 1, 8, 2, 8])

// OR

function findOdd2(input) {
  for (let i = 0; i < input.length; i++) {
    let count = 1;
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j] && i !== j) { // if values are equal but the indexes are different
        count++
      }
    }
    if (count % 2 === 1) {
      console.log('The number occurring an odd number of times is ' + input[i])
    }
  }
}
findOdd2([2, 5, 9, 1, 5, 1, 8, 2, 8]);


// FIND THE Nth MOST OCCURENCE IN AN ARRAY
function findNth(input, n) {
  const obj2 = input.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1
    }else {
      acc[curr] += 1
    }
    return acc
  }, {});

  const vals = [];

  for (let item in obj2) {
    vals.push(obj2[item]);
  }

  const nth = vals.sort().reverse()[n - 1];

  if (vals.length < n) {
    console.log(`There is no number with ${n} level of occurence. Try a lower number.`)
  }

  for (let item in obj2) {
    if (obj2[item] === nth) {
      console.log(`Number with the ${n} highest occurence is ${item}`)
    }
  }
}
findNth([1,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,7,7,8,8,8,8], 4);


//FIND LARGEST NUMBER IN NESTED ARRAYS
function largestOfFour(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const midArr = arr[i];
    const largest = midArr.reduce((x, y) => {
      return (x > y) ? x : y;
    });
    newArr.push(largest);
  }
  console.log(newArr);
  return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//CHUNK ARRAY*ARG[1]
function chunkArrayInGroups(arr, size) {
  const newArr = [];

  while(arr.length > 0) {
    newArr.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  console.log(newArr);
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


//SLICE ARRAY*ARG[1]
function slasher(arr, howMany) {
  arr = arr.slice(howMany);
  console.log("slasher arr", arr)
  return arr;
}
slasher([1, 2, 3], 2);


//REMOVE ARG[1]..ARG[ARGS.LENGTH-1] FROM ARRAY
function destroyer(arr) {
  const newArr = arguments[0];
  const destros = [];

  for (let i = 0; i <= arguments.length - 1; i++) {
    if (i > 0) {
      destros.push(arguments[i]);
    }
  }
  const result = newArr.filter((x) => {
    return destros.indexOf(x) === -1
  })

 console.log("result", result)
 return result;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//FIND ARG[1]'S ORDERED POSITION IN ARG[0]
function getIndexToIns(arr, num) {

  arr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log("equal", i)
      return;
    }else if (arr[i] < num && num < (arr[i + 1])) {
      console.log("position", i + 1)
      return;
    }else if (num > arr[arr.length - 1]) {
      console.log("largest", arr.length)
      return;
    }else {
      console.log("first", 0);
      return;
    }
  }
}
getIndexToIns([2, 13, 16], 25);


// FLATTEN NESTED ARRAY
const things = [1,2,3,4,[5,6,7]]
const flatThings = [].concat.apply([], things)
console.log(flatThings)


// FLATTEN A MIXED ARRAY
const messyArray = [[['a', 'b', 'c'], [1, 2, 3]], [{hello: 'there'}, {why: 'not'}, {well: 'then'}], [['d', 'e', 'f', 'g', 'h'], [4, 5, 6, 7]]];
const flattened = messyArray.reduce(function iter(acc, cur) {
  if (cur === null) {
    return acc;
  }
  if (Array.isArray(cur)) {
    return cur.reduce(iter, acc);
  }
  if (typeof cur === 'object') {
    return Object.keys(cur).map(key => cur[key]).reduce(iter, acc);
  }
  return acc.concat(cur);
}, []);

console.log('flattened',flattened);