document.addEventListener('DOMContentLoaded', function () {
	const readMoreButton = document.querySelector('.services__content-link');
	const hiddenText = document.querySelector('.services__hidden-text');
	const contentText = document.querySelector('.services__content-text');

	if (readMoreButton && hiddenText && contentText) {
			readMoreButton.addEventListener('click', function () {
				contentText.classList.toggle('services__content-text--expanded');
				readMoreButton.classList.toggle('services__content-link--expanded');

				if (contentText.classList.contains('services__content-text--expanded')) {
					readMoreButton.textContent = 'Скрыть';
				} else {
					readMoreButton.textContent = 'Читать далее';
				}
			});
	}
});