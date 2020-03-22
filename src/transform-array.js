module.exports = function transform(arr) {
    let resultArray = [];
    if (!Array.isArray(arr)) {throw new Error};
    for (let i = 0; i <= arr.length - 1; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (i !== arr.length - 1) {
                    i += 1
                };
                break;
            case '--discard-prev':
                if (i !== 0) {
                resultArray.pop()
                };
                break;
            case '--double-next':
                if (i !== arr.length - 1) {
                resultArray.push(arr[i + 1])
                };
            break;
            case '--double-prev':
                if (i !== 0) {
                resultArray.push(arr[i - 1])
                };
                break;
            default:
                resultArray.push(arr[i]);
        }        
    };
    return resultArray;

};
