const jn = data => {
  const list = []

  const ncss = data.e(/\/\* identical to box height.+ \*\//g, '')
  .e(/position: absolute;/g, '').e(/font-family: .+;/g, '')
  .e(/font-style: normal;/g, '').e(/font-weight: normal;/g, '')
  .e(/font-feature-settings: .+;/g, '').e(/font-weight: 500;/g, 'font-weight: bold;')
  .e(/display: flex;/g, '').e(/align-items: center;/g, '').e(/text-transform: .+;/g, '')
  .e(/box-sizing: .+;/g, '')
  .e(/background: url/g, 'background-image: url').e(/background: #/g, 'background-color: #')
  .e(/background: rgb/g, 'background-color: rgb').e(/background: linear-gradient/g, 'background-image: linear-gradient')
  .e(/\b(\d+(\.\d+)?)%/ig, (m, x) => (375 * x / 100) + 'px')
  .e(/line-height: .+;/g, '').e(/height/g, 'line-height')

  const parts = ncss.split(/^\s*\/\*([\s\S]+?)\*\/$/gm)
  // log(parts.join('\n'))

  parts.forEach((it, index) => {
    if(index % 2 == 1){
      const name = it.trim()
      const content = parts[index + 1]
      const box = parts[index - 1]
      if(content.includes('font')){
       list.push([name, `{${content}\n${box}}`])
      }
    }
  })
  return list
}

const trans = json => {
  const info = json
  // .reverse()

  const htm = info.map((it, i) => `<div id="i${i}" class="i t i${i}">${it[0]}</div>`)
  const cs = info.map((it, i) => `.i${i} ${it[1]}`)

	var css = ''

  css = cs.join('\n')

  css = css.e(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x == 0 ? 0 : Math.round(x) + 'px')
  // css = css.e(/\brgba\((.+?)\)/ig, (m, x) => 'rgba(' +  x.split(',').map(it => Math.round(it)).join(', ') + ')')

    // const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
  // if(info[0].width == 375){
  //   css = css.e(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x * 2 + 'px')
  // css.e(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x / 100 + 'rem')
  // css.e(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x > 5 ? x / (750 / 100) + 'vw' : x + 'px')
  // css.e(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x > 5 ? Number(x / (750 / 100)).toFixed(2) + 'vw' : x + 'px')
  // }
  css = css.e(/{/g, " { ").e(/\;/g, "; ").e(/\s+/g," ").e(/\n/g,"").e(/}/g,"}\n").e(/\*\//g,"*/\n")

  css = css.e(/line-height:/g, 'lh:').e(/height:/g, 'h:').e(/width:/g, 'w:')
  .e(/left:/g, 'l:').e(/top:/g, 't:').e(/right:/g, 'r:').e(/bottom:/g, 'b:')
  .e(/font-size:/g, 'f:').e(/font-weight:/g, 'fw:').e(/fw: bold;/g, 'fw: bd;')
  .e(/background-color:/g, 'bgc:').e(/background-image:/g, 'bgi:').e(/border-radius:/g, 'bo:')
  .e(/border:/g, 'bd:').e(/box-shadow:/g, 'bsd:')
  .e(/color:/g, 'c:').e(/px;/g, ';').e(/linear-gradient/g, 'lg')
  .e(/\bl: .+?;/g, '').e(/\bt: .+?;/g, '').e(/\br: .+?;/g, '').e(/\bb: .+?;/g, '')
  .e(/\s{2,}/g, ' ').e(/}/g, '}\n')

  return ['<tpl>', htm.join('\n'), '</tpl>', '<style scoped>', css, '</style>'].join('\n')
}

export {jn, trans}
