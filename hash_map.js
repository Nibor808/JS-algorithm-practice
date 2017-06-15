'use strict';

// wrap whole thng in IIFE for encapsulation
(function() {
  const people = [
    {
      fname: 'Jessica',
      lname: 'Hey',
      phone: '8881111111'
    },
    {
      fname: 'Emily',
      lname: 'Hello',
      phone: '8882222222'
    },
    {
      fname: 'Bill',
      lname: 'HiThere',
      phone: '8883333333'
    },
    {
      fname: 'Robin',
      lname: 'GoodDay',
      phone: '8884444444'
    },
    {
      fname: 'Robin',
      lname: 'Hi',
      phone: '8885555555'
    },
    {
      fname: 'Mike',
      lname: 'DaRookie',
      phone: '8886666666'
    },
    {
      fname: 'Sue',
      lname: 'Belchor',
      phone: '8887777777'
    },
    {
      fname: 'Stan',
      lname: 'First',
      phone: '8888888888'
    },
    {
      fname: 'Karen',
      lname: 'Collins',
      phone: '8889999999'
    },
    {
      fname: 'Marcy',
      lname: 'May',
      phone: '8880101010'
    },
    {
      fname: 'Marcy',
      lname: 'May',
      phone: '8882121212'
    },
    {
      fname: 'Jessica',
      lname: 'Hey',
      phone: '8883131313'
    },
    {
      fname: 'Emily',
      lname: 'Hello',
      phone: '8884141414'
    },
    {
      fname: 'Bill',
      lname: 'HiThere',
      phone: '8885151515'
    },
    {
      fname: 'Robin',
      lname: 'GoodDay',
      phone: '8886161616'
    },
    {
      fname: 'Robin',
      lname: 'Hi',
      phone: '8887171717'
    },
    {
      fname: 'Mike',
      lname: 'DaRookie',
      phone: '8888181818'
    },
    {
      fname: 'Sue',
      lname: 'Belchor',
      phone: '8889191919'
    },
    {
      fname: 'Stan',
      lname: 'First',
      phone: '8880202020'
    },
    {
      fname: 'Karen',
      lname: 'Collins',
      phone: '8881212121'
    },
    {
      fname: 'Marcy',
      lname: 'May',
      phone: '8883232323'
    },
    {
      fname: 'Martin',
      lname: 'May',
      phone: '8883232323'
    }
  ];

  let hash_table;

  // create initial hash table
  createNewMap();

  function createNewMap(hashSize = people.length**2) {
    // multidimensional array of size n defaulting to people.length squared
    hash_table = Array(hashSize)
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
    // increase complexity to reduce collisions by adding lname and phone to hash and doing some random mathematical transforms

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
    // double the map.length and recursively create a new table and rehash data into it until bucket.length < 2
    // bucket length constraint would be much higher however for this demonstration
    // using 2 to more easily trigger recreation of hash table
    if (map[hash].length >= 2) {
      createNewMap(map.length * 2);
    }
  }

  // retrieve data from hash_table
  function getData(input, map) {
    return map[createHash([...input])].filter(item => `${item.fname}${item.lname}${item.phone}` === input);
  }

  // put the people in the hash_table
  function addPeople() {
    //create a hash and add it to people before hashing people
    people.map(item => {
      intoMap(hash_table, createHash([...`${item.fname}${item.lname}${item.phone}`]), item);
    });
  }

  // map over people to get data
  people.map(item => console.log(getData(`${item.fname}${item.lname}${item.phone}`, hash_table)))
})();