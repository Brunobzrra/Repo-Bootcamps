    function calculo(n1,n2) {
    result = `Os numeros ${n1} e ${n2} `;

    (n1 == n2) ? (result+=" são") : (result+=" não sao");

    let soma = n1+n2;

    result+=` iguais. Sua soma é ${soma}, que é`;

    (soma > 10) ? (result+=" maior") : (result+=" menor");

    result+=" que 10 e";

    (soma > 20) ? (result+=" maior") : (result+=" menor");

    result+=" que 20.";
    
    return result;
}

console.log(calculo(11,8))
