'use strict';

const awardsSequenceSize = 16
const awardsSequence = {
    "Basia": [15, 6, 14, 7, 13, 0, 5, 3, 11, 9, 10, 12, 2, 1, 8, 4],
    "Ania": [1, 2, 15, 14, 6, 11, 0, 10, 4, 7, 13, 8, 5, 12, 3, 9],
    "Krzysio": [7, 9, 12, 13, 14, 0, 15, 8, 10, 11, 3, 2, 6, 1, 5, 4],
    "Majkel": [15, 14, 13, 9, 8, 1, 2, 7, 10, 3, 5, 6, 0, 4, 11, 12],
}

var awards = {}

function pageAwardsInit() {
    var awardsPage = document.getElementById('page-awards')
    awardsPage.innerHTML = '';

    var i = awards[user].score

    var header = document.createElement('h3');
    header.innerHTML = 'Masz ' + i + ' z 16 nagród!'

    var aDivWrapper = document.createElement('div');
    aDivWrapper.className = 'col s12 center-align';
    aDivWrapper.appendChild(header);

    awardsPage.appendChild(aDivWrapper);

    var userAwards = awardsSequence[user]
    for (var a of userAwards) {
        if (i <= 0) {
            return
        }

        const idx = a

        var aDiv = document.createElement('div');
        aDiv.className = 'img-circular';
        aDiv.style.backgroundImage = 'url(images/' + a + '.gif)'
        aDiv.addEventListener('click', function () {
            gifIndex = idx
            switchToPage(pageGif)
        })

        var aDivWrapper = document.createElement('div');
        aDivWrapper.className = 'col l4 m4 s12';
        aDivWrapper.appendChild(aDiv);

        awardsPage.appendChild(aDivWrapper);

        i--
    }
}

function getRandomUserGif() {
    if (awards[user].score == 0) {
        return awardsSequenceSize
    }
    var randomIndex = Math.floor(Math.random() * awards[user].score)
    return awardsSequence[user][randomIndex]
}

function computeAwards() {
    for (var u of users) {
        awards[u] = {
            score: 0
        }
    }

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

        if (awards[e.user].score >= awardsSequenceSize) {
            return
        }

        if (eWeek[e.user] > challengeWeeklyGoal) {
            awards[e.user].score++
        }
    }
}
