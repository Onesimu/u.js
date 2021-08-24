function _fet(url, body, cfg) {
  const ContentType = {
    jn: 'application/json',
    fm: 'application/x-www-form-urlencoded',
    fd: 'multipart/form-data'
  }

  const init = {
    method: 'post',
    credentials: 'include',
  }

  if (body instanceof FormData) {
    Object.assign(init, {body})
  } else if (cfg && cfg.fm) {
    Object.assign(init, {headers: {'Content-Type': ContentType.fm}})
    body && Object.assign(init, {body: u.qs(body)})
  } else {
    Object.assign(init, {headers: {'Content-Type': ContentType.jn}})
    body && Object.assign(init, {body: JSON.stringify(body)})
  }

  cfg && cfg.headers && Object.assign(init, cfg.headers)
  return fetch(url, init).then(res => {
    if (res.status == 200) { //响应成功
      if (cfg && cfg.text) {
        return res.text()
      } else if (cfg && cfg.blob) {
        return res.blob()
      } else {
        return res.json()
      }
    }
    const error = new Error(res.statusText);
    error.data = res;
    throw error
  }).catch(e => console.error(e))
}

function _get(url, body, cfg) {
  var l = url
  if (!url.includes('?') && body) {
    l += '?' + (body ? u.qs(body) : '')
  }
  const init = {
    credentials: 'include',
  }
  cfg && cfg.headers && Object.assign(init, cfg.headers)
  return fetch(l, init).then(res => {
    if (res.status == 200) {
      if (cfg && cfg.text) {
        return res.text()
      } else if (cfg && cfg.blob) {
        return res.blob()
      } else {
        return res.json()
      }
    }
    const error = new Error(res.statusText);
    error.data = res;
    throw error
  }).catch(e => console.error(e))
}

u.net = {}
u.net.get = _get
u.net.fet = _fet
