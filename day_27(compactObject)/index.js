const compactObject = (obj) => {
    if(typeof obj !== "object" || obj === null) return obj;
    if(Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    const result = {};

    for(let key in obj) {
        const value = obj[key];
        if(value) {
            result[key] = typeof value === "object" ? compactObject(value) : value;
        }
    }
    return result;
}