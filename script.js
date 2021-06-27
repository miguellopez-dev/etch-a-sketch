const gridContainer = document.querySelector('.grid__container');
let gridSize = 64;

for (i = 0; i < gridSize * gridSize; i++) {
	const gridDiv = document.createElement('div');
	gridDiv.classList.add('grid__row');
	gridContainer.prepend(gridDiv);
}

console.log(gridContainer.classList);
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

const square = document.querySelectorAll('.grid__row');
square.forEach((element) => {
	element.addEventListener('mouseover', function (e) {
		e.target.style.backgroundColor = 'blue';
	});
});
