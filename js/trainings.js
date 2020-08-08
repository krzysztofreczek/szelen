'use strict';

var inputTrainingDate

function pageAddTrainingInit() {
    var elements = M.Datepicker.init(document.querySelectorAll('.datepicker'), {});
    inputTrainingDate = elements[0]

    var h = document.getElementById('header-greeting')
    h.innerHTML = getRandomGreeting(user)
}

function addTraining() {

}
