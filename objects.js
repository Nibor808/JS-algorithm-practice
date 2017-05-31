'use strict';

const people = [
  {
  "name": "Robin",
  "age": 43,
  "address": {
    "city": "Toronto",
    "street": "123 Yep Street"
  }
},
{
  "name": "Jessica",
  "age": 27,
  "address": {
    "city": "Toronto",
    "street": "123 Yep Street"
  }
},
{
  "name": "Emily",
  "age": 30,
  "address": {
    "city": "Peterborough",
    "street": "123 Peter Street"
  }
},
{
  "name": "Maggie",
  "age": 40,
  "address": {
    "city": "Thunder Bay",
    "street": "123 Thunder Street"
  }
},
{
  "name": "Jeff",
  "age": 46,
  "address": {
    "city": "Shuniah",
    "street": "123 Shunny Street"
  }
}];

// LOOK UP IN ARRAY OF OBJECTS
function lookUpProfile(firstName, prop){

  const fname = people.some(function(elem) {
    return elem.name === firstName;
  });

  const property = people.some(function(elem) {
    return elem[prop];
  });

  if (!fname) {
    console.log("No contact");
    return;
  }else if (!property) {
    console.log("No prop");
    return;
  }else {
    for (let item of people) {
      if (item.name === firstName) {
        console.log(item[prop]);
        return;
      }
    }
  }
}
lookUpProfile("Jeff", "address");


// FILTER BY AGE
const agesAndNames = (arr) => {
  let old = 0;
  let young = 0;
  let oldNames = [];
  let youngNames = [];

  arr.filter(item => { item.age > 40 ? (() => { old++; oldNames.push(item.name)})() : (() => { young++; youngNames.push(item.name)})() });
  return { old, young, oldNames, youngNames };
}
console.log(
`${agesAndNames(people).old} older people and their names are ${agesAndNames(people).oldNames}.
${agesAndNames(people).young} younger people and their names are ${agesAndNames(people).youngNames}.`
);


// ADD AN ID
const addId = (arr) => {
  for (let i in arr) {
    arr[i].id = i
  }
}
addId(people);


// CALLING REVERSE CHANGES THE ORIGINAL ARRAY AS THEY BOTH REFERENCE THE SAME OBJECT
const names = agesAndNames(people).oldNames.concat(agesAndNames(people).youngNames);
console.log('names', names);

const reverseNames = names.reverse();
console.log('reverseNames', reverseNames);
console.log('names after reverse', names);


// DEFINE A PROPERTY ON AN OBJECT
const myObj = {};

Object.defineProperty(myObj, 'z', {
  value: 'new property',
  writable: true,
  configurable: true,
  enumerable: true
});
console.log(myObj.z)


// ES6 SYMBOL.ITERATOR
const myObj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function() {
    let index = 0;
    let obj = this;
    let ks = Object.keys(obj);
    return {
      next: function() {
        return {
          value: obj[ks[index++]],
          done: (index > ks.length)
        }
      }
    }
  }
}

const thing = myObj2[Symbol.iterator]();

console.log(thing.next()) // Object { value: 1, done: false }
console.log(thing.next())
console.log(thing.next())
console.log(thing.next()) // Object { value: undefined, done: true }

for (let v of myObj2) {
  console.log(v) // ignores symbol.iterator but still works as there is an iterator defined on myObj2
}


// WITHOUT ITERATOR
const myObj7 = {
  a: 4,
  b: 5,
  c: 6
}

// this won't work as there is no defined iterator function for an object unless we give it one
// for (let v of myObj7) {
//   console.log(v)
// }

// so then we check for the property and get the value from it
for (let v in myObj7) {
  if (myObj7.hasOwnProperty(v)) {
    console.log(myObj7[v])
  }
}


// GETTER AND SETTER
const myObj3 = {
  get a() {
    return this._a_;
  },
  set a(val) {
    return this._a_ = val * 2;
  }
}

myObj3.a = 10;
console.log(myObj3.a)