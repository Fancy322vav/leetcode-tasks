var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  let counter = 0;

  const arr = haystack.split("");

  function find(a) {
    const index = arr.findIndex((item) => item === needle[0]);
    const result = arr.slice(index, index + needle.length).join("");
    if (result === needle) {
      return index;
    } else {
      a.splice(index, 1);
      counter++;
      return find(a);
    }
  }

  return haystack.includes(needle) ? find(arr) + counter : -1;
};

console.log(strStr("mississippi", "issip"));
