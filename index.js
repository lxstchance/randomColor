const board = document.querySelector('#board');
const colors = ['#FFEBEE', '#FCE4EC', '#9FA8DA', '#80CBC4', '#FFEE58', '#FF4081', '#1E88E5', '#8E24AA', '#EEFF41', '#FFD740', '#FFD740', '#CDDC39', '#FF9100', '#D500F9', '#607D8B', '#4A148C', '#33691E', '#00BFA5']
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}