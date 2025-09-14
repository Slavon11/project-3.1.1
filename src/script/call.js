document.addEventListener('DOMContentLoaded', function() {
const callButton = document.getElementById('call__button');
const callButtonClose = document.getElementById('call__button-close');
const call = document.getElementById('call');
const callOverlay = document.getElementById('call__overlay');

function openMenu() {
	call.classList.add('call--open');
	callOverlay.classList.add('call__overlay--visible');
	document.body.style.overflow = 'hidden';
}

function closeMenu() {
	call.classList.remove('call--open');
	callOverlay.classList.remove('call__overlay--visible');
	document.body.style.overflow = '';
}

callButton.addEventListener('click', openMenu);
callButtonClose.addEventListener('click', closeMenu);
callOverlay.addEventListener('click', closeMenu);

});