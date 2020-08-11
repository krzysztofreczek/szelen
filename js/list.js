'use strict';

var inputTrainingDate

function pageListInit() {
    initAllTrainingsTable()
}

function initAllTrainingsTable() {
    var table = document.getElementById('table-all-trainings')
    table.innerHTML = ''

    events.sort(compareEvents)

    var i = 0
    for (var e of events) {
        var row = table.insertRow(i)

        var idx = row.insertCell(0)
        idx.innerHTML = events.length - i
        idx.classList.add("idx")
        idx.style.width = '33%';

        var timestamp = row.insertCell(1)
        timestamp.innerHTML = e.timestamp.toLocaleDateString()
        timestamp.style.width = '33%';

        var user = row.insertCell(2)
        user.innerHTML = e.user
        user.style.width = '33%';

        i++
    }
}
