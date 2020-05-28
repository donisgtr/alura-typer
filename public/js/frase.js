$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFrase)
    
    .fail(function(){
        $("#erro").toggle();
        setTimeout(() => {
            $("#erro").toggle();
        }, 2000)   
    })

    .always(function(){
        $("#spinner").toggle();
    })
}

function trocaFrase (data){
   // retona o objeto console.log(data) 
   // o data e um argumento que return o conteudo do json
   // assincrona

   //onde eu devo trocar?
   var frase = $(".frase");
   var numeroAleatorio = Math.floor(Math.random() * data.length);
   frase.text(data[numeroAleatorio].texto);
   atualizaTamanhoFrase();
   atualizaTempoInicial(data[numeroAleatorio].tempo);
   
   atualizaTamanhoFrase();
   atualizaTempoInicial(data[numeroAleatorio].tempo); 
}