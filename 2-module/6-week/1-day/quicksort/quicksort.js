function quicksort(arr) {
    if(arr.length <= 1) return arr;

    const pivot = arr[0];
    const smaller = [];
    const bigger = [];

    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];
        if(curr < pivot){
            smaller.push(curr);
        } else {
            bigger.push(curr);
        }
    }

    return [...quicksort(smaller), pivot, ...quicksort(bigger)];
}


module.exports = [quicksort];
