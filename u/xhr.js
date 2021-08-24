const then = function(win, fail) {
  // this.addEventListener("load", win.bind(this.response, this.response), false)
  this.addEventListener("load", function(e) {
    // u.ui && u.ui.close();
    // log('请求:', e.target, "\n结果:", e.target.response)
    // const res = e.target.responseText
    const res = 'response' in e.target ? e.target.response : e.target.responseText
    const type = e.target.getResponseHeader("Content-Type")
    if (type && type.includes('json')) {
      win(u.t(res))
    } else {
      win(res)
    }
  }, false)

  this.addEventListener("error", fail, false)
  return this
}
// XMLHttpRequest.prototype.then = then

function _get(url, body, cfg) {
  var _url = url
  if (!url.includes('?') && body) {
    _url += '?' + (body ? u.qs(body) : '')
  }
  cfg && cfg.loading && u.ui && u.ui.loading && u.ui.loading()
  const xhr = new XMLHttpRequest()
  const sync = cfg && cfg['sync'] ? false : true
  xhr.open('GET', _url, sync)
  if (cfg && cfg.blob) xhr.responseType = 'blob'
  // xhr.responseType = 'json'

  if(cfg && cfg.headers && cfg.headers.headers){
    Object.entries(cfg.headers.headers).forEach(function(it){
      xhr.setRequestHeader(it[0], it[1])
    })
  }

  xhr.send()
  xhr.then = then
  // u.ui && u.ui.close();
  // log('请求:' + _url, "\n结果:", xhr)
  return cfg && cfg['sync'] ? xhr.response : xhr
}

function _fet(url, body, cfg) {
  const ContentType = {
    jn: 'application/json',
    fm: 'application/x-www-form-urlencoded',
    fd: 'multipart/form-data'
  }
  cfg && cfg.loading && u.ui && u.ui.loading && u.ui.loading()
  const xhr = new XMLHttpRequest()
  const sync = cfg && cfg['sync'] ? false : true
  xhr.open('POST', url, sync)
  xhr.then = then

  // xhr.overrideMimeType('application/json')
  // xhr.responseType = 'json'

  if(cfg && cfg.headers && cfg.headers.headers){
    Object.entries(cfg.headers.headers).forEach(function(it){
      xhr.setRequestHeader(it[0], it[1])
    })
  }

  if (cfg && cfg.fm) {
    xhr.setRequestHeader("Content-Type", ContentType.fm)
    xhr.send(u.qs(body))
  } else if (cfg && cfg.fd) {
    // var jsonData = {};
    // formData.forEach((value, key) => jsonData[key] = value)
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      formData.append(key, body[key]);
    })
    // xhr.setRequestHeader("Content-Type", ContentType.fd)
    xhr.send(formData)
  } else {
    xhr.setRequestHeader("Content-Type", ContentType.jn);
    xhr.send(u.t(body))
  }
  // u.ui && u.ui.close();
  // log('请求:' + url, body, "\n结果:", xhr)
  return cfg && cfg['sync'] ? u.t(xhr.response) : xhr
}

u.net = {}
u.net.get = _get
u.net.fet = _fet
