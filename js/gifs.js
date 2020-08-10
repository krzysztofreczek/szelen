'use strict';

var gifs = [
    { url: 'images/apple.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/bike.gif', color: 'rgb(18, 170, 197)' },
    { url: 'images/jump.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/skate.gif', color: 'rgb(229, 222, 171)' },
    { url: 'images/basket.gif', color: 'rgb(255, 112, 113)' },
    { url: 'images/baywatch.gif', color: 'rgb(255, 255, 255)' },
    { url: 'images/skate-old.gif', color: 'rgb(243, 243, 243)' }
]

function pageGifInit() {
    var randomIndex = Math.floor(Math.random() * gifs.length)
    var g = gifs[randomIndex]

    document.body.style.background = g.color;
    document.getElementById('gif').src = g.url
}
