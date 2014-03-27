
window.onload = function (){

var boton = document.getElementById("accion");
boton.addEventListener("click", corrimiento );	
   
}

//65 et 90 para mayusculas el abcdario
//97 et 122 oara minusculas  el abcdario

function corrimiento()
{ 
 var incr;
 var value;
 var incre = "";	
 var palabra = document.getElementById("palabra").value; 
 var correr = document.getElementById("correr").value;
 correr = Number(correr);
 //console.log(palabra);
 palabra = palabra.toLowerCase();
// console.log(palabra);
if (palabra.length >= 1 && isNaN(palabra)){
	
	for (i = 0; i<palabra.length; i++)
	{
	   incr = palabra.charCodeAt([i])+correr;
	   incr = String.fromCharCode(incr);
	   incre = incre+incr;
	   	
   }
   console.log(incre);
   document.getElementById("div1").innerHTML=incre;	
} else {
	alert(palabra+" no es un tipo de letra admitido");
	window.location(index.html);
 }
/* for (i in value){

  console.log(value);
} */
}

/*
var value = 43000
var dolar = 2053.96
var numero = 0
function a (value){

	numero = numero / dolar
	console.log("dolar "+numero);
} 
function b (value){
	numero = numero * 50 / 100
	console.log("50 porciento "+numero);
} 

function c (value){

	numero = numero * 30 / 100
	console.log("30 porciento "+numero);
}

function d (value){

	numero = numero * 20 / 100
	console.log("20 porciento "+numero);
} 

a(value)
b(value)
c(value)
d(value)
*/