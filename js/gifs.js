'use strict';

var gifs = [
    { url: 'images/0.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/1.gif', color: 'rgb(255, 112, 113)' },
    { url: 'images/2.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/3.gif', color: 'rgb(18, 170, 197)' },
    { url: 'images/4.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/5.gif', color: 'rgb(229, 222, 171)' },
    { url: 'images/6.gif', color: 'rgb(243, 243, 243)' }
]

function pageGifInit() {
    var randomIndex = Math.floor(Math.random() * gifs.length)
    var g = gifs[randomIndex]

    document.body.style.background = g.color;
    document.getElementById('gif').src = g.url
}

function pageGifEnable() {
    confetti.start(2 * 1000)

    var button = document.getElementById(btnSending)
    button.style.display = 'none'

    var button = document.getElementById(btnForward)
    button.style.display = ''
}
