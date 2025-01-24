function expect(val) {
    const createResponse = (isEqual) => {
        return isEqual ? true : null;
    };

    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return createResponse(true);
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return createResponse(true);
            } else {
                throw new Error("Equal");
            }
        }
    };
}

const testExpectations = (func) => {
    try {
        console.log(func());
    } catch (e) {
        console.error(e.message);
    }
};

testExpectations(() => expect(5).toBe(5));
