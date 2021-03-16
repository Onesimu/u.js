IDBRequest.prototype.then = function(t, e) {
  this.onsuccess = () => t.bind(this)(this.result)
  this.onerror = () => e.bind(this)(this.error)
  return this
}

function idb(dn, tn) {
  // if (this.db) {return (this)}
  this.tn = tn
  const request = indexedDB.open(dn, 1)
  request.onsuccess = e => this.db = e.target.result
  request.onupgradeneeded = e => {
    const db = e.target.result;
    if (db.objectStoreNames.contains(this.tn)) return
    db.createObjectStore(this.tn)
  }
}

Object.assign(idb.prototype, {
  st(){return this.db.transaction(this.tn, 'readwrite').objectStore(this.tn)},
  set(key, value) {return this.st().put(value, key)},
  get(key) {return this.st().get(key)},
  del(key) {return this.st().delete(key)},
  keys() {return this.st().getAllKeys()},
  clear() {return this.st().clear()}
})

window.fs = new idb('udb', 'db')

// fs.ck = function(i, t, n){
//   if(t === void 0) return getCookie(i)
//   setCookie(i, t, n)
// }
