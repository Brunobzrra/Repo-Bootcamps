const elementos = document.getElementsByClassName("body","button","h1");
const darkModeClass='dark-mode';

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
	title.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
}   

function changeText(){
    const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		title.innerHTML = darkMode + ' ON';
        imgStud.src = 'assets/img/b&w.png';
		return;
	}
    
    imgStud.src = 'assets/img/colorful.png';
	button.innerHTML = darkMode;
	title.innerHTML = lightMode + ' ON';
}

const button = document.getElementById('change_mode');
const body = document.getElementsByTagName('body')[0];
const title = document.getElementById('mode_title');
const imgStud = document.getElementById('stud_pic');

button.addEventListener('click', changeMode);