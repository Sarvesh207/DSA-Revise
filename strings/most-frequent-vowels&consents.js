/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }

  let keys = Object.keys(map);
  let maxVowels = 0;
  let maxConsonants = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < keys.length; i++) {
    if (vowels.includes(keys[i])) {
      if (maxVowels < map[keys[i]]) {
        maxVowels = map[keys[i]];
      }
    } else {
      if (maxConsonants < map[keys[i]]) {
        maxConsonants = map[keys[i]];
      }
    }
  }

  return maxConsonants + maxVowels;
};
