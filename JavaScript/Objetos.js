let musica = {};
console.log(musica);

musica.nome = "I'm eighteen";
musica.artista = "Alice Cooper";
musica.segundos = 180;

console.log(1, musica);

//função apra cirar objetos

function criaUsuario(nome, idade) {
    return{
        nome: nome,
        idade: idade,
    };
}

let joao = criaUsuario (`João`, 35);

let maria = criaUsuario("Maria", 24);

console.log(2, joao, 3, maria);


