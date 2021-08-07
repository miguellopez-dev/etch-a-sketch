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
			const backGroundC = e.target.style.backgroundColor;
			if (!e.target.hasAttribute('style')) {
				e.target.style.backgroundColor = `rgb(${Math.floor(
					Math.random() * 300
				)}, ${Math.floor(Math.random() * 300)}, ${Math.floor(
					Math.random() * 300
				)})`;
			} else {
				const backGroundSplit = backGroundC.substring(
					backGroundC.lastIndexOf('(') + 1,
					backGroundC.lastIndexOf(')')
				);
				const rgbColors = backGroundSplit.split(',').map(Number);
				e.target.style.backgroundColor = `rgb(${subtractPercent(rgbColors[0])}, 
				${subtractPercent(rgbColors[1])}, 
				${subtractPercent(rgbColors[2])})`;
			}
		});
	});
};

const subtractPercent = function (rgb) {
	let total = rgb * 0.2;
	return rgb - total;
};

const resetGrid = function () {
	let test = document.querySelectorAll('.grid__row');
	test.forEach((element) => {
		element.parentNode.removeChild(element);
	});
};

const reset = function () {
	gridSize = prompt('Pick a grid size of 1 - 100.');
	if (gridSize >= 1 && gridSize <= 100) {
		resetGrid();
		makeGrid();
	} else if (gridSize === null) {
		return;
	} else {
		reset();
	}
};

makeGrid();
