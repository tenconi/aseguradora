//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

    //Clase para conformar objetos
    class Cobertura {
        constructor(compania, rama, nombre,descripcion,costo){
            this.compania = compania;
            this.rama = rama;
            this.nombre = nombre;
            this.descripcion = descripcion;
            /*
            this.rCivil = rCivil;
            this.incendio = incendio;        
            this.robo = robo;
            this.cristales = cristales;*/
            this.costo = costo;
        }
    }

    //Array : se empuja mediante "push" los objetos al "array" coberturas.
    const coberturas =[]

    //Objetos
    const smg_A = new Cobertura('SMG','Automóviles','A1','Responsabilidad Civil, Incendio, Robo, Cristales.',1200);
    const smg_B = new Cobertura('SMG','Automóviles','B1','Responsabilidad Civil, Incendio, Robo.',900);
    const smg_C = new Cobertura('SMG','Automóviles','C1','Responsabilidad Civil.',750);

    const lma_A = new Cobertura('LMA','Automóviles','A','Responsabilidad Civil, Incendio, Robo, Cristales',900);
    const lma_B = new Cobertura('LMA','Automóviles','B','Responsabilidad Civil, Incendio, Robo.',750);
    const lma_C = new Cobertura('LMA','Automóviles','C','Responsabilidad Civil.',600);

    const int_A = new Cobertura('Integrity','Automóviles','A1','Responsabilidad Civil, Incendio, Robo, Cristales',1000);
    const int_B = new Cobertura('Integrity','Automóviles','B1','Responsabilidad Civil, Incendio, Robo.',850);
    const int_C = new Cobertura('Integrity','Automóviles','C1','Responsabilidad Civil.',700);

    const smg_H1 = new Cobertura('SMG','Hogar','Full','Inc. edificio, Inc. contenido, Robo contenido, Electrodomesticos, TR Mundo Entero',1100);
    const smg_H2 = new Cobertura('SMG','Hogar','H2','Inc. edificio, Inc. contenido, Electrodomesticos',600);

    const lma_H1 = new Cobertura('LMA','Hogar','Plus','Responsabilidad Civil, Incendio, Robo, Cristales',900);

    const smg_V = new Cobertura('SMG','Vida','Acc. Pers.','Amputación, Quedbraduras, Accidente, Muerte.',970);



    // "Pusheando" Objetos
    coberturas.push(smg_A)//0
    coberturas.push(smg_B)
    coberturas.push(smg_C)
    coberturas.push(lma_A)//3
    coberturas.push(lma_B)
    coberturas.push(lma_C)
    coberturas.push(int_A)//6
    coberturas.push(int_B)
    coberturas.push(int_C)

    coberturas.push(smg_H1)//9
    coberturas.push(smg_H2)//10

    coberturas.push(lma_H1)//11

    coberturas.push(smg_V)//12

    //Plantilla para "Cotizador".
    class Consulta {
        constructor(name, email, rubro, cia, suma, cuota){
            this.name = name;
            this.email = email;
            this.rubro = rubro;
            this.cia = cia;
            this.suma = suma;
            this.cuotaA = cuotaA
            this.cuotaB = cuotaB
            this.cuotaC = cuotaC
            this.cuotaH = cuotaH
            this.cuotaV = cuotaV
        }
    }

//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

// Selectores
let resultado = $('#resultados');
let btnCotizar = $('#button');
let consulta = $('.invitacion');

// Interacción: Agregando elementos (paso previo a formulario de "Cotización").
consulta.append(`
<h4 class="text-white pregunta">Desde tenco | Seguros estamos orgullosos de presentarte nuestro <em>cotizador web</em>, en el cual podrás ver y comparar la mejor cobertura para tu mayor tranquilidad. Por eso te invitamos a que completes nuestro formulario.</h4>
<button class="btn shadow comenzar pregunta">¿Estás listo para comenzar?</button>
`)
//--------------------------------------------------------//
    // Funcion para dar paso al formulario de "Cotización".
function Comenzar(){
    $('.pregunta').hide()
    $('.interactive').css({'display':'flex',
    'width':'100%'})
}
    // Listener
$('.comenzar').on('click', Comenzar)

//--------------------------------------------------------//
    //Variables/ Selectores de formulario "Cotizador".

    // Función para cotizador.
function guardarCotizacion (e){
    e.preventDefault();

    let name = $('#name').val()
    let email = $('#email').val()
    let rubro = $('input[name=rubro]:checked').val()
    let cia = $('input[name=cia]:checked').val()
    let suma = $('#suma').val()

    let cuota1 = (suma * 0.5) / 12
    cuotaA = cuota1.toFixed(2)

    let cuota2 = (suma * 0.4) / 12
    cuotaB = cuota2.toFixed(2)

    let cuota3 = (suma * 0.3) / 12
    cuotaC = cuota3.toFixed(2)

    let cuota4 = (suma * 0.025) / 12
    cuotaH = cuota4.toFixed(2)

    let cuota5 = (suma * 0.42) / 12
    cuotaV = cuota5.toFixed(2)

    console.log(`${name}, ${email}, ${rubro}, ${cia}, ${suma}`);

    // ALmaceno en localStorage
    const Cotizacion = new Consulta(name, email, rubro, cia, suma, cuotaA, cuotaB, cuotaC, cuotaH, cuotaV)
    localStorage.setItem("Consulta", JSON.stringify(Cotizacion))

    mostrarDatos();

}



// Función Resultado para cotizador === Funciona OK => se reemplazara con una funcion con FOR

function mostrarDatos(){
    const parseado = JSON.parse(localStorage.getItem('Consulta'))

    $('#resultados').empty();//vaciar contenido anterior

    //Integrity Auto
    if((parseado.rubro == "Auto")&&(parseado.cia == "Integrity Seguros")){
        
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/int.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[6].rama}: ${coberturas[6].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[6].descripcion}</p>                    
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaA - 30}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/int.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[7].rama}: ${coberturas[7].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[7].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaB - 30}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/int.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[8].rama}: ${coberturas[8].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[8].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaC - 30}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>
            
        </div>        
        `)
    }

    //Mercantil Auto
    if((parseado.rubro == "Auto")&&(parseado.cia == "Mercantil Andina")){
        
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/lma.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[3].rama}: ${coberturas[3].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[3].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaA - 50}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/lma.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[4].rama}: ${coberturas[4].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[4].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaB - 50}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/lma.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[5].rama}: ${coberturas[5].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[5].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaC - 50}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>
            
        </div>        
        `)
    }

    //SMG Auto
    if((parseado.rubro == "Auto")&&(parseado.cia == "Swiss Medical Group")){
        
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[0].rama}: ${coberturas[0].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[0].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaA}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[1].rama}: ${coberturas[1].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[1].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaB}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[2].rama}: ${coberturas[2].nombre}</h2>
                    <p class="card-text">Cobertura de: ${coberturas[2].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaC}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>
            
        </div>        
        `)
    }

    //Integrity Hogar
    if((parseado.rubro == "Hogar")&&(parseado.cia == "Integrity Seguros")){
        $('#resultados').append(`
        <p class="badmatch">Lo sentimos ${parseado.name}, no tenemos sugerencias para  ${parseado.rubro} en ${parseado.cia}.</p>`)
    }

    //Mercantil Hogar
    if((parseado.rubro == "Hogar")&&(parseado.cia == "Mercantil Andina")){
        
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/lma.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[11].rama}: ${coberturas[11].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[11].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaH}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>
            
        </div>        
        `)
    }

    //SMG Hogar
    if((parseado.rubro == "Hogar")&&(parseado.cia == "Swiss Medical Group")){
        
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[9].rama}: ${coberturas[9].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[9].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaH * 0.95}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>

            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[10].rama}: ${coberturas[10].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[10].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaH * 0.9}</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>
            
        </div>        
        `)
    }

    //Integrity Vida
    if((parseado.rubro == "Vida")&&(parseado.cia == "Integrity Seguros")){
        $('#resultados').append(`
        <p class="badmatch">Lo sentimos ${parseado.name}, no tenemos sugerencias para  ${parseado.rubro} en ${parseado.cia}.</p>`)
    }
    //Mercantil Vida
    if((parseado.rubro == "Vida")&&(parseado.cia == "Mercantil Andina")){
        $('#resultados').append(`
        <p class="badmatch">Lo sentimos ${parseado.name}, no tenemos sugerencias para  ${parseado.rubro} en ${parseado.cia}.</p>`)
    }

     //SMG Vida
     if((parseado.rubro == "Vida")&&(parseado.cia == "Swiss Medical Group")){
        $('#resultados').append(`
        <p class="goodmatch">Hola ${parseado.name}, estas son las coincidencias que encontramos para ti.</p>
        
        <div class="row d-flex justify-content-start aparicion">
            <div class="card">
                <img src="img/smg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coberturas[12].rama}: ${coberturas[12].nombre}</h5>
                    <p class="card-text">Cobertura de: ${coberturas[12].descripcion}</p>
                    <p class="card-text">Para un Suma Asegurada de $${parseado.suma} la cuota seria de:</p>
                    <p class="text-center"><strong>$${parseado.cuotaV }</strong> Mensuales</p>
                    <a href="#emergente" class="btn btn-success" id="contratar">Contratar</a>
                </div>
            </div>            
        </div>        
        `)
    }


        //Comprar (es ilustrativo, ya que no arrastra precio)

       

        let el = Array.from(document.querySelectorAll('#contratar'))

        el.forEach((boton) => {      
            //console.log(boton)
            boton.addEventListener('click', ()=>{
            
                $('#resultados').empty();//vaciar contenido anterior        
        
                $('#resultados').append(`
        
                <div class="emergente shadow" id="emergente"> <h2 style="color:#333;">Contratación</h2>
                
                
                <p>Hola <strong>${parseado.name}</strong></p>
                <p>¿Cómo deseas abonar?</p>

                <div class="tarjetas">
                    <p>Medios de pagos:</p>

                    <label>
                    <input type="radio">
                        <img src="img/amex.svg">
                    </label>

                    <label>
                    <input type="radio">
                        <img src="img/master.svg">
                    </label>

                    <label>
                    <input type="radio">
                        <img src="img/visa.svg">
                    </label>

                    <label>
                    <input type="radio">
                        <img src="img/mercado-pago.svg">
                    </label>
                </div>
                
                </div>    
                `
                )
            })
        })

}
    
btnCotizar.on('click', guardarCotizacion)// Listener




//--------------------------------------------------------//
//------------------Contacto / Siniestro -----------------//
//--------------------------------------------------------//
    
    // Formualrios:
let siniestro = $('.siniestro');
let mensaje = $('.mensaje');

let formSiniestro = $('#siniestro');
let formConsulta = $('#mensaje');

formSiniestro.hide();
mensaje.hide()

function Siniestro(){
    formSiniestro.slideDown(500)
    mensaje.slideDown(500)
    formConsulta.fadeOut(500)
    siniestro.hide(500)
}

function Mensaje(){
    formSiniestro.fadeOut(500)
    mensaje.hide(500)
    formConsulta.slideDown(500)    
    siniestro.slideDown(500)
}
    
    //Listeners
siniestro.on('click', Siniestro);
mensaje.on('click', Mensaje)


//--------------------------------------------------------//
//---------------Scroll para boton "#subir"---------------//
//--------------------------------------------------------//
scrollTopButton('.subir')

function scrollTopButton (btn){
    const $scrollBtn = $(btn);
    //console.log($ScrollBtn)

    $(window).scroll(function(){//llamo windows con jQuery
        let scrollTop = $(this).scrollTop() //metodo de jQuery
        //console.log(scrollTop)
        scrollTop > 750 ? $scrollBtn.removeClass('hidden') : $scrollBtn.addClass('hidden')//esto es como un if else  (?= if)/ (:= else)
    })
    
    // Volver al top
    $scrollBtn.click(function(){
        let btnClass = btn.substr(1) 

        if($(this).hasClass(btnClass)){
            window.scrollTo({//llamo windos con jS
                behavior: 'smooth',
                top: 0
            })
        }
    })
}
