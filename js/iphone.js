$(document).ready(function() {	

alerta_principio();

var weekday=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

var monthname=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var d = new Date();

d.setDate(d.getDate());    
$('#fecha').html(" Valido Solo Por Hoy - " + weekday[d.getDay()] + " " + d.getDate() + ' ' + monthname[d.getMonth()] + ' ' + d.getFullYear());


$("#pregunta2").hide();

$(".progreso1").hide();

$(".progreso2").hide();

$(".progreso3").hide();

$("#instrucciones").hide();

$(".ws").hide();

$("#ws1").hide();



$(".cuenta1").click(function() {

	$("#pregunta1").hide(1000);

	$("#pregunta2").show(1000);
});

$(".cuenta2").click(function() {

	$("#pregunta2").hide(1000);

	$(".progreso1").fadeIn(1000);

	$(".progreso2").fadeIn(1000);

	$(".progreso3").fadeIn(1000);

	move();

	$(".progreso1").delay(2000).fadeOut(1000);

	$(".progreso2").delay(3000).fadeOut(1000);

	$(".progreso3").delay(4000).fadeOut(1000);

	$(".responda").hide();

	$("#instrucciones").slideDown(10000);

	$(".ws").slideDown(10000);

	$("#ws1").slideDown(10000);

	$("#ws1").click(function() {

		swal("Por Favor Comparta Con Sus Amigos","Dale Click Al Boton, Compartir Whatsapp","warning");
	});

	
	




});




function move() {
  var elem = document.getElementById("progreso4");   
  var width = 20;
  var id = setInterval(frame, 5);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("demo").innerHTML = width * 0.1  + '%';
    }
  }
}

function alerta_principio() {
	
	swal("Quisieras Ganar Un iPhone X ?", "Totamente Gratis",{
	  buttons: {
	    cancel: "NO",
	    catch: {
	      text: "SI",
	      value: "catch",
	    },
	  },
	})
	.then((value) => {
	  switch (value) {
	 
	    case "catch":
	      swal("Felicidades", "Completa Unos Pasos", "success");
	      break;
	 
	    default:
	      swal("Continua",",","danger");
	  }
	});



}











	

	

	

});