function inputValue(input) {
	return input.val().trim();
}
function timeoutRange() {
	var range = $('#range input')
	var max = range.attr("max");
	var rangeVal = range.val();
	
	interval = max - rangeVal;
	
	if (max == rangeVal) {
		rangeVal = "Natychmiast";
	} else {
		rangeVal = Math.ceil(rangeVal / 10) 
	}
	
	$('#range label span').text(rangeVal);
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
			.setNumber(calculation.firstNumber, calculation.tableWidth - calculation.firstNumberLength, 1, calculation.firstNumberLength, calculation.timeout)
			.setNumber(calculation.secondNumber, calculation.tableWidth - calculation.secondNumberLength, 2, calculation.secondNumberLength, calculation.timeout+interval)
			.setSign("+", 2, 0, calculation.timeout+interval)
			.setLine(0, 2, calculation.tableWidth, calculation.timeout, "bottom")
			.addition(calculation.tableWidth - 1, 1, calculation.maxNumberLength(), 2, true, calculation.timeout+interval, interval)
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
			.setNumber(calculation.firstNumber, calculation.tableWidth - calculation.firstNumberLength, 1, calculation.firstNumberLength, calculation.timeout)
			.setNumber(calculation.secondNumber, calculation.tableWidth - calculation.secondNumberLength, 2, calculation.secondNumberLength, calculation.timeout+interval)
			.setSign("&#8722;", 2, 0, calculation.timeout+interval)
			.setLine(0, 2, calculation.tableWidth, calculation.timeout, "bottom")
			.subtraction(calculation.tableWidth - 1, 1, calculation.maxNumberLength(), true, calculation.timeout+interval, interval)
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
			.setNumber(calculation.firstNumber, calculation.tableWidth - calculation.firstNumberLength, 0, calculation.firstNumberLength, calculation.timeout)
			.setNumber(calculation.secondNumber, calculation.tableWidth - calculation.secondNumberLength, 1, calculation.secondNumberLength, calculation.timeout+interval)
			.setSign("&#215;", 1, calculation.tableWidth - calculation.maxNumberLength()-2, calculation.timeout+interval)
			.setLine(calculation.tableWidth - calculation.maxNumberLength()-2, 1, calculation.maxNumberLength()+2, calculation.timeout, "bottom")
			.multiplication(calculation.timeout+interval, interval)
			.showSuccess(calculation.tableHeight-1, calculation.timeout+interval/2, interval);
	}
}

function division() {
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
			.createTable(
				calculation.divisionTableHeight(),
				calculation.firstNumberLength + calculation.secondNumberLength + 2,
				false
			)
			.setNumber(
				calculation.firstNumber,
				1,
				1,
				calculation.firstNumberLength,
				calculation.timeout
			)
			.setSign(
				':',
				1,
				calculation.firstNumberLength+1,
				calculation.timeout + interval
			)
			.setLine(
				1, 
				0, 
				calculation.firstNumberLength,
				calculation.timeout,
				"top"
			)
			.setNumber(
				calculation.secondNumber,
				calculation.tableWidth - calculation.secondNumberLength,
				1,
				calculation.secondNumberLength,
				calculation.timeout+interval
			)
			.division(
				calculation.timeout+interval,
				interval
			)
			.showSuccess(
				0,
				calculation.timeout+interval/2,
				interval
			)
			.showSuccess(
				calculation.tableHeight-1,
				calculation.timeout-interval,
				interval
			);			
	}
}

var interval = 0;

var inputs = $('#calculator input');

var firstInput = inputs.eq(0);

var secondInput = inputs.eq(1);

var result = $('#result');

timeoutRange();
$('#range input').on('change', timeoutRange);

$('#calculator #add').on("click", addition);
$('#calculator #subtract').on("click", subtraction);
$('#calculator #multiply').on("click", multiplication);
$('#calculator #divide').on("click", division);