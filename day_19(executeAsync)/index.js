// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.
// Example 2:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]
// Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
// Example 3:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
 

const promiseAll = async (fns) => {
    const results = Array(fns.length);
    let resolvedCount = 0;
    let rejected = false;

    const handleResult = (index, result) => {
        if (rejected) return;
        results[index] = result;
        resolvedCount++;
        if (resolvedCount === fns.length) {
            return Promise.resolve(results);
        }
    };

    const handleError = (error) => {
        rejected = true;
        return Promise.reject(error);
    };

    for (let i = 0; i < fns.length; i++) {
        const fn = fns[i];
        fn().then((result) => handleResult(i, result)).catch(handleError);
    }
};
