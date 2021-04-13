import { vm } from './vm.js'

function gen(rs) {
  const opt = {
    data() { return rs.db }
  }

  opt.methods = u.set(rs.fn, { click: u.click })
  opt.mounted = vm(rs)

  opt.beforeDestroy = e => { rs.fn.last?.bind(this)(); u.qi('.screen') && u.qi('.screen').remove() }
  // opt.destoryed = e => u.qi('.screen') && u.qi('.screen').remove()

  return opt
}

u.vue = gen
