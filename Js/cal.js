let res = document.getElementById("result");

function InputParser(input) {
    if (input.key === "0") {
      res.value += "0";
    } else if (input.key === "1") {
      res.value += "1";
    } else if (input.key === "2") {
      res.value += "2";
    } else if (input.key === "3") {
      res.value += "3";
    } else if (input.key === "4") {
      res.value += "4";
    } else if (input.key === "5") {
      res.value += "5";
    } else if (input.key === "6") {
      res.value += "6";
    } else if (input.key === "7") {
      res.value += "7";
    } else if (input.key === "7") {
      res.value += "7";
    } else if (input.key === "8") {
      res.value += "8";
    } else if (input.key === "9") {
      res.value += "9";
    } else if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }
  
    if (e.key === "=") {
      calculate(result.value);
    }
  }

function calculate(value) {
  const result = eval(value || null);
  res.value = result;
}


function record(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}


