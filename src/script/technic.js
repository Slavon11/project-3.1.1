document.addEventListener('DOMContentLoaded', function () {
	let swiper = null;

	function initSwiper() {
		const container = document.querySelector('.technic__container');

		if (window.innerWidth < 768) {
			if (!swiper && container) {
				swiper = new Swiper('.technic__container', {
					slidesPerView: 'auto',
					loop: "true",
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
				});
			}
		} else {
			if (swiper) {
				swiper.destroy(true, true);
				swiper = null;
			}
		}
	}

	initSwiper();

	window.addEventListener('resize', function () {
		initSwiper();
	});


	const showAllButton = document.querySelector('.technic__show-all');
	const technicList = document.querySelector('.technic__list');

	if (showAllButton && technicList) {
		showAllButton.addEventListener('click', function () {
			technicList.classList.toggle('technic__list--expanded');
			showAllButton.classList.toggle('technic__show-all--expanded');

			if (technicList.classList.contains('technic__list--expanded')) {
				showAllButton.textContent = 'Скрыть';
			} else {
				showAllButton.textContent = 'Показать все';
			}
		});
	}
});