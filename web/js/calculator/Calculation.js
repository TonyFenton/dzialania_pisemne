function Calculation(firstInputValue, secondInputValue, tableWidth) 
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
	
	this.setLine = function(x, y, length, timeout) 
	{
		setTimeout($.proxy(function(){
			var i = 0;
			this.tableRows.eq(x).children('td').each(function(index) {
				
				if (index >= y && index < (y + length)) {
					$( this ).addClass("border_bottom");
					i++;
				}
			});
		}, this), timeout);	
			
		return this;
	}
	
	this.setSign = function(sign, tr, td, timeout) 
	{
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).children('td').eq(td).html(sign).hide().fadeIn("fast");
			
		}, this), timeout);
		
		return this;
	}
	
	this.addition = function(x, y, length, draft, timeout, interval) 
	{
		var tableRows = this.tableRows;
		var resTens = 0;
		
		for(i=0; i<length; i++) {
			(function(i) {
				setTimeout(function() {
					var tdIndex = y - i;
					var td = new Array();
					for(j=0; j<3; j++) {
						td[j] = tableRows.eq(j+x).children('td').eq(tdIndex).text();
						if(td[j] == '') {
							td[j] = 0;
						}
						td[j] = parseInt(td[j]);
					}
					
					var res = td[0] + td[1] + parseInt(resTens);
					if(res >= 10) {
						res = res.toString();
						resUnits = res.charAt(1);
						resTens = res.charAt(0);
		
						tableRows.eq(x+2).children('td').eq(tdIndex).text(resUnits).hide().fadeIn("fast");

						if (draft) {
							if(tdIndex == y + 1 - length) {
								tableRows.eq(x+2).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
							} else {
								tableRows.eq(x-1).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
							}
						}

					} else {
						tableRows.eq(x+2).children('td').eq(tdIndex).text(res).hide().fadeIn("fast");
						resTens = 0;
					}
		
				}, i * interval + timeout);
			})(i);
		}
		
		return this;
	}
	this.showSuccess = function(tr, timeout, interval) 
	{
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).addClass("success");
		}, this), timeout);
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).removeClass("success");
		}, this), timeout + interval);			
	}
}