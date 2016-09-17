function Addition(firstInputValue, secondInputValue, tableWidth) 
{
	this.firstNumber = firstInputValue;
	
	this.firstNumberLength = this.firstNumber.length;
	
	this.secondNumber = secondInputValue;
	
	this.secondNumberLength = this.secondNumber.length;
	
	this.tableRows;
	
	this.tableWidth;
	
	this.maxNumberLength = function() 
	{
		return Math.max(this.firstNumberLength, this.secondNumberLength);
	}
	
	this.createTable = function(row, col)
	{
		table = document.createElement("table");
		
		for(i=0; i<row; i++) {
			
			var tr = document.createElement("tr");
			
			for(j=0; j<col ; j++) {
				
				var td = document.createElement("td");
				
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
		result.html(table);
		this.tableRows = $('table tr');
		this.tableWidth = col;
		return this;
	}
	
	this.setNumber = function(number, x, y)
	{
		var i = 0;
		this.tableRows.eq(x).children('td').each(function(index) {
			
			if (index >= y) {
				$( this ).text(number.charAt(i));
				$( this ).hide();
				$( this ).fadeIn("fast");
				i++;
			}
		});
		
		return this;
	}
	
	this.setLine = function() 
	{
		var tr3 = this.tableRows.eq(3);
		tr3.addClass("border_top");
		tr3.hide();
		tr3.fadeIn("fast");
	}
	
	this.setPlus = function() 
	{
		var plusTd = this.tableRows.eq(2).children('td').eq(0);
		plusTd.text('+').hide().fadeIn("fast");
	}
	
	this.calculation = function() 
	{
		var tableWidth = this.tableWidth;
		var tableRows = this.tableRows;
	
		for(i=0; i<(this.maxNumberLength()) ; i++) {
			(function(i) {
				setTimeout(function() {
					var tdIndex = tableWidth -1 - i;
					var td = new Array();
					for(j=0; j<4; j++) {
						td[j] = tableRows.eq(j).children('td').eq(tdIndex);
						
						if(j != 3) {
							td[j] = td[j].text();
							if(td[j] == '') {
								td[j] = 0;
							}
							td[j] = parseInt(td[j]);
						}
					}
					var res = td[0] + td[1] + td[2];
					if(res >= 10) {
						res = res.toString();
						resUnits = res.charAt(1);
						resTens = res.charAt(0);
						
						td[3].text(resUnits).hide().fadeIn("fast");;
						
						if(tdIndex == 2) {
							tableRows.eq(3).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");;
						} else {
							tableRows.eq(0).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");;
						}
					} else {
						td[3].text(res).hide().fadeIn("fast");
					}
					if(i == tableWidth-3) {
						setTimeout(function() {
							tableRows.eq(3).addClass("success");
						}, 750);
						setTimeout(function() {
							tableRows.eq(3).removeClass("success");
						}, 1250);						
					}
				}, i * 750);
			})(i);
		}
	}
}