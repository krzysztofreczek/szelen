//alert("connected")

var devMode = false

var challengeWeeklyGoal = 4

var challengeStartMonday = new Date("2020/04/27")
if (devMode) {
  challengeStartMonday = new Date("2020/03/16")
}

var users = [
  "Basia",
  "Ania",
  "Majkel",
  "Krzysio"
]

var events = []

var colors = {
  "Default": "#bdc3c7",
  "Krzysio": "#51cda0",
  "Basia": "#6d78ad",
  "Ania": "#df7970",
  "Majkel": "#c9d45c",
}

var weekdayNames = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota'
]

var link = window.location.href
user = link.split("?")[1]
if (user == "") {
  user = users[0]
}

function initialize() {
  var link = window.location.href
  user = link.split("?")[1]
  if (user == "") {
    user = users[0]
  }

  if (devMode) {
    mockEvents(loadPageContents)
  } else {
    getEvents(loadPageContents)
  }
}

function getEvents(callback) {
  getEventsFromFile(function () {
    getEventsFromCookies(function () {
      callback()
    })
  })
}

function getEventsFromFile(callback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "./db/events", true)
  xhr.setRequestHeader('Cache-Control', 'no-cache')
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var lines = xhr.responseText.split("\n")
      for (var l of lines) {
        if (l == "") {
          continue
        }

        w = l.split(":")

        event = {
          timestamp: new Date(w[0]),
          user: w[1],
        }
        addEvent(event)
      }

      callback()
    }
  }

  xhr.send()
}

function getEventsFromCookies(callback) {
  var recentEvents = getCookie("recentEvents").split(",")
  for (var e of recentEvents) {
    if (e == "") {
      continue
    }

    w = e.split(":")

    event = {
      timestamp: new Date(w[0]),
      user: w[1],
    }
    addEvent(event)
  }

  callback()
}

function addEvent(event) {
  var alreadyExists = false
  for (var e of events) {
    if (eventsEqual(e, event)) {
      alreadyExists = true
      break
    }
  }

  if (!alreadyExists) {
    events.push(event)
  }
}

var thisWeekStatistics = {
  total: 0,
  leaders: "",
  leaderTotal: 0,
}

var totalStatistics = {
  total: 0,
  leaders: "",
  leaderTotal: 0,
}

function analyzeData() {
  var today = getToday()
  var monday = getMonday(today)
  for (var e of events) {
    if (e.timestamp >= monday) {
      thisWeekStatistics = updateStats(thisWeekStatistics, e)
    }
    totalStatistics = updateStats(totalStatistics, e)
  }
}

function updateStats(inStats, e) {
  var stats = inStats

  stats.total++

  if (!stats[e.user]) {
    stats[e.user] = {
      total: 0
    }
  }
  stats[e.user].total++

  if (stats.leaderTotal < stats[e.user].total) {
    stats.leaderTotal = stats[e.user].total
  }

  var leaders = ""
  for (var u of users) {
    if (stats[u] && stats[u].total == stats.leaderTotal) {
      if (leaders != "") {
        leaders += ", "
      }
      leaders += u
    }
  }

  stats.leaders = leaders

  return stats
}

function loadPageContents() {
  analyzeData()
  printLabels()
  printAllCharts()
  printWeekStatusesTable()
  printAllEventsTable()
}

function printLabels() {
  weeklyUserTotal = 0
  if (thisWeekStatistics[user]) {
    weeklyUserTotal = thisWeekStatistics[user].total
  }

  userTotal = 0
  if (totalStatistics[user]) {
    userTotal = totalStatistics[user].total
  }

  document.getElementById("weekly-yours").innerHTML = weeklyUserTotal
  document.getElementById("weekly-total").innerHTML = thisWeekStatistics.total
  document.getElementById("weekly-leaders").innerHTML = thisWeekStatistics.leaders + " [" + thisWeekStatistics.leaderTotal + "]"
  document.getElementById("yours").innerHTML = userTotal
  document.getElementById("total").innerHTML = totalStatistics.total
  document.getElementById("leaders").innerHTML = totalStatistics.leaders + " [" + totalStatistics.leaderTotal + "]"
}

function printAllCharts() {
  printMainWeeklyChart()
  printAuxiliaryWeeklyCharts()
  printHistoryChart()
  printWeekDaysChart()
  printWeeklyAllChart()
  printAllChart()
}

function printMainWeeklyChart() {
  var done = 0
  var todo = challengeWeeklyGoal

  if (thisWeekStatistics[user]) {
    done = thisWeekStatistics[user].total
    todo -= done
  }

  if (todo < 0) {
    todo = 0
  }

  var chart = new CanvasJS.Chart("main-chart-container", {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Ty",
    },
    data: [{
      type: "doughnut",
      indexLabelFontSize: 12,
      radius: 100,
      indexLabel: "{label} [{y}]",
      yValueFormatString: "##0",
      dataPoints: [
        { y: done, label: "Zrobione", color: colors[user] },
        { y: todo, label: "Pozostałe", color: colors["Default"] },
      ]
    }]
  })
  chart.render()
}

function printAuxiliaryWeeklyCharts() {
  var i = 1
  for (var u of users) {
    if (u == user) {
      continue
    }

    var done = 0
    var todo = challengeWeeklyGoal

    if (thisWeekStatistics[u]) {
      done = thisWeekStatistics[u].total
      todo -= done
    }

    if (todo < 0) {
      todo = 0
    }

    if (i > 3) {
      return
    }

    var chart = new CanvasJS.Chart("chart-container-" + i, {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: u,
      },
      data: [{
        type: "doughnut",
        indexLabelFontSize: 12,
        radius: 100,
        dataPoints: [
          { y: done, color: colors[u] },
          { y: todo, color: colors["Default"] },
        ]
      }]
    })
    chart.render()
    i++
  }
}

function printHistoryChart() {
  var today = getToday()
  var threeWeeksAgo = new Date()
  threeWeeksAgo.setDate(today.getDate() - 21)

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
      type: "stackedColumn",
      showInLegend: true,
      color: colors[u],
      name: u,
      dataPoints: dataPoints[u]
    }

    data.push(d)
  }

  var chart = new CanvasJS.Chart("history-chart-container", {
    animationEnabled: true,
    axisX: {
      interval: 3,
      intervalType: "day",
      gridThickness: 1,
      gridColor: colors["Default"]
    },
    axisY: {
      gridThickness: 1,
      gridColor: colors["Default"]
    },
    data: data,
  })
  chart.render()
}

function printWeekDaysChart() {
  var userWeekdayStats = {}

  for (var e of events) {
    if (!userWeekdayStats[e.user]) {
      userWeekdayStats[e.user] = {}
    }

    var weekday = getWeekday(e.timestamp)
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

  var chart = new CanvasJS.Chart("week-days-chart-container", {
    animationEnabled: true,
    zoomEnabled: true,
    theme: "light2",
    axisX: {
      minimum: -1,
      maximum: 7,
      gridThickness: 1,
      gridColor: colors["Default"],
      labelFormatter: function (e) {
        if (!weekdayNames[e.value]) {
          return ""
        }
        return weekdayNames[e.value]
      }
    },
    axisY: {
      minimum: -1,
      maximum: 4,
      gridThickness: 1,
      gridColor: colors["Default"],
      labelFormatter: function (e) {
        if (!users[e.value]) {
          return ""
        }
        return users[e.value]
      }
    },
    data: [{
      type: "bubble",
      toolTipContent: "Dzień: {day}<br/> Osoba: {user}<br/> Ilość: {z}",
      dataPoints: dataPoints
    }]
  });
  chart.render();
}

function printWeeklyAllChart() {
  var dataPoints = []

  for (var u of users) {
    if (!thisWeekStatistics[u]) {
      continue
    }

    var dp = {
      y: thisWeekStatistics[u].total,
      label: u,
      color: colors[u],
    }
    dataPoints.push(dp)
  }

  if (dataPoints.length == 0) {
    var dp = {
      y: 1,
      label: "",
      color: colors["Default"],
    }
    dataPoints.push(dp)
  }

  var chart = new CanvasJS.Chart("weekly-all-chart-container", {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Udział wszystkich osób:",
    },
    data: [{
      type: "doughnut",
      indexLabelFontSize: 12,
      radius: 100,
      indexLabel: "{label}",
      yValueFormatString: "##0",
      dataPoints: dataPoints,
    }]
  })
  chart.render()
}

function printAllChart() {
  var dataPoints = []

  for (var u of users) {
    if (!totalStatistics[u]) {
      continue
    }

    var dp = {
      y: totalStatistics[u].total,
      label: u,
      color: colors[u],
    }

    dataPoints.push(dp)
  }

  if (dataPoints.length == 0) {
    var dp = {
      y: 1,
      label: "",
      color: colors["Default"],
    }
    dataPoints.push(dp)
  }

  var chart = new CanvasJS.Chart("all-chart-container", {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Udział wszystkich osób:",
    },
    data: [{
      type: "doughnut",
      indexLabelFontSize: 12,
      radius: 100,
      indexLabel: "{label}",
      yValueFormatString: "##0",
      dataPoints: dataPoints,
    }]
  })
  chart.render()
}

function printWeekStatusesTable() {
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

  var table = document.getElementById("all-weeks-table")
  table.innerHTML = ""

  var i = 0
  for (var idx in weeks) {
    var w = weeks[idx]

    var wStatus = "SUKCES!"
    var wClass = "week-done"

    var losers = []
    for (var u of users) {
      if (!w[u] || w[u] < challengeWeeklyGoal) {
        losers.push(u)
      }
    }

    if (losers.length != 0) {
      wStatus = ""
      for (var l of losers) {
        if (wStatus != "") {
          wStatus += ", "
        }
        wStatus += l
      }
      wStatus = "PORAŻKA (" + wStatus + ") :("
      wClass = "week-failed"
    }

    if (w.nextWeek > getToday()) {
      wStatus = "..."
      wClass = "week-pending"
    }

    var rowPosition = weeks.length - i
    var row = table.insertRow(rowPosition)

    var idx = row.insertCell(0)
    idx.innerHTML = i + 1
    idx.classList.add("idx")

    row.insertCell(1).innerHTML = w.start.toLocaleDateString() + " - " + w.last.toLocaleDateString()

    var statusCell = row.insertCell(2)
    statusCell.innerHTML = wStatus
    statusCell.classList.add(wClass)

    i++
  }
}

function printAllEventsTable() {
  var table = document.getElementById("all-events-table")
  table.innerHTML = ""

  events.sort(compareEvents)

  var i = 0
  for (var e of events) {
    var row = table.insertRow(i)

    var idx = row.insertCell(0)
    idx.innerHTML = events.length - i
    idx.classList.add("idx")

    row.insertCell(1).innerHTML = e.timestamp.toLocaleDateString()
    row.insertCell(2).innerHTML = e.user
    i++
  }
}

function compareEvents(e1, e2) {
  if (e1.timestamp > e2.timestamp) {
    return -1
  }

  if (e1.timestamp == e2.timestamp) {
    return 0
  }

  return 1
}

function eventsEqual(e1, e2) {
  if (e1.timestamp.toDateString() != e2.timestamp.toDateString()) {
    return false
  }

  if (e1.user != e2.user) {
    return false
  }

  return true
}

function mockEvents(callback) {
  events = [
    {
      user: "Basia",
      timestamp: new Date("2020/4/13")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/18")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/17")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/18")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/18")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/26")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/28")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/27")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/28")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/20")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/20")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/20")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/20")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/21")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/21")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/21")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/21")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/22")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/22")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/22")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/22")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/23")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/23")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/23")
    },
    {
      user: "Majkel",
      timestamp: new Date("2020/4/23")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/29")
    },
    {
      user: "Basia",
      timestamp: new Date("2020/4/30")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/4/30")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/4/30")
    },
    {
      user: "Ania",
      timestamp: new Date("2020/5/2")
    },
    {
      user: "Krzysio",
      timestamp: new Date("2020/5/3")
    },
  ]

  callback()
}

function getToday() {
  if (devMode) {
    return new Date("2020/5/3")
  }
  return new Date()
}

function getMonday(d) {
  var date = new Date(d.toDateString())
  var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

function getWeekday(d) {
  return weekdayNames[d.getDay()]
}

function getAddDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
