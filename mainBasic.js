
var miImagen = document.querySelector('img');

miImagen.onclick = function(){
	var miSrc = miImagen.getAttribute('src');
	if (miSrc === 'img/1.png') {
		miImagen.setAttribute('img/2.png');
	} else {
		miImagen.setAttribute('img/1.png');
	}
}
