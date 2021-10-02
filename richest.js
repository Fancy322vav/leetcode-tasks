var maximumWealth = function (accounts) {
  return accounts
    .map((item) => item.reduce((a, b) => a + b))
    .sort((a, b) => b - a)[0];
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
