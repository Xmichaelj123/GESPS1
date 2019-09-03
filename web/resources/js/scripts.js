
function validar(){
	let email = document.getElementById('emailIngreso').value;
	let pass = document.getElementById('passIngreso').value;

	if (email == 'supervisor@gmail.com' && pass == "super12345") {



		let timerInterval
		Swal.fire({
			title: 'Iniciando Secion!',
			timer: 2000,
			onBeforeOpen: () => {
				Swal.showLoading()
				timerInterval = setInterval(() => {
					Swal.getContent().querySelector('strong')
					.textContent = Swal.getTimerLeft()
				}, 100)
			},
			onClose: () => {
				clearInterval(timerInterval)
			}
		}).then((result) => {
			if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.timer
    ) {
				console.log('I was closed by the timer')
		}
	}).then((result) => {
		if (result.value) {

			window.location.href = "inicio.html"
		}
	})

		// window.location = 'si/admin/indexAdmin.html';		
	}
    }