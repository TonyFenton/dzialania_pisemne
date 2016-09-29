function Calculation(firstInputValue, secondInputValue) 
{
	this.firstNumber = firstInputValue;
	
	this.firstNumberLength = this.firstNumber.length;
	
	this.secondNumber = secondInputValue;
	
	this.secondNumberLength = this.secondNumber.length;
	
	this.tableRows;
	
	this.tableWidth;
	
	this.tableHeight;
	
	this.multiplicationTableWidth = function(margin = 0) 
	{
		var res = new Array();
		
		for (i=0; i<this.secondNumberLength; i++) {
			res[i] = parseInt(this.secondNumber.charAt(this.secondNumberLength-1-i)) * parseInt(this.firstNumber);
			res[i] = res[i].toString().length + i + margin;
		}
		return Math.max.apply(Math, res);
	}
	
	this.maxNumberLength = function() 
	{
		return Math.max(this.firstNumberLength, this.secondNumberLength);
	}
	
	this.createTable = function(row, col, draft)
	{
		table = document.createElement("table");
		
		for(i=0; i<row; i++) {
			
			var tr = document.createElement("tr");
			
			if (draft !== false && draft == i) {
				tr.className = "draft";
			}
			
			for(j=0; j<col ; j++) {
				
				var td = document.createElement("td");
				
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
		result.css("margin-bottom", "0px")
		result.html(table);
		this.tableRows = $('table tr');
		this.tableWidth = col;
		this.tableHeight = row;
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
			
			var margin = parseInt(result.css("margin-bottom")) -1;
			result.css("margin-bottom", margin+"px")
			
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
	
	this.addition = function(x, y, length, amount, draft, timeout, interval) 
	{
		var resTens = 0;
		
		for(i=0; i<length; i++) {
			(function(i, tableRows) {
				setTimeout($.proxy(function(){
					var tdIndex = y - i;
					var td = new Array();
					var res = 0;
					for(j=0; j<amount; j++) {
						td[j] = tableRows.eq(j+x).children('td').eq(tdIndex).text();
						if(td[j] == '') {
							td[j] = 0;
						}
						td[j] = parseInt(td[j]);
						res += td[j];
					}
					res += parseInt(resTens);
					
					if(res >= 10) {
						res = res.toString();
						resUnits = res.charAt(1);
						resTens = res.charAt(0);
		
						tableRows.eq(x+amount).children('td').eq(tdIndex).text(resUnits).hide().fadeIn("fast");

						if( tdIndex == y + 1 - length) {
								tableRows.eq(x+amount).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
						} else if (draft) {
							tableRows.eq(x-1).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
						}

					} else {
						tableRows.eq(x+amount).children('td').eq(tdIndex).text(res).hide().fadeIn("fast");
						resTens = 0;
					}
		
				}, this), i * interval + timeout);
			})(i, this.tableRows);
		}
		
		return this;
	}
	
	this.subtraction = function(x, y, length, draft, timeout, interval) 
	{
		var tens = 0;
		
		for(i=0; i<length; i++) {
			(function(i, tableRows) {
				setTimeout($.proxy(function(){
					var tdIndex = y - i;
					var td = new Array();
					for(j=0; j<3; j++) {
						td[j] = tableRows.eq(j+x).children('td').eq(tdIndex).text();
						if(td[j] == '') {
							td[j] = 0;
						}
						td[j] = parseInt(td[j]);
					}
					var res = td[0] - td[1] + parseInt(tens);
					if(res < 0) {
						res += 10;
						res = res.toString();
						tens = -1;

						if (draft) {
							var k = 0;
							var tensDraft = tableRows.eq(x-1).children('td').eq(tdIndex-1).text();
							
							if (tensDraft == '') {
									while (tableRows.eq(x).children('td').eq(tdIndex-1-k).text() == 0) {
										tableRows.eq(x-1).children('td').eq(tdIndex-1-k).text(9).hide().fadeIn("fast");
										k++
									}
								
								tableRows.eq(x-1).children('td').eq(tdIndex-1-k).text(tens).hide().fadeIn("fast");
							}
						}

					} else {
						tens = 0;
					}
					tableRows.eq(x+2).children('td').eq(tdIndex).text(res).hide().fadeIn("fast");
		
				}, this), i * interval + timeout);
			})(i, this.tableRows);
		}
		
		return this;
	}
	
	this.multiplication = function(timeout, interval)
	{
		var counter = -1;
		
		for (i=0; i<this.secondNumberLength; i++) {
			var res = parseInt(this.secondNumber.charAt(this.secondNumberLength-1-i)) * parseInt(this.firstNumber);
			res = res.toString();
			resLength = res.length;
			for (j=0; j<resLength; j++) {
				
				counter++;
				
				var resUnit = res.charAt(resLength-1-j);
				var td = this.tableRows.eq(2+i).children('td').eq(this.tableWidth-1-j-i);
				
				(function(td, resUnit, counter) {
					setTimeout(function(){
						td.text(resUnit).hide().fadeIn("fast");
					}, counter * interval + timeout);
				})(td, resUnit, counter);
			}
		}
		
		this
			.setLine(this.tableHeight-2, 0, this.tableWidth, interval*counter+timeout+interval) 
			.setSign("+", this.tableHeight-2, 0, interval*counter+timeout+interval)
			.addition(2, this.tableWidth - 1, this.tableWidth-2, this.secondNumberLength, false, interval*counter+timeout+interval*2, interval);
		
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