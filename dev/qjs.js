const qjs = e => {

  const dt = {
    val: 'const',
    fn: 'function',
    rn: 'return',
    bool: 'boolean',
    // at: 'await',
    // as: 'async',
    // ac: 'async',
    aw: 'await',
    ay: 'async',
    ti: 'this',
    es: 'else',
    ei: 'else if',
    ex: 'export',
    im: 'import',
    del: 'delete',
    tof: 'typeof',
    sw: 'switch',
    de: 'default',
    // '|': 'break;case',
    // '|_': 'break;default',
    cat: 'catch',
    fin: 'finally'
    // /^\s*(//)?\s*console\.log\(.+\)\s*$/
    // src.e(/\|_/g, 'break;default').e(/^\|/gm, 'break;case').e(/{[\s\S]+?break;/, '{\n')
  }
  return e.e(dt)
}

export {qjs}
