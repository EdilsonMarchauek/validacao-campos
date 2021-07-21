//Cadastrar Pessoa
function cadastrar(){  

    var nome = document.getElementById('nome').value;
    var idade = Number(document.getElementById('idade').value);
    var campoSexo = document.getElementsByName("sexo");
    var maiorIdade = document.getElementById("maiorIdade");    
    var opcaoSexualEscolhida = null;  
    var selOpcao = document.getElementById('selOpcao').selectedIndex;
    var txtArea = document.getElementById("txtArea").value;

    //Validação do campo input
    if(nome == ""){
        alert("É necessário selecionar o campo nome corretamente.");
        return
    }

   //Validação do campo input
    if(idade == ""){
        alert("É necessário selecionar o campo idade corretamente.");
        return
    }

    //Validação do campo radio button
    for(var i=0; i<campoSexo.length; i++){
        if(campoSexo[i].checked == true){
            opcaoSexualEscolhida = campoSexo[i].value;
        }
    }
    if(opcaoSexualEscolhida == null){
        alert("É necessário selecionar o campo sexo corretamente.");
        return
    }

    //Validação do campo checkbox
    if(nome != '' && idade > 0){
        pessoa = {
            codigo: 001,
            status: "ativo"
        }
    let {codigo, status} = pessoa;
    
    if(maiorIdade.checked == true)
    {
        var maiorIdade = "Maior";
    } else {
        alert("Este site é restrito para maiores de idade.");
        return;        
    }

   //Validação do campo select
    switch(selOpcao){
        case 0:
            alert("É necessário selecionar como conheceu o site.")
            break;
        case 1:
            selOpcao = "Indicação de Amigo"
            break;
        case 2:
            selOpcao = "Outro site"
            break;
        case 3:
            selOpcao = "Google"
            break;          
    } 

   //Validação do textarea
    if (txtArea.length == 0){
        alert("Cadastro Incompleto!")
        return;
    }

    document.write(nome + '<br/>');
    document.write(idade + '<br/>');
    document.write(opcaoSexualEscolhida + '<br/>')
    document.write(maiorIdade + '<br/>')
    document.write(selOpcao + '<br/>')
    document.write(txtArea + '<br/>')
    document.write(codigo + '<br/>');
    document.write(status + '<br/>');
    }
}