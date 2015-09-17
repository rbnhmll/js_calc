// Pseudo Code
// 1. when user clicks on a number button, add it to a string, and the screen
// 2. When pressing an operator, add it to the the string
// 3. When pressing 'C' clear the screen, and the string.
// 4. When pressing the '=', perform the calculation and present on the screen

console.log('Welcome Robin');
var app = [];
var formulaString = "";

app.calculation = function(x) {
	$(".btn").on("click", function() {
		var number = $(this).attr("value");
		formulaString += number;
		$(".screen").text(formulaString);
		console.log(formulaString);
		console.log("click");
	});
	$(".btnEq").on("click", function() {
		formulaString.eval();
		$(".screen").empty().text(formulaString);
	});
}(); 