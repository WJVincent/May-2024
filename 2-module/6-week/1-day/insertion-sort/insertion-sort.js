// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) { 
    const copy = [...arr];
    const res = [];
    
    while(copy.length){
        console.log(res.join(','));
        let curr = copy.pop();
        res.push(null);

        let i = res.length - 1;
        while(i > 0){
            if(res[i - 1] < curr){
                break;
            } else {
                res[i] = res[i - 1];
                i--;
            }
        }
        res[i] = curr;
    }
    return res;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) { 
    let div = 1;
    while(div < arr.length){
        console.log(arr.join(','));
        let curr = arr[div];

        let i = div;
        while(i > 0){
            if(arr[i - 1] < curr){
                break;
            } else {
                arr[i] = arr[i - 1];
                i--;
            }
        }
        arr[i] = curr;
        div++;
    }
    return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
