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
