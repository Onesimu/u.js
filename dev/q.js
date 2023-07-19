const scr =  (src, fn) => {
  var script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
  if (!fn) return
  script.onload = fn
}

const init = async () => {
  await import('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/web.js')
  import('./qcs.js').then(r => {
    u.qcs = r.qcs
    u.bd.n('style').e(it => it.h(u.qcs))
    window.ls = require("livescript")
    // window.onload = function(){ ls.go() }
    ls.go()
  })
}

scr('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/livescript-min.js')
scr('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/u.js', init)

