/*
let n = "12";
console.log(1, n, typeof n);

//Operador "+" converte uma string em numero

let n1 = +"12"
console.log(2, n1, typeof n1);

//Pré ou Pós decremento "--""

//Pré decremento
let a = 3;
console.log(3, --a * 2, a);

//Pós decremento

let a1 = 3;
console.log(4, a1-- * 2, a1);

//Pré e Pós Incremento ++


//Pré incremento
let b = 3;
console.log(5, ++b * 2, b);

//Pós incremento

let b1 = 3;
console.log(6, b1++ * 2, b1);

/*
Operadores tradicionais da Multiplicação
Adição: + let a = 5 + 2 ; = 7
Subtração: - let a = 5 - 2 ; = 3
Multiplicação: * let a = 5 * 2 ; = 10
Divisão: / let a = 5 / 2 ; = 2.5
Resto da Divisão: % let a = 5 % 2 ; = 1
Exponenciação: ** let a = 5 ** 2 ; = 25
*/

//Concatenação de strings é feito atravez do simbulod e Adição "+" 

/* 
Operadores de relacionais

Maior que ">"
Menor que "<"
Maior ou Igual a ">="
Menor ou Igual a "<="
Igual "=="
Diferente "!="

Retornão "true" ou "false"


let nome2 = "Euder" //Se nome estiver vazio aparece a condiçãod e else
if (nome2) {
    console.log(7, nome2);
} else {
    console.log(7, "nome vazio")
}

/* Operadores lógicos 
And "&&"
NOT "!"
OR "||"
*/


//Switch

let a = 5, b = 3;
operador = '+';
switch (operador) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('operador invalido');
}