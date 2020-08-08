'use strict';

function initialize() {
    initializeFloatingButtons()

    loadEvents()
    analyzeData()

    user = cookies.get("user")

    if (userSet()) {
        switchToPage(pageAddTraining)
    } else {
        switchToPage(pageWelcome)
    }
}

function initializeFloatingButtons() {
    var buttons = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(buttons, {});
}
