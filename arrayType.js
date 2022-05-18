//Uso de colchetes
let frutas = ['🍍', '🍊', '🍎', '🍉'];
console.log(frutas[2]);

//Uso mais comum aqui
let frutas1 = ['🍍', '🍊', '🍎', '🍉'];
console.log(frutas1[3]);

//Adicionando mais strings com método push
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);

idiomas.push('Mandarim');
console.log(idiomas);

idiomas.push('Japonês');
console.log(idiomas);

//Identificar o tamanho do array 'length'
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

//Exemplo de array com spread operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

//Exemplo de array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);

