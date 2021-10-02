var shuffle = function (nums, n) {
  const result = [];
  const arr1 = nums.slice(0, n);
  const arr2 = nums.slice(n);
  for (let i = 0; i < n; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
