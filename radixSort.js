function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let highestDigits = 0;
    arr.forEach((num) => {
        let tempDigit = digitCount(num);
        highestDigits = highestDigits < tempDigit ? tempDigit : highestDigits;
    });
    return highestDigits;
}

function radixSort(nums) {
    let highestDigits = mostDigits(nums);

    for (let k = 0; k < highestDigits; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
