function setCookie(user, recentEvents, exdays) {
  document.cookie = "user=" + user
  document.cookie += ";re=" + recentEvents

  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  document.cookie += ";expires=" + d.toUTCString()

  document.cookie += ";path=/"
}

function getUserCookie() {
  var cookies = document.cookie.split(";")
  for (var c of cookies) {
    var kv = c.split("=")
    if (kv[0] == "user") {
      return kv[1]
    }
  }
  return ""
}

function getRecentEventsCookie() {
  var cookies = document.cookie.split(";")
  for (var c of cookies) {
    var kv = c.split("=")
    if (kv[0] == "re") {
      return kv[1]
    }
  }
  return ""
}
