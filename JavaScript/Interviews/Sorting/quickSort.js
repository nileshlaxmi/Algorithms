function quickSort(array) {

    if(array.length == 0){
        return [];
    }

    var left = [];
    var right = [];
    var pivot = array[0];

    for(var i=1; i<array.length; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }
        else{
            right.push(array[i]);
        }
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
}


console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63]));
