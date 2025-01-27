const  map = (arr, fn) => {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }
    return result;  
};

const arr1 = [1, 2, 3];
function plusone(n) { return n + 1; }

console.log(map(arr1, plusone));

const arr2 = [1, 2, 3];
function plusI(n, i) { return n + i; }

console.log(map(arr2, plusI)); 

const arr3 = [10, 20, 30];
function constant() { return 42; }

console.log(map(arr3, constant));
