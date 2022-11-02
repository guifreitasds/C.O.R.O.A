function exibirnav() {
    nav = document.getElementById('navigation')
    icon = document.getElementById('idicon')
    secondicon = document.getElementById('idicon2')
    nav.style.display="block"
    icon.style.display='none'
    secondicon.style.display='block'
}

function fecharnav() {
    nav = document.getElementById('navigation')
    icon = document.getElementById('idicon')
    secondicon = document.getElementById('idicon2')
    nav.style.display='none'
    icon.style.display='block'
    secondicon.style.display='none'
}