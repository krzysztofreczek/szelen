'use strict';

var inputUser
var inputTrainingDate

function initialize() {
  initializeElements()

  user = cookies.get("user")
  
  if (userSet()) {
    switchToPage(pageAddTraining)
  } else {
    switchToPage(pageWelcome)
  }
}

function initializeElements() {
  var elements = M.FormSelect.init(document.querySelectorAll('select'), {});
  inputUser = elements[0]

  elements = M.Datepicker.init(document.querySelectorAll('.datepicker'), {});
  inputTrainingDate = elements[0]
}

function addTraining() {

}
