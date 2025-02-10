const debounced = (fn, t) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = undefined;
        }, t);
        return () => clearTimeout(timeoutId);
    }
}
