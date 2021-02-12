u.id = document.getElementById.bind(document)
u.tag = document.getElementsByTagName.bind(document)
// u.q = document.querySelectorAll.bind(document)
u.qi = document.querySelector.bind(document)

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

Event.prototype.i = function(){return this.target}

Element.prototype.on = Element.prototype.addEventListener

Element.prototype.i = function(k, v) {
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => u.va(v) && this.i(k, v))
    return this
  }

  if (k == 'text' || k == '_t') {
    if (u.va(v)) { this.textContent = v; return this }
    return this.textContent
  }

  if (k && u.va(v)) {
    // v === false ? this.removeAttribute(k) : this.setAttribute(k, v)
    if (v === -1) return this.getAttribute(k) ? this.removeAttribute(k) : this.setAttribute(k, 1), this
    if (v === false) return this.removeAttribute(k), this
    if (v === true) return this.setAttribute(k, 1), this

    if (!v && v !== 0) return
    // if (!v) return
    return this.setAttribute(k, v), this.style.setProperty('--' + k, '"' + v + '"'), this
    // if (typeof v === 'number') return this.setAttribute(k, v), this
    // // typeof v === 'string' && isFinite(v) && this.setAttribute(k, v)
    // if (typeof v === 'string') this.setAttribute(k, v), this.style.setProperty('--' + k, '"' + v + '"')
    // return this
  }
  return this.getAttribute(k)
}

Element.prototype.e = function(v) {
  if (v === void 0) {
    if ('src' in this) { return this.src }
    if ('value' in this) { return this.value }
    if ('textContent' in this) { return this.textContent }
  }
  if (u(v) == 'array') {
    return v.t(i => this.i1(i).e())
  }
  if (typeof v == 'object') {
    u.en(v).forEach(([k, v]) => u.va(v) && this.i1(k).e(v))
    return this
  }

  if ('src' in this) {this.src = v; return this}
  if ('value' in this) {this.value = v; return this}
  if ('textContent' in this) {this.textContent = v; return this}
}

Element.prototype.s = function(k, v) {
  if (typeof k == 'object') {
    u.en(k).forEach(([k, v]) => this.s(k, v))
    return this
  }
  if (k && u.va(v)) {
    v === false ? this.style.removeProperty(k) : this.style.setProperty(k, v)
    return this
  }
  const c = getComputedStyle(this)
  return k ? c.getPropertyValue(k) : c
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
  if (k !== void 0) { this.innerHTML = k; return this }
  return this.innerHTML
}

Element.prototype.n = function(k, v) {
  if (k == '_p') { return this.parentNode }
  if (k == '_c') { return Array.from(this.children) }
  if (k == '_b') { return Array.from(this.parentNode.children) }
  if (k.startsWith('#') || k.startsWith('[')) return this.shadowRoot ? this.shadowRoot.querySelector(k) : this.querySelector(k)
  if (/^[a-z]\d+$/.test(k)) return this.shadowRoot ? this.shadowRoot.querySelector('#' + k) : this.querySelector('#' + k)
  const ql = this.shadowRoot ? this.shadowRoot.querySelectorAll(k) : this.querySelectorAll(k)
  return Array.from(ql)
}

Element.prototype.i1 = function(k, v) {
  return this.shadowRoot ? this.shadowRoot.querySelector('#' + k) : this.querySelector('#' + k)
}

const env = {}
const ua = navigator.userAgent.toLowerCase()
const isWeixin = ua.indexOf('micromessenger') != -1
const agt = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
env.rt = isWeixin ? 'wx' : 'web'
env.os = agt ? 'i' : 'a'
u.env = env

const go = (href, body, config) => {
  if(!href) return u.path.hash = '/index'
  if(href == 0) {return history.reload()}
  if(href == -1) {return history.go(-1)}
  const search = body ? '?' + u.qs(body) : ''
  const url = href + search
  if (href.startsWith('http') || href.startsWith('/')) {
    return u.path.assign(url)
  }
   // if(cfg && cfg.r){
   //    vapp.$router.replace({
   //      path: url,
   //      query: search
   //    })
   //  }
  u.path.hash = '/' + url
}
u.go = go

const click = function(e) {
  const id = e.target.id
  const rules = this.rs || this

  rules.fn[id]?.(e.target, e)
  // if (rules.click) {
  //   const handler = rules.funs[rules.click[id]]
  //   handler && handler.bind(this)(e)
  // }
}
u.click = click
