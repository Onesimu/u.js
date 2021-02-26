class DB {

  constructor() {
    this.ready()
  }

  ready() {
    const then = function(t, e) {
      const to = () => t.call(this, this.result)
      const er = () => e.call(this, this.error)
     this.onsuccess = to
     this.onerror = er
    // this.addEventListener('success', to)
    // this.addEventListener('error', er)
      return this
    }
    IDBRequest.prototype.then = then

    // if (this.db) {
    //   return (this)
    // }
    const request = window.indexedDB.open('udb', 1);
    this.name = 'db';

    request.onsuccess = (event) => {
      this.db = event.target.result;
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      // this.db = db
      if (!db.objectStoreNames.contains(this.name)) {
        db.createObjectStore(this.name);
      }
    };
  }

  st(){
    return this.db.transaction(this.name, 'readwrite').objectStore(this.name)
  }

  set(key, value) {
    return this.st().put(value, key)
  }

  get(key) {
    return this.st().get(key)
  }

  del(key) {
    return this.st().delete(key)
  }

  key(index) {
    return this.st().getAllKeys().then(t => t[index])
  }

  keys() {
    return this.st().getAllKeys()
  }

  clear() {
    return this.st().clear()
  }

}

window.disk = new DB()

function setCookie(name, value, time) {
  var Days = time || 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value || '') + ';expires=' + exp.toGMTString() + ';path=/'
  // u && u.db && (u.db[name] = value)
}
function getCookie(name) {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const result = (arr = document.cookie.match(reg)) ? unescape(arr[2]) : ''
  return decodeURIComponent(result)
}
function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  var hostname = window.location.hostname
  if (cval != null) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${hostname.split('.').slice(-2).join('.')}`
  }
}
// 设置过期时间为次日凌晨
function setCookieData(name, value) {
  var ctuskytime = new Date()
  ctuskytime.setDate(ctuskytime.getDate() + 1)
  ctuskytime.setHours(0)
  ctuskytime.setMinutes(0)
  ctuskytime.setSeconds(0)
  console.log('ctuskytime', ctuskytime.toGMTString())
  console.log('bjb', format('yyyy-MM-dd HH:mm:ss', ctuskytime))
  document.cookie = name + '=' + escape(value || '') + ';expires=' + ctuskytime.toGMTString()
}

disk.ck = function(i, t, n){
  if(t === void 0) return getCookie(i)
  setCookie(i, t, n)
}
