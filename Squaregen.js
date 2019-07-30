const paint = [
	'#70DE8E', // light green
	'#FAF199', // light yellow
	'#FC9A15', // dark orange
	'#FBE59B', // light orange
	'#FADBD8', // light pink
	'#AED6F1', // light blue
];
const bgColor = 'rgb(156, 126, 72)';

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bgColor);

	strokeWeight(2);
	noSmooth(2);
	fill(paint[1]);
}

const createGenerativeArt = () => {
	const shapeX = (windowWidth / 3);
	const shapeY = (windowHeight / 4);
	rect(mouseX, mouseY, random(10, shapeX), random(10, shapeY));
};
function mouseMoved() {
	createGenerativeArt();
}
function touchMoved() {
	createGenerativeArt();
}

function checkIfMouseMoved() {
  if (mouseMoved) {
	const randomColor = random(paint);
	fill(randomColor);
  }
}
setInterval(checkIfMouseMoved, 800);

function mouseClicked() {
	clear();
	background(bgColor);
}
