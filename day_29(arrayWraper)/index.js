class ArrayWrapper{
    constructor(arr) {
        this.arr = arr
    }

    toString() {
        return `[${this.arr.join(", ")}]`
    }

    valueOf() {
        return this.arr.reduce((a, b) => a + b, 0);
    }

    static add(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static mul(a, b) {
        return a * b
    }

    static div(a, b) {
        return a / b
    }
    
}