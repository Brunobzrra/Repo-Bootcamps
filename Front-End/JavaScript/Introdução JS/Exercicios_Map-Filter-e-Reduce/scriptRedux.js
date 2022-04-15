const array = [1,2,3,4,5,6,7,8];

function numberFilter(arr){
    return arr.filter((item) =>{
        return item%2===0;
    });
}

console.log(numberFilter(array));