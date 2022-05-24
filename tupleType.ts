//Exemplo simples de tuplas TS 
let pessoa: [string, string, number];

pessoa = ['Cinthia', 'desenvolvedora', 29];
console.log(pessoa);

//Exemplo acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['Vinicius', 'servidor', 30];

console.log(pessoa1[1]);

//Exemplo tuplas com spread operator
let listaFrutas: [string, ... string[]] = ['laranja', 'maçã', 'abacaxi', 'uva', 'mamão'];
console.log(... listaFrutas);

//Outra forma de usar tuplas em TS (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Cinthia', 'desenvolvedora', 29]
console.log(pessoa2);

let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Maçã', 'Laranja', 'Melancia', 'Morango'];
console.log(... listaFrutas);

//Lista heterogênea de tupla
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

//Uso da função com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Cinthia', 'Vinicius'],[29, 30])
console.log(resultado);

//Labeled Tuples com spread operator numa função

type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa (...nome: Nome) {
    return [... nome];
}

console.log(criarPessoa('Cinthia', 'Quadrado'))
console.log(criarPessoa('Cinthia', 'Hirakawa', 'Quadrado'))
