'use strict';

var inputTrainingDate

function pageAddTrainingInit() {
    var elements = M.Datepicker.init(document.querySelectorAll('.datepicker'), {});
    inputTrainingDate = elements[0]

    var h = document.getElementById('header-greeting')
    h.innerHTML = getRandomGreeting(user)

    var userTotal = thisWeekStatistics[user].total
    var userTotalPercentage = userTotal * 100 / challengeWeeklyGoal

    var p = document.getElementById('progress-bar')
    p.style.width = userTotalPercentage + '%'
    
    var l = document.getElementById('progress-bar-label')
    l.innerHTML = userTotal + '/' + challengeWeeklyGoal
}

function addTraining() {
    alert("To jeszcze nie działa:)");
}
