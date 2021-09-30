const qht = e => {
  const id = /\.([a-z]\d+)\s/g
  if (id.test(e)) return e.e(/\.(f\d+)\s/g, '<dd id=$1 class=$1>').e(/\.(e\d+)\s/g, '<dl id=$1 class=$1>\n').e(/^\//gm, '</dl>')
  if(e.startsWith('<', 0)) return e
  const l = e.t().t('\n').n(i => i.t())
    // .t((i, t) => i.t(/^\s*/)[0].i() / 2 + 'f' + t)
    .t(i => i.t(/^\s*/)[0].i() / 2 + i.t())
  o(l)

  const a = [l[0]]

  var pmt = [] // parent list
  var pi = -1 // parent index
  var tmp = a // potential parent
  for(var x = l.i(), i = 1; i < x; i++) {
      const t = l[i]
      const tp = [t]
      const c = t[0] - l[i - 1][0]
      if (c == 1) {
        pmt.e(tmp)
        pi++
        tmp.e(tp)
      } else if (c == 0) {
        pmt.i(-1).e(tp)
      } else if (c < 0) {
        pi += c
        pmt[pi].e(tp)
      }
      tmp = tp
    // o(c, pmt, tmp, pi, pmt[pi], u.t(a))
  }

  const tl = u.t(a).e(/"\d/g, '"')
  o(u.t(a), a, tl)
  // const dt = { '[': '(', ']': ')' }
  // const dt = { '[': '{', ']': '}' }
  const dt = {
    '\\[': '<div>',
    '\\]': '</div>',
    '\\"': '',
    '\\,': '',
    '<div>((\\w)\\d+)': '<div id="$1">',
    '>\\s': '>'
  }

  const h = tl.e(dt)
  // .e(/<div>(.+?)</, '<div id="$1" class="$1"><')
  o(h)
  return h
}

export { qht }
