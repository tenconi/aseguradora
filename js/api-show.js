let info = $('.funtom')
let botonOn = $('.chevon')
let botonOf = $('.chevof')

function Desplegar(){
    info.show(420);
    botonOn.css('display','none')
    botonOf.css('display','block')
}
function Replegar(){
    info.hide(420);
    botonOn.css('display','block')
    botonOf.css('display','none')
}

botonOn.on('click', Desplegar)
botonOf.on('click', Replegar)