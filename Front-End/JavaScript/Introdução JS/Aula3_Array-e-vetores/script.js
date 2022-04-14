let array = [["string"], 1, true, ["array2"], undefined];
//array.forEach(function(item, index){console.log(item, index)})
//array.push("peixe");
array.pop();
array.shift();
array.unshift("novinho");
console.log(array.indexOf(true))

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objetoInterno: 'objetoInterno'}};

console.log(object)
