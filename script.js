const gridContainer = document.querySelector('.grid__container');
let gridSize = 16;

let makeGrid = function () {
	for (i = 0; i < gridSize * gridSize; i++) {
		const gridDiv = document.createElement('div');
		gridDiv.classList.add('grid__row');
		gridContainer.prepend(gridDiv);
	}
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	const square = document.querySelectorAll('.grid__row');

	square.forEach((element) => {
		element.addEventListener('mouseover', function (e) {
			e.target.style.backgroundColor = 'blue';
		});
	});
};

const resetGrid = function () {
	let test = document.querySelectorAll('.grid__row');
	test.forEach((element) => {
		element.parentNode.removeChild(element);
	});
};

const reset = function () {
	gridSize = prompt('Pick a grid size of 1 - 100.');
	resetGrid();
	makeGrid();
};

makeGrid();
