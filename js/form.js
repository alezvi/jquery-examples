$(document).ready(function () {

	var form = $('#register')

	var button = form.find('button')

	var name = form.find('input[name=nombre]')

	var description = form.find('textarea')

	var checkbox = form.find('input:checkbox')

	var complete = 0

	$('input[type=text], textarea')
		.css('padding', '6px')
		.css('fontFamily', 'Arial')
		.css('width', '200px')

	if (name.val().length == 0) {
		name.before(function () {
			var p = document.createElement('p')

			p.innerHTML = 'Ingrese su nombre'
			p.style.color = 'red'

			return p;
		})

		name.addClass('error')
	} else {
		complete++
	}

	if (description.val().length == 0) {
		description.before('<p>Ingrese una descripcion</p>')
		description.addClass('error')
	} else {
		complete++
	}

	if (checkbox.is(':checked')) {
		complete++
	}

	button.attr('disabled', complete != 3)

})
