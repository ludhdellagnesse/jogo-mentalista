function chutar(){
    let numeroSecreto = 3;
    let chute = parseInt( document.querySelector("#valor").value)
    console.log(numeroSecreto , chute)
    if(numeroSecreto==chute){
        document.querySelector(".resultado").innerHTML = "voce acertou"
    }
    else
    {
        document.querySelector(".resultado").innerHTML = "voce errou , tente novamnente"
    }
}