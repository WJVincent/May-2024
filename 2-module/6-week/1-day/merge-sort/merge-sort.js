// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftSort = mergeSort(left);
    const rightSort = mergeSort(right);

    const res = merge(leftSort, rightSort);
    return res;
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
    const res = [];
    let idxA = 0;
    let idxB = 0;

    while(idxA < arrA.length ||  idxB < arrB.length){
        if(idxA === arrA.length){
            res.push(arrB[idxB]);
            idxB++;
        } else if(idxB === arrB.length){
            res.push(arrA[idxA]);
            idxA++;
        } else if(arrA[idxA] < arrB[idxB]){
            res.push(arrA[idxA]);
            idxA++;
        } else {
            res.push(arrB[idxB]);
            idxB++;
        }
    }

    return res;
}

module.exports = [merge, mergeSort];

