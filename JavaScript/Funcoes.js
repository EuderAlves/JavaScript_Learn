function mensagem() {
    console.log(1, 'Ola');
}
mensagem();

function mensagem1(nome){
    console.log(2, `Olá ${nome}!`)
}
mensagem1(`Euder`);

/* function soma(a, b) {
    console.log(3, a + b);
}
soma(5, 10);
*/

function soma (a, b){
    return (a + b);
}
let total = soma(10, 5);
console.log(3, total);