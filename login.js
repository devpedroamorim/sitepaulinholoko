let bancoDeCadastro = []
let nomeR = ""
let telefoneR = ""
let emailR = ""
let senhaR = ""

let novoUsuario = {
    nomeR: nomeR,
    emailR: emailR,
    senhaR: senhaR,
    telefoneR: telefoneR,
}
let nomeVerifivacao = []
let emailVerificacao = []
let senhaVerificacao = []

function registrar (nomeR ,telefoneR, emailR, senhaR){

    if (nomeR.trim() != "" && telefoneR.trim() != "" && senhaR.trim() != "" && emailR.trim() != "") {
        
        let emailsIguais = 0
        for(let i = 0; i < bancoDeCadastro.length; i++) {
            if(nomeR == nomeVerifivacao[i] && emailR == emailVerificacao[i])  {
                emailsIguais++
            }
        }

        if(emailR == "adm@.com") {
            window.alert("Conta Privada")
        } else {

            if(emailsIguais == 0) {

    
                    novoUsuario = {
                        nomeR: nomeR,
                        telefoneR: telefoneR,
                        emailR: emailR,
                        senhaR: senhaR,
                        
                    }
                    bancoDeCadastro.push(novoUsuario)
                    emailVerificacao.push(emailR)
                    senhaVerificacao.push(senhaR)
            
                    window.alert('Cadastro realizado com sucesso')
                    
                    document.getElementById('nomeR').value = ""
                    document.getElementById('emailR').value = ""
                    document.getElementById('senhaR').value = ""
                    document.getElementById('telefoneR').value = ""
        
                    document.querySelector('.login').style.display='block';
                    document.querySelector('.cadastro').style.display='none'
         
            } else {
                window.alert("Conta já existente!")
            }

        }
        
    }
}

    



function cadastro2(){
    
    nomeR = document.getElementById('nomeR').value;
    telefoneR = document.getElementById('telefoneR').value;
    emailR = document.getElementById('emailR').value;
    senhaR = document.getElementById('senhaR').value;
    


    registrar(nomeR, telefoneR, emailR, senhaR)
}
  

/*Login */

function logar(emailL, senhaL){

    

        let loginValido = 0
        if(emailL == "adm@.com" && senhaL == "qwert54321") {

            location.href = "index.html"
    
        } else {
            
            for (let i = 0; i < bancoDeCadastro.length; i++) {
                if(emailL == emailVerificacao[i] && senhaL == senhaVerificacao[i]) {
                    loginValido++
                }
            }

            if(loginValido == 0) {
                window.alert("Conta não registrada")
            } else {
                location.href = "index.html"
            }   

        }  
    }

function entrarnosite(){

    let nomeL = document.getElementById('nomeL').value;
    let senhaL = document.getElementById('senhaL').value;


    logar(nomeL, senhaL)
    
}

/*Mensagem */

let bancoDeRecado = []

function mensagens(seuemail, mensagem) {
    
    
        
        let novoRecado = {
            seuemail: seuemail,
            mensagem: mensagem,
            
        }
        bancoDeRecado.push(novoRecado)
        
        console.log(bancoDeRecado)
        window.alert('Recado enviado com sucesso')

        document.getElementById('seuemail').value = ""
        document.getElementById('mensagem').value = ""
     

    }

function send(){
    
    let seuemail = document.getElementById('seuemail').value;
    let mensagem = document.getElementById('mensagem').value;

    mensagens(seuemail, mensagem)

}

function pagina2() {
    document.querySelector('.login').style.display='none';
    document.querySelector('.cadastro').style.display='block';
    display='none';

}
