const script = code => {
  const tag = document.createElement("script");
  // tag.appendChild(document.createTextNode(code));
  tag.innerHTML = code
  document.head.appendChild(tag);
}

const style = code => {
  document.head.insertAdjacentHTML(`beforeend`, `<style>${code}</style>`)
}

const scr =  (src, fn) => {
  var script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
  script.onload = fn
}
const scri =  (src, fn) => import(src)

scr('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/livescript-min.js')

const init = async () => {
  await scri('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/web.js')
  import('./qcs.js').then(r => {
    u.qcs = r.qcs
    u.bd.n('style').e(it => it.h(u.qcs))
    window.ls = require("livescript")
    window.onload = function(){ ls.go() }
  })
}
scr('https://static-mp-12b08abd-474c-42c9-8737-5f9e0fdc300a.next.bspapp.com/lib/u.js', init)

