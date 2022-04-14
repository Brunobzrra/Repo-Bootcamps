
function calculadora() {
        const operacao = Number(prompt('escolha uma operacão \n 1 - soma (+) \n 2 - subtracao (-)\n 3 - multipicacao (*) \n 4 - divisao real (/) \n 5 - divisao inteira (%) \n 6 - potenciacao (**)'));
        
        if (!operacao || operacao>=7) {
            alert('operacao invalida!');
            calculadora();
        }else{
            let n1 = Number(prompt('Primeiro valor: '));
            let n2 = Number(prompt('Segundo valor: '));
            let resultado;
            
            if(!n1 || !n2){
                alert('Parametros invalidos! ');
                calculadora();
            }else{
            function soma() {
                resultado = n1+n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOp();
            }

            function subtracao() {
                resultado = n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOp();
            }

            function multiplicacao() {
                resultado = n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOp();
            }

            function divreal() {
                resultado = n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOp();
            }

            function divint() {
                resultado = n1%n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é ${resultado}`);
                novaOp();
            }

            function potenciacao(){
                resultado = n1**n2;
                alert(`${n1} elevado a ${n2} é ${resultado}`);
                novaOp();
            }

            function novaOp() {
            let opcao = prompt('deseja fazer uma nova operacao? \n 1 - Sim \n 2 - Não, desejo sair');
                if(opcao == 1){
                    calculadora();
                }else if(opcao ==2){
                    alert('até mais! ');
                }else{
                    alert('digite uma opcao valida');
                }
            }

            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divreal();
                    break;
                case 5:
                    divint();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
    }
}
}
calculadora();
