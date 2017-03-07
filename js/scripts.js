// plik scripts.js

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 20);
var triangle3Area = getTriangleArea(-2, 4);
console.log('triangle1Area='+triangle1Area);
console.log('triangle2Area='+triangle2Area);
console.log('triangle3Area='+triangle3Area);

function getTriangleArea(a, h) {

	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
		return 'Nieprawidłowe dane';
	}

	var triangleArea = (a * h /2);
	console.log(triangleArea);

	document.getElementById("triangleArea").innerHTML = "Pole tego trójkąta wynosi " + triangleArea;
	return triangleArea;
}

function emptyFunction(name) {
	console.log(name + ' jest na dobrej drodze by zostać Frontend Developerką.');
}

console.log( getTriangleArea(10, 6) );
emptyFunction('Karolina');

