const URL = 'https://api.openweathermap.org/data/2.5/weather?id=3840092&appid=d01a1d34ba74cabe4eecfae889c2b5cf&units=metric';


const temp = $('#temp');
const ico = $('#ico');
const localidad = $('#localidad');
const feels = $('#feels');
const wind = $('#wind')

//Metodo GET
$.get(URL, function(data, status){
    //console.log(data)
    //console.log(status)
    if(status === 'success'){
        temp.append(`${data.main.temp.toFixed(0)} °`)
        ico.append(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icono">`)
        localidad.append(`${data.name}`)
        feels.append(`${data.main.feels_like.toFixed(0)}°`)
        wind.append(`${data.wind.speed}`)
    }
})
