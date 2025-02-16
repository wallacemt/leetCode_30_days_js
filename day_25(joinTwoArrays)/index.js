const join = (arr1, arr2) => {
    const map = new Map();

    const mergeObj = (obj1, obj2) => {
        return { ...obj1, ...obj2 };
    };

    arr1.forEach(obj => {
        map.set(obj.id, obj);
    });

    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            map.set(obj.id, mergeObj(map.get(obj.id), obj));
        } else {
            map.set(obj.id, obj);
        }
    });

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
