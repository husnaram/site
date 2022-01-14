const switcherBtn = document.getElementById('switcher-btn');
const switcherBtnMobile = document.getElementById('switcher-btn-mobile');

if ('theme' in localStorage && localStorage.theme === 'dark') {
	document.documentElement.classList.add('dark');
	switcherBtn.setAttribute(
		'd',
		'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
	);
	switcherBtnMobile.setAttribute(
		'd',
		'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
	);
}

function menuMobile() {
	const body = document.getElementsByTagName('body');
	const navMobile = document.getElementById('menu-mobile');
	if (navMobile.style.display === 'block') {
		body[0].classList.remove('overflow-hidden');
		navMobile.style.display = 'none';
	} else {
		body[0].classList.add('overflow-hidden');
		navMobile.style.display = 'block';
	}
}

function darkMode() {
	if (!document.documentElement.classList.length) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
		switcherBtn.setAttribute(
			'd',
			'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
		);
		switcherBtnMobile.setAttribute(
		'd',
		'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
	);
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.removeItem('theme');
		switcherBtn.setAttribute(
			'd',
			'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
		);
		switcherBtnMobile.setAttribute(
		'd',
		'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
	);
	}
}
