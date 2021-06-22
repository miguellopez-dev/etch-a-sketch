const gridContainer = document.querySelector('.grid__container');
let gridSize = 16;

for (i = 0; i < gridSize * gridSize; i++) {
	const gridDiv = document.createElement('div');
	gridDiv.classList.add('grid__row');
	gridContainer.prepend(gridDiv);
}

gridContainer.style.width = gridSize * gridSize + 10 + 'px';

const square = document.querySelectorAll('.grid__row');
square.forEach((element) => {
	element.addEventListener('mouseover', function (e) {
		console.log((e.target.style.backgroundColor = 'blue'));
	});
});
