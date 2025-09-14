document.addEventListener('DOMContentLoaded', function() {
const burgerButton = document.getElementById('burger-button');
const burgerButtonClose = document.getElementById('burger-button-close');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
	mobileMenu.classList.add('mobile-menu--open');
	menuOverlay.classList.add('mobile-menu__overlay--visible');
	document.body.style.overflow = 'hidden';
}

function closeMenu() {
	mobileMenu.classList.remove('mobile-menu--open');
	menuOverlay.classList.remove('mobile-menu__overlay--visible');
	document.body.style.overflow = '';
}

burgerButton.addEventListener('click', openMenu);
burgerButtonClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);


});