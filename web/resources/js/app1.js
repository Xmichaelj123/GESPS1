$("#pip").on("click",function(){

	Swal.fire({
		title: 'Estas Seguro de Cerrar Secion?',
		type: 'info',
		timer: 2000,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		cancelButtonText: 'No',
		confirmButtonText: 'Yes,!'
	}).then((result) => {

		if (confirmButtonText = 'Yez,!') {


			window.location.href = "../../../../index.html"


		}
	})
});

