let cancellable = (fn, args, t) => {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
};

let cancelTimeMs1 = 190;
const cancelfn1 = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelfn1, cancelTimeMs1);


