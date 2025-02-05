//  lista de amigos
let amigos = [];

//funcion  agregar amigos
function agregarAmigo() {
	//selecciono el valor del input
	const amigo = document.getElementById("amigo").value;
	//agregar amigo a la lista si no esta vacio el input
	if (amigo != "") {
		amigos.push(amigo);
		//muestro los amigos
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	//limpia el input
	document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
	//Elige el ul correspondiente para agregarle los li
	const amigosHTML = document.querySelector("#listaAmigos");
	// limpio el ul para evitar repetidos
	amigosHTML.innerHTML = "";
	//iteramos la lista de amigos para crear los li para cada amigo y agregarlos al ul
	for (let i = 0; i < amigos.length; i++) {
		const amigo = amigos[i];
		//creo el li
		const li = document.createElement("li");
		//le doy como contenido el nombre del amigo actual
		li.textContent = amigo;
		//agrego el li con el amigo actual al ul
		amigosHTML.appendChild(li);
	}
}

function sortearAmigo() {
	// hay amigos para sortear ?, en tal caso, salgo de la funcion informando al usuario
	if (amigos.length == 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	//elige el ul correspondiente para agregarle el li con el amigo sorteado
	const resultadoHTML = document.querySelector("#resultado");
	//elige un amigo sorteado
	const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	//entregamos el nombre del amigo sorteado
	resultadoHTML.innerHTML = `${amigoSorteado}`;
	//disable el boton de sortear para evitar que se sortee mas de una vez
	document.querySelector(".button-draw").disabled = true;
	//disable el boton de agregar para evitar que se agreguen mas amigos
	document.querySelector(".button-add").disabled = true;
}
