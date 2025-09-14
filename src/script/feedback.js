document.addEventListener('DOMContentLoaded', function() {
const feedbackButton = document.getElementById('feedback__button');
const feedbackButtonClose = document.getElementById('feedback__button-close');
const feedback = document.getElementById('feedback');
const feedbackOverlay = document.getElementById('feedback__overlay');

function openMenu() {
	feedback.classList.add('feedback--open');
	feedbackOverlay.classList.add('feedback__overlay--visible');
	document.body.style.overflow = 'hidden';
}

function closeMenu() {
	feedback.classList.remove('feedback--open');
	feedbackOverlay.classList.remove('feedback__overlay--visible');
	document.body.style.overflow = '';
}

feedbackButton.addEventListener('click', openMenu);
feedbackButtonClose.addEventListener('click', closeMenu);
feedbackOverlay.addEventListener('click', closeMenu);

});