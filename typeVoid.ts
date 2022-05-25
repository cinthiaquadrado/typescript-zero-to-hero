//Funções 01

function logError(errorMessage: string): void {
    console.log(errorMessage);
    // return errorMessage;
}

logError('Required field - Name');

//Funções 02

const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

//Variáveis
//Precisa alterar tsconfig.json.
//Adicionar "strictNullChecks": false;

let variavelExemploVoid: void;
//variavelExemploVoid = 1;
//variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
