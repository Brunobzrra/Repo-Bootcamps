const banana = {
    value: 2,
}

const pear = {
    value: 5,
}

function mapThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}
0
const qtd = [4, 1];

function mapWotThis(arr){
    return arr.map((item) => item *2);
}

console.log("banana ->", mapThis(qtd, banana));

console.log("pear ->", mapThis(qtd, pear));

console.log(mapWotThis(qtd));