function compose(fn) {
    return function(x) {
        if (fn.length === 0) {
            return x;
        }
        return fn.reduceRight((acc, fn) => fn(acc), x);
    };
}

const fn1 = [x => x + 1, x => x * x, x => 2 * x];
const composed1 = compose(fn1);
console.log(composed1(4)); 

const fn2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composed2 = compose(fn2);
console.log(composed2(1)); 

const fn3 = [];
const composed3 = compose(fn3);
console.log(composed3(42)); 
