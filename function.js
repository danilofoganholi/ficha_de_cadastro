//TEXTO DE AVISO 
var aviso_text = 'Preenchimento Obrigatório'

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
function TESTA_CPF(campo,valor) { 

    //TESTADOR DE CPF
    var teste = TestaCPF(valor)

    //COLOCAR AVISO 
    if (teste== false ) {
        aviso_CPF(campo)
    } 
    else if (teste == true) {
        certo(campo);
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
    var text = document.createTextNode(aviso_text)

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)

    //COLOCANDO O ID NA LABEL E BR CRIADAS
    label.id = "aviso_nome"
    br.id = "aviso_br_nome"
    
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
        var text = document.createTextNode(aviso_text)

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
        
        //COLOCANDO O ID NA LABEL E BR CRIADAS
        label.id = "aviso_CPF"
        br.id = "aviso_br_CPF"

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
        
        //COLOCANDO O ID NA LABEL E BR CRIADAS
        label.id = "aviso_CPF1"
        br.id = "aviso_br_CPF1"

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
    }
}
//AVISO DE CAMPO OBRIGATORIO NO EMAIL
function aviso_email(campo){

    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //TEXTO DE AVISO
    var text = document.createTextNode(aviso_text)

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)

    //COLOCANDO O ID NA LABEL E BR CRIADAS
    label.id = "aviso_email"
    br.id = "aviso_br_email"
    
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
    }

    else {
        certo(campo)
    }
}
//AVISO DE CAMPO OBRIGATORIO CELULAR
function aviso_celular(campo) { 

    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //TEXTO DE AVISO
    var text = document.createTextNode(aviso_text)

    //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
    label.appendChild(text)

    //COLOCANDO O ID NA LABEL E BR CRIADAS
    label.id = "aviso_celular"
    br.id = "aviso_br_celular"
    
    //VERIFICANDO SE O CAMPO ESTA VAZIO
    if(campo.value == "") {

        //REFERENCIA DE ONDE SERA COLOCADO O ITEM
        var lista = document.getElementsByTagName("p")[13]
        var itens = document.getElementsByTagName("/p") 
        
        //ISERINDO A QUEBRA DE LINHA
        lista.insertBefore( br, itens[0])

        //INSERINDO O AVISO EM VERMELHO
        lista.insertBefore( label, itens[0]);
        label.style.color = "red";

        //MUDANDO O BACKGROUND
        erro(campo)
    }
    else {
        certo(campo)
    }
}
//RETIRA AVISO DE NOME
function retira_aviso(campo,name) {

    var label_aviso = document.getElementById("aviso_"+name)
    var br_aviso = document.getElementById("aviso_br_"+name)

    if (label_aviso != null ) {
        if (br_aviso != null) { 
            br_aviso.remove()
            label_aviso.remove()
            neutro(campo)
        }
    }
    else if (name=='CPF') {
        label_aviso = document.getElementById("aviso_"+name+ '1' )
        br_aviso = document.getElementById("aviso_br_"+name+ '1')
        if (label_aviso != null ) {
            if (br_aviso != null) { 
                br_aviso.remove()
                label_aviso.remove()
                neutro(campo)
            }
        }
    }   
}





