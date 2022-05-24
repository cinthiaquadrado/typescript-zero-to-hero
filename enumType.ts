enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}

console.log(Idioma);

enum Dias {
    Segunda = 'Seg',
    Terca = 'Ter',
    Quarta = 'Qua',
    Quinta = 'Qui',
    Sexta = 'Sex'
}

console.log(Dias.Segunda);

// Como podemos acessar um valor de um enum com uma chave (usando const)

const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Torta,
    Churrasco,
}

function comida(c: Comida) {
    return 'Comidas muito gostosas';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));

// Quando usar enum?

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída.'
};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída.')
}
