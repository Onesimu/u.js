import './u.js'
// import './ut.js'
import './web.js'
import './ui.js'
// import './vue.js'
import './net.js'

import { vm } from './vm.js'

async function init() {
  const path = u.path.hash.t('?')[0].t(2) || u.sq(u.path.search.t(1)).hash || u.disk.hash || 'index'
  if (!path) {return}
  u.path.hash = '/' + path
  u.disk.hash = u.path.hash.replace('#', '')

  if (u.id('pg')) {
    u.id('pg').h('')
  } else {
    const html = `<div id="pg" class="pg"></div>`
    document.body.insertAdjacentHTML(`beforeend`, html);
  }

  try {pgdata(path)} catch (e) {log(e)}
}

import { qht } from './dev/qht.js'
u.qht = qht
import { qcs } from './dev/qcs.js'
u.qcs = qcs

async function pgdata(path) {
  var rs = {cfg: {}, db: {}, fn: {}}

  const j = u.path.search.endsWith('j')
  const c = u.path.search.endsWith('c')
  if(j || c) {
    if (j) {
      const data = await u.net.get('data.json')
      const { trans } = await import('./to.js')
    }
    if (c) {
      const dt = await u.net.get('data.css', 0, {text: 1})
      const { trans, jn } = await import('./figma.js')
      const data = jn(dt)
    }
    data.rules = rs
    data.config = rs.config
    data.name = path.slice(path.lastIndexOf('/') + 1)
    const html = trans(data)
    const htm = html.replace(/rpx/g, 'px')
    u.id('pg').insertAdjacentHTML(`beforeend`, htm);
    return
  }

  const tpl = await u.net.get('./pg/' + path + '.vue', null, {text: true})
  const ht = tpl.match(/\<template\>([\s\S]+?)\<\/template\>/)[1]
  const css = tpl.match(/\<style.*?\>([\s\S]+?)\<\/style\>/)[1]
  const html = ['<tpl>', qht(ht.t()).e(/>\s+</g, '><'), '</tpl>', '<style scoped>', qcs(css).replace(/rpx/g, 'px'), '</style>'].join('\n')
  const code = tpl.match(/\<script.*?\>([\s\S]+?)\<\/script\>/)
  if(code?.[1]){
    const ce = code[1].replace(/export[\s\S]*/, 'rs')
    rs = eval(ce)
  }
  u.id('pg').insertAdjacentHTML(`beforeend`, html);

  const hashsearch = u.path.hash.split('?')[1]
  const props = hashsearch ? sq(hashsearch) : {}
  const search = u.sq(u.path.search.slice(1))

     // Object.assign(rs.db, u.db)
      // Object.assign(rs.db, props)
      // Object.assign(rs.db, search)

  vm(rs).bind(rs)()

  u.id('pg').addEventListener('click', u.click.bind(rs))
}

window.addEventListener("load", init)

window.addEventListener('hashchange', init)
