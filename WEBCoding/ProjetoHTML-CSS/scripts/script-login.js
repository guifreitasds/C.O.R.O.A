// Visualização da senha
var SenhaInput = document.getElementById("passw");
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





//LS
let users = [];

if (localStorage.getItem('cadastrados')) {
  users = JSON.parse(localStorage.getItem('cadastrados'));
}


// Funções
function search_user(mail, passw){
  let index = users.findIndex((item)=>{
      return item.mail == mail && item.passw == passw
  })
  return index
}


function confirm_user() {
  let keep_mail = document.getElementById('mail').value
  let keep_pass = document.getElementById('passw').value
  if(search_user(keep_mail, keep_pass)!=-1){
    alert('Usuário encontrado!')
    window.location = 'home.html'
  } else{
    alert('usuário não encontrado')
  }
}
