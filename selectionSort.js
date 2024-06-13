function selectionSort(arr) {
    let smallestNum;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        smallestNum = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[smallestNum]) {
                smallestNum = j;
            }
        }
        if (smallestNum != i) {
            swap(arr, i, smallestNum);
        }
    }

    return arr;

}