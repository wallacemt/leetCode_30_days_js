function createCounter(n){
    let count = n; 
    const increment = () => {
        count += 1;
        return count;
    }
    const decrement = () => {
        count -= 1;
        return count;
    }
    const reset = () => {
        count = n;
        return count;
    };
    return {increment, decrement, reset};
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

