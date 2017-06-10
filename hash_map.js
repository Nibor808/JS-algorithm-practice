'use strict';

// wrap whole thng in IIFE for encapsulation
(function() {
  const people = [
    {
      id: 0,
      fname: 'Jessica',
      lname: 'Hey',
      phone: '1111111111'
    },
    {
      id: 1,
      fname: 'Emily',
      lname: 'Hello',
      phone: '3333333333'
    },
    {
      id: 2,
      fname: 'Bill',
      lname: 'HiThere',
      phone: '4444444444'
    },
    {
      id: 3,
      fname: 'Robin',
      lname: 'GoodDay',
      phone: '5555555555'
    },
    {
      id: 4,
      fname: 'Robin',
      lname: 'Hi',
      phone: '2222222222'
    },
    {
      id: 5,
      fname: 'Mike',
      lname: 'DaRookie',
      phone: '6666666666'
    },
    {
      id: 6,
      fname: 'Sue',
      lname: 'Belchor',
      phone: '7777777777'
    },
    {
      id: 7,
      fname: 'Stan',
      lname: 'First',
      phone: '8888888888'
    },
    {
      id: 8,
      fname: 'Karen',
      lname: 'Collins',
      phone: '9999999999'
    },
    {
      id: 9,
      fname: 'Marcy',
      lname: 'May',
      phone: '1010101010'
    },
    {
      id: 10,
      fname: 'Marcy',
      lname: 'May',
      phone: '1212121212'
    }
  ];

  let hash_table;

  // create initial hash table
  createNewMap();

  function createNewMap(size = people.length**2) {
    // multidimensional array of size n defaulting to people.length squared
    // change default size to people.length**2 + 1 to force collision
    hash_table = Array(size)
                  .fill()
                  .map(() => []);
    // add people
    addPeople();

    console.log(`Length of hash_table is ${hash_table.length}`)

    return hash_table;
  }

  // hash data
  // in reality use md5 to generate hashes
  function createHash(input) {
    // result of function must not exceed n so f(x) = x % n
    // increase complexity to reduce collisions by adding lname and id to hash and doing some random mathematical transforms

    const arr = input.map(i => i.charCodeAt(0).toString(16)) // get char codes and convert each to hex string

      // split hex values, get new char codes for each value and mulitply by the input length
      .map(i => i.split('').map(j => (j.charCodeAt(0) * input.length)))

      // flatten array and sum values, get index using mod hash_table.length
      return [].concat.apply([], arr)
        .reduce((acc, cur) => acc + cur) % hash_table.length;
  }

  // insert data into hash_table[hash]
  function intoMap(map, hash, input) {
    map[hash].push(input);

    // if bucket(map[hash]) length is >= 2,
    // recursively create a new table and rehash data into it until bucket.length < 2
    // bucket length constraint would be much higher however for this demonstration
    // using 2 to more easily trigger recreation of hash table
    if (map[hash].length >= 2) {

      // add +1 so mod hash_table.length in createHash() remains odd
      // increasing diffusion and reducing the need to create new hash_table
      createNewMap(map.length * 2 + 1);
    }
  }

  // retrieve data from hash_table
  function getData(input, map) {
    return map[createHash([...input])].filter(item => `${item.id}${item.fname}${item.lname}` === input);
  }

  // put the people in the hash_table
  function addPeople() {
    people.map(item => {
      intoMap(hash_table, createHash([...`${item.id}${item.fname}${item.lname}`]), item);
    });
  }

  // map over people to get data
  people.map(item => console.log(getData(`${item.id}${item.fname}${item.lname}`, hash_table)))
})();