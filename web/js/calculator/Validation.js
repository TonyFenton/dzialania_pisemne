function Validation() 
{
	this.validateErrors = new Array();
	
	this.validateInput = function(input, field) 
	{	
		var patt = /^[0-9]+$/;
		var isValid = patt.test(input);
		
		if (input === '') {
			this.validateErrors.push(field + ' nie powinno być puste');
		} else if (isValid === false) {
			this.validateErrors.push(field + ' powinno być liczbą całkowitą');
		} else if (input.length > 30) {
			this.validateErrors.push(field + ' nie powinno mieć więcej niż 30 znaków');
		}
		
		return this;
	}
	
	this.isValid = function() 
	{
		if (this.validateErrors.length === 0) {
			return true;
		} else {
			ul = document.createElement("ul");
			this.validateErrors.forEach(function(entry) {
				var listItem = document.createElement("li");
				var message = document.createTextNode(entry);
				listItem.appendChild(message);
				ul.appendChild(listItem);
			});
			result.html(ul);
			return false;
		}
	}
}