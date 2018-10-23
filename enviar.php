<?php

// vARIAVEL DO EMAIL DE DESTINO
$destinatario = "atendimento@libercom.net.br";


$headers = "From: " .$email;


//DECLARANDO AS VARIAVEIS DO FORMULARIO
$nome = $_POST['nome'];
$cpf = $_POST['CPF'];
$data_de_nasc = $_POST['data_de_nascimento'];
$sexo = $_POST['sexo']
$email = $_POST['email'];
$cep = $_POST['CEP'];
$rua = $_POST['rua'];
$numero = $_POST['numero'];
$apartamento = $_POST['apartamento'];
$bloco = $_POST['bloco'];
$complemento = $_POST['complemento'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$celular = $_POST['celular'];
$celular2 = $_POST['celular2'];
$telefone = $_POST['telefone'];
$vencimento = $_POST['vencimento'];
$plano = $_POST['plano'];
$cabos = $_POST['cabo'];
$roteador = $_POST['roteador'];
$periodo = $_POST['periodo'];
$pagamento = $_POST['forma'];


//MONTANDO CORPO DO EMAIL 
$corpoemail = "Ficha de Cadastro 
            ====================
            Nome: " .$nome. "
            CPF: " .$cpf. "
            Data de Nascimento: " .$data_de_nasc. "
            Sexo: " .$sexo. "
            Email: " .$email. "
            CEP: " .$cep. "
            Rua: " .$rua. "
            Numero: " .$numero. "
            Apartamento: " .$apartamento. "
            Bloco: " .$bloco. "
            Complemento: " .$complemento. "
            Bairro: " .$bairro. "
            Cidade: " .$cidade. "
            Estado: " .$estado. "
            Celular: " .$celular. "
            Celular 2: " .$celular2. "
            Telefone: " .$telefone. "
            Dia de Vencimento: " .$vencimento. "
            Plano: " .$plano. "
            Possui cabos de internet na residencia? " .$cabos. "
            Possui roteador? " .$roteador. "
            Periodo da instalacao: " .$periodo. "
            Forma de Pagamento: " .$pagamento. " ";


// ENVIANDO O EMAIL
if (mail($destinatario, 'NOVO CADASTRO' , $corpoemail , $headers)) {
    echo "<script>alert('Mensagem enviada com sucesso!');</script>"; 
    header("Location:libercom.net.br");
}
else {
    echo "<script> alert('Erro ao enviar cadastro.')</script>";
}
?>