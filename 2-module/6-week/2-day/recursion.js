const eachEl = (arr) => {
    if(!arr.length) return; 

    // console.log(arr[0]);
    eachEl(arr.slice(1));
    console.log(arr[0]);
}

eachEl([1,2,3,4,5]);
