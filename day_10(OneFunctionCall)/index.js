const once = (fn) => {
    let called = false;
    return function(...args){
        if (called) {
            return undefined;
        }
        called = true;
        return fn(...args);
    }
}

let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 4));

let fn2 = (a, b, c) => (a * b * c);
let onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4));
console.log(onceFn2(2, 3, 6));
console.log(onceFn2(4, 6, 8));
