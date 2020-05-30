$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);
// o toggle mexe na function display: none;

function fraseAleatoria(){
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        //mostra o erro
        $("#erro").toggle();
        setTimeout(() => {
            $("#erro").toggle();
        }, 2000)   
    })

    .always(function(){
        $("#spinner").toggle();
    })
}

function trocaFraseAleatoria (data){
   // retona o objeto console.log(data) 
   // o data e um argumento que return o conteudo do json
   // assincrona

   //onde eu devo trocar?
   var frase = $(".frase");
   var numeroAleatorio = Math.floor(Math.random() * data.length);
   frase.text(data[numeroAleatorio].texto);
   
   atualizaTamanhoFrase();
   atualizaTempoInicial(data[numeroAleatorio].tempo); 
}

function buscaFrase () {
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId}
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function () {
        //mostra o erro
        $("#erro").toggle();
        setTimeout(() => {
            $("#erro").toggle();
        }, 2000)   
    })
    // sempre que ele acabar com a minha requisição.
    .always(function () {
        $("#spinner").toggle();
    }) 
}

function trocaFrase (dados) {
    var frase = $(".frase");
    frase.text(dados.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(dados.tempo); 
}

