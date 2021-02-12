import { vm } from './vm.js'

function gen(rs) {
  const opt = {
    data() { return rs.db }
  }

  opt.methods = u.set(rs.fn, { click: u.click })
  opt.mounted = vm(rs)

  opt.beforeDestroy = rs.fn.last?.bind(this)

  return opt
}

u.vue = gen
