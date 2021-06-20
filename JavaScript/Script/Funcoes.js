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

function soma (a, b)
//abaixo está com valores padrão
//function soma (a=0, b=0)
{
    return (a + b);
}
let total = soma(10, 5);
console.log(3, total);

//Atribuir a função a uma variavel

let divide = function (a, b){
    return (a / b);
}

console.log(4, divide(10, 2));




