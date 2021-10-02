var reverse = function (x) {
  const number = Number(Math.abs(x).toString().split("").reverse().join(""));
  if (number >= -Math.pow(2, 31) && number <= Math.pow(2, 31) - 1) {
    return x >= 0 ? number : -number;
  }
  return 0;
};

console.log(reverse(1534236469));
