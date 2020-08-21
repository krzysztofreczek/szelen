'use strict';

var gifs = [
    { url: 'images/0.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/1.gif', color: 'rgb(255, 112, 113)' },
    { url: 'images/2.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/3.gif', color: 'rgb(18, 170, 197)' },
    { url: 'images/4.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/5.gif', color: 'rgb(229, 222, 171)' },
    { url: 'images/6.gif', color: 'rgb(243, 243, 243)' },
    { url: 'images/7.gif', color: 'rgb(251, 180, 113)' },
    { url: 'images/8.gif', color: 'rgb(134, 208, 221)' },
    { url: 'images/9.gif', color: 'rgb(15, 75, 63)' },
    { url: 'images/10.gif', color: 'rgb(134, 106, 163)' },
    { url: 'images/11.gif', color: 'rgb(255, 235, 235)' },
    { url: 'images/12.gif', color: 'rgb(250, 90, 66)' },
    { url: 'images/13.gif', color: 'rgb(40, 207, 155)' },
    { url: 'images/14.gif', color: 'rgb(255, 255, 247)' },
    { url: 'images/15.gif', color: 'rgb(255, 150, 140)' },
    { url: 'images/default.gif', color: 'rgb(49, 57, 66)' }
]

var gifIndex = 16

function pageRandomGifInit() {
    gifIndex = getRandomUserGif()
    pageGifInit()
}

function pageGifInit() {
    var g = gifs[gifIndex]
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
