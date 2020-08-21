'use strict';

var awards = {}

for (var u of users) {
    awards[u] = {
        score: 0
    }
}

function computeAwards() {
    var weeks = {}

    var weekStartDate = challengeStartMonday
    while (true) {
        var weekLastDayDate = getAddDays(weekStartDate, 6)
        var nextWeekStartDate = getAddDays(weekStartDate, 7)
        weeks[weekStartDate.toDateString()] = {
            start: weekStartDate,
            last: weekLastDayDate,
            nextWeek: nextWeekStartDate,
        }
        if (getToday() < nextWeekStartDate) {
            break
        }
        weekStartDate = nextWeekStartDate
    }

    for (var e of events) {
        var eMonday = getMonday(e.timestamp)
        var eWeek = weeks[eMonday.toDateString()]
        
        if (!eWeek[e.user]) {
            eWeek[e.user] = 0
        }
        eWeek[e.user]++

        if (eWeek[e.user] > challengeWeeklyGoal) {
            awards[e.user].score++
        }
    }
}
