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

u.mt = {
  a: (a, b) => a + b, // add
  s: (a, b) => a - b, // substract
  m: (a, b) => a * b, // multiply
  d: (a, b) => a / b, // divide
  e: (a, b) => a % b, // rem mod
  r: Math.random
}

// u.tm = e => {
//   setTimeout(e, 1000)
// }
