var lengthOfLastWord = function (s) {
  const lastWord = s.trim().split(" ").slice(-1).join("");
  return lastWord.length;
};
