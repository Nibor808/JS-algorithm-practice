'use strict';

//CHECK FOR PALLINDROME
function palindrome(str) {
  str = str.toLowerCase().replace(/\s+/g, '');
  str = str.replace(/[^A-Za-z0-9\s]/g, '');

  let strNew = str.split('').reverse().join('').replace(/[^A-Za-z0-9\s]/g, '');
  if (str === strNew) {
    console.log(str)
    console.log(strNew)
    return true;
  }else {
    console.log('not pallindrome')
    return false;
  }

}
palindrome('My age is 0, 0 si ega ym.');


//LONGEST WORD IN A STRING
function findLongestWord(str) {
  console.log(str.split(' ').sort((a, b) => { return a.length-b.length; }).pop());
}
findLongestWord('The quick red fox');


//CONVERT STRING TO TITLE CASE
function titleCase(str) {
  console.log(str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }));
}
titleCase('i\'m a little tea pot');


//CHECK IF ARG[1] IS THE ENDING OF ARG[0]
function confirmEnding(str, target) {
  str = str.substr(str.length - target.length);
  if (str === target) {
    console.log('yes')
    return true;
  }else {
    console.log('no')
    return false;
  }
}
confirmEnding('Connor', 'n');


//REPEAT STRING*ARG[1]
function repeatStr(str, num) {
  str = Array(num+1).join(str);
  console.log(str);
  return str;
}
repeatStr('abc', 3);


//TRUNCATE STRING*ARG[1] AND ADD '...', RETURNED VALUE INCLUDES '...'
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    str = str.slice(0, num - 3);
    str = str + '...';
  }else if (num <= 3) {
    str = str.slice(0, num);
    str = str + '...';
  }
  console.log(str);
  return str;
}
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length - 2);


//CHECK TO SEE IF THE LETTERS IN ARG[1] ARE IN ARG[0]
function mutation(arr) {
  let tracker;

  arr = arr.map((item) => {
    return item.toLowerCase();
  });

  const newArr = arr[1].split('');

  for (let i = 0; i < newArr.length; i++) {
    if (arr[0].indexOf(newArr[i]) >= 0) {
      tracker = true;
    }else {
      tracker = false;
    }
  }
  console.log('tracker', tracker);
  return tracker;
}
mutation(['hello', 'hl']);



function BLARG() {
  console.log('another test string')
}
function BLARG() {
  console.log('another test string')
}
function BLARGERRRRR() {
  console.log('another test string')
}