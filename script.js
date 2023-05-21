var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    if(hr < 10 ) hr = "0"+ hr

    if(min < 10 ) min = "0"+ min

    if(seg < 10 ) seg = "0"+ seg


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg 
})


const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")

const calendario = setInterval(function date(){
    let data = new Date();
    let d = data.getDate()
    let m = data.getMonth()+1
    let a = data.getFullYear().toString().slice(-2)

  
    if(d<10) d = "0" + d

    if (m<10) m = "0" + m

    

    dia.textContent = d
    mes.textContent = m
    ano.textContent = a
})