
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

user = if localStorage['user'] then localStorage['user'] else ''

signin = document.getElementById('signin')
if signin
    signin.onclick = () ->
        navigator.id.request()

signout = document.getElementById('signout')
if signout
    signout.onclick = () ->
        navigator.id.logout()

xhr_sentinel = (xhr) ->
    return () ->
        if xhr.readyState = 4
            if xhr.status == 200
                window.location.reload()
            else
                navigator.id.logout()
                alert('XMLHttpRequest error: ' + xhr.status)

on_verify = (assertion) ->
    xhr = new XMLHttpRequest()
    param = 'assertion=' + assertion

    xhr.open('POST', '/user/signin', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('Content-length', param.length)
    xhr.setRequestHeader('Connection', 'close')
    xhr.send(param)
    xhr.onreadystatechange = xhr_sentinel(xhr)

on_signout = () ->
    xhr = new XMLHttpRequest()

    xhr.open('GET', '/user/signout', true)
    xhr.send(null)
    xhr.onreadystatechange = xhr_sentinel(xhr)

navigator.id.watch(
    loggedInUser: user,
    onlogin: on_verify,
    onlogout: on_signout
)

