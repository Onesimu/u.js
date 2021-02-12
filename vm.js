const itm = rs => {
  const sr = rs.sr
  u.en(rs.list).forEach(([k, v]) => {
    const r = sr.n('#' + k)
    if (!r) return
    const tpl = r.h('_h')
    // r.i('_li', tpl)
    r['_li'] = tpl.t()
    r.h('')
  })
}

const list = (rs, val) => {
  const sr = rs.sr

  const k = u.en(val)[0][0]
  const v = rs.list[k]

  const r = sr.n('#' + k)
  if (!r) return
  const s = u.en(val)[0][1]
  if(!s.i()) return r.h('')

  const tpl = r['_li'].t()
  // const tpl = r.s('--_li').t().t(1, -1)
  const h = s.map((i, t) => tpl).join('')
  r.h('_h', h)
  // sr.q('.' + k).forEach((i, t) => i.i('a', ''))

  const c = r.n('_c')
  c.e((i, t) => i.i('_i', t))
  if(v === 0) return c.e((i, t) => i.i('_t', s[t]))
  c.e((i, t) => v.e(a => i.i(a, s[t][a])))
}

function vm(rs) {
  return function() {
    const query = this.$route.query

    this && (this != rs) && (this.rs = rs)
    const sr = this.$el || document.body.n('#pg')
    rs.sr = sr

    if (rs.db) {
      u.set(rs.db, query)
      rs.db.set = (i, t) => {
        const val = (t === void 0) ? i : {[i]: t}
        u.set(rs.db, val)

        // this.$data && u.set(this.$data, val)

        u.en(val).forEach(([k, v]) => u.va(v) && sr.i(k, v))
        
        if (!rs.list) return
        if (u.en(val).length > 1) return
        if (u.va(u.en(val)[0][1])) return
        list(rs, val)
      }

      rs.list && itm(rs)
      rs.db.set(rs.db)
    }

    rs.fn.init && (rs.fn.init.bind(this)())
  }
}

export { vm }
