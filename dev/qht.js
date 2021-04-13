const qht = e => {
  if(e.startsWith('<', 0)) return e
  const l = e.t().t('\n').n(i => i.t()).t(i => i.i(/^\s*/)[0].i() / 2 + i.t())
  o(l)

  const a = []
  a.e(l[0])
  for (var i of u.n0(l.i()).t(1, -1)) {
    // for(var x = l.i(), i = 1; i < x - 1; i++){
    // if (i == l.i() - 1) {a.i(-1).e([l[i]]); break}
    // if (i == 0) {a.e(l[i]); break}

    const t = l[i];
    const e = t[0];
    const c = l[i + 1][0] - e
    if (c == 1) a.e([t])
    if (c == 0) a.i(-1).e([t])
    if (c == -1) a.i(-1).e([t])
  }
  a.i(-1).e([l.i(-1)])

  const tl = u.t(a).e(/"\d/g, '"')
  o(a, tl)
  // const dt = { '[': '(', ']': ')' }
  // const dt = { '[': '{', ']': '}' }
  const dt = {
    '\\[': '<div>',
    '\\]': '</div>',
    '\\"': '',
    '\\,': '',
    '<div>((\\w)\\d+)': '<div id="$1" class="$2 $1">',
    '>\\s': '>'
  }

  const h = tl.e(dt).e(/<div>(.+?)</, '<div id="$1" class="$1"><')
  o(h)
  return h
}

export { qht }
