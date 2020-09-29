// <--------------- SELECTORES --------------->
// Contenedores
const contenedor_facultad = document.getElementById('contenedor_facultad');
const contenedor_grado = document.getElementById('contenedor_grado');
const contenedor_investigacion = document.getElementById('contenedor_investigacion');
const contenedor_extension = document.getElementById('contenedor_extension');
const contenedor_posgrado = document.getElementById('contenedor_posgrado');
const contenedor_internacionales = document.getElementById('contenedor_internacionales');
const contenedor_centros = document.getElementById('contenedor_centros');

const contenedores = [contenedor_facultad, contenedor_grado, contenedor_investigacion, contenedor_extension, contenedor_posgrado, contenedor_internacionales, contenedor_centros];

// Botones
const facultad = document.getElementById('facultad');
const grado = document.getElementById('grado');
const investigacion = document.getElementById('investigacion');
const extension = document.getElementById('extension');
const posgrado = document.getElementById('posgrado');
const internacionales = document.getElementById('internacionales');
const centros = document.getElementById('centros');

const botones = [facultad, grado, investigacion, extension, posgrado, internacionales, centros];

// Submenues
const facultadSubmenu = document.getElementById('facultadSubmenu');
const gradoSubmenu = document.getElementById('gradoSubmenu');
const investigacionSubmenu = document.getElementById('investigacionSubmenu');
const extensionSubmenu = document.getElementById('extensionSubmenu');
const posgradoSubmenu = document.getElementById('posgradoSubmenu');
const internacionalesSubmenu = document.getElementById('internacionalesSubmenu');
const centrosSubmenu = document.getElementById('centrosSubmenu');

const subMenues = [facultadSubmenu, gradoSubmenu, investigacionSubmenu, extensionSubmenu, posgradoSubmenu, internacionalesSubmenu, centrosSubmenu];

// <--------------- FUNCIONES --------------->
const cerrarSubmenues = function () {
	subMenues.forEach((subMenu) => {
		if (!subMenu.classList.contains('d-none')) {
			subMenu.classList.add('d-none');
		}
	});
};

const quitarActivo = function () {
	contenedores.forEach((contenedor) => {
		if (contenedor.classList.contains('navbar-medio-link-activo')) {
			contenedor.classList.remove('navbar-medio-link-activo');
		}
	});
	botones.forEach((boton) => {
		if (boton.classList.contains('navbar-medio-link-text-activo')) {
			boton.classList.remove('navbar-medio-link-text-activo');
		}
	});
};

// <--------------- EVENTOS --------------->
// Facultad
facultad.addEventListener('click', () => {
	if (facultad.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	facultadSubmenu.classList.remove('d-none');
	facultad.classList.add('navbar-medio-link-text-activo');
	contenedor_facultad.classList.add('navbar-medio-link-activo');
});

// Grado
grado.addEventListener('click', () => {
	if (grado.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	gradoSubmenu.classList.remove('d-none');
	grado.classList.add('navbar-medio-link-text-activo');
	contenedor_grado.classList.add('navbar-medio-link-activo');
});

// Investigacion
investigacion.addEventListener('click', () => {
	if (investigacion.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	investigacionSubmenu.classList.remove('d-none');
	investigacion.classList.add('navbar-medio-link-text-activo');
	contenedor_investigacion.classList.add('navbar-medio-link-activo');
});

// Etension
extension.addEventListener('click', () => {
	if (extension.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	extensionSubmenu.classList.remove('d-none');
	extension.classList.add('navbar-medio-link-text-activo');
	contenedor_extension.classList.add('navbar-medio-link-activo');
});

// Posgrado
posgrado.addEventListener('click', () => {
	if (posgrado.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	posgradoSubmenu.classList.remove('d-none');
	posgrado.classList.add('navbar-medio-link-text-activo');
	contenedor_posgrado.classList.add('navbar-medio-link-activo');
});

// Internacionales
internacionales.addEventListener('click', () => {
	if (internacionales.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	internacionalesSubmenu.classList.remove('d-none');
	internacionales.classList.add('navbar-medio-link-text-activo');
	contenedor_internacionales.classList.add('navbar-medio-link-activo');
});

// Centros
centros.addEventListener('click', () => {
	if (centros.classList.contains('navbar-medio-link-text-activo')) {
		cerrarSubmenues();
		quitarActivo();
		return;
	}
	cerrarSubmenues();
	quitarActivo();

	centrosSubmenu.classList.remove('d-none');
	centros.classList.add('navbar-medio-link-text-activo');
	contenedor_centros.classList.add('navbar-medio-link-activo');
});
