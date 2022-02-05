var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var btAdd = document.getElementById("adicionar");
var btDec = document.getElementById("subtrair");

// Utilizei listeners para incrementar/decrementar os numeros

btAdd.addEventListener("click", function(){
    currentNumber++;
});
btDec.addEventListener("click", function(){
    if(currentNumber===0){
        btDec.disable = true;
    }else{
        currentNumber--;
    }
});

/**
 * Também utilizei os listeners para modificar as cores do botao,
 * por meio da div do contador e manipulando o css 
 *  */ 


document.getElementById("counter").addEventListener("click", function(){
    currentNumberWrapper.innerHTML=currentNumber;
    if(currentNumber===0){
        btDec.style.backgroundColor = "#808080"
    }else{
        btDec.style.backgroundColor = "rgb(241, 214, 214)"
    }
})
