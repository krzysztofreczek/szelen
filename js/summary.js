'use strict';

var colors = {
    'Default': 'rgb(201, 203, 207)',
    'Krzysio': 'rgb(75, 192, 192)',
    'Basia': 'rgb(54, 162, 235)',
    'Ania': 'rgb(255, 99, 132)',
    'Majkel': 'rgb(255, 205, 86)',
    'Special': 'rgb(255, 159, 64)',
}

const colorDefault = colors['Default']
const colorSpecial = colors['Special']

function pageSummaryInit() {
    initCharts()
    initLabels()
    initTables()
}

function initCharts() {
    initWeekDoughnutChart('chart-my-week', user)
    initWeekAuxDoughnutCharts()
    initWeekAllChart()
    initAllChart()
    initTimeChart()
    initWeekDaysChart()
}

function initWeekAuxDoughnutCharts() {
    var i = 1
    for (var u of users) {
        if (u == user) {
            continue
        }
        var chartID = 'chart-' + i + '-week'
        initWeekDoughnutChart(chartID, u)
        i++
    }
}

function initWeekDoughnutChart(id, user) {
    var done = 0
    var todo = challengeWeeklyGoal
    var over = 0

    if (thisWeekStatistics[user]) {
        done = thisWeekStatistics[user].total
        todo -= done
    }

    if (todo < 0) {
        todo = 0
    }

    if (done > challengeWeeklyGoal) {
        over = done - challengeWeeklyGoal
        done = challengeWeeklyGoal
    }

    var bgColors = [
        colors[user],
        colorDefault,
        colorSpecial,
    ]

    var ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Zrobione', 'Pozostałe', 'Nadmiarowe'],
            datasets: [{
                data: [done, todo, over],
                backgroundColor: bgColors,
                hoverBackgroundColor: bgColors
            }]
        },
        options: {
            title: {
                display: true,
                text: user
            },
            legend: {
                display: false
            },
            cutoutPercentage: 70
        }
    });
}

function initWeekAllChart() {
    var labels = []
    var data = []
    var bgColors = []

    for (var u of users) {
        if (!thisWeekStatistics[u]) {
            continue
        }
        labels.push(u)
        data.push(thisWeekStatistics[u].total)
        bgColors.push(colors[u])
    }

    if (data.length == 0) {
        labels.push(' ')
        data.push(1)
        bgColors.push(colorDefault)
    }

    var ctx = document.getElementById('chart-all-week').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: bgColors,
                hoverBackgroundColor: bgColors
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Wszyscy w tym tygodniu'
            },
            legend: {
                display: false
            },
            cutoutPercentage: 70
        }
    });
}

function initAllChart() {
    var labels = []
    var data = []
    var bgColors = []

    for (var u of users) {
        if (!totalStatistics[u]) {
            continue
        }
        labels.push(u)
        data.push(totalStatistics[u].total)
        bgColors.push(colors[u])
    }

    if (data.length == 0) {
        labels.push(' ')
        data.push(1)
        bgColors.push(colorDefault)
    }

    var ctx = document.getElementById('chart-all').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: bgColors,
                hoverBackgroundColor: bgColors
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Wszyscy'
            },
            legend: {
                display: false
            },
            cutoutPercentage: 70
        }
    });
}

function initTimeChart() {
    var today = getToday()
    var threeWeeksAgo = new Date()
    threeWeeksAgo.setDate(today.getDate() - 22)

    var dataPoints = {}
    for (var e of events) {
        if (e.timestamp < threeWeeksAgo) {
            continue
        }

        if (!dataPoints[e.user]) {
            dataPoints[e.user] = []
        }

        var dataPoint = {
            x: e.timestamp,
            y: 1,
        }

        dataPoints[e.user].push(dataPoint)
    }

    var data = []
    for (var u of users) {
        var d = {
            type: 'stackedColumn',
            showInLegend: true,
            color: colors[u],
            name: u,
            dataPoints: dataPoints[u]
        }

        data.push(d)
    }

    var chart = new CanvasJS.Chart('chart-time', {
        animationEnabled: true,
        axisX: {
            interval: 3,
            intervalType: 'day',
            tickColor: colorDefault,
            lineColor: colorDefault,
            gridThickness: 0
        },
        axisY: {
            gridThickness: 0,
            tickThickness: 0,
            lineThickness: 0,
            labelFontColor: 'white'
        },
        data: data,
    })
    chart.render()
}

function initWeekDaysChart() {
    var userWeekdayStats = {}

    for (var e of events) {
        if (!userWeekdayStats[e.user]) {
            userWeekdayStats[e.user] = {}
        }

        var weekday = getWeekdayName(e.timestamp)
        if (!userWeekdayStats[e.user][weekday]) {
            userWeekdayStats[e.user][weekday] = 0
        }

        userWeekdayStats[e.user][weekday]++
    }

    var dataPoints = []

    var i = -1
    for (var u of users) {
        i++

        if (!userWeekdayStats[u]) {
            continue
        }

        var j = -1
        for (var wd of weekdayNames) {
            j++

            if (!userWeekdayStats[u][wd]) {
                continue
            }

            var value = userWeekdayStats[u][wd]

            var dp = {
                x: j,
                y: i,
                z: value,
                color: colors[u],
                user: u,
                day: wd
            }

            dataPoints.push(dp)
        }
    }

    var chart = new CanvasJS.Chart('chart-week-days', {
        animationEnabled: true,
        theme: 'light2',
        axisX: {
            minimum: -1,
            maximum: 7,
            gridThickness: 0,
            labelFontColor: 'black',
            labelFormatter: function (e) {
                if (!weekdayNames[e.value]) {
                    return ''
                }
                return weekdayNames[e.value]
            }
        },
        axisY: {
            minimum: -1,
            maximum: 4,
            gridThickness: 0,
            labelFontColor: 'black',
            labelFormatter: function (e) {
                if (!users[e.value]) {
                    return ''
                }
                return users[e.value]
            }
        },
        data: [{
            type: 'bubble',
            toolTipContent: 'Dzień: {day}<br/> Osoba: {user}<br/> Ilość: {z}',
            dataPoints: dataPoints
        }]
    });
    chart.render();
}

function initLabels() {
    var weeklyUserTotal = 0
    if (thisWeekStatistics[user]) {
        weeklyUserTotal = thisWeekStatistics[user].total
    }

    var userTotal = 0
    if (totalStatistics[user]) {
        userTotal = totalStatistics[user].total
    }

    document.getElementById('weekly-yours').innerHTML = weeklyUserTotal
    document.getElementById('weekly-total').innerHTML = thisWeekStatistics.total
    document.getElementById('weekly-leaders').innerHTML = thisWeekStatistics.leaders + ' [' + thisWeekStatistics.leaderTotal + ']'
    document.getElementById('all-yours').innerHTML = userTotal
    document.getElementById('all-total').innerHTML = totalStatistics.total
    document.getElementById('all-leaders').innerHTML = totalStatistics.leaders + ' [' + totalStatistics.leaderTotal + ']'
}

function initTables() {
    initWeekStatusesTable()
}

function initWeekStatusesTable() {
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
    }

    var table = document.getElementById('table-all-weeks')
    table.innerHTML = ''

    var i = 0
    for (var idx in weeks) {
        var w = weeks[idx]

        var wStatus = 'SUKCES!'
        var wClass = 'week-done'

        var losers = []
        for (var u of users) {
            if (!w[u] || w[u] < challengeWeeklyGoal) {
                losers.push(u)
            }
        }

        if (losers.length != 0) {
            wStatus = ''
            for (var l of losers) {
                if (wStatus != '') {
                    wStatus += ', '
                }
                wStatus += l
            }
            wStatus = 'PORAŻKA (' + wStatus + ') :('
            wClass = 'week-failed'
        }

        if (w.nextWeek > getToday()) {
            if (losers.length != 0) {
                wStatus = '...'
                wClass = 'week-pending'
            } else {
                setTimeout(function () {
                    confetti.start(5 * 1000)
                }, 1500)
            }
        }

        var rowPosition = weeks.length - i
        var row = table.insertRow(rowPosition)

        var idx = row.insertCell(0)
        idx.innerHTML = i + 1
        idx.classList.add('idx')

        row.insertCell(1).innerHTML = w.start.toLocaleDateString() + ' - ' + w.last.toLocaleDateString()

        var statusCell = row.insertCell(2)
        statusCell.innerHTML = wStatus
        statusCell.classList.add(wClass)

        i++
    }
}
