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

    this.multiplicationTableWidth = function (margin)
    {
        var res = new Array();

        for (i = 0; i < this.secondNumberLength; i++) {
            res[i] = parseInt(this.secondNumber.charAt(this.secondNumberLength - 1 - i)) * parseInt(this.firstNumber);
            res[i] = res[i].toString().length + i + margin;
        }
        return Math.max.apply(Math, res);
    };

    this.divisionTableHeight = function ()
    {
        var res = parseInt(this.firstNumber) / parseInt(this.secondNumber);
        res = Math.floor(res);
        res = res.toString().replace(/0/g, '');
        res = res.length * 2 + 2;
        return res;
    }

    this.maxNumberLength = function ()
    {
        return Math.max(this.firstNumberLength, this.secondNumberLength);
    }

    this.createTable = function (row, col, draft)
    {
        table = document.createElement("table");

        for (i = 0; i < row; i++) {

            var tr = document.createElement("tr");

            if (draft !== false && draft == i) {
                tr.className = "draft";
            }

            for (j = 0; j < col; j++) {

                var td = document.createElement("td");

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        result.css("margin-top", "0px")
        result.css("margin-bottom", "0px")
        result.html(table);
        this.tableRows = $('table tr');
        this.tableWidth = col;
        this.tableHeight = row;
        return this;
    }

    this.setNumber = function (number, x, y, length, timeout)
    {
        this.timeout = timeout;

        setTimeout($.proxy(function () {
            var i = 0;
            this.tableRows.eq(y).children('td').each(function (index) {
                if (index >= x && index < x + length) {
                    $(this).text(number.charAt(i));
                    $(this);
                    $(this);
                    i++;
                }
            });
        }, this), this.timeout);

        return this;
    }

    this.setLine = function (x, y, length, timeout, positionMargin)
    {
        this.timeout = timeout;

        setTimeout($.proxy(function () {
            var i = 0;
            this.tableRows.eq(y).children('td').each(function (index) {

                if (index >= x && index < (x + length)) {
                    $(this).addClass("border_bottom");
                    i++;
                }
            });

            var margin = parseInt(result.css("margin-" + positionMargin)) - 1;
            result.css("margin-" + positionMargin, margin + "px")

        }, this), this.timeout);

        return this;
    }

    this.setSign = function (sign, tr, td, timeout)
    {
        this.timeout = timeout;

        setTimeout($.proxy(function () {
            this.tableRows.eq(tr).children('td').eq(td).html(sign);

        }, this), this.timeout);

        return this;
    }

    this.addition = function (x, y, length, amount, draft, timeout, interval)
    {
        this.timeout = timeout;

        var resTens = 0;

        for (i = 0; i < length; i++) {

            var timeout = this.timeout;

            (function (i, tableRows, timeout) {
                setTimeout(function () {
                    var tdIndex = x - i;
                    var td = new Array();
                    var res = 0;
                    for (j = 0; j < amount; j++) {
                        td[j] = tableRows.eq(j + y).children('td').eq(tdIndex).text();
                        if (td[j] == '') {
                            td[j] = 0;
                        }
                        td[j] = parseInt(td[j]);
                        res += td[j];
                    }
                    res += parseInt(resTens);

                    if (res >= 10) {
                        res = res.toString();
                        resUnits = res.charAt(1);
                        resTens = res.charAt(0);

                        tableRows.eq(y + amount).children('td').eq(tdIndex).text(resUnits);

                        if (tdIndex == x + 1 - length) {
                            tableRows.eq(y + amount).children('td').eq(tdIndex - 1).text(resTens);
                        } else if (draft) {
                            tableRows.eq(y - 1).children('td').eq(tdIndex - 1).text(resTens);
                        }

                    } else {
                        tableRows.eq(y + amount).children('td').eq(tdIndex).text(res);
                        resTens = 0;
                    }

                }, timeout);
            })(i, this.tableRows, timeout);
            this.timeout += interval;
        }
        this.timeout -= interval;

        return this;
    }

    this.subtraction = function (x, y, length, draft, timeout, interval)
    {
        this.timeout = timeout;

        var tens = 0;

        for (var i = 0; i < length; i++) {

            var timeout = this.timeout;

            (function (i, tableRows, timeout) {
                setTimeout(function () {
                    var tdIndex = x - i;
                    var td = new Array();
                    for (j = 0; j < 3; j++) {
                        td[j] = tableRows.eq(j + y).children('td').eq(tdIndex).text();
                        if (td[j] == '') {
                            td[j] = 0;
                        }
                        td[j] = parseInt(td[j]);
                    }
                    var res = td[0] - td[1] + parseInt(tens);
                    if (res < 0) {
                        res += 10;
                        res = res.toString();
                        tens = -1;

                        if (draft) {
                            var k = 0;
                            var tensDraft = tableRows.eq(y - 1).children('td').eq(tdIndex - 1).text();

                            if (tensDraft == '') {
                                while (tableRows.eq(y).children('td').eq(tdIndex - 1 - k).text() == 0) {
                                    tableRows.eq(y - 1).children('td').eq(tdIndex - 1 - k).text(9);
                                    k++
                                }

                                tableRows.eq(y - 1).children('td').eq(tdIndex - 1 - k).text(tens);
                            }
                        }

                    } else {
                        tens = 0;
                    }
                    tableRows.eq(y + 2).children('td').eq(tdIndex).text(res);

                }, timeout);
            })(i, this.tableRows, timeout);
            this.timeout += interval;
        }
        this.timeout -= interval;
        return this;
    }

    this.multiplication = function (timeout, interval)
    {
        this.timeout = timeout;

        for (i = 0; i < this.secondNumberLength; i++) {
            var res = parseInt(this.secondNumber.charAt(this.secondNumberLength - 1 - i)) * parseInt(this.firstNumber);
            res = res.toString();
            resLength = res.length;
            for (j = 0; j < resLength; j++) {

                var timeout = this.timeout;

                var resUnit = res.charAt(resLength - 1 - j);
                var td = this.tableRows.eq(2 + i).children('td').eq(this.tableWidth - 1 - j - i);

                (function (td, resUnit, timeout) {
                    setTimeout(function () {
                        td.text(resUnit);
                    }, timeout);
                })(td, resUnit, timeout);
                this.timeout += interval;
            }
        }
        this.timeout -= interval;

        this
                .setLine(0, this.tableHeight - 2, this.tableWidth, this.timeout + interval, "bottom")
                .setSign("+", this.tableHeight - 2, 0, this.timeout)
                .addition(this.tableWidth - 1, 2, this.tableWidth - 2, this.secondNumberLength, false, this.timeout + interval, interval);

        return this;
    }

    this.division = function (timeout, interval)
    {
        this.timeout = timeout;
        var tableRows = this.tableRows;

        var divisor = "";
        var j = 0;

        var secondNumberInt = parseInt(this.secondNumber);

        for (i = 0; i < this.firstNumberLength; i++) {

            divisor += this.firstNumber.charAt(i);
            var res = parseInt(divisor) / secondNumberInt;

            if (res >= 1) {
                res = Math.floor(res);

                var timeout = this.timeout;

                (function (i, res, tableRows, timeout) {
                    setTimeout(function () {
                        tableRows.eq(0).children('td').eq(i + 1).text(res);
                    }, timeout);
                })(i, res, tableRows, timeout);

                var mulRes = res * secondNumberInt;
                mulRes = mulRes.toString();
                var mulResLength = mulRes.length;

                this.timeout += interval;
                timeout = this.timeout;

                (function (j, i, mulResLength, mulRes, tableRows, timeout) {
                    setTimeout(function () {
                        for (k = 0; k < mulResLength; k++) {
                            var mulResUnit = mulRes.charAt(k);
                            tableRows.eq(2 + j * 2).children('td').eq(i - mulResLength + 2 + k).text(mulResUnit);
                        }
                    }, timeout);
                })(j, i, mulResLength, mulRes, tableRows, timeout);

                var divisorLength = divisor.toString().length;
                this
                        .setSign(
                                "&#8722;",
                                2 + j * 2,
                                i - divisorLength + 2 - 1,
                                this.timeout + interval
                                )
                        .setLine(
                                i - divisorLength + 2,
                                2 + j * 2,
                                divisorLength,
                                this.timeout,
                                "bottom"
                                )
                        .subtraction(
                                1 + i,
                                1 + j * 2,
                                divisorLength,
                                false,
                                this.timeout + interval,
                                interval
                                );

                divisor = divisor % secondNumberInt;

                j++;

            } else if (j > 0) {
                timeout = this.timeout;

                (function (i, tableRows, timeout) {
                    setTimeout(function () {
                        tableRows.eq(0).children('td').eq(i + 1).text(0);
                    }, timeout);
                })(i, tableRows, timeout);
            }

            if (j > 0) {
                if (i < this.firstNumberLength - 1) {
                    var movedNumber = this.firstNumber.charAt(i + 1);

                    this.timeout += interval;
                    timeout = this.timeout;

                    (function (movedNumber, j, i, tableRows, timeout) {
                        setTimeout(function () {
                            tableRows.eq(2 + (j - 1) * 2 + 1).children('td').eq(i + 2).text(movedNumber);

                        }, timeout);
                    })(movedNumber, j, i, tableRows, timeout);
                }
                this.timeout += interval;
            }
        }
        this.timeout -= interval;
        return this;
    }

    this.showSuccess = function (tr, timeout, interval)
    {
        this.timeout = timeout;

        setTimeout($.proxy(function () {
            this.tableRows.eq(tr).addClass("success");
        }, this), this.timeout);
        this.timeout += interval;
        setTimeout($.proxy(function () {
            this.tableRows.eq(tr).removeClass("success");
        }, this), this.timeout);

        return this;
    }
}