'use strict';

const pageWelcome = 'page-welcome'
const pageAddTraining = 'page-add-training'
const pageSummary = 'page-summary'
const pageGif = 'page-gif'

var pages = [
    pageWelcome,
    pageAddTraining,
    pageSummary,
    pageGif,
]

const containerMainPage = 'container-main-page'
const containerSummary = 'container-summary'
const containerGif = 'container-gif'

var containers = [
    containerMainPage,
    containerSummary,
    containerGif,
]

const btnBack = 'btn-back'
const btnSummary = 'btn-summary'
const btnGif = 'btn-gif'
const btnAdd = 'btn-add'
const btnCheck = 'btn-check'

var buttons = [
    btnBack,
    btnSummary,
    btnGif,
    btnAdd,
    btnCheck,
]

var pageConfig = {
    'page-welcome': {
        id: pageWelcome,
        wrapperId: containerMainPage,
        initFunc: pageCheckInInit,
        buttons: [
            {
                id: btnCheck,
                func: checkIn
            }
        ]
    },
    'page-add-training': {
        id: pageAddTraining,
        wrapperId: containerMainPage,
        initFunc: pageAddTrainingInit,
        buttons: [
            {
                id: btnSummary,
                func: function () { switchToPage(pageSummary) }
            },
            {
                id: btnGif,
                func: function () { switchToPage(pageGif) }
            },
            {
                id: btnAdd,
                func: addTraining
            }
        ]
    },
    'page-summary': {
        id: pageSummary,
        wrapperId: containerSummary,
        initFunc: pageSummaryInit,
        buttons: [
            {
                id: btnBack,
                func: function () { switchToPage(pageAddTraining) }
            }
        ]
    },
    'page-gif': {
        id: pageGif,
        wrapperId: containerGif,
        initFunc: pageGifInit,
        buttons: [
            {
                id: btnBack,
                func: function () { switchToPage(pageAddTraining) }
            }
        ]
    }
}

function switchToPage(toPage) {
    resetPageBackground()
    
    hideAllPages()
    hideAllContainers()
    hideAllButtons()

    var c = pageConfig[toPage]
    showElement(c.wrapperId)
    showElement(c.id)

    c.initFunc()

    for (var b of c.buttons) {
        showElement(b.id)
        bindButton(b.id, b.func)
    }
}

function resetPageBackground() {
    document.body.style.background = '';
}

function hideAllPages() {
    for (var p of pages) {
        var page = document.getElementById(p)
        page.style.display = 'none'
    }
}

function hideAllContainers() {
    for (var c of containers) {
        var container = document.getElementById(c)
        container.style.display = 'none'
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
    page.style.display = ''
}

function bindButton(id, f) {
    var button = document.getElementById(id)
    button.addEventListener('click', f)
}
