function Calculation(firstInputValue, secondInputValue) 
{
	this.firstNumber = firstInputValue;
	
	this.firstNumberLength = this.firstNumber.length;
	
	this.secondNumber = secondInputValue;
	
	this.secondNumberLength = this.secondNumber.length;
	
	this.tableRows;
	
	this.tableWidth;
	
	this.tableHeight;
	
	this.timeout = 0;
	
	this.multiplicationTableWidth = function(margin) 
	{
		var res = new Array();
		
		for (i=0; i<this.secondNumberLength; i++) {
			res[i] = parseInt(this.secondNumber.charAt(this.secondNumberLength-1-i)) * parseInt(this.firstNumber);
			res[i] = res[i].toString().length + i + margin;
		}
		return Math.max.apply(Math, res);
	}
	
	this.divisionTableHeight = function() 
	{
		var res = parseInt(this.firstNumber) / parseInt(this.secondNumber);
		res = res.toString().length*2+2;
		
		return res;
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
	
	this.setNumber = function(number, x, y, length)
	{
		var i = 0;
		this.tableRows.eq(y).children('td').each(function(index) {
			if (index >= x && index <= x + length) {
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
		this.timeout = timeout;
		
		setTimeout($.proxy(function(){
			var i = 0;
			this.tableRows.eq(y).children('td').each(function(index) {
				
				if (index >= x && index < (x + length)) {
					$( this ).addClass("border_bottom");
					i++;
				}
			});
			
			var margin = parseInt(result.css("margin-bottom")) -1;
			result.css("margin-bottom", margin+"px")
			
		}, this), this.timeout);	
			
		return this;
	}
	
	this.setSign = function(sign, tr, td, timeout) 
	{
		this.timeout = timeout;
		
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).children('td').eq(td).html(sign).hide().fadeIn("fast");
			
		}, this), this.timeout);
		
		return this;
	}
	
	this.addition = function(x, y, length, amount, draft, timeout, interval) 
	{
		this.timeout = timeout;
	
		var resTens = 0;
		
		for(i=0; i<length; i++) {
			
			var timeout = this.timeout;
			
			(function(i, tableRows, timeout) {
				setTimeout(function(){
					var tdIndex = x - i;
					var td = new Array();
					var res = 0;
					for(j=0; j<amount; j++) {
						td[j] = tableRows.eq(j+y).children('td').eq(tdIndex).text();
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
		
						tableRows.eq(y+amount).children('td').eq(tdIndex).text(resUnits).hide().fadeIn("fast");

						if( tdIndex == x + 1 - length) {
								tableRows.eq(y+amount).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
						} else if (draft) {
							tableRows.eq(y-1).children('td').eq(tdIndex-1).text(resTens).hide().fadeIn("fast");
						}

					} else {
						tableRows.eq(y+amount).children('td').eq(tdIndex).text(res).hide().fadeIn("fast");
						resTens = 0;
					}
		
				}, timeout);
			})(i, this.tableRows, timeout);
			this.timeout += interval;
		}
		this.timeout -= interval;
		
		return this;
	}
	
	this.subtraction = function(x, y, length, draft, timeout, interval) 
	{
		this.timeout = timeout;
		
		var tens = 0;
		
		for(i=0; i<length; i++) {
			
			var timeout = this.timeout;
			
			(function(i, tableRows, timeout) {
				setTimeout(function(){
					var tdIndex = x - i;
					var td = new Array();
					for(j=0; j<3; j++) {
						td[j] = tableRows.eq(j+y).children('td').eq(tdIndex).text();
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
							var tensDraft = tableRows.eq(y-1).children('td').eq(tdIndex-1).text();
							
							if (tensDraft == '') {
									while (tableRows.eq(y).children('td').eq(tdIndex-1-k).text() == 0) {
										tableRows.eq(y-1).children('td').eq(tdIndex-1-k).text(9).hide().fadeIn("fast");
										k++
									}
								
								tableRows.eq(y-1).children('td').eq(tdIndex-1-k).text(tens).hide().fadeIn("fast");
							}
						}

					} else {
						tens = 0;
					}
					tableRows.eq(y+2).children('td').eq(tdIndex).text(res).hide().fadeIn("fast");
		
				}, timeout);
			})(i, this.tableRows, timeout);
			this.timeout += interval;	
		}
		this.timeout -= interval;
		
		return this;
	}
	
	this.multiplication = function(timeout, interval)
	{
		this.timeout = timeout;	
		
		for (i=0; i<this.secondNumberLength; i++) {
			var res = parseInt(this.secondNumber.charAt(this.secondNumberLength-1-i)) * parseInt(this.firstNumber);
			res = res.toString();
			resLength = res.length;
			for (j=0; j<resLength; j++) {

				var timeout = this.timeout;
				
				var resUnit = res.charAt(resLength-1-j);
				var td = this.tableRows.eq(2+i).children('td').eq(this.tableWidth-1-j-i);
				
				(function(td, resUnit, timeout) {
					setTimeout(function(){
						td.text(resUnit).hide().fadeIn("fast");
					}, timeout);
				})(td, resUnit, timeout);
				this.timeout += interval;
			}
		}
		this.timeout -= interval;
		
		this
			.setLine(0, this.tableHeight-2, this.tableWidth, this.timeout+interval) 
			.setSign("+", this.tableHeight-2, 0, this.timeout)
			.addition(2, this.tableWidth - 1, this.tableWidth-2, this.secondNumberLength, false, this.timeout+interval, interval);
		
		return this;
	}
	
	this.showSuccess = function(tr, timeout, interval) 
	{
		this.timeout = timeout;
		
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).addClass("success");
		}, this), this.timeout);
		this.timeout += interval;
		setTimeout($.proxy(function(){
			this.tableRows.eq(tr).removeClass("success");
		}, this), this.timeout);			
	}
}