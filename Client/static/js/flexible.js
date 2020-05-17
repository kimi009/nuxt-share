/* eslint-disable */
;(function(win, lib) {
  const doc = win.document
  const docEl = doc.documentElement
  let metaEl = doc.querySelector('meta[name="viewport"]')
  const flexibleEl = doc.querySelector('meta[name="flexible"]')
  let dpr = 0
  let scale = 0
  let tid
  const flexible = lib.flexible || (lib.flexible = {})
  //   var browser = {
  //     versions: (function() {
  //       var u = navigator.userAgent,
  //         app = navigator.appVersion
  //       return {
  //         trident: u.indexOf('Trident') > -1,
  //         presto: u.indexOf('Presto') > -1,
  //         webkit: u.indexOf('AppleWebKit') > -1,
  //         gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
  //         mobile: !!u.match(/AppleWebkit.*Mobile.*/),
  //         android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
  //         iPhone: u.indexOf('iPhone') > -1,
  //         iPad: u.indexOf('iPad') > -1
  //       }
  //     })()
  //   }
  const isMobile =
    win.navigator.appVersion.match(/android/gi) ||
    win.navigator.appVersion.match(/iphone/gi)
  if (metaEl) {
    console.warn('将根据已有的meta标签来设置缩放比例')
    const match = metaEl
      .getAttribute('content')
      .match(/initial\-scale=([\d\.]+)/)
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  } else if (flexibleEl) {
    const content = flexibleEl.getAttribute('content')
    if (content) {
      const initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
      const maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
    }
  }

  if (!dpr && !scale) {
    const isAndroid = win.navigator.appVersion.match(/android/gi)
    const isIPhone = win.navigator.appVersion.match(/iphone/gi)
    const devicePixelRatio = win.devicePixelRatio
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2
      } else {
        dpr = 1
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1
    }
    scale = 1 / dpr
  }

  docEl.setAttribute('data-dpr', dpr)
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute(
      'content',
      'initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    )
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl)
    } else {
      const wrap = doc.createElement('div')
      wrap.appendChild(metaEl)
      doc.write(wrap.innerHTML)
    }
  }

  function refreshRem() {
    let width = docEl.getBoundingClientRect().width
    if (!isMobile) {
      width = width > 1200 ? width : 1200
    }
    let rem
    if (width / dpr > 540) {
      width = width * dpr
    }
    if (isMobile) {
      rem = width / 7.5
    } else {
      rem = width / 19.2
    }
    docEl.style.fontSize = rem + 'px'
    flexible.rem = win.rem = rem
    // if (width / dpr > 540) {
    //   width = 540 * dpr
    // }
    // var temp = 640 // 设计稿宽度
    // // var rem = width / 10;  // 原始方案
    // var rem = (width / temp) * 100 // 我的方案
    // docEl.style.fontSize = rem + 'px'
    // flexible.rem = win.rem = rem
  }

  win.addEventListener(
    'resize',
    function() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        // 判断页面是否从缓存读取的onpageshow
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px'
  } else {
    doc.addEventListener(
      'DOMContentLoaded',
      function(e) {
        doc.body.style.fontSize = 12 * dpr + 'px'
      },
      false
    )
  }

  refreshRem()

  flexible.dpr = win.dpr = dpr
  flexible.refreshRem = refreshRem
  flexible.rem2px = function(d) {
    let val = parseFloat(d) * this.rem
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px'
    }
    return val
  }
  flexible.px2rem = function(d) {
    let val = parseFloat(d) / this.rem
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem'
    }
    return val
  }
})(window, window.lib || (window.lib = {}))


// // 设置 rem 函数
// function setRem () {

//     // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
//     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// //得到html的Dom元素
//     let htmlDom = document.getElementsByTagName('html')[0];
// //设置根元素字体大小
//     htmlDom.style.fontSize= htmlWidth/20 + 'px';
// }
// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//     setRem()
// }