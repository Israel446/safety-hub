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
  var workCache = Object.create(null);
  function workList(uid) {
    if (!workCache[uid]) {
      var entry = {};
      workCache[uid] = entry;
      entry.promise = request('doc/members/' + encodeURIComponent(uid) + '/work').then(function (result) {
        setTimeout(function () { if (workCache[uid] === entry) delete workCache[uid]; }, 10000);
        return result.items;
      }).catch(function (error) { if (workCache[uid] === entry) delete workCache[uid]; throw error; });
    }
    return workCache[uid].promise;
  }
  async function sample(messages, options) {
    var response = await fetch('/api/hub/tutor', {
      method: 'POST', credentials: 'same-origin', cache: 'no-store',
      headers: {'Content-Type': 'application/json'}, body: JSON.stringify({messages: messages})
    });
    if (!response.ok) {
      var error = new Error('Tutor request failed');
      error.code = response.status === 429 ? 'rate_limited' : response.status === 403 || response.status === 503 ? 'not_granted' : 'request_failed';
      throw error;
    }
    var reader = response.body.getReader(), decoder = new TextDecoder(), text = '';
    try {
      while (true) {
        var chunk = await reader.read();
        text += decoder.decode(chunk.value, {stream: !chunk.done});
        if (options && options.onText) options.onText({text: text});
        if (chunk.done) break;
      }
    } catch (error) { await reader.cancel().catch(function () {}); throw error; }
    finally { reader.releaseLock(); }
    return {text: text};
  }
  var db = {
    doc: function (path) {
      var work = /^members\/([^/]+)\/work\/([^/]+)$/.exec(path);
      var url = 'doc/' + path.split('/').map(encodeURIComponent).join('/');
      return {
        get: function () {
          if (!work) return request(url).then(snapshot);
          return workList(work[1]).then(function (items) {
            var exists = Object.prototype.hasOwnProperty.call(items, work[2]);
            return snapshot({exists: exists, data: exists ? items[work[2]] : null});
          });
        },
        set: function (body) {
          if (work) delete workCache[work[1]];
          return request(url, body).finally(function () { if (work) delete workCache[work[1]]; });
        },
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
  window.claude = {use: function (name) { if (name === 'sample') return request('me').then(function (me) { return me.tutor ? sample : null; }); return Promise.resolve(name === 'user' ? user : name === 'db' ? db : null); }};
})();
