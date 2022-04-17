/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = [];
  for (let i = 0; i < path.length; ++i) {
    let c = path[i];
    if (c === '/') {
      if (stack[stack.length - 1] !== '/') {
        stack.push(c);
      }
      continue;
    }
    if (c === '.') {
      if (stack[stack.length - 1].includes('..')) {
        stack[stack.length - 1] += c;
      } else if (stack[stack.length - 1] === '.') {
        if (
          path[i + 1] !== '.'
          && (path[i + 1] === '/' || path[i + 1] === undefined)
          && stack[stack.length - 2] === '/'
        ) {
          // moves to up level
          if (stack.length === 2) {
            stack.pop(); // pop previous '.'
          } else {
            stack.pop();
            stack.pop(); // pop previous '.'
            stack.pop(); // pop previous '/'
            stack.pop(); // pop the last dir
          }
        } else {
          stack[stack.length - 1] += c;
          // stack.push(c);
        }
      } else {
        if (
          path[i + 1] !== '.'
          && (path[i + 1] === '/' || path[i + 1] === undefined)
          && stack[stack.length - 1] === '/'
        ) {
          // stay in current level
          if (stack.length !== 1) {
            stack.pop();
          }
        } else {
          stack.push(c);
        }
      }
      continue;
    }
    let last = stack[stack.length - 1];
    if (last !== '.' && last !== '/') {
      stack[stack.length - 1] += c;
    } else {
      stack.push(c);
    }
  }
  let canonicalPath = stack.join('');
  if (canonicalPath[canonicalPath.length - 1] === '/' && canonicalPath.length !== 1) {
    canonicalPath = canonicalPath.substring(0, canonicalPath.length - 1);
  }
  if (!canonicalPath.length) {
    canonicalPath = '/';
  }
  return canonicalPath;
};

// let path = '/home//./../..../';
let path = '///eHx/..';
let result = simplifyPath(path);
console.log(result);

/**
 * @param {string} path
 * @return {string}
 */
var better_version_simplifyPathB = function(path) {
  let stack = [];
  let splitPath = path.split('/');
  for (const p of splitPath) {
    if (p === '' || p === '.') {
      continue;
    } else if (p === '..') {
      stack.pop();
    } else {
      stack.push(p);
    }
  }

  return `/${stack.join('/')}`;
}


path = '/home//./../..../';
result = simplifyPath(path);
console.log(result);
