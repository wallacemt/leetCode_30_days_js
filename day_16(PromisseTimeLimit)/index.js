var timeLimit = function(fn, t) {
    let started;
    return async function(...args) {
        return new Promise ((resolve, reject)=> {
            started = performance.now();
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t);
            fn(...args).then(val => {
                clearTimeout(timer);
                resolve(val);
            }).catch(err => {
                clearTimeout(timer);
                reject(err);
            });
        })
    }
};

let fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
}

let inputs= [5];
let t = 50;
let limit = timeLimit(fn, t);
let result;

let started = performance.now();
try{
    const res = await limit(...inputs);
    result = {"resolved": res, "time": Math.floor(performance.now() - started)};
}catch(error){
    result = {"regected": error, "time": Math.floor(performance.now() - started)};
}

console.log(result);

