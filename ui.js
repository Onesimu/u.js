import { qcs } from './dev/qcs.js'

// 插入shadowDom实现弹窗
const po = (html, css, opt) => {
  const style = `ul, li {display: block;margin: auto;padding: 0;}div, ::before, ::after {background-repeat: no-repeat;background-size: 100%;background-position: center;}.i {display: inline-block;}.p {position: relative;}.a {position: absolute;}.d {display: block;}.f {display: flex;}.g {display: grid;}.t {text-align: center;}`

  const c = qcs(css)

  const h = `<div><style>${style}</style><style>${c}</style>${html}</div>`

  const node = document.createElement('div')
  node.id = opt.id
  node.className = opt.id
  const sr = node.attachShadow({ mode: 'open' })
  sr.innerHTML = h
  const root = opt.root
  root.appendChild(node)

  const rs = opt.rs
  sr.qi('#po').on('click', u.click.bind(rs))
  rs.r = root

  rs.db.set = val => {
    u.set(rs.db, val)
    u.en(val).forEach(([k, v]) => u.va(v) && sr.qi('#po').i(k, v))
    u.en(rs.dom).forEach(([k, v]) => sr.qi(k).i('_t', rs.db[v]))
  }
  rs.db.set(rs.db)

  rs?.fn?.init?.()
  return sr
}

// 插入shadowDom实现弹窗
const pop2 = (html, css, opt) => {
  const style = `
    .mask {
      position: fixed;
      top: 0; right: 0; bottom: 0; left: 0;
      background-color: rgba(0, 0, 0, .5);
    }
    ul, li {display: block;margin: auto;padding: 0;}div, ::before, ::after {background-repeat: no-repeat;background-size: 100%;background-position: center;}.i {display: inline-block;}.p {position: relative;}.a {position: absolute;}.d {display: block;}.f {display: flex;}.g {display: grid;}.t {text-align: center;}
      `
  const c = qcs(css)

  const h = `<div class="mask"><style>${style}</style><style>${c}</style>${html}</div>`

  const hide = e => u.qi('.screen') && u.qi('.screen').remove()
  hide()

  const node = document.createElement('div')
  node.className = 'screen'
  const sr = node.attachShadow({ mode: 'open' })
  sr.innerHTML = h
  document.body.appendChild(node)

  if (opt && opt.init && typeof opt.init == 'function') {
    opt.init(node)
  }

  return { hide }
}

// 插入innerHTML实现弹窗, 自动添加类名前缀避免类名冲突
const pop3 = (content, type, opt) => {
  const style = `
    .screen {
      position: fixed;
      top: 0; right: 0; bottom: 0; left: 0;
      background-color: rgba(0, 0, 0, .5);
    }

    ul, li {display: block;margin: auto;padding: 0;}div, ::before, ::after {background-repeat: no-repeat;background-size: 100%;background-position: center;}.i {display: inline-block;}.p {position: relative;}.a {position: absolute;}.d {display: block;}.f {display: flex;}.g {display: grid;}.t {text-align: center;}
    .screen > .mask > * { margin-top: 30vh; }
  `

  const c = content.replace(/^\s*(\.\w+)/gmi, '.screen .mask $1')
  const html = `<div class="mask">
  <style>${style}</style>
  ${c}
  </div>`

  const hide = e => u.qi('.screen') && u.qi('.screen').remove()
  hide()

  const node = document.createElement('div')
  node.className = 'screen'
  node.innerHTML = html
  document.body.appendChild(node)

  if (opt && opt.init && typeof opt.init == 'function') {
    opt.init(node)
  }

  return { hide }
}

const pop = (content, type, opt) => {
  if (content.startsWith('<')) {
    const c = content.replace(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x / 37.5 + 'rem')
    if (HTMLElement.prototype.attachShadow) {
      return pop2(c, type, opt)
    } else {
      return pop3(c, type, opt)
    }
  }

  const style = `
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .mask .ad {
    max-width: 75%;
    position: relative;
  }

  .mask .ad .bg {
    width: 100%;
  }

  .mask .ad[type="ad"]::before {
    content: "广告";
    width: 29px;
    height: 16px;
    position: absolute;
    text-align: center;
    font-size: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    color: #fff;
  }

  .mask .fun {
    margin-top: -25%;
    z-index: 1;
  }

  .fun[type="ad"], .fun[type="img"] {
    display: none;
  }

  .mask .fun .confirm {
    display: inline-block;
    width: 100%;
    padding-top: 15%;
    text-align: center;
  }

  .mask .fun .cancel {
    display: inline-block;
    width: 100%;
    padding-top: 15%;
    text-align: center;
  }

  .mask .fun[type="row"] .confirm {
    width: 50%;
  }

  .mask .fun[type="row"] .cancel {
    width: 45%;
  }

  .mask .close {
    width: 10%;
    height: 6%;
    margin-top: 4%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Cpath d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='%23fff' stroke-miterlimit='10' stroke-width='20'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='20' d='M320 320L192 192M192 320l128-128'/%3E%3C/svg%3E");
  }`

  const html = `<div class="mask">
      <div class="ad">
        <img class="bg" referrerPolicy="no-referrer" referrer="no-referrer">
      <div class="fun">
        <div class="confirm"></div><div class="cancel"></div>
      </div>
      </div>
      <div class="close"></div>
      <style>${style}</style>
    </div>`

  // 定义弹窗关闭函数
  const hide = e => u.qi('.screen') && u.qi('.screen').remove()
  // 清除已有弹窗
  hide()
  const node = document.createElement('div')
  node.className = 'screen'
  node.innerHTML = html
  document.body.appendChild(node)

  // 设置图片地址
  if (content) {
    u.qi('.mask .bg').e(content)
  }
  // 设置弹窗类型, 默认为img
  const t = type || 'img'
  u.qi('.mask .fun').i('type', t)
  u.qi('.mask .ad').i('type', t)
  // 添加自定义样式
  if (opt && opt.style) {
    const c = qcs(opt.style).replace(/\b(\d+(\.\d+)?)px\b/ig, (m, x) => x / 37.5 + 'rem')
    u.qi('.mask').insertAdjacentHTML(`beforeend`, `<style>${c}</style>`)
  }

  // 绑定链接跳转地址和点击函数
  if (opt && opt.href) {
    u.qi('.mask .bg').on('click', e => { u.go(opt.href); hide() })
  }
  if (opt && opt.click && typeof opt.click == 'function') {
    u.qi('.mask .bg').on('click', e => { opt.click(); hide() })
  }
  // 绑定功能按钮和关闭按钮函数
  if (opt && opt.confirm && typeof opt.confirm === 'function') {
    u.qi('.mask .fun .confirm').on('click', e => { opt.confirm(); hide() })
  }
  if (opt && opt.cancel && typeof opt.cancel === 'function') {
    u.qi('.mask .fun .cancel').on('click', e => { opt.cancel(); hide() })
  }
  if (opt && opt.close && typeof opt.close === 'function') {
    u.qi('.mask .close').on('click', opt.close)
  }
  // 点击关闭按钮默认行为关闭弹窗
  u.qi('.mask .close').on('click', hide)
  // 返回弹窗对象引用，可以在外部调用关闭函数
  return { hide }
}

po.pop = pop
u.ui = po
