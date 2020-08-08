'use strict';

var events = []

function loadEvents() {
    loadCookiesEvents()
    loadPersistedEvents()
}

function loadCookiesEvents() {
    var recentEvents = cookies.get('recentEvents').split(",")

    for (var e of recentEvents) {
        if (e == "") {
            continue
        }

        w = e.split(":")

        addEvent({
            timestamp: new Date(w[0]),
            user: w[1],
        })
    }
}

function loadPersistedEvents() {
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
}

function loadPersistedEvent(e) {
    addEvent({
        timestamp: new Date(e.date),
        user: e.user,
    })
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

function eventsEqual(e1, e2) {
    if (e1.timestamp.toDateString() != e2.timestamp.toDateString()) {
        return false
    }

    if (e1.user != e2.user) {
        return false
    }

    return true
}
