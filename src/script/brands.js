document.addEventListener('DOMContentLoaded', function () {
	let swiper = null;

	function initSwiper() {
		const container = document.querySelector('.brands__container');

		if (window.innerWidth < 768) {
			if (!swiper && container) {
				swiper = new Swiper('.brands__container', {
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


	const showAllButton = document.querySelector('.brands__show-all');
	const brandsList = document.querySelector('.brands__list');

	if (showAllButton && brandsList) {
		showAllButton.addEventListener('click', function () {
			brandsList.classList.toggle('brands__list--expanded');
			showAllButton.classList.toggle('brands__show-all--expanded');

			if (brandsList.classList.contains('brands__list--expanded')) {
				showAllButton.textContent = 'Скрыть';
			} else {
				showAllButton.textContent = 'Показать все';
			}
		});
	}
});