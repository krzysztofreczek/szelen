'use strict';

var inputTrainingDate

function pageAddTrainingInit() {
    loadCookiesEvents()
    analyzeData()

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
    var dateString = inputTrainingDate.el.value

    if (!dateString) {
        inputTrainingDate.el.classList.add('invalid')
        return
    }

    var date = new Date(dateString)
    var timestamp = date.getFullYear() + '/' + (date.getMonth() + 1) + "/" + date.getDate()
    persistEvent(user, timestamp, function() {
        switchToPage(pageAddTraining)
    })

    confetti.start(2 * 1000)

    var button = document.getElementById('btn-add')
    button.style.display = 'none'
}
