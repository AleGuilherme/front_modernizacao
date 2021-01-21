// preciso do ID da comunidade global para várias funções
var IDCom;


function carregaInfo(){
    var userSTR = localStorage.getItem("userMod");
    if (!userSTR){
        window.location = "index.html";
        return;
    }

    // preciso recuperar o ID da comunidade que veio na URL
    var str = window.location.search;
    console.log(str);
    var idComunidade = str.substr(4);
    console.log("ID da comunidade = "+idComunidade);

    IDCom = parseInt(idComunidade); // já atribuí e converti para inteiro


    fetch("http://localhost:8088/comunidades/"+IDCom)
        .then(res => res.json())
        .then(comunidade => document.getElementById("nomeComunidade").innerHTML = comunidade.nome);

    /*
     Como eu leio o fetch?
     res = fetch("http://localhost:8088/comunidades/"+IDCom)
     comunidade = res.json();
     document.getElementById("nomeComunidade").innerHTML = comunidade.nome;
    */

}