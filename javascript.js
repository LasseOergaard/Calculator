/* Variables */
let displayValueTop;
let displayValueButtom;
let currentOperator;

/* Elements  */
displayTop = document.querySelector(".calculator__display__top")
displayButtom = document.querySelector(".calculator__display__buttom")
displayHidden = document.querySelector(".calculator__display__hidden")

numberButtons = document.querySelectorAll(".calculator__buttons__left-buttom button")
numberButtons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.textContent == ".") {
      if (currentOperator == undefined) {
        if ((displayTop.textContent.split(".")).length > 1) {
          return;
        } else { displayTop.textContent += button.textContent; }
      }

      else if (currentOperator !== undefined) {
        if (parseFloat(displayValueTop) % 1 === 0) {
          if ((displayTop.textContent.split(".")).length > 1) {
            return;
          } else { displayTop.textContent += button.textContent;
            displayHidden.textContent += button.textContent }
        }

        else {
          if (displayTop.textContent.split(".").length > 2) {
            return;
          } else {
            displayTop.textContent += button.textContent;
            displayHidden.textContent += button.textContent
          }
        }
      }
    }
    else { displayTop.textContent += button.textContent }

    if (currentOperator !== undefined && button.textContent !== ".") {displayHidden.textContent += button.textContent}
  })
});




operatorButtons = document.querySelectorAll(".calculator__buttons__right button")
operatorButtons.forEach(button => button.addEventListener("click", () => {
  if (button.textContent == "+") {
    if (typeof currentOperator == "undefined") {
      if (displayValueTop == "undefined") {
        return;
      }
      displayValueTop = displayTop.textContent;
      currentOperator = "add";
      displayTop.textContent += "+"
    } else {
      displayValueButtom = displayHidden.textContent
      if (displayValueButtom == "") {
        return;
      }
      displayHidden.textContent = ""
      let output = operate()
      displayTop.textContent = `${output}+`
      displayButtom.textContent = `${output}`
      displayValueTop = output;
      displayValueButtom = ""
      currentOperator = "add";
    }

  } else if (button.textContent == "-") {
    if (typeof currentOperator == "undefined") {
      displayValueTop = displayTop.textContent;
      currentOperator = "subtract";
      displayTop.textContent += "-"
    } else {
      displayValueButtom = displayHidden.textContent
      if (displayValueButtom == "") {
        return;
      }
      displayHidden.textContent = ""
      let output = operate()
      displayTop.textContent = `${output}-`
      displayButtom.textContent = `${output}`
      displayValueTop = output;
      displayValueButtom = ""
      currentOperator = "subtract";
    }
  }

  else if (button.textContent == "*") {
    if (typeof currentOperator == "undefined") {
      if (displayValueTop == "undefined") {
        return;
      }
      displayValueTop = displayTop.textContent;
      currentOperator = "multiply";
      displayTop.textContent += "*"
    } else {
      displayValueButtom = displayHidden.textContent
      if (displayValueButtom == "") {
        return;
      }
      displayHidden.textContent = ""
      let output = operate()
      displayTop.textContent = `${output}*`
      displayButtom.textContent = `${output}`
      displayValueTop = output;
      displayValueButtom = ""
      currentOperator = "multiply";
    }

  }

  else if (button.textContent == "/") {
    if (typeof currentOperator == "undefined") {
      if (displayValueTop == "undefined") {
        return;
      }
      displayValueTop = displayTop.textContent;
      currentOperator = "divide";
      displayTop.textContent += "/"
    } else {
      displayValueButtom = displayHidden.textContent
      if (displayValueButtom == "") {
        return;
      }
      displayHidden.textContent = ""
      let output = operate()
      displayTop.textContent = `${output}/`
      displayButtom.textContent = `${output}`
      displayValueTop = output;
      displayValueButtom = ""
      currentOperator = "divide";
    }
  }

  else if (button.textContent == "=") {
    displayValueButtom = displayHidden.textContent
    if (displayValueButtom == undefined || displayValueButtom == "") {
      return;
    } else {
      displayValueTop = displayTop.textContent;
      let output = operate()
      displayTop.textContent = `${output}`
      displayButtom.textContent = `${output}`
      currentOperator = undefined
      displayValueTop = output;
      displayValueButtom = ""
      displayHidden.textContent = ""
    }
  }
}));

clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click", () => {
  displayTop.textContent = "";
  displayButtom.textContent = "";
  displayValueButtom = undefined
  displayValueTop = undefined
  currentOperator = undefined

})

function operate() {
  if (currentOperator == "add") {
    return (parseFloat(displayValueTop) + parseFloat(displayValueButtom))
  } else if (currentOperator == "subtract") {
    return (parseFloat(displayValueTop) - parseFloat(displayValueButtom))
  } else if (currentOperator == "multiply") {
    return (parseFloat(displayValueTop) * parseFloat(displayValueButtom))
  } else if (currentOperator == "divide") {
    return (parseFloat(displayValueTop) / parseFloat(displayValueButtom))
  }
}



