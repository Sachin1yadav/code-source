function findPeakElement(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return -1; // No peak element found
}

const array = [1, 3, 20, 4, 1, 0];
const peakIndex = findPeakElement(array);
console.log(`The peak element is at index ${peakIndex}.`);