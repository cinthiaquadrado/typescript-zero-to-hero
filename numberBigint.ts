//Number
let num1: number = 23.0;        //number
let num2: number = 0x37CF;     //hexadecimal
let num3: number = 0o377;      //octal
let num4: number = 0b111001;   //binary

console.log('Ponto flutuante:', num1);
console.log('Hexadecimal:', num2);
console.log('Octal:', num3);
console.log('Binário', num4);

//Precisamos alterar no tsconfig o target para `esnext` ou 'es2020'
let big1: bigint = 9007188254740991n;

//binary
let big2: bigint = 0b100000000000000000000000000000011n;

//hexadecimal
let big3: bigint = 0x20000000000003n;

//octal
let big4: bigint = 0o400000000000003n;

console.log('Bigint:', big1);
console.log('Bigint binary:', big2);
console.log('Bigint hexadecimal:', big3);
console.log('Bigint octal:', big4);
