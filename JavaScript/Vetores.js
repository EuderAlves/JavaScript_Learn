//Vetores
let frutas = [`laranja`, `maçã`, `banana`];
//posso mostrar o vetor inteiro
console.log(1, frutas);
//posso pegar uam posição do vetor 
console.log(2,frutas[2]);
//Acrescentar algo a lista do vetor
frutas[3]= `pera`
console.log(3, frutas);
//usando "length--" ou "length = a quantidade que quero"
frutas.length--;
console.log(4,frutas);
//Pode acrescentar um item a lista do vetor usando length
frutas[frutas.length]= `limão`;
console.log(5, frutas);

//Para Criar um vetor novo vazio
//let nomes = [];

//usando o metodo .sort
//frutas.sort();
//console.log(6, frutas);

//Colocar função em .sort
let comp = function (a, b) {
    //se inverter o 1 para negativo e o negativo para positivo mudamos a ordem
    if (a>b) return 1;
    else if (a<b) return -1;
    else return 0;
};

frutas.sort(comp);
console.log(6, frutas);

// metodo .pop remove o ultimo vetor
frutas.pop();
console.log(7, frutas);

//metodo push acrescenta por ultimo
frutas.push(`maçã`);
console.log(8, frutas);



