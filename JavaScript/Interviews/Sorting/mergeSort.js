function mergeSort(ar){
    if(ar.length === 1){
        return ar
    }
    var mid = Math.floor(ar.length/2);
    var left = ar.slice(0, mid);
    var right = ar.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2){
    var final = [];

    while(array1.length && array2.length){
        var minElem = 0;
        if(array1[0] < array2[0]){
            minElem = array1.shift();
        } 
        else{
            minElem = array2.shift();
        }
        final.push(minElem);
    }

    if(array1.length){
        final = final.concat(array1);
    }
    else{
        final = final.concat(array2);
    }
    console.log(final);
    return final;
}

merge([6000, 34, 203, 3, 746, 200], [984, 198, 764, 1, 9, 1]);
console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));