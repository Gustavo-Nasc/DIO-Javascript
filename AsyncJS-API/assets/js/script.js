//Material de Referência da Atividade:
//https://github.com/stebsnusch/basecamp-javascript/tree/main/javascript-assincrono

//Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

//Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
//Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

const baseURL = 'https://thatcopy.pw/catapi/rest/';
const buttonChangeCat = document.getElementById('change-cat');
const imgCat = document.getElementById('cat');

const getCats = async () => {
    //A nossa baseURL irá retornar outra Promise, então, é necessário pegar o que será recebido e convertê-lo em JSON
    const data = await fetch(baseURL)
        .then(result => result.json())
        .catch(error => alert(error));

    //Ao entrar no link da API, se obtem uma respota da API, com informações de ID, URL e WEBPURL. Se utilizará o WEBPURL, pois é uma imagem comprimida. E o JPEG da URL é muito demorado para carregar.
    return data.webpurl;
}

const loadImgCat = async () => {
    imgCat.src = await getCats();
}

buttonChangeCat.addEventListener('click', loadImgCat);

loadImgCat();