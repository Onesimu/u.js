const qjs = e => {

  const dt = {
    val: 'const',
    fn: 'function',
    rn: 'return',
    // at: 'await',
    // as: 'async',
    aw: 'await',
    ac: 'async',
    ay: 'async',
    ti: 'this',
    es: 'else'
  }
  return e.e(dt)
}

export {qjs}
