//Material de Referência da Atividade:
//https://github.com/stebsnusch/basecamp-javascript/tree/main/colecoes

//Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
//Crie uma função getAdmins que recebe um Map;
//Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.


function getAdmins(map) {
    let admins = [];

    //Iterando para cada entrada no Map
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

//Um novo Map
const usuarios = new Map();

//Setando valores imaginários
usuarios.set('Gustavo', 'Admin');
usuarios.set('Giovanna', 'Admin');
usuarios.set('Eloísa', 'User');
usuarios.set('Fernanda', 'User');
usuarios.set('Talita', 'User');

console.log(getAdmins(usuarios));