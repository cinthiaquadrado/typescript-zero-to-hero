//Number
let num1 = 23.0; //number
let num2 = 0x37CF; //hexadecimal
let num3 = 0o377; //octal
let num4 = 0b111001; //binary

console.log('Ponto flutuante:', num1);
console.log('Hexadecimal:', num2);
console.log('Octal:', num3);
console.log('Binário', num4);

//Precisamos alterar no tsconfig o target para `esnext` ou 'es2020'
let big1 = 9007188254740991n;

//binary
let big2 = 4294967299n;

//hexadecimal
let big3 = 0x20000000000003n;

//octal
let big4 = 17592186044419n;
console.log('Bigint:', big1);
console.log('Bigint binary:', big2);
console.log('Bigint hexadecimal:', big3);
console.log('Bigint octal:', big4);
