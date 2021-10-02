var maximum69Number = function (num) {
  const arr = num.toString().split("");
  if (arr.every((item) => item === "9")) {
    return num;
  }
  const index = arr.findIndex((item) => item === "6");
  arr[index] = "9";
  return Number(arr.join(""));
};

console.log(maximum69Number(969));
