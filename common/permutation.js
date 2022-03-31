let result = [];

function permutation(str) {
  permute('', str);
}

function permute(prefix, trailing) {
  if (!trailing.length) {
    // console.log(prefix, trailing);
    // console.log();
    result.push(`${prefix}${trailing}`);
    return;
  }

  for (let i = 0; i < trailing.length; ++i) {
    permute(`${prefix}${trailing[i]}`, `${trailing.substring(0, i)}${trailing.substring(i + 1)}`);
  }
}

permutation('abcde');
console.log(result);
