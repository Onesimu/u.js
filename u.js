// if (this) {this.g = this}
window.g = window

g.o = console.log.bind(console)

const _u = function (i, t, e) {
  const a = Object.prototype.toString.call(i)
  return a.slice(8, -1).toLowerCase()
  // return a.replace(/\[object (\w+)\]/, "$1").toLowerCase()
}

g.u = function(i, t, e) {
  return _u(i, t, e)
}

u.i = Object.getPrototypeOf
// u.t = JSON.stringify
u.t = function (i, t, e) {
  if(i === void 0) return ''
  if(i === null) return ''
  if(['function', 'regexp'].includes(u(i))) return i.toString()
  if('string' === u(i)) return JSON.parse(i, t, e)
  // date
  return JSON.stringify(i, t, e)
}

// u.e = Object.assign
u.e = function(i, t, e) {
  return u.ne(u.en(i).filter(k => k[0] != t))
}
u.n = n => Array.from(Array(n).keys())
u.n1 = n => u.n(n + 1).slice(1)

// Object.prototype.e = function(i, t, e) {
//   return u.ne(u.en(this).filter(k => k[0] != i))
// }

// Object.prototype.i = function(i, t, e) {
//   return this[i] || this
// }

// Object.prototype.n = function(i, t, e) {
//   return Object.entries(this)
// }

// Object.prototype.t = function(i, t, e) {
//   return Object.entries(this)
// }

// Function.prototype.e = Function.prototype.apply
Function.prototype.i = Function.prototype.call
Function.prototype.t = Function.prototype.bind
// Function.prototype.n = function(...i){
//   if(i) return new this(...i)
//   return this.length() }
Function.prototype.n = function(...i){ return new this(...i) }

u.va = v => ['string', 'boolean', 'number'].includes(typeof v)

const replaceAll = function(str, newStr){

  // If a regex pattern
  if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
    return this.replace(str, newStr);
  }

  // If a string
  return this.replace(new RegExp(str, 'g'), newStr);

}

String.prototype.i = function(i, t, e) {
  if (i === void 0) return this.length
  if (typeof i == 'number') return i < 0 ? this[this.length + i] : this[i]
  if (u(i) == "regexp") return this.match(i)
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
  // if (t === 1) return this.replace(i, t)
  // return this.replace(i, t)
  return replaceAll.bind(this)(i, t)
}
String.prototype.t = function(i, t, e) {
  if (i === void 0) return this.trim()
  if (typeof i == 'number') return this.slice(i, t, e)
  if (t === 1) return [this.slice(0, this.indexOf(i)), this.slice(this.indexOf(i + 1))]
  return this.split(i)
}
String.prototype.n = function(i, t, e) {
  // if (i === void 0) return String.raw({ raw: this })
  if (typeof i == 'number') return this.repeat(i, t, e)
  // padStart
  if (u(i) == "regexp") return this.search(i)
  if (t === 0) return this.startsWith(i)
  if (t === -1) return this.endsWith(i)
  if (t === !0) return this.lastIndexOf(i)
  return this.indexOf(i)
}
Array.prototype.t = function(i, t, e) {
  if (i === void 0) return this.filter(Boolean)
  if (typeof i == 'number') return this.slice(i, t, e)
  if (u(i) == "array") return this.concat(i)
  if (t === 1) return this.reduce(i, t, e)
  // if (typeof i == "function" && i.length == 2) return this.reduce(i, t, e)
  if (typeof i == "function") return this.map(i, t, e)
  return this.join(i)
}
Array.prototype.n = function(i, t, e) {
  // if (i === void 0) return this.entries()
  // if (typeof i == 'number') return this.fill(i, t, e)
  if (t === 1) return this.findIndex(i, t, e)
  if (typeof i == "function") return this.filter(i, t, e)
  return this.indexOf(i)
}
Array.prototype.e = function(i, t, e) {
  if (i === void 0) return this.pop(), this
  if (typeof i == 'number') return this.splice(i, t, e), this
  // if (t === !0) return this.sort(i)
  // if (t === !1) return this.reverse()
  // if (t === 0) return this.unshift(i)
  // if (t === 1) return this.shift()
  if (typeof i == "function") return this.forEach(i, t, e), this
  return this.push(i), this
}
Array.prototype.i = function(i, t, e) {
  // if(!this.length) return this
  if (i === void 0) return this.length
  if (typeof i == 'number') return i < 0 ? this[this.length + i] : this[i]
  if (typeof i == "function") return this.reduce(i, t, e)
  return this.includes(i)
}

// u.eq = function(i, t, e) {return i == t}
// u.ee = function(i, t, e) {return i === t}  Object.is

u.log = o
u.jn = JSON.parse
u.nj = JSON.stringify

u.set = Object.assign
u.en = Object.entries
u.ne = Object.fromEntries

// function sleep(time) {
//   return new Promise((resolve) => setTimeout(resolve, time * 1000))
// }

function tm(t = Date.now()) {
  const f = new Date(t).getTimezoneOffset() * 60000
  return new Date(t - f).toJSON().replace('T', ' ').replace(/\..*/, '')
}

// u.ut = { sleep,  time }

u.tm = tm
u.set(u.tm, {
  ms: 1,
  s: 1000, // second
  m: 1000 * 60, // minute
  h: 1000 * 60 * 60, // hour
  d: 1000 * 60 * 60 * 24 // day
})

u.mt = function(i, t, e){
  if (i === void 0) return Math.random()
  return Math.floor(i)
}

u.set(u.mt, {
  a: (a, b) => a + b, // add
  s: (a, b) => a - b, // substract
  m: (a, b) => a * b, // multiply
  d: (a, b) => a / b, // divide
  e: (a, b) => a % b, // rem mod
})

// u.tm = e => {
//   setTimeout(e, 1000)
// }
