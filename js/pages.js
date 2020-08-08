'use strict';

const pageWelcome = 'page-welcome'
const pageAddTraining = 'page-add-training'

var pages = [
  pageWelcome,
  pageAddTraining,
]

const btnBack = 'btn-back'
const btnSummary = 'btn-summary'
const btnAdd = 'btn-add'
const btnCheck = 'btn-check'

var buttons = [
  btnBack,
  btnSummary,
  btnAdd,
  btnCheck,
]

var pageConfig = {
  'page-welcome': {
    id: pageWelcome,
    initFunc: pageWelcomeInit,
    buttons: [
      {
        id: btnCheck,
        func: checkIn
      }
    ]
  },
  'page-add-training': {
    id: pageAddTraining,
    initFunc: pageAddTrainingInit,
    buttons: [
      {
        id: btnBack,
        func: function () { switchToPage(pageWelcome) }
      },
      {
        id: btnSummary,
        func: function () { switchToPage(pageWelcome) }
      },
      {
        id: btnAdd,
        func: addTraining
      }
    ]
  }
}

function switchToPage(toPage) {
  hideAllPages()
  hideAllButtons()

  var c = pageConfig[toPage]
  showElement(c.id)

  c.initFunc()

  for (var b of c.buttons) {
    showElement(b.id)
    bindButton(b.id, b.func)
  }
}

function hideAllPages() {
  for (var p of pages) {
    var page = document.getElementById(p)
    page.style.display = 'none'
  }
}

function hideAllButtons() {
  for (var b of buttons) {
    var button = document.getElementById(b)
    button.style.display = 'none'
  }
}

function showElement(id) {
  var page = document.getElementById(id)
  page.style.display = 'block'
}

function bindButton(id, f) {
  var button = document.getElementById(id)
  button.addEventListener('click', f)
}

function pageWelcomeInit() {

}

function pageAddTrainingInit() {
  var h = document.getElementById('header-greeting')
  h.innerHTML = getRandomGreeting(user)
}
