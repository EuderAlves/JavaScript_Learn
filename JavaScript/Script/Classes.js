class Usuario{

    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }

    maiorIdade() {
        return this.idade >= 18;
    }
}

let usuario = new Usuario('João', 35);

console.log(usuario);
console.log(usuario.maiorIdade());