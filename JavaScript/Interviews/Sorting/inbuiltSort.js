const sortInbuilt = (ar) => {
    console.log(ar.sort(function(a, b){
        return a - b;
    }));
}

sortInbuilt([6, 45, 7, 30, 1, 5, 2]);

const inbuiltSort = (ar) => {
    console.log(ar.sort());
}

inbuiltSort([6, 45, 7, 30, 1, 5, 2]);