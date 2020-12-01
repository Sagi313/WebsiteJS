const button = document.getElementById('aBtn');

const titlee = document.getElementsByClassName('alist')

function disapper(element){
	let state = element.style.display;
	if (state == 'none')
	{
		element.style.display = 'inline-block'
	}
	else
	{
		element.style.display = 'none'
	}}

button.addEventListener('click', function() {
	disapper(titlee);
})