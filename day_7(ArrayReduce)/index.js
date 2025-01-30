const  reduce = (arr, fn, init) => {
    let result = init;
    for (let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i], i, arr);
    }
    return result; v\\\\
};

let arr = [1, 2, 3, 4]
const sum = (accum, curr, i, arr) => {return accum + curr;};

console.log(reduce(arr, sum, 0));

let arr2 = [1, 2, 3, 4]
const multi = (accum, curr, i, arr) => {return accum + curr * curr};
console.log(reduce(arr2, multi, 100));

let arr3 = []
const zero = (accum, curr, i, arr) => {return 0};

console.log(reduce(arr3, zero, 25));
