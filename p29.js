/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const isNegative = ((divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0)) ? true : false;
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let numberOfQuotients = 0;
    
    while (absDividend >= absDivisor) {
        let accumulatedDivisor = absDivisor;
        let currentQuotient = 1;
        while (accumulatedDivisor + accumulatedDivisor < absDividend) {
            accumulatedDivisor += accumulatedDivisor;
            currentQuotient += currentQuotient;
        }
        absDividend -= accumulatedDivisor;
        numberOfQuotients += currentQuotient;
    }
    
    let result = 0;
    if (isNegative) {
        result = Math.max(-numberOfQuotients, -Math.pow(2, 31));
    } else {
        result = Math.min(numberOfQuotients, Math.pow(2, 31) - 1);
    }
    console.log(result);
    return result;
};
