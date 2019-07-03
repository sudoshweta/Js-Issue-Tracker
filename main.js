const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');


const colors = ['yellow', 'red', 'blue', '#3b5989'];

colorBtn.addEventListener('click', changecolor);

function changecolor()
{
	// bodyBcg.style.backgroundColor = 'black';
	let random = Math.floor(Math.random()*colors.length);
	bodyBcg.style.backgroundColor = colors[random];

}