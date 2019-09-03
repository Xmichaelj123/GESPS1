Swal.fire({
  type: 'success',
  title: 'A seleccionado Tintura',
  showConfirmButton: false,
  timer: 1500
});


$("#bobon3").on("click",function(){

	Swal.fire({
		title: 'Domcicilio Completado?',
		type: 'info',
		timer: 2000,
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		confirmButtonText: 'Continiar!'
	}).then((result) => {

		if (confirmButtonText = 'Continiar!') {


			window.location.href = "Tinturado-delicado.html"


		}
	})
});