function selectionSort(arr) {
    const copy = [...arr];
    const res = [];

    while(copy.length){
        console.log(res.join(','));

        let minIdx = 0;
        for(let i = 1; i < copy.length; i++){
            if(copy[i] < copy[minIdx]){
                minIdx = i;
            }
        }

        let minVal = copy.splice(minIdx, 1)[0];
        res.push(minVal);
    }
    return res;
}



function selectionSortInPlace(arr) {
    let div = 0;

    while(div < arr.length){
        console.log(arr.join(','));

        let minIdx = div;
        for(let i = div + 1; i < arr.length; i++){
            if(arr[i] < arr[minIdx]){
                minIdx = i;
            }
        }

        let minVal = arr[minIdx];

        for(let i = minIdx; i >= div; i--){
            arr[i] = arr[i - 1];
        }

        arr[div] = minVal;
        div++;
    }
    return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
