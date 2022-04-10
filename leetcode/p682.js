/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let record = [];
  for (let i = 0; i < ops.length; ++i) {
    if (ops[i].charCodeAt(ops[i].length - 1) >= 48 && ops[i].charCodeAt(ops[i].length - 1) <= 57) {
      record.push(Number(ops[i]));
    }
    if (ops[i] === 'C') {
      record.pop();
    }
    if (ops[i] === 'D') {
      record.push(record[record.length - 1] * 2);
    }
    if (ops[i] === '+') {
      record.push(record[record.length - 1] + record[record.length - 2]);
    }
  }
  let sum = record.reduce((prev, curr) => prev + curr, 0);
  return sum;
};


// let ops = ["5","-2","4","C","D","9","+","+"];
let ops = ['1'];
let result = calPoints(ops);
console.log(result);
