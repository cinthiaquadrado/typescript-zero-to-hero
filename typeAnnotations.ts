//Variaveis [Type Annotations]
let nome: string = 'Cinthia Yumi';
console.log(nome);

//Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Gato', 'Cachorro', 'Panda'];
console.log(animais);

//Objetos [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Toyota', ano: 2019, preco: 80000}
console.log(carro);

//Função [Type Annotations]
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumeros(2,3));
