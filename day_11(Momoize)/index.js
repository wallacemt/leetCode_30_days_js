function memoize(fn) {
    const cache = new Map();
    let callCount = 0;        
    function wrapper(...args) {
        const key = JSON.stringify(args); 
        if (cache.has(key)) {
            return cache.get(key);  
        }
        
        callCount++;  
        const result = fn(...args);  
        cache.set(key, result);
        return result;
    }

    wrapper.getCallCount = function() {
        return callCount; 
    };
    return wrapper;
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

memoizedSum(2, 2);  
memoizedSum(2, 2);  
console.log(memoizedSum.getCallCount());  

const factorial = (n) => (n <= 1) ? 1 : n * (n * factorial(n - 1));
const memorizedFactorial = memoize(factorial);

memorizedFactorial(2);  
memorizedFactorial(3);
memorizedFactorial(2);  
console.log(memorizedFactorial.getCallCount());
memorizedFactorial(3);
console.log(memorizedFactorial.getCallCount());

const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
const memorizedFib = memoize(fib);

memorizedFib(5);
console.log(memorizedFib.getCallCount());

