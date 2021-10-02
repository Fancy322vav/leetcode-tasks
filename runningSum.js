var runningSum = function (nums) {
  const result = [];
  nums.forEach((_, index) => {
    result.push([...nums].splice(0, index + 1).reduce((a, b) => a + b));
  });
  return result;
};

console.log(runningSum([1, 1, 1, 1, 1]));
