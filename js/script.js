document.getElementById("totalTip").style.display = "none";
var message = document.querySelectorAll("p.message");
message[0].style.display = "none";
message[1].style.display = "none";
var bill = document.getElementById("billAmount");
var service = document.getElementById("serviceQuality");
var billCondition;
var serviceCondition;

bill.addEventListener("blur", checkBill, false);
service.addEventListener("blur", checkService, false);

function checkBill() {
	
	if (bill.value == "" || bill.value == 0) {
		message[0].style.display = "block";
		bill.style.border = "1px solid #B10202";
		billCondition = false;
		return;

	} else {
		message[0].style.display = "none";
		bill.style.border = "1px solid #b3b3b3";
		billCondition = true;
	}
}

function checkService() {
	
	if (service.value == 0) {
		message[1].style.display = "block";
		service.style.border = "1px solid #B10202";
		serviceCondition = false;
		return;
		
	} else {
		message[1].style.display = "none";
		service.style.border = "1px solid #b3b3b3"
		serviceCondition = true;
	}
}

calculate.addEventListener("click", function() {

	if(billCondition & serviceCondition) {

	var peopleNum = document.getElementById("peopleNum").value;
	var each = document.getElementById("each");

	if (peopleNum == "" || peopleNum <= 1) {
	 	peopleNum = 1;
	 	each.style.display = "none";
	 	
	} else {
		each.style.display = "block";
	}

	var total = (bill.value * service.value) / peopleNum;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

	} else {
		checkBill();
		checkService();
	}

}, false);