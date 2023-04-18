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

let users = []
let data = new Date()


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

function check_size(item) {
    if(item.trim() <=2 || item.trim().length == 0){
        alert('Minimo de 3 caracteres')
        // Trocar para uma mensagem INNER HTML com setTimeOut
    }
}

function on_register() {
  let name = document.getElementById('nameid').value
  let cpf = document.getElementById('cpfid').value
  let mail = document.getElementById('mailid').value
  let password = document.getElementById('passwid').value
  let birthdate = document.getElementById('dateid').value

  check_size(name)
  check_size(password)

  if(mail.slice(mail.trim().indexOf('@'), mail.trim().length-1).length <= 8){
    alert('Erro no email')
    //Mensagem INNER HTML com setTIme OUT de erro de email
  } else{
      if(search_user(cpf)==-1 && search_mail(mail)==-1){
          let objPerson = {'nome': name.toLowerCase().trim(), 'passw': password, 'mail': mail, 'cpf': cpf, 'birthdate': birthdate, 'registerdate': `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`}
          users.push(objPerson)
          localStorage.setItem('cadastrados', JSON.stringify(users))
          // alert('Usuário Cadastrado!')
          window.location= "login.html"
          
      } else{
          alert('usuario já cadastrado')
      }
  }   
}


// let enter_name = document.getElementById('nameid')
// let enter_pass = document.getElementById('passwid')

// enter_name.addEventListener('keypress',(event)=>{
//     if(event.key == "Enter"){
//         on_register();
//     }
// })
// enter_pass.addEventListener('keypress',(event)=>{
//     if(event.key == "Enter"){
//         on_register();
//     }
// })

