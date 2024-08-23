const cajaTexto = document.querySelector("#caja_texto");
const cajaMuestra  = document.querySelector("#caja_muestra");



//Mostrar el texto verificado por las condicionales estipuladas y un cuadro de texto.

function botonEncriptar(){
const textoEscrito = encriptar(cajaTexto.value);
let mensajes = document.querySelector(".mensajes");
if (textoEscrito== '' || textoEscrito !== textoEscrito.toLowerCase() || /[áéíóúÁÉÍÓÚ]/.test(textoEscrito) ){
    mostrarAlerta();
    
}
else {
mensajes.classList.add("ocultar");
cajaMuestra.value = textoEscrito;
let copiarCaja = document.querySelector(".boton_copiar");
copiarCaja.classList.add("visible");
}
cajaTexto.value = "";



}   
//Mostrar el texto verificado por las condicionales estipuladas y un cuadro de texto.
function botonDesencriptar(){
    const textoEscrito = desencriptar(cajaTexto.value);
    let mensajes = document.querySelector(".mensajes");
    if (textoEscrito== '' || textoEscrito !== textoEscrito.toLowerCase() || /[áéíóúÁÉÍÓÚ]/.test(textoEscrito) || /^[a-zA-Z0-9\s]*$/.test(textoEscrito)){
        mostrarAlerta();
        
    }
    else {
    mensajes.classList.add("ocultar");
    cajaMuestra.value = textoEscrito;
    let copiarCaja = document.querySelector(".boton_copiar");
copiarCaja.classList.add("visible");
    }
    cajaTexto.value = "";


    }
/* Este método se utiliza para ofuscar el contenido de un texto, transformando
cada vocal en una secuencia de caracteres predefinida.*/
function encriptar(texto){
    let encriptadores = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    

    for(let i=0 ; i < encriptadores.length; i++){
        if(texto.includes(encriptadores[i][0])){
            texto = texto.replaceAll(encriptadores[i][0], encriptadores[i][1]);
        }
    } return texto;
} 
/* Este metodo se utiliza para revertir la funcion "Encriptar" que transforma caracteres predefinidos
en sus vocales respectivas */

function desencriptar(texto){
    let encriptadores = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    

    for(let i=0 ; i < encriptadores.length; i++){
        if(texto.includes(encriptadores[i][1])){
            texto = texto.replaceAll(encriptadores[i][1], encriptadores[i][0]);
        }
    } return texto;
}  

// Guardar el texto en el clipboard
function botonCopiar(){
  let textoMostrado = cajaMuestra.value;
  let copiarCaja = document.querySelector(".boton_copiar")
  navigator.clipboard.writeText(textoMostrado);
  setTimeout(() => {
    copiarCaja.textContent   = "copiado"
  },  "0");
  setTimeout(() => {
    copiarCaja.textContent   = "copiar"
  },  "500");
}


function mostrarAlerta() {
    Swal.fire({
        title: 'Error',
        text: 'Ingrese texto con minúsculas y sin acentos',
        icon: 'warning',
        confirmButtonText: 'Entendido',
         confirmButtonColor: '#213555'
    });
}


