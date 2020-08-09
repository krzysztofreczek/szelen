'use strict';

var users = [
    'Basia',
    'Ania',
    'Majkel',
    'Krzysio'
]

var inputUser
var user = ''

function pageCheckInInit() {
    var elements = M.FormSelect.init(document.querySelectorAll('select'), {});
    inputUser = elements[0]
}

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
    return user != 'Wybierz z listy...' && user != ''
}
