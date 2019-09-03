
function validar (){

	var Nombre1 = document.getElementById("nombre1").value;
	var Nombre2 = document.getElementById("nombre2").value;
	var Apellido1 = document.getElementById("apellido1").value;
	var Apellido2 = document.getElementById("apellido2").value;
	var Direccion = document.getElementById("direccion").value;
	var usuario = document.getElementById("usuario").value;
	var Contrasena = document.getElementById("contrasena").value;
	var Telefono = document.getElementById("tel").value;

	if (usuario == 'xxx@gmail.com' && Contrasena == '12345' && Telefono == '3102325231' && Nombre1 == 'Michael' && Nombre2 == 'arturo' && Apellido1 == 'Rodriguez' && Apellido2 == 'Avendaño' && Direccion == 'Cr 39 #50-34 Calle 45') {

		window.location.href = "si/html/usuarios/supervisor/super.html"

	}else{
		
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Datos Incorectos!',
		})


	}

	
};





