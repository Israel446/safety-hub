(function () {
  "use strict";
  function request(path, body) {
    return fetch('/api/hub/' + path, {
      method: body === undefined ? 'GET' : 'POST', credentials: 'same-origin', cache: 'no-store',
      headers: body === undefined ? {} : {'Content-Type': 'application/json'},
      body: body === undefined ? undefined : JSON.stringify(body)
    }).then(function (response) {
      if (!response.ok) { var error = new Error('Hub request failed (' + response.status + ')'); error.code = response.status === 403 ? 'invalid_argument' : 'request_failed'; throw error; }
      return response.json();
    });
  }
  function snapshot(value) { return {exists: value.exists, data: function () { return value.data; }}; }
  function poll(read, convert, cb, err) {
    var active = true, busy = false, previous;
    function update() {
      if (!active || busy) return;
      busy = true;
      read().then(function (value) {
        if (!active) return;
        var json = JSON.stringify(value);
        if (json !== previous) { previous = json; cb(convert(value)); }
      }).catch(function (error) { if (active && err) err(error); }).then(function () { busy = false; });
    }
    function visible() { if (document.visibilityState === 'visible') update(); }
    var timer = setInterval(update, 20000);
    window.addEventListener('focus', update);
    document.addEventListener('visibilitychange', visible);
    update();
    return function () { active = false; clearInterval(timer); window.removeEventListener('focus', update); document.removeEventListener('visibilitychange', visible); };
  }
  var user = {
    me: function () { return request('me'); },
    profiles: function (ids) { return request('profiles', {ids: ids}); }
  };
  var db = {
    doc: function (path) {
      var url = 'doc/' + path.split('/').map(encodeURIComponent).join('/');
      return {
        get: function () { return request(url).then(snapshot); },
        set: function (body) { return request(url, body); },
        onSnapshot: function (cb, err) { return poll(function () { return request(url); }, snapshot, cb, err); }
      };
    },
    collection: function (name) {
      if (name !== 'members') throw new Error('Unknown collection');
      return {onSnapshot: function (cb, err) {
        return poll(function () { return request('members'); }, function (rows) {
          return {docs: rows.map(function (row) { return {id: row.id, data: function () { var data = Object.assign({}, row); delete data.id; return data; }}; })};
        }, cb, err);
      }};
    }
  };
  window.claude = {use: function (name) { return Promise.resolve(name === 'user' ? user : name === 'db' ? db : null); }};
})();
