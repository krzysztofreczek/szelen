'use strict';

var pages = [
  "page-welcome",
  "page-add-training",
]

function switchTo(toPage) {
  for (var p of pages) {
    var page = document.getElementById(p)
    page.style.display = 'none'
    if (p == toPage) {
      page.style.display = 'block'
    }
  }
}