// Base64 转 Blob
const base64ToBlob = base64 => {
  let arr = base64.split(','), type = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){u8arr[n] = bstr.charCodeAt(n);}
  return new Blob([u8arr], {type});
}
const b64toBlob = (base64, type = 'application/octet-stream') => fetch(`data:${type};base64,${base64}`).then(res => res.blob())

function getSystemInfoSync(){
    var screen = window.screen
    var pixelRatio = window.devicePixelRatio
    // 横屏时 iOS 获取的屏幕宽高颠倒，进行纠正
    const screenFix = /^Apple/.test(navigator.vendor) && typeof window.orientation === 'number'
    const landscape = screenFix && Math.abs(window.orientation) === 90
    var screenWidth = screenFix ? Math[landscape ? 'max' : 'min'](screen.width, screen.height) : screen.width
    var screenHeight = screenFix ? Math[landscape ? 'min' : 'max'](screen.height, screen.width) : screen.height
    var windowWidth = Math.min(window.innerWidth, document.documentElement.clientWidth, screenWidth) || screenWidth
    var windowHeight = window.innerHeight
  return {
    windowWidth,
    windowHeight,
    pixelRatio,
    screenWidth,
    screenHeight,
  }
}

u.ut = function(i, t, e){
  return i + ''
}

// u.en(fd.t('\n').t(i => i.t('\t')).t(i => [i[1], i[2]]))
