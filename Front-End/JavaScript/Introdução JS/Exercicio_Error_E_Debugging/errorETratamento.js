function sizeVerify(arr, num) {
    try {

        if (!(arr) | !(num)) throw new ReferenceError("Envie os parametros necessarios");

        if ((typeof (arr) != 'object') | (typeof (num) != 'number')) throw new TypeError("Insira os dados com o tipo correspondente!");

        if (arr.length !== num) throw new RangeError("Tamanho invalido!");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro eh um ReferenceError ");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro eh um TypeError ");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro eh um RangeError");
            console.log(e.message);
        } else {
            console.log("Aconteceu um erro nao esperado" + e.message);
        }
    }
}
console.log(sizeVerify([1, 2, 3], 3));