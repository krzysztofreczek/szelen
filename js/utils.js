'use strict';

function getToday() {
    return today
}

function getMonday(d) {
    var date = new Date(d.toDateString())
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
    return new Date(date.setDate(diff))
}
