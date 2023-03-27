function sena(){

    


    let senha;

    senha = prompt('Insira sua senha atual');

    if(senha && Number(senha) == '12345'){

        prompt('Insira sua nova senha');

        alert('Senha alterada com sucesso');



    }
    else{

        alert('Senha incorreta');


    }



}