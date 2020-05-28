$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFrase);    
}

function trocaFrase (data){
   // retona o objeto console.log(data) 
   // o data e um argumento que return o conteudo do json
   // assincrona

   //onde eu devo trocar?
   var frase = $(".frase");
   var numeroAleatorio = Math.floor(Math.random() * data.length);
   frase.text(data[numeroAleatorio].texto);
<<<<<<< Updated upstream
   
=======
   atualizaTamanhoFrase();
   atualizaTempoInicial(data[numeroAleatorio].tempo); 
>>>>>>> Stashed changes
}