// FIBONACCI
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          done: false,
          value: cur
        }
      }
    }
  }
}
for ( let n of fibonacci) {
  if (n > 100)
    break;
    console.log(n)
}

// OR

const fib = (n) => {
  let pre = 0, cur = 1, temp;
  while (n > 0) {
    temp = cur;
    cur = pre + cur;
    pre = temp;
    console.log(pre);
    n--
  }
}

fib(10);