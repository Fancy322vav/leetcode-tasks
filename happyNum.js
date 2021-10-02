var isHappy = function (n) {
  const result = [];
  let counter = 0;
  let arr = n
    .toString()
    .split("")
    .map((item) => Number(item));
  while (arr.join("") !== "1") {
    if (arr.length > 1) {
      arr = arr
        .map((item) => item * item)
        .reduce((a, b) => a + b)
        .toString()
        .split("")
        .map((item) => Number(item));
      result.push(arr);
    } else {
      arr = arr
        .map((item) => item * item)
        .toString()
        .split("")
        .map((item) => Number(item));
      result.push(arr);
    }
    counter++;
    if (counter > 10000) {
      return false;
    }
  }
  return true;
};

console.log(isHappy(2));
