let soma = function (a, b) {
    return (a + b);
};

let subtrai = function (a, b) {
    return (a - b);
};

let multiplica = function (a, b) {
    return (a * b);
};

let divide = function (a, b) {
    return (a / b);
};

function executa (fn, a , b) {
    return fn(a, b);
};
//dentro do parentes após executa colocar primeiro a operação desejada
let resultado = executa (divide, 15, 3);
console.log(resultado);

