//Exemplo do tipo any
const a: any = 888;
const b: any = ['Cinthia'];

const resultado = a + b;
console.log(resultado);

//Quando o tipo any é inderido implicitamente
//let frase;
//frase = 'Oi!';
//console.log(frase);

//Quando devemos usar o tipo any?
const formulario: {[campoFormulario: string]: any} = {
    nome: 'Cinthia',
    sobrenome: 'Quadrado',
    idade: 29,
};

console.log(formulario);
