/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return expect(
    s[0],
    s.substring(1),
    [
      ['dot', {havePrev: false}],
      ['digit', {isFractional: false}],
      ['sign', {afterExp: false}]
    ]
  );
};

/**
 * eg: list = [['dot', {havePrev: false}], ['int', {isFractional: true}], ..., ]
 * @param c
 * @param {Object[{string, {string: boolean}}]} list
 */
function expect(c, s, list) {
  if (list.find(item => item[0] === 'dot')) {
    if (c === '.') {
      console.log('dot');
      let opt = list.find(item => item[0] === 'dot');
      if (opt[1].hasPrev) {
        return expect(s[0], s.substring(1), [['digit', {isFractional: true}], ['exp', {}], ['term', {}]]);
      } else {
        return expect(s[0], s.substring(1), [['digit', {isFractional: true}]]);
      }
    }
  }
  if (list.find(item => item[0] === 'exp')) {
    if (c === 'E' || c === 'e') {
      console.log('exp');
      return expect(s[0], s.substring(1), [['digit', {isFractional: false, afterExp: true}], ['sign', {afterExp: true}]]);
    }
  }
  if (list.find(item => item[0] === 'term')) {
    if (c === '' || c === undefined) {
      console.log('term');
      return true;
    }
  }
  if (list.find(item => item[0] === 'digit')) {
    if (c >= '0' && c <= '9') {
      console.log('digit');
      let opt = list.find(item => item[0] === 'digit');
      if (opt[1].isFractional) {
        return expect(s[0], s.substring(1), [['term', {}], ['exp', {}], ['digit', {isFractional: true}]]);
      } else if (opt[1].afterExp) {
        return expect(s[0], s.substring(1), [['term', {}], ['digit', {isFractional: false, afterExp: true}]]);
      } else {
        return expect(s[0], s.substring(1), [['dot', {hasPrev: true}], ['exp', {}], ['term', {}], ['digit', {isFractional: false}]]);
      }
    }
  }
  if (list.find(item => item[0] === 'sign')) {
    if (c === '-' || c === '+') {
      console.log('sign');
      let opt = list.find(item => item[0] === 'sign');
      if (opt[1].afterExp) {
        return expect(s[0], s.substring(1), [['digit', {isFractional: false, afterExp: true}]]);
      } else {
        return expect(s[0], s.substring(1), [['digit', {isFractional: false}], ['dot', {hasPrev: false}]]);
      }
    }
  }
  return false;
}

let s = ".0e+7";
let result = isNumber(s);
console.log(result);
