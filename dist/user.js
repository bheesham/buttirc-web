(function() {
  var on_signout, on_verify, signin, signout, user, xhr_sentinel;

  user = localStorage['user'] ? localStorage['user'] : '';

  signin = document.getElementById('signin');

  if (signin) {
    signin.onclick = function() {
      return navigator.id.request();
    };
  }

  signout = document.getElementById('signout');

  if (signout) {
    signout.onclick = function() {
      return navigator.id.logout();
    };
  }

  xhr_sentinel = function(xhr) {
    return function() {
      if (xhr.readyState = 4 && xhr.status === 200) {
        return window.location.reload();
      } else {
        navigator.id.logout();
        return alert('XMLHttpRequest error: ' + xhr.status);
      }
    };
  };

  on_verify = function(assertion) {
    var param, xhr;
    xhr = new XMLHttpRequest();
    param = 'assertion=' + assertion;
    xhr.open('POST', '/user/signin', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Content-length', param.length);
    xhr.setRequestHeader('Connection', 'close');
    xhr.send(param);
    return xhr.onreadystatechange = xhr_sentinel(xhr);
  };

  on_signout = function() {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open('GET', '/user/signout', true);
    xhr.send(null);
    return xhr.onreadystatechange = xhr_sentinel(xhr);
  };

  navigator.id.watch({
    loggedInUser: user,
    onlogin: on_verify,
    onlogout: on_signout
  });

}).call(this);
