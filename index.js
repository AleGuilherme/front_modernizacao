function enviar(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Voce digitou = "+txtLogin+" / "+txtSenha);

    var msgBody = {
        email : txtLogin,
        racf  : txtLogin,
        senha : txtSenha
    };

    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers: {
            "content-type":"application/json"
        }
    }

    /* como interpretar a instrução a seguir? Se ela fosse "sequencial", seria algo assim:
       res = fetch("http://localhost:8088/login", cabecalho);
       console.log(res);
    */
    fetch("http://localhost:8088/login", cabecalho).then(res => console.log(res));


}