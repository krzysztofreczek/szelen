//alert("connected")

function userExists(user) {
  var users = [
    "Basia",
    "Ania",
    "Majkel",
    "Krzysio"
  ]
  for (var u of users) {
    if (u == user) {
      return true
    }
  }
  return false
}

var events = [
]

var user = ""
var recentEvents = ""
var workoutDate = ""

function initialize() {
  user = getCookie("user")
  recentEvents = getCookie("recentEvents")

  if (userExists(user)) {
    setWorkoutPageHeader()
    switchTo("workout-page")
  } else {
    switchTo("entry-page")
  }

  var flatpickrConfig = {
    enableTime: false,
    dateFormat: "Y/m/d",
  }
  flatpickr("#date-picker", flatpickrConfig)

  document.getElementById("get-in-btn").addEventListener("click", getIn)
  document.getElementById("set-workout-date-btn").addEventListener("click", setWorkoutDate)
  document.getElementById("summary-btn").addEventListener("click", switchToSummary)
}

function switchTo(toPage) {
  pages = [
    "entry-page",
    "workout-page",
  ]
  for (var p of pages) {
    var page = document.getElementById(p)
    page.style.display = 'none'
    if (p == toPage) {
      page.style.display = 'block'
    }
  }
}

function getIn() {
  userInput = document.getElementById("user-input")
  user = userInput.value.trim()

  if (user == "") {
    userInput.classList.add("is-invalid")
    return
  }

  if (!userExists(user)) {
    userInput.classList.add("is-invalid")
    return
  }

  setCookie("user", user, 1)

  setWorkoutPageHeader()
  switchTo("workout-page")
}

function setWorkoutPageHeader() {
  workoutPageHeader = document.getElementById("workout-page-header")
  workoutPageHeader.innerHTML = getRandomGreeting()
}

function getRandomGreeting() {
  var greetings = [
    "Cześć " + user + "!<br> Co słychać?",
    "Hej " + user + "!<br> Jak leci?",
    "Jak tam szelen, " + user + "?",
    "Miło Cię widzieć, " + user + "!",
    "Dzień dobry, " + user + " :)"
  ]
  var randomIdx = Math.floor(Math.random() * greetings.length)
  return greetings[randomIdx]
}

var setWorkoutDateOnce = false

function setWorkoutDate() {
  if (setWorkoutDateOnce) {
    return
  }

  datePicker = document.getElementById("date-picker")
  workoutDate = datePicker.value.trim()

  if (workoutDate == "") {
    datePicker.classList.add("is-invalid")
    return
  }

  summaryPageHeader = document.getElementById("summary-page-header")
  summaryPageHeader.innerHTML = "Super!"

  confetti.start(2 * 1000)

  var xhr = new XMLHttpRequest()
  var url = 'https://cors-anywhere.herokuapp.com/circleci.com:443/api/v1.1/project/github/krzysztofreczek/szelen/tree/master'
  xhr.open("POST", url, true)

  xhr.setRequestHeader("Authorization", "Basic " + btoa("cf6722fa167f5b50afc9f33b04c7824f04052f31:"))
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.setRequestHeader("origin", "krzysztofreczek.github.io")

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 201) {
      if (recentEvents != "") {
        recentEvents += ","
      }
      recentEvents += workoutDate + ":" + user
      setCookie("recentEvents", recentEvents, 1)
      switchToSummary()
    }
  }

  var payload = `{"build_parameters" : {"CIRCLE_JOB" : "add_event", "EVENT_USER" : "` + user + `", "EVENT_TIMESTAMP" : "` + workoutDate + `" }}`
  xhr.send(payload)

  setWorkoutDateOnce = true
  setWorkoutDateBtn = document.getElementById("set-workout-date-btn")
  setWorkoutDateBtn.innerHTML = "Wysyłam..."
}

function switchToSummary() {
  window.location.href = "./summary.html?" + user
}
