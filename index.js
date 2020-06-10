let calc = "";

function updateDisplay(output) {
	document.getElementById("display").innerHTML = output;
}

function input(value) {
	if(calc.length >= 17) return;
	calc = calc + value;
	updateDisplay(calc);
}

function calculate() {
	try {
		calc = eval(calc).toString();
	} catch (err) {
		calc = "error";
	}
	updateDisplay(calc);
	calc = "";
}

function displayClear() {
	calc = "";
	updateDisplay("");
}