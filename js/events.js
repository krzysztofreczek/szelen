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

function eventsEqual(e1, e2) {
    if (e1.timestamp.toDateString() != e2.timestamp.toDateString()) {
        return false
    }

    if (e1.user != e2.user) {
        return false
    }

    return true
}
