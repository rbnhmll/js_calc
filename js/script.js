var app = {};
	var formulaString = "";
	var answer = "";
	var easterEggs = [0.7734, 8369417052, 8008, 9009, 58008, 59009, 58008618, 59009619, 5318008, 5319009, 55378008, 32008, 5317009, 7734, 37047734, 4517734, 316006];

	// .ready() function, but simplified.
	$(function(){
		app.init();
	}); //end of .ready()

	// Will be run on ready, as told above.
	app.init = function() {
		console.log('Welcome Robin. Shall we do some math?');
		app.startTime();
		app.calculation();
	};

	app.checkString = function() {
		var i = formulaString.length;
		console.log('Length of string is ' + i);
		formulaString = formulaString.substring(0,9);
	};

	// Clock function
	app.startTime = function() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    m = checkTime(m);
	    $(".time").text(h+":"+m);
	    var t = setTimeout(function(){
	    	app.startTime()
	    },500);
	    function checkTime(i) {
        if (i<10) {
	        i = "0" + i
        };  // add zero in front of numbers < 10
        return i;
	    }
	};

	app.calculation = function() {
		// Easteregg Function
		app.dealWithIt = function() {
			$(".calculator").addClass("rotate180");
			$(".deal-with-it").addClass("display animated fadeInDownBig");
			$(".screen").addClass("calc-font");
			// Delay the text reveal for comic effect.
			setTimeout(function() {
				$("title").text("DEAL WITH IT!");
				$(".deal-text").addClass("text-display");
				console.log("wait for it!");
			}, 1200);
		};

		// Reset function
		$(".btnC").on("click", function() {
			$(".screen").empty();
			$(".screen").text("0");
			$(".calculator").removeClass("rotate180");
			$(".deal-with-it").removeClass("display animated fadeInDownBig");
			$(".deal-text").removeClass("text-display");
			$(".screen").removeClass("calc-font");
			formulaString = "0";
			$("title").text("JS Calc - BETA");
			console.log("Calculator Cleared " + formulaString);
		});
		
		// What to do when hitting the keys.
		$(".numbers>.btn, .math>.btn").on("click", function() {
			if ($(".screen").text() === "0") {
				formulaString = "";
			}
			var number = $(this).attr("value");
			formulaString += number;
			app.checkString();
			$(".screen").text(formulaString);
			console.log(formulaString);
		});
		
		// Answer function, but also easter egg implementation.
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
			}; // End of for loop
		}); // End of = functions

	};