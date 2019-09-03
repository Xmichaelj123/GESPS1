Swal.fire({
  type: 'success',
  title: 'A seleccionado Planchado',
  showConfirmButton: false,
  timer: 1500
});


$("#bobon1").on("click",function(){

	Swal.fire({
		title: 'Domcicilio Completado?',
		type: 'info',
		timer: 2000,
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		confirmButtonText: 'Continiar!'
	}).then((result) => {

		if (confirmButtonText = 'Continiar!') {


			window.location.href = "Planchado-delicado.html"


		}
	})
});
