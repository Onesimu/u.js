const qht = e => {
  const id = /\.([a-z]\d+)\s/g
  if (id.test(e)) return e.e(/\.(f\d+)\s/g, '<dd id=$1 class=$1>').e(/\.(e\d+)\s/g, '<dl id=$1 class=$1>\n').e(/^\//gm, '</dl>')
  if(e.startsWith('<', 0)) return e
  const l = e.t().t('\n').n(i => i.t())
    .t(i => {
      const b = i.t(/^\s*/)[0].i() / 2
      // o(i.match(/^\s*(\w+)?(#\w+)?(\(.+?\))?\s?(.*)/))
      // o(i.e(/^\s*(\w+)?(#\w+)?(\(.+?\))?\s?(.*)/, '$1 id=$2 $3>$4', 1))
      return (i.e(/^\s*(\w+)?(#\w+)?(\(.+?\))?\s?(.*)/, (m, p1, p2, p3, p4) => {
        const q1 = p1 || 'div'
        const q2 = p2 ? 'id=' + p2.t(1) : ''
        const q3 = p3 ? p3.t(1, -1) : ''
        const q4 = p4 ? '>' + p4 : '>'
        return b + [q1, q2, q3, q4].t(' ').t()
      }, 1))

      // const t = i.t().t('(')
      // const t1 = t[0].e(/(\w+)?#(\w+)/, '$1 id=$2')
      // // const t2 = t[1] ? ' ' + t[1].e(')', '>', 1) : '>'
      // var t2 = '>'
      // if (t[1]) {
      //   // o(t[1].t(')')[1])
      //   t2 = ' ' + t[1].e(')', '>', 1)
      // }
      // return b + (t1 + t2).t()
    })
    // .t(i => i.t(/^\s*/)[0].i() / 2 + i.t())
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
    '\\[': '<div ',
    '\\]': '</div>',
    '\\"': '',
    '\\,': '',
    // '<div>((\\w)\\d+)': '<div id="$1">',
    '<div>#(\\w+)': '<div id="$1">',
    '>\\s': '>'
  }

  const h = tl.e(dt)
  // .e(/<div>(.+?)</, '<div id="$1" class="$1"><')
  o(h)
  return h
}

export { qht }
