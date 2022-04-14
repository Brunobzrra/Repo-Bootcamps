const p1 = {
    nome: "maria",
    idade: 32,
};

const p2 ={
    nome: "alfredo",
    idade: 1,
};

let mapaFunc = new Map();

mapaFunc.set('Fernando', 'ADMIN');

mapaFunc.set('Ana', 'SUPORTE');

function getAdmins(mapa){
    let usuarios = [];
    for ([key, value] of mapa) {
        if(value === 'ADMIN')
            usuarios.push(key)
    }
    return usuarios;
}
console.log(getAdmins(mapaFunc));