const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-btn");
const cashGiven = document.querySelector("#cash-given");
const cashGivenTab = document.querySelector("#cash-given-label")
const message = document.querySelector("#error");
const checkButton = document.querySelector("#check-btn");
const tableTab = document.querySelector("#notes-table")
const returnBalance = document.querySelector("#return");
const numberofNotes = document.querySelectorAll(".notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function nextHandler() {
    if (billAmount.value > 0) {
        nextButton.style.display="none";
        showCash();
        hideMessage();
      } else {
      showMessage("Amount should be greater than zero!");
    }
}

function clickHandler() {
    
    if(parseInt(cashGiven.value) < 0 || parseInt(billAmount.value) < 0 ){
        showMessage("Amount should be greater than zero!");
        hideTable();
    }
    else if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
        var amountToBeReturned = cashGiven.value - billAmount.value;
        returnBalance.innerText = "Rs. " + amountToBeReturned;
        calculateChange(amountToBeReturned);
        showTable();
        hideMessage();
    } else {
        showMessage("Do you wanna wash dishes?");
        hideTable();
    }
}

 

function calculateChange(amount) {
    for (var i = 0; i < availableNotes.length; i++) {
      var Notes = Math.trunc(amount / availableNotes[i]);
      amount %= availableNotes[i];
      numberofNotes[i].innerText = Notes;
    }
}

function hideMessage() {
    message.style.display = "none";
}
  
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
  
function hideCash() {
    cashGivenTab.style.display = "none";
    cashGiven.style.display ="none";
    checkButton.style.display="none";
}
  
function showCash() {
    cashGivenTab.style.display = "block";
    cashGiven.style.display ="block";
    checkButton.style.display="block";
}
  
function hideTable() {
    tableTab.style.display = "none";
}
  
function showTable() {
    tableTab.style.display = "block";
 }


hideMessage();
hideCash();
hideTable();
nextButton.addEventListener("click", nextHandler);
checkButton.addEventListener("click", clickHandler);