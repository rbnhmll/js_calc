// Pseudo Code
// 1. when user clicks on a number button, add it to a string, and the screen
// 2. When pressing an operator, add it to the the string
// 3. When pressing 'C' clear the screen, and the string.
// 4. When pressing the '=', perform the calculation and present on the screen

console.log('Welcome Robin. Shall we do some math?');
var app = [];
var formulaString = "";
var answer = "";

app.calculation = function() {

	function dealWithIt() {
		$(".calculator").addClass("rotate180");
		$(".deal-with-it").addClass("display animated fadeInDownBig");
		setTimeout(function() {
			$(".deal-text").addClass("text-display");
			console.log("wait for it!");
		}, 1200);
	};

	$(".btnC").on("click", function() {
		$(".screen").empty();
		$(".screen").text("0");
		$(".calculator").removeClass("rotate180");
		$(".deal-with-it").removeClass("display animated fadeInDownBig");
		$(".deal-text").removeClass("text-display");
		formulaString = "0";
		console.log("Calculator Cleared " + formulaString);
	});
	
	$(".numbers>.btn, .math>.btn").on("click", function() {
		if ($(".screen").text() === "0") {
			formulaString = "";
		}
		var number = $(this).attr("value");
		formulaString += number;
		$(".screen").text(formulaString);
		console.log(formulaString);
		// Easter Egg
		if (formulaString === "58008") {
			dealWithIt();
			console.log('BOOBS');
		};
	});
	
	$(".btnEq").on("click", function() {
		answer = eval(formulaString);
		console.log(answer);
		$(".screen").empty();
		$(".screen").text(answer);
		formulaString = answer;
		if (answer === 58008) {
			dealWithIt();
			console.log('BOOBS');
		}
	});

}(); 