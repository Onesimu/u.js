// const src = function(path) {
//   var script = document.createElement('script')
//   // script.async = false
//   script.src = path
//   document.head.appendChild(script)
// }

// const src = function (path) { document.write('<script src="' + path + '"></sc' + 'ript>'); }

const script = code => {
  const tag = document.createElement("script");
  // tag.appendChild(document.createTextNode(code));
  tag.innerHTML = code
  document.head.appendChild(tag);
}

const style = code => {
  document.head.insertAdjacentHTML(`beforeend`, `<style>${code}</style>`)
}

async function xfetch(url) {
  const code = await u.net.get(url, null, {text: true})
  if(url.endsWith('html')){
    const js = code.match(/\<script\>([\s\S]+?)\<\/script\>/g)
    js.forEach(it => script(it.replace('<script>', '').replace(/<\/script>/, '')))
    const css = code.match(/\<style\>([\s\S]+?)\<\/style\>/g)
    css.forEach(it => style(it.replace('<style>', '').replace('</style>', '')))
  } else if(url.endsWith('js')){
    script(code)
  } else if(url.endsWith('css')){
    style(code)
  }
}

function ximport(paths) {
  const all = Object.entries(paths).map(it => it[1].path[0]).map(it => xfetch(it))
  return Promise.all(all)
}

u.csx = {}
u.rules = {
  config: {},
  funs: {},
  db: {
    set(val) {
      Object.assign(u.rules.db, val)
      u.csx.dom(u.rules.dom)
    }
  }
}

const list = rs => {
  const sr = document.body
  u.en(rs.list).forEach(([k, v]) => {
    const s = rs.db[k]
    const r = sr.n('#' + k)
    if (!r) return
    const tpl = r.n('_c')[0].n('_o')
    // const d = new DOMParser().parseFromString(rs.h, 'text/html').querySelector('.' + k)
    // const tpl = d.i("_o")
    // const pi = d.parentNode.className

    const h = s.map((i, t) => tpl).join('')

    // const p = sr.n('.' + pi)
    const p = r
    // sr.n('.' + k).forEach(i => i.remove())
    // p.n(3, h)
    p.n('_h', h)
    // o(p, h)
    // sr.n('.' + k).forEach((i, t) => i.i('_i', t))
    // sr.q('.' + k).forEach((i, t) => i.i('a', ''))

    // u.en(v).forEach(([e, n]) => {
    //   if (e == k) {
    //     sr.n('.' + k).forEach((i, t) => n.forEach(a => i.i(a.slice(0, 3), s[t][a])))
    //     return
    //   }
    //   const l = p.n('.' + e)
    //   l.forEach((i, t) => {
    //     if (n === 0) return i.i('_t', s[t])
    //     const v = s[t][n]
    //     o(i, t, n, v)
    //     if ('src' in i) { i.src = v; return }
    //     i.i('_t', v)
    //   })
    // })

    const c = Array.from(sr.n('#' + k).n('_c'))
    // o(k, v,  c)
    if(v === 0) return c.forEach((i, t) => i.i('_t', s[t]))
    c.forEach((i, t) => v.e(a => i.i(a, s[t][a])))
  })
}

async function initCSX() {
  const path = u.path.hash.split('?')[0].replace('#', '') || u.sq(u.path.search.slice(1)).hash ||
    localStorage.hash || 'index'
  if (!path) {return}
  u.path.hash = path

  if (u.id('pg')) {
    u.csx.remove()
  } else {
    const html = `<div id="pg" class="pg"></div>`
    document.body.insertAdjacentHTML(`beforeend`, html);
  }

  if (u.tag('base')[0]) {
    u.tag('base')[0].setAttribute('href', './')
  } else {
    document.head.insertAdjacentHTML(`beforeend`, `<base href="./" />`)
  }

  if (!u.id('pub')) {
    const pub = await u.net.get('app.css', null, {text: true})
    pub && document.head.insertAdjacentHTML(`beforeend`, `<style id="pub">${pub.replace(/rpx/g, 'px')}</style>`)
  }

  if (!u.funs) {
    const pathname = u.path.pathname
    var url = pathname.replace('index.html', 'rule.js')
    if(pathname.endsWith('.html')){
      // url = pathname.replace('.html', 'rule.js')
      url = pathname.slice(0, pathname.lastIndexOf('/') + 1) + 'rule.js'
    } else
    if(pathname.endsWith('/')){
      url = pathname + 'rule.js'
    }
    const code = await u.net.get(url, null, {text: true})
    if(code){
      const rule = eval(code.replace(/export(\s+){([\s\S]*?)rules([\s\S]*?)}/, 'rules'))
      u.funs = rule.funs
      // u.db = rule.db
      Object.assign(u.db, rule.db)

      rule.paths && await ximport(rule.paths)
      rule.funs.init && await rule.funs.init(path)
    }

  }

  try {
    pgdata(path)
  } catch (e) {
    log(e)
  }
}

// import qcss from './node/css/qcss-web.js'
// import h from './node/html/index.js'
import { qht } from './qht.js'
u.qht = qht
import { qcs } from './qcs.js'
u.qcs = qcs

const str = e => typeof e == 'string'
const num = e => typeof e == 'number'

async function pgdata(path) {
  u.tag('base')[0].setAttribute('href', `./${path}/`)

  u.rules = {cfg: {}, db: {}, fn: {}}

  // const code = await u.net.get('rule.js', null, {text: true})
  // if(code){
  //   u.rules = eval(code.replace(/export(\s+){([\s\S]*?)rs([\s\S]*?)}/, 'rs'))
  // }

  document.title = u.rules.cfg?.title || '首页'

  const j = u.path.search.endsWith('j')
  const c = u.path.search.endsWith('c')
  if (j) {
    const data = await u.net.get('data.json')
    const { trans } = await import('./to.js')
    data.config = u.rules.config
    data.name = path.slice(path.lastIndexOf('/') + 1)
    const html = trans(data)
    u.rules.html = html.replace(/rpx/g, 'px')
  } else if (c) {
    const data = await u.net.get('data.css', 0, {text: 1})
    const { trans, jn } = await import('./to3.js')
    const json = jn(data)
    json.rules = u.rules
    json.config = u.rules.config
    json.name = path.slice(path.lastIndexOf('/') + 1)

    const html = trans(json)
    u.rules.html = html.replace(/rpx/g, 'px')
  } else {
    const tpl = await u.net.get('in.html', null, {text: true})
    const ht = tpl.match(/\<tpl\>([\s\S]+?)\<\/tpl\>/)[1]
    const css = tpl.match(/\<style.*?\>([\s\S]+?)\<\/style\>/)[1]
    const html = ['<tpl>', qht(ht.t()), '</tpl>', '<style>', qcs(css).replace(/rpx/g, 'px'), '</style>'].join('\n')
    const code = tpl.match(/\<script.*?\>([\s\S]+?)\<\/script\>/)
    if(code?.[1]){
      u.rules = eval(code[1].replace(/export(\s+){([\s\S]*?)rs([\s\S]*?)}/, 'rs'))
    }
    u.rules.html = html
  }

  // const style = await u.net.get('style.css', null, {text: true})
  // // style && u.id('pg').insertAdjacentHTML(`beforeend`, `<style>${style}</style>`)
  // style && (u.rules.html += `<style>${style.replace(/rpx/g, 'px')}</style>`)
  // // u.rules.html += `<style>@import url("style.css")</style>`

  u.csx.render(path)

  // u.paths && await ximport(u.paths)

  const hashsearch = u.path.hash.split('?')[1]
  const props = hashsearch ? sq(hashsearch) : {}
  const search = u.sq(u.path.search.slice(1))
  if (u.rules.db) {
    // Object.assign(u.rules.db, u.db)
    Object.assign(u.rules.db, props)
    Object.assign(u.rules.db, search)

    const rs = u.rules
    const sr = document.body
    u.rules.db.set = val => {
      u.set(rs.db, val)
      // u.en(rs.db).forEach(([k, v]) => k && va(v) && u.id('pg').i(k, v))
      u.en(val).forEach(([k, v]) => va(v) && sr.n('#pg').i(k, v))
      // u.en(val).forEach(([k, v]) => str(v) && sr.n('#pg').s('--' + k,  '"'+v+'"'))
      // rs.dom && u.en(rs.dom).forEach(([k, v]) => sr.n('#' + k).i('_t', rs.db[v]))
      // rs.dom && rs.dom.t(',').forEach((k) => sr.n('#' + k).i('_t', rs.db[k]))

      if (u.en(val).length > 1) return
      if (va(u.en(val)[0][1])) return
      list(rs)
    }
    u.rules.db.set(rs.db)
  }

  u.rules.fn.init && await u.rules.fn.init(path)

  // u.rules.net ? u.csx.net(u.rules.net) : u.csx.bind()

  u.csx.bind()
  // u.csx.redraw(path)
}

// initCSX()
window.addEventListener("load", initCSX)

window.addEventListener('hashchange', function(e) {
  // log(e.oldURL, e.newURL)
  localStorage.hash = u.path.hash.replace('#', '')
  u.csx.remove()

  // u.tag('base')[0].setAttribute('href', './')
  // initCSX();
  // u.path.reload()

  const path = u.path.hash.split('?')[0].replace('#', '') || u.sq(u.path.search.slice(1)).hash ||
    localStorage.hash || 'index'
  if (!path) {return}

  const html = `<div id="pg" class="p"></div>`
  document.body.insertAdjacentHTML(`beforeend`, html);
  pgdata(path)
}, false);

u.csx.bind = function() {
  // u.rules.list && u.csx.list(u.rules.list)
  // u.rules.dom && u.csx.dom(u.rules.dom)
  // u.rules.style && u.csx.style(u.rules.style)
  // u.rules.event && u.csx.event(u.rules.event)

  u.id('pg').addEventListener('click', u.click.bind(u.rules))
  // u.rules.click && u.id('pg').addEventListener('click', click)
}

u.csx.render = function render(path) {
  const html = u.rules.html
  u.id('pg').insertAdjacentHTML(`beforeend`, html);
}

u.csx.remove = function() {
  document.querySelector('#pg').remove();
  // u.csx.event(u.rules.event, false)
}

u.csx.redraw = function(path) {
  u.csx.remove()
  u.csx.render(path)
  u.csx.bind()
}
