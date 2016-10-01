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
			.createTable(4, calculation.maxNumberLength()+2, 0)
			.setNumber(calculation.firstNumber, 1, calculation.tableWidth - calculation.firstNumberLength)
			.setNumber(calculation.secondNumber, 2, calculation.tableWidth - calculation.secondNumberLength)
			.setSign("+", 2, 0, calculation.timeout+interval)
			.setLine(2, 0, calculation.tableWidth, calculation.timeout)
			.addition(1, calculation.tableWidth - 1, calculation.maxNumberLength(), 2, true, calculation.timeout+interval, interval)
			.showSuccess(3, calculation.timeout+interval/2, interval);
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
		var calculation = new Calculation(firstInputValue, secondInputValue);
		calculation
			.createTable(4, calculation.maxNumberLength()+2, 0)
			.setNumber(calculation.firstNumber, 1, calculation.tableWidth - calculation.firstNumberLength)
			.setNumber(calculation.secondNumber, 2, calculation.tableWidth - calculation.secondNumberLength)
			.setSign("&#8722;", 2, 0, calculation.timeout+interval)
			.setLine(2, 0, calculation.tableWidth, calculation.timeout)
			.subtraction(1, calculation.tableWidth - 1, calculation.maxNumberLength(), true, calculation.timeout+interval, interval)
			.showSuccess(3, calculation.timeout+interval/2, interval);
	}
}

function multiplication() {
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
			.createTable(2+calculation.secondNumberLength+1, calculation.multiplicationTableWidth(2), false)
			.setNumber(calculation.firstNumber, 0, calculation.tableWidth - calculation.firstNumberLength)
			.setNumber(calculation.secondNumber, 1, calculation.tableWidth - calculation.secondNumberLength)
			.setSign("&#215;", 1, calculation.tableWidth - calculation.maxNumberLength()-2, calculation.timeout+interval)
			.setLine(1, calculation.tableWidth - calculation.maxNumberLength()-2, calculation.maxNumberLength()+2, calculation.timeout)
			.multiplication(calculation.timeout+interval, interval)
			.showSuccess(calculation.tableHeight-1, calculation.timeout+interval/2, interval);
	}
}

var interval = 750;

var inputs = $('#calculator input');

var firstInput = inputs.eq(0);

var secondInput = inputs.eq(1);

var result = $('#result');

$('#calculator #add').on("click", addition);
$('#calculator #subtract').on("click", subtraction);
$('#calculator #multiply').on("click", multiplication);