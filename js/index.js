'use strict';

function initialize() {
    loadEvents()
    analyzeData()

    user = cookies.get("user")

    if (userSet()) {
        switchToPage(pageAddTraining)
    } else {
        switchToPage(pageWelcome)
    }
}
