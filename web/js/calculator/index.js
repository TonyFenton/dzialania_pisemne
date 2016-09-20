function inputValue(input) {
	return input.val().trim();
}

function addition() {
	var firstInputValue = inputValue(firstInput);
	var secondInputValue = inputValue(secondInput);
	
	var validation = new Validation();
	var isValid = validation
		.validateInput(firstInputValue, "Pierwsze Pole")
		.validateInput(secondInputValue, "Drugie Pole")
		.isValid()
	;

	if (isValid === true) {
		
		var calculation = new Calculation(firstInputValue, secondInputValue);
		calculation
			.createTable(4, calculation.maxNumberLength()+2)
			.setNumber(calculation.firstNumber, 1, calculation.tableWidth - calculation.firstNumberLength)
			.setNumber(calculation.secondNumber, 2, calculation.tableWidth - calculation.secondNumberLength)
			.setSign("+", 2, 0, interval)
			.setLine(2, 0, calculation.tableWidth, interval)
			.addition(1, calculation.tableWidth - 1, calculation.maxNumberLength(), true, interval*2, interval)
			.showSuccess(3, interval * calculation.maxNumberLength() + interval*1.5, interval);
	}
}

function subtraction() {
	var firstInputValue = inputValue(firstInput);
	var secondInputValue = inputValue(secondInput);
	
	var validation = new Validation();
	var isValid = validation
		.validateInput(firstInputValue, "Pierwsze Pole")
		.validateInput(secondInputValue, "Drugie Pole")
		.validateGreaterOrEqual(firstInputValue, secondInputValue)
		.isValid()
	;
	
	if (isValid === true) {
		
	}
}

var interval = 750;

var inputs = $('#calculator input');

var firstInput = inputs.eq(0);

var secondInput = inputs.eq(1);

var addButton = $('#calculator #add');
var subtractButton = $('#calculator #subtract');

var result = $('#result');

addButton.on("click", addition);
subtractButton.on("click", subtraction);