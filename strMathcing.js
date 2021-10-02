var stringMatching = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (j = 0; j < words.length; j++) {
      if (words[i].includes(words[j]) && words[i] !== words[j]) {
        result.push(words[j]);
      }
    }
  }
  return Array.from(new Set(result));
};

console.log(stringMatching(["ga", "ugao", "dbh", "a"]));
