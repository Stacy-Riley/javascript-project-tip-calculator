document.querySelector("#tip-form").onchange = function() {
	/*connections to html document */
	var bill = Number(document.getElementById("billTotal").value);
	var tip = document.getElementById("tipInput").value;
	document.getElementById("tipOutput").innerHTML = `${tip}%`;

	/* calculates results here */
	var tipValue = bill * (tip/100);
	var finalBill = bill + tipValue;
	console.log(finalBill)

	var tipAmount = document.querySelector("#tipAmount");
	var totalBillWithTip = 
		document.querySelector("#totalBillWithTip");

	/* displays the tip and total bill */
	tipAmount.value = tipValue.toFixed(2);
	totalBillWithTip.value = finalBill.toFixed(2);
}