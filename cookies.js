function setCookie(user, recentEvents, exdays) {
  var cookies = "user=" + user
  cookies += ";re=" + recentEvents

  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  cookies += ";expires=" + d.toUTCString()

  cookies += ";path=/"

  document.cookie = cookies
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
