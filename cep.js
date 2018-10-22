//LIMPANDO FORMULÁRIO
function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}
//PEGANDO RESPOSTA DO SERVIDOR
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
//PROCURA CEP    
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
        var text = document.createTextNode("Preenchimento Obrigatório")

        //COLOCANDO O ID NA LABEL E BR CRIADAS
        label.id = "aviso_cep"
        br.id = "aviso_br_cep"

        //INSERINDO O TEXTO DE AVISO NO CAMPO QUE SERA COLOCADO
        label.appendChild(text)
    }
    else if (escolha == 2){ 

        //COLOCANDO O ID NA LABEL E BR CRIADAS
        label.id = "aviso_cep1"
        br.id = "aviso_br_cep1"

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
}
//RETIRA AVISO DE CEP
function retira_aviso_cep(campo,name) {

    var label_aviso = document.getElementById("aviso_"+name)
    var br_aviso = document.getElementById("aviso_br_"+name)

    if (label_aviso != null ) {
        if (br_aviso != null) { 
            br_aviso.remove()
            label_aviso.remove()
            neutro(campo)
        }
    }
    else {
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