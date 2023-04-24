let img_container = document.getElementsByClassName('img-container')

let deslize = 0

setInterval(()=>{
    img_container[0].style.transform = `translate(${-deslize*500}px)`
    img_container[1].style.transform = `translate(${-deslize*600}px)`
    img_container[2].style.transform = `translate(${-deslize*600}px)`
    deslize++;
    if(deslize>=3){
        deslize=0;
    }
}, 3000)


