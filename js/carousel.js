$(document).ready(function () {

	var carousel = $('.carousel');

	var imgs = carousel.find('img')

	var current = 0;

	var firstImage = $(imgs[current]).attr('src');

	var bigImage = document.createElement('img')

	var text = carousel.find('.text')

	bigImage.setAttribute('src', firstImage)
	bigImage.setAttribute('id', 'big')

	carousel.prepend(bigImage);

	text.text(imgs[current].alt)

	carousel.find('.prev').click(function () {

		if (current == 0) {
			current = imgs.length-1;
		} 
		else {
			current--;
		}

		$(bigImage).attr('src', imgs[current].src);

		text.text(imgs[current].alt)

	})

	carousel.find('.next').click(function () {
		
		if (current == imgs.length-1) {
			current = 0;
		} 
		else {
			current++;
		}

		$(bigImage).attr('src', imgs[current].src);

		text.text(imgs[current].alt)

	})

})
