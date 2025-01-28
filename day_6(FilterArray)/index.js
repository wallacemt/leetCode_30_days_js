const  filter = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

let arr1 = [0, 10, 20, 30];
const gratterThan10 = (n) => {return n > 10};

console.log(filter(arr1, gratterThan10));   

let arr2 = [1, 2, 3];
const firstIndex = (n, i) => {return i === 0};
console.log(filter(arr2, firstIndex));

let arr3 = [-2,-1,0, 1, 2];
const plusOne = (n) => {return n + 1};
console.log(filter(arr3, plusOne));