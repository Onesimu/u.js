const ht2cs = e => {
  const node = /^(\s*)<(\w+)(?:\sis=(?:\S+))?(?:\sid="?(\w+)"?)?(?:\sclass=['"]?([^"']+)['"]?)?([^>]+?)?>(.*)?(<\/\w+>)?\s*$/
  o(e.e(/<\/\w+>/g, '').t().t('\n').n(i => i.t()).t(i => {
    const [p, p0, p1, p2, p3, p4, p5] = i.t(node)
    const q1 = p1
    const q2 = p2 ? '#' + p2 : ''
    const q3 = p3 ? "." + p3.e(/\s/g, '.').t() : ''
    const q4 = p4 && p4.t() ? '(' + p4.t() +')' : ''
    const q5 = p5 ? ' ' + p5 : ''
    // return `${p0}${p1}#${p2}.${p3}(${p4}) ${p5}`
    return [p0, q1, q2, q3, q4, q5].t('').e('"', "'")
      .e( /\n(\n)*\s*(\n)*\n/g, '\n')
      .e(/^(\s*)div#/gm, '$1#')
  }).t('\n'))
  // o(e.e(/<\/\w+>/g, '').e(node, (p, p0, p1, p2, p3, p4, p5) => {}, 1))
}
const qht = e => {
  // const id = /\.([a-z]\d+)\s/g
  // if (id.test(e)) return e.e(/\.(f\d+)\s/g, '<dd id=$1 class=$1>').e(/\.(e\d+)\s/g, '<dl id=$1 class=$1>\n').e(/^\//gm, '</dl>')

  if (e.startsWith('<', 0)) {
    // dt = u.en(dts.t('\n').t().t(i => i.t().t(' ')))
    // dt = u.en(dt, -1)
    // o(dt)
    // const idt = e.e('"', "'").e(/<\/\w+>/g, '"],').e('<', '["').e('>', '",')
    const idt = e.e('"', "'").e(/<\/\w+>/g, '],').e('<', '[')
      .e(/>$/gm, ',').e('>]', ']').e('>', ' ').e(/],(\s*)],/g, ']$1],').e(/],(\s*)],/g, ']$1],')
      .e('\\[', '["').e('\\]', '"]').e(/,$/gm, '",')
      .e(/^(\s*)"\]",/gm, '$1],').e(/"\]",$/gm, '"],').e(/^(\s*)"\]$/gm, '$1]').t(0, -1)
    o(e)
    o(idt)
    o(u.t(idt))
    // ht2cs(e)
    return e
  }

  const l = e.t().t('\n').n(i => i.t())
    .t(i => {
      // o(i.e(node, '$1 id=$2 $3>$4', 1))
      // const b = i.t(/^\s*/)[0].i() / 2
      // return (i.t().e(node, (p, p0, p1, p2, p3, p4) => { }, 1))
      const node = /^(\s*)(\w+)?(#\w+)?(\.[^(^\s]+)?(\(.+?\))?\s?(.*)/
      const [p, p0, p1, p2, p3, p4, p5] = i.t(node)
      const b = p0 ? p0.i() / 2 : 0
      const q1 = p1 && p1 != 'div' ? 'div is=' + p1 : 'div'
      const q2 = p2 ? 'id=' + p2.t(1) : ''
      const q3 = p3 ? "class='" + p3.e(/\./g, ' ').t() + "'" : ''
      const q4 = p4 ? p4.t(1, -1) : ''
      const q5 = p5 ? '>' + p5 : '>'
      return b + [q1, q2, q3, q4, q5].t(' ').t().e(/\s+>/, '>')
    })
  // o(l)

  const a = [l[0]]

  var pmt = [] // parent list
  var pi = -1 // parent index
  var tmp = a // potential parent
  for(var x = l.i(), i = 1; i < x; i++) {
     // o(+t.t(/^\d+/)[0])
      const t = l[i]
      const tp = [t]
      const c = t[0] - l[i - 1][0]
      if (c == 1) {
        pmt.e(tmp)
        pi++
        tmp.e(tp)
      } else if (c == 0) {
        // pmt.i(-1).e(tp)
        var n = pmt.i()
        for (; n-- && pmt[n][0][0] != t[0] - 1;) {}
        if (n > -1) pmt[n].e(tp)
      } else if (c < 0) {
        // pi += c
        // pmt[pi].e(tp)
        for (var n = pmt.i(); n--;) {
          if (pmt[n][0][0] == t[0] - 1) {
            pmt[n].e(tp); break;
          }
        }
      }
      tmp = tp
    // o(c, tmp, pmt, pi, pmt[pi], u.t(a))
  }

  const tl = u.t(a, null, 2).e(/"\d/g, '"')
    .e(/\[[\s]*?"/g, '["').e(/"[\s]*?\]/g, '"]')
  // o(u.t(a, null, 2), a)
  o(tl)
  // const dt = { '[': '(', ']': ')' }
  // const dt = { '[': '{', ']': '}' }
  // const dt = {
  //   '\\[': '<',
  //   '\\]': '</div>',
  //   '\\"': '',
  //   '\\,': '',
  // }

  const dts = `
    ] </div>
    [ <
`
  var dt = u.en(dts.t('\n').t().t(i => i.t().t(' ')).e(i => i[0] =  '\\' + i[0]) )

    // .e(/<[\s]*?div/g, '<div')
  const h = tl.e(dt).e('"', '').e(',', '')
  .e(/<div is=(\S+?)(\s(.+?))?>(.*?)<\/div>/g, '<$1 $3>$4</$1>')
  .e(/<div is=(\S+?) ([^>]*)>([\s\S]*?)<\/div>/g, '<$1 $2>$3</$1>')
  .e(/\s+>/g, '>')
  // .e(/<div is=(\S+?) ([^>]*)>(<div[^>]*>[\s\S]*?<\/div>)<\/div>/g, (p, p0, p1, p2, p3, p4) => { o(p0, p1, p2); return `<${p0} ${p1}>${p2}</${p0}>`}, 1)
  // .e(/<div is=(\S+?)\s(.+?)>(.*?)<\/div>/g, '<$1 $2>$3')
  // o(h.e('>', '>\n'))
  o(h)
  ht2cs(h)
  // o(h.t(/<(?:(?:\/?[A-Za-z]\w*\b(?:[=\s](['"]?)[\s\S]*?\1)*)|(?:!--[\s\S]*?--))\/?>/g, '<$1 $2>$3</$1>'))
  return h
}

export { qht }
