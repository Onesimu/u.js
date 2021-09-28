const qht = e => {
  const id = /\.([a-z]\d+)\s/g
  if (id.test(e)) return e.e(/\.(f\d+)\s/g, '<dd id=$1 class=$1>').e(/\.(e\d+)\s/g, '<dl id=$1 class=$1>\n').e(/^\//gm, '</dl>')
  if(e.startsWith('<', 0)) return e
  const l = e.t().t('\n').n(i => i.t()).t(i => i.t(/^\s*/)[0].i() / 2 + i.t())
  o(l)

  const a = []
  a.e(l[0])
  // for (var i of u.n(l.i()).t(1, -1)) {
  //   const t = l[i];
  //   const e = t[0];
  //   const c = l[i + 1][0] - e
  //   if (c == 1) a.e([t])
  //   if (c == 0) a.i(-1).e([t])
  //   if (c == -1) a.i(-1).e([t])
  // }

  var pmt = a
  var tmp = a
  for(var x = l.i(), i = 1; i < x; i++) {
    // if (i == 0) {a.e(l[i])}
    // else if (i == x - 1) {a.i(-1).e([l[i]])}
    // else {
      const t = l[i];
      const e = t[0];
      const c = e - l[i - 1][0]
      // if (c == 1) { tmp = [t]; a.e(tmp)}
      if (c == 1) {
        if (i > 2 && e - l[i - 2][0] == 2) pmt = tmp
        const tp = [t]
        tmp.e(tp)
        tmp = tp
      } else
      if (c == 0) {
        const tp = [t]
        a.i(-1).e(tp)
        tmp = tp
      } else
      if (c == -1) {
        // pmt = tmp
        const tp = [t]
        pmt.e(tp)
        tmp = tp
      }
    // }
    o(c, u.t(a), pmt, tmp)
  }
  // a.i(-1).e([l.i(-1)])

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
