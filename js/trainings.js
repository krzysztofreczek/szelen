'use strict';

var inputTrainingDate

function pageAddTrainingInit() {
    loadCookiesEvents()
    analyzeData()
    computeAwards()

    var elements = M.Datepicker.init(document.querySelectorAll('.datepicker'), {
        format: 'ddd mmm dd yyyy'
    });
    inputTrainingDate = elements[0]

    var today = new Date()
    inputTrainingDate.setDate(today)
    inputTrainingDate.el.value = today.toDateString()

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
    var date = inputTrainingDate.date

    if (!date) {
        inputTrainingDate.el.classList.add('invalid')
        return
    }

    var today = getToday()
    if (today < date) {
        inputTrainingDate.el.classList.add('invalid')
        return
    }

    var timestamp = date.getFullYear() + '/' + (date.getMonth() + 1) + "/" + date.getDate()
    persistEvent(user, timestamp, function() {
        pageGifEnable()
    })

    switchToPage(pageRandomGif)
}
