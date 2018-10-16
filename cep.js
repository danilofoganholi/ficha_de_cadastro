//VARIAVEL AIXILIAR PARA O CEP
var aux3 = false; 

function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(campo, valor) {
    
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {
        
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            
            //Cria um elemento javascript.
            var script = document.createElement('script');
            
            //Onde ele sera colocado
            var body = document.getElementsByTagName("body")[0]
            var itens = document.getElementsByTagName("/body")

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            body.insertBefore(script, itens[0])

            //Muda o background para verde
            certo(campo)

        } //end if.
        else {
            //cep é inválido.
            aviso_CEP(campo, 2)
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        aviso_CEP(campo, 1)
    }
}

//AVISO DE CAMPO OBRIGATORIO NO CEP
function aviso_CEP(campo, escolha){

    //QUEBRA DE LINHA 
    var br = document.createElement("br")

    //TEXTO SIMPLES
    var label = document.createElement("label")

    //ESCOLHENDO O TIPO DE AVISO
    if (escolha == 1 ){ 

        //TEXTO DE AVISO DE OBRIGATORIO
        var text = document.createTextNode("Preenchimento obrigatorio")

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
    }
    else if (escolha == 2){ 

        //TEXTO DE AVISO DE INVÁLIDO
        var text = document.createTextNode("CEP inválido!")

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
    }

    //REFERENCIA DE ONDE SERA COLOCADO O ITEM
    var lista = document.getElementsByTagName("p")[4]
    var itens = document.getElementsByTagName("/p") 
    
    //ISERINDO A QUEBRA DE LINHA
    lista.insertBefore( br, itens[0])

    //INSERINDO O AVISO EM VERMELHO
    lista.insertBefore( label, itens[0]);
    label.style.color = "red";

    //MUDANDO O BACKGROUND
    erro(campo)
    aux3 = true 

}

function retira_aviso_cep(campo) {
    if (aux3 == true){

        var label= document.getElementsByTagName("label")
        var br = document.getElementsByTagName("br")

        if (label[5].innerText =="Preenchimento obrigatorio") { 
            br[0].remove()
            label[5].remove()
            neutro(campo)
            aux3= false
        }
        else if (label[6].innerText =="Preenchimento obrigatorio") { 
            br[1].remove()
            label[6].remove()
            neutro(campo)
            aux3= false
        }
        else if (label[7].innerText =="Preenchimento obrigatorio") { 
            br[2].remove()
            label[7].remove()
            neutro(campo)
            aux3= false
        }
        else if (label[8].innerText =="Preenchimento obrigatorio") { 
            br[3].remove()
            label[8].remove()
            neutro(campo)
            aux3= false
        }
    }
}