let users = [];

if (localStorage.getItem('registers')) {
  users = JSON.parse(localStorage.getItem('registers'));
}

function register() {
  let keep_name = document.getElementById('mail').value;
  let keep_pass = document.getElementById('passw').value;
  let user = { name: keep_name, passw: keep_pass };
  if(keep_name.length > 2 && keep_name.trim().length != 0 && keep_pass.length > 2 && keep_pass.trim().length != 0){
    users.push(user);
    localStorage.setItem('registers', JSON.stringify(users));
  }
  
}
