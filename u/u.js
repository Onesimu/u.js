if (globalThis) { globalThis.g = globalThis }
else if (global) { global.g = global }
else if (this) { this.g = this }
else if (window) { window.g = window }

g.o = console.log.bind(console)

const _u = function(i, t, e) {
  const s = typeof i
  if (s != 'object') return s
  return Object.prototype.toString.call(i).slice(8, -1).toLowerCase()
}

g.u = function(i, t, e) { return _u(i, t, e) }

// u.set = Object.assign
u.en = function(i, t, e) {
  if (t === 0) return Object.keys(i, t, e)
  if (t === 1) return Object.values(i, t, e)
  if (u(i) === 'array') return Object.fromEntries(i, t, e)
  return Object.entries(i, t, e)
}

// u.i = Object.getPrototypeOf
// u.t = JSON.stringify
u.t = function(i, t, e) {
  if (i === void 0) return ''
  if (i === null) return ''
  if (['function', 'regexp'].includes(u(i))) return i.toString()
  if (u(i) === 'string') return JSON.parse(i, t, e)
  if (u(i) === 'date') return u.tm(i, t, e)
  return JSON.stringify(i, t, e)
}

// ;['i', 't', 'e', 'n'].forEach(i => Object.defineProperty(Object.prototype, i, { enumerable: false }))

u.i = function(i, t, e) {
  const h = u.en(i[0], 0).t(',') + '\n'
  const b = i.t(i => u.en(i, 1).t(',')).t('\n')
  return h + b
}

// u.e = Object.assign
u.e = function(i, t, e) {
  if (u(t) == 'object') return Object.assign(i, t)
  if (u(t) == 'array') return t.e(n => u.e(i, n)), i
  if (u(t) == 'string' && e === void 0) return (delete i[t]), i
  if (u(t) == 'string' && u(e) == 'string') return (i[t] = i[e]), i
  if (u(t) == 'string' && u(e) == 'function') return (i[t] = e(i[t])), i
}

u.n = function(i, t, e) {
  if (typeof i == 'number') return Array.from(Array(i).keys())
  if (u(i) === 'array') return Array.from(new Set(i));
  if (i.length) return Array.from(i)
}
// u.n0 = n => Array.from(Array(n).keys())
// u.n1 = n => u.n0(n + 1).slice(1)

Function.prototype.n = function(...i) { return new this(...i) }
Number.prototype.t = function(i, t, e) {
  if (i === void 0) return String.fromCharCode(this)
  return this.toFixed(i)
}

u.va = v => ['string', 'boolean', 'number'].includes(typeof v)

String.prototype.i = function(i, t, e) {
  if (i === void 0) return this.length
  if (typeof i == 'number') return i < 0 ? this[this.length + i] : this[i]
  if (u(i) == 'regexp') return this.test(i)
  if (t === 0) return this.startsWith(i)
  if (t === -1) return this.endsWith(i)
  // return this.slice(0, this.indexOf(i))
  return this.includes(i)
}
String.prototype.e = function(i, t, e) {
  if (i === void 0) return this.toLowerCase()
  if (typeof i == 'number') return this.split('').e(i, t, e).join('')
  if (u(i) == 'object') {
    const en = u.en(i)
    var tmp = this
    for (var [k, v] of en) tmp = tmp.replace(new RegExp(k, 'g'), v)
    return tmp
  }
  if (e === 1) return this.replace(i, t)
  return this.replace(u(i) == 'regexp' ? i : new RegExp(i, 'g'), t)
}
String.prototype.t = function(i, t, e) {
  if (i === void 0) return this.trim()
  if (typeof i == 'number') return this.slice(i, t, e)
  if (u(i) == 'regexp') return this.match(i)
  if (t === 1) return [this.slice(0, this.indexOf(i)), this.slice(this.indexOf(i + 1))]
  return this.split(i)
}
String.prototype.n = function(i, t, e) {
  // if (i === void 0) return String.raw({ raw: this })
  if (typeof i == 'number') return this.repeat(i, t, e)
  // padStart
  if (u(i) == 'regexp') return this.search(i)
  // if (t === !0) return this.lastIndexOf(i)
  return this.indexOf(i)
}
Array.prototype.t = function(i, t, e) {
  if (i === void 0) return this.filter(Boolean)
  // if (i === void 0) return Object.fromEntries(this)
  if (typeof i == 'number') return this.slice(i, t, e)
  if (u(i) == 'array') return this.concat(i)
  if (typeof i == 'function') return this.map(i, t, e)
  return this.join(i)
}
Array.prototype.n = function(i, t, e) {
  // if (i === void 0) return Array.from(this.entries())
  if (i === void 0) return this.flat()
  // if (typeof i == 'number') return this.fill(i, t, e)
  if (t === 1) return this.findIndex(i, t, e)
  if (typeof i == 'function') return this.filter(i, t, e)
  return this.indexOf(i)
}
Array.prototype.e = function(i, t, e) {
  if (i === void 0) return this.pop(), this
  if (typeof i == 'number') return this.splice(i, t, e), this
  if (t === !0) return this.sort(i)
  if (i === !1) return this.reverse()
  // if (t === 0) return this.unshift(i), this
  // if (t === 1) return this.shift()
  if (typeof i == 'function') return this.forEach(i, t, e), this
  return this.push(i), this
}
Array.prototype.i = function(i, t, e) {
  // if(!this.length) return this
  if (i === void 0) return this.length
  if (typeof i == 'number') return i < 0 ? this[this.length + i] : this[i]
  if (typeof i == 'function') return this.reduce(i, t, e)
  // if (t === 0) return this.some(i)
  // if (t === 1) return this.every(i)
  return this.includes(i)
}

;['i', 't', 'e', 'n'].forEach(i => Object.defineProperty(Array.prototype, i, { enumerable: false }))

// u.eq = function(i, t, e) {return i == t}
// u.ee = function(i, t, e) {return i === t}  Object.is

function tm(i, t, e) {
  if (t === 1) return new Promise(r => setTimeout(r, i))
  if (typeof i == 'function') return setTimeout(i, t || 1000)
  if (typeof i == 'string') return new Date(i).getTime()
  const d = new Date(i || Date.now())
  return d.toJSON().t(0, 11).e('T', ' ') + d.toString().t(16, 24)
}

u.tm = tm
u.e(u.tm, {
  ms: 1,
  s: 1000, // second
  m: 1000 * 60, // minute
  h: 1000 * 60 * 60, // hour
  d: 1000 * 60 * 60 * 24 // day
})

u.mt = function(i, t, e) {
  if (i === void 0) return Math.random()
  return Math.floor(i)
}

u.e(u.mt, {
  a: (a, b) => a + b, // add
  s: (a, b) => a - b, // substract
  m: (a, b) => a * b, // multiply
  d: (a, b) => a / b, // divide
  e: (a, b) => a % b // rem mod
})

u.qs = function qs(i) {
  if (!i) return ''
  if (u(i) == 'string') return Object.fromEntries(i.split('&').map(it => it.split('=').map(decodeURIComponent)))
  return Object.entries(i).filter(i => u.va(i[1])).map(it => it.join('=')).join('&')
}
