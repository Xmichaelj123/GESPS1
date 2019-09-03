		Swal.fire({
			title: 'Bienvenido!',
			timer: 1000,
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
		})