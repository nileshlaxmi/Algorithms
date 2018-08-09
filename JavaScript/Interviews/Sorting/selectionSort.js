const selectionSort = (ar) => {
    for(let i=0; i<ar.length; i++){
        let minIndex = i;

        for(let j = i+1; j<ar.length; j++){
            if(ar[minIndex] > ar[j]){
                minIndex = j;
            }
        }

        if(i !== minIndex){
            let temp =  ar[minIndex];
            ar[minIndex] = ar[i];
            ar[i] = temp;
        }
    }
    console.log(ar);
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
selectionSort([6, 4, 7, 3, 1, 5, 2]);