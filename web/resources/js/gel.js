function validar(){
	var email = document.fomns ["ingresar"]["usuario"].value;
	var pass = document.fomns ["ingresar"]["pass"].value;

	if (email == "super@gmail.com" && pass == "super12345") {
		window.location.href = "Supervisor.html";		
	}else if(email == 'cliente@gmail.com' && pass == ""){
		window.location.href = "Usuario.html";		
	}else if(email == 'operario@gmail.com' && pass == "	"){
		window.location.href = "Operario.html";	
	}else{
		alert('Permiso_Denegado');		
	}	
}
