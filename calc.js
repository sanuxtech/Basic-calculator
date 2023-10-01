let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("result").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("result").value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("result").value = displayValue;
  } catch (error) {
    alert("Invalid Input");
    clearDisplay();
  }
}
