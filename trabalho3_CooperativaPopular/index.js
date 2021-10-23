function listarUsarios(listaJSON) {
    let containerLista = document.querySelector("#usarios");
    let resultado = "";

    listaJSON.results.forEach(usario => {
        resultado += `<div class="card card-expandir borda-roxa g-1 cor-intermitente-cartao" style="width: 16rem;">
            <img src="${usario.picture.large}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${usario.name.first} ${usario.name.last}</h5>
                <p class="card-text" style="white-space: nowrap; overflow: hidden;
                text-overflow: ellipsis;">${usario.location.timezone.description}</p>
                <a href="./clientes.html" style="margin: 5px" class="btn btn-primary fundo-roxo texto-branco padding-10 
                position-absolute bottom-0 start-50  translate-middle-x"> Detalhes </a>
            </div>
        </div>`
    });
    containerLista.innerHTML = resultado;
}

const urlAPI = "https://randomuser.me/api/?results=5";
fetch(urlAPI)
    .then(response => response.json())
    .then(result => {
        listarUsarios(result);
    })
    .catch(err => {
        console.log("Ocorreu um erro ao acessar a api, tente novamente mais tarde.", err)
    });