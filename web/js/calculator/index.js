function inputValue(input) {
	return input.val().trim();
}

function additionAction() {
	var firstInputValue = inputValue(firstInput);
	var secondInputValue = inputValue(secondInput);
	
	var validation = new Validation();
	var isValid = validation
		.validateInput(firstInputValue, "Pierwsze Pole")
		.validateInput(secondInputValue, "Drugie Pole")
		.isValid()
	;

	if (isValid === true) {
		var addition = new Addition(firstInputValue, secondInputValue);
		addition
			.createTable(4, addition.maxNumberLength()+2)
			.setNumber(addition.firstNumber, 1, addition.tableWidth - addition.firstNumberLength)
			.setNumber(addition.secondNumber, 2, addition.tableWidth - addition.secondNumberLength);
		setTimeout($.proxy(addition.setLine, addition), 750);
		setTimeout($.proxy(addition.setPlus, addition), 750);
		setTimeout($.proxy(addition.calculation, addition), 1250);
	}
}

var inputs = $('#calculator input');

var firstInput = inputs.eq(0);

var secondInput = inputs.eq(1);

var addButton = $('#calculator #add');

var result = $('#result');

addButton.on("click", additionAction);