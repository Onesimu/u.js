const http = require('http')
const url = require('url')
const cfg = {
  prot: 9913,
}
console.log(`
在浏览器中运行系统命令.
例: 运行 start notepad 命令, 并使用 jsonp 回调函数或为 call .

fetch('http://localhost:${cfg.prot}?cb=call&cmd=start notepad').then(async res => console.log(await res.text()))

{
  "code": 0, // 命令错误码
  "stdout": "123", // 终端标准输出
  "stderr": "", // 终端错误输出
  "err": undefined, // ev 为 catch 时有值
  "ev": "exit" // 事件类型 close|exit|catch(发生运行错误)
}

`)
http.createServer((req, res) => {
    req.headers.origin && res.setHeader(`Access-Control-Allow-Origin`, req.headers.origin)
    const arg = url.parse(req.url, true).query
    const { cmd, cb } = arg
    if (!cmd) {
      sendData(res, cb, o2s(arg))
    }
    try {
      console.log(`cmd\r\n ${cmd}`)
      const { spawn } = require('child_process')
      const cp = spawn(cmd, { shell: true })

      let stdout = ''
      cp.stdout.on('data', data => {
        console.log(String(data))
        stdout += data
      })
      let stderr = ''
      cp.stderr.on('data', data => {
        console.log(String(data))
        stderr += data
      })

      cp.on('close', code => {
        sendData(res, cb, o2s({ code, stdout, stderr, ev: 'close' }))
      })

      cp.on('exit', code => {
        sendData(res, cb, o2s({ code, stdout, stderr, ev: 'exit' }))
      })

      req.on('close', err => {
        console.log(`stdout\r\n ${stdout}`)
        console.log(`stderr\r\n ${stderr}`)
        cp.kill()
      })
    } catch (error) {
      // res.end(cb + `(${o2s({ err: error, ev: 'catch' })})`)
      sendData(res, cb, o2s({ err: error, ev: 'catch' }))
    }
  }).listen(cfg.prot, () => {
    console.log(`http://localhost:${cfg.prot}/`)
  })

function sendData(res, cb, data) {
  if(cb) {
    res.end(cb + `(${data})`)
  } else {
    res.end(data)
  }
}

function o2s(o) {
  return JSON.stringify(o, null, 2)
}