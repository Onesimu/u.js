function _fet(url, body, config) {
  const ContentType = {
    json: 'application/json;charset=UTF-8',
    form: 'application/x-www-form-urlencoded; charset=UTF-8'
  }

  const init = {
    method: 'post',
    credentials: 'include',
    headers: {'Content-Type': ContentType.json},
  }
  body && Object.assign(init, {body: JSON.stringify(body)})

  config && config.form && Object.assign(init, {
    headers: {'Content-Type': ContentType.form},
  });
  config && config.form && body && Object.assign(init, {body: qs(body)})

  if (u.wx && wx.showLoading) {
    config && config.loading && wx.showLoading({
      title: '加载中',
      mask: true
    });
  }
  config && config.headers && Object.assign(init, config.headers)
  return fetch(url, init).then(res => {
    if (u.wx && wx.hideLoading) {
      res.json().then(d => console.log('请求:' + url, body, "\n结果：", d))
      config && config.loading && wx.hideLoading();
    }

    if (res.status == 200) { //响应成功
      if (config && config.text) {
        return res.text()
      } else if (config && config.blob) {
        return res.blob()
      } else {
        return res.json()
      }
    }
    const error = new Error(res.statusText);
    error.data = res;
    throw error
  }).catch(e => console.log(e))
}

function _get(url, body, config) {
  var l = url
  if (!url.includes('?') && body) {
    l += '?' + (body ? qs(body) : '')
  }
  if (u.wx && wx.showLoading) {
    config && config.loading && wx.showLoading({
      title: '加载中',
      mask: true
    });
  }
  const init = {
    credentials: 'include',
  }
  config && config.headers && Object.assign(init, config.headers)
  return fetch(l, init).then(res => {
    if (u.wx && wx.hideLoading) {
      config && config.loading && wx.hideLoading();
    }

    if (res.status == 200) {
      if (config && config.text) {
        return res.text()
      } else if (config && config.blob) {
        return res.blob()
      } else {
        if (u.wx && wx.hideLoading) {
          res.json().then(d => console.log('请求:' + l, "\n结果：", d))
        }
        return res.json()
      }
    }
    const error = new Error(res.statusText);
    error.data = res;
    throw error
  }).catch(e => console.log(e))
}

u.net = {}
u.net.get = _get
u.net.fet = _fet
