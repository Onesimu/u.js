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

    const h = s.map((i, t) => tpl).join('')

    // const p = sr.n('.' + pi)
    const p = r
    // sr.n('.' + k).forEach(i => i.remove())
    // p.n(3, h)
    p.n('_h', h)
    // o(p, h)
    // sr.n('.' + k).forEach((i, t) => i.i('_i', t))
    // sr.q('.' + k).forEach((i, t) => i.i('a', ''))

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

  try {
    pgdata(path)
  } catch (e) {
    log(e)
  }
}

import { qht } from './qht.js'
u.qht = qht
import { qcs } from './qcs.js'
u.qcs = qcs

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
    const { trans, jn } = await import('./to.js')
    const json = jn(data)
    json.rules = u.rules
    json.config = u.rules.config
    json.name = path.slice(path.lastIndexOf('/') + 1)

    const html = trans(json)
    u.rules.html = html.replace(/rpx/g, 'px')
  } else {
    const tpl = await u.net.get('in.html', null, {text: true})
    const ht = tpl.match(/\<template\>([\s\S]+?)\<\/template\>/)[1]
    const css = tpl.match(/\<style.*?\>([\s\S]+?)\<\/style\>/)[1]
    const html = ['<tpl>', qht(ht.t()), '</tpl>', '<style scoped>', qcs(css).replace(/rpx/g, 'px'), '</style>'].join('\n')
    const code = tpl.match(/\<script.*?\>([\s\S]+?)\<\/script\>/)
    if(code?.[1]){
      // const ce = code[1].replace(/export(\s+){([\s\S]*?)rs([\s\S]*?)}/, 'rs')
      const ce = code[1].replace(/export(\s+)([\s\S]*?)rs([\s\S]*?)\)/, 'rs')
      u.rules = eval(ce)
    }
    u.rules.html = html
  }

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
      u.en(val).forEach(([k, v]) => va(v) && sr.n('#pg').i(k, v))

      if (u.en(val).length > 1) return
      if (va(u.en(val)[0][1])) return
      list(rs)
    }
    u.rules.db.set(rs.db)
  }

  u.rules.fn.init && await u.rules.fn.init(path)

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
  u.id('pg').addEventListener('click', u.click.bind(u.rules))
}

u.csx.render = function render(path) {
  const html = u.rules.html
  u.id('pg').insertAdjacentHTML(`beforeend`, html);
}

u.csx.remove = function() {
  document.querySelector('#pg').remove();
}

u.csx.redraw = function(path) {
  u.csx.remove()
  u.csx.render(path)
  u.csx.bind()
}
