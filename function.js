//VARIAVEL AUXILIAR 
var aux = false;
//VARIAVEL AIXILIAR PARA O CPF
var aux1 = false; 
//VARIAVEL AIXILIAR PARA O EMAIL
var aux2 = false; 

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
function CPF(campo,valor) { 

    //TESTADOR DE CPF
    var teste = TestaCPF(valor)
    if (teste== false ) {
        aviso_CPF(campo)
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
//BACKGROUND TRANSPARENTE
function neutro(campo) {
    campo.style.backgroundColor = ""
}
//AVISO DE CAMPO OBRIGATORIO NO NOME
function aviso(campo){

    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //TEXTO DE AVISO
    var text = document.createTextNode("Preenchimento obrigatorio")

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)
    
    //VERIFICANDO SE O CAMPO ESTA VAZIO
    if(campo.value == "") {

        //REFERENCIA DE ONDE SERA COLOCADO O ITEM
        var lista = document.getElementsByTagName("p")[0]
        var itens = document.getElementsByTagName("/p") 
        
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
//AVISO DE CAMPO OBRIGATORIO NO CPF
function aviso_CPF(campo){
    if (campo.value == "") { 

        //QUEBRA DE LINHA 
        var br = document.createElement("br")

        //TEXTO SIMPLES
        var label = document.createElement("label")

        //TEXTO DE AVISO
        var text = document.createTextNode("Preenchimento obrigatorio")

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
        
        //VERIFICANDO SE O CAMPO ESTA VAZIO

        //REFERENCIA DE ONDE SERA COLOCADO O ITEM
        var lista = document.getElementsByTagName("p")[1]
        var itens = document.getElementsByTagName("/p") 
        
        //ISERINDO A QUEBRA DE LINHA
        lista.insertBefore( br, itens[0])

        //INSERINDO O AVISO EM VERMELHO
        lista.insertBefore( label, itens[0]);
        label.style.color = "red";

        //MUDANDO O BACKGROUND
        erro(campo)
        aux1= true 
    }
    else {

        //QUEBRA DE LINHA 
        var br = document.createElement("br")

        //TEXTO SIMPLES
        var label = document.createElement("label")

        //TEXTO DE AVISO
        var text = document.createTextNode("CPF inválido!")

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
        
        //VERIFICANDO SE O CAMPO ESTA VAZIO

        //REFERENCIA DE ONDE SERA COLOCADO O ITEM
        var lista = document.getElementsByTagName("p")[1]
        var itens = document.getElementsByTagName("/p") 
        
        //ISERINDO A QUEBRA DE LINHA
        lista.insertBefore( br, itens[0])

        //INSERINDO O AVISO EM VERMELHO
        lista.insertBefore( label, itens[0]);
        label.style.color = "red";

        //MUDANDO O BACKGROUND
        erro(campo)
        aux1= true 

    }
}
//RETIRA AVISO DE NOME
function retira_aviso(campo) {
    if (aux== true){
        var label= document.getElementsByTagName("label")
        var br = document.getElementsByTagName("br")
        br[0].remove()
        label[1].remove()
        neutro(campo)
        aux= false
    }
}
//RETIRAR O AVISO DE CPF
function retira_aviso_CPF(campo) {
    if (aux1 == true){

        var label= document.getElementsByTagName("label")
        var br = document.getElementsByTagName("br")
        if (label[2].innerText =="Preenchimento obrigatorio") { 
            br[0].remove()
            label[2].remove()
            neutro(campo)
            aux1= false
        }
        else if (label[2].innerText =="CPF inválido!") { 
            br[0].remove()
            label[2].remove()
            neutro(campo)
            aux1= false
        }
        else if (label[3].innerText =="Preenchimento obrigatorio") { 
            br[1].remove()
            label[3].remove()
            neutro(campo)
            aux1= false
        }
        else if (label[3].innerText =="CPF inválido!") { 
            br[1].remove()
            label[3].remove()
            neutro(campo)
            aux1= false
        }
    }
}
//AVISO DE CAMPO OBRIGATORIO NO EMAIL
function aviso_email(campo){

    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //TEXTO DE AVISO
    var text = document.createTextNode("Preenchimento obrigatorio")

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)
    
    //VERIFICANDO SE O CAMPO ESTA VAZIO
    if(campo.value == "") {

        //REFERENCIA DE ONDE SERA COLOCADO O ITEM
        var lista = document.getElementsByTagName("p")[3]
        var itens = document.getElementsByTagName("/p") 
        
        //ISERINDO A QUEBRA DE LINHA
        lista.insertBefore( br, itens[0])

        //INSERINDO O AVISO EM VERMELHO
        lista.insertBefore( label, itens[0]);
        label.style.color = "red";

        //MUDANDO O BACKGROUND
        erro(campo)
        aux2= true 
    }

    else {
        certo(campo)
    }
}
//RETIRAR O AVISO DE EMAIL
function retira_aviso_email(campo) {
    if (aux2 == true){

        var label= document.getElementsByTagName("label")
        var br = document.getElementsByTagName("br")

        if (label[4].innerText =="Preenchimento obrigatorio") { 
            br[0].remove()
            label[4].remove()
            neutro(campo)
            aux2= false
        }
        else if (label[5].innerText =="Preenchimento obrigatorio") { 
            br[1].remove()
            label[5].remove()
            neutro(campo)
            aux2= false
        }
        else if (label[6].innerText =="Preenchimento obrigatorio") { 
            br[2].remove()
            label[6].remove()
            neutro(campo)
            aux2= false
        }
    }
}




