const sortBy = (arr, fn) => {
    const mapped = arr.map((item, index) => ({ index, value: fn(item) }));
    mapped.sort((a, b) => a.value - b.value);
    return mapped.map(item => arr[item.index]);
}

