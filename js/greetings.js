'use strict';

function getRandomGreeting(user) {
    var greetings = [
        'Cześć ' + user + '!',
        'Hej ' + user + '!',
        'Jak tam szelen, ' + user + '?',
        'Miło Cię widzieć, ' + user + '!',
        'Dzień dobry, ' + user + '!'
    ]

    var randomIdx = Math.floor(Math.random() * greetings.length)
    return greetings[randomIdx]
}
