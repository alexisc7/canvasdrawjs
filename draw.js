
var texto = document.getElementById("texto_lineas"); 
var boton = document.getElementById("botton");  
boton.addEventListener("click", dibujoPorClick); 

var d = document.getElementById("dibujo"); 
var ancho = d.width;
var lienzo = d.getContext("2d"); 


function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final) {
	lienzo.beginPath(); 
	lienzo.strokeStyle = color;  
	lienzo.moveTo(x_inicial, y_inicial); 
	lienzo.lineTo(x_final, y_final); 
	lienzo.stroke(); 
	lienzo.closePath(); 
}

function dibujoPorClick() {

	var lineas = parseInt(texto.value); 
	var l = 0; 
	var y_i, x_f, x_i, y_f, x_ini, y_fin, y_iniciar, x_finalizar; 
	var colorPatron = "#219fff" 
	var matiz = "#0a0a0a"; 
	var espacio = ancho / lineas; 	

	for (l = 0; l < lineas; l++) { 
		x_ini = espacio * (l+1);
		y_fin = 400 - x_ini; 
		dibujarLinea(colorPatron, x_ini, 0, 0, y_fin); 
		y_i = espacio * l;
		x_f = espacio * (l + 1);
		dibujarLinea(colorPatron, 0, y_i, x_f, 400);
		x_i = y_i
		y_f = x_f
		dibujarLinea(colorPatron, x_i, 0, 400, y_f);
		y_iniciar = espacio * l;
		x_finalizar = 400 - x_f; 
		dibujarLinea(colorPatron, 400, y_iniciar, x_finalizar, 400); 
		console.log("linea" + l);
		}

		dibujarLinea(matiz, 1, 1, 1, 399); //marco izquierdo
		dibujarLinea(matiz, 1, 399, 399, 399); //marco inferior

		dibujarLinea(matiz, 399, 1, 1, 1); //marco superior
		dibujarLinea(matiz, 399, 399, 399, 1); //marco derecho
	} 