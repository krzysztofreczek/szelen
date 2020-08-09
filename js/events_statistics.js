'use strict';

var challengeWeeklyGoal = 4
var challengeStartMonday = new Date("2020/04/27")
var today = new Date()

var thisWeekStatistics = {}

var totalStatistics = {}

function analyzeData() {
    var today = getToday()
    var monday = getMonday(today)

    thisWeekStatistics = {
        total: 0,
        leaders: "",
        leaderTotal: 0,
    }
    thisWeekStatistics[user] = {
        total: 0
    }
    
    totalStatistics = {
        total: 0,
        leaders: "",
        leaderTotal: 0,
    }
    totalStatistics[user] = {
        total: 0
    }

    for (var e of events) {
        if (e.timestamp >= monday) {
            thisWeekStatistics = updateStats(thisWeekStatistics, e)
        }
        totalStatistics = updateStats(totalStatistics, e)
    }
}

function updateStats(inStats, e) {
    var stats = inStats

    stats.total++

    if (!stats[e.user]) {
        stats[e.user] = {
            total: 0
        }
    }
    stats[e.user].total++

    if (stats.leaderTotal < stats[e.user].total) {
        stats.leaderTotal = stats[e.user].total
    }

    var leaders = ""
    for (var u of users) {
        if (stats[u] && stats[u].total == stats.leaderTotal) {
            if (leaders != "") {
                leaders += ", "
            }
            leaders += u
        }
    }

    stats.leaders = leaders

    return stats
}
