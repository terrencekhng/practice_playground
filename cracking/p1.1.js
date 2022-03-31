function isUnique(s) {
  for (let i = 1; i < s.length; ++i) {
    if (`${s.substring(0, i)}${s.substring(i + 1)}`.indexOf(s[i]) >= 0) {
      return false;
    }
  }
  return true;
}

const result = isUnique('abcdefghijklmnopqrstuvwxyz');
console.log(result);
