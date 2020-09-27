'use strict';

var events = []

function loadEvents() {
    loadCookiesEvents()
    loadPersistedEvents()
}

function loadCookiesEvents() {
    var recentEvents = cookies.get('recentEvents').split(",")

    for (var e of recentEvents) {
        if (!e) {
            continue
        }

        var w = e.split(":")
        var date = w[0]
        var user = w[1]

        if (!date || !user) {
            continue
        }

        var event = {
            timestamp: new Date(date),
            user: user,
        }

        addEvent(event)
    }
}

function loadPersistedEvents() {
    for (var e of events_0) {
        loadPersistedEvent(e)
    }
    for (var e of events_1) {
        loadPersistedEvent(e)
    }
    for (var e of events_2) {
        loadPersistedEvent(e)
    }
    for (var e of events_3) {
        loadPersistedEvent(e)
    }
    for (var e of events_4) {
        loadPersistedEvent(e)
    }
    for (var e of events_5) {
        loadPersistedEvent(e)
    }
}

function loadPersistedEvent(e) {
    if (!e || !e.user || !e.date) {
        return
    }

    var event = {
        timestamp: new Date(e.date),
        user: e.user,
    }

    addEvent(event)
}

function addEvent(event) {
    var alreadyExists = false
    for (var e of events) {
        if (eventsEqual(e, event)) {
            alreadyExists = true
            break
        }
    }

    if (!alreadyExists) {
        events.push(event)
    }
}

function compareEvents(e1, e2) {
    if (e1.timestamp > e2.timestamp) {
        return -1
    }

    if (e1.timestamp == e2.timestamp) {
        return 0
    }

    return 1
}

function eventsEqual(e1, e2) {
    if (e1.timestamp.toDateString() != e2.timestamp.toDateString()) {
        return false
    }

    if (e1.user != e2.user) {
        return false
    }

    return true
}

function persistEvent(user, timestamp, callback) {
    var xhr = new XMLHttpRequest()
    var url = 'https://cors-anywhere.herokuapp.com/circleci.com:443/api/v1.1/project/github/krzysztofreczek/szelen/tree/master'
    xhr.open("POST", url, true)

    xhr.setRequestHeader("Authorization", "Basic " + btoa("cf6722fa167f5b50afc9f33b04c7824f04052f31:"))
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.setRequestHeader("origin", "krzysztofreczek.github.io")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            persistEventInCookies(user, timestamp)
            callback()
        }
    }

    var payload = `{"build_parameters" : {"CIRCLE_JOB" : "add_event", "EVENT_USER" : "` + user + `", "EVENT_TIMESTAMP" : "` + timestamp + `" }}`
    xhr.send(payload)
}

function persistEventInCookies(user, timestamp) {
    var recentEvents = cookies.get('recentEvents')

    if (recentEvents != "") {
        recentEvents += ","
    }
    recentEvents += timestamp + ":" + user

    cookies.set("recentEvents", recentEvents, 1)
}
