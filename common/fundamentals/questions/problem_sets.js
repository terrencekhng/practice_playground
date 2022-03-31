// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function processArray(array) {
  let result = [];
  // Flat
  flat(array, result);
  // Ascending
  result.sort((a, b) => a - b);
  // Remove duplicates
  result = Array.from((new Set(result)));
  console.log(result);
}

function flat(array, result) {
  for (let i = 0; i < array.length; ++i) {
    if (Array.isArray(array[i])) {
      flat(array[i], result);
    } else {
      result.push(array[i]);
    }
  }
}

// test
processArray(arr);
