var singleNumber = function (nums) {
  const notUnique = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        notUnique.push(nums[i]);
      }
    }
  }
  return nums.filter((item) => !notUnique.includes(item));
};

console.log(singleNumber([1, 2, 4, 1, 2]));
