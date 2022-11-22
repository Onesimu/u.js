String.prototype.e = String.prototype.replace
const srct = it => it.e(/^\s*[\/]{2}/gm, '#').e(/\$/gm, '#').e(/^(\s*if .+?) rn /gm, '$1 then return ').e(/\brn\b/gm, 'return')
      .e(/^\s*[\/]{2}/gm, '#').e(/^\s*(import .+)$/gm, '``$1``\n').e(/^\s*(export default)/gm, '``$1``')
const dett = it => it.e(/;$/gm, '').e(/function\s*\((.*)\)/g, '($1) => ')      