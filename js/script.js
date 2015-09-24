// Pseudo Code
// 1. when user clicks on a number button, add it to a string, and the screen
// 2. When pressing an operator, add it to the the string
// 3. When pressing 'C' clear the screen, and the string.
// 4. When pressing the '=', perform the calculation and present on the screen


	console.log('Welcome Robin. Shall we do some math?');
	var app = {};
	var formulaString = "";
	var answer = "";
	var easterEggs = [0.7734, 8369417052, 8008, 9009, 58008, 59009, 58008618, 59009619, 5318008, 5319009, 55378008, 32008, 5317009, 7734, 37047734, 4517734, 316006];

	$(function(){
		app.init();
	}); //end of document ready

	app.init = function() {
		app.startTime();
		app.calculation();
	};

	// Clock function
	app.startTime = function() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    $(".time").text(h+":"+m);
	    var t = setTimeout(function(){
	    	app.startTime()
	    },500);
	};

	app.calculation = function() {
		// Easteregg Function
		app.dealWithIt = function() {
			$(".calculator").addClass("rotate180");
			$(".deal-with-it").addClass("display animated fadeInDownBig");
			
			setTimeout(function() {
				$("title").text("DEAL WITH IT!");
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
		});
		
		$(".btnEq").on("click", function() {
			answer = eval(formulaString);
			console.log(answer);
			$(".screen").empty();
			$(".screen").text(answer);
			formulaString = answer;
			// Also Easter Egg
			for (var i = 0; i < easterEggs.length; i++) {
				if (answer == easterEggs[i]) {
					app.dealWithIt();
					console.log('beghilos!');
				};
			};
		});
	};

