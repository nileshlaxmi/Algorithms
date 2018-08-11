const linearSearch = (n, ar) => {
    let c = 0;
    for(let i=0; i< ar.length; i++){
        if(n === ar[i]){
            c++;
        }
    }
    if(c>=1){
        console.log("Number Found");
    }
    else{
        console.log("Number not found");
    }
}

linearSearch(5, [1,2,3,4,5])