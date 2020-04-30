//alert("connected")

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
  user = "Krzysio"
}

function initialize() {
  var link = window.location.href
  user = link.split("?")[1]
  if (user == "") {
    user = users[0]
  }

  getEvents(loadPageContents)
  // mockEvents(loadPageContents)
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
          timestamp: w[0],
          user: w[1],
        }
        events.push(event)

        callback()
      }
    }
  }

  xhr.send()
}

function loadPageContents() {
  printAllCharts()
  printAllEventsTable()
}

function printAllCharts() {
  printMainWeeklyChart()
  printAuxiliaryWeeklyChart()
  printHistoryChart()
}

function printMainWeeklyChart() {
  var chart = new CanvasJS.Chart("main-chart-container", {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Krzysio",
    },
    data: [{
      type: "doughnut",
      indexLabelFontSize: 18,
      radius: 100,
      indexLabel: "{label} [{y}]",
      yValueFormatString: "##0",
      dataPoints: [
        { y: 6, label: "Zrobione", color: colors[1] },
        { y: 1, label: "Pozostałe", color: colors[0] },
      ]
    }]
  })
  chart.render()
}

function printAuxiliaryWeeklyChart() {
  var others = [
    "Basia",
    "Majkel",
    "Ania"
  ]
  var i = 1
  for (var o of others) {
    var chart = new CanvasJS.Chart("chart-container-" + i, {
      theme: "light2",
      animationEnabled: true,
      title: {
        text: o,
      },
      data: [{
        type: "doughnut",
        indexLabelFontSize: 18,
        radius: 100,
        dataPoints: [
          { y: 6, color: colors[i + 1] },
          { y: 1, color: colors[0] },
        ]
      }]
    })
    chart.render()
    i++
  }
}

function printHistoryChart() {
  var chart = new CanvasJS.Chart("history-chart-container", {
    animationEnabled: true,
    axisX: {
      interval: 1,
      intervalType: "year",
    },
    data: [{
      type: "stackedColumn",
      showInLegend: true,
      color: colors[1],
      name: "Basia",
      dataPoints: [
        { y: 1, x: new Date(2010, 0) },
        { y: 0, x: new Date(2011, 0) },
        { y: 1, x: new Date(2012, 0) }
      ]
    },
    {
      type: "stackedColumn",
      showInLegend: true,
      color: colors[2],
      name: "Ania",
      dataPoints: [
        { y: 1, x: new Date(2010, 0) },
        { y: 1, x: new Date(2011, 0) },
        { y: 1, x: new Date(2012, 0) }
      ]
    },
    {
      type: "stackedColumn",
      showInLegend: true,
      color: colors[3],
      name: "Majkel",
      dataPoints: [
        { y: 1, x: new Date(2010, 0) },
        { y: 0, x: new Date(2011, 0) },
        { y: 0, x: new Date(2012, 0) }
      ]
    },
    {
      type: "stackedColumn",
      showInLegend: true,
      color: colors[4],
      name: "Krzysio",
      dataPoints: [
        { y: 0, x: new Date(2010, 0) },
        { y: 1, x: new Date(2011, 0) },
        { y: 1, x: new Date(2012, 0) }
      ]
    }
    ]
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
      timestamp: new Date(2020, 4, 28)
    },
    {
      user: "Ania",
      timestamp: new Date(2020, 4, 27)
    },
    {
      user: "Majkel",
      timestamp: new Date(2020, 4, 28)
    },
    {
      user: "Krzysio",
      timestamp: new Date(2020, 4, 29)
    },
    {
      user: "Basia",
      timestamp: new Date(2020, 4, 30)
    },
    {
      user: "Ania",
      timestamp: new Date(2020, 4, 28)
    },
    {
      user: "Majkel",
      timestamp: new Date(2020, 4, 30)
    },
    {
      user: "Krzysio",
      timestamp: new Date(2020, 4, 30)
    }
  ]

  callback()
}