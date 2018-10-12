//VARIAVEL AUXILIAR 
var aux = false;

//TESTA SE O CPF É VALIDO
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") {return false;}
     
  for (var i=1; i<=9; i++) {
	  Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i)
	  Resto = (Soma * 10) % 11;
  }
	if ((Resto == 10) || (Resto == 11)) { Resto = 0 }
    if (Resto != parseInt(strCPF.substring(9, 10)) ) { return false; }
	
	Soma = 0;
    
	for (i = 1; i <= 10; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
		Resto = (Soma * 10) % 11;
	}
    if ((Resto == 10) || (Resto == 11)) { Resto = 0; }
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) { return false; }
    return true;
}
//FUNCAO QUE TESTA SE O CPF É VALIDO
function CPF(campo) { 
    // VARIAVEL PARA O INPUT DO CPF
    var cpf = document.getElementById("cpf");

    //TESTADOR DE CPF
    var teste = TestaCPF(campo.value)
    if (teste== false ) {
        erro(cpf);
    } 
    else if (teste == true) {
        certo(cpf);
    }
}
//TROCA BACKGROUND PARA VERMELHO
function erro(campo) { 
    campo.style.backgroundColor = "#ff4d4d" 
}
//TROCA BACKGROUND PARA VERDE
function certo(campo) { 
    campo.style.backgroundColor = "#66ff66" 
}
function neutro(campo) {
    campo.style.backgroundColor = ""
}
//AVISO DE CAMPO OBRIGATORIO
function aviso(campo){
    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //TEXTO DE AVISO
    var text = document.createTextNode("Preenchimento obrigatorio")

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)

    //REFERENCIA DE ONDE SERA COLOCADO O ITEM
    var lista = document.getElementsByTagName("p")[0]
    var itens = document.getElementsByTagName("/p")
    
    //VERIFICANDO SE O CAMPO ESTA VAZIO
    if(campo.value == "") {
        //ISERINDO A QUEBRA DE LINHA
        lista.insertBefore( br, itens[0])

        //INSERINDO O AVISO EM VERMELHO
        lista.insertBefore( label, itens[0]);
        label.style.color = "red";

        //MUDANDO O BACKGROUND
        erro(campo)
        aux= true 
    }
    else {
        certo(campo)
    }
}
//RETIRA AVISO
function retira_aviso(campo) {
    if (aux== true){
        var label= document.getElementsByTagName("label")
        var br = document.getElementsByTagName("br")
        br[0].remove()
        label[1].remove()
        campo.style.backgroundColor = "" 
    }
}






