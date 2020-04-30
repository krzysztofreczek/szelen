//alert("connected")

var weeklyGoal = 4

var users = [
  "Basia",
  "Ania",
  "Majkel",
  "Krzysio"
]

var events = []

var colors = [
  "#bdc3c7",
  "#51cda0",
  "#6d78ad",
  "#df7970",
  "#c9d45c",
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

  // getEvents(loadPageContents)
  mockEvents(loadPageContents)
}

function getEvents(callback) {
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
        events.push(event)

        callback()
      }
    }
  }

  xhr.send()
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
  var today = new Date()
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
  printAllEventsTable()
}

function printLabels() {
  document.getElementById("weekly-total").innerHTML = thisWeekStatistics.total
  document.getElementById("weekly-leaders").innerHTML = thisWeekStatistics.leaders + " [" + thisWeekStatistics.leaderTotal + "]"
  document.getElementById("total").innerHTML = totalStatistics.total
  document.getElementById("leaders").innerHTML = totalStatistics.leaders + " [" + totalStatistics.leaderTotal + "]"
}

function printAllCharts() {
  printMainWeeklyChart()
  printAuxiliaryWeeklyChart()
  printHistoryChart()
}

function printMainWeeklyChart() {
  var done = 0
  var todo = weeklyGoal

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
      text: "Twoje",
    },
    data: [{
      type: "doughnut",
      indexLabelFontSize: 18,
      radius: 100,
      indexLabel: "{label} [{y}]",
      yValueFormatString: "##0",
      dataPoints: [
        { y: done, label: "Zrobione", color: colors[1] },
        { y: todo, label: "Pozostałe", color: colors[0] },
      ]
    }]
  })
  chart.render()
}

function printAuxiliaryWeeklyChart() {
  var i = 1
  for (var u of users) {
    if (u == user) {
      continue
    }

    var done = 0
    var todo = weeklyGoal

    if (thisWeekStatistics[u]) {
      done = thisWeekStatistics[u].total
      todo -= done
    }

    if (todo < 0) {
      todo = 0
    }

    var chart = new CanvasJS.Chart("chart-container-" + i, {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: u,
      },
      data: [{
        type: "doughnut",
        indexLabelFontSize: 18,
        radius: 100,
        dataPoints: [
          { y: done, color: colors[i + 1] },
          { y: todo, color: colors[0] },
        ]
      }]
    })
    chart.render()
    i++
  }
}

function printHistoryChart() {
  var today = new Date()
  var monday = getMonday(today)
  var mondayWeekAgo = new Date()
  mondayWeekAgo.setDate(monday - 7)

  var dataPoints = {}
  for (var e of events) {
    if (e.timestamp < mondayWeekAgo) {
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

  var i = 1
  var data = []
  for (var u of users) {
    var d = {
      type: "stackedColumn",
      showInLegend: true,
      color: colors[i],
      name: u,
      dataPoints: dataPoints[u]
    }

    data.push(d)
    
    i++
  }

  var chart = new CanvasJS.Chart("history-chart-container", {
    animationEnabled: true,
    axisX: {
      interval: 1,
      intervalType: "day",
    },
    data: data,
  })
  chart.render()
}

function printAllEventsTable() {
  var table = document.getElementById("all-events-table")
  table.innerHTML = ""

  events.sort(compareEvents)

  var i = 0
  for (var e of events) {
    var row = table.insertRow(i)
    row.insertCell(0).innerHTML = "-"
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

function mockEvents(callback) {
  events = [
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
  ]

  callback()
}

function getMonday(d) {
  var day = d.getDay(), diff = d.getDate() - day
  return new Date(d.setDate(diff))
}