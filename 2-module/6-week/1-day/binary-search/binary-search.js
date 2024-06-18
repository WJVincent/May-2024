function linearSearch (arr, target) {
    return arr.indexOf(target);
};

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((high + low) / 2);

        if(target === arr[mid]){
            return mid;
        } else if(target > arr[mid]){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}


module.exports = [linearSearch, binarySearch]
