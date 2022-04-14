function verificarPalindromo(string){
    if(!string) return;

    return string.split("").reverse("").join("") === string;
}

let numeros = [1,2,3,4,5,6,7,8];


function substituirPares(array){
    if (!array) {
        return "-1";
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index]==0) {
            console.log("esse ja eh 0");
        }
        else if (array[index]%2===0) {
            array[index] = 0;
        }
    }
    console.log(numeros);
}

console.log(substituirPares(numeros));