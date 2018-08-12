const binarySearch = (n, ar) => {
    let mid, first = 0, last = ar.length-1, index = 0;

    while(last >= first){
        mid = Math.floor((first+last)/2);
        console.log(mid + " " + ar[mid]);
        if(ar[mid] === n){
            console.log("Number Found at position " + mid);
            break;
        }
        else if(ar[mid] > n){
            last = mid - 1;
        }
        else{
            first = mid + 1;
        }
    }
}

binarySearch(7, [1, 2, 3, 6, 7, 8, 9, 10, 24, 15, 17]);