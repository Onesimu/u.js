u.id = document.getElementById.bind(document)
u.tag = document.getElementsByTagName.bind(document)
// u.q = document.querySelectorAll.bind(document)
// u.qi = document.querySelector.bind(document)

// const va = v => ['string', 'boolean', 'number'].includes(typeof v)

u.path = location
u.disk = localStorage

function bind(fn, args) {
  return function(it) {
    return fn.bind(it)(args)
  }
}
function ck(qs) {
  return Object.fromEntries(qs.split('; ').map(bind(''.split, '=')))
}

const db = {}
const cdb = u.disk.db ? JSON.parse(u.disk.db) : {}
Object.assign(db, cdb)

db.set = function(val) {
  Object.assign(db, val)
  u.disk.db = JSON.stringify(db)
}

const cookie = document.cookie && ck(document.cookie)
Object.assign(db, cookie)
// db.cookie = cookie
u.disk.db = JSON.stringify(db)

u.db = db

function qs(obj) {
  if (!obj) {return ''}
  return Object.entries(obj).map(bind([].join, '=')).join('&')
}

function sq(qs) {
  if (!qs) {return {}}
  return Object.fromEntries(qs.split('&').map(bind(''.split, '=')))
}

u.qs = qs
u.sq = sq

Element.prototype.on = Element.prototype.addEventListener

Element.prototype.i = function(k, v) {
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => va(v) && this.i(k, v))
    return this
  }

  if ('src' in this && k == 'src') {
    this.src = v
  }

  if (k == 'text' || k == '_t') {
    if (va(v)) { this.textContent = v; return this }
    return this.textContent
  }

  if (k && va(v)) {
    // v === false ? this.removeAttribute(k) : this.setAttribute(k, v)
    v === false && this.removeAttribute(k)
    typeof v == 'string' && this.style.setProperty('--' + k, '"' + v + '"')
    typeof v == 'number' && this.setAttribute(k, v)
    return this
  }
  return this.getAttribute(k)
}

Element.prototype.s = function(k, v) {
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => this.s(k, v))
    return this
  }
  if (k && va(v)) {
    v === false ? this.style.removeProperty(k) : this.style.setProperty(k, v)
    return this
  }
  const c = getComputedStyle(this)
  return k ? c[k] : c
}

Element.prototype.h = function(k, v) {
  if (k == '_o') {
    if (v) { this.outerHTML = v; return this }
    return this.outerHTML
  }
  if (k in [1, 2, 3, 4]) {
    const ps = ['beforebegin', 'afterbegin', 'beforeend', 'afterend']
    if (v) { this.insertAdjacentHTML(ps[k - 1], v); return this }
    return this
  }
  if (k == 'html' || k == '_h') {
    if (v) { this.innerHTML = v; return this }
    return this.innerHTML
  }
  if (k) { this.innerHTML = k; return this }
  return this.innerHTML
}

Element.prototype.n = function(k, v) {
  if (k == '_p') { return this.parentNode }
  if (k == '_c') { return Array.from(this.children) }
  if (k == '_b') { return Array.from(this.parentNode.children) }
  if(k.startsWith('#') || k.startsWith('[')) return this.shadowRoot ? this.shadowRoot.querySelector(k) : this.querySelector(k)
  return this.shadowRoot ? this.shadowRoot.querySelectorAll(k) : this.querySelectorAll(k)
}

const env = {}
const ua = navigator.userAgent.toLowerCase()
const isWeixin = ua.indexOf('micromessenger') != -1
const agt = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
env.rt = isWeixin ? 'wx' : 'web'
env.os = agt ? 'i' : 'a'
u.env = env

const go = (href, body, config) => {
  if(href == -1){
    history.go(-1)
    return
  }
  const search = body ? '?' + u.net.qs(body) : ''
  const url = href + search
  if (href.startsWith('http') || href.startsWith('/')) {
    u.path.assign(url)
  }
}
u.go = go

const click = function(e) {
  const id = e.target.id
  const rules = this.rules || this

  rules.fn[id]?.(e.target, e)
  // if (rules.click) {
  //   const handler = rules.funs[rules.click[id]]
  //   handler && handler.bind(this)(e)
  // }
}
u.click = click
