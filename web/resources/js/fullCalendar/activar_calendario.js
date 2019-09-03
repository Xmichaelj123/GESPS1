$(document).ready(function(){

	$('#calendario_ver').fullCalendar({

		header:{
			left:   'title',
			center: '',
			right:  'today prev,  next', 	
			center: 'month,agendaFourDay'

		},

		eventLimit: true, // for all non-TimeGrid views
		views: {
			timeGrid: {
		      eventLimit: 4 // adjust to 6 only for timeGridWeek/timeGridDay
		  }
		},

		dayClick: function(date, jsEvent, view) {
			$('#txtfecha_inicio').val(date.format());
			$('#txtfecha_fin').val(date.format());
			$('#modal_calendar').modal();
		}, 
		
		editable: false, // event resources editable by default


		eventSources:[{
			events: [

			{
				title: 'Lavado a mitad de precio',
				start: '2019-06-05T15:45:00',
				allDay: false
			},

			{
				title: 'Planchado con 50% de descuento',
				start: '2019-08-10',
				end: '2019-06-13',
				color: "green",
			},


			],

			color: "white",
			textColor: "blue"
		}],

		eventClick:function(calEvent,jsEvent,view){
			$('#tituloEvent').html(calEvent.title);
			$('#fechaEvent').html(calEvent.start);
			$('#descripcionEvent').html(calEvent.descripcion);

			$('#modal_info').modal();
		}

	});

});


$('#btnmodificar').click(function(){
	recolectar_datos();
	Swal.fire({
		type: 'error',
		title: 'Oops...',
		text: 'No hay Conexion',
	})
});

$('#btnEliminar').click(function(){
	recolectar_datos();
	Swal.fire({
		type: 'error',
		title: 'Oops...',
		text: 'No hay Conexion',
	})
});

$('#btnEliminar').click(function(){
	recolectar_datos();
	Swal.fire({
		type: 'error',
		title: 'Oops...',
		text: 'No hay Conexion',
	})
});

var nuevo_evento;

$('#btnguardar').click(function(){

	var nombre = document.getElementById("txttitulo").value;

	if (nombre != '') {
		recolectar_datos();

		$('#calendario_ver').fullCalendar('renderEvent',nuevo_evento );
		$('#modal_calendar').modal('toggle');
		Swal.fire({
			type: 'success',
			title: 'Fabuloso....',
			text: 'Las Fechas se Registraron Corectamente',
		})


	}else{
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'Por favor Ingrese los Datos',
		})
	}

});



function recolectar_datos(){

	nuevo_evento= {
		id: 1,
		title: $('#txttitulo').val(),
		start: $('#txtfecha_inicio').val() + " " + $('#txthora').val(),
		end: $('#txtfecha_fin').val() + " " + $('#txthora_fin').val(),
		color: $('#txtcolor').val(),
		descripcion: $('#txtdescripcon_event').val(),
		textColor: $('#text_color').val()

	};

};


function error_base_datos(){

	

};



