function plusNum(arr){
    return arr.reduce(function(prev, curr){
        return prev+curr;
    });
}

const arr = [1,2];

console.log(plusNum(arr));

const lista = [
    {
        name: 'biscoito',
        value: 4
    },
    {
        name: 'hamburguer',
        value: 30
    },
    {
        name: 'alface',
        value: 4
    }
];

const dinheiroDisp = 200;
//saldo é o acumulador!!
function realizarCompras(saldo, lista) {
    return lista.reduce(function(prev, current){
        return prev - current.value;
    }, saldo);
}

console.log(realizarCompras(dinheiroDisp, lista));