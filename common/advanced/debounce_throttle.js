/**
 * Debounce function
 * @param fn
 * @param {number} timeout
 * @return {(function(): void)|*}
 */
function debounce(fn, timeout = 1000) {
  let _timeout = null;
  return () => {
    clearTimeout(_timeout);
    _timeout = setTimeout(() => {
      console.log('this: ', this);
      fn.apply(this, arguments);
    }, timeout);
  }
}

function callAFunction() {
  const debouncedLog = debounce(() => {
    console.log('hi');
  });
  debouncedLog();
}

callAFunction();

function throttle(fn) {
  let canRun = false;
}
