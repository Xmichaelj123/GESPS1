
function validar (){

	var usuario = document.getElementById("usuario").value;
	var contrasena = document.getElementById("contrasena").value;

	if (usuario == 'supervisor@gmail.com' && contrasena == 'super12345') {

		window.location.href = "si/html/usuarios/supervisor/super.html"

	}else if(usuario == 'usuario@gmail.com' && contrasena == 'user12345'){

		window.location.href = "si/html/usuarios/usuario/user.html"

	}else if(usuario == 'operario@gmail.com' && contrasena == 'oper12345'){

		window.location.href = "si/html/usuarios/operario/oper.html"

	}else{
		
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Datos Incorectos!',
		})


	}

	
};







