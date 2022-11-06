/* Declaração de variáveis necessárias para funções */

nav = document.getElementById('navigation')
icon = document.getElementById('idicon')
secondicon = document.getElementById('idicon2')

function exibirnav() { // Função utilizada para exibição do menu nav
    nav.style.display="block"
    icon.style.display='none'
    secondicon.style.display='block'
}

function fecharnav() { // Função utilizada para o fechamento do menu nav
    nav.style.display='none'
    icon.style.display='block'
    secondicon.style.display='none'
}

function mudarTamanho(){ // Função utilizada para eliminar um pequeno bug (em caso de abertura e fechamento do menu mobile o menu desktop não era mostrado)
    if(window.innerWidth>=780){
        nav.style.display='block'
        icon.style.display ='none'
        secondicon.style.display='none'
    } else{
        nav.style.display='none'
        icon.style.display ='block'
    }
}