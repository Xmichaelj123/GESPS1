function entrada(){

Swal.fire({
  title: 'Desea enviar su opinion?',
  text: "No se podra eliminar el mensaje!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, enviar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Enviada!',
      'Muchas gracias su opinion es muy importante para nosotros!.',
      'success'
    )
  }
})

}