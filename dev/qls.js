String.prototype.e = String.prototype.e || String.prototype.replace
const srct = it => it.e(/^\s*[\/]{2}/gm, '#')
.e(/".*?\$.*?"/gm, i => i.e('\\$', '#'))
.e(/^(\s*if .+?) rn([^\n]*)$/gm, '$1 then return $2')
.e(/\brn\b/gm, 'return')
.e(/^\s*(import .+)$/gm, '\n``$1``\n').e(/^\s*(export default)/gm, '\n``$1``')
            
const dett = it => it.e(/;$/gm, '').e(/:\s*function/g, '')
.e(/function\s*\((.*)\)/g, '($1) => ')
.e(/\((\w+)\) => /g, '$1 => ')
.e(/=>\s*?\{\s*?return ([\S ]+)\s*?\}\)/g, '=> $1)')
.e(/\{\n\s*(.+)\n\s*\}/g, '{ $1 }')

export { srct, dett }