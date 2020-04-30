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
var workoutDate = ""

function initialize() {
  var cookieUser = ""

  var cookie = document.cookie;
  if (cookie != "") {
    cookieUser = cookie.split("=")[1]
  }

  if (userExists(cookieUser)) {
    user = cookieUser
    switchTo("workout-page")
  } else {
    switchTo("entry-page")
  }


  flatpickr('#date-picker', {
    dateFormat: 'Y/m/d',
  })

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

  document.cookie = "user=" + user;

  workoutPageHeader = document.getElementById("workout-page-header")
  workoutPageHeader.innerHTML = "Cześć " + user + "!<br> Jak tam szelen?"

  switchTo("workout-page")
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

  event = {
    user: user,
    timestamp: workoutDate
  }
  events.push(event)

  // var xhr = new XMLHttpRequest()
  // var url='https://cors-anywhere.herokuapp.com/circleci.com:443/api/v1.1/project/github/krzysztofreczek/szelen/tree/master'
  // xhr.open("POST", url, true)
  
  // xhr.setRequestHeader("Authorization", "Basic " + btoa("cf6722fa167f5b50afc9f33b04c7824f04052f31:"))
  // xhr.setRequestHeader("Content-type", "application/json")
  // xhr.setRequestHeader("origin", "krzysztofreczek.github.io")

  // xhr.onreadystatechange = function(){
  //   if (xhr.readyState ==4 && xhr.status == 201) {
      summaryPageHeader = document.getElementById("summary-page-header")
      summaryPageHeader.innerHTML = "Super!"
      switchToSummary()
    // }
  // }
    
  // var payload = `{"build_parameters" : {"CIRCLE_JOB" : "add_event", "EVENT_USER" : "` + user + `", "EVENT_TIMESTAMP" : "` + workoutDate + `" }}`
  // xhr.send(payload)

  // setWorkoutDateOnce = true
  // setWorkoutDateBtn = document.getElementById("set-workout-date-btn")
  // setWorkoutDateBtn.innerHTML = "Wysyłam..."
}

function switchToSummary() {
  window.location.href = "./summary.html?" + user;
}
