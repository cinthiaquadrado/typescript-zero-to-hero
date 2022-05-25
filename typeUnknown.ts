//Tipo unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi!';

console.log(valorVariavel);

//Erro ao tentar atribuir um valor do tipo unknown a outros tipos

// let valor: unknown;
// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;

//A diferença entre any e unknown

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed()); //não faz verificação se o valor é numérico

//precisa fazer a verificação do tipo
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}
