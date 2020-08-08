'use strict';

function initialize() {
    user = cookies.get("user")

    if (userSet()) {
        switchToPage(pageAddTraining)
    } else {
        switchToPage(pageWelcome)
    }
}
