var jogador1 = 1;
var jogador2 = 0;
var placar = 0;

jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores válidos"):console.log("jogadores invalidos");
    if(jogador1>0 && jogador2==0){
        console.log("jogador 1 marcou ponto");
        placar = jogador1>jogador2;
    }else if(jogador2>0 && jogador1==0){
        console.log("jogador 2 marcou ponto");
        placar = jogador2>jogador1;
    }
    else{
        console.log("ninguem marcou ponto!");
    }

switch (placar) {
    case placar=jogador1>jogador2:
        console.log("jogador1 venceu");
        break;
    case placar=jogador2>jogador1:
        console.log("jogador2 venceu");
        break;
    default:
        break;
}
