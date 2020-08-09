'use strict';

var gifUrls = [
    'url(images/apple.gif)',
    'url(images/bike.gif)',
    'url(images/jump.gif)',
    'url(images/runner.gif)',
    'url(images/skate.gif)'
]

function pageGifInit() {
    var c = document.getElementById('container-gif')

    var randomUrl = Math.floor(Math.random() * gifUrls.length)
    c.style.backgroundImage = gifUrls[randomUrl]
}
