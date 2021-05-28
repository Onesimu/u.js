u.id = document.getElementById.bind(document)
// u.tag = document.getElementsByTagName.bind(document)
// u.q = document.querySelectorAll.bind(document)
u.qi = document.querySelector.bind(document)
u.bd = document.body

u.path = location
u.fs = localStorage

const db = {}
db.set = function(val) {
  Object.assign(db, val)
  u.fs.db = JSON.stringify(db)
}
u.db = db

Event.prototype.i = function(){ return this.target }

Element.prototype.on = function(i, t) {
  if (u(i) == 'function') return this.addEventListener('click', i)
  this.addEventListener(i, t)
}

Element.prototype.i = function(k, v) {
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => u.va(v) && this.i(k, v))
    return this
  }

  if (k && u.va(v)) {
    // v === false ? this.removeAttribute(k) : this.setAttribute(k, v)
    if (v === -1) return this.getAttribute(k) ? this.removeAttribute(k) : this.setAttribute(k, 1), this
    if (v === false) return this.removeAttribute(k), this
    if (v === true) return this.setAttribute(k, 1), this

    if (v || v === 0) return this.setAttribute(k, v), this
    return this
  }
  // Array.from(this.attributes).forEach(attr => this.removeAttribute(attr.name))
  if (k) return this.getAttribute(k)
  // return Array.from(this.attributes).map(i => [i.name, i.value]).filter(i => !(['id', 'class', 'style'].includes(i[0]) && i[0].startsWith('data')))
  const im = Array.from(this.attributes).map(i => [i.name, i.value]).filter(i => !(['id', 'class', 'style'].includes(i[0]))).filter(i => !(i[0].startsWith('data')))
  return Object.fromEntries(im)
}

Element.prototype.s = function(k, v) {
  if (typeof k == 'string' && k.includes('{')) {
    const rid = u.mt().toString(36).t(2, 5)
    const kk = k.e('}', `} [${rid}] `)
    this.i(rid, '')
    this.h(3, `<style scoped>${kk}</style>`)
    return this
  }
  if (typeof k == 'string') {
    this.style.cssText += k
    return this
  }
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => this.s(k, v))
    return this
  }
  if (k && u.va(v)) {
    v === false ? this.style.removeProperty(k) : this.style.setProperty(k, v)
    return this
  }
  const c = getComputedStyle(this)
  if (k) return c.getPropertyValue(k)
  return c
}

const e = function(v) {
  if (v === void 0) {
    if ('src' in this) { return this.src }
    if ('value' in this) { return this.value }
    if ('textContent' in this) { return this.textContent }
    return this.innerHTML
  }
  if (u(v) == 'array') {
    return v.t(i => this.n(i).e())
  }
  if (typeof v == 'object') {
    u.en(v).forEach(([k, v]) => u.va(v) && this.n(k).e(v))
    return this
  }

  if ('src' in this) {this.src = v; return this}
  if ('value' in this) {this.value = v; return this}
  if ('textContent' in this) {this.textContent = v; return this}
}

Element.prototype.h = function(k, v) {
  if (k == '_o') {
    if (v) { this.outerHTML = v; return this }
    return this.outerHTML
  }
  if (u(k) === 'number' && k in [1, 2, 3, 4]) {
    const ps = ['beforebegin', 'afterbegin', 'beforeend', 'afterend']
    if (v) { this.insertAdjacentHTML(ps[k - 1], v); return this }
    return this
  }
  if (k == 'html' || k == '_h') {
    if (v) { this.innerHTML = v; return this }
    return this.innerHTML
  }
  // if (k === void 0) { return this.innerHTML }
  if (u(k) == 'string' && k.startsWith('<')) { this.innerHTML = k; return this }
  return e.bind(this)(k)
}


Element.prototype.n = function(k, v) {
  if (k === void 0) { return this.parentNode }
  if (typeof k === 'number') { return this.children[k] }
  // if (k == '_p') { return this.parentNode }
  // if (k == '_c') { return Array.from(this.children) }
  if (k == '_b') { return Array.from(this.parentNode.children) }
  if (k.startsWith('#') || k.startsWith('[')) return this.shadowRoot ? this.shadowRoot.querySelector(k) : this.querySelector(k)
  if (/^[a-z]\d+$/.test(k)) return this.shadowRoot ? this.shadowRoot.querySelector('#' + k) : this.querySelector('#' + k)
  const ql = this.shadowRoot ? this.shadowRoot.querySelectorAll(k) : this.querySelectorAll(k)
  return Array.from(ql)
}

const env = {}
const ua = navigator.userAgent.toLowerCase()
const isWeixin = ua.indexOf('micromessenger') != -1
const agt = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
env.rt = isWeixin ? 'wx' : 'web'
env.os = agt ? 'i' : 'a'
// const p = navigator.platform
// const isPC = p.indexOf("Win") > -1
// // const isPC = p.indexOf("Win") > -1 || p.indexOf("Mac") > -1 || p.indexOf("Linux") > -1 || p.indexOf("X11") > -1
// const isMob = /(iPhone|iPad|iOS|Android)/i.test(navigator.userAgent)
u.env = env

const go = (href, body, cfg) => {
  if(!href) return u.path.hash = '/index'
  if(href == 0) return history.reload()
  if(href == -1) return history.go(-1)
  const search = body ? '?' + u.qs(body) : ''
  const url = href + search

  if (cfg && cfg.o) return window.open(url)
  const jp = ((cfg && cfg.r) ? u.path.replace : u.path.assign).bind(u.path)
  if (href.startsWith('http') || href.startsWith('/')) return jp(url)
  return jp('#/' + url)
}
u.go = go

u.web = function(i, t, e){
  return '<table><tr><td>' + u.i(i).e(',', '<td>').e('\n', '\n<tr><td>')
}
