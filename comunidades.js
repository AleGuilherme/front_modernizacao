function carregaInfo(){
    var userSTR = localStorage.getItem("userMod");
    // rotina para verificar se o usuário está ou não conectado
    if (!userSTR){
        window.location = "index.html";
        return;
    }

    var user = JSON.parse(userSTR);// reconverti para trabalhar como um objeto

    var strFoto = `<img src="${user.linkFoto}" width="100%">`;
    var strBio  = `<h4>${user.nome}</h4>
                   <p><strong>RACF:</strong> ${user.racf}</p>
                   <p><strong>EMAIL:</strong> ${user.email}</p>
                   <button type="button" class="btn btn-primary" onclick="logout()">Logout</button>
                  `
    document.getElementById("fotoUser").innerHTML = strFoto;
    document.getElementById("bioUser").innerHTML = strBio;

    // aqui começo a preencher a lista de comunidades
    var strLista = "";
    for (i=0; i<user.comunidades.length; i++){
        var comunidade = user.comunidades[i];


        strLista = strLista + `<div class="row">
                                  <div class="col-8">${comunidade.nome}</div>
                                  <div class="col-2"><a href="novamodernizacao.html?id=${comunidade.id}" class="btn btn-success">Novo</a></div>
                                  <div class="col-2"><a href="extrato.html?id=${comunidade.id}" class="btn btn-warning">Extrato</a></div>
                               </div>`;
    }
    document.getElementById("listaComunidades").innerHTML = strLista;

}

function logout(){
    localStorage.removeItem("userMod");
    window.location = "index.html";
}