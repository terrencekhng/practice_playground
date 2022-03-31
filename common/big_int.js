function addition(num1, num2) {
  let newNum1 = '';
  let newNum2 = '';
  // if (num1[0] === '-' && num2[0] === '-') {
  //   newNum1 =
  // }
  if (num1.length < num2.length) {
    newNum1 = fill(num1, '0', num2.length - num1.length);
    newNum2 = num2;
  } else if (num1.length > num2.length) {
    newNum2 = fill(num2, '0', num1.length - num2.length);
    newNum1 = num1;
  } else {
    newNum1 = num1;
    newNum2 = num2;
  }

  let carry = 0;
  let result = '';
  let sum = 0;
  for (let i = newNum1.length - 1; i >= 0; --i) {
    sum = (Number(newNum1[i]) + Number(newNum2[i]) + carry);
    result = `${sum % 10}${result}`;
    carry = sum >= 10 ? 1 : 0;
  }
  if (carry > 0) {
    result = `${carry}${result}`;
  }

  return result;
}

function fill(num, char, count) {
  const chars = new Array(count).fill(char);
  return `${chars.join('')}${num}`;
}

const result = addition('9999124123412421341234123412341234123412341234123412349', '91234123412341234123412341234123412341234123412341234123412349');
console.log(result);
