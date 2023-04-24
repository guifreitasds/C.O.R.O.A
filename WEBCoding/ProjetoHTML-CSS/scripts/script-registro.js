// Visualização da senha
var SenhaInput = document.getElementById("passwid");
var IconButton = document.getElementById("password-btn");
var MostrarSenha = false;

IconButton.addEventListener("click", function() {
  MostrarSenha = !MostrarSenha;
  if (MostrarSenha) {
    SenhaInput.type = "text";
    IconButton.innerHTML = '<ion-icon name="lock-open"></ion-icon>';
  } else {
    SenhaInput.type = "password";
    IconButton.innerHTML = '<ion-icon name="lock-closed"></ion-icon>';
  }
});


// funcao cadastrar

let data = new Date()
let users = []


if(localStorage.getItem('cadastrados')){
    users = JSON.parse(localStorage.getItem('cadastrados'))
}

function search_user(guarda_cpf){
    let index = users.findIndex((item)=>{
        return item.cpf == guarda_cpf
    })
    return index
}

function search_mail(keep_mail){
  let index = users.findIndex((item)=>{
      return item.mail == keep_mail
  })
  return index
}

function check_size_name(item) {
    if(item.trim().length <=2 || item.trim().length == 0){
      // Trocar para uma mensagem INNER HTML com setTimeOut
      return true
    } else{
      return false
    }
}

function check_size_passw(item) {
  if(item.trim().length <=5 || item.trim().length == 0){
    return true
    
  } else {
    return false
  }
}

function on_register() {
  let name = document.getElementById('nameid').value
  let cpf = document.getElementById('cpfid').value
  let mail = document.getElementById('mailid').value
  let password = document.getElementById('passwid').value
  let birthdate = document.getElementById('dateid').value

  let objPerson = {'nome': name.toLowerCase().trim(), 'passw': password, 'mail': mail, 'cpf': cpf, 'birthdate': birthdate, 'registerdate': `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`}



  // if(mail.slice(mail.trim().indexOf('@'), mail.trim().length-1).length <= 8){
  //   alert('Erro no email')
  //   //Mensagem INNER HTML com setTIme OUT de erro de email
  // } else{
  //   if(check_size_name(name)==false){
  //     if(check_size_passw(password)==false){
  //       if(search_user(cpf)==-1 && search_mail(mail)==-1){
  //         let objPerson = {'nome': name.toLowerCase().trim(), 'passw': password, 'mail': mail, 'cpf': cpf, 'birthdate': birthdate, 'registerdate': `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`}
  //         users.push(objPerson)
  //         localStorage.setItem('cadastrados', JSON.stringify(users))
  //         alert('Usuário Cadastrado!')
  //         location.assign('login.html') //Aqui redirecionar depois de cadastrar
  //         return false
  //       } else {
  //           alert('usuario já cadastrado')
  //       }
  //     }
  //     else{
  //       // Trocar para uma mensagem INNER HTML com setTimeOut
  //       return false
  //     }
  //   }
  //   else{
  //     // Trocar para uma mensagem INNER HTML com setTimeOut
  //     setTimeout(()=>{namerror.innerHTML = "<p>Minímo de 3 caracteres</p>"}
  //     ,3000)
  //     return false
  //   }

  // }   

  if (name.length > 3 &&
      password.length >= 6 && password.length <=10 &&
      name.trim().length != 0 &&
      password.trim().length != 0 &&
      cpf.length == 11) {
      if (search_user(cpf)==-1 && search_mail(mail)==-1) {
          users.push(objPerson)
          localStorage.setItem('cadastrados', JSON.stringify(users))
          alert('Usuário Cadastrado!')
          window.location.assign = "login.html"
      } else{
          alert("Usuário já existe!")
      }
  }
  if (name.length <= 2 || name.trim().length == 0) {
      document.getElementById('namerror').innerHTML = 'Mínimo de três caracteres'
      setTimeout(() => {
          document.getElementById('namerror').innerHTML = ""
      }, 4000)
  }
  if(cpf.length != 11 || name.trim().length == 0) {
    document.getElementById('cpferror').innerHTML = 'Digite o CPF corretamente'
    setTimeout(() => {
        document.getElementById('cpferror').innerHTML = ""
    }, 4000)
  }
  if (mail.slice(mail.trim().indexOf('@'), mail.trim().length-1).length <= 8) {
    document.getElementById('mailerror').innerHTML = 'Digite o email corretamente'
    setTimeout(() => {
        document.getElementById('mailerror').innerHTML = ""
    }, 4000)
  }
  if (password.length <= 5 || password.length >=11 || password.trim().length == 0) {
      document.getElementById('passerror').innerHTML = 'Digite uma senha com 6-10 caracteres'
      setTimeout(() => {
          document.getElementById('passerror').innerHTML = ""
      }, 4000)
  }
}


let enter_name = document.getElementById('nameid')
let enter_pass = document.getElementById('passwid')

enter_name.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        on_register();
    }
})
enter_pass.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        on_register();
    }
})

