'use strict';

var users = [
    'Basia',
    'Ania',
    'Majkel',
    'Krzysio'
]

var user = ''

function checkIn() {
    user = inputUser.input.value.trim()

    if (!userSet()) {
        inputUser.input.classList.add('invalid')
        return
    }

    cookies.set('user', user, 1)
    switchToPage(pageAddTraining)
}

function userSet() {
    return user != 'Kto tam?' && user != ''
}
