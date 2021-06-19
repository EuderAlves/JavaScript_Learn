function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n-1);
}

console.log(1, fatorial(6));

//Arrow Functions

let soma = (a, b) => {
    return a+b;
}
console.log (2, soma(10, 5));