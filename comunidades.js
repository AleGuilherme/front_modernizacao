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
                  `
    document.getElementById("fotoUser").innerHTML = strFoto;
    document.getElementById("bioUser").innerHTML = strBio;

}