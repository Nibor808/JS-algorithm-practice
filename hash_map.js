const people = [
  {
    name: 'Jessica', // creates hash value of 6
    phone: '1111111111'
  },
  {
    name: 'Emily',
    phone: '3333333333'
  },
  {
    name: 'Bill',
    phone: '4444444444'
  },
  {
    name: 'Robin', // creates hash value of 6
    phone: '5555555555'
  },
  {
    name: 'Robin',
    phone: '2222222222'
  }
];

// multidimensional array of size n
const hash_table = Array(50).fill().map(() => []);

// function to hash data by summing the char codes of the letters in the input
function createHash(input) {
  // result of function must not exceed n so f(x) = x % n
  return input.map(i => i.charCodeAt(0)).reduce((acc, cur) => acc + cur) % 50;
}

// function to insert data into hash_table[hash]
function intoMap(map, hash, input) {
  map[hash].push(input);
}

// function to retrieve data from hash_table
function getData(input, map) {
  const data = map[createHash([...input])].filter(item => item.name === input);

  return data;
}

// put the people in the hash_table
people.map(item => {
  intoMap(hash_table, createHash([...item.name]), item);
});

console.log(getData('Jessica', hash_table));
console.log(getData('Emily', hash_table));
console.log(getData('Bill', hash_table));
console.log(getData('Robin', hash_table));