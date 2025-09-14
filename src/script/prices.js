
document.addEventListener('DOMContentLoaded', function () {
	let swiper = null;

	function initSwiper() {
		const container = document.querySelector('.prices__container');

		if (window.innerWidth < 768) {
			if (!swiper && container) {
				swiper = new Swiper('.prices__container', {
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
});

