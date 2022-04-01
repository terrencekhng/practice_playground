/**
 * https://leetcode.com/problems/multiply-strings/
 * @param num1
 * @param num2
 */
const mutiply = (num1, num2) => {
  let res = '0';
  // Contains zero
  if (num1 === '0' || num2 === '0') {
    return res;
  }
  
  let intermediate = [];
  let intermediateChar = '';
  for (let i = num2.length - 1; i >= 0; --i) {
    let carry = 0;
    for (let j = num1.length - 1; j >= 0; --j) {
      let temp = (+num1[j] * +num2[i] + carry) % 10;
      carry = parseInt((+num1[j] * +num2[i] + carry) / 10);
      intermediateChar = temp + intermediateChar;
    }
    if (carry !== 0) {
      intermediateChar = carry + intermediateChar;
    }
    intermediate.push(intermediateChar);
    intermediateChar = '';
  }
  
  let intermediateLength = intermediate.length;
  for (let i = 1; i < intermediateLength; ++i) {
    let fills = (new Array(i).fill('0')).join('');
    intermediate[i] = intermediate[i] + fills;
  }
  console.log('intermediate', intermediate);
  res = intermediate[0];
  for (let i = 1; i < intermediateLength; ++i) {
    res = bigIntAddition(res, intermediate[i]);
  }
  
  return res;
}

const bigIntAddition = (num1, num2) => {
  let res = '';
  
  let short = Math.abs(num1.length - num2.length);
  if (num1.length > num2.length) {
    num2 = fillZeros(num2, short);
  } else {
    num1 = fillZeros(num1, short);
  }
  
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; --i) {
    res = ((+num1[i] + +num2[i] + carry) % 10) + res;
    carry = parseInt((+num1[i] + +num2[i] + carry) / 10);
  }
  if (carry !== 0) {
    res = carry + res;
  }
  
  return res;
}

const fillZeros = (num, short) => {
  let res = num;
  for (let i = 1; i <= short; ++i) {
    res = '0' + res;
  }
  return res;
}


/**
 * Test cases
 */
console.log('result >>>', mutiply('123', '456'));
console.log('result >>>', mutiply('123456789', '123456789'));
console.log('result >>>', mutiply('12345679', '9'));

