var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    ++digits[i];
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  return [1, ...digits];
};

console.log(plusOne([9, 9, 9]));
