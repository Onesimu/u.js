const dt = {
  k: {
    d: 'display',
    l: 'left',
    r: 'right',
    t: 'top',
    b: 'bottom',
    m: 'margin',
    ml: 'margin-left',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    p: 'padding',
    pl: 'padding-left',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    bg: 'background',
    bgc: 'background-color',
    bgi: 'background-image',
    bgr: 'background-repeat',
    bgp: 'background-position',
    bgs: 'background-size',
    bgo: 'background-origin',
    bgl: 'background-clip',
    c: 'color',
    bd: 'border',
    bl: 'border-left',
    br: 'border-right',
    bt: 'border-top',
    bb: 'border-bottom',
    bs: 'border-style',
    bw: 'border-width',
    bc: 'border-color',
    bo: 'border-radius',
    btl: 'border-top-left-radius',
    btr: 'border-top-right-radius',
    bbr: 'border-bottom-right-radius',
    bbl: 'border-bottom-left-radius',
    ol: 'outline',
    f: 'font-size',
    ff: 'font-family',
    fs: 'font-style',
    fw: 'font-weight',
    ta: 'text-align',
    ti: 'text-indent',
    ps: 'position',
    o: 'opacity',
    ov: 'overflow',
    zm: 'zoom',
    z: 'z-index',
    h: 'height',
    w: 'width',
    wm: 'min-width',
    wx: 'max-width',
    hm: 'min-height',
    hx: 'max-height',
    lh: 'line-height',
    v: 'vertical-align',
    wh: 'white-space',
    ws: 'word-spacing',
    ls: 'letter-spacing',
    ani: 'animation',
    tm: 'transform',
    tn: 'transition',
    bsd: 'box-shadow',
    tsd: 'text-shadow',
    con: 'content',
    pe: 'pointer-events',
    fl: 'float',
    ai: 'align-items',
    jc: 'justify-content',
    fd: 'flex-direction',
    fr: 'flex-wrap',
    bx: 'box-sizing'
  },
  v: {
    a: 'auto',
    s: 'solid',
    d: 'dashed',
    bd: 'bold',
    tt: 'transparent',
    cc: 'currentColor',
    n: 'normal',
    c: 'center',
    no: 'none',
    h: 'hidden',
    ih: 'inherit',
    l: 'left',
    t: 'top',
    r: 'right',
    b: 'bottom',
    ab: 'absolute',
    re: 'relative',
    ib: 'inline-block',
    bl: 'block',
    nw: 'nowrap',
    st: 'flex-start',
    ed: 'flex-end',
    col: 'column',
    wr: 'wrap',
    if: 'inline-flex',
    cb: 'content-box',
    bb: 'border-box'
  }
};

const cl = {
  dn: 'display: none',
  di: 'display: inline',
  i: 'display: inline-block',
  db: 'display: block',
  ma: 'margin: auto',
  m0a: 'margin: 0 auto',
  ma0: 'margin: auto 0',
  mla: 'margin-left: auto',
  mra: 'margin-right: auto',
  fl: 'float: left',
  fr: 'float: right',
  bb: 'box-sizing: border-box',
  b: 'font-weight: bold',
  fi: 'font-style: italic',
  fn: 'font-weight: normal; font-style: normal',
  tc: 'text-align: center',
  tl: 'text-align: left',
  tr: 'text-align: right',
  tj: 'text-align: justify',
  cl: 'clear: both',
  ab: 'position: absolute',
  re: 'position: relative',
  fx: 'position: fixed',
  vt: 'vertical-align: top',
  vm: 'vertical-align: middle',
  vb: 'vertical-align: bottom',
  oh: 'overflow: hidden',
  oa: 'overflow: auto',
  vh: 'visibility: hidden',
  vv: 'visibility: visible',
  pre: 'white-space: pre',
  ww: 'white-space: nowrap',
  // table: 'display: table; table-layout: fixed; width: 100%',
  // center: 'position: absolute; top: 0; bottom: 0; right: 0; left: 0; margin: auto',
  // toe: 'text-overflow: ellipsis; white-space: nowrap; overflow: hidden',
  // clip: 'position: absolute; clip: rect(0 0 0 0)',
  pn: 'pointer-events: none',
  toe: 'text-overflow: ellipsis'
}

const de = function(i, t, e) {
  return u.en(u.en(i).filter(k => k[0] != t))
}

const qcs = e => {

  const l = e.e(/bgi:/g, 'background-image:').e(/lg\(/g, 'linear-gradient(').e(/\/\*(\s|.)*?\*\//g, '').replace(/;base64,/g, '%%%%%%')
    .t().t('}').n(Boolean).t(i => {
    const [s, v] = i.t('{')
    const s1 = ['_s', s.t()]
    const v1 = v.t().t(';').n().t(i => i.t(': ').t(i => i.t()))
    v1.e(s1)
    return u.en(v1)
  })

  const ln = l.t(i => u.en(u.en(i).t(([k, v]) => {
    // if (k == '_s' || v.n('(') || !dt.k[k]) return [k, v]
    if (k == '_s') return [k, v]
    if (k == '_c') return [k, v]

    if (v.i('(')) return [dt.k[k] || k, v]
    if (!dt.k[k]) return [k, v]
    else {
      const nv = v.t(' ').t(i => {
        if (isNaN(i)) return (dt.v[i] || i)
        if (i == 0) return i
        if (/^(?:z|o|fw)$/.test(k)) return i
        return i + 'px'
      }).t(' ')
      return [dt.k[k], nv]
    }
  })))
  // .t(i => rn(i, dt.k))

  const lnc = ln.t(i => {
    if (i['_c']) {
      // const c = u.en(i['_c'].t(' ').t(i => cl[i].t(';').t(i => i.t().t(': '))))
      const c = u.en(i['_c'].t(' ').t(i => cl[i].t(': ')))
      return u.set(i.e('_c'), c)
    }
    return i
  })
  const c = lnc.t(i => i['_s'] + ' { ' + u.en(de(i, '_s')).t(i => i.t(': ')).t('; ') + '; }').t('\n')
  return c.replace(/%%%%%%/g, ';base64,')
}

export {qcs}
