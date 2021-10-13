alert("Por favor inserir seu CEP sem traços");

function consultaCep() {
 var cep = document.getElementById("cep").value;

 console.log(cep);
 var url = "https://viacep.com.br/ws/"+ cep + "/json/";

    console.log(url)


    $.ajax({
    	 url: url,
  	     type: "GET", 
  	     success: function(response){
         console.log(response);
         $("#logradouro").html(response.logradouro);
         //document.getElementById("logradouro").innerHTML = response.logradouro;
         document.getElementById("bairro").innerHTML = response.bairro;
         document.getElementById("localidade").innerHTML = response.localidade;
         document.getElementById("uf").innerHTML = response.uf;

         //alert(response.bairro);         
  	 }  	    
  })
}