console.log('Welcome Robin');
var app = [];

app.calculation = function() {
	$(".btn").on("click", function() {
		var number = $(this).attr("value");
		console.log(number);
		console.log("click");
	});
};
app.calculation();