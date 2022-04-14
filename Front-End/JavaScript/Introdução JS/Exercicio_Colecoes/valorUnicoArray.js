const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico(arr){
    let meuSet = new Set(arr);

    return [...meuSet];
}

console.log(valorUnico(array));