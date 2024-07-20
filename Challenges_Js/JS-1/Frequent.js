/*
Write a JS program to find the least frequent item of an array
SAMPLE: let arr1 = [3,'c','c','a',2,3,'c',3,'c',2,4,9,9]; --- Output: 4
*/ 
function findLeastFrequent(arr) {
    let frequency = {};

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    let leastFrequentItem = arr[0];
    let leastFrequency = frequency[leastFrequentItem];

    for (let item in frequency) {
        if (frequency[item] < leastFrequency) {
            leastFrequentItem = item;
            leastFrequency = frequency[item];
        }
    }

    return leastFrequentItem;
}

let arr1 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];
let result = findLeastFrequent(arr1);
console.log(result);  
